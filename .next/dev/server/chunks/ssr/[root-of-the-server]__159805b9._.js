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
"[project]/services/training.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHECKOUT_SCORES",
    ()=>CHECKOUT_SCORES,
    "TrainingMode",
    ()=>TrainingMode,
    "calculateSegmentValue",
    ()=>calculateSegmentValue,
    "createCheckoutPracticeState",
    ()=>createCheckoutPracticeState,
    "createFreeThrowState",
    ()=>createFreeThrowState,
    "createTargetPracticeState",
    ()=>createTargetPracticeState,
    "getCheckoutPracticeStats",
    ()=>getCheckoutPracticeStats,
    "getFreeThrowStats",
    ()=>getFreeThrowStats,
    "getTargetDisplayName",
    ()=>getTargetDisplayName,
    "getTargetPracticeStats",
    ()=>getTargetPracticeStats,
    "processCheckoutHit",
    ()=>processCheckoutHit,
    "processFreeThrowHit",
    ()=>processFreeThrowHit,
    "processTargetPracticeHit",
    ()=>processTargetPracticeHit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/boardinfo.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/zeroone.ts [app-ssr] (ecmascript)");
;
;
var TrainingMode = /*#__PURE__*/ function(TrainingMode) {
    TrainingMode["FreeThrow"] = "free-throw";
    TrainingMode["TargetPractice"] = "target-practice";
    TrainingMode["CheckoutPractice"] = "checkout";
    return TrainingMode;
}({});
const calculateSegmentValue = (segment)=>{
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
const createFreeThrowState = ()=>({
        hits: [],
        totalDarts: 0,
        totalPoints: 0,
        singles: 0,
        doubles: 0,
        triples: 0,
        misses: 0,
        bullseyes: 0,
        doubleBulls: 0,
        sectionHits: {},
        currentRoundDarts: [],
        roundsCompleted: 0
    });
const processFreeThrowHit = (state, segment, hitId)=>{
    if (hitId && state.lastProcessedHit === hitId) {
        return state;
    }
    const value = calculateSegmentValue(segment);
    const hit = {
        segment,
        value,
        timestamp: Date.now()
    };
    const newState = {
        ...state
    };
    newState.hits = [
        ...state.hits,
        hit
    ];
    newState.totalDarts++;
    newState.totalPoints += value;
    newState.lastProcessedHit = hitId;
    // Track segment types
    const section = segment.Section;
    if (segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Other || section === 0) {
        newState.misses++;
    } else if (section === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentSection"].BULL) {
        if (segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double) {
            newState.doubleBulls++;
            newState.doubles++;
        } else {
            newState.bullseyes++;
            newState.singles++;
        }
    } else {
        switch(segment.Type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Single:
                newState.singles++;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double:
                newState.doubles++;
                break;
            case __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Triple:
                newState.triples++;
                break;
        }
    }
    // Track per-section hits
    if (section > 0 && segment.Type !== __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Other) {
        newState.sectionHits = {
            ...state.sectionHits
        };
        newState.sectionHits[section] = (newState.sectionHits[section] || 0) + 1;
    }
    // Round tracking (3 darts per round)
    newState.currentRoundDarts = [
        ...state.currentRoundDarts,
        hit
    ];
    if (newState.currentRoundDarts.length >= 3) {
        newState.roundsCompleted++;
        newState.currentRoundDarts = [];
    }
    return newState;
};
const getFreeThrowStats = (state)=>{
    const ppd = state.totalDarts > 0 ? state.totalPoints / state.totalDarts : 0;
    const ppr = state.roundsCompleted > 0 ? state.totalPoints / state.roundsCompleted : state.totalDarts > 0 ? state.totalPoints // incomplete round
     : 0;
    const hitRate = state.totalDarts > 0 ? (state.totalDarts - state.misses) / state.totalDarts * 100 : 0;
    // Most hit section
    let mostHitSection = 0;
    let mostHitCount = 0;
    for (const [section, count] of Object.entries(state.sectionHits)){
        if (count > mostHitCount) {
            mostHitCount = count;
            mostHitSection = parseInt(section);
        }
    }
    return {
        ppd: Math.round(ppd * 100) / 100,
        ppr: Math.round(ppr * 100) / 100,
        hitRate: Math.round(hitRate * 10) / 10,
        mostHitSection,
        mostHitCount
    };
};
// ============================================
// Target Practice
// ============================================
/** Available target number pools */ const TARGET_NUMBERS = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    25
];
const createTargetPracticeState = (totalTargets = 10)=>({
        currentTarget: pickRandomTarget(),
        targetsCompleted: 0,
        targetsTotal: totalTargets,
        hits: [],
        totalDarts: 0,
        correctHits: 0,
        perfectHits: 0,
        misses: 0,
        totalPoints: 0,
        currentRoundDarts: [],
        currentRoundHits: 0,
        sessionFinished: false,
        targetHistory: []
    });
function pickRandomTarget(exclude) {
    const available = exclude ? TARGET_NUMBERS.filter((n)=>n !== exclude) : TARGET_NUMBERS;
    return available[Math.floor(Math.random() * available.length)];
}
const processTargetPracticeHit = (state, segment, hitId)=>{
    if (state.sessionFinished) return state;
    if (hitId && state.lastProcessedHit === hitId) return state;
    const value = calculateSegmentValue(segment);
    const hit = {
        segment,
        value,
        timestamp: Date.now()
    };
    const section = segment.Section;
    const newState = {
        ...state
    };
    newState.hits = [
        ...state.hits,
        hit
    ];
    newState.totalDarts++;
    newState.totalPoints += value;
    newState.lastProcessedHit = hitId;
    newState.currentRoundDarts = [
        ...state.currentRoundDarts,
        hit
    ];
    // Check if the dart hit the correct target
    const isCorrectSection = section === state.currentTarget;
    const isMiss = segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Other || section === 0;
    if (isMiss) {
        newState.misses++;
    } else if (isCorrectSection) {
        newState.correctHits++;
        newState.currentRoundHits++;
        // Perfect hit: Triple for numbers 1-20, Double Bull for 25
        if (state.currentTarget === 25 && segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double) {
            newState.perfectHits++;
        } else if (state.currentTarget !== 25 && segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Triple) {
            newState.perfectHits++;
        }
    }
    // After 3 darts, move to next target
    if (newState.currentRoundDarts.length >= 3) {
        newState.targetHistory = [
            ...state.targetHistory,
            {
                target: state.currentTarget,
                darts: newState.currentRoundDarts,
                correctHits: newState.currentRoundHits
            }
        ];
        newState.targetsCompleted++;
        if (newState.targetsCompleted >= state.targetsTotal) {
            newState.sessionFinished = true;
        } else {
            newState.currentTarget = pickRandomTarget(state.currentTarget);
            newState.currentRoundDarts = [];
            newState.currentRoundHits = 0;
        }
    }
    return newState;
};
const getTargetPracticeStats = (state)=>{
    const accuracy = state.totalDarts > 0 ? state.correctHits / state.totalDarts * 100 : 0;
    const perfectRate = state.totalDarts > 0 ? state.perfectHits / state.totalDarts * 100 : 0;
    return {
        accuracy: Math.round(accuracy * 10) / 10,
        perfectRate: Math.round(perfectRate * 10) / 10,
        correctHits: state.correctHits,
        perfectHits: state.perfectHits,
        totalDarts: state.totalDarts,
        targetsCompleted: state.targetsCompleted
    };
};
const CHECKOUT_SCORES = [
    170,
    167,
    164,
    161,
    160,
    158,
    157,
    156,
    155,
    154,
    153,
    152,
    151,
    150,
    110,
    107,
    104,
    101,
    100,
    90,
    80,
    70,
    60,
    50,
    40
];
const createCheckoutPracticeState = (startingScore = 101, doubleOut = true)=>({
        currentScore: startingScore,
        originalScore: startingScore,
        currentDarts: [],
        attempts: [],
        totalAttempts: 0,
        successfulCheckouts: 0,
        totalDartsThrown: 0,
        doubleOut,
        sessionFinished: false,
        suggestion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCheckoutSuggestion"])(startingScore)
    });
const processCheckoutHit = (state, segment, hitId)=>{
    if (state.sessionFinished) return state;
    if (hitId && state.lastProcessedHit === hitId) return state;
    const value = calculateSegmentValue(segment);
    const hit = {
        segment,
        value,
        timestamp: Date.now()
    };
    const isDouble = segment.Type === __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$boardinfo$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentType"].Double;
    const newState = {
        ...state
    };
    newState.lastProcessedHit = hitId;
    newState.totalDartsThrown++;
    newState.currentDarts = [
        ...state.currentDarts,
        hit
    ];
    const newScore = state.currentScore - value;
    // Check for bust
    if (newScore < 0 || newScore === 1 || state.doubleOut && newScore === 0 && !isDouble) {
        // Bust — end this attempt as a failure
        const attempt = {
            startingScore: state.originalScore,
            darts: newState.currentDarts,
            success: false,
            dartsUsed: newState.currentDarts.length
        };
        newState.attempts = [
            ...state.attempts,
            attempt
        ];
        newState.totalAttempts++;
        // Reset for next attempt
        newState.currentScore = state.originalScore;
        newState.currentDarts = [];
        newState.suggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCheckoutSuggestion"])(state.originalScore);
        return newState;
    }
    // Valid hit
    newState.currentScore = newScore;
    newState.suggestion = newScore > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCheckoutSuggestion"])(newScore) : null;
    // Check for successful checkout
    if (newScore === 0) {
        const attempt = {
            startingScore: state.originalScore,
            darts: newState.currentDarts,
            success: true,
            dartsUsed: newState.currentDarts.length
        };
        newState.attempts = [
            ...state.attempts,
            attempt
        ];
        newState.totalAttempts++;
        newState.successfulCheckouts++;
        // Reset for next attempt
        newState.currentScore = state.originalScore;
        newState.currentDarts = [];
        newState.suggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCheckoutSuggestion"])(state.originalScore);
        return newState;
    }
    // After 3 darts without checkout, end attempt
    if (newState.currentDarts.length >= 3) {
        const attempt = {
            startingScore: state.originalScore,
            darts: newState.currentDarts,
            success: false,
            dartsUsed: 3
        };
        newState.attempts = [
            ...state.attempts,
            attempt
        ];
        newState.totalAttempts++;
        // Reset for next attempt
        newState.currentScore = state.originalScore;
        newState.currentDarts = [];
        newState.suggestion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$zeroone$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCheckoutSuggestion"])(state.originalScore);
    }
    return newState;
};
const getCheckoutPracticeStats = (state)=>{
    const successRate = state.totalAttempts > 0 ? state.successfulCheckouts / state.totalAttempts * 100 : 0;
    const avgDartsOnSuccess = state.successfulCheckouts > 0 ? state.attempts.filter((a)=>a.success).reduce((sum, a)=>sum + a.dartsUsed, 0) / state.successfulCheckouts : 0;
    return {
        successRate: Math.round(successRate * 10) / 10,
        avgDartsOnSuccess: Math.round(avgDartsOnSuccess * 100) / 100,
        totalAttempts: state.totalAttempts,
        successfulCheckouts: state.successfulCheckouts
    };
};
const getTargetDisplayName = (section)=>{
    if (section === 25) return "BULL";
    return section.toString();
};
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
   * Granboard 3s uses a different protocol - we need to disable LED control for now
   * @param segments Array of segment numbers to light up (e.g., [15, 16, 17, 18, 19, 20, 25] for Cricket)
   */ async setLEDs(segments) {
        if (!this.writeCharacteristic) {
            console.warn("❌ LED control not available - no write characteristic found");
            return;
        }
        // TEMPORARILY DISABLED: The Granboard 3s protocol for LED control is different
        // The current implementation causes incorrect LED behavior
        // TODO: Research correct Granboard 3s LED protocol
        console.log("⚠️ LED control temporarily disabled for Granboard 3s");
        console.log("Target segments:", segments);
        return;
    /* ORIGINAL CODE - DISABLED
    try {
      console.log("🔦 Attempting to set LEDs for segments:", segments);

      // Create a 32-bit bitmap for segments 1-25
      let bitmap = 0;
      segments.forEach(segmentNum => {
        if (segmentNum >= 1 && segmentNum <= 25) {
          bitmap |= (1 << (segmentNum - 1));
        }
      });

      // Convert bitmap to bytes (little endian, 4 bytes)
      const command = new Uint8Array([
        0x50, // Command byte 'P' for Pattern/LED control
        (bitmap >> 0) & 0xFF,
        (bitmap >> 8) & 0xFF,
        (bitmap >> 16) & 0xFF,
        (bitmap >> 24) & 0xFF
      ]);

      console.log("📤 Sending LED command:", Array.from(command).map(b => `0x${b.toString(16).padStart(2, '0')}`).join(' '));

      await this.writeCharacteristic.writeValue(command);
      console.log("✅ LED command sent successfully");
    } catch (error) {
      console.error("❌ Failed to set LEDs:", error);
    }
    */ }
    /**
   * Turn off all LEDs
   */ async clearLEDs() {
        if (!this.writeCharacteristic) {
            return;
        }
        // TEMPORARILY DISABLED: Same as setLEDs
        console.log("⚠️ LED clear temporarily disabled for Granboard 3s");
        return;
    /* ORIGINAL CODE - DISABLED
    try {
      console.log("🔦 Clearing all LEDs");

      // Command to clear all LEDs - send bitmap of 0
      const command = new Uint8Array([0x50, 0x00, 0x00, 0x00, 0x00]);

      await this.writeCharacteristic.writeValue(command);
      console.log("✅ LEDs cleared");
    } catch (error) {
      console.error("❌ Failed to clear LEDs:", error);
    }
    */ }
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
"[project]/app/training/free-throw/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FreeThrowPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-intl@4.4.0_next@16.0.1_@babel+core@7.28.5_@playwright+test@1.56.1_react-dom@19.2.0_332c96e6974fe477f66b6a054183b0d5/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$training$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/training.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useGranboardConnection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/cricket/game/hooks/useGranboardConnection.ts [app-ssr] (ecmascript)");
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
function FreeThrowPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$intl$40$4$2e$4$2e$0_next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_332c96e6974fe477f66b6a054183b0d5$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])();
    const { openDialog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$contexts$2f$SettingsContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSettings"])();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$training$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFreeThrowState"])());
    const onSegmentHit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((segment)=>{
        const hitId = `${Date.now()}-${Math.random()}`;
        setGameState((prev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$training$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processFreeThrowHit"])(prev, segment, hitId));
    }, []);
    const { connectionState, connectToBoard } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cricket$2f$game$2f$hooks$2f$useGranboardConnection$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGranboardConnection"])(onSegmentHit);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$training$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFreeThrowStats"])(gameState);
    const lastHits = gameState.hits.slice(-10).reverse();
    const handleReset = ()=>{
        setGameState((0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$training$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFreeThrowState"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-theme-primary flex flex-col p-4 gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-testid": "back-button",
                                onClick: ()=>router.push("/training"),
                                className: "px-3 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faArrowLeft"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/training/free-throw/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("common.back")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-theme-primary tracking-wider",
                                children: t("training.freeThrow.title")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "px-4 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-600 transition-all text-sm font-medium flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faRotateRight"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/training/free-throw/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("training.reset")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-testid": "settings-button",
                                onClick: ()=>openDialog(),
                                className: "px-4 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faGear"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/training/free-throw/page.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t("cricket.game.settings")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            connectionState === "connected" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-sm flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$react$2d$fontawesome$40$3$2e$1$2e$0_$40$fortawesome$2b$fontawesome$2d$svg$2d$core$40$7$2e$1$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$fortawesome$2b$free$2d$solid$2d$svg$2d$icons$40$7$2e$1$2e$0$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faCheck"]
                                    }, void 0, false, {
                                        fileName: "[project]/app/training/free-throw/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    t("cricket.game.connected")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-testid": "connect-button",
                                onClick: connectToBoard,
                                disabled: connectionState === "connecting",
                                className: "px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 text-sm font-medium disabled:bg-theme-interactive transition-all",
                                children: connectionState === "connecting" ? t("cricket.game.connecting") : connectionState === "error" ? t("cricket.game.errorRetry") : t("cricket.game.connectGranboard")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/training/free-throw/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-xl p-4 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-orange-500",
                                children: gameState.totalDarts
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted uppercase",
                                children: t("training.freeThrow.darts")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-xl p-4 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-accent",
                                children: gameState.totalPoints
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted uppercase",
                                children: t("training.freeThrow.totalPoints")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-xl p-4 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-purple-500",
                                children: stats.ppd
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted uppercase",
                                children: "PPD"
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-xl p-4 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-3xl font-bold text-green-500",
                                children: [
                                    stats.hitRate,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted uppercase",
                                children: t("training.freeThrow.hitRate")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/training/free-throw/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 md:grid-cols-6 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-lg p-3 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-theme-primary",
                                children: gameState.singles
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted",
                                children: t("training.freeThrow.singles")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-lg p-3 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-blue-500",
                                children: gameState.doubles
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted",
                                children: t("training.freeThrow.doubles")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-lg p-3 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-red-500",
                                children: gameState.triples
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted",
                                children: t("training.freeThrow.triples")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-lg p-3 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-yellow-500",
                                children: gameState.bullseyes
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted",
                                children: "Bull"
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-lg p-3 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-yellow-600",
                                children: gameState.doubleBulls
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted",
                                children: "D.Bull"
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-theme-card rounded-lg p-3 border border-theme-card text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-bold text-gray-500",
                                children: gameState.misses
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-theme-muted",
                                children: t("training.freeThrow.misses")
                            }, void 0, false, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/training/free-throw/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-theme-card rounded-xl p-4 border border-theme-card flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-theme-primary mb-3",
                        children: t("training.freeThrow.recentHits")
                    }, void 0, false, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    lastHits.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-theme-muted text-center py-8",
                        children: t("training.freeThrow.waitingForDarts")
                    }, void 0, false, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: lastHits.map((hit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-3 py-2 rounded-lg text-sm font-bold ${hit.value === 0 ? "bg-gray-200 dark:bg-gray-700 text-gray-500" : hit.segment.Type === 3 ? "bg-red-100 dark:bg-red-900/40 text-red-600" : hit.segment.Type === 2 ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600" : "bg-theme-secondary text-theme-primary"}`,
                                children: [
                                    hit.segment.ShortName,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs opacity-70",
                                        children: [
                                            "(",
                                            hit.value,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/training/free-throw/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/training/free-throw/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/training/free-throw/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            stats.mostHitSection > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-theme-card rounded-xl p-4 border border-theme-card text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-theme-muted text-sm",
                        children: [
                            t("training.freeThrow.mostHit"),
                            ":",
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl font-bold text-accent",
                        children: stats.mostHitSection === 25 ? "BULL" : stats.mostHitSection
                    }, void 0, false, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_$40$babel$2b$core$40$7$2e$28$2e$5_$40$playwright$2b$test$40$1$2e$56$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-theme-muted text-sm",
                        children: [
                            " ",
                            "(",
                            stats.mostHitCount,
                            "x)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/training/free-throw/page.tsx",
                        lineNumber: 220,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/training/free-throw/page.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/training/free-throw/page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__159805b9._.js.map