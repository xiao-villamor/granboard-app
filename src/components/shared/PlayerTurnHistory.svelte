<script lang="ts">
  import type { PlayerTurn } from '@/stores/playerTurnHistory.svelte';
  import type { Segment } from '@/services/boardinfo';

  interface Props {
    player: { id: string; name: string };
    turns: PlayerTurn[];
    currentTurnHits: Segment[];
    currentRound: number;
  }

  let { player, turns, currentTurnHits, currentRound }: Props = $props();

  let reversedTurns = $derived([...turns].reverse());
</script>

<div
  class="rounded-xl shadow-2xl h-full flex flex-col overflow-hidden border"
  style="background-color: var(--hud-surface-container-low); border-color: rgba(69, 70, 77, 0.10);"
>
  <h3
    class="text-sm font-label font-semibold uppercase tracking-widest px-4 py-3 flex-shrink-0"
    style="color: var(--hud-tertiary); border-bottom: 1px solid var(--hud-surface-container-high);"
    data-testid="history-title"
  >
    History — {player.name}
  </h3>
  <div class="overflow-y-auto flex-1 p-3 space-y-2">
    <!-- Current turn -->
    <div
      class="rounded-lg p-2.5 border"
      style="background-color: rgba(255, 185, 95, 0.08); border-color: rgba(255, 185, 95, 0.25);"
    >
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xs font-bold" style="color: var(--hud-primary);" data-testid="current-round-{currentRound}">
          Round {currentRound} (In Progress)
        </span>
        <span class="text-xs" style="color: var(--hud-primary);">
          {currentTurnHits.length} / 3 Darts
        </span>
      </div>
      <div class="flex gap-1.5">
        {#if currentTurnHits.length > 0}
          {#each currentTurnHits as hit, hitIdx}
            <div
              class="flex-1 rounded px-2 py-1.5 text-center"
              style="background-color: var(--hud-surface-container-high); {hitIdx === currentTurnHits.length - 1
                ? 'box-shadow: 0 0 0 2px var(--hud-secondary);'
                : ''}"
            >
              <div class="text-sm font-bold" style="color: var(--hud-on-surface);">
                {hit.ShortName}
              </div>
              <div class="text-xs" style="color: var(--hud-on-tertiary-container);">
                {hit.Value}
              </div>
            </div>
          {/each}
          <!-- Fill remaining dart slots -->
          {#each Array(3 - currentTurnHits.length) as _, i}
            <div
              class="flex-1 rounded px-2 py-1.5 text-center"
              style="background-color: var(--hud-surface-container);"
            >
              <div class="text-sm" style="color: var(--hud-on-tertiary-container);">-</div>
              <div class="text-xs" style="color: var(--hud-on-tertiary-container);">0</div>
            </div>
          {/each}
        {:else}
          <!-- No darts thrown yet -->
          {#each Array(3) as _, i}
            <div
              class="flex-1 rounded px-2 py-1.5 text-center"
              style="background-color: var(--hud-surface-container);"
            >
              <div class="text-sm" style="color: var(--hud-on-tertiary-container);">-</div>
              <div class="text-xs" style="color: var(--hud-on-tertiary-container);">0</div>
            </div>
          {/each}
        {/if}
      </div>
    </div>

    <!-- Previous turns -->
    {#if turns.length > 0}
      {#each reversedTurns as turn, idx (`${turn.round}-${idx}`)}
        <div
          class="rounded-lg p-2.5 border"
          style="background-color: var(--hud-surface-container); border-color: rgba(69, 70, 77, 0.10);"
        >
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-xs font-bold" style="color: var(--hud-tertiary);" data-testid="completed-round-{turn.round}">
              Round {turn.round}
            </span>
            <span class="text-xs" style="color: var(--hud-on-tertiary-container);">
              {turn.hits.length} Darts
            </span>
          </div>
          <div class="flex gap-1.5">
            {#each turn.hits as hit, hitIdx}
              <div
                class="flex-1 rounded px-2 py-1.5 text-center"
                style="background-color: var(--hud-surface-container-high);"
              >
                <div class="text-sm font-bold" style="color: var(--hud-on-surface);">
                  {hit.ShortName}
                </div>
                <div class="text-xs" style="color: var(--hud-on-tertiary-container);">
                  {hit.Value}
                </div>
              </div>
            {/each}
            <!-- Fill empty dart slots -->
            {#each Array(3 - turn.hits.length) as _, i}
              <div
                class="flex-1 rounded px-2 py-1.5 text-center"
                style="background-color: var(--hud-surface-container);"
              >
                <div class="text-sm" style="color: var(--hud-on-tertiary-container);">-</div>
                <div class="text-xs" style="color: var(--hud-on-tertiary-container);">0</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    {:else}
      <div class="text-center py-4 text-sm" style="color: var(--hud-on-tertiary-container);">
        No completed turns yet
      </div>
    {/if}
  </div>
</div>
