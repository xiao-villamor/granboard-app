import { io, type Socket } from 'socket.io-client';
import type {
  ClientToServerEvents,
  ServerToClientEvents,
  GameType,
  RoomInfo,
  SerializedSegment,
} from '@/services/socketTypes';

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type SpectatorState = 'connecting' | 'joined' | 'error' | 'closed';

const WS_URL = import.meta.env.PUBLIC_WS_URL || 'http://localhost:3001';

function createSpectator(code: string) {
  let state = $state<SpectatorState>('connecting');
  let roomInfo = $state<RoomInfo | null>(null);
  let gameType = $state<GameType | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let gameState = $state<any>(null);
  let currentTurnHits = $state<SerializedSegment[]>([]);
  let lastHit = $state<SerializedSegment | null>(null);
  let spectatorCount = $state(0);
  let error = $state<string | null>(null);

  let socket: TypedSocket | null = null;

  function connect() {
    if (!code) return;

    socket = io(WS_URL, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log('[spectator] Connected, joining room:', code);

      socket!.emit('room:join', { code: code.toUpperCase() }, (response) => {
        if (response.ok && response.roomInfo) {
          state = 'joined';
          roomInfo = response.roomInfo;
          gameType = response.roomInfo.gameType;
          spectatorCount = response.roomInfo.spectatorCount;
          console.log('[spectator] Joined room:', response.roomInfo);
        } else {
          state = 'error';
          error = response.error || 'Failed to join room';
          console.error('[spectator] Join failed:', response.error);
        }
      });
    });

    socket.on('game:state', (data) => {
      gameState = data.gameState;
      currentTurnHits = data.currentTurnHits;
      lastHit = data.lastHit;
      if (data.gameType) {
        gameType = data.gameType;
      }
    });

    socket.on('game:hit', (data) => {
      lastHit = data.segment;
    });

    socket.on('room:spectators', (data) => {
      spectatorCount = data.count;
    });

    socket.on('room:closed', () => {
      state = 'closed';
      console.log('[spectator] Room was closed by host');
    });

    socket.on('room:info', (data) => {
      roomInfo = data;
      spectatorCount = data.spectatorCount;
    });

    socket.on('error', (data) => {
      error = data.message;
    });

    socket.on('disconnect', () => {
      console.log('[spectator] Disconnected');
    });
  }

  function leave() {
    if (socket) {
      socket.emit('room:leave', { code });
      socket.disconnect();
      socket = null;
    }
  }

  function disconnect() {
    leave();
  }

  return {
    get state() { return state; },
    get roomInfo() { return roomInfo; },
    get gameType() { return gameType; },
    get gameState() { return gameState; },
    get currentTurnHits() { return currentTurnHits; },
    get lastHit() { return lastHit; },
    get spectatorCount() { return spectatorCount; },
    get error() { return error; },
    connect,
    leave,
    disconnect,
  };
}

export { createSpectator };
