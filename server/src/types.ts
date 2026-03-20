/**
 * Shared types for client-server WebSocket communication.
 * These types are used by both the server and the frontend.
 */

// ─── Game Types ───────────────────────────────────────────────

export type GameType = "cricket" | "zeroone" | "free-throw" | "target-practice" | "checkout";

// ─── Room / Lobby ─────────────────────────────────────────────

export interface RoomInfo {
  code: string;
  gameType: GameType;
  hostConnected: boolean;
  spectatorCount: number;
  createdAt: number;
}

// ─── Serialized Game State ────────────────────────────────────
// We serialize the full game state so spectators can render the
// same UI components. Maps are converted to plain objects.

export interface SerializedCricketScore {
  marks: number;
  points: number;
}

export interface SerializedPlayerCricketState {
  player: { id: string; name: string };
  scores: Record<number, SerializedCricketScore>; // Map -> Record
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
  mode: string; // CricketGameMode enum value
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
  mode: string; // ZeroOneMode enum value
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

// ─── Client -> Server Events ──────────────────────────────────

export interface ClientToServerEvents {
  // Host creates a room
  "room:create": (data: { gameType: GameType }, callback: (response: { ok: boolean; code?: string; error?: string }) => void) => void;

  // Host updates game state (broadcasts to all spectators)
  "game:state": (data: {
    code: string;
    gameState: SerializedCricketGameState | SerializedZeroOneGameState | Record<string, unknown>;
    currentTurnHits: SerializedSegment[];
    lastHit: SerializedSegment | null;
  }) => void;

  // Host sends a dart hit event (real-time, low latency)
  "game:hit": (data: {
    code: string;
    segment: SerializedSegment;
  }) => void;

  // Spectator joins a room
  "room:join": (data: { code: string }, callback: (response: { ok: boolean; roomInfo?: RoomInfo; error?: string }) => void) => void;

  // Spectator leaves a room
  "room:leave": (data: { code: string }) => void;

  // Host closes the room
  "room:close": (data: { code: string }) => void;
}

// ─── Server -> Client Events ──────────────────────────────────

export interface ServerToClientEvents {
  // Full game state update (sent to spectators)
  "game:state": (data: {
    gameState: SerializedCricketGameState | SerializedZeroOneGameState | Record<string, unknown>;
    currentTurnHits: SerializedSegment[];
    lastHit: SerializedSegment | null;
    gameType: GameType;
  }) => void;

  // Real-time dart hit (sent to spectators)
  "game:hit": (data: {
    segment: SerializedSegment;
  }) => void;

  // Room info updates
  "room:info": (data: RoomInfo) => void;

  // Room was closed by host
  "room:closed": () => void;

  // Spectator count changed
  "room:spectators": (data: { count: number }) => void;

  // Error message
  "error": (data: { message: string }) => void;
}

// ─── Inter-Server Events (unused for now) ─────────────────────

export interface InterServerEvents {}

// ─── Socket Data ──────────────────────────────────────────────

export interface SocketData {
  role: "host" | "spectator";
  roomCode?: string;
}
