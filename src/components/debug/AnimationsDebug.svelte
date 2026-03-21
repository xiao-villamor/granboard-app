<script lang="ts">
  import Fa from 'svelte-fa';
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
  import { animations } from '@/stores/animations.svelte';
  import type { AnimationType, HitData } from '@/stores/animations.svelte';
  import AnimationOverlay from '@/components/shared/AnimationOverlay.svelte';

  interface AnimationInfo {
    id: AnimationType;
    name: string;
    desc: string;
    emoji: string;
    data?: HitData[];
  }

  const animationsList: AnimationInfo[] = [
    {
      id: 'three-miss',
      name: 'Three Miss',
      desc: 'Triggered when a player misses 3 times in a row',
      emoji: '\uD83D\uDC10',
    },
    {
      id: 'three-triple',
      name: 'Three Triple',
      desc: 'Triggered when a player hits 3 triples in a row',
      emoji: '\uD83E\uDD84',
    },
    {
      id: 'hit-sequence',
      name: 'Three Singles',
      desc: 'Triggered when a player hits 3 singles in a row',
      emoji: '\uD83C\uDFAF',
      data: [
        { Type: 1, Section: 20 },
        { Type: 1, Section: 20 },
        { Type: 1, Section: 20 },
      ],
    },
    {
      id: 'hit-sequence',
      name: 'Single / Double / Triple',
      desc: 'Triggered when a player hits a single, double, and triple in one turn',
      emoji: '\uD83C\uDFAF',
      data: [
        { Type: 1, Section: 20 },
        { Type: 2, Section: 20 },
        { Type: 3, Section: 20 },
      ],
    },
    {
      id: 'hit-sequence',
      name: 'Three Doubles',
      desc: 'Triggered when a player hits 3 doubles in a row',
      emoji: '\uD83C\uDFAF',
      data: [
        { Type: 2, Section: 20 },
        { Type: 2, Section: 20 },
        { Type: 2, Section: 20 },
      ],
    },
    {
      id: 'victory',
      name: 'Victory',
      desc: 'Triggered when a player wins the game',
      emoji: '\uD83C\uDFC6',
    },
  ];

  let playing = $state<number | null>(null);

  function playAnimation(animation: AnimationInfo, index: number) {
    playing = index;
    const duration = animation.id === 'hit-sequence' ? 3500 : 3000;
    animations.playAnimation(animation.id, animation.data, duration);
    setTimeout(() => { playing = null; }, duration);
  }
</script>

<main class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
  <!-- Animation Overlay -->
  <AnimationOverlay />

  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <button
        onclick={() => { window.location.href = '/'; }}
        class="mb-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center gap-2"
      >
        <Fa icon={faArrowLeft} /> Back
      </button>
      <h1 class="text-5xl font-bold text-white mb-2">
        Animation Debug
      </h1>
      <p class="text-purple-200">
        Test all game animations
      </p>
    </div>

    <!-- Animations Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each animationsList as animation, index}
        <button
          onclick={() => playAnimation(animation, index)}
          class="group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all text-left {playing === index ? 'ring-4 ring-purple-400 scale-105' : ''}"
        >
          <div class="flex items-start justify-between mb-2">
            <div class="flex items-center gap-4">
              <span class="text-6xl">{animation.emoji}</span>
              <div>
                <h3 class="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {animation.name}
                </h3>
                <p class="text-purple-200 text-sm mt-1">
                  {animation.desc}
                </p>
              </div>
            </div>
            {#if playing === index}
              <span class="inline-flex items-center gap-2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full animate-pulse">
                Playing
              </span>
            {/if}
          </div>
        </button>
      {/each}
    </div>

    <!-- Info -->
    <div class="mt-8 text-center text-purple-300 text-sm">
      <p>Click a button to preview the animation</p>
    </div>
  </div>
</main>
