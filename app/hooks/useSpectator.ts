"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { io, Socket } from "socket.io-client";
import type {
  ClientToServerEvents,
  ServerToClientEvents,
  GameType,
  RoomInfo,
  SerializedSegment,
} from "@/services/socketTypes";

type TypedSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

export type SpectatorState = "connecting" | "joined" | "error" | "closed";

interface UseSpectatorReturn {
  state: SpectatorState;
  roomInfo: RoomInfo | null;
  gameType: GameType | null;
  gameState: any;
  currentTurnHits: SerializedSegment[];
  lastHit: SerializedSegment | null;
  spectatorCount: number;
  error: string | null;
  leave: () => void;
}

const WS_URL = process.env.NEXT_PUBLIC_WS_URL || "http://localhost:3001";

export function useSpectator(code: string): UseSpectatorReturn {
  const [state, setState] = useState<SpectatorState>("connecting");
  const [roomInfo, setRoomInfo] = useState<RoomInfo | null>(null);
  const [gameType, setGameType] = useState<GameType | null>(null);
  const [gameState, setGameState] = useState<any>(null);
  const [currentTurnHits, setCurrentTurnHits] = useState<SerializedSegment[]>([]);
  const [lastHit, setLastHit] = useState<SerializedSegment | null>(null);
  const [spectatorCount, setSpectatorCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const socketRef = useRef<TypedSocket | null>(null);

  useEffect(() => {
    if (!code) return;

    const socket: TypedSocket = io(WS_URL, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("[useSpectator] Connected, joining room:", code);

      socket.emit("room:join", { code: code.toUpperCase() }, (response) => {
        if (response.ok && response.roomInfo) {
          setState("joined");
          setRoomInfo(response.roomInfo);
          setGameType(response.roomInfo.gameType);
          setSpectatorCount(response.roomInfo.spectatorCount);
          console.log("[useSpectator] Joined room:", response.roomInfo);
        } else {
          setState("error");
          setError(response.error || "Failed to join room");
          console.error("[useSpectator] Join failed:", response.error);
        }
      });
    });

    socket.on("game:state", (data) => {
      setGameState(data.gameState);
      setCurrentTurnHits(data.currentTurnHits);
      setLastHit(data.lastHit);
      if (data.gameType) {
        setGameType(data.gameType);
      }
    });

    socket.on("game:hit", (data) => {
      setLastHit(data.segment);
    });

    socket.on("room:spectators", (data) => {
      setSpectatorCount(data.count);
    });

    socket.on("room:closed", () => {
      setState("closed");
      console.log("[useSpectator] Room was closed by host");
    });

    socket.on("room:info", (data) => {
      setRoomInfo(data);
      setSpectatorCount(data.spectatorCount);
    });

    socket.on("error", (data) => {
      setError(data.message);
    });

    socket.on("disconnect", () => {
      console.log("[useSpectator] Disconnected");
    });

    return () => {
      socket.emit("room:leave", { code });
      socket.disconnect();
      socketRef.current = null;
    };
  }, [code]);

  const leave = useCallback(() => {
    const socket = socketRef.current;
    if (socket) {
      socket.emit("room:leave", { code });
      socket.disconnect();
    }
  }, [code]);

  return {
    state,
    roomInfo,
    gameType,
    gameState,
    currentTurnHits,
    lastHit,
    spectatorCount,
    error,
    leave,
  };
}
