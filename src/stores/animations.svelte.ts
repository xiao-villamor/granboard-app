export type AnimationType =
  | 'three-miss'
  | 'three-triple'
  | 'hit-sequence'
  | 'victory';

export interface HitData {
  Type: number;
  Section: number;
}

export interface Animation {
  type: AnimationType;
  duration?: number;
  data?: HitData[];
}

/** Maximum time any animation can stay on screen (safety net) */
const MAX_ANIMATION_DURATION = 3000;

function createAnimationStore() {
  let currentAnimation = $state<Animation | null>(null);
  let animationKey = $state(0);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let safetyTimeoutId: ReturnType<typeof setTimeout> | null = null;

  function playAnimation(type: AnimationType, data?: HitData[], duration: number = 1000) {
    // Clear any existing timeouts
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (safetyTimeoutId) {
      clearTimeout(safetyTimeoutId);
    }
    animationKey++;
    currentAnimation = { type, data, duration };
    timeoutId = setTimeout(() => {
      currentAnimation = null;
      timeoutId = null;
    }, duration);

    // Safety net: force-clear animation after MAX_ANIMATION_DURATION
    // in case the primary timeout doesn't fire (e.g. hot reload, tab suspend)
    safetyTimeoutId = setTimeout(() => {
      if (currentAnimation) {
        console.warn('[animations] Safety timeout cleared stuck animation');
        currentAnimation = null;
      }
      safetyTimeoutId = null;
    }, MAX_ANIMATION_DURATION);
  }

  function clear() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    if (safetyTimeoutId) {
      clearTimeout(safetyTimeoutId);
      safetyTimeoutId = null;
    }
    currentAnimation = null;
  }

  return {
    get currentAnimation() { return currentAnimation; },
    get animationKey() { return animationKey; },
    playAnimation,
    clear,
  };
}

export const animations = createAnimationStore();
