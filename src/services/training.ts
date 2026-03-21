import { Segment, SegmentType, SegmentSection } from "./boardinfo";
import { getCheckoutSuggestion, calculateDartValue } from "./zeroone";

// Training mode types
export enum TrainingMode {
  FreeThrow = "free-throw",
  TargetPractice = "target-practice",
  CheckoutPractice = "checkout",
}

// ============================================
// Shared types
// ============================================

export interface DartHit {
  segment: Segment;
  value: number;
  timestamp: number;
}

// ============================================
// Free Throw
// ============================================

export interface FreeThrowState {
  hits: DartHit[];
  totalDarts: number;
  totalPoints: number;
  singles: number;
  doubles: number;
  triples: number;
  misses: number;
  bullseyes: number; // single bull
  doubleBulls: number;
  // Per-section hit counts for grouping stats
  sectionHits: Record<number, number>;
  // Current round tracking (3 darts per round)
  currentRoundDarts: DartHit[];
  roundsCompleted: number;
  lastProcessedHit?: string;
}

export const createFreeThrowState = (): FreeThrowState => ({
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
  roundsCompleted: 0,
});

export const processFreeThrowHit = (
  state: FreeThrowState,
  segment: Segment,
  hitId?: string
): FreeThrowState => {
  if (hitId && state.lastProcessedHit === hitId) {
    return state;
  }

  const value = calculateDartValue(segment);
  const hit: DartHit = { segment, value, timestamp: Date.now() };
  const newState = { ...state };

  newState.hits = [...state.hits, hit];
  newState.totalDarts++;
  newState.totalPoints += value;
  newState.lastProcessedHit = hitId;

  // Track segment types
  const section = segment.Section as number;
  if (segment.Type === SegmentType.Other || section === 0) {
    newState.misses++;
  } else if (section === SegmentSection.BULL) {
    if (segment.Type === SegmentType.Double) {
      newState.doubleBulls++;
      newState.doubles++;
    } else {
      newState.bullseyes++;
      newState.singles++;
    }
  } else {
    switch (segment.Type) {
      case SegmentType.Single:
        newState.singles++;
        break;
      case SegmentType.Double:
        newState.doubles++;
        break;
      case SegmentType.Triple:
        newState.triples++;
        break;
    }
  }

  // Track per-section hits
  if (section > 0 && segment.Type !== SegmentType.Other) {
    newState.sectionHits = { ...state.sectionHits };
    newState.sectionHits[section] = (newState.sectionHits[section] || 0) + 1;
  }

  // Round tracking (3 darts per round)
  newState.currentRoundDarts = [...state.currentRoundDarts, hit];
  if (newState.currentRoundDarts.length >= 3) {
    newState.roundsCompleted++;
    newState.currentRoundDarts = [];
  }

  return newState;
};

export const getFreeThrowStats = (state: FreeThrowState) => {
  const ppd =
    state.totalDarts > 0 ? state.totalPoints / state.totalDarts : 0;
  const ppr =
    state.roundsCompleted > 0
      ? state.totalPoints / state.roundsCompleted
      : state.totalDarts > 0
      ? state.totalPoints // incomplete round
      : 0;
  const hitRate =
    state.totalDarts > 0
      ? ((state.totalDarts - state.misses) / state.totalDarts) * 100
      : 0;

  // Most hit section
  let mostHitSection = 0;
  let mostHitCount = 0;
  for (const [section, count] of Object.entries(state.sectionHits)) {
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
    mostHitCount,
  };
};

// ============================================
// Target Practice
// ============================================

/** Available target number pools */
const TARGET_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25];

export interface TargetPracticeState {
  currentTarget: number; // The section the player should aim for (1-20, 25 for bull)
  targetsCompleted: number;
  targetsTotal: number; // How many targets in this session (e.g., 10)
  hits: DartHit[];
  totalDarts: number;
  correctHits: number; // Hit the correct section (any ring)
  perfectHits: number; // Hit the correct section with triple (or double bull for 25)
  misses: number;
  totalPoints: number;
  // Current round (3 darts per target)
  currentRoundDarts: DartHit[];
  currentRoundHits: number; // Correct hits in current round
  sessionFinished: boolean;
  targetHistory: { target: number; darts: DartHit[]; correctHits: number }[];
  lastProcessedHit?: string;
}

export const createTargetPracticeState = (
  totalTargets: number = 10
): TargetPracticeState => ({
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
  targetHistory: [],
});

function pickRandomTarget(exclude?: number): number {
  const available = exclude
    ? TARGET_NUMBERS.filter((n) => n !== exclude)
    : TARGET_NUMBERS;
  return available[Math.floor(Math.random() * available.length)];
}

export const processTargetPracticeHit = (
  state: TargetPracticeState,
  segment: Segment,
  hitId?: string
): TargetPracticeState => {
  if (state.sessionFinished) return state;
  if (hitId && state.lastProcessedHit === hitId) return state;

  const value = calculateDartValue(segment);
  const hit: DartHit = { segment, value, timestamp: Date.now() };
  const section = segment.Section as number;
  const newState = { ...state };

  newState.hits = [...state.hits, hit];
  newState.totalDarts++;
  newState.totalPoints += value;
  newState.lastProcessedHit = hitId;
  newState.currentRoundDarts = [...state.currentRoundDarts, hit];

  // Check if the dart hit the correct target
  const isCorrectSection = section === state.currentTarget;
  const isMiss = segment.Type === SegmentType.Other || section === 0;

  if (isMiss) {
    newState.misses++;
  } else if (isCorrectSection) {
    newState.correctHits++;
    newState.currentRoundHits++;

    // Perfect hit: Triple for numbers 1-20, Double Bull for 25
    if (state.currentTarget === 25 && segment.Type === SegmentType.Double) {
      newState.perfectHits++;
    } else if (state.currentTarget !== 25 && segment.Type === SegmentType.Triple) {
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
        correctHits: newState.currentRoundHits,
      },
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

export const getTargetPracticeStats = (state: TargetPracticeState) => {
  const accuracy =
    state.totalDarts > 0
      ? (state.correctHits / state.totalDarts) * 100
      : 0;
  const perfectRate =
    state.totalDarts > 0
      ? (state.perfectHits / state.totalDarts) * 100
      : 0;

  return {
    accuracy: Math.round(accuracy * 10) / 10,
    perfectRate: Math.round(perfectRate * 10) / 10,
    correctHits: state.correctHits,
    perfectHits: state.perfectHits,
    totalDarts: state.totalDarts,
    targetsCompleted: state.targetsCompleted,
  };
};

// ============================================
// Checkout Practice
// ============================================

/** Common checkout starting scores for practice */
export const CHECKOUT_SCORES = [
  170, 167, 164, 161, 160, 158, 157, 156, 155, 154, 153, 152, 151, 150,
  110, 107, 104, 101, 100,
  90, 80, 70, 60, 50, 40,
] as const;

export interface CheckoutAttempt {
  startingScore: number;
  darts: DartHit[];
  success: boolean; // Reached exactly 0
  dartsUsed: number;
}

export interface CheckoutPracticeState {
  currentScore: number; // Starting/remaining score for current attempt
  originalScore: number; // The checkout score we're practicing
  currentDarts: DartHit[]; // Darts thrown in current attempt
  attempts: CheckoutAttempt[];
  totalAttempts: number;
  successfulCheckouts: number;
  totalDartsThrown: number;
  doubleOut: boolean; // Whether double out is required
  sessionFinished: boolean;
  suggestion: string | null; // Checkout suggestion for current score
  lastProcessedHit?: string;
}

export const createCheckoutPracticeState = (
  startingScore: number = 101,
  doubleOut: boolean = true
): CheckoutPracticeState => ({
  currentScore: startingScore,
  originalScore: startingScore,
  currentDarts: [],
  attempts: [],
  totalAttempts: 0,
  successfulCheckouts: 0,
  totalDartsThrown: 0,
  doubleOut,
  sessionFinished: false,
  suggestion: getCheckoutSuggestion(startingScore),
});

export const processCheckoutHit = (
  state: CheckoutPracticeState,
  segment: Segment,
  hitId?: string
): CheckoutPracticeState => {
  if (state.sessionFinished) return state;
  if (hitId && state.lastProcessedHit === hitId) return state;

  const value = calculateDartValue(segment);
  const hit: DartHit = { segment, value, timestamp: Date.now() };
  const isDouble = segment.Type === SegmentType.Double;
  const newState = { ...state };

  newState.lastProcessedHit = hitId;
  newState.totalDartsThrown++;
  newState.currentDarts = [...state.currentDarts, hit];

  const newScore = state.currentScore - value;

  // Check for bust
  if (
    newScore < 0 ||
    newScore === 1 ||
    (state.doubleOut && newScore === 0 && !isDouble)
  ) {
    // Bust — end this attempt as a failure
    const attempt: CheckoutAttempt = {
      startingScore: state.originalScore,
      darts: newState.currentDarts,
      success: false,
      dartsUsed: newState.currentDarts.length,
    };
    newState.attempts = [...state.attempts, attempt];
    newState.totalAttempts++;
    // Reset for next attempt
    newState.currentScore = state.originalScore;
    newState.currentDarts = [];
    newState.suggestion = getCheckoutSuggestion(state.originalScore);
    return newState;
  }

  // Valid hit
  newState.currentScore = newScore;
  newState.suggestion = newScore > 0 ? getCheckoutSuggestion(newScore) : null;

  // Check for successful checkout
  if (newScore === 0) {
    const attempt: CheckoutAttempt = {
      startingScore: state.originalScore,
      darts: newState.currentDarts,
      success: true,
      dartsUsed: newState.currentDarts.length,
    };
    newState.attempts = [...state.attempts, attempt];
    newState.totalAttempts++;
    newState.successfulCheckouts++;
    // Reset for next attempt
    newState.currentScore = state.originalScore;
    newState.currentDarts = [];
    newState.suggestion = getCheckoutSuggestion(state.originalScore);
    return newState;
  }

  // After 3 darts without checkout, end attempt
  if (newState.currentDarts.length >= 3) {
    const attempt: CheckoutAttempt = {
      startingScore: state.originalScore,
      darts: newState.currentDarts,
      success: false,
      dartsUsed: 3,
    };
    newState.attempts = [...state.attempts, attempt];
    newState.totalAttempts++;
    // Reset for next attempt
    newState.currentScore = state.originalScore;
    newState.currentDarts = [];
    newState.suggestion = getCheckoutSuggestion(state.originalScore);
  }

  return newState;
};

export const getCheckoutPracticeStats = (state: CheckoutPracticeState) => {
  const successRate =
    state.totalAttempts > 0
      ? (state.successfulCheckouts / state.totalAttempts) * 100
      : 0;

  const avgDartsOnSuccess =
    state.successfulCheckouts > 0
      ? state.attempts
          .filter((a) => a.success)
          .reduce((sum, a) => sum + a.dartsUsed, 0) / state.successfulCheckouts
      : 0;

  return {
    successRate: Math.round(successRate * 10) / 10,
    avgDartsOnSuccess: Math.round(avgDartsOnSuccess * 100) / 100,
    totalAttempts: state.totalAttempts,
    successfulCheckouts: state.successfulCheckouts,
  };
};

/** Get a display name for a target section number */
export const getTargetDisplayName = (section: number): string => {
  if (section === 25) return "BULL";
  return section.toString();
};
