<script lang="ts">
  import type { Segment } from '@/services/boardinfo';

  interface Props {
    hit: Segment | null;
    hitIndex?: number;
    onComplete?: () => void;
  }

  let { hit, hitIndex = 0, onComplete }: Props = $props();

  let show = $state(false);
  let fadeOut = $state(false);
  let displayedHit = $state<Segment | null>(null);
  let timer: ReturnType<typeof setTimeout> | null = null;
  let fadeTimer: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    // Depend on hitIndex so the effect re-fires even when the same segment is hit twice.
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    hitIndex;

    if (hit) {
      // Clear any pending timers
      if (timer) clearTimeout(timer);
      if (fadeTimer) clearTimeout(fadeTimer);

      // Show immediately with fresh state
      displayedHit = hit;
      fadeOut = false;
      show = true;

      // Start fade-out after 600ms
      fadeTimer = setTimeout(() => {
        fadeOut = true;
      }, 600);

      // Fully hide after 1000ms (600ms visible + 400ms fade-out)
      timer = setTimeout(() => {
        show = false;
        fadeOut = false;
        displayedHit = null;
        onComplete?.();
      }, 1000);
    } else {
      // hit became null (e.g. player changed) — clear immediately so the
      // animation doesn't stay stuck on screen when the cleanup cancels
      // the pending hide timer.
      if (timer) clearTimeout(timer);
      if (fadeTimer) clearTimeout(fadeTimer);
      show = false;
      fadeOut = false;
      displayedHit = null;
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (fadeTimer) clearTimeout(fadeTimer);
    };
  });
</script>

{#if displayedHit && show}
  <div
    class="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none transition-opacity duration-400"
    class:opacity-0={fadeOut}
  >
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
            {displayedHit.ShortName}
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
