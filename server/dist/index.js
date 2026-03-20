import { createServer } from "http";
import { Server } from "socket.io";
import { RoomManager } from "./rooms.js";
const PORT = parseInt(process.env.PORT || "3001", 10);
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:8080";
// Create HTTP server (needed for socket.io)
const httpServer = createServer((req, res) => {
    // Health check endpoint
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok", ...roomManager.getStats() }));
        return;
    }
    // CORS preflight
    res.writeHead(404);
    res.end();
});
// Create Socket.IO server with typed events
const io = new Server(httpServer, {
    cors: {
        origin: CORS_ORIGIN.split(","),
        methods: ["GET", "POST"],
    },
    // Performance tuning
    pingInterval: 25000,
    pingTimeout: 20000,
    maxHttpBufferSize: 1e6, // 1MB max message size
});
const roomManager = new RoomManager();
io.on("connection", (socket) => {
    console.log(`[Server] Client connected: ${socket.id}`);
    // ─── Host creates a room ───────────────────────────────────
    socket.on("room:create", (data, callback) => {
        try {
            const code = roomManager.createRoom(socket.id, data.gameType);
            socket.data.role = "host";
            socket.data.roomCode = code;
            // Join the socket.io room for broadcasting
            socket.join(`room:${code}`);
            callback({ ok: true, code });
        }
        catch (err) {
            console.error("[Server] room:create error:", err);
            callback({ ok: false, error: err.message });
        }
    });
    // ─── Host sends game state update ──────────────────────────
    socket.on("game:state", (data) => {
        const room = roomManager.getRoom(data.code);
        if (!room || room.hostSocketId !== socket.id)
            return;
        // Cache the latest state for late-joining spectators
        roomManager.updateGameState(data.code, {
            gameState: data.gameState,
            currentTurnHits: data.currentTurnHits,
            lastHit: data.lastHit,
        });
        // Broadcast to all spectators in the room
        socket.to(`room:${data.code}`).emit("game:state", {
            gameState: data.gameState,
            currentTurnHits: data.currentTurnHits,
            lastHit: data.lastHit,
            gameType: room.gameType,
        });
    });
    // ─── Host sends real-time dart hit ─────────────────────────
    socket.on("game:hit", (data) => {
        const room = roomManager.getRoom(data.code);
        if (!room || room.hostSocketId !== socket.id)
            return;
        // Forward to all spectators with minimal latency
        socket.to(`room:${data.code}`).volatile.emit("game:hit", {
            segment: data.segment,
        });
    });
    // ─── Spectator joins a room ────────────────────────────────
    socket.on("room:join", (data, callback) => {
        try {
            const room = roomManager.joinRoom(socket.id, data.code);
            if (!room) {
                callback({ ok: false, error: "Room not found. Check the game code and try again." });
                return;
            }
            socket.data.role = "spectator";
            socket.data.roomCode = room.code;
            // Join the socket.io room for receiving broadcasts
            socket.join(`room:${room.code}`);
            // Send room info
            const roomInfo = roomManager.getRoomInfo(room);
            callback({ ok: true, roomInfo });
            // Send the latest game state if available (for late joiners)
            if (room.latestState) {
                socket.emit("game:state", {
                    gameState: room.latestState.gameState,
                    currentTurnHits: room.latestState.currentTurnHits,
                    lastHit: room.latestState.lastHit,
                    gameType: room.gameType,
                });
            }
            // Notify host about new spectator count
            io.to(room.hostSocketId).emit("room:spectators", {
                count: room.spectatorSocketIds.size,
            });
            // Notify all spectators about updated count
            socket.to(`room:${room.code}`).emit("room:spectators", {
                count: room.spectatorSocketIds.size,
            });
        }
        catch (err) {
            console.error("[Server] room:join error:", err);
            callback({ ok: false, error: err.message });
        }
    });
    // ─── Spectator leaves a room ───────────────────────────────
    socket.on("room:leave", (data) => {
        const result = roomManager.leaveRoom(socket.id);
        if (result && !result.wasHost) {
            socket.leave(`room:${data.code}`);
            // Notify remaining participants about spectator count
            const room = roomManager.getRoom(data.code);
            if (room) {
                io.to(`room:${data.code}`).emit("room:spectators", {
                    count: room.spectatorSocketIds.size,
                });
            }
        }
    });
    // ─── Host closes the room ─────────────────────────────────
    socket.on("room:close", (data) => {
        const room = roomManager.getRoom(data.code);
        if (!room || room.hostSocketId !== socket.id)
            return;
        // Notify all spectators that the room is closed
        socket.to(`room:${data.code}`).emit("room:closed");
        // Close the room
        roomManager.closeRoom(data.code);
        socket.leave(`room:${data.code}`);
    });
    // ─── Handle disconnection ─────────────────────────────────
    socket.on("disconnect", (reason) => {
        console.log(`[Server] Client disconnected: ${socket.id} (${reason})`);
        const result = roomManager.leaveRoom(socket.id);
        if (result) {
            if (result.wasHost) {
                // Notify all spectators that the room is closed
                io.to(`room:${result.room.code}`).emit("room:closed");
                // Force all spectators out of the socket.io room
                io.in(`room:${result.room.code}`).socketsLeave(`room:${result.room.code}`);
            }
            else {
                // Notify remaining participants about spectator count
                const room = roomManager.getRoom(result.room.code);
                if (room) {
                    io.to(`room:${result.room.code}`).emit("room:spectators", {
                        count: room.spectatorSocketIds.size,
                    });
                }
            }
        }
    });
});
// Start server
httpServer.listen(PORT, () => {
    console.log(`\n  Granboard WebSocket Server`);
    console.log(`  ─────────────────────────`);
    console.log(`  Port:        ${PORT}`);
    console.log(`  CORS Origin: ${CORS_ORIGIN}`);
    console.log(`  Health:      http://localhost:${PORT}/health\n`);
});
