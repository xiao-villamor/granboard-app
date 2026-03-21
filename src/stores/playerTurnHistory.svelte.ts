import type { Segment } from '@/services/boardinfo';
import type { Player } from '@/services/cricket';

export type PlayerTurn = {
  round: number;
  hits: Segment[];
};

export type PlayerTurnHistoryMap = {
  [playerId: string]: PlayerTurn[];
};

function createPlayerTurnHistory() {
  let turnHistory = $state<PlayerTurnHistoryMap>({});

  function addTurn(player: Player, round: number, hits: Segment[]) {
    if (hits.length === 0) return;

    const playerTurns = turnHistory[player.id] || [];

    // Check if this round isn't already recorded to avoid duplicates
    const roundExists = playerTurns.some(turn => turn.round === round);
    if (roundExists) {
      console.log(`Warning: Round ${round} already recorded for player ${player.name}`);
      return;
    }

    turnHistory = {
      ...turnHistory,
      [player.id]: [
        ...playerTurns,
        { round, hits },
      ],
    };
  }

  function clearHistory() {
    turnHistory = {};
  }

  function getPlayerHistory(playerId: string): PlayerTurn[] {
    return turnHistory[playerId] || [];
  }

  return {
    get turnHistory() { return turnHistory; },
    addTurn,
    clearHistory,
    getPlayerHistory,
  };
}

export { createPlayerTurnHistory };
