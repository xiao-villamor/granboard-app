"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
  GameType,
  SerializedSegment,
} from "@/services/socketTypes";

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type RoomState = "idle" | "creating" | "active" | "error";

interface UseGameRoomOptions {
  gameType: GameType;
  /** Auto-create room on mount? Default false */
  autoCreate?: boolean;
}

interface UseGameRoomReturn {
  roomState: RoomState;
  roomCode: string | null;
  spectatorCount: number;
  error: string | null;
  createRoom: () => Promise<string | null>;
  closeRoom: () => void;
  broadcastState: (gameState: any, currentTurnHits: any[], lastHit: any | null) => void;
  broadcastHit: (segment: SerializedSegment) => void;
  isConnected: boolean;
}

const WS_URL = process.env.NEXT_PUBLIC_WS_URL || "http://localhost:3001";

export function useGameRoom({ gameType, autoCreate = false }: UseGameRoomOptions): UseGameRoomReturn {
  const [roomState, setRoomState] = useState<RoomState>("idle");
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [spectatorCount, setSpectatorCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const socketRef = useRef<TypedSocket | null>(null);
  const roomCodeRef = useRef<string | null>(null);

  // Keep ref in sync
  useEffect(() => {
    roomCodeRef.current = roomCode;
  }, [roomCode]);

  // Initialize socket connection
  useEffect(() => {
    const socket: TypedSocket = io(WS_URL, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[useGameRoom] Connected to server");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("[useGameRoom] Disconnected from server");
      setIsConnected(false);
    });

    socket.on("room:spectators", (data) => {
      setSpectatorCount(data.count);
    });

    socket.on("error", (data) => {
      console.error("[useGameRoom] Server error:", data.message);
      setError(data.message);
    });

    return () => {
      // Clean up: close room if active
      if (roomCodeRef.current) {
        socket.emit("room:close", { code: roomCodeRef.current });
      }
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const createRoom = useCallback(async (): Promise<string | null> => {
    const socket = socketRef.current;
    if (!socket || !socket.connected) {
      setError("Not connected to server");
      setRoomState("error");
      return null;
    }

    setRoomState("creating");
    setError(null);

    return new Promise((resolve) => {
      socket.emit("room:create", { gameType }, (response) => {
        if (response.ok && response.code) {
          setRoomCode(response.code);
          setRoomState("active");
          console.log(`[useGameRoom] Room created: ${response.code}`);
          resolve(response.code);
        } else {
          setError(response.error || "Failed to create room");
          setRoomState("error");
          resolve(null);
        }
      });
    });
  }, [gameType]);

  // Auto-create room if requested
  useEffect(() => {
    if (autoCreate && roomState === "idle" && isConnected) {
      createRoom();
    }
  }, [autoCreate, roomState, isConnected, createRoom]);

  const closeRoom = useCallback(() => {
    const socket = socketRef.current;
    if (socket && roomCodeRef.current) {
      socket.emit("room:close", { code: roomCodeRef.current });
    }
    setRoomCode(null);
    setRoomState("idle");
    setSpectatorCount(0);
  }, []);

  const broadcastState = useCallback(
    (gameState: any, currentTurnHits: any[], lastHit: any | null) => {
      const socket = socketRef.current;
      const code = roomCodeRef.current;
      if (!socket || !code) return;

      socket.emit("game:state", {
        code,
        gameState,
        currentTurnHits,
        lastHit,
      });
    },
    []
  );

  const broadcastHit = useCallback((segment: SerializedSegment) => {
    const socket = socketRef.current;
    const code = roomCodeRef.current;
    if (!socket || !code) return;

    socket.volatile.emit("game:hit", { code, segment });
  }, []);

  return {
    roomState,
    roomCode,
    spectatorCount,
    error,
    createRoom,
    closeRoom,
    broadcastState,
    broadcastHit,
    isConnected,
  };
}
