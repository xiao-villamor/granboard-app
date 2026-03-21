<script lang="ts">
  import Fa from 'svelte-fa';
  import { faVolumeHigh, faVolumeLow, faVolumeOff, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
    | 'whistle-triple';

  interface SoundInfo {
    id: SoundType;
    name: string;
    desc: string;
    category: string;
  }

  const soundsList: SoundInfo[] = [
    { id: 'dart-miss', name: 'Dart Miss', desc: 'Played when a dart misses the board', category: 'Gameplay' },
    { id: 'bull', name: 'Bull', desc: 'Played when a dart hits the bull', category: 'Achievements' },
    { id: 'double-bull', name: 'Double Bull', desc: 'Played when a dart hits the double bull', category: 'Achievements' },
    { id: 'whistle-single', name: 'Whistle \u2014 Single', desc: 'Played on a single hit', category: 'Achievements' },
    { id: 'whistle-double', name: 'Whistle \u2014 Double', desc: 'Played on a double hit', category: 'Achievements' },
    { id: 'whistle-triple', name: 'Whistle \u2014 Triple', desc: 'Played on a triple hit', category: 'Achievements' },
    { id: 'victory', name: 'Victory', desc: 'Played when a player wins', category: 'Achievements' },
    { id: 'game-over', name: 'Game Over', desc: 'Played when the game ends', category: 'Events' },
  ];

  let playing = $state<SoundType | null>(null);

  // Sound registry for caching audio elements
  const soundRegistry: Partial<Record<SoundType, HTMLAudioElement>> = {};

  function getOrCreateAudio(type: SoundType, path: string): HTMLAudioElement {
    if (!soundRegistry[type]) {
      const audio = new Audio(path);
      audio.preload = 'auto';
      soundRegistry[type] = audio;
    }
    return soundRegistry[type]!;
  }

  function playSifflet() {
    if (!settings.soundEnabled) return;
    const audio = new Audio(SOUND_PATHS.SIFFLET);
    audio.volume = settings.volume;
    audio.play().catch(() => {});
  }

  function playSound(type: SoundType) {
    if (!settings.soundEnabled) return;

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

    const soundPathMap: Record<string, string> = {
      'dart-miss': SOUND_PATHS.DART_MISS,
      'bull': SOUND_PATHS.BULL,
      'double-bull': SOUND_PATHS.DOUBLE_BULL,
      'game-over': SOUND_PATHS.GAME_OVER,
      'victory': SOUND_PATHS.VICTORY,
    };

    const soundPath = soundPathMap[type];
    if (!soundPath) return;

    const audio = getOrCreateAudio(type, soundPath);
    audio.volume = settings.volume;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  function handlePlaySound(soundId: SoundType) {
    playing = soundId;
    playSound(soundId);
    setTimeout(() => { playing = null; }, 1000);
  }

  function handlePlayAll() {
    soundsList.forEach((sound, index) => {
      setTimeout(() => handlePlaySound(sound.id), index * 800);
    });
  }

  // Group sounds by category
  let groupedSounds = $derived(
    soundsList.reduce((acc, sound) => {
      if (!acc[sound.category]) {
        acc[sound.category] = [];
      }
      acc[sound.category].push(sound);
      return acc;
    }, {} as Record<string, SoundInfo[]>)
  );

  let volumeIcon = $derived(
    !settings.soundEnabled ? faVolumeOff
    : settings.volume < 0.3 ? faVolumeLow
    : faVolumeHigh
  );

  let sliderBackground = $derived(
    settings.soundEnabled
      ? `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${settings.volume * 100}%, #4b5563 ${settings.volume * 100}%, #4b5563 100%)`
      : undefined
  );
</script>

<main class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <button
        onclick={() => { window.location.href = '/'; }}
        class="mb-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center gap-2"
      >
        <Fa icon={faArrowLeft} /> Back
      </button>
      <h1 class="text-5xl font-bold text-white mb-2">Sound Debug</h1>
      <p class="text-purple-200">
        Test all game sounds
      </p>
    </div>

    <!-- Volume Controls -->
    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
      <h2 class="text-2xl font-bold text-white mb-4">
        Audio Controls
      </h2>

      <div class="space-y-4">
        <!-- Sound Toggle -->
        <div class="flex items-center justify-between">
          <span class="text-white font-medium">Sound Enabled</span>
          <button
            onclick={() => settings.toggleSound()}
            class="relative w-16 h-8 rounded-full transition-colors {settings.soundEnabled ? 'bg-green-500' : 'bg-gray-600'}"
          >
            <div
              class="absolute top-1 w-6 h-6 bg-white rounded-full transition-transform {settings.soundEnabled ? 'translate-x-9' : 'translate-x-1'}"
            ></div>
          </button>
        </div>

        <!-- Volume Slider -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-white font-medium flex items-center gap-2">
              <Fa icon={volumeIcon} />
              Volume
            </span>
            <span class="text-purple-200">
              {Math.round(settings.volume * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={settings.volume}
            oninput={(e) => settings.setVolume(parseFloat((e.currentTarget as HTMLInputElement).value))}
            disabled={!settings.soundEnabled}
            class="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            style="background: {sliderBackground}"
          />
        </div>
      </div>
    </div>

    <!-- Sounds Grid -->
    {#each Object.entries(groupedSounds) as [category, sounds]}
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-white mb-4">{category}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each sounds as sound}
            <button
              onclick={() => handlePlaySound(sound.id)}
              disabled={!settings.soundEnabled}
              class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed {playing === sound.id ? 'ring-4 ring-purple-400 scale-105' : ''}"
            >
              <div class="flex items-start justify-between mb-2">
                <h3 class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {sound.name}
                </h3>
                {#if playing === sound.id}
                  <span class="inline-flex items-center gap-2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full animate-pulse">
                    Playing
                  </span>
                {/if}
              </div>
              <p class="text-purple-200 text-sm">{sound.desc}</p>
              <div class="mt-3 text-xs text-purple-300 font-mono">
                {sound.id}
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/each}

    <!-- Play All Button -->
    <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <h2 class="text-2xl font-bold text-white mb-4">
        Sequential Test
      </h2>
      <button
        onclick={handlePlayAll}
        disabled={!settings.soundEnabled}
        class="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        Play All Sounds
      </button>
    </div>

    <!-- Info -->
    <div class="mt-8 text-center text-purple-300 text-sm">
      <p>Click a button to play the sound</p>
    </div>
  </div>
</main>
