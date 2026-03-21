<script lang="ts">
  import type { Segment } from '@/services/boardinfo';
  import type { PlayerState as PlayerCricketState } from '@/services/cricket';
  import type { PlayerState as PlayerZeroOneState } from '@/services/zeroone';

  type PlayerState = PlayerCricketState | PlayerZeroOneState;

  interface Props {
    currentPlayer: PlayerState;
    dartsThrown: number;
    currentRound: number;
    maxRounds: number;
    currentTurnHits: Segment[];
    hasHistory: boolean;
    onUndo: () => void;
    onNextPlayer: () => void;
  }

  let {
    currentPlayer,
    dartsThrown,
    currentRound,
    maxRounds,
    currentTurnHits,
    hasHistory,
    onUndo,
    onNextPlayer,
  }: Props = $props();
</script>

<div
  class="rounded-xl shadow-2xl p-4 border"
  style="background: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); -webkit-backdrop-filter: blur(var(--hud-glass-blur)); border-color: rgba(69, 70, 77, 0.15);"
>
  <div class="flex justify-between items-center gap-4">
    <div class="flex-1">
      <h2 class="text-2xl font-headline font-extrabold mb-1" style="color: var(--hud-on-surface);">
        <span style="color: var(--hud-primary);">{currentPlayer.player.name}</span>
      </h2>
      <div class="flex gap-3 text-sm" style="color: var(--hud-tertiary);">
        <p data-testid="dart-counter">
          Dart{' '}
          <span class="font-bold" style="color: var(--hud-on-surface);">{dartsThrown}</span> / 3
        </p>
        <span style="color: var(--hud-outline-variant);">|</span>
        <p data-testid="round-counter">
          Round{' '}
          <span class="font-bold" style="color: var(--hud-on-surface);">{currentRound}</span>
          {#if maxRounds > 0}{' '}/ {maxRounds}{/if}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <button
        data-testid="undo-button"
        onclick={onUndo}
        disabled={!hasHistory}
        class="px-4 py-2 rounded-lg font-bold text-sm transition-all"
        style="background-color: {!hasHistory
          ? 'var(--hud-surface-container-high)'
          : 'var(--hud-primary)'}; color: {!hasHistory
          ? 'var(--hud-on-tertiary-container)'
          : 'var(--hud-on-primary)'}; cursor: {!hasHistory ? 'not-allowed' : 'pointer'}; opacity: {!hasHistory ? 0.5 : 1};"
        title="Undo last move"
      >
        ↶ Undo
      </button>
      <button
        data-testid="next-player-button"
        onclick={onNextPlayer}
        class="px-4 py-2 rounded-lg font-bold text-sm transition-all"
        style="background-color: var(--hud-error-container); color: var(--hud-on-error-container);"
        title="End turn and pass to next player"
      >
        Next Player
      </button>
    </div>
  </div>
</div>
