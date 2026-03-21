<script lang="ts">
  import Fa from 'svelte-fa';
  import { faXmark, faRotateRight, faCheck } from '@fortawesome/free-solid-svg-icons';
  import { SegmentID, type Segment } from '@/services/boardinfo';
  import type { Granboard } from '@/services/granboard';

  interface Player {
    id: string;
    name: string;
  }

  interface PlayerThrow {
    player: Player;
    segment: Segment | null;
    score: number;
  }

  interface Props {
    players: Player[];
    granboard: Granboard;
    onOrderDetermined: (orderedPlayers: Player[]) => void;
    onclose: () => void;
  }

  let { players, granboard, onOrderDetermined, onclose }: Props = $props();

  let currentPlayerIndex = $state(0);
  let throws = $state<PlayerThrow[]>(
    players.map((p) => ({ player: p, segment: null, score: 0 })),
  );

  // Calculate score - use the actual dart score
  function calculateScore(segment: Segment): number {
    return segment.Value;
  }

  let allPlayersThrew = $derived(throws.every((t) => t.segment !== null));

  // Update callback when currentPlayerIndex changes
  $effect(() => {
    const idx = currentPlayerIndex;
    const len = throws.length;

    granboard.segmentHitCallback = (segment: Segment) => {
      // Ignore reset button
      if (segment.ID === SegmentID.RESET_BUTTON) return;

      const score = calculateScore(segment);
      const newThrows = [...throws];
      newThrows[idx] = {
        ...newThrows[idx],
        segment,
        score,
      };
      throws = newThrows;

      // Move to next player after a short delay (if not last player)
      if (idx < len - 1) {
        setTimeout(() => {
          currentPlayerIndex = idx + 1;
        }, 1500);
      }
    };
  });

  function handleFinish() {
    // Sort players by score (highest first)
    const sortedThrows = [...throws].sort((a, b) => b.score - a.score);
    const orderedPlayers = sortedThrows.map((t) => t.player);
    onOrderDetermined(orderedPlayers);
  }

  function handleReset() {
    throws = players.map((p) => ({ player: p, segment: null, score: 0 }));
    currentPlayerIndex = 0;
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
<div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
  <div class="bg-slate-800 rounded-2xl p-8 max-w-2xl w-full mx-4 border-2 border-green-500 shadow-2xl">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-3xl font-bold text-white">
        Throw for Order
      </h2>
      <button
        onclick={onclose}
        class="text-slate-400 hover:text-white text-2xl"
      >
        <Fa icon={faXmark} />
      </button>
    </div>

    <div class="mb-6 p-4 bg-accent-bg rounded-xl border border-accent/50">
      <p class="text-sm text-accent">
        Each player throws one dart — highest score goes first
      </p>
    </div>

    {#if !allPlayersThrew}
      <div class="mb-6 p-6 bg-green-900/30 rounded-xl border-2 border-green-500">
        <p class="text-2xl font-bold text-green-400 text-center">
          {throws[currentPlayerIndex].player.name}'s turn
        </p>
        <p class="text-center text-slate-300 mt-2">
          Throw a dart
        </p>
      </div>
    {/if}

    <div class="space-y-3 mb-6">
      {#each throws as throwData, index (throwData.player.id)}
        <div
          class="p-4 rounded-xl border-2 transition-all {index === currentPlayerIndex && !allPlayersThrew
            ? 'border-green-500 bg-green-900/20'
            : throwData.segment
              ? 'border-slate-600 bg-slate-700/50'
              : 'border-slate-700 bg-slate-900/50'}"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <span class="w-10 h-10 flex items-center justify-center text-xl font-bold text-green-400 bg-slate-800 rounded-full">
                {index + 1}
              </span>
              <span class="text-xl font-medium text-white">
                {throwData.player.name}
              </span>
            </div>
            <div class="text-right">
              {#if throwData.segment}
                <div class="text-2xl font-bold text-green-400">
                  {throwData.segment.ShortName}
                </div>
                <div class="text-sm text-slate-400">
                  Score: {throwData.score}
                </div>
              {:else}
                <div class="text-slate-500">Waiting...</div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    {#if allPlayersThrew}
      <div class="flex gap-3">
        <button
          onclick={handleReset}
          class="flex-1 px-8 py-4 bg-orange-700 text-white rounded-xl hover:bg-orange-600 transition-all font-bold text-xl shadow-lg flex items-center justify-center gap-2"
        >
          <Fa icon={faRotateRight} /> Retry
        </button>
        <button
          onclick={handleFinish}
          class="flex-1 px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all font-bold text-xl shadow-lg flex items-center justify-center gap-2"
        >
          <Fa icon={faCheck} /> Confirm Order
        </button>
      </div>
    {/if}
  </div>
</div>
