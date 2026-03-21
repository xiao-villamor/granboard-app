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
"[project]/constants/segments.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEGMENT_SECTIONS",
    ()=>SEGMENT_SECTIONS,
    "SEGMENT_TYPES",
    ()=>SEGMENT_TYPES,
    "isBull",
    ()=>isBull,
    "isCricketNumber",
    ()=>isCricketNumber,
    "isDouble",
    ()=>isDouble,
    "isDoubleBull",
    ()=>isDoubleBull,
    "isMiss",
    ()=>isMiss,
    "isSingle",
    ()=>isSingle,
    "isSingleBull",
    ()=>isSingleBull,
    "isTriple",
    ()=>isTriple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
;
;
;
const SEGMENT_SECTIONS = {
    MISS: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentSection"].Other,
    BULL: 25
};
const SEGMENT_TYPES = {
    SINGLE: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Single,
    DOUBLE: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double,
    TRIPLE: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Triple,
    OTHER: __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Other
};
const isMiss = (segment)=>segment.Section === SEGMENT_SECTIONS.MISS;
const isBull = (segment)=>segment.Section === SEGMENT_SECTIONS.BULL;
const isDoubleBull = (segment)=>isBull(segment) && segment.Type === SEGMENT_TYPES.DOUBLE;
const isSingleBull = (segment)=>isBull(segment) && segment.Type === SEGMENT_TYPES.SINGLE;
const isCricketNumber = (section)=>__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRICKET_NUMBERS"].includes(section);
const isDouble = (segment)=>segment.Type === SEGMENT_TYPES.DOUBLE;
const isTriple = (segment)=>segment.Type === SEGMENT_TYPES.TRIPLE;
const isSingle = (segment)=>segment.Type === SEGMENT_TYPES.SINGLE;
}),
"[project]/constants/animations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Animation timing constants (in milliseconds)
 */ __turbopack_context__.s([
    "ANIMATION_TIMINGS",
    ()=>ANIMATION_TIMINGS
]);
const ANIMATION_TIMINGS = {
    /** Delay before showing turn animations after hit animation */ HIT_ANIMATION_DELAY: 1000,
    /** Duration for hit-sequence animation */ HIT_SEQUENCE_DURATION: 3500,
    /** Default animation duration */ DEFAULT_DURATION: 3000,
    /** Delay between whistle sounds */ WHISTLE_DELAY: 600,
    /** Delay for state checks after hit */ STATE_CHECK_DELAY: 100
};
}),
"[project]/app/cricket/game/hooks/useGameHistory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameHistory",
    ()=>useGameHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useGameHistory(gameState, currentTurnHits, cloneFn) {
    const [gameHistory, setGameHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const previousGameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousTurnHitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isRestoringRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Track game state changes and save to history
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gameState) return;
        // Don't save to history if we're restoring a previous state
        if (isRestoringRef.current) {
            isRestoringRef.current = false;
            previousGameStateRef.current = cloneFn(gameState);
            previousTurnHitsRef.current = [
                ...currentTurnHits
            ];
            return;
        }
        // If we have a previous state, save it to history
        if (previousGameStateRef.current) {
            // IMPORTANT: Capture the values BEFORE updating the refs to avoid React Strict Mode issues
            const stateToSave = cloneFn(previousGameStateRef.current);
            const hitsToSave = [
                ...previousTurnHitsRef.current
            ];
            setGameHistory((prev)=>[
                    ...prev,
                    {
                        gameState: stateToSave,
                        turnHits: hitsToSave
                    }
                ].slice(-20));
        }
        // Update previous state reference (will be saved next time)
        previousGameStateRef.current = cloneFn(gameState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        gameState?.dartsThrown,
        gameState?.currentPlayerIndex
    ]);
    const saveCurrentTurnHits = (hits)=>{
        previousTurnHitsRef.current = [
            ...hits
        ];
    };
    const undoLastAction = ()=>{
        if (gameHistory.length === 0) return null;
        const previousEntry = gameHistory[gameHistory.length - 1];
        setGameHistory((prev)=>prev.slice(0, -1));
        // Mark that we're restoring to prevent re-saving in useEffect
        isRestoringRef.current = true;
        return previousEntry;
    };
    return {
        gameHistory,
        saveCurrentTurnHits,
        undoLastAction,
        hasHistory: gameHistory.length > 0
    };
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
"[project]/app/cricket/game/hooks/useGranboardConnection.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGranboardConnection",
    ()=>useGranboardConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$granboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/granboard.ts [app-ssr] (ecmascript)");
;
;
function useGranboardConnection(onSegmentHit) {
    const [granboard, setGranboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectionState, setConnectionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("disconnected");
    // Use a ref for the callback so the Granboard instance always calls the latest version
    // without needing to re-wire on every render
    const onSegmentHitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onSegmentHit);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onSegmentHitRef.current = onSegmentHit;
    }, [
        onSegmentHit
    ]);
    // Stable callback that delegates to the ref
    const stableCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((segment)=>{
        onSegmentHitRef.current?.(segment);
    }, []);
    // Wire up the Granboard instance when it's set
    const setupBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((board)=>{
        /* eslint-disable react-hooks/immutability */ board.segmentHitCallback = stableCallback;
        board.onDisconnect = ()=>{
            console.log("[useGranboardConnection] Board disconnected");
            setConnectionState("disconnected");
            setGranboard(null);
        };
        /* eslint-enable react-hooks/immutability */ setGranboard(board);
        setConnectionState("connected");
    }, [
        stableCallback
    ]);
    // Try to auto-connect on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tryAutoConnect = async ()=>{
            setConnectionState("connecting");
            const board = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$granboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Granboard"].TryAutoConnect();
            if (board) {
                setupBoard(board);
            } else {
                setConnectionState("disconnected");
            }
        };
        tryAutoConnect();
    }, [
        setupBoard
    ]); // setupBoard is stable (useCallback with stable deps)
    const connectToBoard = async ()=>{
        setConnectionState("connecting");
        try {
            const board = await __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$granboard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Granboard"].ConnectToBoard();
            setupBoard(board);
        } catch (error) {
            console.error(error);
            setConnectionState("error");
        }
    };
    const setLEDs = async (segments)=>{
        if (granboard) {
            await granboard.setLEDs(segments);
        }
    };
    const clearLEDs = async ()=>{
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
        clearLEDs
    };
}
}),
"[project]/app/cricket/game/hooks/useCricketGameState.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCricketGameState",
    ()=>useCricketGameState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
;
;
;
function useCricketGameState(initialGameState, onTurnHitsUpdate, onTurnComplete) {
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [lastHit, setLastHit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentTurnHits, setCurrentTurnHits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const lastPlayerChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastDartHitRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const handleResetButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Debounce: prevent multiple rapid presses (within 500ms)
        const now = Date.now();
        if (now - lastPlayerChangeRef.current < 500) {
            return;
        }
        lastPlayerChangeRef.current = now;
        setLastHit(null);
        // Capture current state and hits before changing
        setGameState((currentState)=>{
            if (!currentState) return currentState;
            const currentPlayer = currentState.players[currentState.currentPlayerIndex];
            // Calculate next state to check if game will be finished
            const newState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextPlayer"])(currentState);
            // Save current turn hits to ref BEFORE clearing
            setCurrentTurnHits((current)=>{
                onTurnHitsUpdate(current);
                // Trigger turn complete callback with player, hits, and game finished status
                if (onTurnComplete && current.length > 0) {
                    onTurnComplete(currentPlayer, current, newState.gameFinished);
                }
                return [];
            });
            return newState;
        });
    }, [
        onTurnHitsUpdate,
        onTurnComplete
    ]);
    const handleDartHit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((segment)=>{
        // Debounce to prevent double detection
        const now = Date.now();
        if (now - lastDartHitRef.current < 1000) {
            return;
        }
        lastDartHitRef.current = now;
        const hitId = `${now}-${segment.ID}`;
        console.log("🎯 Dart hit:", {
            shortName: segment.ShortName,
            type: segment.Type,
            section: segment.Section,
            segmentID: segment.ID,
            hitId
        });
        let processedResult = null;
        setGameState((currentState)=>{
            if (!currentState) return currentState;
            // React Strict Mode calls this callback twice - return cached result on second call
            if (processedResult) {
                console.log("⚠️ React Strict Mode second call - returning cached result");
                return processedResult;
            }
            // Check if we can still accept darts (max 3)
            if (currentState.dartsThrown >= 3) {
                console.log("⚠️ Already thrown 3 darts, ignoring");
                return currentState;
            }
            // Update UI only if dart will be processed
            setLastHit(segment);
            setCurrentTurnHits((prev)=>{
                // Save current hits to ref before adding new one
                onTurnHitsUpdate(prev);
                return [
                    ...prev,
                    segment
                ];
            });
            // First call - process and cache the result
            processedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processDartHit"])(currentState, segment, hitId);
            return processedResult;
        });
    }, [
        onTurnHitsUpdate
    ]);
    const onSegmentHit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((segment)=>{
        if (segment.ID === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentID"].RESET_BUTTON) {
            handleResetButton();
        } else {
            handleDartHit(segment);
        }
    }, [
        handleResetButton,
        handleDartHit
    ]);
    const restoreGameState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((state, turnHits)=>{
        setGameState(state);
        setCurrentTurnHits(turnHits);
        setLastHit(null);
    }, []);
    return {
        gameState,
        setGameState,
        lastHit,
        currentTurnHits,
        setCurrentTurnHits,
        onSegmentHit,
        handleResetButton,
        restoreGameState
    };
}
}),
"[project]/app/cricket/game/hooks/usePlayerTurnHistory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePlayerTurnHistory",
    ()=>usePlayerTurnHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function usePlayerTurnHistory() {
    const [turnHistory, setTurnHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const addTurn = (player, round, hits)=>{
        if (hits.length === 0) return;
        setTurnHistory((prev)=>{
            const playerTurns = prev[player.id] || [];
            // Vérifier si ce round n'est pas déjà enregistré pour éviter les doublons
            const roundExists = playerTurns.some((turn)=>turn.round === round);
            if (roundExists) {
                console.log(`⚠️ Round ${round} already recorded for player ${player.name}`);
                return prev;
            }
            return {
                ...prev,
                [player.id]: [
                    ...playerTurns,
                    {
                        round,
                        hits
                    }
                ]
            };
        });
    };
    const clearHistory = ()=>{
        setTurnHistory({});
    };
    const getPlayerHistory = (playerId)=>{
        return turnHistory[playerId] || [];
    };
    return {
        turnHistory,
        addTurn,
        clearHistory,
        getPlayerHistory
    };
}
}),
"[project]/constants/sounds.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sound file paths
 */ __turbopack_context__.s([
    "SOUND_PATHS",
    ()=>SOUND_PATHS
]);
const SOUND_PATHS = {
    DART_MISS: "/assets/songs/dart-miss.mp3",
    BULL: "/assets/songs/bull.mp3",
    DOUBLE_BULL: "/assets/songs/double-bull.mp3",
    GAME_OVER: "/assets/songs/game-over.mp3",
    VICTORY: "/assets/songs/victory.mp3",
    SIFFLET: "/assets/songs/sifflet.mp3",
    GOAT: "/assets/songs/goat.mp3",
    HORSE: "/assets/songs/horse.mp3"
};
}),
"[project]/app/cricket/game/hooks/useSounds.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSounds",
    ()=>useSounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contexts/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/sounds.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/animations.ts [app-ssr] (ecmascript)");
;
;
;
;
function useSounds() {
    const { volume, soundEnabled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const audioContextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const soundRegistry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    // Helper to get or create audio element
    const getOrCreateAudio = (type, path)=>{
        if (!soundRegistry.current[type]) {
            const audio = new Audio(path);
            audio.preload = "auto";
            soundRegistry.current[type] = audio;
        }
        return soundRegistry.current[type];
    };
    // Initialize AudioContext on first user interaction
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initAudio = ()=>{
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
        };
        document.addEventListener("click", initAudio, {
            once: true
        });
        return ()=>document.removeEventListener("click", initAudio);
    }, []);
    const playBeep = (frequency, duration, baseVolume = 0.3, waveType = "sine")=>{
        if (!soundEnabled || !audioContextRef.current) return;
        const ctx = audioContextRef.current;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        // Chaîne audio avec filtre pour un son plus doux
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.frequency.value = frequency;
        oscillator.type = waveType;
        // Filtre passe-bas pour adoucir le son
        filter.type = "lowpass";
        filter.frequency.value = frequency * 2;
        filter.Q.value = 1;
        // Appliquer le volume global avec enveloppe ADSR
        const adjustedVolume = baseVolume * volume;
        const now = ctx.currentTime;
        // Attack (montée rapide)
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(adjustedVolume, now + 0.01);
        // Decay & Sustain
        gainNode.gain.linearRampToValueAtTime(adjustedVolume * 0.7, now + 0.05);
        // Release (descente douce)
        gainNode.gain.setValueAtTime(adjustedVolume * 0.7, now + duration - 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);
        oscillator.start(now);
        oscillator.stop(now + duration);
    };
    const playChord = (frequencies, duration, baseVolume = 0.2)=>{
        if (!soundEnabled || !audioContextRef.current) return;
        frequencies.forEach((freq)=>{
            playBeep(freq, duration, baseVolume / frequencies.length);
        });
    };
    // Play whistle sound (creates new instance each time for overlapping sounds)
    const playSifflet = ()=>{
        if (!soundEnabled) return;
        const audio = new Audio(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].SIFFLET);
        audio.volume = volume;
        audio.play().catch(()=>{
        // Ignore errors if audio can't play
        });
    };
    const playSound = (type)=>{
        if (!soundEnabled) return;
        // Handle special whistle cases (multiple sounds)
        if (type === "whistle-single") {
            playSifflet();
            return;
        }
        if (type === "whistle-double") {
            playSifflet();
            setTimeout(()=>playSifflet(), __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_TIMINGS"].WHISTLE_DELAY);
            return;
        }
        if (type === "whistle-triple") {
            playSifflet();
            setTimeout(()=>playSifflet(), __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_TIMINGS"].WHISTLE_DELAY);
            setTimeout(()=>playSifflet(), __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_TIMINGS"].WHISTLE_DELAY * 2);
            return;
        }
        // Map sound types to their file paths
        const soundPathMap = {
            "dart-miss": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].DART_MISS,
            "bull": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].BULL,
            "double-bull": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].DOUBLE_BULL,
            "game-over": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].GAME_OVER,
            "victory": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].VICTORY,
            "goat": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].GOAT,
            "horse": __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$sounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOUND_PATHS"].HORSE
        };
        const soundPath = soundPathMap[type];
        if (!soundPath) return;
        // Get or create audio element and play
        const audio = getOrCreateAudio(type, soundPath);
        audio.volume = volume;
        audio.currentTime = 0;
        audio.play().catch(()=>{
        // Ignore errors if audio can't play
        });
    };
    return {
        playSound
    };
}
}),
"[project]/app/hooks/useAnimations.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAnimations",
    ()=>useAnimations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.5_react@19.2.0/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
;
const HitSequenceAnimation = ({ hits })=>{
    const [visibleHits, setVisibleHits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timers = [];
        // Show remaining symbols with delay
        for(let i = 1; i < hits.length; i++){
            const timer = setTimeout(()=>{
                setVisibleHits(i + 1);
            }, i * 1000); // 1000ms (1 sec), 2000ms (2 sec)
            timers.push(timer);
        }
        return ()=>{
            timers.forEach((timer)=>clearTimeout(timer));
        };
    }, [
        hits
    ]);
    const getSymbol = (type)=>{
        if (type === 1) return "\\";
        if (type === 2) return "X";
        if (type === 3) return "⊗";
        return "?";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-8xl font-bold text-white mb-4 flex justify-center gap-12 items-center min-h-[120px]",
                children: hits.map((hit, index)=>{
                    const isVisible = index < visibleHits;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "monospace",
                            textShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "scale(1) translateY(0)" : "scale(0.5) translateY(-20px)",
                            display: "inline-block",
                            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            willChange: "transform, opacity"
                        },
                        children: getSymbol(hit.Type)
                    }, index, false, {
                        fileName: "[project]/app/hooks/useAnimations.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/hooks/useAnimations.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl text-purple-300 mt-2",
                style: {
                    opacity: visibleHits === hits.length ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out"
                }
            }, void 0, false, {
                fileName: "[project]/app/hooks/useAnimations.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/hooks/useAnimations.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function useAnimations() {
    const [currentAnimation, setCurrentAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [animationKey, setAnimationKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("animations");
    const playAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((type, data, duration = 3000)=>{
        setAnimationKey((prev)=>prev + 1);
        setCurrentAnimation({
            type,
            data,
            duration
        });
        setTimeout(()=>{
            setCurrentAnimation(null);
        }, duration);
    }, []);
    const AnimationOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!currentAnimation) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "jsx-5968a4f72ca7d1b2" + " " + "fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5968a4f72ca7d1b2" + " " + ((currentAnimation.type === "hit-sequence" ? "" : "animate-bounce-in") || ""),
                    children: [
                        currentAnimation.type === "hit-sequence" && currentAnimation.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HitSequenceAnimation, {
                            hits: currentAnimation.data
                        }, animationKey, false, {
                            fileName: "[project]/app/hooks/useAnimations.tsx",
                            lineNumber: 116,
                            columnNumber: 15
                        }, this),
                        currentAnimation.type === "three-miss" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5968a4f72ca7d1b2" + " " + "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-9xl mb-4 animate-shake",
                                    children: "🐐"
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-4xl font-bold text-white animate-pulse",
                                    children: t("threeMiss")
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/hooks/useAnimations.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        currentAnimation.type === "three-triple" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5968a4f72ca7d1b2" + " " + "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-9xl mb-4 animate-rainbow",
                                    children: "🦄"
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse",
                                    children: t("threeTriple")
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-2xl text-purple-300 mt-2",
                                    children: t("threeTripleSubtitle")
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 135,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/hooks/useAnimations.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this),
                        currentAnimation.type === "victory" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5968a4f72ca7d1b2" + " " + "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-9xl mb-4 animate-trophy",
                                    children: "🏆"
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-4xl font-bold text-yellow-400 animate-pulse",
                                    children: t("victory")
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5968a4f72ca7d1b2" + " " + "text-2xl text-purple-300 mt-2",
                                    children: t("victorySubtitle")
                                }, void 0, false, {
                                    fileName: "[project]/app/hooks/useAnimations.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/hooks/useAnimations.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/hooks/useAnimations.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: "5968a4f72ca7d1b2",
                    children: "@keyframes bounce-in{0%{opacity:0;transform:scale(0)}50%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}@keyframes shake{0%,to{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-10px)}20%,40%,60%,80%{transform:translate(10px)}}@keyframes trophy{0%,to{transform:translateY(0)}50%{transform:translateY(-20px)}}@keyframes rainbow{0%{filter:hue-rotate()brightness(1.2);transform:scale(1)}25%{filter:hue-rotate(90deg)brightness(1.5);transform:scale(1.1)}50%{filter:hue-rotate(180deg)brightness(1.2);transform:scale(1)}75%{filter:hue-rotate(270deg)brightness(1.5);transform:scale(1.1)}to{filter:hue-rotate(360deg)brightness(1.2);transform:scale(1)}}.animate-bounce-in.jsx-5968a4f72ca7d1b2{animation:.5s ease-out bounce-in}.animate-shake.jsx-5968a4f72ca7d1b2{animation:.5s ease-in-out shake}.animate-trophy.jsx-5968a4f72ca7d1b2{animation:1s ease-in-out infinite trophy}.animate-rainbow.jsx-5968a4f72ca7d1b2{animation:2s ease-in-out infinite rainbow}"
                }, void 0, false, void 0, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/hooks/useAnimations.tsx",
            lineNumber: 108,
            columnNumber: 7
        }, this);
    }, [
        currentAnimation,
        animationKey,
        t
    ]);
    return {
        playAnimation,
        AnimationOverlay,
        currentAnimation
    };
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/app/hooks/useGameRoom.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameRoom",
    ()=>useGameRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$socket$2e$io$2d$client$40$4$2e$8$2e$3$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/socket.io-client@4.8.3/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
const WS_URL = ("TURBOPACK compile-time value", "http://localhost:3001") || "http://localhost:3001";
function useGameRoom({ gameType, autoCreate = false }) {
    const [roomState, setRoomState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [roomCode, setRoomCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [spectatorCount, setSpectatorCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roomCodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep ref in sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        roomCodeRef.current = roomCode;
    }, [
        roomCode
    ]);
    // Initialize socket connection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$socket$2e$io$2d$client$40$4$2e$8$2e$3$2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(WS_URL, {
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: 10,
            reconnectionDelay: 1000,
            transports: [
                "websocket",
                "polling"
            ]
        });
        socketRef.current = socket;
        socket.on("connect", ()=>{
            console.log("[useGameRoom] Connected to server");
            setIsConnected(true);
        });
        socket.on("disconnect", ()=>{
            console.log("[useGameRoom] Disconnected from server");
            setIsConnected(false);
        });
        socket.on("room:spectators", (data)=>{
            setSpectatorCount(data.count);
        });
        socket.on("error", (data)=>{
            console.error("[useGameRoom] Server error:", data.message);
            setError(data.message);
        });
        return ()=>{
            // Clean up: close room if active
            if (roomCodeRef.current) {
                socket.emit("room:close", {
                    code: roomCodeRef.current
                });
            }
            socket.disconnect();
            socketRef.current = null;
        };
    }, []);
    const createRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const socket = socketRef.current;
        if (!socket || !socket.connected) {
            setError("Not connected to server");
            setRoomState("error");
            return null;
        }
        setRoomState("creating");
        setError(null);
        return new Promise((resolve)=>{
            socket.emit("room:create", {
                gameType
            }, (response)=>{
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
    }, [
        gameType
    ]);
    // Auto-create room if requested
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoCreate && roomState === "idle" && isConnected) {
            createRoom();
        }
    }, [
        autoCreate,
        roomState,
        isConnected,
        createRoom
    ]);
    const closeRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const socket = socketRef.current;
        if (socket && roomCodeRef.current) {
            socket.emit("room:close", {
                code: roomCodeRef.current
            });
        }
        setRoomCode(null);
        setRoomState("idle");
        setSpectatorCount(0);
    }, []);
    const broadcastState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((gameState, currentTurnHits, lastHit)=>{
        const socket = socketRef.current;
        const code = roomCodeRef.current;
        if (!socket || !code) return;
        socket.emit("game:state", {
            code,
            gameState,
            currentTurnHits,
            lastHit
        });
    }, []);
    const broadcastHit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((segment)=>{
        const socket = socketRef.current;
        const code = roomCodeRef.current;
        if (!socket || !code) return;
        socket.volatile.emit("game:hit", {
            code,
            segment
        });
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
        isConnected
    };
}
}),
"[project]/services/serialization.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Serialization helpers for converting game state to/from
 * wire-safe JSON format for WebSocket transport.
 */ __turbopack_context__.s([
    "deserializeCricketState",
    ()=>deserializeCricketState,
    "deserializeSegment",
    ()=>deserializeSegment,
    "deserializeSegments",
    ()=>deserializeSegments,
    "serializeCricketState",
    ()=>serializeCricketState,
    "serializeSegment",
    ()=>serializeSegment,
    "serializeSegments",
    ()=>serializeSegments,
    "serializeZeroOneState",
    ()=>serializeZeroOneState
]);
function serializeCricketState(state) {
    return {
        players: state.players.map(serializePlayerCricketState),
        currentPlayerIndex: state.currentPlayerIndex,
        dartsThrown: state.dartsThrown,
        currentRound: state.currentRound,
        maxRounds: state.maxRounds,
        gameStarted: state.gameStarted,
        gameFinished: state.gameFinished,
        winner: state.winner,
        mode: state.mode
    };
}
function serializePlayerCricketState(player) {
    const scores = {};
    player.scores.forEach((score, num)=>{
        scores[num] = {
            marks: score.marks,
            points: score.points
        };
    });
    return {
        player: player.player,
        scores,
        totalPoints: player.totalPoints,
        totalMarks: player.totalMarks,
        roundsPlayed: player.roundsPlayed
    };
}
function deserializeCricketState(data) {
    return {
        players: data.players.map(deserializePlayerCricketState),
        currentPlayerIndex: data.currentPlayerIndex,
        dartsThrown: data.dartsThrown,
        currentRound: data.currentRound,
        maxRounds: data.maxRounds,
        gameStarted: data.gameStarted,
        gameFinished: data.gameFinished,
        winner: data.winner,
        mode: data.mode
    };
}
function deserializePlayerCricketState(data) {
    const scores = new Map();
    for (const [numStr, score] of Object.entries(data.scores)){
        scores.set(parseInt(numStr), {
            marks: score.marks,
            points: score.points
        });
    }
    return {
        player: data.player,
        scores,
        totalPoints: data.totalPoints,
        totalMarks: data.totalMarks,
        roundsPlayed: data.roundsPlayed
    };
}
function serializeZeroOneState(state) {
    return {
        players: state.players.map(serializePlayerZeroOneState),
        currentPlayerIndex: state.currentPlayerIndex,
        dartsThrown: state.dartsThrown,
        currentRound: state.currentRound,
        maxRounds: state.maxRounds,
        gameStarted: state.gameStarted,
        gameFinished: state.gameFinished,
        winner: state.winner,
        mode: String(state.mode),
        doubleOut: state.doubleOut
    };
}
function serializePlayerZeroOneState(player) {
    return {
        player: player.player,
        score: player.currentScore,
        startingScore: player.currentScore + player.totalPointsScored,
        dartsThrown: player.dartsThrown,
        totalPointsScored: player.totalPointsScored,
        roundsPlayed: player.roundsPlayed,
        busts: player.busts
    };
}
function serializeSegment(segment) {
    return {
        ID: segment.ID,
        Type: segment.Type,
        Section: segment.Section,
        Value: segment.Value,
        LongName: segment.LongName,
        ShortName: segment.ShortName
    };
}
function deserializeSegment(data) {
    return {
        ID: data.ID,
        Type: data.Type,
        Section: data.Section,
        Value: data.Value,
        LongName: data.LongName,
        ShortName: data.ShortName
    };
}
function serializeSegments(segments) {
    return segments.map(serializeSegment);
}
function deserializeSegments(data) {
    return data.map(deserializeSegment);
}
}),
"[project]/app/cricket/game/components/GameHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameHeader",
    ()=>GameHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function GameHeader({ gameMode, connectionState, onConnect, onShowLegend, onShowSettings, onShowShare, roomActive, spectatorCount }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    // Determine if it's a ZeroOne mode
    const isZeroOneMode = typeof gameMode === 'number' && (gameMode === 301 || gameMode === 501 || gameMode === 701);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center rounded-xl px-5 py-3 border",
        style: {
            background: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            WebkitBackdropFilter: 'blur(var(--hud-glass-blur))',
            borderColor: 'rgba(69, 70, 77, 0.15)',
            boxShadow: '0 1px 0 rgba(218, 226, 253, 0.04) inset, 0 4px 24px rgba(6, 14, 32, 0.35)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden sm:block w-0.5 h-7 rounded-full",
                        style: {
                            background: isZeroOneMode ? 'linear-gradient(180deg, var(--hud-game-01) 0%, transparent 100%)' : 'linear-gradient(180deg, var(--hud-game-cricket) 0%, transparent 100%)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-base font-headline font-extrabold tracking-[0.12em] uppercase",
                                style: {
                                    color: 'var(--hud-on-surface)'
                                },
                                children: isZeroOneMode ? "01" : "CRICKET"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            isZeroOneMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border",
                                style: {
                                    color: 'var(--hud-game-01)',
                                    backgroundColor: 'rgba(128, 155, 255, 0.08)',
                                    borderColor: 'rgba(128, 155, 255, 0.2)',
                                    letterSpacing: '0.04em'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(128, 155, 255, 0.45)',
                                            fontSize: '0.6rem'
                                        },
                                        children: "▸"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    gameMode
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border",
                                style: {
                                    color: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-error)' : 'var(--hud-game-cricket)',
                                    backgroundColor: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'rgba(255, 180, 171, 0.08)' : 'rgba(92, 253, 128, 0.08)',
                                    borderColor: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'rgba(255, 180, 171, 0.2)' : 'rgba(92, 253, 128, 0.2)',
                                    letterSpacing: '0.04em'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: 0.45,
                                            fontSize: '0.6rem'
                                        },
                                        children: "▸"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? t('cricket.gameMode.cutThroat.title') : t('cricket.gameMode.standard.title')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1.5 items-center",
                children: [
                    onShowLegend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-testid": "legend-button",
                        onClick: onShowLegend,
                        className: "px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5",
                        style: {
                            backgroundColor: 'rgba(69, 70, 77, 0.12)',
                            color: 'var(--hud-tertiary)',
                            border: '1px solid rgba(69, 70, 77, 0.15)'
                        },
                        title: t('cricket.game.showLegend'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBook"],
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t('cricket.game.legend')
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    onShowSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-testid": "settings-button",
                        onClick: onShowSettings,
                        className: "px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5",
                        style: {
                            backgroundColor: 'rgba(69, 70, 77, 0.12)',
                            color: 'var(--hud-tertiary)',
                            border: '1px solid rgba(69, 70, 77, 0.15)'
                        },
                        title: t('cricket.game.settings'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGear"],
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t('cricket.game.settings')
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    onShowShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-testid": "share-button",
                        onClick: onShowShare,
                        className: "px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5",
                        style: {
                            backgroundColor: roomActive ? 'rgba(128, 155, 255, 0.10)' : 'rgba(69, 70, 77, 0.12)',
                            color: roomActive ? 'var(--hud-game-01)' : 'var(--hud-tertiary)',
                            border: roomActive ? '1px solid rgba(128, 155, 255, 0.25)' : '1px solid rgba(69, 70, 77, 0.15)'
                        },
                        title: t('spectator.shareGame'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: roomActive ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faShareNodes"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTowerBroadcast"],
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            roomActive && spectatorCount !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faEye"],
                                        className: "w-2.5 h-2.5 opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: spectatorCount
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t('spectator.goLive')
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 mx-0.5",
                        style: {
                            backgroundColor: 'rgba(69, 70, 77, 0.3)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    connectionState === "connected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": "connection-status",
                        className: "px-2.5 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5",
                        style: {
                            backgroundColor: 'rgba(68, 226, 205, 0.08)',
                            color: 'var(--hud-secondary)',
                            border: '1px solid rgba(68, 226, 205, 0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full animate-live-dot",
                                style: {
                                    backgroundColor: 'var(--hud-secondary)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: t('cricket.game.connected')
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-testid": "connect-button",
                        onClick: onConnect,
                        disabled: connectionState === "connecting",
                        className: "px-2.5 py-1.5 rounded-lg text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 shadow-sm hud-gradient-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: connectionState === "connecting" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faLink"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faLink"],
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this),
                            connectionState === "connecting" ? t('cricket.game.connecting') : connectionState === "error" ? t('cricket.game.errorRetry') : t('cricket.game.connectGranboard')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/GameHeader.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/services/zeroone.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZeroOneMode",
    ()=>ZeroOneMode,
    "calculateAverage",
    ()=>calculateAverage,
    "calculateDartValue",
    ()=>calculateDartValue,
    "calculatePPD",
    ()=>calculatePPD,
    "calculatePPR",
    ()=>calculatePPR,
    "cloneGameState",
    ()=>cloneGameState,
    "createInitialGameState",
    ()=>createInitialGameState,
    "createInitialPlayerState",
    ()=>createInitialPlayerState,
    "getCheckoutSuggestion",
    ()=>getCheckoutSuggestion,
    "isBust",
    ()=>isBust,
    "isCheckoutScore",
    ()=>isCheckoutScore,
    "nextPlayer",
    ()=>nextPlayer,
    "processDartHit",
    ()=>processDartHit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
;
var ZeroOneMode = /*#__PURE__*/ function(ZeroOneMode) {
    ZeroOneMode[ZeroOneMode["ThreeOhOne"] = 301] = "ThreeOhOne";
    ZeroOneMode[ZeroOneMode["FiveOhOne"] = 501] = "FiveOhOne";
    ZeroOneMode[ZeroOneMode["SevenOhOne"] = 701] = "SevenOhOne";
    return ZeroOneMode;
}({});
const createInitialPlayerState = (player, startingScore)=>{
    return {
        player,
        currentScore: startingScore,
        totalPointsScored: 0,
        dartsThrown: 0,
        roundsPlayed: 0,
        checkoutAttempts: 0,
        busts: 0
    };
};
const createInitialGameState = (players, mode = 501, doubleOut = false, maxRounds = 0)=>{
    return {
        players: players.map((p)=>createInitialPlayerState(p, mode)),
        currentPlayerIndex: 0,
        dartsThrown: 0,
        currentRound: 1,
        maxRounds,
        gameStarted: true,
        gameFinished: false,
        winner: null,
        mode,
        doubleOut,
        turnScore: 0
    };
};
const calculateDartValue = (segment)=>{
    const section = segment.Section;
    switch(segment.Type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Single:
            return section;
        case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double:
            return section * 2;
        case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Triple:
            return section * 3;
        default:
            return 0;
    }
};
const isBust = (currentScore, dartValue, isDouble, doubleOut)=>{
    const newScore = currentScore - dartValue;
    // Going below 0 is always a bust
    if (newScore < 0) return true;
    // Landing on exactly 1 is a bust (can't finish with double out from 1)
    if (newScore === 1) return true;
    // If double out is required and we hit exactly 0 but not on a double, it's a bust
    if (doubleOut && newScore === 0 && !isDouble) return true;
    return false;
};
const isCheckoutScore = (score)=>{
    return score > 0 && score <= 170;
};
const getCheckoutSuggestion = (score)=>{
    const checkouts = {
        170: "T20, T20, Bull",
        167: "T20, T19, Bull",
        164: "T20, T18, Bull",
        161: "T20, T17, Bull",
        160: "T20, T20, D20",
        158: "T20, T20, D19",
        157: "T20, T19, D20",
        156: "T20, T20, D18",
        155: "T20, T19, D19",
        154: "T20, T18, D20",
        153: "T20, T19, D18",
        152: "T20, T20, D16",
        151: "T20, T17, D20",
        150: "T20, T18, D18",
        // Common lower checkouts
        110: "T20, Bull",
        107: "T19, Bull",
        104: "T18, Bull",
        101: "T17, Bull",
        100: "T20, D20",
        90: "T20, D15",
        80: "T20, D10",
        70: "T10, D20",
        60: "20, D20",
        50: "Bull",
        40: "D20"
    };
    return checkouts[score] || null;
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
    const dartValue = calculateDartValue(segment);
    const isDouble = segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double;
    console.log("🎯 Dart hit:", {
        player: currentPlayer.player.name,
        segment: `${segment.Section} ${segment.Type}`,
        dartValue,
        currentScore: currentPlayer.currentScore,
        turnScore: newState.turnScore
    });
    // Check for bust
    if (isBust(currentPlayer.currentScore, dartValue, isDouble, newState.doubleOut)) {
        console.log("💥 BUST!");
        currentPlayer.busts++;
        // Score reverts to what it was at start of turn
        // Turn score is cleared
        newState.turnScore = 0;
        // Mark turn as complete by setting darts to 3
        newState.dartsThrown = 3;
        if (hitId) {
            newState.lastProcessedHit = hitId;
        }
        return newState;
    }
    // Valid hit - update scores
    currentPlayer.currentScore -= dartValue;
    currentPlayer.totalPointsScored += dartValue;
    currentPlayer.dartsThrown++;
    newState.turnScore += dartValue;
    console.log("✅ Score updated:", {
        newScore: currentPlayer.currentScore,
        totalScored: currentPlayer.totalPointsScored,
        turnScore: newState.turnScore
    });
    // Check for win condition (exactly 0)
    if (currentPlayer.currentScore === 0) {
        newState.gameFinished = true;
        newState.winner = currentPlayer.player;
        console.log("🏆 Winner:", currentPlayer.player.name);
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
                ...playerState
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
    // Reset darts thrown and turn score for next player
    newState.dartsThrown = 0;
    newState.turnScore = 0;
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
            // Determine winner by lowest remaining score
            const minScore = Math.min(...newState.players.map((p)=>p.currentScore));
            const winner = newState.players.find((p)=>p.currentScore === minScore);
            newState.winner = winner?.player || null;
        }
    }
    newState.currentPlayerIndex = nextPlayerIndex;
    return newState;
};
const calculatePPD = (playerState)=>{
    if (playerState.dartsThrown === 0) return 0;
    return Math.round(playerState.totalPointsScored / playerState.dartsThrown * 100) / 100;
};
const calculatePPR = (playerState)=>{
    if (playerState.roundsPlayed === 0) return 0;
    return Math.round(playerState.totalPointsScored / playerState.roundsPlayed * 100) / 100;
};
const calculateAverage = (playerState)=>{
    if (playerState.roundsPlayed === 0) return 0;
    return calculatePPR(playerState);
};
}),
"[project]/app/cricket/game/components/GameOverBanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameOverBanner",
    ()=>GameOverBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/zeroone.ts [app-ssr] (ecmascript)");
;
;
;
;
// Type guards
function isCricketPlayer(player) {
    return 'totalMarks' in player;
}
function isCricketMode(mode) {
    return typeof mode === 'string';
}
function GameOverBanner({ winner, players, totalRounds, gameMode, onNewGame, onQuit }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const isCricket = isCricketMode(gameMode);
    // Sort players by ranking (winner first, then by score or MPR)
    const sortedPlayers = [
        ...players
    ].sort((a, b)=>{
        if (a.player.id === winner.id) return -1;
        if (b.player.id === winner.id) return 1;
        if (isCricket) {
            const aCricket = a;
            const bCricket = b;
            if (gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat) {
                return aCricket.totalPoints - bCricket.totalPoints;
            } else {
                return bCricket.totalPoints - aCricket.totalPoints;
            }
        } else {
            const aZeroOne = a;
            const bZeroOne = b;
            return aZeroOne.currentScore - bZeroOne.currentScore;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 rounded-2xl shadow-2xl border animate-scale-in",
        style: {
            background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
            borderColor: 'rgba(255, 185, 95, 0.3)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-5xl font-headline font-extrabold mb-2 text-center",
                style: {
                    color: 'var(--hud-on-primary)'
                },
                children: t('cricket.game.wonGame', {
                    name: winner.name
                })
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl text-center mb-6",
                style: {
                    color: 'rgba(71, 42, 0, 0.7)'
                },
                children: t('cricket.game.gameEndedAfter', {
                    rounds: totalRounds,
                    roundsLabel: totalRounds > 1 ? t('cricket.game.rounds') : t('cricket.game.round').toLowerCase()
                })
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl p-6 mb-6 border",
                style: {
                    backgroundColor: 'var(--hud-surface-container-low)',
                    borderColor: 'rgba(69, 70, 77, 0.15)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-headline font-bold mb-4 text-center",
                        style: {
                            color: 'var(--hud-on-surface)'
                        },
                        children: isCricket ? t('cricket.game.gameStats') : t('zeroOne.game.gameStats')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '2px solid var(--hud-surface-container-highest)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3 text-left font-label text-xs uppercase tracking-widest font-semibold",
                                                style: {
                                                    color: 'var(--hud-tertiary)'
                                                },
                                                children: t('cricket.game.rank')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-3 text-left font-label text-xs uppercase tracking-widest font-semibold",
                                                style: {
                                                    color: 'var(--hud-tertiary)'
                                                },
                                                children: t('cricket.game.player')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            isCricket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center font-label text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.game.points')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center font-label text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.game.marks')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center font-label text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.game.mpr')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center font-label text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('zeroOne.game.remaining')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center font-label text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('zeroOne.game.average')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center font-label text-xs uppercase tracking-widest font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: "PPD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: sortedPlayers.map((playerState, index)=>{
                                        const isWinner = playerState.player.id === winner.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            style: {
                                                borderBottom: '1px solid var(--hud-surface-container-high)',
                                                backgroundColor: isWinner ? 'rgba(255, 185, 95, 0.08)' : 'transparent'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3 text-center",
                                                    children: index === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🥇"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 25
                                                    }, this) : index === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🥈"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 25
                                                    }, this) : index === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl",
                                                        children: "🥉"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "p-3 font-bold",
                                                    style: {
                                                        color: 'var(--hud-on-surface)'
                                                    },
                                                    children: [
                                                        playerState.player.name,
                                                        isWinner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2",
                                                            children: "👑"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this),
                                                isCricket && isCricketPlayer(playerState) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center font-bold",
                                                            style: {
                                                                color: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-error)' : 'var(--hud-primary)'
                                                            },
                                                            children: playerState.totalPoints
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center font-semibold",
                                                            style: {
                                                                color: 'var(--hud-on-surface)'
                                                            },
                                                            children: playerState.totalMarks
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center font-bold text-lg",
                                                            style: {
                                                                color: 'var(--hud-secondary)'
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateMPR"])(playerState).toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true) : !isCricket && !isCricketPlayer(playerState) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center font-bold",
                                                            style: {
                                                                color: 'var(--hud-primary)'
                                                            },
                                                            children: playerState.currentScore
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center font-semibold",
                                                            style: {
                                                                color: 'var(--hud-on-surface)'
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateAverage"])(playerState).toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center font-bold text-lg",
                                                            style: {
                                                                color: 'var(--hud-secondary)'
                                                            },
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculatePPD"])(playerState).toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true) : null
                                            ]
                                        }, playerState.player.id, true, {
                                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4 justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNewGame,
                        className: "px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105",
                        style: {
                            backgroundColor: 'var(--hud-on-primary)',
                            color: 'var(--hud-primary)'
                        },
                        children: t('cricket.game.newGame')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onQuit,
                        className: "px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105",
                        style: {
                            backgroundColor: 'var(--hud-surface-container-high)',
                            color: 'var(--hud-on-surface)'
                        },
                        children: t('cricket.game.quit')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/GameOverBanner.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/components/CurrentPlayerPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrentPlayerPanel",
    ()=>CurrentPlayerPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
;
;
function CurrentPlayerPanel({ currentPlayer, dartsThrown, currentRound, maxRounds, currentTurnHits, hasHistory, onUndo, onNextPlayer }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-2xl p-4 border",
        style: {
            background: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            WebkitBackdropFilter: 'blur(var(--hud-glass-blur))',
            borderColor: 'rgba(69, 70, 77, 0.15)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-headline font-extrabold mb-1",
                            style: {
                                color: 'var(--hud-on-surface)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--hud-primary)'
                                },
                                children: currentPlayer.player.name
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 text-sm",
                            style: {
                                color: 'var(--hud-tertiary)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-testid": "dart-counter",
                                    children: [
                                        t('cricket.game.dart'),
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            style: {
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: dartsThrown
                                        }, void 0, false, {
                                            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        " / 3"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'var(--hud-outline-variant)'
                                    },
                                    children: "|"
                                }, void 0, false, {
                                    fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-testid": "round-counter",
                                    children: [
                                        t('cricket.game.round'),
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            style: {
                                                color: 'var(--hud-on-surface)'
                                            },
                                            children: currentRound
                                        }, void 0, false, {
                                            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        maxRounds > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                " / ",
                                                maxRounds
                                            ]
                                        }, void 0, true)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "undo-button",
                            onClick: onUndo,
                            disabled: !hasHistory,
                            className: "px-4 py-2 rounded-lg font-bold text-sm transition-all",
                            style: {
                                backgroundColor: !hasHistory ? 'var(--hud-surface-container-high)' : 'var(--hud-primary)',
                                color: !hasHistory ? 'var(--hud-on-tertiary-container)' : 'var(--hud-on-primary)',
                                cursor: !hasHistory ? 'not-allowed' : 'pointer',
                                opacity: !hasHistory ? 0.5 : 1
                            },
                            title: t('cricket.game.undoLastMove'),
                            children: [
                                "↶ ",
                                t('cricket.game.undo')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "next-player-button",
                            onClick: onNextPlayer,
                            className: "px-4 py-2 rounded-lg font-bold text-sm transition-all",
                            style: {
                                backgroundColor: 'var(--hud-error-container)',
                                color: 'var(--hud-on-error-container)'
                            },
                            title: t('cricket.game.nextPlayerTooltip'),
                            children: t('cricket.game.nextPlayer')
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cricket/game/components/CurrentPlayerPanel.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/components/ScoreBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScoreBoard",
    ()=>ScoreBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
function getMarkState(marks) {
    if (marks === 0) return null;
    if (marks === 1) return "single";
    if (marks === 2) return "double";
    return "closed";
}
function MarkCell({ marks, allClosed }) {
    const markState = getMarkState(marks);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-flex items-center justify-center w-10 h-10",
        children: [
            markState === "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full border-2",
                style: {
                    borderColor: allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)'
                }
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            markState === "single" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold leading-none",
                style: {
                    color: 'var(--hud-primary)'
                },
                children: "/"
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            (markState === "double" || markState === "closed") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-bold leading-none",
                style: {
                    color: markState === "closed" && allClosed ? 'var(--hud-on-tertiary-container)' : markState === "closed" ? 'var(--hud-secondary)' : 'var(--hud-primary)'
                },
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            !markState && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-2xl font-light opacity-20",
                style: {
                    color: 'var(--hud-on-surface-variant)'
                },
                children: "—"
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function ScoreBoard({ players, currentPlayerIndex, gameMode, gameFinished }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("cricket.game");
    // Check if all players have closed a specific number
    const isNumberClosedByAll = (num)=>{
        return players.every((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlayerScore"])(p, num).marks >= 3);
    };
    // Split players into left and right columns
    const midPoint = Math.ceil(players.length / 2);
    const leftPlayers = players.slice(0, midPoint);
    const rightPlayers = players.slice(midPoint);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-2xl h-full flex flex-col overflow-hidden border",
        style: {
            backgroundColor: 'var(--hud-surface-container-low)',
            borderColor: 'rgba(69, 70, 77, 0.10)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 p-3 border-b",
                style: {
                    gridTemplateColumns: `repeat(${players.length}, 1fr)`,
                    borderColor: 'rgba(69, 70, 77, 0.10)'
                },
                children: players.map((playerState, idx)=>{
                    const isCurrentPlayer = idx === currentPlayerIndex;
                    const isFinished = gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard ? __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRICKET_NUMBERS"].every((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlayerScore"])(playerState, n).marks >= 3) : false;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": `scoreboard-player-${playerState.player.name}`,
                        className: "relative p-4 rounded-xl border transition-all",
                        style: {
                            backgroundColor: isCurrentPlayer && !gameFinished ? 'var(--hud-surface-container-low)' : 'var(--hud-surface-container-low)',
                            borderColor: isCurrentPlayer && !gameFinished ? 'rgba(255, 185, 95, 0.10)' : 'transparent',
                            boxShadow: isCurrentPlayer && !gameFinished ? '0 0 20px rgba(255, 185, 95, 0.15)' : 'none',
                            opacity: isCurrentPlayer || gameFinished ? 1 : 0.6
                        },
                        children: [
                            isCurrentPlayer && !gameFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tighter shadow-xl",
                                style: {
                                    backgroundColor: 'var(--hud-primary)',
                                    color: 'var(--hud-on-primary)'
                                },
                                children: "CURRENT TURN"
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 120,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-headline font-extrabold text-xs tracking-widest uppercase",
                                        style: {
                                            color: isCurrentPlayer && !gameFinished ? 'var(--hud-primary)' : 'var(--hud-tertiary)'
                                        },
                                        children: isCurrentPlayer && !gameFinished ? "Active" : "Player"
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-headline font-bold truncate",
                                        style: {
                                            color: 'var(--hud-on-surface)'
                                        },
                                        children: playerState.player.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-4xl font-headline font-black",
                                style: {
                                    color: isCurrentPlayer && !gameFinished ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'
                                },
                                children: playerState.totalPoints
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                        ]
                    }, playerState.player.id, true, {
                        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-auto flex-1 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    style: {
                        display: 'grid',
                        gridTemplateColumns: `repeat(${leftPlayers.length}, 1fr) 3.5rem repeat(${rightPlayers.length || 1}, 1fr)`
                    },
                    children: [
                        leftPlayers.map((playerState)=>{
                            const isCurrentPlayer = players.indexOf(playerState) === currentPlayerIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2 text-center font-bold text-xs sticky top-0 z-10",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container-low)',
                                    color: isCurrentPlayer && !gameFinished ? 'var(--hud-primary)' : 'var(--hud-on-tertiary-container)',
                                    borderBottom: isCurrentPlayer && !gameFinished ? '2px solid var(--hud-primary)' : '2px solid var(--hud-surface-container-highest)'
                                },
                                children: playerState.player.name
                            }, playerState.player.id, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2 text-center sticky top-0 z-10",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-highest)',
                                borderBottom: '2px solid var(--hud-surface-container-highest)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        rightPlayers.length > 0 ? rightPlayers.map((playerState)=>{
                            const isCurrentPlayer = players.indexOf(playerState) === currentPlayerIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2 text-center font-bold text-xs sticky top-0 z-10",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container-low)',
                                    color: isCurrentPlayer && !gameFinished ? 'var(--hud-primary)' : 'var(--hud-on-tertiary-container)',
                                    borderBottom: isCurrentPlayer && !gameFinished ? '2px solid var(--hud-primary)' : '2px solid var(--hud-surface-container-highest)'
                                },
                                children: playerState.player.name
                            }, playerState.player.id, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 211,
                                columnNumber: 17
                            }, this);
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-2 sticky top-0 z-10",
                            style: {
                                backgroundColor: 'var(--hud-surface-container-low)',
                                borderBottom: '2px solid var(--hud-surface-container-highest)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRICKET_NUMBERS"].map((num)=>{
                            const allClosed = isNumberClosedByAll(num);
                            const rowStyle = {
                                backgroundColor: allClosed ? 'rgba(45, 52, 73, 0.25)' : 'transparent',
                                borderBottom: '1px solid var(--hud-surface-container-high)'
                            };
                            return [
                                // Left player mark cells
                                ...leftPlayers.map((playerState)=>{
                                    const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlayerScore"])(playerState, num);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14 flex items-center justify-center",
                                        style: rowStyle,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkCell, {
                                            marks: score.marks,
                                            allClosed: allClosed
                                        }, void 0, false, {
                                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                            lineNumber: 257,
                                            columnNumber: 21
                                        }, this)
                                    }, `${playerState.player.id}-${num}`, false, {
                                        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                        lineNumber: 252,
                                        columnNumber: 19
                                    }, this);
                                }),
                                // Center number cell
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-testid": `cricket-number-${num === 25 ? 'Bull' : num}`,
                                    className: "h-14 flex items-center justify-center font-headline font-extrabold text-xl",
                                    style: {
                                        ...rowStyle,
                                        backgroundColor: allClosed ? 'rgba(45, 52, 73, 0.5)' : 'var(--hud-surface-container-highest)',
                                        color: allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)',
                                        borderLeft: '1px solid var(--hud-surface-container-highest)',
                                        borderRight: '1px solid var(--hud-surface-container-highest)'
                                    },
                                    children: num === 25 ? "Bull" : num
                                }, `num-${num}`, false, {
                                    fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this),
                                // Right player mark cells (or empty if only 1 player column)
                                ...rightPlayers.length > 0 ? rightPlayers.map((playerState)=>{
                                    const score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPlayerScore"])(playerState, num);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14 flex items-center justify-center",
                                        style: {
                                            ...rowStyle,
                                            backgroundColor: allClosed ? 'rgba(45, 52, 73, 0.25)' : 'var(--hud-surface-container-low)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MarkCell, {
                                            marks: score.marks,
                                            allClosed: allClosed
                                        }, void 0, false, {
                                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                            lineNumber: 291,
                                            columnNumber: 25
                                        }, this)
                                    }, `${playerState.player.id}-${num}`, false, {
                                        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                        lineNumber: 286,
                                        columnNumber: 23
                                    }, this);
                                }) : [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14",
                                        style: {
                                            ...rowStyle,
                                            backgroundColor: 'var(--hud-surface-container-low)'
                                        }
                                    }, "empty-right", false, {
                                        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                        lineNumber: 296,
                                        columnNumber: 21
                                    }, this)
                                ]
                            ];
                        }),
                        leftPlayers.map((playerState)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 flex items-center justify-center font-bold text-lg sticky bottom-10 z-10",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container)',
                                    borderTop: '2px solid var(--hud-primary)',
                                    color: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-error)' : 'var(--hud-on-surface)'
                                },
                                children: playerState.totalPoints
                            }, `pts-left-${playerState.player.id}`, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 flex items-center justify-center font-label text-xs uppercase tracking-widest font-semibold sticky bottom-10 z-10",
                            style: {
                                backgroundColor: 'var(--hud-surface-container)',
                                borderTop: '2px solid var(--hud-primary)',
                                color: 'var(--hud-tertiary)'
                            },
                            "data-testid": "points-label",
                            children: t("points")
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        rightPlayers.length > 0 ? rightPlayers.map((playerState)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 flex items-center justify-center font-bold text-lg sticky bottom-10 z-10",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container)',
                                    borderTop: '2px solid var(--hud-primary)',
                                    color: gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat ? 'var(--hud-error)' : 'var(--hud-on-surface)'
                                },
                                children: playerState.totalPoints
                            }, `pts-right-${playerState.player.id}`, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 335,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 sticky bottom-10 z-10",
                            style: {
                                backgroundColor: 'var(--hud-surface-container)',
                                borderTop: '2px solid var(--hud-primary)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this),
                        leftPlayers.map((playerState)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 flex items-center justify-center font-bold text-base sticky bottom-0 z-10",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container)',
                                    color: 'var(--hud-secondary)'
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateMPR"])(playerState).toFixed(2)
                            }, `mpr-left-${playerState.player.id}`, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 flex items-center justify-center font-label text-xs uppercase tracking-widest font-semibold sticky bottom-0 z-10",
                            style: {
                                backgroundColor: 'var(--hud-surface-container)',
                                color: 'var(--hud-tertiary)'
                            },
                            "data-testid": "mpr-label",
                            children: t("mpr")
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                            lineNumber: 372,
                            columnNumber: 11
                        }, this),
                        rightPlayers.length > 0 ? rightPlayers.map((playerState)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 flex items-center justify-center font-bold text-base sticky bottom-0 z-10",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container)',
                                    color: 'var(--hud-secondary)'
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateMPR"])(playerState).toFixed(2)
                            }, `mpr-right-${playerState.player.id}`, false, {
                                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                                lineNumber: 384,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 sticky bottom-0 z-10",
                            style: {
                                backgroundColor: 'var(--hud-surface-container)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                            lineNumber: 396,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/ScoreBoard.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/components/HitAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HitAnimation",
    ()=>HitAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function HitAnimation({ hit, onComplete }) {
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hit) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShow(true);
            const timer = setTimeout(()=>{
                setShow(false);
                onComplete?.();
            }, 1500);
            return ()=>clearTimeout(timer);
        }
    }, [
        hit,
        onComplete
    ]);
    if (!hit || !show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 animate-fade-in"
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative animate-bounce-scale",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl shadow-2xl p-16 border",
                        style: {
                            backgroundColor: 'var(--hud-surface-container-low)',
                            borderColor: 'rgba(255, 185, 95, 0.3)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-9xl font-headline font-extrabold",
                                style: {
                                    color: 'var(--hud-primary)'
                                },
                                children: hit.ShortName
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-3xl blur-3xl opacity-40 animate-pulse",
                        style: {
                            backgroundColor: 'var(--hud-primary)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/HitAnimation.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/components/TurnSummary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TurnSummary",
    ()=>TurnSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.28.5_react@19.2.0/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
function TurnSummary({ show, currentPlayer, hits, onComplete }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setVisible(true);
            const timer = setTimeout(()=>{
                setVisible(false);
                onComplete();
            }, 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        show,
        onComplete
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "turn-summary",
        className: "jsx-45c7281d492a7dcd" + " " + "fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-45c7281d492a7dcd" + " " + "absolute inset-0 bg-black/60 animate-fade-in"
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-45c7281d492a7dcd" + " " + "relative animate-slide-up",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: 'var(--hud-surface-container-low)',
                            borderColor: 'rgba(255, 185, 95, 0.3)'
                        },
                        className: "jsx-45c7281d492a7dcd" + " " + "rounded-3xl shadow-2xl p-10 border min-w-[500px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45c7281d492a7dcd" + " " + "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        className: "jsx-45c7281d492a7dcd" + " " + "text-4xl font-headline font-extrabold mb-2",
                                        children: currentPlayer.player.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'var(--hud-tertiary)'
                                        },
                                        className: "jsx-45c7281d492a7dcd" + " " + "text-xl",
                                        children: t('cricket.game.turnCompleted')
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45c7281d492a7dcd" + " " + "flex justify-center gap-4",
                                children: [
                                    hits.map((hit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundColor: 'var(--hud-surface-container-high)',
                                                borderColor: 'rgba(69, 70, 77, 0.15)',
                                                animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
                                            },
                                            className: "jsx-45c7281d492a7dcd" + " " + "rounded-xl p-6 min-w-[120px] text-center transform hover:scale-110 transition-transform border",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'var(--hud-primary)'
                                                },
                                                className: "jsx-45c7281d492a7dcd" + " " + "text-5xl font-headline font-extrabold",
                                                children: hit.ShortName
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)),
                                    Array.from({
                                        length: 3 - hits.length
                                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundColor: 'var(--hud-surface-container)',
                                                borderColor: 'var(--hud-surface-container-highest)'
                                            },
                                            className: "jsx-45c7281d492a7dcd" + " " + "rounded-xl p-6 min-w-[120px] text-center border-2 border-dashed",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: 'var(--hud-on-tertiary-container)'
                                                },
                                                className: "jsx-45c7281d492a7dcd" + " " + "text-5xl font-headline font-extrabold",
                                                children: "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this)
                                        }, `empty-${index}`, false, {
                                            fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: 'var(--hud-primary)'
                        },
                        className: "jsx-45c7281d492a7dcd" + " " + "absolute inset-0 rounded-3xl blur-3xl opacity-30 animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$28$2e$5_react$40$19$2e$2$2e$0$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "45c7281d492a7dcd",
                children: "@keyframes slideIn{0%{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/TurnSummary.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/components/PlayerTurnHistory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayerTurnHistory",
    ()=>PlayerTurnHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
;
;
function PlayerTurnHistory({ player, turns, currentTurnHits, currentRound }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl shadow-2xl h-full flex flex-col overflow-hidden border",
        style: {
            backgroundColor: 'var(--hud-surface-container-low)',
            borderColor: 'rgba(69, 70, 77, 0.10)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-label font-semibold uppercase tracking-widest px-4 py-3 flex-shrink-0",
                style: {
                    color: 'var(--hud-tertiary)',
                    borderBottom: '1px solid var(--hud-surface-container-high)'
                },
                "data-testid": "history-title",
                children: [
                    t('cricket.game.history'),
                    " — ",
                    player.name
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-y-auto flex-1 p-3 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg p-2.5 border",
                        style: {
                            backgroundColor: 'rgba(255, 185, 95, 0.08)',
                            borderColor: 'rgba(255, 185, 95, 0.25)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold",
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        "data-testid": `current-round-${currentRound}`,
                                        children: [
                                            t('cricket.game.round'),
                                            " ",
                                            currentRound,
                                            " (",
                                            t('cricket.game.inProgress'),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        children: [
                                            currentTurnHits.length,
                                            " / 3 ",
                                            t('cricket.game.darts')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1.5",
                                children: currentTurnHits.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        currentTurnHits.map((hit, hitIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 rounded px-2 py-1.5 text-center",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container-high)',
                                                    boxShadow: hitIdx === currentTurnHits.length - 1 ? '0 0 0 2px var(--hud-secondary)' : 'none'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold",
                                                        style: {
                                                            color: 'var(--hud-on-surface)'
                                                        },
                                                        children: hit.ShortName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: hit.Value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, hitIdx, true, {
                                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                lineNumber: 55,
                                                columnNumber: 19
                                            }, this)),
                                        currentTurnHits.length < 3 && Array.from({
                                            length: 3 - currentTurnHits.length
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 rounded px-2 py-1.5 text-center",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, `empty-${i}`, true, {
                                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, this))
                                    ]
                                }, void 0, true) : /* No darts thrown yet */ Array.from({
                                    length: 3
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 rounded px-2 py-1.5 text-center",
                                        style: {
                                            backgroundColor: 'var(--hud-surface-container)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm",
                                                style: {
                                                    color: 'var(--hud-on-tertiary-container)'
                                                },
                                                children: "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs",
                                                style: {
                                                    color: 'var(--hud-on-tertiary-container)'
                                                },
                                                children: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `empty-${i}`, true, {
                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    turns.length > 0 ? [
                        ...turns
                    ].reverse().map((turn, idx)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg p-2.5 border",
                            style: {
                                backgroundColor: 'var(--hud-surface-container)',
                                borderColor: 'rgba(69, 70, 77, 0.10)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold",
                                            style: {
                                                color: 'var(--hud-tertiary)'
                                            },
                                            "data-testid": `completed-round-${turn.round}`,
                                            children: [
                                                t('cricket.game.round'),
                                                " ",
                                                turn.round
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            style: {
                                                color: 'var(--hud-on-tertiary-container)'
                                            },
                                            children: [
                                                turn.hits.length,
                                                " ",
                                                t('cricket.game.darts')
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1.5",
                                    children: [
                                        turn.hits.map((hit, hitIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 rounded px-2 py-1.5 text-center",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container-high)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold",
                                                        style: {
                                                            color: 'var(--hud-on-surface)'
                                                        },
                                                        children: hit.ShortName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: hit.Value
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, hitIdx, true, {
                                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                lineNumber: 124,
                                                columnNumber: 21
                                            }, this)),
                                        turn.hits.length < 3 && Array.from({
                                            length: 3 - turn.hits.length
                                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 rounded px-2 py-1.5 text-center",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, `empty-${i}`, true, {
                                                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                                lineNumber: 140,
                                                columnNumber: 23
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, `${turn.round}-${idx}`, true, {
                            fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                            lineNumber: 106,
                            columnNumber: 15
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4 text-sm",
                        style: {
                            color: 'var(--hud-on-tertiary-container)'
                        },
                        children: t('cricket.game.noCompletedTurns')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/components/PlayerTurnHistory.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/components/LegendDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LegendDialog",
    ()=>LegendDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function LegendDialog({ show, gameMode, onClose }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-testid": "legend-dialog",
            className: "rounded-2xl border max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-in",
            style: {
                backgroundColor: 'var(--hud-surface-container-low)',
                borderColor: 'rgba(69, 70, 77, 0.15)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-4 md:p-6 pb-3",
                    style: {
                        borderBottom: '1px solid var(--hud-surface-container-highest)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-headline font-extrabold text-xl md:text-2xl",
                            style: {
                                color: 'var(--hud-on-surface)'
                            },
                            children: t('cricket.legend.title')
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-testid": "legend-close-button",
                            onClick: onClose,
                            className: "text-2xl font-bold px-3 py-1 rounded-lg transition-colors",
                            style: {
                                color: 'var(--hud-on-tertiary-container)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faXmark"]
                            }, void 0, false, {
                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto flex-1 p-4 md:p-6 pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 md:space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-base md:text-lg font-headline font-bold mb-2 md:mb-3",
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        children: t('cricket.legend.marksSymbols')
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm md:text-base",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl md:text-2xl font-bold",
                                                        style: {
                                                            color: 'var(--hud-primary)'
                                                        },
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.legend.oneMark')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 51,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl md:text-2xl font-bold",
                                                        style: {
                                                            color: 'var(--hud-primary)'
                                                        },
                                                        children: "X"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.legend.twoMarks')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl md:text-2xl font-bold",
                                                        style: {
                                                            color: 'var(--hud-secondary)'
                                                        },
                                                        children: "⊗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.legend.closed')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg",
                                                style: {
                                                    backgroundColor: 'var(--hud-surface-container)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl md:text-2xl font-bold",
                                                        style: {
                                                            color: 'var(--hud-on-tertiary-container)'
                                                        },
                                                        children: "⊗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'var(--hud-tertiary)'
                                                        },
                                                        children: t('cricket.legend.closedByAll')
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 md:p-4 rounded-xl border",
                                style: {
                                    backgroundColor: 'rgba(255, 185, 95, 0.06)',
                                    borderColor: 'rgba(255, 185, 95, 0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base font-bold mb-2 flex items-center gap-2",
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faChartBar"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            t('cricket.legend.mprTitle')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm",
                                        style: {
                                            color: 'var(--hud-tertiary)'
                                        },
                                        children: t('cricket.legend.mprDesc')
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-disc list-inside mt-2 text-xs md:text-sm space-y-1",
                                        style: {
                                            color: 'var(--hud-tertiary)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: t('cricket.legend.single')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: t('cricket.legend.double')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: t('cricket.legend.triple')
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 md:p-4 rounded-xl border",
                                style: {
                                    backgroundColor: 'rgba(255, 185, 95, 0.06)',
                                    borderColor: 'rgba(255, 185, 95, 0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base font-bold mb-2 flex items-center gap-2",
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faBullseye"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            t('cricket.legend.standardTitle')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm",
                                        style: {
                                            color: 'var(--hud-tertiary)'
                                        },
                                        children: t('cricket.legend.standardDesc')
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            gameMode === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].CutThroat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 md:p-4 rounded-xl border",
                                style: {
                                    backgroundColor: 'rgba(255, 180, 171, 0.06)',
                                    borderColor: 'rgba(255, 180, 171, 0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base font-bold mb-2 flex items-center gap-2",
                                        style: {
                                            color: 'var(--hud-error)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTriangleExclamation"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            t('cricket.legend.cutThroatTitle')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs md:text-sm",
                                        style: {
                                            color: 'var(--hud-tertiary)'
                                        },
                                        children: t('cricket.legend.cutThroatDesc')
                                    }, void 0, false, {
                                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 md:p-6 pt-3",
                    style: {
                        borderTop: '1px solid var(--hud-surface-container-highest)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "w-full px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg hud-gradient-cta",
                        children: t('cricket.legend.close')
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/cricket/game/components/LegendDialog.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[project]/app/components/ShareGameDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareGameDialog",
    ()=>ShareGameDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qrcode$40$1$2e$5$2e$4$2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/qrcode@1.5.4/node_modules/qrcode/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+react-fontawesome@3.1.0_@fortawesome+fontawesome-svg-core@7.1.0_react@19.2.0/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@fortawesome+free-solid-svg-icons@7.1.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ShareGameDialog({ open, onClose, roomCode, spectatorCount, isConnected, onCreateRoom, onCloseRoom, roomState }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const [qrDataUrl, setQrDataUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const watchUrl = roomCode ? `${("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ""}/watch/${roomCode}` : "";
    // Generate QR code when room code changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (roomCode && watchUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qrcode$40$1$2e$5$2e$4$2f$node_modules$2f$qrcode$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].toDataURL(watchUrl, {
                width: 200,
                margin: 2,
                color: {
                    dark: "#000000",
                    light: "#ffffff"
                }
            }).then(setQrDataUrl).catch(console.error);
        }
    }, [
        roomCode,
        watchUrl
    ]);
    const handleCopyLink = async ()=>{
        if (watchUrl) {
            await navigator.clipboard.writeText(watchUrl);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    };
    const handleShare = async ()=>{
        if (navigator.share && watchUrl) {
            try {
                await navigator.share({
                    title: "Watch my dart game!",
                    text: `Join with code: ${roomCode}`,
                    url: watchUrl
                });
            } catch  {
            // User cancelled share
            }
        }
    };
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl border w-full max-w-md overflow-hidden shadow-2xl animate-scale-in",
            style: {
                backgroundColor: 'var(--hud-surface-container-low)',
                borderColor: 'rgba(69, 70, 77, 0.20)'
            },
            onClick: (e)=>e.stopPropagation(),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-headline font-bold text-xl",
                                style: {
                                    color: 'var(--hud-on-surface)'
                                },
                                children: t("spectator.shareGame")
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "transition-colors",
                                style: {
                                    color: 'var(--hud-tertiary)'
                                },
                                title: "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faXmark"],
                                    className: "text-lg"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ShareGameDialog.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    !roomCode ? /* ── No room yet: create state ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto",
                                style: {
                                    backgroundColor: 'rgba(128, 155, 255, 0.08)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faTowerBroadcast"],
                                    className: "text-2xl",
                                    style: {
                                        color: 'var(--hud-game-01)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ShareGameDialog.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed",
                                style: {
                                    color: 'rgba(185, 200, 222, 0.7)'
                                },
                                children: t("spectator.createRoomDescription")
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: async ()=>{
                                    await onCreateRoom();
                                },
                                disabled: !isConnected || roomState === "creating",
                                className: "px-8 py-3 rounded-xl font-bold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hud-gradient-cta",
                                children: roomState === "creating" ? t("spectator.creating") : t("spectator.goLive")
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this),
                            !isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium",
                                style: {
                                    color: 'var(--hud-error)'
                                },
                                children: t("spectator.serverUnavailable")
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 128,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this) : /* ── Room active: share state ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: 'rgba(185, 200, 222, 0.7)'
                                },
                                children: t("spectator.scanQr")
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            qrDataUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-block bg-white p-4 rounded-lg shadow-inner mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: qrDataUrl,
                                    alt: "Session QR Code",
                                    width: 192,
                                    height: 192,
                                    className: "rounded"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ShareGameDialog.tsx",
                                    lineNumber: 142,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 141,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-widest",
                                        style: {
                                            color: 'rgba(185, 200, 222, 0.5)'
                                        },
                                        children: t("spectator.gameCode")
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl font-headline font-black tracking-widest",
                                        style: {
                                            color: 'var(--hud-primary)'
                                        },
                                        children: roomCode
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-5 border-t",
                                style: {
                                    borderColor: 'rgba(69, 70, 77, 0.10)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg px-4 py-3 flex items-center justify-between gap-4",
                                    style: {
                                        backgroundColor: 'var(--hud-surface-container-highest)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono truncate",
                                            style: {
                                                color: 'var(--hud-tertiary)'
                                            },
                                            children: watchUrl
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ShareGameDialog.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCopyLink,
                                            className: "flex-shrink-0 transition-colors",
                                            style: {
                                                color: copied ? 'var(--hud-secondary)' : 'var(--hud-primary)'
                                            },
                                            title: "Copy link",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: copied ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCheck"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCopy"],
                                                className: "text-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ShareGameDialog.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ShareGameDialog.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 168,
                                columnNumber: 15
                            }, this),
                            typeof navigator !== "undefined" && "share" in navigator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShare,
                                className: "w-full px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 hud-gradient-cta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faShareNodes"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                                        lineNumber: 199,
                                        columnNumber: 19
                                    }, this),
                                    t("spectator.shareNative")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 195,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-xs",
                                style: {
                                    color: 'var(--hud-on-tertiary-container)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full animate-live-dot",
                                                style: {
                                                    backgroundColor: 'var(--hud-secondary)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label font-semibold uppercase tracking-widest",
                                                style: {
                                                    color: 'var(--hud-secondary)'
                                                },
                                                children: "LIVE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faEye"],
                                                className: "ml-1"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: spectatorCount
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            onCloseRoom();
                                            onClose();
                                        },
                                        className: "flex items-center gap-1.5 font-medium transition-colors",
                                        style: {
                                            color: 'var(--hud-error)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCircleStop"]
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this),
                                            t("spectator.stopSharing")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-full py-4 rounded-lg font-headline font-bold transition-colors border",
                                style: {
                                    backgroundColor: 'var(--hud-surface-container-highest)',
                                    color: 'var(--hud-on-surface)',
                                    borderColor: 'rgba(69, 70, 77, 0.10)'
                                },
                                children: t("spectator.done")
                            }, void 0, false, {
                                fileName: "[project]/app/components/ShareGameDialog.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ShareGameDialog.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ShareGameDialog.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/ShareGameDialog.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/ShareGameDialog.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/cricket/game/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CricketGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/constants/segments.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/cricket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/animations.ts [app-ssr] (ecmascript)");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useGameHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/hooks/useGameHistory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useGranboardConnection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/hooks/useGranboardConnection.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useCricketGameState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/hooks/useCricketGameState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$usePlayerTurnHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/hooks/usePlayerTurnHistory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useSounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/hooks/useSounds.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/contexts/SettingsContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAnimations$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useAnimations.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useGameRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/hooks/useGameRoom.ts [app-ssr] (ecmascript)");
// Serialization
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$serialization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/serialization.ts [app-ssr] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$GameHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/GameHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$GameOverBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/GameOverBanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$CurrentPlayerPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/CurrentPlayerPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$ScoreBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/ScoreBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$HitAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/HitAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$TurnSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/TurnSummary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$PlayerTurnHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/PlayerTurnHistory.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$LegendDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/components/LegendDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ShareGameDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/ShareGameDialog.tsx [app-ssr] (ecmascript)");
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
;
;
;
function CricketGame() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const { openDialog, closeDialog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    // Animation states
    const [showTurnSummary, setShowTurnSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [turnSummaryData, setTurnSummaryData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Dialog states
    const [showLegend, setShowLegend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showShare, setShowShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sound effects
    const { playSound } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useSounds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSounds"])();
    // Animations
    const { playAnimation, AnimationOverlay } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useAnimations$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimations"])();
    // Player turn history (declare first to use in callbacks)
    const { addTurn, getPlayerHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$usePlayerTurnHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerTurnHistory"])();
    // Use refs to access latest values in callbacks
    const addTurnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(addTurn);
    const gameStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const saveCurrentTurnHitsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const turnStartStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        addTurnRef.current = addTurn;
    }, [
        addTurn
    ]);
    // Game state management
    const { gameState, setGameState, currentTurnHits, lastHit, onSegmentHit, handleResetButton, restoreGameState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useCricketGameState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCricketGameState"])(null, (hits)=>{
        if (saveCurrentTurnHitsRef.current) {
            saveCurrentTurnHitsRef.current(hits);
        }
    }, (playerState, hits, isGameFinished)=>{
        // Add turn to player history
        if (gameStateRef.current) {
            addTurnRef.current(playerState.player, gameStateRef.current.currentRound, hits);
        }
        // Play sound when game is finished
        if (isGameFinished) {
            playSound("game-over");
        }
        // Show turn summary when player finishes turn (except if game is finished)
        if (!isGameFinished) {
            setTurnSummaryData({
                player: playerState,
                hits
            });
            setShowTurnSummary(true);
        }
    });
    // Update refs when gameState changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        gameStateRef.current = gameState;
    }, [
        gameState
    ]);
    // Save game state at the start of each turn (first dart)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState && gameState.dartsThrown === 1) {
            turnStartStateRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneGameState"])(gameState);
        }
    }, [
        gameState
    ]);
    // Initialize game state from session storage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const playersJson = sessionStorage.getItem("cricketPlayers");
        const gameModeString = sessionStorage.getItem("cricketGameMode");
        const maxRoundsString = sessionStorage.getItem("cricketMaxRounds");
        if (!playersJson) {
            router.push("/cricket");
            return;
        }
        const players = JSON.parse(playersJson);
        const mode = gameModeString || __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CricketGameMode"].Standard;
        const maxRounds = parseInt(maxRoundsString || "20");
        setGameState((0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createInitialGameState"])(players, mode, maxRounds));
    }, [
        router,
        setGameState
    ]);
    // Game history management
    const { hasHistory, saveCurrentTurnHits, undoLastAction } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useGameHistory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGameHistory"])(gameState, currentTurnHits, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneGameState"]);
    // Update saveCurrentTurnHits ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        saveCurrentTurnHitsRef.current = saveCurrentTurnHits;
    }, [
        saveCurrentTurnHits
    ]);
    // Wrapper for segment hit with sound effects
    const handleSegmentHitWithSound = (segment)=>{
        // Store previous state with deep clone to check for number closure
        const previousState = gameState ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneGameState"])(gameState) : null;
        const currentPlayerIndex = gameState?.currentPlayerIndex ?? 0;
        // Play sound based on segment type
        if (segment.Section === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_SECTIONS"].MISS) {
            // Miss
            playSound("dart-miss");
        } else if (segment.Section === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_SECTIONS"].BULL && segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_TYPES"].DOUBLE) {
            // Double Bull
            playSound("double-bull");
        } else if (segment.Section === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_SECTIONS"].BULL) {
            // Bull
            playSound("bull");
        }
        // Process the hit
        onSegmentHit(segment);
        // Check if hit is on a number that still counts in the game (whistle sounds)
        setTimeout(()=>{
            if (!previousState) return;
            const hitNumber = segment.Section;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRICKET_NUMBERS"].includes(hitNumber)) {
                // Check if this number was still in play BEFORE the hit (not everyone had closed it)
                const allPlayersClosed = previousState.players.every((p)=>(p.scores.get(hitNumber)?.marks ?? 0) >= 3);
                // Play whistle if the number still counted in the game
                if (!allPlayersClosed) {
                    if (segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_TYPES"].TRIPLE) {
                        playSound("whistle-triple");
                    } else if (segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_TYPES"].DOUBLE) {
                        playSound("whistle-double");
                    } else {
                        playSound("whistle-single");
                    }
                }
            }
        }, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_TIMINGS"].STATE_CHECK_DELAY);
    };
    // Granboard connection management
    const { connectionState, connectToBoard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useGranboardConnection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGranboardConnection"])(handleSegmentHitWithSound);
    // ─── Live spectator broadcasting ──────────────────────────────
    const { roomState, roomCode, spectatorCount, isConnected: wsConnected, createRoom, closeRoom, broadcastState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useGameRoom$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGameRoom"])({
        gameType: "cricket"
    });
    // Broadcast full game state whenever it changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!roomCode || !gameState) return;
        const serializedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$serialization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeCricketState"])(gameState);
        const serializedHits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$serialization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeSegments"])(currentTurnHits);
        const serializedLastHit = lastHit ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$serialization$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeSegment"])(lastHit) : null;
        broadcastState(serializedState, serializedHits, serializedLastHit);
    }, [
        gameState,
        currentTurnHits,
        lastHit,
        roomCode,
        broadcastState
    ]);
    // Trigger animations after 3rd dart (with delay after hit animation)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (gameState && gameState.dartsThrown === 3 && currentTurnHits.length === 3) {
            // Wait for hit animation to finish
            const timer = setTimeout(()=>{
                // Animation priority system (only one animation at a time)
                const hits = currentTurnHits;
                const turnStartState = turnStartStateRef.current;
                // Priority 1: Victory (handled elsewhere via isGameFinished)
                // Priority 2: Three misses (Goat) - doesn't need turnStartState check
                if (hits.every((hit)=>hit.Section === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_SECTIONS"].MISS)) {
                    playSound("goat");
                    playAnimation("three-miss");
                } else if (turnStartState && hits.every((hit)=>hit.Type === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_TYPES"].TRIPLE)) {
                    // Check if all 3 triples are on valid Cricket numbers that counted at turn start
                    const allTriplesCount = hits.every((hit)=>{
                        const section = hit.Section;
                        if (!__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRICKET_NUMBERS"].includes(section)) return false;
                        // Check if number was still in play at the START of the turn
                        const allPlayersClosed = turnStartState.players.every((p)=>(p.scores.get(section)?.marks ?? 0) >= 3);
                        return !allPlayersClosed;
                    });
                    if (allTriplesCount) {
                        playSound("horse");
                        playAnimation("three-triple");
                    }
                } else if (turnStartState) {
                    const allValidHits = hits.every((hit)=>{
                        if (hit.Section === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$segments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SEGMENT_SECTIONS"].MISS) return false; // Exclude miss
                        const section = hit.Section;
                        if (!__TURBOPACK__imported__module__$5b$project$5d2f$services$2f$cricket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CRICKET_NUMBERS"].includes(section)) return false;
                        // Check if number was still in play at the START of the turn
                        const allPlayersClosed = turnStartState.players.every((p)=>(p.scores.get(section)?.marks ?? 0) >= 3);
                        return !allPlayersClosed;
                    });
                    if (allValidHits) {
                        playAnimation("hit-sequence", hits, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_TIMINGS"].HIT_SEQUENCE_DURATION);
                    }
                }
            }, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANIMATION_TIMINGS"].HIT_ANIMATION_DELAY);
            return ()=>clearTimeout(timer);
        }
    }, [
        gameState,
        currentTurnHits,
        playAnimation,
        playSound
    ]);
    // Close turn summary when next player throws a dart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lastHit && showTurnSummary) {
            /* eslint-disable react-hooks/set-state-in-effect */ setShowTurnSummary(false);
            setTurnSummaryData(null);
        /* eslint-enable react-hooks/set-state-in-effect */ }
    }, [
        lastHit,
        showTurnSummary
    ]);
    // LED control disabled for Granboard 3s - protocol not yet implemented
    // TODO: Implement correct LED protocol for Granboard 3s
    // Actions
    const handleUndo = ()=>{
        const previousEntry = undoLastAction();
        if (previousEntry) {
            restoreGameState(previousEntry.gameState, previousEntry.turnHits);
        }
    };
    const handleNewGame = ()=>{
        router.push("/cricket");
    };
    const handleQuit = ()=>{
        router.push("/");
    };
    const handleShowSettings = ()=>{
        const customContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "data-testid": "new-game-button",
                    onClick: ()=>{
                        closeDialog();
                        handleNewGame();
                    },
                    className: "w-full px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-xl focus:outline-none hud-gradient-cta",
                    children: t('cricket.game.newGame')
                }, void 0, false, {
                    fileName: "[project]/app/cricket/game/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "data-testid": "quit-button",
                    onClick: ()=>{
                        closeDialog();
                        handleQuit();
                    },
                    className: "w-full px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105",
                    style: {
                        backgroundColor: 'var(--hud-error-container)',
                        color: 'var(--hud-on-error-container)'
                    },
                    children: t('cricket.game.quit')
                }, void 0, false, {
                    fileName: "[project]/app/cricket/game/page.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/cricket/game/page.tsx",
            lineNumber: 314,
            columnNumber: 7
        }, this);
        openDialog(customContent);
    };
    // Loading state
    if (!gameState) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center",
            style: {
                backgroundColor: 'var(--hud-background)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl",
                style: {
                    color: 'var(--hud-on-surface)'
                },
                children: t('common.loading')
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 349,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/cricket/game/page.tsx",
            lineNumber: 348,
            columnNumber: 7
        }, this);
    }
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "h-screen flex flex-col px-4 py-3 gap-3 overflow-hidden",
        style: {
            backgroundColor: 'var(--hud-background)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimationOverlay, {}, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$GameHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameHeader"], {
                gameMode: gameState.mode,
                connectionState: connectionState,
                onConnect: connectToBoard,
                onShowLegend: ()=>setShowLegend(true),
                onShowSettings: handleShowSettings,
                onShowShare: ()=>setShowShare(true),
                roomActive: !!roomCode,
                spectatorCount: spectatorCount
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            gameState.gameFinished && gameState.winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$GameOverBanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GameOverBanner"], {
                winner: gameState.winner,
                players: gameState.players,
                totalRounds: gameState.currentRound - 1,
                gameMode: gameState.mode,
                onNewGame: handleNewGame,
                onQuit: handleQuit
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 376,
                columnNumber: 9
            }, this),
            !gameState.gameFinished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$CurrentPlayerPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CurrentPlayerPanel"], {
                currentPlayer: currentPlayer,
                dartsThrown: gameState.dartsThrown,
                currentRound: gameState.currentRound,
                maxRounds: gameState.maxRounds,
                currentTurnHits: currentTurnHits,
                hasHistory: hasHistory,
                onUndo: handleUndo,
                onNextPlayer: handleResetButton
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 387,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1 min-h-0 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$PlayerTurnHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerTurnHistory"], {
                            player: currentPlayer.player,
                            turns: getPlayerHistory(currentPlayer.player.id),
                            currentTurnHits: currentTurnHits,
                            currentRound: gameState.currentRound
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/page.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/page.tsx",
                        lineNumber: 400,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 min-h-0 flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$ScoreBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScoreBoard"], {
                            players: gameState.players,
                            currentPlayerIndex: gameState.currentPlayerIndex,
                            gameMode: gameState.mode,
                            gameFinished: gameState.gameFinished
                        }, void 0, false, {
                            fileName: "[project]/app/cricket/game/page.tsx",
                            lineNumber: 409,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/cricket/game/page.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 399,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$HitAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HitAnimation"], {
                hit: lastHit
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            showTurnSummary && turnSummaryData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$TurnSummary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnSummary"], {
                show: showTurnSummary,
                currentPlayer: turnSummaryData.player,
                hits: turnSummaryData.hits,
                onComplete: ()=>{
                    setShowTurnSummary(false);
                    setTurnSummaryData(null);
                }
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$components$2f$LegendDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LegendDialog"], {
                show: showLegend,
                gameMode: gameState.mode,
                onClose: ()=>setShowLegend(false)
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 434,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ShareGameDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareGameDialog"], {
                open: showShare,
                onClose: ()=>setShowShare(false),
                roomCode: roomCode,
                spectatorCount: spectatorCount,
                isConnected: wsConnected,
                onCreateRoom: createRoom,
                onCloseRoom: closeRoom,
                roomState: roomState
            }, void 0, false, {
                fileName: "[project]/app/cricket/game/page.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/cricket/game/page.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a790659a._.js.map