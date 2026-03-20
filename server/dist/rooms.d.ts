/**
 * Room management for the WebSocket game server.
 * Each room has a host and zero or more spectators.
 */
export interface Room {
    code: string;
    gameType: string;
    hostSocketId: string;
    spectatorSocketIds: Set<string>;
    createdAt: number;
    lastActivity: number;
    latestState: {
        gameState: Record<string, unknown>;
        currentTurnHits: unknown[];
        lastHit: unknown | null;
    } | null;
}
export declare class RoomManager {
    private rooms;
    private socketToRoom;
    private readonly ROOM_TTL_MS;
    constructor();
    createRoom(hostSocketId: string, gameType: string): string;
    joinRoom(spectatorSocketId: string, code: string): Room | null;
    leaveRoom(socketId: string): {
        room: Room;
        wasHost: boolean;
    } | null;
    closeRoom(code: string): Room | null;
    getRoom(code: string): Room | null;
    getRoomBySocket(socketId: string): Room | null;
    updateGameState(code: string, state: Room["latestState"]): void;
    getRoomInfo(room: Room): {
        code: string;
        gameType: any;
        hostConnected: boolean;
        spectatorCount: number;
        createdAt: number;
    };
    getStats(): {
        totalRooms: number;
        totalConnections: number;
    };
    private cleanupExpiredRooms;
}
