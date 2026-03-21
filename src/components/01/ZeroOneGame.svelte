<script lang="ts">
  import { onMount } from 'svelte';
  import { SEGMENT_SECTIONS, SEGMENT_TYPES } from '@/constants/segments';
  import { ANIMATION_TIMINGS } from '@/constants/animations';
  import {
    type Player,
    type ZeroOneMode,
    type ZeroOneGameState,
    createInitialGameState,
    cloneGameState,
  } from '@/services/zeroone';
  import type { Segment } from '@/services/boardinfo';

  // Stores
  import { createZeroOneGameState } from '@/stores/zeroOneGameState.svelte';
  import { settings } from '@/stores/settings.svelte';
  import { animations } from '@/stores/animations.svelte';
  import { createGameRoom } from '@/stores/gameRoom.svelte';

  // Serialization
  import { serializeZeroOneState, serializeSegments, serializeSegment } from '@/services/serialization';

  // Services
  import { Granboard } from '@/services/granboard';
  import { SOUND_PATHS } from '@/constants/sounds';

  // Components
  import GameHeader from '@/components/shared/GameHeader.svelte';
  import GameOverBanner from '@/components/shared/GameOverBanner.svelte';
  import ScoreBoard from './ScoreBoard.svelte';
  import HitAnimation from '@/components/shared/HitAnimation.svelte';
  import TurnSummary from '@/components/shared/TurnSummary.svelte';
  import LegendDialog from './LegendDialog.svelte';
  import ShareGameDialog from '@/components/shared/ShareGameDialog.svelte';
  import AnimationOverlay from '@/components/shared/AnimationOverlay.svelte';
  import SettingsGameActions from './SettingsGameActions.svelte';
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

  function playSound(type: string) {
    if (!settings.soundEnabled) return;

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
      console.log(`⚠️ Round ${round} already recorded for player ${player.name}`);
      return;
    }

    turnHistory = {
      ...turnHistory,
      [player.id]: [...playerTurns, { round, hits }],
    };
  }

  // ─── Game state management ────────────────────────────────────
  // We need to store saveCurrentTurnHits to call from the onTurnHitsUpdate callback
  let saveCurrentTurnHitsRef: ((hits: Segment[]) => void) | null = null;

  const gameStore = createZeroOneGameState(
    null,
    (hits) => {
      if (saveCurrentTurnHitsRef) {
        saveCurrentTurnHitsRef(hits);
      }
    },
    (playerState, hits, isGameFinished) => {
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
    }
  );

  // ─── Game history management ──────────────────────────────────
  let gameHistory = $state<{ gameState: ZeroOneGameState; turnHits: Segment[] }[]>([]);
  let previousGameState: ZeroOneGameState | null = null;
  let previousTurnHits: Segment[] = [];
  let isRestoring = false;

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

  function saveCurrentTurnHits(hits: Segment[]) {
    previousTurnHits = [...hits];
  }

  // Wire up the ref
  saveCurrentTurnHitsRef = saveCurrentTurnHits;

  function undoLastAction(): { gameState: ZeroOneGameState; turnHits: Segment[] } | null {
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
    // Store previous state to check for bust
    const gs = gameStore.gameState;
    const currentPlayerIndex = gs?.currentPlayerIndex ?? 0;
    const previousScore = gs?.players[currentPlayerIndex].currentScore ?? 0;

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

    // Check after state update for special events (bust, checkout)
    setTimeout(() => {
      const currentGs = gameStore.gameState;
      if (!gs || !currentGs) return;

      const currentPlayer = currentGs.players[currentPlayerIndex];
      const newScore = currentPlayer.currentScore;

      // Check for bust (score went back to previous)
      if (newScore === previousScore && currentGs.dartsThrown === 3) {
        playSound('game-over');
      }

      // Check for victory (score reached 0)
      if (newScore === 0) {
        playSound('victory');
      }
    }, ANIMATION_TIMINGS.STATE_CHECK_DELAY);
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
  const room = createGameRoom({ gameType: 'zeroone' });

  // Broadcast full game state whenever it changes
  $effect(() => {
    if (!room.roomCode || !gameStore.gameState) return;

    const serializedState = serializeZeroOneState(gameStore.gameState);
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

        // Priority 1: Victory (handled elsewhere when score reaches 0)
        // Priority 2: Three misses (Goat)
        if (hits.every((hit) => hit.Section === SEGMENT_SECTIONS.MISS)) {
          playSound('goat');
          animations.playAnimation('three-miss');
        }
        // Priority 3: Three triples (Unicorn)
        else if (hits.every((hit) => hit.Type === SEGMENT_TYPES.TRIPLE)) {
          playSound('horse');
          animations.playAnimation('three-triple');
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
    window.location.href = '/01';
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
    const playersJson = sessionStorage.getItem('zeroOnePlayers');
    const modeString = sessionStorage.getItem('zeroOneMode');
    const doubleOutString = sessionStorage.getItem('zeroOneDoubleOut');
    const maxRoundsString = sessionStorage.getItem('zeroOneMaxRounds');

    if (!playersJson) {
      window.location.href = '/01';
      return;
    }

    const players: Player[] = JSON.parse(playersJson);
    const mode = parseInt(modeString || '501') as ZeroOneMode;
    const doubleOut = doubleOutString === 'true';
    const maxRounds = parseInt(maxRoundsString || '0');
    gameStore.setGameState(createInitialGameState(players, mode, doubleOut, maxRounds));

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
    class="h-screen flex flex-col overflow-hidden select-none"
    style="background-color: var(--hud-background);"
  >
    <!-- Animations overlay -->
    <AnimationOverlay />

    <!-- Floating Header (gradient fade into background) -->
    <div class="w-full px-6 md:px-8 py-4 md:py-6 z-50"
      style="background: linear-gradient(to bottom, var(--hud-background) 0%, transparent 100%);"
    >
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
    </div>

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

    <!-- Full-screen ScoreBoard (integrates player panel, scores, standings) -->
    <div class="flex-1 min-h-0 pb-6 md:pb-10 max-w-[1600px] mx-auto w-full">
      <ScoreBoard
        players={gameStore.gameState.players}
        currentPlayerIndex={gameStore.gameState.currentPlayerIndex}
        gameFinished={gameStore.gameState.gameFinished}
        currentTurnHits={gameStore.currentTurnHits}
        dartsThrown={gameStore.gameState.dartsThrown}
        currentRound={gameStore.gameState.currentRound}
        maxRounds={gameStore.gameState.maxRounds}
        {hasHistory}
        onUndo={handleUndo}
        onNextPlayer={gameStore.handleResetButton}
      />
    </div>

    <!-- Side Decoration (subtle branding, desktop only) -->
    <div class="fixed right-0 top-1/2 -translate-y-1/2 flex-col items-center gap-12 pr-4 opacity-[0.06] pointer-events-none hidden lg:flex">
      <div class="h-32 w-px" style="background: linear-gradient(to bottom, transparent, var(--hud-primary), transparent);"></div>
      <span class="rotate-90 text-[10px] font-bold tracking-[0.5em] uppercase whitespace-nowrap" style="color: var(--hud-primary);">
        GranBoard Lounge
      </span>
      <div class="h-32 w-px" style="background: linear-gradient(to bottom, transparent, var(--hud-primary), transparent);"></div>
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

    <!-- Legend Dialog -->
    <LegendDialog
      show={showLegend}
      doubleOut={gameStore.gameState.doubleOut}
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
