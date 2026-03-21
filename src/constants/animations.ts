/**
 * Animation timing constants (in milliseconds)
 */
export const ANIMATION_TIMINGS = {
  /** Delay before showing turn animations after hit animation */
  HIT_ANIMATION_DELAY: 400,

  /** Duration for hit-sequence animation */
  HIT_SEQUENCE_DURATION: 1800,

  /** Default animation duration */
  DEFAULT_DURATION: 1500,

  /** Delay between whistle sounds */
  WHISTLE_DELAY: 300,

  /** Delay for state checks after hit */
  STATE_CHECK_DELAY: 80,
} as const;
