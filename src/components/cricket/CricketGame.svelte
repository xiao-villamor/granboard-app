<script lang="ts">
  import { onMount } from 'svelte';
  import { SEGMENT_SECTIONS, SEGMENT_TYPES, CRICKET_NUMBERS } from '@/constants/segments';
  import { ANIMATION_TIMINGS } from '@/constants/animations';
  import {
    type Player,
    type CricketGameMode,
    type CricketGameState,
    createInitialGameState,
    cloneGameState,
  } from '@/services/cricket';
  import { CricketGameMode as CricketGameModeEnum } from '@/services/cricket';
  import type { Segment } from '@/services/boardinfo';

  // Stores
  import { createCricketGameState } from '@/stores/cricketGameState.svelte';
  import { settings } from '@/stores/settings.svelte';
  import { animations } from '@/stores/animations.svelte';
  import { createGameRoom } from '@/stores/gameRoom.svelte';

  // Serialization
  import { serializeCricketState, serializeSegments, serializeSegment } from '@/services/serialization';

  // Services
  import { Granboard } from '@/services/granboard';
  import { SOUND_PATHS } from '@/constants/sounds';

  // Components
  import GameHeader from '@/components/shared/GameHeader.svelte';
  import GameOverBanner from '@/components/shared/GameOverBanner.svelte';
  import CurrentPlayerPanel from '@/components/shared/CurrentPlayerPanel.svelte';
  import ScoreBoard from './ScoreBoard.svelte';
  import HitAnimation from '@/components/shared/HitAnimation.svelte';
  import TurnSummary from '@/components/shared/TurnSummary.svelte';

  import LegendDialog from './LegendDialog.svelte';
  import ShareGameDialog from '@/components/shared/ShareGameDialog.svelte';
  import AnimationOverlay from '@/components/shared/AnimationOverlay.svelte';
  import SettingsGameActions from '@/components/01/SettingsGameActions.svelte';
  import GlobalSettingsDialog from '@/components/shared/GlobalSettingsDialog.svelte';

  // ─── Animation states ──────────────────────────────────────────
  let showTurnSummary = $state(false);
  let turnSummaryData = $state<{ player: any; hits: any[] } | null>(null);
  let showLegend = $state(false);
  let showShare = $state(false);

  // ─── Sound effects ─────────────────────────────────────────────
  let audioContext: AudioContext | null = null;
  const soundRegistry: Record<string, HTMLAudioElement> = {};

  const SOUND_PATH_MAP: Record<string, string> = {
    'dart-miss': SOUND_PATHS.DART_MISS,
    'bull': SOUND_PATHS.BULL,
    'double-bull': SOUND_PATHS.DOUBLE_BULL,
    'game-over': SOUND_PATHS.GAME_OVER,
    'victory': SOUND_PATHS.VICTORY,
    'goat': SOUND_PATHS.GOAT,
    'horse': SOUND_PATHS.HORSE,
  };

  function getOrCreateAudio(type: string, path: string): HTMLAudioElement {
    if (!soundRegistry[type]) {
      const audio = new Audio(path);
      audio.preload = 'auto';
      soundRegistry[type] = audio;
    }
    return soundRegistry[type]!;
  }

  function playSifflet() {
    if (!settings.soundEnabled) return;

    // Reuse the sifflet audio element via the sound registry to prevent memory leaks
    const audio = getOrCreateAudio('sifflet', SOUND_PATHS.SIFFLET);
    // Clone the audio node so multiple whistles can overlap without cutting each other off
    const clone = audio.cloneNode() as HTMLAudioElement;
    clone.volume = settings.volume;
    clone.play().catch(() => {
      // Ignore errors if audio can't play
    });
  }

  function playSound(type: string) {
    if (!settings.soundEnabled) return;

    // Handle special whistle cases (multiple sounds)
    if (type === 'whistle-single') {
      playSifflet();
      return;
    }

    if (type === 'whistle-double') {
      playSifflet();
      setTimeout(() => playSifflet(), ANIMATION_TIMINGS.WHISTLE_DELAY);
      return;
    }

    if (type === 'whistle-triple') {
      playSifflet();
      setTimeout(() => playSifflet(), ANIMATION_TIMINGS.WHISTLE_DELAY);
      setTimeout(() => playSifflet(), ANIMATION_TIMINGS.WHISTLE_DELAY * 2);
      return;
    }

    const soundPath = SOUND_PATH_MAP[type];
    if (!soundPath) return;

    const audio = getOrCreateAudio(type, soundPath);
    audio.volume = settings.volume;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore errors if audio can't play
    });
  }

  // ─── Player turn history ──────────────────────────────────────
  type PlayerTurn = { round: number; hits: Segment[] };
  type PlayerTurnHistoryMap = { [playerId: string]: PlayerTurn[] };

  let turnHistory = $state<PlayerTurnHistoryMap>({});

  function addTurn(player: Player, round: number, hits: Segment[]) {
    if (hits.length === 0) return;

    const playerTurns = turnHistory[player.id] || [];
    const roundExists = playerTurns.some((turn) => turn.round === round);
    if (roundExists) {
      console.log(`Warning: Round ${round} already recorded for player ${player.name}`);
      return;
    }

    turnHistory = {
      ...turnHistory,
      [player.id]: [...playerTurns, { round, hits }],
    };
  }

  function getPlayerHistory(playerId: string): PlayerTurn[] {
    return turnHistory[playerId] || [];
  }

  // ─── Game state management ────────────────────────────────────
  // We need to store saveCurrentTurnHits to call from the onTurnHitsUpdate callback
  let saveCurrentTurnHitsRef: ((hits: Segment[]) => void) | null = null;

  const gameStore = createCricketGameState({
    initialGameState: null,
    onTurnHitsUpdate: (hits) => {
      if (saveCurrentTurnHitsRef) {
        saveCurrentTurnHitsRef(hits);
      }
    },
    onTurnComplete: (playerState: any, hits, isGameFinished) => {
      // Add turn to player history
      if (gameStore.gameState) {
        addTurn(playerState.player, gameStore.gameState.currentRound, hits);
      }

      // Play sound when game is finished
      if (isGameFinished) {
        playSound('game-over');
      }

      // Show turn summary when player finishes turn (except if game is finished)
      if (!isGameFinished) {
        turnSummaryData = { player: playerState, hits };
        showTurnSummary = true;
      }
    },
  });

  // ─── Game history management ──────────────────────────────────
  let gameHistory = $state<{ gameState: CricketGameState; turnHits: Segment[] }[]>([]);
  let previousGameState: CricketGameState | null = null;
  let previousTurnHits: Segment[] = [];
  let isRestoring = false;

  // Save game state at the start of each turn (for animation checks)
  let turnStartState: CricketGameState | null = null;

  let hasHistory = $derived(gameHistory.length > 0);

  // Track game state changes and save to history
  $effect(() => {
    const gs = gameStore.gameState;
    if (!gs) return;

    // Read dartsThrown and currentPlayerIndex to track their changes
    const _dartsThrown = gs.dartsThrown;
    const _playerIndex = gs.currentPlayerIndex;

    if (isRestoring) {
      isRestoring = false;
      previousGameState = cloneGameState(gs);
      previousTurnHits = [...gameStore.currentTurnHits];
      return;
    }

    if (previousGameState) {
      const stateToSave = cloneGameState(previousGameState);
      const hitsToSave = [...previousTurnHits];
      gameHistory = [...gameHistory, { gameState: stateToSave, turnHits: hitsToSave }].slice(-20);
    }

    previousGameState = cloneGameState(gs);
  });

  // Save game state at the start of each turn (first dart)
  $effect(() => {
    const gs = gameStore.gameState;
    if (gs && gs.dartsThrown === 1) {
      turnStartState = cloneGameState(gs);
    }
  });

  function saveCurrentTurnHits(hits: Segment[]) {
    previousTurnHits = [...hits];
  }

  // Wire up the ref
  saveCurrentTurnHitsRef = saveCurrentTurnHits;

  function undoLastAction(): { gameState: CricketGameState; turnHits: Segment[] } | null {
    if (gameHistory.length === 0) return null;

    const previousEntry = gameHistory[gameHistory.length - 1];
    gameHistory = gameHistory.slice(0, -1);

    // Mark that we're restoring to prevent re-saving in $effect
    isRestoring = true;

    return previousEntry;
  }

  // ─── Granboard connection management ─────────────────────────
  type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'error';

  let granboard = $state<Granboard | null>(null);
  let connectionState = $state<ConnectionState>('disconnected');

  // Wrapper for segment hit with sound effects
  function handleSegmentHitWithSound(segment: Segment) {
    // Snapshot only the marks for the hit number to check closure (avoids full cloneGameState)
    const gs = gameStore.gameState;
    const hitNumber = segment.Section;
    let wasInPlay = false;

    if (gs && CRICKET_NUMBERS.includes(hitNumber as any)) {
      wasInPlay = !gs.players.every(
        (p) => (p.scores.get(hitNumber as any)?.marks ?? 0) >= 3
      );
    }

    // Play sound based on segment type
    if (segment.Section === SEGMENT_SECTIONS.MISS) {
      playSound('dart-miss');
    } else if (segment.Section === SEGMENT_SECTIONS.BULL && segment.Type === SEGMENT_TYPES.DOUBLE) {
      playSound('double-bull');
    } else if (segment.Section === SEGMENT_SECTIONS.BULL) {
      playSound('bull');
    }

    // Process the hit
    gameStore.onSegmentHit(segment);

    // Play whistle if the number was still in play before the hit
    if (wasInPlay) {
      setTimeout(() => {
        if (segment.Type === SEGMENT_TYPES.TRIPLE) {
          playSound('whistle-triple');
        } else if (segment.Type === SEGMENT_TYPES.DOUBLE) {
          playSound('whistle-double');
        } else {
          playSound('whistle-single');
        }
      }, ANIMATION_TIMINGS.STATE_CHECK_DELAY);
    }
  }

  // Stable callback reference for Granboard
  function stableSegmentCallback(segment: Segment) {
    handleSegmentHitWithSound(segment);
  }

  function setupBoard(board: Granboard) {
    board.segmentHitCallback = stableSegmentCallback;
    board.onDisconnect = () => {
      console.log('[granboard] Board disconnected');
      connectionState = 'disconnected';
      granboard = null;
    };
    granboard = board;
    connectionState = 'connected';
  }

  async function connectToBoard() {
    connectionState = 'connecting';
    try {
      const board = await Granboard.ConnectToBoard();
      setupBoard(board);
    } catch (error) {
      console.error(error);
      connectionState = 'error';
    }
  }

  // ─── Live spectator broadcasting ─────────────────────────────
  const room = createGameRoom({ gameType: 'cricket' });

  // Broadcast full game state whenever it changes
  $effect(() => {
    if (!room.roomCode || !gameStore.gameState) return;

    const serializedState = serializeCricketState(gameStore.gameState);
    const serializedHits = serializeSegments(gameStore.currentTurnHits);
    const serializedLastHit = gameStore.lastHit ? serializeSegment(gameStore.lastHit) : null;

    room.broadcastState(serializedState, serializedHits, serializedLastHit);
  });

  // Trigger animations after 3rd dart (with delay after hit animation)
  $effect(() => {
    const gs = gameStore.gameState;
    const hits = gameStore.currentTurnHits;
    if (gs && gs.dartsThrown === 3 && hits.length === 3) {
      const timer = setTimeout(() => {
        // Animation priority system (only one animation at a time)

        // Priority 1: Victory (handled elsewhere via isGameFinished)

        // Priority 2: Three misses (Goat) — doesn't need turnStartState check
        if (hits.every((hit) => hit.Section === SEGMENT_SECTIONS.MISS)) {
          playSound('goat');
          animations.playAnimation('three-miss');
        }
        // Priority 3: Three triples that count (Unicorn) — needs turnStartState
        else if (turnStartState && hits.every((hit) => hit.Type === SEGMENT_TYPES.TRIPLE)) {
          // Check if all 3 triples are on valid Cricket numbers that counted at turn start
          const allTriplesCount = hits.every((hit) => {
            const section = hit.Section as number;
            if (!CRICKET_NUMBERS.includes(section as any)) return false;

            // Check if number was still in play at the START of the turn
            const allPlayersClosed = turnStartState!.players.every(
              (p) => (p.scores.get(section as any)?.marks ?? 0) >= 3
            );
            return !allPlayersClosed;
          });

          if (allTriplesCount) {
            playSound('horse');
            animations.playAnimation('three-triple');
          }
        }
        // Priority 4: Hit sequence (3 valid Cricket hits that counted at turn start)
        else if (turnStartState) {
          const allValidHits = hits.every((hit) => {
            if (hit.Section === SEGMENT_SECTIONS.MISS) return false;
            const section = hit.Section as number;
            if (!CRICKET_NUMBERS.includes(section as any)) return false;

            // Check if number was still in play at the START of the turn
            const allPlayersClosed = turnStartState!.players.every(
              (p) => (p.scores.get(section as any)?.marks ?? 0) >= 3
            );
            return !allPlayersClosed;
          });

          if (allValidHits) {
            animations.playAnimation('hit-sequence', hits, ANIMATION_TIMINGS.HIT_SEQUENCE_DURATION);
          }
        }
      }, ANIMATION_TIMINGS.HIT_ANIMATION_DELAY);

      return () => clearTimeout(timer);
    }
  });

  // Close turn summary when next player throws a dart
  $effect(() => {
    if (gameStore.lastHit && showTurnSummary) {
      showTurnSummary = false;
      turnSummaryData = null;
    }
  });

  // ─── Actions ──────────────────────────────────────────────────
  function handleUndo() {
    const previousEntry = undoLastAction();
    if (previousEntry) {
      gameStore.restoreGameState(previousEntry.gameState, previousEntry.turnHits);
    }
  }

  function handleNewGame() {
    window.location.href = '/cricket';
  }

  function handleQuit() {
    window.location.href = '/';
  }

  function handleShowSettings() {
    settings.openDialog(SettingsGameActions, {
      onNewGame: () => { settings.closeDialog(); handleNewGame(); },
      onQuit: () => { settings.closeDialog(); handleQuit(); },
    });
  }

  // ─── Initialize ───────────────────────────────────────────────
  onMount(() => {
    const playersJson = sessionStorage.getItem('cricketPlayers');
    const gameModeString = sessionStorage.getItem('cricketGameMode');
    const maxRoundsString = sessionStorage.getItem('cricketMaxRounds');

    if (!playersJson) {
      window.location.href = '/cricket';
      return;
    }

    const players: Player[] = JSON.parse(playersJson);
    const mode = (gameModeString as CricketGameMode) || CricketGameModeEnum.Standard;
    const maxRounds = parseInt(maxRoundsString || '20');
    gameStore.setGameState(createInitialGameState(players, mode, maxRounds));

    // Try auto-connect to Granboard
    (async () => {
      connectionState = 'connecting';
      const board = await Granboard.TryAutoConnect();
      if (board) {
        setupBoard(board);
      } else {
        connectionState = 'disconnected';
      }
    })();

    // Connect room WebSocket
    room.connect();

    // Initialize AudioContext on first user interaction
    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };
    document.addEventListener('click', initAudio, { once: true });

    return () => {
      document.removeEventListener('click', initAudio);
      room.disconnect();
    };
  });

  // Derived: current player
  let currentPlayer = $derived(
    gameStore.gameState
      ? gameStore.gameState.players[gameStore.gameState.currentPlayerIndex]
      : null
  );
</script>

{#if !gameStore.gameState}
  <div class="flex min-h-screen items-center justify-center" style="background-color: var(--hud-background);">
    <div class="text-2xl" style="color: var(--hud-on-surface);">Loading</div>
  </div>
{:else}
  <main
    class="h-screen flex flex-col px-4 py-3 gap-3 overflow-hidden"
    style="background-color: var(--hud-background);"
  >
    <!-- Animations overlay -->
    <AnimationOverlay />

    <GameHeader
      gameMode={gameStore.gameState.mode}
      {connectionState}
      onConnect={connectToBoard}
      onShowLegend={() => { showLegend = true; }}
      onShowSettings={handleShowSettings}
      onShowShare={() => { showShare = true; }}
      roomActive={!!room.roomCode}
      spectatorCount={room.spectatorCount}
    />

    {#if gameStore.gameState.gameFinished && gameStore.gameState.winner}
      <GameOverBanner
        winner={gameStore.gameState.winner}
        players={gameStore.gameState.players}
        totalRounds={gameStore.gameState.currentRound - 1}
        gameMode={gameStore.gameState.mode}
        onNewGame={handleNewGame}
        onQuit={handleQuit}
      />
    {/if}

    {#if !gameStore.gameState.gameFinished && currentPlayer}
      <CurrentPlayerPanel
        currentPlayer={currentPlayer}
        dartsThrown={gameStore.gameState.dartsThrown}
        currentRound={gameStore.gameState.currentRound}
        maxRounds={gameStore.gameState.maxRounds}
        currentTurnHits={gameStore.currentTurnHits}
        {hasHistory}
        onUndo={handleUndo}
        onNextPlayer={gameStore.handleResetButton}
      />
    {/if}

    <div class="flex-1 min-h-0 flex flex-col">
      <ScoreBoard
        players={gameStore.gameState.players}
        currentPlayerIndex={gameStore.gameState.currentPlayerIndex}
        gameMode={gameStore.gameState.mode}
        gameFinished={gameStore.gameState.gameFinished}
        dartsThrown={gameStore.gameState.dartsThrown}
      />
    </div>

    <!-- Animations -->
    <HitAnimation hit={gameStore.lastHit} />

    {#if showTurnSummary && turnSummaryData}
      <TurnSummary
        show={showTurnSummary}
        currentPlayer={turnSummaryData.player}
        hits={turnSummaryData.hits}
        onComplete={() => {
          showTurnSummary = false;
          turnSummaryData = null;
        }}
      />
    {/if}

    <!-- Dialogs -->
    <LegendDialog
      show={showLegend}
      gameMode={gameStore.gameState.mode}
      onclose={() => { showLegend = false; }}
    />

    <ShareGameDialog
      open={showShare}
      onclose={() => { showShare = false; }}
      roomCode={room.roomCode}
      spectatorCount={room.spectatorCount}
      isConnected={room.isConnected}
      onCreateRoom={room.createRoom}
      onCloseRoom={room.closeRoom}
      roomState={room.roomState}
    />

    <GlobalSettingsDialog />
  </main>
{/if}
