import { settings } from '@/stores/settings.svelte';
import { SOUND_PATHS } from '@/constants/sounds';
import { ANIMATION_TIMINGS } from '@/constants/animations';

type SoundType =
  | 'dart-miss'
  | 'game-over'
  | 'bull'
  | 'double-bull'
  | 'victory'
  | 'whistle-single'
  | 'whistle-double'
  | 'whistle-triple'
  | 'goat'
  | 'horse';

// Sound registry for managing audio elements
type SoundRegistry = {
  [K in SoundType]?: HTMLAudioElement;
};

function createSounds() {
  let audioContext: AudioContext | null = null;
  const soundRegistry: SoundRegistry = {};

  // Helper to get or create audio element
  function getOrCreateAudio(type: SoundType, path: string): HTMLAudioElement {
    if (!soundRegistry[type]) {
      const audio = new Audio(path);
      audio.preload = 'auto';
      soundRegistry[type] = audio;
    }
    return soundRegistry[type]!;
  }

  /** Call once on mount to set up AudioContext initialisation */
  function init() {
    const initAudio = () => {
      if (!audioContext) {
        audioContext = new (window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
    };

    document.addEventListener('click', initAudio, { once: true });
    return () => document.removeEventListener('click', initAudio);
  }

  function playBeep(
    frequency: number,
    duration: number,
    baseVolume: number = 0.3,
    waveType: OscillatorType = 'sine',
  ) {
    if (!settings.soundEnabled || !audioContext) return;

    const ctx = audioContext;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = waveType;

    filter.type = 'lowpass';
    filter.frequency.value = frequency * 2;
    filter.Q.value = 1;

    const adjustedVolume = baseVolume * settings.volume;
    const now = ctx.currentTime;

    // Attack
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(adjustedVolume, now + 0.01);

    // Decay & Sustain
    gainNode.gain.linearRampToValueAtTime(adjustedVolume * 0.7, now + 0.05);

    // Release
    gainNode.gain.setValueAtTime(adjustedVolume * 0.7, now + duration - 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + duration);

    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  function playChord(
    frequencies: number[],
    duration: number,
    baseVolume: number = 0.2,
  ) {
    if (!settings.soundEnabled || !audioContext) return;

    frequencies.forEach((freq) => {
      playBeep(freq, duration, baseVolume / frequencies.length);
    });
  }

  // Play whistle sound (creates new instance each time for overlapping sounds)
  function playSifflet() {
    if (!settings.soundEnabled) return;

    const audio = new Audio(SOUND_PATHS.SIFFLET);
    audio.volume = settings.volume;
    audio.play().catch(() => {
      // Ignore errors if audio can't play
    });
  }

  function playSound(type: SoundType) {
    if (!settings.soundEnabled) return;

    // Handle special whistle cases (multiple sounds)
    if (type === 'whistle-single') {
      playSifflet();
      return;
    }

    if (type === 'whistle-double') {
      playSifflet();
      setTimeout(() => playSifflet(), ANIMATION_TIMINGS.WHISTLE_DELAY);
      return;
    }

    if (type === 'whistle-triple') {
      playSifflet();
      setTimeout(() => playSifflet(), ANIMATION_TIMINGS.WHISTLE_DELAY);
      setTimeout(() => playSifflet(), ANIMATION_TIMINGS.WHISTLE_DELAY * 2);
      return;
    }

    // Map sound types to their file paths
    const soundPathMap: Record<string, string> = {
      'dart-miss': SOUND_PATHS.DART_MISS,
      'bull': SOUND_PATHS.BULL,
      'double-bull': SOUND_PATHS.DOUBLE_BULL,
      'game-over': SOUND_PATHS.GAME_OVER,
      'victory': SOUND_PATHS.VICTORY,
      'goat': SOUND_PATHS.GOAT,
      'horse': SOUND_PATHS.HORSE,
    };

    const soundPath = soundPathMap[type];
    if (!soundPath) return;

    // Get or create audio element and play
    const audio = getOrCreateAudio(type, soundPath);
    audio.volume = settings.volume;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Ignore errors if audio can't play
    });
  }

  return {
    init,
    playSound,
    playBeep,
    playChord,
  };
}

export { createSounds };
export type { SoundType };
