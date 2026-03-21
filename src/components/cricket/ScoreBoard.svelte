<script lang="ts">
  import {
    CricketGameMode,
    type CricketNumber,
    type PlayerState,
    CRICKET_NUMBERS,
    getPlayerScore,
    calculateMPR,
  } from '@/services/cricket';

  interface Props {
    players: PlayerState[];
    currentPlayerIndex: number;
    gameMode: CricketGameMode;
    gameFinished: boolean;
    dartsThrown: number;
  }

  let { players, currentPlayerIndex, gameMode, gameFinished, dartsThrown }: Props = $props();

  // Check if all players have closed a specific number
  function isNumberClosedByAll(num: CricketNumber): boolean {
    return players.every((p) => getPlayerScore(p, num).marks >= 3);
  }

  // Split players into left and right sides
  let midPoint = $derived(Math.ceil(players.length / 2));
  let leftPlayers = $derived(players.slice(0, midPoint));
  let rightPlayers = $derived(players.slice(midPoint));

  // Cricket numbers displayed top-to-bottom: 20, 19, 18, 17, 16, 15, Bull
  const DISPLAY_NUMBERS: CricketNumber[] = [20, 19, 18, 17, 16, 15, 25];

  function formatMark(marks: number): { text: string; style: 'none' | 'single' | 'double' | 'closed' } {
    if (marks === 0) return { text: '', style: 'none' };
    if (marks === 1) return { text: '/', style: 'single' };
    if (marks === 2) return { text: 'X', style: 'double' };
    return { text: '(X)', style: 'closed' };
  }
</script>

<!-- Player Card Snippet (Left-aligned variant) -->
{#snippet playerCardLeft(playerState: PlayerState, playerIndex: number, displayNumber: number)}
  {@const isActive = playerIndex === currentPlayerIndex && !gameFinished}
  <div
    data-testid="scoreboard-player-{playerState.player.name}"
    class="p-6 lg:p-8 rounded-xl overflow-hidden relative transition-all duration-300"
    style="background-color: {isActive
      ? 'var(--hud-surface-container-highest)'
      : 'var(--hud-surface-container-low)'}; {isActive
      ? 'box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); outline: 1px solid rgba(255, 185, 95, 0.2);'
      : 'opacity: 0.6;'}"
  >
    <!-- Decorative glow orb for active player -->
    {#if isActive}
      <div class="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"
        style="background-color: rgba(255, 185, 95, 0.05);"></div>
    {/if}

    <!-- Name & Score row -->
    <div class="flex justify-between items-end mb-6 lg:mb-8">
      <div>
        <span class="block text-xs font-bold tracking-[0.2em] uppercase mb-1"
          style="color: {isActive ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'};">
          Player {String(displayNumber).padStart(2, '0')}
        </span>
        <h2 class="text-2xl lg:text-4xl font-extrabold tracking-tight truncate"
          style="color: var(--hud-on-surface);">
          {playerState.player.name}
        </h2>
      </div>
      <div class="text-right flex-shrink-0 ml-3">
        <span class="block text-[10px] font-bold tracking-widest uppercase"
          style="color: var(--hud-on-surface-variant);">Current Score</span>
        <span class="text-4xl lg:text-5xl font-extrabold tabular-nums"
          style="color: {isActive ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'};">
          {playerState.totalPoints}
        </span>
      </div>
    </div>

    <!-- Active Turn indicator -->
    {#if isActive}
      <div class="flex items-center gap-2 mt-4">
        <span class="w-2 h-2 rounded-full animate-pulse" style="background-color: var(--hud-primary);"></span>
        <span class="text-[10px] font-black tracking-widest uppercase" style="color: var(--hud-primary);">Active Turn</span>
      </div>
    {/if}
  </div>
{/snippet}

<!-- Player Card Snippet (Right-aligned variant) -->
{#snippet playerCardRight(playerState: PlayerState, playerIndex: number, displayNumber: number)}
  {@const isActive = playerIndex === currentPlayerIndex && !gameFinished}
  <div
    data-testid="scoreboard-player-{playerState.player.name}"
    class="p-6 lg:p-8 rounded-xl overflow-hidden relative transition-all duration-300"
    style="background-color: {isActive
      ? 'var(--hud-surface-container-highest)'
      : 'var(--hud-surface-container-low)'}; {isActive
      ? 'box-shadow: 0 25px 50px -12px rgba(0,0,0,0.4); outline: 1px solid rgba(255, 185, 95, 0.2);'
      : 'opacity: 0.6;'}"
  >
    {#if isActive}
      <div class="absolute top-0 left-0 w-32 h-32 rounded-full -ml-16 -mt-16 blur-3xl pointer-events-none"
        style="background-color: rgba(255, 185, 95, 0.05);"></div>
    {/if}

    <!-- Name row (right-aligned) -->
    <div class="flex flex-col items-end mb-6 lg:mb-8">
      <span class="block text-xs font-bold tracking-[0.2em] uppercase mb-1"
        style="color: {isActive ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'};">
        Player {String(displayNumber).padStart(2, '0')}
      </span>
      <h2 class="text-2xl lg:text-4xl font-extrabold tracking-tight truncate"
        style="color: var(--hud-on-surface);">
        {playerState.player.name}
      </h2>
    </div>

    <!-- Score (left-aligned for right-side cards) -->
    <div class="flex justify-start">
      <div class="text-left">
        <span class="block text-[10px] font-bold tracking-widest uppercase"
          style="color: var(--hud-on-surface-variant);">Current Score</span>
        <span class="text-4xl lg:text-5xl font-extrabold tabular-nums"
          style="color: {isActive ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'};">
          {playerState.totalPoints}
        </span>
      </div>
    </div>

    <!-- Active Turn indicator -->
    {#if isActive}
      <div class="flex items-center justify-end gap-2 mt-4">
        <span class="w-2 h-2 rounded-full animate-pulse" style="background-color: var(--hud-primary);"></span>
        <span class="text-[10px] font-black tracking-widest uppercase" style="color: var(--hud-primary);">Active Turn</span>
      </div>
    {/if}
  </div>
{/snippet}

<!-- Mark Display Snippet -->
{#snippet markDisplay(marks: number)}
  {@const mark = formatMark(marks)}
  <span
    class="font-extrabold select-none text-2xl lg:text-3xl"
    style="font-weight: 800; color: {mark.style === 'none'
      ? 'rgba(218, 226, 253, 0.08)'
      : mark.style === 'closed'
        ? 'var(--hud-primary)'
        : 'rgba(218, 226, 253, 0.35)'};"
  >{mark.text}</span>
{/snippet}

<!--
  Midnight Amber Cricket Scoreboard
  Desktop: 12-column grid — [4 cols left players] [4 cols center target] [4 cols right players]
  Mobile: center target full-width with compact player cards above
-->
<div class="h-full flex flex-col min-h-0">
  <!-- Mobile: compact player row (visible < lg) -->
  <div class="flex lg:hidden gap-2 mb-3 overflow-x-auto pb-1">
    {#each players as playerState, idx (playerState.player.id)}
      {@const isActive = idx === currentPlayerIndex && !gameFinished}
      <div
        class="flex-shrink-0 px-3 py-2 rounded-lg transition-all duration-300"
        style="background-color: {isActive ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)'}; {isActive
          ? 'outline: 1px solid rgba(255, 185, 95, 0.2);'
          : 'opacity: 0.6;'}"
      >
        <div class="flex items-center gap-1.5">
          <p class="text-[9px] uppercase tracking-widest font-bold"
            style="color: {isActive ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'};">
            P{idx + 1}
          </p>
          {#if isActive}
            <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background-color: var(--hud-primary);"></span>
          {/if}
        </div>
        <p class="text-sm font-extrabold truncate max-w-[80px]" style="color: var(--hud-on-surface);">{playerState.player.name}</p>
        <p class="text-lg font-extrabold tabular-nums" style="color: {isActive ? 'var(--hud-primary)' : 'var(--hud-on-surface-variant)'};">
          {playerState.totalPoints}
        </p>
      </div>
    {/each}
  </div>

  <!-- Main layout: 12-column grid -->
  <div class="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 min-h-0 items-start">

    <!-- LEFT SIDE PLAYERS (desktop only) -->
    <div class="hidden lg:flex lg:col-span-4 flex-col gap-8 lg:gap-12">
      {#each leftPlayers as playerState, idx (playerState.player.id)}
        {@render playerCardLeft(playerState, idx, idx + 1)}
      {/each}
    </div>

    <!-- CENTRAL TARGET TABLE -->
    <div class="lg:col-span-4 flex flex-col gap-2">
      <!-- Column Headers -->
      <div class="grid grid-cols-5 text-center mb-2 lg:mb-4">
        <div class="col-span-2">
          <span class="text-[10px] font-black tracking-[0.3em] uppercase"
            style="color: var(--hud-on-surface-variant);">
            {#if leftPlayers.length === 1}P1{:else if leftPlayers.length === 2}P1 / P2{:else}Left{/if}
          </span>
        </div>
        <div class="col-span-1">
          <span class="text-[10px] font-black tracking-[0.3em] uppercase italic"
            style="color: var(--hud-primary);">Target</span>
        </div>
        <div class="col-span-2">
          <span class="text-[10px] font-black tracking-[0.3em] uppercase"
            style="color: var(--hud-on-surface-variant);">
            {#if rightPlayers.length === 1}P{midPoint + 1}{:else if rightPlayers.length === 2}P{midPoint + 1} / P{midPoint + 2}{:else if rightPlayers.length === 0}&mdash;{:else}Right{/if}
          </span>
        </div>
      </div>

      <!-- Scoring Rows -->
      {#each DISPLAY_NUMBERS as num, rowIdx}
        {@const allClosed = isNumberClosedByAll(num)}
        {@const isBull = num === 25}
        <div
          data-testid="cricket-number-{isBull ? 'Bull' : num}"
          class="grid grid-cols-5 items-center rounded-lg transition-colors {isBull ? 'mt-2' : ''}"
          style="height: {isBull ? '5rem' : '4.5rem'}; background-color: {isBull
            ? 'rgba(255, 185, 95, 0.06)'
            : rowIdx % 2 === 0
              ? 'rgba(19, 27, 46, 0.5)'
              : 'rgba(19, 27, 46, 0.3)'}; {allClosed ? 'opacity: 0.4;' : ''}"
        >
          <!-- Left side marks -->
          <div class="col-span-2 flex justify-center gap-6 lg:gap-8 px-4">
            {#each leftPlayers as playerState (playerState.player.id)}
              {@const score = getPlayerScore(playerState, num)}
              {@render markDisplay(score.marks)}
            {/each}
          </div>

          <!-- Center target number (circular badge) -->
          <div class="col-span-1 flex justify-center">
            <div class="flex items-center justify-center rounded-full"
              style="width: {isBull ? '3.5rem' : '3rem'}; height: {isBull ? '3.5rem' : '3rem'}; border: {isBull ? '3px' : '2px'} solid {isBull
                ? 'var(--hud-primary)'
                : 'rgba(255, 185, 95, 0.15)'}; background-color: var(--hud-surface-container); {isBull
                ? 'box-shadow: 0 0 20px rgba(255, 185, 95, 0.2);'
                : ''}">
              <span class="font-black" style="font-size: {isBull ? '0.85rem' : '1.25rem'}; color: {isBull
                ? 'var(--hud-primary)'
                : 'var(--hud-on-surface-variant)'};">
                {isBull ? 'BULL' : num}
              </span>
            </div>
          </div>

          <!-- Right side marks -->
          <div class="col-span-2 flex justify-center gap-6 lg:gap-8 px-4">
            {#if rightPlayers.length > 0}
              {#each rightPlayers as playerState (playerState.player.id)}
                {@const score = getPlayerScore(playerState, num)}
                {@render markDisplay(score.marks)}
              {/each}
            {:else}
              <span style="color: rgba(218, 226, 253, 0.05);">&mdash;</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <!-- RIGHT SIDE PLAYERS (desktop only) -->
    <div class="hidden lg:flex lg:col-span-4 flex-col gap-8 lg:gap-12">
      {#each rightPlayers as playerState, idx (playerState.player.id)}
        {@render playerCardRight(playerState, midPoint + idx, midPoint + idx + 1)}
      {/each}

      <!-- Empty placeholder when only 1 or 2 players -->
      {#if rightPlayers.length === 0}
        <div></div>
      {/if}
    </div>
  </div>
</div>
