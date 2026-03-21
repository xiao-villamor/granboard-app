<script lang="ts">
  import type { HitData } from '@/stores/animations.svelte';

  interface Props {
    hits: HitData[];
  }

  let { hits }: Props = $props();
  let visibleHits = $state(1);

  function getSymbol(type: number): string {
    if (type === 1) return '\\';
    if (type === 2) return 'X';
    if (type === 3) return '⊗';
    return '?';
  }

  $effect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 1; i < hits.length; i++) {
      const timer = setTimeout(() => {
        visibleHits = i + 1;
      }, i * 400);
      timers.push(timer);
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  });
</script>

<div class="text-center">
  <div class="text-8xl font-bold text-white mb-4 flex justify-center gap-12 items-center min-h-[120px]">
    {#each hits as hit, index}
      {@const isVisible = index < visibleHits}
      <span
        style:font-family="monospace"
        style:text-shadow="0 0 20px rgba(139, 92, 246, 0.8)"
        style:opacity={isVisible ? 1 : 0}
        style:transform={isVisible ? 'scale(1) translateY(0)' : 'scale(0.5) translateY(-20px)'}
        style:display="inline-block"
        style:transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
        style:will-change="transform, opacity"
      >
        {getSymbol(hit.Type)}
      </span>
    {/each}
  </div>
  <div
    class="text-2xl text-purple-300 mt-2"
    style:opacity={visibleHits === hits.length ? 1 : 0}
    style:transition="opacity 0.5s ease-in-out"
  ></div>
</div>
