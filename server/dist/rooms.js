import { customAlphabet } from "nanoid";
// Generate short, readable game codes like "DART-A7X3"
const generateCode = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ23456789", 4);
export class RoomManager {
    rooms = new Map();
    socketToRoom = new Map();
    // Room expiry: 4 hours
    ROOM_TTL_MS = 4 * 60 * 60 * 1000;
    constructor() {
        // Clean up expired rooms every 5 minutes
        setInterval(() => this.cleanupExpiredRooms(), 5 * 60 * 1000);
    }
    createRoom(hostSocketId, gameType) {
        // Generate a unique code
        let code;
        do {
            code = `${generateCode()}-${generateCode()}`;
        } while (this.rooms.has(code));
        const room = {
            code,
            gameType,
            hostSocketId,
            spectatorSocketIds: new Set(),
            createdAt: Date.now(),
            lastActivity: Date.now(),
            latestState: null,
        };
        this.rooms.set(code, room);
        this.socketToRoom.set(hostSocketId, code);
        console.log(`[RoomManager] Room created: ${code} (game: ${gameType}, host: ${hostSocketId})`);
        return code;
    }
    joinRoom(spectatorSocketId, code) {
        const room = this.rooms.get(code.toUpperCase());
        if (!room)
            return null;
        room.spectatorSocketIds.add(spectatorSocketId);
        room.lastActivity = Date.now();
        this.socketToRoom.set(spectatorSocketId, code);
        console.log(`[RoomManager] Spectator ${spectatorSocketId} joined room ${code} (${room.spectatorSocketIds.size} spectators)`);
        return room;
    }
    leaveRoom(socketId) {
        const code = this.socketToRoom.get(socketId);
        if (!code)
            return null;
        const room = this.rooms.get(code);
        if (!room)
            return null;
        this.socketToRoom.delete(socketId);
        if (room.hostSocketId === socketId) {
            // Host left - close the room
            console.log(`[RoomManager] Host left room ${code}, closing room`);
            this.closeRoom(code);
            return { room, wasHost: true };
        }
        else {
            // Spectator left
            room.spectatorSocketIds.delete(socketId);
            room.lastActivity = Date.now();
            console.log(`[RoomManager] Spectator ${socketId} left room ${code} (${room.spectatorSocketIds.size} spectators)`);
            return { room, wasHost: false };
        }
    }
    closeRoom(code) {
        const room = this.rooms.get(code);
        if (!room)
            return null;
        // Clean up socket mappings
        this.socketToRoom.delete(room.hostSocketId);
        for (const spectatorId of room.spectatorSocketIds) {
            this.socketToRoom.delete(spectatorId);
        }
        this.rooms.delete(code);
        console.log(`[RoomManager] Room ${code} closed`);
        return room;
    }
    getRoom(code) {
        return this.rooms.get(code.toUpperCase()) || null;
    }
    getRoomBySocket(socketId) {
        const code = this.socketToRoom.get(socketId);
        if (!code)
            return null;
        return this.rooms.get(code) || null;
    }
    updateGameState(code, state) {
        const room = this.rooms.get(code);
        if (room) {
            room.latestState = state;
            room.lastActivity = Date.now();
        }
    }
    getRoomInfo(room) {
        return {
            code: room.code,
            gameType: room.gameType,
            hostConnected: true,
            spectatorCount: room.spectatorSocketIds.size,
            createdAt: room.createdAt,
        };
    }
    getStats() {
        return {
            totalRooms: this.rooms.size,
            totalConnections: this.socketToRoom.size,
        };
    }
    cleanupExpiredRooms() {
        const now = Date.now();
        for (const [code, room] of this.rooms) {
            if (now - room.lastActivity > this.ROOM_TTL_MS) {
                console.log(`[RoomManager] Cleaning up expired room ${code}`);
                this.closeRoom(code);
            }
        }
    }
}
