<script lang="ts">
  import Fa from 'svelte-fa';
  import { faXmark, faChartBar, faBullseye, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

  interface Props {
    show: boolean;
    doubleOut: boolean;
    onclose: () => void;
  }

  let { show, doubleOut, onclose }: Props = $props();
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
          01 Legend
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
          <div
            class="p-3 md:p-4 rounded-xl border"
            style="background-color: rgba(255, 185, 95, 0.06); border-color: rgba(255, 185, 95, 0.2);"
          >
            <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-primary);">
              <Fa icon={faBullseye} /> Objective
            </p>
            <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
              Reduce your score to exactly zero. Bust (going below zero) resets your turn.
            </p>
          </div>

          <div
            class="p-3 md:p-4 rounded-xl border"
            style="background-color: rgba(255, 185, 95, 0.06); border-color: rgba(255, 185, 95, 0.2);"
          >
            <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-primary);">
              <Fa icon={faChartBar} /> PPD — Points Per Dart
            </p>
            <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
              Average points scored per dart thrown.
            </p>
          </div>

          <div
            class="p-3 md:p-4 rounded-xl border"
            style="background-color: rgba(255, 185, 95, 0.06); border-color: rgba(255, 185, 95, 0.2);"
          >
            <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-primary);">
              <Fa icon={faChartBar} /> 3-Dart Average
            </p>
            <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
              Average points scored per 3-dart turn.
            </p>
          </div>

          <div
            class="p-3 md:p-4 rounded-xl border"
            style="background-color: rgba(255, 180, 171, 0.06); border-color: rgba(255, 180, 171, 0.2);"
          >
            <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-error);">
              <Fa icon={faTriangleExclamation} /> Bust
            </p>
            <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
              Scoring below zero resets your score for that turn.
            </p>
          </div>

          {#if doubleOut}
            <div
              class="p-3 md:p-4 rounded-xl border"
              style="background-color: rgba(255, 185, 95, 0.06); border-color: rgba(255, 185, 95, 0.2);"
            >
              <p class="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style="color: var(--hud-primary);">
                <Fa icon={faBullseye} /> Double Out
              </p>
              <p class="text-xs md:text-sm" style="color: var(--hud-tertiary);">
                Must finish on a double (or bullseye). Only available in some modes.
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
