import { useState, useEffect, useCallback, useRef } from "react";
import { Granboard } from "@/services/granboard";
import { Segment } from "@/services/boardinfo";

export type ConnectionState = "disconnected" | "connecting" | "connected" | "error";

export function useGranboardConnection(
  onSegmentHit?: (segment: Segment) => void
) {
  const [granboard, setGranboard] = useState<Granboard | null>(null);
  const [connectionState, setConnectionState] =
    useState<ConnectionState>("disconnected");

  // Use a ref for the callback so the Granboard instance always calls the latest version
  // without needing to re-wire on every render
  const onSegmentHitRef = useRef(onSegmentHit);
  useEffect(() => {
    onSegmentHitRef.current = onSegmentHit;
  }, [onSegmentHit]);

  // Stable callback that delegates to the ref
  const stableCallback = useCallback((segment: Segment) => {
    onSegmentHitRef.current?.(segment);
  }, []);

  // Wire up the Granboard instance when it's set
  const setupBoard = useCallback((board: Granboard) => {
    /* eslint-disable react-hooks/immutability */
    board.segmentHitCallback = stableCallback;
    board.onDisconnect = () => {
      console.log("[useGranboardConnection] Board disconnected");
      setConnectionState("disconnected");
      setGranboard(null);
    };
    /* eslint-enable react-hooks/immutability */
    setGranboard(board);
    setConnectionState("connected");
  }, [stableCallback]);

  // Try to auto-connect on mount
  useEffect(() => {
    const tryAutoConnect = async () => {
      setConnectionState("connecting");
      const board = await Granboard.TryAutoConnect();
      if (board) {
        setupBoard(board);
      } else {
        setConnectionState("disconnected");
      }
    };

    tryAutoConnect();
  }, [setupBoard]); // setupBoard is stable (useCallback with stable deps)

  const connectToBoard = async () => {
    setConnectionState("connecting");
    try {
      const board = await Granboard.ConnectToBoard();
      setupBoard(board);
    } catch (error) {
      console.error(error);
      setConnectionState("error");
    }
  };

  const setLEDs = async (segments: number[]) => {
    if (granboard) {
      await granboard.setLEDs(segments);
    }
  };

  const clearLEDs = async () => {
    if (granboard) {
      await granboard.clearLEDs();
    }
  };

  return {
    granboard,
    connectionState,
    connectToBoard,
    isConnected: connectionState === "connected",
    setLEDs,
    clearLEDs,
  };
}
