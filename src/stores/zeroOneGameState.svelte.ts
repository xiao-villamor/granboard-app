import { Segment, SegmentID } from '@/services/boardinfo';
import {
  ZeroOneGameState,
  processDartHit,
  nextPlayer,
} from '@/services/zeroone';

export function createZeroOneGameState(
  initialGameState: ZeroOneGameState | null,
  onTurnHitsUpdate: (hits: Segment[]) => void,
  onTurnComplete?: (player: any, hits: Segment[], isGameFinished: boolean) => void
) {
  let gameState = $state<ZeroOneGameState | null>(initialGameState);
  let lastHit = $state<Segment | null>(null);
  let hitIndex = $state(0);
  let currentTurnHits = $state<Segment[]>([]);

  let lastPlayerChangeTime = 0;
  let lastDartHitTime = 0;
  let lastDartHitSegmentID = -1;

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

    // Save current turn hits before clearing
    const hitsBeforeClear = [...currentTurnHits];
    onTurnHitsUpdate(hitsBeforeClear);

    // Calculate next state
    const newState = nextPlayer(gameState);

    // Trigger turn complete callback with player, hits, and game finished status
    if (onTurnComplete && hitsBeforeClear.length > 0) {
      onTurnComplete(currentPlayer, hitsBeforeClear, newState.gameFinished);
    }

    // Clear current turn hits and update game state
    currentTurnHits = [];
    gameState = newState;
    lastDartHitSegmentID = -1;
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

    const hitId = `${now}-${segment.ID}`;

    console.log('🎯 Dart hit:', {
      shortName: segment.ShortName,
      type: segment.Type,
      section: segment.Section,
      segmentID: segment.ID,
      hitId,
    });

    if (!gameState) return;

    // Check if we can still accept darts (max 3)
    if (gameState.dartsThrown >= 3) {
      console.log('⚠️ Already thrown 3 darts, ignoring');
      return;
    }

    // Update UI
    lastHit = segment;
    hitIndex += 1;

    // Save current hits before adding new one
    onTurnHitsUpdate([...currentTurnHits]);
    currentTurnHits = [...currentTurnHits, segment];

    // Process and update the game state
    gameState = processDartHit(gameState, segment, hitId);
  }

  function onSegmentHit(segment: Segment) {
    if (segment.ID === SegmentID.RESET_BUTTON) {
      handleResetButton();
    } else {
      handleDartHit(segment);
    }
  }

  function restoreGameState(state: ZeroOneGameState, turnHits: Segment[]) {
    gameState = state;
    currentTurnHits = turnHits;
    lastHit = null;
  }

  function setGameState(newState: ZeroOneGameState | null) {
    gameState = newState;
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
