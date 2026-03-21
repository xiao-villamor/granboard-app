<script lang="ts">
  import {
    type PlayerState,
    calculatePPD,
    calculateAverage,
    getCheckoutSuggestion,
    isCheckoutScore,
  } from '@/services/zeroone';
  import { type Segment, SegmentSection } from '@/services/boardinfo';

  interface Props {
    players: PlayerState[];
    currentPlayerIndex: number;
    gameFinished: boolean;
    currentTurnHits?: Segment[];
    dartsThrown?: number;
    currentRound?: number;
    maxRounds?: number;
    hasHistory?: boolean;
    onUndo?: () => void;
    onNextPlayer?: () => void;
  }

  let {
    players,
    currentPlayerIndex,
    gameFinished,
    currentTurnHits = [],
    dartsThrown = 0,
    currentRound = 1,
    maxRounds = 0,
    hasHistory = false,
    onUndo,
    onNextPlayer,
  }: Props = $props();

  let currentPlayer = $derived(players[currentPlayerIndex]);
  let otherPlayers = $derived(
    players
      .map((p, idx) => ({ ...p, originalIndex: idx }))
      .filter((_, idx) => idx !== currentPlayerIndex)
  );

  let checkoutSuggestion = $derived(
    currentPlayer ? getCheckoutSuggestion(currentPlayer.currentScore) : null
  );
  let onCheckout = $derived(
    currentPlayer ? isCheckoutScore(currentPlayer.currentScore) : false
  );

  let avg = $derived(currentPlayer ? calculateAverage(currentPlayer) : 0);

  /** Compute last turn score from turn hits */
  let lastTurnScore = $derived(
    currentTurnHits.reduce((sum, hit) => sum + hit.Value, 0)
  );

  /** Parse checkout suggestion into individual dart labels */
  function parseCheckoutDarts(suggestion: string): { label: string; isDouble: boolean }[] {
    return suggestion.split(',').map((s) => {
      const trimmed = s.trim();
      return {
        label: trimmed,
        isDouble: trimmed.startsWith('D') || trimmed === 'Bull',
      };
    });
  }

  /** Get next player index for "Up Next" display */
  function getNextPlayerIndex(): number {
    return (currentPlayerIndex + 1) % players.length;
  }
</script>

<div class="h-full flex flex-col md:flex-row gap-8 lg:gap-12 items-center overflow-hidden px-4 lg:px-8">

  <!-- LEFT: Active Player Focus (Expanded) -->
  <section class="flex-[2] flex flex-col justify-center items-center text-center gap-4 min-h-0">

    <!-- Current Player Label + Name -->
    <div class="flex flex-col items-center">
      <span
        class="text-[11px] font-bold tracking-[0.3em] uppercase mb-2"
        style="color: var(--hud-primary); opacity: 0.6;"
      >
        Current Player
      </span>
      <h1
        class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter font-headline"
        style="color: var(--hud-on-surface);"
      >
        {#if currentPlayer}
          {currentPlayer.player.name.toUpperCase()}
        {/if}
      </h1>
    </div>

    <!-- Massive Central Score -->
    {#if !gameFinished && currentPlayer}
      <div class="relative py-2 md:py-4">
        <div
          class="font-black leading-none tracking-tighter text-transparent amber-gradient text-glow"
          style="font-size: clamp(8rem, 22vw, 20rem);"
          data-testid={`scoreboard-player-${currentPlayer.player.name}`}
        >
          {currentPlayer.currentScore}
        </div>

        <!-- Checkout Suggestion (floating pill) -->
        {#if onCheckout && checkoutSuggestion}
          {@const darts = parseCheckoutDarts(checkoutSuggestion)}
          <div
            class="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 glass-panel px-6 md:px-10 py-3 md:py-4 rounded-full flex items-center gap-4 md:gap-6 shadow-2xl border"
            style="border-color: rgba(69, 70, 77, 0.15);"
          >
            <span
              class="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
              style="color: var(--hud-primary); opacity: 0.6;"
            >
              Target:
            </span>
            <div class="flex gap-3 md:gap-4">
              {#each darts as dart}
                <span
                  class="text-lg md:text-2xl font-black"
                  style="color: {dart.isDouble ? 'var(--hud-primary)' : 'var(--hud-on-surface)'};"
                >
                  {dart.label}
                </span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/if}

    <!-- Stats Row: Average, Darts, Last Turn -->
    {#if currentPlayer}
      <div class="grid grid-cols-3 gap-12 md:gap-20 pt-10 md:pt-16">
        <div class="flex flex-col">
          <span
            class="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase"
            style="color: rgba(148, 163, 184, 0.6);"
          >
            Average
          </span>
          <span
            class="text-2xl md:text-4xl font-bold font-headline mt-1"
            style="color: var(--hud-on-surface);"
          >
            {avg.toFixed(1)}
          </span>
        </div>
        <div class="flex flex-col">
          <span
            class="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase"
            style="color: rgba(148, 163, 184, 0.6);"
          >
            Darts
          </span>
          <span
            class="text-2xl md:text-4xl font-bold font-headline mt-1"
            style="color: var(--hud-on-surface);"
          >
            {currentPlayer.dartsThrown}
          </span>
        </div>
        <div class="flex flex-col">
          <span
            class="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase"
            style="color: rgba(148, 163, 184, 0.6);"
          >
            Last Turn
          </span>
          <span
            class="text-2xl md:text-4xl font-bold font-headline mt-1"
            style="color: var(--hud-on-surface);"
          >
            {lastTurnScore}
          </span>
        </div>
      </div>
    {/if}

    <!-- Undo / Next Player controls (compact, below stats) -->
    {#if !gameFinished && currentPlayer}
      <div class="flex items-center gap-3 pt-4">
        {#if onUndo}
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
            &#x21B6; Undo
          </button>
        {/if}
        {#if onNextPlayer}
          <button
            data-testid="next-player-button"
            onclick={onNextPlayer}
            class="px-4 py-2 rounded-lg font-bold text-sm transition-all"
            style="background-color: var(--hud-error-container); color: var(--hud-on-error-container);"
            title="End turn and pass to next player"
          >
            Next Player
          </button>
        {/if}
      </div>
    {/if}
  </section>

  <!-- RIGHT: Player Standings & Match Info -->
  <section class="flex-1 flex flex-col gap-4 md:gap-6 self-center w-full max-w-md min-h-0">

    <!-- Header for Standings -->
    <div class="flex items-center justify-between px-2">
      <span
        class="text-xs font-bold tracking-[0.2em] uppercase"
        style="color: rgba(148, 163, 184, 0.6);"
      >
        Standings
      </span>
      <div class="flex items-center gap-2">
        <span
          class="text-[10px] font-bold tracking-[0.15em] uppercase"
          style="color: var(--hud-primary);"
        >
          Round {currentRound}{#if maxRounds > 0} / {maxRounds}{/if}
        </span>
      </div>
    </div>

    <!-- Player Cards (Vertical List) -->
    <div class="flex flex-col gap-3 overflow-y-auto">
      {#each otherPlayers as playerState, idx (playerState.player.id)}
        {@const isNext = playerState.originalIndex === getNextPlayerIndex()}
        {@const isFinished = playerState.currentScore === 0}
        <div
          data-testid={`scoreboard-player-${playerState.player.name}`}
          class="p-5 md:p-6 lg:p-8 rounded-2xl flex flex-col gap-2 transition-all duration-300 relative overflow-hidden group"
          style="background-color: {isNext
            ? 'var(--hud-surface-container-high)'
            : isFinished
              ? 'rgba(68, 226, 205, 0.08)'
              : 'rgba(19, 27, 46, 0.5)'}; border: 1px solid {isNext
            ? 'rgba(255, 185, 95, 0.2)'
            : isFinished
              ? 'rgba(68, 226, 205, 0.25)'
              : 'transparent'}; {isNext
            ? 'box-shadow: 0 4px 24px rgba(255, 185, 95, 0.08);'
            : ''} {!isNext && !isFinished ? 'opacity: 0.5;' : ''}"
        >
          <!-- Up Next badge -->
          {#if isNext}
            <div class="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
              <span
                class="text-[10px] font-black uppercase"
                style="color: var(--hud-primary);"
              >
                Up Next
              </span>
            </div>
          {/if}

          <span
            class="text-[10px] font-bold tracking-[0.15em] uppercase"
            style="color: rgba(148, 163, 184, 0.6);"
          >
            Player {String(playerState.originalIndex + 1).padStart(2, '0')}
          </span>
          <div class="flex justify-between items-end">
            <span
              class="text-lg md:text-2xl font-bold font-headline"
              style="color: {isFinished ? 'var(--hud-secondary)' : 'var(--hud-on-surface)'};"
            >
              {playerState.player.name.toUpperCase()}
            </span>
            <span
              class="text-2xl md:text-4xl font-black font-headline"
              style="color: {isFinished ? 'var(--hud-secondary)' : 'var(--hud-on-surface)'};"
            >
              {playerState.currentScore}
            </span>
          </div>
        </div>
      {/each}
    </div>

    <!-- Match Status Footer -->
    <div
      class="mt-2 md:mt-4 p-5 md:p-8 rounded-2xl flex flex-col items-center gap-1 border"
      style="background-color: rgba(6, 14, 32, 0.3); border-color: rgba(69, 70, 77, 0.10);"
    >
      <span
        class="text-[11px] font-bold tracking-[0.3em] uppercase mb-2"
        style="color: rgba(148, 163, 184, 0.6);"
      >
        Match Progress
      </span>
      <div class="flex items-center gap-6 md:gap-8">
        <div class="flex flex-col items-center">
          <span
            class="text-xs font-bold uppercase mb-1"
            style="color: rgba(148, 163, 184, 0.6);"
          >
            Round
          </span>
          <span
            class="text-xl md:text-2xl font-black font-headline"
            style="color: var(--hud-primary);"
          >
            {currentRound}
          </span>
        </div>
        <div
          class="w-px h-8"
          style="background-color: rgba(69, 70, 77, 0.20);"
        ></div>
        <div class="flex flex-col items-center">
          <span
            class="text-xs font-bold uppercase mb-1"
            style="color: rgba(148, 163, 184, 0.6);"
          >
            Darts
          </span>
          <span
            class="text-xl md:text-2xl font-black font-headline"
            style="color: var(--hud-on-surface);"
          >
            {dartsThrown} / 3
          </span>
        </div>
      </div>
      <!-- Progress bar -->
      {#if maxRounds > 0}
        <div
          class="mt-4 w-full h-1.5 rounded-full overflow-hidden"
          style="background-color: var(--hud-surface-container-highest);"
        >
          <div
            class="h-full rounded-full transition-all duration-500"
            style="width: {Math.min(100, (currentRound / maxRounds) * 100)}%; background-color: var(--hud-primary); box-shadow: 0 0 10px rgba(255, 185, 95, 0.5);"
          ></div>
        </div>
      {/if}
    </div>
  </section>
</div>
