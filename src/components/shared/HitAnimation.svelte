<script lang="ts">
  import type { Segment } from '@/services/boardinfo';

  interface Props {
    hit: Segment | null;
    onComplete?: () => void;
  }

  let { hit, onComplete }: Props = $props();

  let show = $state(false);
  let timer: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    if (hit) {
      show = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        show = false;
        onComplete?.();
      }, 700);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  });
</script>

{#if hit && show}
  <div class="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
    <!-- Overlay with fade -->
    <div class="absolute inset-0 bg-black/50 animate-fade-in"></div>

    <!-- Hit display -->
    <div class="relative animate-bounce-scale">
      <div
        class="rounded-3xl shadow-2xl p-16 border"
        style="background-color: var(--hud-surface-container-low); border-color: rgba(255, 185, 95, 0.3);"
      >
        <div class="text-center">
          <div
            class="text-9xl font-headline font-extrabold"
            style="color: var(--hud-primary);"
          >
            {hit.ShortName}
          </div>
        </div>
      </div>

      <!-- Glow effect -->
      <div
        class="absolute inset-0 rounded-3xl blur-3xl opacity-40 animate-pulse"
        style="background-color: var(--hud-primary);"
      ></div>
    </div>
  </div>
{/if}
