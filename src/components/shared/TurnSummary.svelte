<script lang="ts">
  import type { Segment } from '@/services/boardinfo';

  interface Props {
    show: boolean;
    currentPlayer: { player: { name: string } };
    hits: Segment[];
    onComplete: () => void;
  }

  let { show, currentPlayer, hits, onComplete }: Props = $props();

  let visible = $state(false);
  let timer: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    if (show) {
      visible = true;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        visible = false;
        onComplete();
      }, 1500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  let emptySlots = $derived(Array(3 - hits.length));
</script>

{#if visible}
  <div data-testid="turn-summary" class="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 animate-fade-in"></div>

    <!-- Summary card -->
    <div class="relative animate-slide-up">
      <div
        class="rounded-3xl shadow-2xl p-10 border min-w-[500px]"
        style="background-color: var(--hud-surface-container-low); border-color: rgba(255, 185, 95, 0.3);"
      >
        <!-- Player name -->
        <div class="text-center mb-6">
          <h2 class="text-4xl font-headline font-extrabold mb-2" style="color: var(--hud-primary);">
            {currentPlayer.player.name}
          </h2>
          <div class="text-xl" style="color: var(--hud-tertiary);">Turn completed</div>
        </div>

        <!-- Hits -->
        <div class="flex justify-center gap-4">
          {#each hits as hit, index}
            <div
              class="rounded-xl p-6 min-w-[120px] text-center transform hover:scale-110 transition-transform border"
              style="background-color: var(--hud-surface-container-high); border-color: rgba(69, 70, 77, 0.15); animation: slideIn 0.3s ease-out {index * 0.1}s both;"
            >
              <div class="text-5xl font-headline font-extrabold" style="color: var(--hud-primary);">
                {hit.ShortName}
              </div>
            </div>
          {/each}
          <!-- Empty slots -->
          {#each emptySlots as _, index}
            <div
              class="rounded-xl p-6 min-w-[120px] text-center border-2 border-dashed"
              style="background-color: var(--hud-surface-container); border-color: var(--hud-surface-container-highest);"
            >
              <div class="text-5xl font-headline font-extrabold" style="color: var(--hud-on-tertiary-container);">-</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Glow effect -->
      <div
        class="absolute inset-0 rounded-3xl blur-3xl opacity-30 animate-pulse"
        style="background-color: var(--hud-primary);"
      ></div>
    </div>
  </div>
{/if}

<style>
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
