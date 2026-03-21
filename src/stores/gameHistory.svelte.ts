import type { Segment } from '@/services/boardinfo';

type GameHistoryEntry<T> = {
  gameState: T;
  turnHits: Segment[];
};

function createGameHistory<T extends { dartsThrown: number; currentPlayerIndex: number }>(
  cloneFn: (state: T) => T,
) {
  let gameHistory = $state<GameHistoryEntry<T>[]>([]);
  let previousGameState: T | null = null;
  let previousTurnHits: Segment[] = [];
  let isRestoring = false;

  /**
   * Call this whenever gameState changes (specifically dartsThrown or currentPlayerIndex).
   * Saves the previous state to history before updating.
   */
  function trackStateChange(gameState: T, currentTurnHits: Segment[]) {
    // Don't save to history if we're restoring a previous state
    if (isRestoring) {
      isRestoring = false;
      previousGameState = cloneFn(gameState);
      previousTurnHits = [...currentTurnHits];
      return;
    }

    // If we have a previous state, save it to history
    if (previousGameState) {
      const stateToSave = cloneFn(previousGameState);
      const hitsToSave = [...previousTurnHits];

      gameHistory = [
        ...gameHistory,
        {
          gameState: stateToSave,
          turnHits: hitsToSave,
        },
      ].slice(-20);
    }

    // Update previous state reference (will be saved next time)
    previousGameState = cloneFn(gameState);
  }

  function saveCurrentTurnHits(hits: Segment[]) {
    previousTurnHits = [...hits];
  }

  function undoLastAction(): {
    gameState: T;
    turnHits: Segment[];
  } | null {
    if (gameHistory.length === 0) return null;

    const previousEntry = gameHistory[gameHistory.length - 1];
    gameHistory = gameHistory.slice(0, -1);

    // Mark that we're restoring to prevent re-saving in the next trackStateChange
    isRestoring = true;

    return previousEntry;
  }

  return {
    get gameHistory() { return gameHistory; },
    get hasHistory() { return gameHistory.length > 0; },
    trackStateChange,
    saveCurrentTurnHits,
    undoLastAction,
  };
}

export { createGameHistory };
