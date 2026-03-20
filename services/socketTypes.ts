/**
 * Client-side copy of shared WebSocket types.
 * Keep in sync with server/src/types.ts
 */

export type GameType = "cricket" | "zeroone" | "free-throw" | "target-practice" | "checkout";

export interface RoomInfo {
  code: string;
  gameType: GameType;
  hostConnected: boolean;
  spectatorCount: number;
  createdAt: number;
}

export interface SerializedCricketScore {
  marks: number;
  points: number;
}

export interface SerializedPlayerCricketState {
  player: { id: string; name: string };
  scores: Record<number, SerializedCricketScore>;
  totalPoints: number;
  totalMarks: number;
  roundsPlayed: number;
}

export interface SerializedCricketGameState {
  players: SerializedPlayerCricketState[];
  currentPlayerIndex: number;
  dartsThrown: number;
  currentRound: number;
  maxRounds: number;
  gameStarted: boolean;
  gameFinished: boolean;
  winner: { id: string; name: string } | null;
  mode: string;
}

export interface SerializedPlayerZeroOneState {
  player: { id: string; name: string };
  score: number;
  startingScore: number;
  dartsThrown: number;
  totalPointsScored: number;
  roundsPlayed: number;
  busts: number;
}

export interface SerializedZeroOneGameState {
  players: SerializedPlayerZeroOneState[];
  currentPlayerIndex: number;
  dartsThrown: number;
  currentRound: number;
  maxRounds: number;
  gameStarted: boolean;
  gameFinished: boolean;
  winner: { id: string; name: string } | null;
  mode: string;
  doubleOut: boolean;
}

export interface SerializedSegment {
  ID: number;
  Type: number;
  Section: number;
  Value: number;
  LongName: string;
  ShortName: string;
}

export interface ClientToServerEvents {
  "room:create": (data: { gameType: GameType }, callback: (response: { ok: boolean; code?: string; error?: string }) => void) => void;
  "game:state": (data: {
    code: string;
    gameState: SerializedCricketGameState | SerializedZeroOneGameState | Record<string, unknown>;
    currentTurnHits: SerializedSegment[];
    lastHit: SerializedSegment | null;
  }) => void;
  "game:hit": (data: {
    code: string;
    segment: SerializedSegment;
  }) => void;
  "room:join": (data: { code: string }, callback: (response: { ok: boolean; roomInfo?: RoomInfo; error?: string }) => void) => void;
  "room:leave": (data: { code: string }) => void;
  "room:close": (data: { code: string }) => void;
}

export interface ServerToClientEvents {
  "game:state": (data: {
    gameState: SerializedCricketGameState | SerializedZeroOneGameState | Record<string, unknown>;
    currentTurnHits: SerializedSegment[];
    lastHit: SerializedSegment | null;
    gameType: GameType;
  }) => void;
  "game:hit": (data: {
    segment: SerializedSegment;
  }) => void;
  "room:info": (data: RoomInfo) => void;
  "room:closed": () => void;
  "room:spectators": (data: { count: number }) => void;
  "error": (data: { message: string }) => void;
}
