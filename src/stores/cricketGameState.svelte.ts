import { SegmentID, type Segment } from '@/services/boardinfo';
import {
  type CricketGameState,
  processDartHit,
  nextPlayer,
} from '@/services/cricket';

interface CricketGameStateOptions {
  initialGameState: CricketGameState | null;
  onTurnHitsUpdate: (hits: Segment[]) => void;
  onTurnComplete?: (player: unknown, hits: Segment[], isGameFinished: boolean) => void;
}

function createCricketGameState(options: CricketGameStateOptions) {
  let gameState = $state<CricketGameState | null>(options.initialGameState);
  let lastHit = $state<Segment | null>(null);
  let currentTurnHits = $state<Segment[]>([]);

  let lastPlayerChangeTime = 0;
  let lastDartHitTime = 0;

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

    lastHit = null;

    if (!gameState) return;

    const currentPlayer = gameState.players[gameState.currentPlayerIndex];

    // Calculate next state to check if game will be finished
    const newState = nextPlayer(gameState);

    // Save current turn hits before clearing
    const hitsToSave = [...currentTurnHits];
    options.onTurnHitsUpdate(hitsToSave);

    // Trigger turn complete callback with player, hits, and game finished status
    if (options.onTurnComplete && hitsToSave.length > 0) {
      options.onTurnComplete(currentPlayer, hitsToSave, newState.gameFinished);
    }

    currentTurnHits = [];
    gameState = newState;
  }

  function handleDartHit(segment: Segment) {
    // Debounce to prevent double detection
    const now = Date.now();
    if (now - lastDartHitTime < 1000) {
      return;
    }
    lastDartHitTime = now;

    if (!gameState) return;

    const hitId = `${now}-${segment.ID}`;

    console.log('Dart hit:', {
      shortName: segment.ShortName,
      type: segment.Type,
      section: segment.Section,
      segmentID: segment.ID,
      hitId,
    });

    // Check if we can still accept darts (max 3)
    if (gameState.dartsThrown >= 3) {
      console.log('Already thrown 3 darts, ignoring');
      return;
    }

    // Update UI
    lastHit = segment;

    // Save current hits before adding new one
    options.onTurnHitsUpdate([...currentTurnHits]);
    currentTurnHits = [...currentTurnHits, segment];

    // Process the hit
    gameState = processDartHit(gameState, segment, hitId);
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
    get currentTurnHits() { return currentTurnHits; },
    setGameState,
    onSegmentHit,
    handleResetButton,
    restoreGameState,
  };
}

export { createCricketGameState };
export type { CricketGameStateOptions };
