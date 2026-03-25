import { SegmentID, type Segment } from '@/services/boardinfo';
import {
  type CricketGameState,
  processDartHit,
  nextPlayer,
} from '@/services/cricket';

interface CricketGameStateOptions {
  initialGameState: CricketGameState | null;
  onTurnHitsUpdate: (hits: Segment[]) => void;
  onTurnComplete?: (player: unknown, hits: Segment[], isGameFinished: boolean, round: number) => void;
}

function createCricketGameState(options: CricketGameStateOptions) {
  let gameState = $state<CricketGameState | null>(options.initialGameState);
  let lastHit = $state<Segment | null>(null);
  let hitIndex = $state(0);
  let currentTurnHits = $state<Segment[]>([]);

  let lastPlayerChangeTime = 0;
  let lastDartHitTime = 0;
  let lastDartHitSegmentID = -1;

  function setGameState(state: CricketGameState | null) {
    gameState = state;
  }

  function handleResetButton() {
    // Debounce: prevent multiple rapid presses (within 500ms)
    const now = Date.now();
    if (now - lastPlayerChangeTime < 500) {
      return;
    }
    lastPlayerChangeTime = now;

    if (!gameState) return;

    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const currentRound = gameState.currentRound;

    // Calculate next state
    const newState = nextPlayer(gameState);

    // Save current turn hits
    const hitsToSave = [...currentTurnHits];

    // Update state
    lastHit = null;
    currentTurnHits = [];
    gameState = newState;
    lastDartHitSegmentID = -1;

    // Notify with the correct (pre-advance) round and final hits
    options.onTurnHitsUpdate(hitsToSave);

    // Trigger turn complete callback after state is updated
    if (options.onTurnComplete && hitsToSave.length > 0) {
      options.onTurnComplete(currentPlayer, hitsToSave, newState.gameFinished, currentRound);
    }
  }

  function handleDartHit(segment: Segment) {
    // Segment-aware debounce: only block the same segment firing again within 300ms
    // (physical double-read). A different segment always passes through immediately.
    const now = Date.now();
    if (segment.ID === lastDartHitSegmentID && now - lastDartHitTime < 300) {
      console.log('🔇 Debounced (same segment):', segment.ShortName);
      return;
    }
    lastDartHitTime = now;
    lastDartHitSegmentID = segment.ID;

    if (!gameState) return;

    const hitId = `${now}-${segment.ID}`;

    // Check if we can still accept darts (max 3)
    if (gameState.dartsThrown >= 3) {
      console.log('Already thrown 3 darts, ignoring');
      return;
    }

    // Process the hit first so the new state is ready
    const newGameState = processDartHit(gameState, segment, hitId);
    const newTurnHits = [...currentTurnHits, segment];

    // Update all state together
    lastHit = segment;
    hitIndex += 1;
    currentTurnHits = newTurnHits;
    gameState = newGameState;

    // Notify with the up-to-date hits for this turn
    options.onTurnHitsUpdate(newTurnHits);
  }

  function onSegmentHit(segment: Segment) {
    if (segment.ID === SegmentID.RESET_BUTTON) {
      handleResetButton();
    } else {
      handleDartHit(segment);
    }
  }

  function restoreGameState(state: CricketGameState, turnHits: Segment[]) {
    gameState = state;
    currentTurnHits = turnHits;
    lastHit = null;
  }

  return {
    get gameState() { return gameState; },
    get lastHit() { return lastHit; },
    get hitIndex() { return hitIndex; },
    get currentTurnHits() { return currentTurnHits; },
    setGameState,
    onSegmentHit,
    handleResetButton,
    restoreGameState,
  };
}

export { createCricketGameState };
export type { CricketGameStateOptions };
