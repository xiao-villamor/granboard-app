<script lang="ts">
  import Fa from 'svelte-fa';
  import { faXmark, faChartBar, faBullseye, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
  import { CricketGameMode } from '@/services/cricket';

  interface Props {
    show: boolean;
    gameMode: CricketGameMode;
    onclose: () => void;
  }

  let { show, gameMode, onclose }: Props = $props();
</script>

{#if show}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div
      data-testid="legend-dialog"
      class="rounded-2xl border max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-in"
      style="background-color: var(--hud-surface-container-low); border-color: rgba(69, 70, 77, 0.15);"
    >
      <div
        class="flex justify-between items-center p-4 md:p-6 pb-3"
        style="border-bottom: 1px solid var(--hud-surface-container-highest);"
      >
        <h3 class="font-headline font-extrabold text-xl md:text-2xl" style="color: var(--hud-on-surface);">
          Cricket Legend
        </h3>
        <button
          data-testid="legend-close-button"
          onclick={onclose}
          class="text-2xl font-bold px-3 py-1 rounded-lg transition-colors"
          style="color: var(--hud-on-tertiary-container);"
        >
          <Fa icon={faXmark} />
        </button>
      </div>

      <div class="overflow-y-auto flex-1 p-4 md:p-6 pt-4">
        <div class="space-y-3 md:space-y-4">
          <div>
            <h4 class="text-base md:text-lg font-headline font-bold mb-2 md:mb-3" style="color: var(--hud-primary);">
              Mark Symbols
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm md:text-base">
              <div
                class="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style="background-color: var(--hud-surface-container);"
              >
                <span class="text-xl md:text-2xl font-bold" style="color: var(--hud-primary);">/</span>
                <span style="color: var(--hud-tertiary);">One mark</span>
              </div>
              <div
                class="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style="background-color: var(--hud-surface-container);"
              >
                <span class="text-xl md:text-2xl font-bold" style="color: var(--hud-primary);">X</span>
                <span style="color: var(--hud-tertiary);">Two marks</span>
              </div>
              <div
                class="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style="background-color: var(--hud-surface-container);"
              >
                <span class="text-xl md:text-2xl font-bold" style="color: var(--hud-secondary);">⊗</span>
                <span style="color: var(--hud-tertiary);">Closed (3 marks)</span>
              </div>
              <div
                class="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style="background-color: var(--hud-surface-container);"
              >
                <span class="text-xl md:text-2xl font-bold" style="color: var(--hud-on-tertiary-container);">⊗</span>
                <span style="color: var(--hud-tertiary);">Closed by all</span>
              </div>
            </div>
          </div>

          <div
            class="p-3 md:p-4 rounded-xl border"
            style="background-color: rgba(255, 185, 95, 0.06); border-color: rgba(255, 185, 95, 0.2);"
          >
            <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-primary);">
              <Fa icon={faChartBar} /> MPR — Marks Per Round
            </p>
            <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
              Average marks scored per round. A good MPR is 3.0+
            </p>
            <ul class="list-disc list-inside mt-2 text-xs md:text-sm space-y-1" style="color: var(--hud-tertiary);">
              <li>Single</li>
              <li>Double</li>
              <li>Triple</li>
            </ul>
          </div>

          <div
            class="p-3 md:p-4 rounded-xl border"
            style="background-color: rgba(255, 185, 95, 0.06); border-color: rgba(255, 185, 95, 0.2);"
          >
            <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-primary);">
              <Fa icon={faBullseye} /> Standard Cricket
            </p>
            <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
              Close a number to score points. Most points when all numbers are closed wins.
            </p>
          </div>

          {#if gameMode === CricketGameMode.CutThroat}
            <div
              class="p-3 md:p-4 rounded-xl border"
              style="background-color: rgba(255, 180, 171, 0.06); border-color: rgba(255, 180, 171, 0.2);"
            >
              <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-error);">
                <Fa icon={faTriangleExclamation} /> Cut-Throat Cricket
              </p>
              <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
                Closing a number adds points to opponents. Fewest points wins.
              </p>
            </div>
          {/if}
        </div>
      </div>

      <div
        class="p-4 md:p-6 pt-3"
        style="border-top: 1px solid var(--hud-surface-container-highest);"
      >
        <button
          onclick={onclose}
          class="w-full px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg hud-gradient-cta"
        >
          Close
        </button>
      </div>
    </div>
  </div>
{/if}
