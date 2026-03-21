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

function createAnimationStore() {
  let currentAnimation = $state<Animation | null>(null);
  let animationKey = $state(0);
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  function playAnimation(type: AnimationType, data?: HitData[], duration: number = 1500) {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    animationKey++;
    currentAnimation = { type, data, duration };
    timeoutId = setTimeout(() => {
      currentAnimation = null;
      timeoutId = null;
    }, duration);
  }

  function clear() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
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
