import { SegmentSection, SegmentType, Segment } from "@/services/boardinfo";
import { CRICKET_NUMBERS, CricketNumber } from "@/services/cricket";
export { CRICKET_NUMBERS } from "@/services/cricket";
export type { CricketNumber } from "@/services/cricket";

/**
 * Segment section constants
 */
export const SEGMENT_SECTIONS = {
  MISS: SegmentSection.Other,
  BULL: 25,
} as const;

/**
 * Segment type constants
 */
export const SEGMENT_TYPES = {
  SINGLE: SegmentType.Single,
  DOUBLE: SegmentType.Double,
  TRIPLE: SegmentType.Triple,
  OTHER: SegmentType.Other,
} as const;

/**
 * Utility functions for segment type checking
 */
export const isMiss = (segment: Segment): boolean =>
  segment.Section === SEGMENT_SECTIONS.MISS;

export const isBull = (segment: Segment): boolean =>
  segment.Section === SEGMENT_SECTIONS.BULL;

export const isDoubleBull = (segment: Segment): boolean =>
  isBull(segment) && segment.Type === SEGMENT_TYPES.DOUBLE;

export const isSingleBull = (segment: Segment): boolean =>
  isBull(segment) && segment.Type === SEGMENT_TYPES.SINGLE;

export const isCricketNumber = (section: number): boolean =>
  CRICKET_NUMBERS.includes(section as CricketNumber);

export const isDouble = (segment: Segment): boolean =>
  segment.Type === SEGMENT_TYPES.DOUBLE;

export const isTriple = (segment: Segment): boolean =>
  segment.Type === SEGMENT_TYPES.TRIPLE;

export const isSingle = (segment: Segment): boolean =>
  segment.Type === SEGMENT_TYPES.SINGLE;
