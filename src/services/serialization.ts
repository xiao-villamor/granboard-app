/**
 * Serialization helpers for converting game state to/from
 * wire-safe JSON format for WebSocket transport.
 */

import type { CricketGameState, PlayerCricketState, CricketNumber } from "./cricket";
import type { Segment } from "./boardinfo";
import type {
  SerializedCricketGameState,
  SerializedPlayerCricketState,
  SerializedCricketScore,
  SerializedSegment,
} from "./socketTypes";

// ─── Cricket Serialization ───────────────────────────────────

export function serializeCricketState(state: CricketGameState): SerializedCricketGameState {
  return {
    players: state.players.map(serializePlayerCricketState),
    currentPlayerIndex: state.currentPlayerIndex,
    dartsThrown: state.dartsThrown,
    currentRound: state.currentRound,
    maxRounds: state.maxRounds,
    gameStarted: state.gameStarted,
    gameFinished: state.gameFinished,
    winner: state.winner,
    mode: state.mode,
  };
}

function serializePlayerCricketState(player: PlayerCricketState): SerializedPlayerCricketState {
  const scores: Record<number, SerializedCricketScore> = {};
  player.scores.forEach((score, num) => {
    scores[num] = { marks: score.marks, points: score.points };
  });

  return {
    player: player.player,
    scores,
    totalPoints: player.totalPoints,
    totalMarks: player.totalMarks,
    roundsPlayed: player.roundsPlayed,
  };
}

export function deserializeCricketState(data: SerializedCricketGameState): CricketGameState {
  return {
    players: data.players.map(deserializePlayerCricketState),
    currentPlayerIndex: data.currentPlayerIndex,
    dartsThrown: data.dartsThrown,
    currentRound: data.currentRound,
    maxRounds: data.maxRounds,
    gameStarted: data.gameStarted,
    gameFinished: data.gameFinished,
    winner: data.winner,
    mode: data.mode as any,
  };
}

function deserializePlayerCricketState(data: SerializedPlayerCricketState): PlayerCricketState {
  const scores = new Map<CricketNumber, { marks: number; points: number }>();
  for (const [numStr, score] of Object.entries(data.scores)) {
    scores.set(parseInt(numStr) as CricketNumber, { marks: score.marks, points: score.points });
  }

  return {
    player: data.player,
    scores,
    totalPoints: data.totalPoints,
    totalMarks: data.totalMarks,
    roundsPlayed: data.roundsPlayed,
  };
}

// ─── Zero-One Serialization ──────────────────────────────────

import type { ZeroOneGameState, PlayerZeroOneState } from "./zeroone";
import type {
  SerializedZeroOneGameState,
  SerializedPlayerZeroOneState,
} from "./socketTypes";

export function serializeZeroOneState(state: ZeroOneGameState): SerializedZeroOneGameState {
  return {
    players: state.players.map(serializePlayerZeroOneState),
    currentPlayerIndex: state.currentPlayerIndex,
    dartsThrown: state.dartsThrown,
    currentRound: state.currentRound,
    maxRounds: state.maxRounds,
    gameStarted: state.gameStarted,
    gameFinished: state.gameFinished,
    winner: state.winner,
    mode: String(state.mode),
    doubleOut: state.doubleOut,
  };
}

function serializePlayerZeroOneState(player: PlayerZeroOneState): SerializedPlayerZeroOneState {
  return {
    player: player.player,
    score: player.currentScore,
    startingScore: player.currentScore + player.totalPointsScored, // Derive from available data
    dartsThrown: player.dartsThrown,
    totalPointsScored: player.totalPointsScored,
    roundsPlayed: player.roundsPlayed,
    busts: player.busts,
  };
}

// ─── Segment Serialization ───────────────────────────────────

export function serializeSegment(segment: Segment): SerializedSegment {
  return {
    ID: segment.ID,
    Type: segment.Type,
    Section: segment.Section,
    Value: segment.Value,
    LongName: segment.LongName,
    ShortName: segment.ShortName,
  };
}

export function deserializeSegment(data: SerializedSegment): Segment {
  return {
    ID: data.ID,
    Type: data.Type,
    Section: data.Section,
    Value: data.Value,
    LongName: data.LongName,
    ShortName: data.ShortName,
  };
}

export function serializeSegments(segments: Segment[]): SerializedSegment[] {
  return segments.map(serializeSegment);
}

export function deserializeSegments(data: SerializedSegment[]): Segment[] {
  return data.map(deserializeSegment);
}
