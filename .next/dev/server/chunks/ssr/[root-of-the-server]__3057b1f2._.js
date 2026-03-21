module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/services/boardinfo.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateSegment",
    ()=>CreateSegment,
    "SegmentID",
    ()=>SegmentID,
    "SegmentSection",
    ()=>SegmentSection,
    "SegmentType",
    ()=>SegmentType,
    "SegmentTypeToString",
    ()=>SegmentTypeToString
]);
var SegmentID = /*#__PURE__*/ function(SegmentID) {
    SegmentID[SegmentID["INNER_1"] = 0] = "INNER_1";
    SegmentID[SegmentID["TRP_1"] = 1] = "TRP_1";
    SegmentID[SegmentID["OUTER_1"] = 2] = "OUTER_1";
    SegmentID[SegmentID["DBL_1"] = 3] = "DBL_1";
    SegmentID[SegmentID["INNER_2"] = 4] = "INNER_2";
    SegmentID[SegmentID["TRP_2"] = 5] = "TRP_2";
    SegmentID[SegmentID["OUTER_2"] = 6] = "OUTER_2";
    SegmentID[SegmentID["DBL_2"] = 7] = "DBL_2";
    SegmentID[SegmentID["INNER_3"] = 8] = "INNER_3";
    SegmentID[SegmentID["TRP_3"] = 9] = "TRP_3";
    SegmentID[SegmentID["OUTER_3"] = 10] = "OUTER_3";
    SegmentID[SegmentID["DBL_3"] = 11] = "DBL_3";
    SegmentID[SegmentID["INNER_4"] = 12] = "INNER_4";
    SegmentID[SegmentID["TRP_4"] = 13] = "TRP_4";
    SegmentID[SegmentID["OUTER_4"] = 14] = "OUTER_4";
    SegmentID[SegmentID["DBL_4"] = 15] = "DBL_4";
    SegmentID[SegmentID["INNER_5"] = 16] = "INNER_5";
    SegmentID[SegmentID["TRP_5"] = 17] = "TRP_5";
    SegmentID[SegmentID["OUTER_5"] = 18] = "OUTER_5";
    SegmentID[SegmentID["DBL_5"] = 19] = "DBL_5";
    SegmentID[SegmentID["INNER_6"] = 20] = "INNER_6";
    SegmentID[SegmentID["TRP_6"] = 21] = "TRP_6";
    SegmentID[SegmentID["OUTER_6"] = 22] = "OUTER_6";
    SegmentID[SegmentID["DBL_6"] = 23] = "DBL_6";
    SegmentID[SegmentID["INNER_7"] = 24] = "INNER_7";
    SegmentID[SegmentID["TRP_7"] = 25] = "TRP_7";
    SegmentID[SegmentID["OUTER_7"] = 26] = "OUTER_7";
    SegmentID[SegmentID["DBL_7"] = 27] = "DBL_7";
    SegmentID[SegmentID["INNER_8"] = 28] = "INNER_8";
    SegmentID[SegmentID["TRP_8"] = 29] = "TRP_8";
    SegmentID[SegmentID["OUTER_8"] = 30] = "OUTER_8";
    SegmentID[SegmentID["DBL_8"] = 31] = "DBL_8";
    SegmentID[SegmentID["INNER_9"] = 32] = "INNER_9";
    SegmentID[SegmentID["TRP_9"] = 33] = "TRP_9";
    SegmentID[SegmentID["OUTER_9"] = 34] = "OUTER_9";
    SegmentID[SegmentID["DBL_9"] = 35] = "DBL_9";
    SegmentID[SegmentID["INNER_10"] = 36] = "INNER_10";
    SegmentID[SegmentID["TRP_10"] = 37] = "TRP_10";
    SegmentID[SegmentID["OUTER_10"] = 38] = "OUTER_10";
    SegmentID[SegmentID["DBL_10"] = 39] = "DBL_10";
    SegmentID[SegmentID["INNER_11"] = 40] = "INNER_11";
    SegmentID[SegmentID["TRP_11"] = 41] = "TRP_11";
    SegmentID[SegmentID["OUTER_11"] = 42] = "OUTER_11";
    SegmentID[SegmentID["DBL_11"] = 43] = "DBL_11";
    SegmentID[SegmentID["INNER_12"] = 44] = "INNER_12";
    SegmentID[SegmentID["TRP_12"] = 45] = "TRP_12";
    SegmentID[SegmentID["OUTER_12"] = 46] = "OUTER_12";
    SegmentID[SegmentID["DBL_12"] = 47] = "DBL_12";
    SegmentID[SegmentID["INNER_13"] = 48] = "INNER_13";
    SegmentID[SegmentID["TRP_13"] = 49] = "TRP_13";
    SegmentID[SegmentID["OUTER_13"] = 50] = "OUTER_13";
    SegmentID[SegmentID["DBL_13"] = 51] = "DBL_13";
    SegmentID[SegmentID["INNER_14"] = 52] = "INNER_14";
    SegmentID[SegmentID["TRP_14"] = 53] = "TRP_14";
    SegmentID[SegmentID["OUTER_14"] = 54] = "OUTER_14";
    SegmentID[SegmentID["DBL_14"] = 55] = "DBL_14";
    SegmentID[SegmentID["INNER_15"] = 56] = "INNER_15";
    SegmentID[SegmentID["TRP_15"] = 57] = "TRP_15";
    SegmentID[SegmentID["OUTER_15"] = 58] = "OUTER_15";
    SegmentID[SegmentID["DBL_15"] = 59] = "DBL_15";
    SegmentID[SegmentID["INNER_16"] = 60] = "INNER_16";
    SegmentID[SegmentID["TRP_16"] = 61] = "TRP_16";
    SegmentID[SegmentID["OUTER_16"] = 62] = "OUTER_16";
    SegmentID[SegmentID["DBL_16"] = 63] = "DBL_16";
    SegmentID[SegmentID["INNER_17"] = 64] = "INNER_17";
    SegmentID[SegmentID["TRP_17"] = 65] = "TRP_17";
    SegmentID[SegmentID["OUTER_17"] = 66] = "OUTER_17";
    SegmentID[SegmentID["DBL_17"] = 67] = "DBL_17";
    SegmentID[SegmentID["INNER_18"] = 68] = "INNER_18";
    SegmentID[SegmentID["TRP_18"] = 69] = "TRP_18";
    SegmentID[SegmentID["OUTER_18"] = 70] = "OUTER_18";
    SegmentID[SegmentID["DBL_18"] = 71] = "DBL_18";
    SegmentID[SegmentID["INNER_19"] = 72] = "INNER_19";
    SegmentID[SegmentID["TRP_19"] = 73] = "TRP_19";
    SegmentID[SegmentID["OUTER_19"] = 74] = "OUTER_19";
    SegmentID[SegmentID["DBL_19"] = 75] = "DBL_19";
    SegmentID[SegmentID["INNER_20"] = 76] = "INNER_20";
    SegmentID[SegmentID["TRP_20"] = 77] = "TRP_20";
    SegmentID[SegmentID["OUTER_20"] = 78] = "OUTER_20";
    SegmentID[SegmentID["DBL_20"] = 79] = "DBL_20";
    SegmentID[SegmentID["BULL"] = 80] = "BULL";
    SegmentID[SegmentID["DBL_BULL"] = 81] = "DBL_BULL";
    SegmentID[SegmentID["MISS"] = 82] = "MISS";
    SegmentID[SegmentID["BUST"] = 83] = "BUST";
    SegmentID[SegmentID["RESET_BUTTON"] = 84] = "RESET_BUTTON";
    return SegmentID;
}({});
var SegmentSection = /*#__PURE__*/ function(SegmentSection) {
    SegmentSection[SegmentSection["One"] = 1] = "One";
    SegmentSection[SegmentSection["Two"] = 2] = "Two";
    SegmentSection[SegmentSection["Three"] = 3] = "Three";
    SegmentSection[SegmentSection["Four"] = 4] = "Four";
    SegmentSection[SegmentSection["Five"] = 5] = "Five";
    SegmentSection[SegmentSection["Six"] = 6] = "Six";
    SegmentSection[SegmentSection["Seven"] = 7] = "Seven";
    SegmentSection[SegmentSection["Eight"] = 8] = "Eight";
    SegmentSection[SegmentSection["Nine"] = 9] = "Nine";
    SegmentSection[SegmentSection["Ten"] = 10] = "Ten";
    SegmentSection[SegmentSection["Eleven"] = 11] = "Eleven";
    SegmentSection[SegmentSection["Twelve"] = 12] = "Twelve";
    SegmentSection[SegmentSection["Thirteen"] = 13] = "Thirteen";
    SegmentSection[SegmentSection["Fourteen"] = 14] = "Fourteen";
    SegmentSection[SegmentSection["Fifteen"] = 15] = "Fifteen";
    SegmentSection[SegmentSection["Sixteen"] = 16] = "Sixteen";
    SegmentSection[SegmentSection["Seventeen"] = 17] = "Seventeen";
    SegmentSection[SegmentSection["Eighteen"] = 18] = "Eighteen";
    SegmentSection[SegmentSection["Nineteen"] = 19] = "Nineteen";
    SegmentSection[SegmentSection["Twenty"] = 20] = "Twenty";
    SegmentSection[SegmentSection["BULL"] = 25] = "BULL";
    SegmentSection[SegmentSection["Other"] = 26] = "Other";
    return SegmentSection;
}({});
var SegmentType = /*#__PURE__*/ function(SegmentType) {
    SegmentType[SegmentType["Single"] = 1] = "Single";
    SegmentType[SegmentType["Double"] = 2] = "Double";
    SegmentType[SegmentType["Triple"] = 3] = "Triple";
    SegmentType[SegmentType["Other"] = 4] = "Other";
    return SegmentType;
}({});
const SegmentTypeToString = (type, shorthand)=>{
    switch(type){
        case 1:
            return "";
        case 2:
            return shorthand ? "D" : "Double";
        case 3:
            return shorthand ? "T" : "Triple";
    }
    return "";
};
const CreateSegment = (segmentId)=>{
    // There are 80 regular segments, and then 3 special (bullseye, double bullseye, and reset button)
    if (segmentId < 80) {
        let Type = 4;
        switch(segmentId % 4){
            case 1:
                Type = 3;
                break;
            case 3:
                Type = 2;
                break;
            default:
                Type = 1;
        }
        const Section = Math.ceil((segmentId + 1) / 4);
        const Value = Section * Type;
        const LongName = SegmentTypeToString(Type, false) + " " + Section;
        const ShortName = SegmentTypeToString(Type, true) + Section;
        return {
            ID: segmentId,
            Type,
            Section,
            Value,
            LongName,
            ShortName
        };
    } else {
        // The segment is either bullseye or the reset button
        switch(segmentId){
            case 80:
            case 81:
                let Type = segmentId === 80 ? 1 : 2;
                let Section = 25;
                let Value = segmentId === 80 ? 25 : 50;
                let LongName = SegmentTypeToString(Type, false) + " Bullseye";
                let ShortName = SegmentTypeToString(Type, true) + "BULL";
                return {
                    ID: segmentId,
                    Type,
                    Section,
                    Value,
                    LongName,
                    ShortName
                };
            case 84:
                return {
                    ID: segmentId,
                    Type: 4,
                    Section: 26,
                    Value: 0,
                    LongName: "Reset Button",
                    ShortName: "RST"
                };
            case 83:
                return {
                    ID: segmentId,
                    Type: 4,
                    Section: 26,
                    Value: 0,
                    LongName: "Bust",
                    ShortName: "Bust"
                };
            case 82:
            default:
                return {
                    ID: segmentId,
                    Type: 4,
                    Section: 26,
                    Value: 0,
                    LongName: "Miss",
                    ShortName: "Miss"
                };
        }
    }
};
}),
"[project]/services/cricket.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CRICKET_NUMBERS",
    ()=>CRICKET_NUMBERS,
    "CricketGameMode",
    ()=>CricketGameMode,
    "calculateMPR",
    ()=>calculateMPR,
    "cloneGameState",
    ()=>cloneGameState,
    "createInitialGameState",
    ()=>createInitialGameState,
    "createInitialPlayerState",
    ()=>createInitialPlayerState,
    "getPlayerScore",
    ()=>getPlayerScore,
    "getUnclosedNumbers",
    ()=>getUnclosedNumbers,
    "nextPlayer",
    ()=>nextPlayer,
    "processDartHit",
    ()=>processDartHit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
;
const CRICKET_NUMBERS = [
    15,
    16,
    17,
    18,
    19,
    20,
    25
];
var CricketGameMode = /*#__PURE__*/ function(CricketGameMode) {
    CricketGameMode["Standard"] = "standard";
    CricketGameMode["CutThroat"] = "cutthroat";
    return CricketGameMode;
}({});
const createInitialPlayerState = (player)=>{
    const scores = new Map();
    CRICKET_NUMBERS.forEach((num)=>{
        scores.set(num, {
            marks: 0,
            points: 0
        });
    });
    return {
        player,
        scores,
        totalPoints: 0,
        totalMarks: 0,
        roundsPlayed: 0
    };
};
const createInitialGameState = (players, mode = "standard", maxRounds = 20)=>{
    return {
        players: players.map(createInitialPlayerState),
        currentPlayerIndex: 0,
        dartsThrown: 0,
        currentRound: 1,
        maxRounds,
        gameStarted: true,
        gameFinished: false,
        winner: null,
        mode
    };
};
const processDartHit = (gameState, segment, hitId)=>{
    if (!gameState.gameStarted || gameState.gameFinished) {
        return gameState;
    }
    // Don't process dart hit if 3 darts have already been thrown
    if (gameState.dartsThrown >= 3) {
        return gameState;
    }
    // Prevent double processing (React Strict Mode issue)
    if (hitId && gameState.lastProcessedHit === hitId) {
        console.log("⚠️ Hit already processed:", hitId);
        return gameState;
    }
    const newState = {
        ...gameState
    };
    const currentPlayer = newState.players[newState.currentPlayerIndex];
    // Check if the segment is a cricket number
    const section = segment.Section;
    if (!CRICKET_NUMBERS.includes(section)) {
        // Not a cricket number, just advance the dart count (max 3)
        newState.dartsThrown = Math.min(newState.dartsThrown + 1, 3);
        return newState;
    }
    const cricketNumber = section;
    const currentScore = currentPlayer.scores.get(cricketNumber);
    // Calculate marks based on segment type
    let marksToAdd = 0;
    switch(segment.Type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Single:
            marksToAdd = 1;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double:
            marksToAdd = 2;
            break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Triple:
            marksToAdd = 3;
            break;
    }
    const newMarks = Math.min(currentScore.marks + marksToAdd, 3);
    const overflowMarks = currentScore.marks + marksToAdd - newMarks;
    // Track total marks for MPR calculation (only count marks that actually count, max 3 per number)
    const actualMarksAdded = newMarks - currentScore.marks;
    currentPlayer.totalMarks += actualMarksAdded;
    console.log("📊 Score calculation:", {
        number: cricketNumber,
        segmentType: segment.Type,
        marksToAdd,
        previousMarks: currentScore.marks,
        newMarks,
        overflowMarks,
        actualMarksAdded
    });
    // Calculate overflow marks for scoring
    let scoringMarks = 0;
    if (currentScore.marks >= 3 && overflowMarks > 0) {
        scoringMarks = overflowMarks;
    } else if (newMarks >= 3 && currentScore.marks < 3) {
        scoringMarks = currentScore.marks + marksToAdd - 3;
    }
    // Apply scoring based on game mode
    if (scoringMarks > 0) {
        const pointsToDistribute = scoringMarks * cricketNumber;
        if (newState.mode === "cutthroat") {
            // Cut Throat: Give points to ALL opponents who haven't closed this number
            newState.players.forEach((p, idx)=>{
                if (idx !== newState.currentPlayerIndex && p.scores.get(cricketNumber).marks < 3) {
                    const opponentScore = p.scores.get(cricketNumber);
                    p.scores.set(cricketNumber, {
                        marks: opponentScore.marks,
                        points: opponentScore.points + pointsToDistribute
                    });
                    p.totalPoints += pointsToDistribute;
                }
            });
        } else {
            // Standard: Give points to yourself if any opponent hasn't closed
            const anyOpponentOpen = newState.players.some((p, idx)=>idx !== newState.currentPlayerIndex && p.scores.get(cricketNumber).marks < 3);
            if (anyOpponentOpen) {
                currentPlayer.scores.set(cricketNumber, {
                    marks: newMarks,
                    points: currentScore.points + pointsToDistribute
                });
                currentPlayer.totalPoints += pointsToDistribute;
            }
        }
    }
    // Update marks (always update marks regardless of points)
    const updatedScore = currentPlayer.scores.get(cricketNumber);
    currentPlayer.scores.set(cricketNumber, {
        marks: newMarks,
        points: updatedScore.points
    });
    console.log("✅ Final update:", {
        player: currentPlayer.player.name,
        number: cricketNumber,
        finalMarks: newMarks,
        finalPoints: updatedScore.points
    });
    // Check for win condition
    if (checkWinCondition(currentPlayer, newState.players, newState.mode)) {
        newState.gameFinished = true;
        newState.winner = currentPlayer.player;
    }
    // Increment darts thrown (max 3)
    newState.dartsThrown = Math.min(newState.dartsThrown + 1, 3);
    // Mark this hit as processed
    if (hitId) {
        newState.lastProcessedHit = hitId;
    }
    return newState;
};
const cloneGameState = (state)=>{
    return {
        ...state,
        players: state.players.map((playerState)=>({
                ...playerState,
                scores: new Map(Array.from(playerState.scores.entries()).map(([num, score])=>[
                        num,
                        {
                            ...score
                        }
                    ]))
            }))
    };
};
const nextPlayer = (gameState)=>{
    if (!gameState.gameStarted || gameState.gameFinished) {
        return gameState;
    }
    // Deep clone the game state to ensure React detects the change
    const newState = cloneGameState(gameState);
    // Increment rounds played for current player (they just finished their turn)
    newState.players[newState.currentPlayerIndex].roundsPlayed++;
    // Reset darts thrown for next player
    newState.dartsThrown = 0;
    // Clear last processed hit for new turn
    newState.lastProcessedHit = undefined;
    // Move to next player
    const nextPlayerIndex = (newState.currentPlayerIndex + 1) % newState.players.length;
    // Check if we're starting a new round (back to first player)
    if (nextPlayerIndex === 0) {
        newState.currentRound++;
        // Check if we've reached max rounds
        if (newState.maxRounds > 0 && newState.currentRound > newState.maxRounds) {
            newState.gameFinished = true;
            // Determine winner by score
            if (newState.mode === "cutthroat") {
                // Cut Throat: lowest score wins
                const minScore = Math.min(...newState.players.map((p)=>p.totalPoints));
                const winner = newState.players.find((p)=>p.totalPoints === minScore);
                newState.winner = winner?.player || null;
            } else {
                // Standard: highest score wins
                const maxScore = Math.max(...newState.players.map((p)=>p.totalPoints));
                const winner = newState.players.find((p)=>p.totalPoints === maxScore);
                newState.winner = winner?.player || null;
            }
        }
    }
    newState.currentPlayerIndex = nextPlayerIndex;
    return newState;
};
const checkWinCondition = (player, allPlayers, mode)=>{
    // Check if player has closed all numbers
    const allClosed = CRICKET_NUMBERS.every((num)=>player.scores.get(num).marks >= 3);
    if (!allClosed) return false;
    // Player has closed all numbers
    if (mode === "cutthroat") {
        // Cut Throat: Win with LOWEST score
        const minScore = Math.min(...allPlayers.map((p)=>p.totalPoints));
        return player.totalPoints <= minScore;
    } else {
        // Standard: Win with HIGHEST score
        const maxScore = Math.max(...allPlayers.map((p)=>p.totalPoints));
        return player.totalPoints >= maxScore;
    }
};
const getPlayerScore = (playerState, number)=>{
    return playerState.scores.get(number);
};
const calculateMPR = (playerState)=>{
    if (playerState.roundsPlayed === 0) return 0;
    return Math.round(playerState.totalMarks / playerState.roundsPlayed * 100) / 100;
};
const getUnclosedNumbers = (playerState)=>{
    const unclosed = [];
    CRICKET_NUMBERS.forEach((num)=>{
        const score = playerState.scores.get(num);
        if (score.marks < 3) {
            unclosed.push(num);
        }
    });
    return unclosed;
};
}),
"[project]/app/cricket/components/PlayerOrderModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerOrderModal",
    ()=>PlayerOrderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function PlayerOrderModal({ players, granboard, onOrderDetermined, onClose }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [currentPlayerIndex, setCurrentPlayerIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [throws, setThrows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(players.map((p)=>({
            player: p,
            segment: null,
            score: 0
        })));
    // Calculate score - use the actual dart score
    // Highest score starts first
    const calculateScore = (segment)=>{
        return segment.Value;
    };
    // Update callback when currentPlayerIndex changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        /* eslint-disable react-hooks/immutability */ granboard.segmentHitCallback = (segment)=>{
            /* eslint-enable react-hooks/immutability */ // Ignore reset button
            if (segment.ID === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].RESET_BUTTON) return;
            const score = calculateScore(segment);
            setThrows((prev)=>{
                const newThrows = [
                    ...prev
                ];
                newThrows[currentPlayerIndex] = {
                    ...newThrows[currentPlayerIndex],
                    segment,
                    score
                };
                return newThrows;
            });
            // Move to next player after a short delay (if not last player)
            if (currentPlayerIndex < throws.length - 1) {
                setTimeout(()=>{
                    setCurrentPlayerIndex((prev)=>prev + 1);
                }, 1500);
            }
        };
    }, [
        granboard,
        currentPlayerIndex,
        throws.length
    ]);
    const handleFinish = ()=>{
        // Sort players by score (highest first)
        const sortedThrows = [
            ...throws
        ].sort((a, b)=>b.score - a.score);
        const orderedPlayers = sortedThrows.map((t)=>t.player);
        onOrderDetermined(orderedPlayers);
    };
    const handleReset = ()=>{
        // Reset all throws to start over
        setThrows(players.map((p)=>({
                player: p,
                segment: null,
                score: 0
            })));
        setCurrentPlayerIndex(0);
    };
    const allPlayersThrew = throws.every((t)=>t.segment !== null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-800 rounded-2xl p-8 max-w-2xl w-full mx-4 border-2 border-green-500 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-white",
                            children: t('cricket.playerOrder.modal.title')
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-slate-400 hover:text-white text-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faXmark"]
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-4 bg-accent-bg rounded-xl border border-accent/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-accent",
                        children: t('cricket.playerOrder.modal.subtitle')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this),
                !allPlayersThrew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-6 bg-green-900/30 rounded-xl border-2 border-green-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-bold text-green-400 text-center",
                            children: t('cricket.playerOrder.modal.currentTurn', {
                                player: throws[currentPlayerIndex].player.name
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-slate-300 mt-2",
                            children: t('cricket.playerOrder.modal.throwDart')
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 mb-6",
                    children: throws.map((throwData, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-4 rounded-xl border-2 transition-all ${index === currentPlayerIndex && !allPlayersThrew ? "border-green-500 bg-green-900/20" : throwData.segment ? "border-slate-600 bg-slate-700/50" : "border-slate-700 bg-slate-900/50"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-10 h-10 flex items-center justify-center text-xl font-bold text-green-400 bg-slate-800 rounded-full",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-medium text-white",
                                                children: throwData.player.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right",
                                        children: throwData.segment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-green-400",
                                                    children: throwData.segment.ShortName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-400",
                                                    children: [
                                                        t('cricket.playerOrder.modal.score'),
                                                        ": ",
                                                        throwData.score
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-slate-500",
                                            children: t('cricket.playerOrder.modal.waiting')
                                        }, void 0, false, {
                                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                            lineNumber: 149,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this)
                        }, throwData.player.id, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                allPlayersThrew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleReset,
                            className: "flex-1 px-8 py-4 bg-orange-700 text-white rounded-xl hover:bg-orange-600 transition-all font-bold text-xl shadow-lg flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faRotateRight"]
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 15
                                }, this),
                                " ",
                                t('cricket.playerOrder.modal.retry')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleFinish,
                            className: "flex-1 px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all font-bold text-xl shadow-lg flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCheck"]
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                " ",
                                t('cricket.playerOrder.modal.confirm')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cricket/components/PlayerOrderModal.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/components/PlayerOrderDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerOrderDialog",
    ()=>PlayerOrderDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function PlayerOrderDialog({ players, onOrderSet, onThrowForOrder, onClose }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [showManualOrder, setShowManualOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [manualPlayers, setManualPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        ...players
    ]);
    const movePlayer = (index, direction)=>{
        const newPlayers = [
            ...manualPlayers
        ];
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        if (targetIndex < 0 || targetIndex >= newPlayers.length) return;
        // Swap players
        [newPlayers[index], newPlayers[targetIndex]] = [
            newPlayers[targetIndex],
            newPlayers[index]
        ];
        setManualPlayers(newPlayers);
    };
    const handleValidateManualOrder = ()=>{
        onOrderSet(manualPlayers);
    };
    if (showManualOrder) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-theme-elevated rounded-2xl p-8 max-w-2xl w-full mx-4 border border-theme-card shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-theme-primary",
                                children: t('cricket.playerOrder.dialog.manualTitle')
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowManualOrder(false),
                                className: "text-theme-tertiary hover:text-theme-primary text-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-accent-bg rounded-xl border border-accent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-accent",
                            children: t('cricket.playerOrder.dialog.manualSubtitle')
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-6",
                        children: manualPlayers.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-4 bg-theme-card rounded-xl border border-theme-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-10 h-10 flex items-center justify-center text-2xl font-bold text-green-400 bg-theme-secondary rounded-full",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xl font-medium text-theme-primary",
                                                children: player.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>movePlayer(index, "up"),
                                                disabled: index === 0,
                                                className: `px-3 py-2 rounded-lg font-bold transition-all ${index === 0 ? "bg-theme-interactive text-theme-muted cursor-not-allowed" : "bg-accent text-white hover:opacity-90"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowUp"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>movePlayer(index, "down"),
                                                disabled: index === manualPlayers.length - 1,
                                                className: `px-3 py-2 rounded-lg font-bold transition-all ${index === manualPlayers.length - 1 ? "bg-theme-interactive text-theme-muted cursor-not-allowed" : "bg-accent text-white hover:opacity-90"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowDown"]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, player.id, true, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleValidateManualOrder,
                        className: "w-full px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all font-bold text-xl shadow-lg flex items-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCheck"]
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            " ",
                            t('cricket.playerOrder.dialog.confirm')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-theme-elevated rounded-2xl p-8 max-w-2xl w-full mx-4 border border-theme-card shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-theme-primary",
                            children: t('cricket.playerOrder.dialog.title')
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-theme-tertiary hover:text-theme-primary text-2xl transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faXmark"]
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 p-4 bg-theme-secondary rounded-xl border border-theme-card",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-theme-primary font-medium",
                        children: t('cricket.playerOrder.dialog.subtitle')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "order-random-button",
                            onClick: ()=>{
                                const shuffled = [
                                    ...players
                                ].sort(()=>Math.random() - 0.5);
                                onOrderSet(shuffled);
                            },
                            className: "w-full p-6 bg-purple-700 text-white rounded-xl hover:bg-purple-600 transition-all shadow-lg text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faDice"],
                                        className: "text-4xl w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold",
                                                children: t('cricket.playerOrder.dialog.randomOrder')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-purple-200",
                                                children: t('cricket.playerOrder.dialog.randomOrderDesc')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "order-throw-button",
                            onClick: ()=>{
                                onThrowForOrder();
                                onClose();
                            },
                            className: "w-full p-6 bg-accent text-white rounded-xl hover:opacity-90 transition-all shadow-lg text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBullseye"],
                                        className: "text-4xl w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold",
                                                children: t('cricket.playerOrder.dialog.throwForOrder')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-accent",
                                                children: t('cricket.playerOrder.dialog.throwForOrderDesc')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 183,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "order-manual-button",
                            onClick: ()=>setShowManualOrder(true),
                            className: "w-full p-6 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all shadow-lg text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faPencil"],
                                        className: "text-4xl w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold",
                                                children: t('cricket.playerOrder.dialog.manualOrder')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-green-200",
                                                children: t('cricket.playerOrder.dialog.manualOrderDesc')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "order-current-button",
                            onClick: ()=>{
                                onOrderSet(players);
                                onClose();
                            },
                            className: "w-full p-6 bg-slate-600 text-white rounded-xl hover:bg-slate-500 transition-all shadow-lg text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faClipboardList"],
                                        className: "text-4xl w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-bold",
                                                children: t('cricket.playerOrder.dialog.currentOrder')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-200",
                                                children: t('cricket.playerOrder.dialog.currentOrderDesc')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cricket/components/PlayerOrderDialog.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
}),
"[project]/services/granboard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Granboard",
    ()=>Granboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
;
const GRANBOARD_UUID = "442f1570-8a00-9a28-cbe1-e1d4212d53eb";
const SEGMENT_MAPPING = {
    "50-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_1,
    "50-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_1,
    "50-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_1,
    "50-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_1,
    "57-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_2,
    "57-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_2,
    "57-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_2,
    "56-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_2,
    "55-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_3,
    "55-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_3,
    "55-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_3,
    "56-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_3,
    "48-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_4,
    "48-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_4,
    "48-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_4,
    "48-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_4,
    "53-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_5,
    "53-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_5,
    "53-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_5,
    "52-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_5,
    "49-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_6,
    "49-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_6,
    "49-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_6,
    "52-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_6,
    "49-49-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_7,
    "49-49-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_7,
    "49-49-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_7,
    "56-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_7,
    "54-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_8,
    "54-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_8,
    "54-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_8,
    "54-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_8,
    "57-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_9,
    "57-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_9,
    "57-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_9,
    "57-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_9,
    "50-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_10,
    "50-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_10,
    "50-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_10,
    "52-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_10,
    "55-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_11,
    "55-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_11,
    "55-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_11,
    "55-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_11,
    "53-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_12,
    "53-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_12,
    "53-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_12,
    "53-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_12,
    "48-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_13,
    "48-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_13,
    "48-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_13,
    "52-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_13,
    "49-48-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_14,
    "49-48-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_14,
    "49-48-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_14,
    "49-48-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_14,
    "51-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_15,
    "51-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_15,
    "51-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_15,
    "52-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_15,
    "49-49-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_16,
    "49-49-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_16,
    "49-49-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_16,
    "49-49-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_16,
    "49-48-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_17,
    "49-48-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_17,
    "49-48-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_17,
    "56-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_17,
    "49-46-50-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_18,
    "49-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_18,
    "49-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_18,
    "49-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_18,
    "54-46-49-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_19,
    "54-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_19,
    "54-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_19,
    "56-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_19,
    "51-46-51-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].INNER_20,
    "51-46-52-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].TRP_20,
    "51-46-53-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].OUTER_20,
    "51-46-54-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_20,
    "56-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].BULL,
    "52-46-48-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].DBL_BULL,
    "66-84-78-64": __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].RESET_BUTTON
};
class Granboard {
    bluetoothConnection;
    writeCharacteristic;
    connectionTime;
    device;
    _disconnected = false;
    segmentHitCallback;
    onDisconnect;
    /** Whether the underlying BLE connection has been lost */ get disconnected() {
        return this._disconnected;
    }
    /**
   * Try to reconnect to a previously authorized Granboard automatically.
   * Uses the Web Bluetooth getDevices() API + watchAdvertisements() if available,
   * with a timeout so it doesn't hang forever.
   */ static async TryAutoConnect(timeoutMs = 8000) {
        try {
            // Check if browser supports getDevices (not all browsers do)
            if (!navigator.bluetooth?.getDevices) {
                console.log("[Granboard] Browser doesn't support getDevices() - auto-reconnect unavailable");
                return null;
            }
            const devices = await navigator.bluetooth.getDevices();
            const device = devices.find((d)=>d.name?.toLowerCase().includes("gran"));
            if (!device || !device.gatt) {
                console.log("[Granboard] No previously authorized Granboard found");
                return null;
            }
            console.log("[Granboard] Found authorized device:", device.name);
            // If already connected (e.g. from a previous page), reuse it
            if (device.gatt.connected) {
                console.log("[Granboard] Device GATT already connected, reusing");
                return await Granboard.setupFromGatt(device);
            }
            // Try direct connect first (works if device is advertising)
            try {
                const connectPromise = device.gatt.connect();
                const timeoutPromise = new Promise((_, reject)=>setTimeout(()=>reject(new Error("Connect timeout")), timeoutMs));
                await Promise.race([
                    connectPromise,
                    timeoutPromise
                ]);
                console.log("[Granboard] Direct GATT connect succeeded");
                return await Granboard.setupFromGatt(device);
            } catch (directError) {
                console.log("[Granboard] Direct connect failed:", directError);
            }
            // If direct connect failed, try watchAdvertisements (Chrome-specific)
            if ('watchAdvertisements' in device) {
                console.log("[Granboard] Trying watchAdvertisements...");
                try {
                    const board = await new Promise((resolve)=>{
                        const timer = setTimeout(()=>{
                            console.log("[Granboard] watchAdvertisements timed out");
                            resolve(null);
                        }, timeoutMs);
                        device.addEventListener("advertisementreceived", async ()=>{
                            clearTimeout(timer);
                            try {
                                await device.gatt.connect();
                                console.log("[Granboard] Connected via watchAdvertisements");
                                resolve(await Granboard.setupFromGatt(device));
                            } catch (err) {
                                console.error("[Granboard] Connect after advertisement failed:", err);
                                resolve(null);
                            }
                        }, {
                            once: true
                        });
                        device.watchAdvertisements({
                            signal: AbortSignal.timeout(timeoutMs)
                        }).catch(()=>{
                            clearTimeout(timer);
                            resolve(null);
                        });
                    });
                    if (board) return board;
                } catch  {
                // watchAdvertisements not fully supported, fall through
                }
            }
            console.log("[Granboard] Auto-reconnect exhausted all strategies");
            return null;
        } catch (error) {
            console.error("[Granboard] Auto-reconnect failed:", error);
            return null;
        }
    }
    /**
   * Set up Granboard from an already-connected GATT device
   */ static async setupFromGatt(device) {
        const service = await device.gatt.getPrimaryService(GRANBOARD_UUID);
        const characteristics = await service.getCharacteristics();
        const boardCharacteristic = characteristics.find((c)=>c.properties.notify);
        if (!boardCharacteristic) {
            throw new Error("Could not find notify characteristic on dartboard");
        }
        const writeCharacteristic = characteristics.find((c)=>c.properties.write || c.properties.writeWithoutResponse);
        const board = new Granboard(boardCharacteristic, writeCharacteristic, device);
        await boardCharacteristic.startNotifications();
        console.log("[Granboard] Notifications started");
        return board;
    }
    /**
   * Connect to a Granboard with user interaction (shows browser pairing dialog)
   */ static async ConnectToBoard() {
        const device = await navigator.bluetooth.requestDevice({
            filters: [
                {
                    services: [
                        GRANBOARD_UUID
                    ]
                }
            ]
        });
        if (!device || !device.gatt) {
            throw new Error("Could not find matching service on bluetooth dartboard");
        }
        if (!device.gatt.connected) {
            await device.gatt.connect();
        }
        return await Granboard.setupFromGatt(device);
    }
    constructor(bluetoothConnection, writeCharacteristic, device){
        this.bluetoothConnection = bluetoothConnection;
        this.writeCharacteristic = writeCharacteristic;
        this.device = device;
        this.connectionTime = Date.now();
        this.bluetoothConnection.addEventListener("characteristicvaluechanged", this.onSegmentHit.bind(this));
        // Listen for disconnection
        if (device) {
            device.addEventListener("gattserverdisconnected", ()=>{
                console.log("[Granboard] BLE device disconnected");
                this._disconnected = true;
                this.onDisconnect?.();
            });
        }
    }
    onSegmentHit() {
        if (!this.bluetoothConnection.value) {
            return; // There is no new value
        }
        // Ignore events in the first 500ms after connection to avoid false triggers
        const timeSinceConnection = Date.now() - this.connectionTime;
        if (timeSinceConnection < 500) {
            console.log(`[Granboard] Ignoring event (${timeSinceConnection}ms after connection) - warming up`);
            return;
        }
        const rawBytes = new Uint8Array(this.bluetoothConnection.value.buffer);
        const segmentUID = rawBytes.join("-");
        const segmentID = SEGMENT_MAPPING[segmentUID];
        console.log(`[Granboard] Hit: bytes=[${rawBytes}] key="${segmentUID}" -> ${segmentID !== undefined ? segmentID : "UNKNOWN"}`);
        if (segmentID !== undefined) {
            this.segmentHitCallback?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSegment"])(segmentID));
        } else {
            // Treat unknown segments as MISS (out of bounds)
            console.log(`[Granboard] Unknown segment UID: ${segmentUID} - treating as MISS`);
            this.segmentHitCallback?.((0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateSegment"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].MISS));
        }
    }
    /**
   * Light up specific segments on the Granboard 3s
   * @param segments Array of segment numbers to light up (e.g., [15, 16, 17, 18, 19, 20, 25] for Cricket)
   */ async setLEDs(_segments) {
    // TODO: implement Granboard 3s LED protocol
    }
    /**
   * Turn off all LEDs
   */ async clearLEDs() {
    // TODO: implement Granboard 3s LED protocol
    }
}
}),
"[project]/app/cricket/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CricketSetup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$components$2f$PlayerOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/components/PlayerOrderModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$components$2f$PlayerOrderDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/components/PlayerOrderDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$granboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/granboard.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contexts/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function CricketSetup() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const { openDialog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const [players, setPlayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentName, setCurrentName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [gameMode, setGameMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard);
    const [maxRounds, setMaxRounds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(20);
    const [showOrderDialog, setShowOrderDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOrderModal, setShowOrderModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [granboard, setGranboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const addPlayer = ()=>{
        if (currentName.trim() === "") return;
        const newPlayer = {
            id: Math.random().toString(36).substr(2, 9),
            name: currentName.trim()
        };
        setPlayers([
            ...players,
            newPlayer
        ]);
        setCurrentName("");
    };
    const removePlayer = (id)=>{
        setPlayers(players.filter((p)=>p.id !== id));
    };
    const handleOrderDetermined = (orderedPlayers)=>{
        setPlayers(orderedPlayers);
        setShowOrderModal(false);
        sessionStorage.setItem("cricketPlayers", JSON.stringify(orderedPlayers));
        sessionStorage.setItem("cricketGameMode", gameMode);
        sessionStorage.setItem("cricketMaxRounds", maxRounds.toString());
        router.push("/cricket/game");
    };
    const handleThrowForOrder = async ()=>{
        try {
            const board = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$granboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Granboard"].ConnectToBoard();
            setGranboard(board);
            setShowOrderModal(true);
        } catch (error) {
            console.error("Failed to connect to Granboard:", error);
            alert(t('cricket.errors.connectionFailed'));
        }
    };
    const handleCloseOrderModal = ()=>{
        setShowOrderModal(false);
    };
    const startGame = ()=>{
        if (players.length < 1) {
            alert(t('cricket.errors.minPlayers'));
            return;
        }
        if (players.length === 1) {
            sessionStorage.setItem("cricketPlayers", JSON.stringify(players));
            sessionStorage.setItem("cricketGameMode", gameMode);
            sessionStorage.setItem("cricketMaxRounds", maxRounds.toString());
            router.push("/cricket/game");
            return;
        }
        setShowOrderDialog(true);
    };
    const handleOrderSet = (orderedPlayers)=>{
        setPlayers(orderedPlayers);
        setShowOrderDialog(false);
        sessionStorage.setItem("cricketPlayers", JSON.stringify(orderedPlayers));
        sessionStorage.setItem("cricketGameMode", gameMode);
        sessionStorage.setItem("cricketMaxRounds", maxRounds.toString());
        router.push("/cricket/game");
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter") {
            addPlayer();
        }
    };
    const initials = (name)=>{
        return name.split(' ').map((w)=>w[0]).join('').toUpperCase().slice(0, 2);
    };
    // Custom slider: compute fill percentage for round limit (5–50)
    const sliderFillPercent = (maxRounds - 5) / (50 - 5) * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pb-32",
        style: {
            backgroundColor: 'var(--hud-background)',
            color: 'var(--hud-on-surface)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 shadow-2xl shadow-black/20",
                style: {
                    backgroundColor: 'var(--hud-background)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center w-full px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-testid": "back-button",
                                    onClick: ()=>router.push("/"),
                                    className: "text-slate-400 transition-all duration-300 active:opacity-70",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"],
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-extrabold font-headline tracking-tight",
                                    style: {
                                        color: 'var(--hud-primary)'
                                    },
                                    children: t('home.title')
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/page.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cricket/page.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-testid": "settings-button",
                                onClick: ()=>openDialog(),
                                className: "text-slate-400 hover:text-amber-300 transition-colors duration-300 active:opacity-70",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGear"],
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/page.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cricket/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-6 pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-12 animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl font-extrabold font-headline tracking-tight mb-2",
                                style: {
                                    color: 'var(--hud-on-surface)'
                                },
                                children: "New Match"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body max-w-md",
                                style: {
                                    color: 'var(--hud-tertiary)'
                                },
                                children: t('cricket.setupDescription')
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/page.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-12 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-7 space-y-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs uppercase tracking-widest font-semibold mb-6 block",
                                                style: {
                                                    color: 'var(--hud-tertiary)'
                                                },
                                                children: t('cricket.gameMode.title')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        "data-testid": "game-mode-standard",
                                                        onClick: ()=>setGameMode(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard),
                                                        className: `flex-1 min-w-[140px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? 'border-2 shadow-lg' : 'hover:brightness-110'}`,
                                                        style: {
                                                            backgroundColor: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)',
                                                            borderColor: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? 'var(--hud-secondary)' : 'transparent',
                                                            color: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? 'var(--hud-secondary)' : 'var(--hud-tertiary)',
                                                            boxShadow: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? '0 4px 15px rgba(68, 226, 205, 0.1)' : 'none'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl font-extrabold font-headline",
                                                                children: t('cricket.gameMode.standard.title')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] uppercase font-bold opacity-60",
                                                                children: t('cricket.gameMode.standard.description')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cricket/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        "data-testid": "game-mode-cutthroat",
                                                        onClick: ()=>setGameMode(__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat),
                                                        className: `flex-1 min-w-[140px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'border-2 shadow-lg' : 'hover:brightness-110'}`,
                                                        style: {
                                                            backgroundColor: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)',
                                                            borderColor: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-error)' : 'transparent',
                                                            color: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-error)' : 'var(--hud-tertiary)',
                                                            boxShadow: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? '0 4px 15px rgba(255, 180, 171, 0.1)' : 'none'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xl font-extrabold font-headline",
                                                                children: t('cricket.gameMode.cutThroat.title')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] uppercase font-bold opacity-60",
                                                                children: t('cricket.gameMode.cutThroat.description')
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 188,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cricket/page.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "animate-fade-in-up",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-end mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.players.title')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        "data-testid": "add-player-button",
                                                        onClick: addPlayer,
                                                        disabled: currentName.trim() === "",
                                                        className: "text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity disabled:opacity-30",
                                                        style: {
                                                            color: 'var(--hud-secondary)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faUserPlus"],
                                                                className: "text-lg"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 206,
                                                                columnNumber: 19
                                                            }, this),
                                                            t('common.add')
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cricket/page.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    "data-testid": "player-name-input",
                                                    type: "text",
                                                    value: currentName,
                                                    onChange: (e)=>setCurrentName(e.target.value),
                                                    onKeyPress: handleKeyPress,
                                                    placeholder: t('cricket.players.placeholder'),
                                                    className: "w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-1 transition-all font-body",
                                                    style: {
                                                        backgroundColor: 'var(--hud-surface-container-low)',
                                                        borderColor: 'rgba(69, 70, 77, 0.15)',
                                                        color: 'var(--hud-on-surface)'
                                                    },
                                                    maxLength: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cricket/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    players.map((player, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-testid": `player-item-${player.name}`,
                                                            className: "flex items-center justify-between p-5 rounded-xl group transition-colors",
                                                            style: {
                                                                backgroundColor: 'var(--hud-surface-container-low)'
                                                            },
                                                            onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = 'var(--hud-surface-container)',
                                                            onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'var(--hud-surface-container-low)',
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                                                                            style: {
                                                                                backgroundColor: index === 0 ? 'rgba(255, 185, 95, 0.2)' : 'rgba(68, 226, 205, 0.2)',
                                                                                color: index === 0 ? 'var(--hud-primary)' : 'var(--hud-secondary)'
                                                                            },
                                                                            children: initials(player.name)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cricket/page.tsx",
                                                                            lineNumber: 241,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-bold",
                                                                                    style: {
                                                                                        color: 'var(--hud-on-surface)'
                                                                                    },
                                                                                    children: [
                                                                                        player.name,
                                                                                        index === 0 ? ' (You)' : ''
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                                    lineNumber: 251,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-xs",
                                                                                    style: {
                                                                                        color: 'var(--hud-tertiary)',
                                                                                        opacity: 0.6
                                                                                    },
                                                                                    children: index === 0 ? 'Ready to throw' : 'Guest Player'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                                    lineNumber: 252,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/cricket/page.tsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            "data-testid": `remove-player-button-${player.name}`,
                                                                            onClick: ()=>removePlayer(player.id),
                                                                            className: "transition-colors",
                                                                            style: {
                                                                                color: 'rgba(185, 200, 222, 0.4)'
                                                                            },
                                                                            onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--hud-error)',
                                                                            onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(185, 200, 222, 0.4)',
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTrash"],
                                                                                className: "text-xl"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                                lineNumber: 266,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cricket/page.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGripVertical"],
                                                                            className: "transition-colors",
                                                                            style: {
                                                                                color: 'var(--hud-on-tertiary-container)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/cricket/page.tsx",
                                                                            lineNumber: 268,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, player.id, true, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-5 border-2 border-dashed rounded-xl flex items-center justify-center gap-3 cursor-pointer transition-all",
                                                        style: {
                                                            borderColor: 'rgba(69, 70, 77, 0.2)',
                                                            color: 'rgba(185, 200, 222, 0.3)'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.borderColor = 'rgba(255, 185, 95, 0.3)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.borderColor = 'rgba(69, 70, 77, 0.2)';
                                                        },
                                                        onClick: ()=>{
                                                            const input = document.querySelector('[data-testid="player-name-input"]');
                                                            input?.focus();
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faUserPlus"]
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 292,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-sm",
                                                                children: "Add opponent..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/cricket/page.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/cricket/page.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl p-8 sticky top-28 animate-fade-in-up",
                                    style: {
                                        backgroundColor: 'var(--hud-surface-container-low)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs uppercase tracking-widest font-semibold mb-8 block",
                                            style: {
                                                color: 'var(--hud-tertiary)'
                                            },
                                            children: "Match Rules"
                                        }, void 0, false, {
                                            fileName: "[project]/app/cricket/page.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-semibold",
                                                                    style: {
                                                                        color: 'var(--hud-on-surface)'
                                                                    },
                                                                    children: t('cricket.rounds.title')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-lg font-extrabold font-headline",
                                                                    style: {
                                                                        color: 'var(--hud-secondary)'
                                                                    },
                                                                    children: maxRounds
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative w-full h-1.5 rounded-full",
                                                            style: {
                                                                backgroundColor: 'var(--hud-surface-container-highest)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-0 left-0 h-full rounded-full",
                                                                    style: {
                                                                        width: `${sliderFillPercent}%`,
                                                                        backgroundColor: 'var(--hud-secondary)'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 319,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-xl",
                                                                    style: {
                                                                        left: `${sliderFillPercent}%`,
                                                                        backgroundColor: 'var(--hud-secondary)',
                                                                        borderColor: 'var(--hud-surface-container-low)',
                                                                        boxShadow: '0 2px 8px rgba(68, 226, 205, 0.4)'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 324,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    "data-testid": "max-rounds-input",
                                                                    type: "range",
                                                                    min: "5",
                                                                    max: "50",
                                                                    value: maxRounds,
                                                                    onChange: (e)=>setMaxRounds(parseInt(e.target.value)),
                                                                    className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                                                                    style: {
                                                                        margin: 0
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between mt-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px]",
                                                                    style: {
                                                                        color: 'var(--hud-tertiary)',
                                                                        opacity: 0.4
                                                                    },
                                                                    children: "5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 346,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px]",
                                                                    style: {
                                                                        color: 'var(--hud-tertiary)',
                                                                        opacity: 0.4
                                                                    },
                                                                    children: "50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 347,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cricket/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-6 border-t border-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold mb-3 block",
                                                            style: {
                                                                color: 'var(--hud-on-surface)'
                                                            },
                                                            children: t('cricket.rules.title', {
                                                                mode: t(`cricket.rules.mode.${gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'cutThroat' : 'standard'}`)
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: t.raw('cricket.rules.common').map((rule, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs leading-relaxed",
                                                                    style: {
                                                                        color: 'var(--hud-tertiary)',
                                                                        opacity: 0.8
                                                                    },
                                                                    children: rule
                                                                }, index, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 19
                                                        }, this),
                                                        gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 p-3 rounded-lg",
                                                            style: {
                                                                backgroundColor: 'var(--hud-surface-container)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-xs mb-1",
                                                                    style: {
                                                                        color: 'var(--hud-secondary)'
                                                                    },
                                                                    children: t('cricket.rules.standard.title')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 23
                                                                }, this),
                                                                t.raw('cricket.rules.standard.rules').map((rule, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs",
                                                                        style: {
                                                                            color: 'var(--hud-tertiary)',
                                                                            opacity: 0.7
                                                                        },
                                                                        children: rule
                                                                    }, index, false, {
                                                                        fileName: "[project]/app/cricket/page.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 p-3 rounded-lg",
                                                            style: {
                                                                backgroundColor: 'var(--hud-surface-container)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-xs mb-1",
                                                                    style: {
                                                                        color: 'var(--hud-error)'
                                                                    },
                                                                    children: t('cricket.rules.cutThroat.title')
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/cricket/page.tsx",
                                                                    lineNumber: 374,
                                                                    columnNumber: 23
                                                                }, this),
                                                                t.raw('cricket.rules.cutThroat.rules').map((rule, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs",
                                                                        style: {
                                                                            color: 'var(--hud-tertiary)',
                                                                            opacity: 0.7
                                                                        },
                                                                        children: rule
                                                                    }, index, false, {
                                                                        fileName: "[project]/app/cricket/page.tsx",
                                                                        lineNumber: 376,
                                                                        columnNumber: 25
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/cricket/page.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cricket/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cricket/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cricket/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 w-full z-50 px-6 pb-10 pt-4",
                style: {
                    background: 'linear-gradient(to top, var(--hud-background), var(--hud-background) 60%, transparent)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-testid": "start-game-button",
                        onClick: startGame,
                        disabled: players.length < 1,
                        className: "w-full h-16 rounded-xl flex items-center justify-center gap-3 shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                        style: {
                            background: players.length >= 1 ? 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)' : 'var(--hud-surface-container-high)',
                            boxShadow: players.length >= 1 ? '0 8px 30px rgba(255, 185, 95, 0.2)' : 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "▶"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 402,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-headline font-extrabold text-lg tracking-wide uppercase",
                                style: {
                                    color: 'var(--hud-on-primary)'
                                },
                                children: "Start Match Session"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/page.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/page.tsx",
                        lineNumber: 390,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cricket/page.tsx",
                    lineNumber: 389,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cricket/page.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this),
            showOrderDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$components$2f$PlayerOrderDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerOrderDialog"], {
                players: players,
                onOrderSet: handleOrderSet,
                onThrowForOrder: handleThrowForOrder,
                onClose: ()=>setShowOrderDialog(false)
            }, void 0, false, {
                fileName: "[project]/app/cricket/page.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this),
            showOrderModal && granboard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$components$2f$PlayerOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerOrderModal"], {
                players: players,
                granboard: granboard,
                onOrderDetermined: handleOrderDetermined,
                onClose: handleCloseOrderModal
            }, void 0, false, {
                fileName: "[project]/app/cricket/page.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3057b1f2._.js.map