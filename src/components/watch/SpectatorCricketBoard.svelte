<script lang="ts">
  import type {
    SerializedCricketGameState,
    SerializedPlayerCricketState,
    SerializedSegment,
  } from '@/services/socketTypes';

  const CRICKET_NUMBERS = [15, 16, 17, 18, 19, 20, 25] as const;

  interface Props {
    gameState: SerializedCricketGameState;
    currentTurnHits: SerializedSegment[];
    lastHit: SerializedSegment | null;
  }

  let { gameState, currentTurnHits, lastHit }: Props = $props();

  function getMarkSymbol(marks: number): string {
    if (marks === 0) return '';
    if (marks === 1) return '/';
    if (marks === 2) return 'X';
    if (marks >= 3) return '\u2297'; // ⊗
    return '';
  }

  function calculateMPR(player: SerializedPlayerCricketState): number {
    if (player.roundsPlayed === 0) return 0;
    return Math.round((player.totalMarks / player.roundsPlayed) * 100) / 100;
  }

  function isNumberClosedByAll(num: number): boolean {
    return gameState.players.every((p) => (p.scores[num]?.marks ?? 0) >= 3);
  }

  let midPoint = $derived(Math.ceil(gameState.players.length / 2));
  let leftPlayers = $derived(gameState.players.slice(0, midPoint));
  let rightPlayers = $derived(gameState.players.slice(midPoint));
  let currentPlayer = $derived(gameState.players[gameState.currentPlayerIndex]);
</script>

<div class="flex flex-col gap-3 h-full">
  <!-- Game info bar -->
  <div class="flex items-center justify-between px-1">
    <div class="flex items-center gap-2">
      <span
        class="text-xs font-semibold uppercase tracking-widest"
        style="color: var(--hud-tertiary)"
      >
        {gameState.mode === 'cutthroat' ? 'Cricket Cut Throat' : 'Cricket Standard'}
      </span>
    </div>
    <div
      class="text-xs font-semibold uppercase tracking-widest rounded-lg px-3 py-1"
      style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12)"
    >
      Round {gameState.currentRound}{gameState.maxRounds > 0 ? ` / ${gameState.maxRounds}` : ''}
    </div>
  </div>

  <!-- Game over banner -->
  {#if gameState.gameFinished && gameState.winner}
    <div
      class="rounded-xl p-4 text-center animate-scale-in"
      style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: var(--hud-on-primary)"
    >
      <div class="text-3xl font-black tracking-tight">{gameState.winner.name} won!</div>
    </div>
  {/if}

  <!-- Current player + dart count -->
  {#if !gameState.gameFinished}
    <div
      class="rounded-xl p-3 flex items-center justify-between animate-glow-pulse"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur))"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-lg flex items-center justify-center"
          style="background-color: var(--hud-surface-container-high)"
        >
          <span class="text-xs font-black" style="color: var(--hud-primary)">&#x25B6;</span>
        </div>
        <div>
          <div
            class="text-xs font-semibold uppercase tracking-widest"
            style="color: var(--hud-tertiary)"
          >
            Current Player
          </div>
          <div
            class="text-base font-bold"
            style="color: var(--hud-primary)"
          >
            {currentPlayer?.player.name}
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <!-- Current turn hits -->
        {#if currentTurnHits.length > 0}
          <div class="flex gap-1.5">
            {#each currentTurnHits as hit}
              <span
                class="px-2.5 py-1 rounded-lg text-xs font-bold"
                style="background-color: var(--hud-surface-container-high); color: var(--hud-primary)"
              >
                {hit.ShortName}
              </span>
            {/each}
          </div>
        {/if}
        <!-- Dart dots -->
        <div class="flex gap-1.5">
          {#each [0, 1, 2] as i}
            <div
              class="w-3 h-3 rounded-full transition-all duration-300"
              style="background-color: {i < gameState.dartsThrown ? 'var(--hud-primary)' : 'var(--hud-surface-container-high)'}; box-shadow: {i < gameState.dartsThrown ? '0 1px 3px rgba(255, 185, 95, 0.3)' : 'none'}"
            ></div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Scoreboard -->
  <div
    class="rounded-xl shadow-lg flex-1 overflow-auto"
    style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur))"
  >
    <table class="w-full border-collapse">
      <thead
        class="sticky top-0 z-10"
        style="background-color: var(--hud-surface-container)"
      >
        <tr>
          {#each leftPlayers as p}
            {@const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex}
            <th
              class="p-2.5 text-center font-bold text-sm min-w-[70px] transition-all"
              style="color: {isCurrentPlayer && !gameState.gameFinished ? 'var(--hud-primary)' : 'var(--hud-on-surface)'}"
            >
              <div class="flex flex-col items-center gap-1">
                <span>{p.player.name}</span>
                {#if isCurrentPlayer && !gameState.gameFinished}
                  <div
                    class="w-full h-0.5 rounded-full"
                    style="background-color: var(--hud-primary)"
                  ></div>
                {/if}
              </div>
            </th>
          {/each}
          <th
            class="p-2.5 text-center font-bold text-base min-w-[50px]"
            style="color: var(--hud-on-surface); outline: 1px solid rgba(69, 70, 77, 0.12)"
          ></th>
          {#each rightPlayers as p}
            {@const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex}
            <th
              class="p-2.5 text-center font-bold text-sm min-w-[70px] transition-all"
              style="color: {isCurrentPlayer && !gameState.gameFinished ? 'var(--hud-primary)' : 'var(--hud-on-surface)'}"
            >
              <div class="flex flex-col items-center gap-1">
                <span>{p.player.name}</span>
                {#if isCurrentPlayer && !gameState.gameFinished}
                  <div
                    class="w-full h-0.5 rounded-full"
                    style="background-color: var(--hud-primary)"
                  ></div>
                {/if}
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each CRICKET_NUMBERS as num}
          {@const allClosed = isNumberClosedByAll(num)}
          <tr
            class="transition-all {allClosed ? 'opacity-40' : ''}"
            style="outline: 1px solid rgba(69, 70, 77, 0.12)"
          >
            {#each leftPlayers as p}
              {@const score = p.scores[num]}
              {@const marks = score?.marks ?? 0}
              {@const symbol = getMarkSymbol(marks)}
              {@const isClosed = marks >= 3}
              <td class="p-2 text-center">
                <div
                  class="text-2xl font-bold transition-all"
                  style="color: {isClosed
                    ? allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)'
                    : marks > 0 ? 'var(--hud-primary)' : 'var(--hud-on-tertiary-container)'}"
                >
                  {symbol || '\u2013'}
                </div>
              </td>
            {/each}
            <td
              class="p-2 text-center font-black text-lg {allClosed ? 'line-through' : ''}"
              style="background-color: var(--hud-surface-container-low); color: {allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-on-surface)'}; outline: 1px solid rgba(69, 70, 77, 0.12)"
            >
              {num === 25 ? 'BULL' : num}
            </td>
            {#each rightPlayers as p}
              {@const score = p.scores[num]}
              {@const marks = score?.marks ?? 0}
              {@const symbol = getMarkSymbol(marks)}
              {@const isClosed = marks >= 3}
              <td class="p-2 text-center">
                <div
                  class="text-2xl font-bold transition-all"
                  style="color: {isClosed
                    ? allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)'
                    : marks > 0 ? 'var(--hud-primary)' : 'var(--hud-on-tertiary-container)'}"
                >
                  {symbol || '\u2013'}
                </div>
              </td>
            {/each}
          </tr>
        {/each}
        <!-- Points / MPR row -->
        <tr style="background-color: var(--hud-surface-container-low)">
          {#each leftPlayers as p}
            <td class="p-3 text-center">
              <div
                class="text-xl font-black"
                style="color: var(--hud-on-surface)"
              >
                {p.totalPoints}
              </div>
              <div
                class="text-[10px] font-semibold uppercase tracking-widest"
                style="color: var(--hud-tertiary)"
              >
                MPR {calculateMPR(p)}
              </div>
            </td>
          {/each}
          <td
            class="p-3 text-center font-semibold text-xs uppercase tracking-widest"
            style="color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12)"
          >
            PTS
          </td>
          {#each rightPlayers as p}
            <td class="p-3 text-center">
              <div
                class="text-xl font-black"
                style="color: var(--hud-on-surface)"
              >
                {p.totalPoints}
              </div>
              <div
                class="text-[10px] font-semibold uppercase tracking-widest"
                style="color: var(--hud-tertiary)"
              >
                MPR {calculateMPR(p)}
              </div>
            </td>
          {/each}
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Last hit indicator -->
  {#if lastHit}
    <div class="text-center animate-fade-in">
      <span
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-primary); outline: 1px solid rgba(69, 70, 77, 0.12)"
      >
        <span
          class="w-2 h-2 rounded-full animate-pulse"
          style="background-color: var(--hud-primary)"
        ></span>
        {lastHit.LongName} ({lastHit.Value})
      </span>
    </div>
  {/if}
</div>
