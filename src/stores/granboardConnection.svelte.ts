import { Granboard } from '@/services/granboard';
import type { Segment } from '@/services/boardinfo';

export type ConnectionState = 'disconnected' | 'connecting' | 'connected' | 'error';

function createGranboardConnection(onSegmentHit?: (segment: Segment) => void) {
  let granboard = $state<Granboard | null>(null);
  let connectionState = $state<ConnectionState>('disconnected');

  // Mutable ref for the callback so we can update it without re-wiring the board
  let onSegmentHitRef: ((segment: Segment) => void) | undefined = onSegmentHit;

  function setOnSegmentHit(cb: ((segment: Segment) => void) | undefined) {
    onSegmentHitRef = cb;
  }

  // Stable callback that delegates to the ref
  function stableCallback(segment: Segment) {
    onSegmentHitRef?.(segment);
  }

  // Wire up the Granboard instance
  function setupBoard(board: Granboard) {
    board.segmentHitCallback = stableCallback;
    board.onDisconnect = () => {
      console.log('[granboardConnection] Board disconnected');
      connectionState = 'disconnected';
      granboard = null;
    };
    granboard = board;
    connectionState = 'connected';
  }

  /** Call once on mount to attempt auto-connect */
  async function init() {
    connectionState = 'connecting';
    const board = await Granboard.TryAutoConnect();
    if (board) {
      setupBoard(board);
    } else {
      connectionState = 'disconnected';
    }
  }

  async function connectToBoard() {
    connectionState = 'connecting';
    try {
      const board = await Granboard.ConnectToBoard();
      setupBoard(board);
    } catch (error) {
      console.error(error);
      connectionState = 'error';
    }
  }

  async function setLEDs(segments: number[]) {
    if (granboard) {
      await granboard.setLEDs(segments);
    }
  }

  async function clearLEDs() {
    if (granboard) {
      await granboard.clearLEDs();
    }
  }

  return {
    get granboard() { return granboard; },
    get connectionState() { return connectionState; },
    get isConnected() { return connectionState === 'connected'; },
    init,
    connectToBoard,
    setOnSegmentHit,
    setLEDs,
    clearLEDs,
  };
}

export { createGranboardConnection };
