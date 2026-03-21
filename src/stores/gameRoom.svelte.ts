import { io, type Socket } from 'socket.io-client';
import type {
  ClientToServerEvents,
  ServerToClientEvents,
  GameType,
  SerializedSegment,
} from '@/services/socketTypes';

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type RoomState = 'idle' | 'creating' | 'active' | 'error';

const WS_URL = import.meta.env.PUBLIC_WS_URL || 'http://localhost:3001';

interface GameRoomOptions {
  gameType: GameType;
  autoCreate?: boolean;
}

function createGameRoom(options: GameRoomOptions) {
  let roomState = $state<RoomState>('idle');
  let roomCode = $state<string | null>(null);
  let spectatorCount = $state(0);
  let error = $state<string | null>(null);
  let isConnected = $state(false);

  let socket: TypedSocket | null = null;
  // Ref-like to keep roomCode accessible in callbacks without reactivity issues
  let roomCodeRef: string | null = null;

  function connect() {
    socket = io(WS_URL, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      transports: ['websocket', 'polling'],
    });

    socket.on('connect', () => {
      console.log('[gameRoom] Connected to server');
      isConnected = true;

      // Auto-create if requested and still idle
      if (options.autoCreate && roomState === 'idle') {
        createRoom();
      }
    });

    socket.on('disconnect', () => {
      console.log('[gameRoom] Disconnected from server');
      isConnected = false;
    });

    socket.on('room:spectators', (data) => {
      spectatorCount = data.count;
    });

    socket.on('error', (data) => {
      console.error('[gameRoom] Server error:', data.message);
      error = data.message;
    });
  }

  function disconnect() {
    if (broadcastRafId !== null) {
      cancelAnimationFrame(broadcastRafId);
      broadcastRafId = null;
    }
    pendingBroadcast = null;
    if (socket && roomCodeRef) {
      socket.emit('room:close', { code: roomCodeRef });
    }
    socket?.disconnect();
    socket = null;
  }

  async function createRoom(): Promise<string | null> {
    if (!socket || !socket.connected) {
      error = 'Not connected to server';
      roomState = 'error';
      return null;
    }

    roomState = 'creating';
    error = null;

    return new Promise((resolve) => {
      socket!.emit('room:create', { gameType: options.gameType }, (response) => {
        if (response.ok && response.code) {
          roomCode = response.code;
          roomCodeRef = response.code;
          roomState = 'active';
          console.log(`[gameRoom] Room created: ${response.code}`);
          resolve(response.code);
        } else {
          error = response.error || 'Failed to create room';
          roomState = 'error';
          resolve(null);
        }
      });
    });
  }

  function closeRoom() {
    if (socket && roomCodeRef) {
      socket.emit('room:close', { code: roomCodeRef });
    }
    roomCode = null;
    roomCodeRef = null;
    roomState = 'idle';
    spectatorCount = 0;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let pendingBroadcast: { gameState: any; currentTurnHits: any[]; lastHit: any | null } | null = null;
  let broadcastRafId: number | null = null;

  function broadcastState(gameState: any, currentTurnHits: any[], lastHit: any | null) {
    if (!socket || !roomCodeRef) return;

    // Coalesce rapid state changes into a single emit per animation frame
    pendingBroadcast = { gameState, currentTurnHits, lastHit };

    if (broadcastRafId === null) {
      broadcastRafId = requestAnimationFrame(() => {
        broadcastRafId = null;
        if (pendingBroadcast && socket && roomCodeRef) {
          socket.emit('game:state', {
            code: roomCodeRef,
            ...pendingBroadcast,
          });
          pendingBroadcast = null;
        }
      });
    }
  }

  function broadcastHit(segment: SerializedSegment) {
    if (!socket || !roomCodeRef) return;
    socket.volatile.emit('game:hit', { code: roomCodeRef, segment });
  }

  return {
    get roomState() { return roomState; },
    get roomCode() { return roomCode; },
    get spectatorCount() { return spectatorCount; },
    get error() { return error; },
    get isConnected() { return isConnected; },
    connect,
    disconnect,
    createRoom,
    closeRoom,
    broadcastState,
    broadcastHit,
  };
}

export { createGameRoom };
