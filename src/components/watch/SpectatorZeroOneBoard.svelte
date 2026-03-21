<script lang="ts">
  import type {
    SerializedZeroOneGameState,
    SerializedSegment,
  } from '@/services/socketTypes';

  interface Props {
    gameState: SerializedZeroOneGameState;
    currentTurnHits: SerializedSegment[];
    lastHit: SerializedSegment | null;
  }

  let { gameState, currentTurnHits, lastHit }: Props = $props();

  function calculatePPD(player: { dartsThrown: number; totalPointsScored: number }): number {
    if (player.dartsThrown === 0) return 0;
    return Math.round((player.totalPointsScored / player.dartsThrown) * 100) / 100;
  }

  function calculateAverage(player: { roundsPlayed: number; totalPointsScored: number }): number {
    if (player.roundsPlayed === 0) return 0;
    return Math.round((player.totalPointsScored / player.roundsPlayed) * 100) / 100;
  }

  let currentPlayer = $derived(gameState.players[gameState.currentPlayerIndex]);

  function getPlayerStyle(isWinner: boolean, isCurrentPlayer: boolean): string {
    if (isWinner) {
      return 'background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid var(--hud-primary); box-shadow: 0 4px 24px color-mix(in srgb, var(--hud-primary) 10%, transparent)';
    }
    if (isCurrentPlayer && !gameState.gameFinished) {
      return 'background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid color-mix(in srgb, var(--hud-primary) 40%, transparent); box-shadow: 0 4px 24px color-mix(in srgb, var(--hud-primary) 10%, transparent)';
    }
    return 'background-color: var(--hud-surface-container-low); outline: 1px solid rgba(69, 70, 77, 0.12)';
  }

  function getNameColor(isWinner: boolean, isCurrentPlayer: boolean): string {
    if (isWinner) return 'var(--hud-primary)';
    if (isCurrentPlayer && !gameState.gameFinished) return 'var(--hud-primary)';
    return 'var(--hud-tertiary)';
  }

  function getScoreColor(isWinner: boolean, isCurrentPlayer: boolean): string {
    if (isWinner) return 'var(--hud-primary)';
    if (isCurrentPlayer && !gameState.gameFinished) return 'var(--hud-primary)';
    return 'var(--hud-on-surface)';
  }
</script>

<div class="flex flex-col gap-3 h-full">
  <!-- Game info bar -->
  <div class="flex items-center justify-between px-1">
    <div class="flex items-center gap-2">
      <span
        class="text-xs font-bold uppercase tracking-wider"
        style="color: var(--hud-tertiary)"
      >
        {gameState.mode} {gameState.doubleOut ? '(Double Out)' : ''}
      </span>
    </div>
    <div
      class="text-xs font-medium rounded-lg px-3 py-1"
      style="color: var(--hud-tertiary); background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
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
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12)"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-lg flex items-center justify-center"
          style="background-color: var(--hud-surface-container-high)"
        >
          <span style="color: var(--hud-primary)" class="text-xs font-black">&#x25B6;</span>
        </div>
        <div>
          <div
            class="text-xs"
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
                style="color: var(--hud-primary); background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
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
              style="background-color: {i < gameState.dartsThrown ? 'var(--hud-primary)' : 'var(--hud-surface-container-high)'}; box-shadow: {i < gameState.dartsThrown ? '0 0 6px color-mix(in srgb, var(--hud-primary) 30%, transparent)' : 'none'}"
            ></div>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Player scores grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 stagger-children">
    {#each gameState.players as player, idx}
      {@const isCurrentPlayer = idx === gameState.currentPlayerIndex}
      {@const ppd = calculatePPD(player)}
      {@const avg = calculateAverage(player)}
      {@const isWinner = gameState.gameFinished && player.score === 0}
      <div
        class="rounded-xl p-5 flex flex-col items-center justify-center transition-all animate-fade-in-up"
        style={getPlayerStyle(isWinner, isCurrentPlayer)}
      >
        <!-- Player name -->
        <div class="flex items-center gap-2 mb-3">
          {#if isCurrentPlayer && !gameState.gameFinished}
            <div
              class="w-2 h-2 rounded-full animate-live-dot"
              style="background-color: var(--hud-primary)"
            ></div>
          {/if}
          {#if isWinner}
            <span class="text-sm" style="color: var(--hud-primary)">&#9733;</span>
          {/if}
          <span
            class="text-sm font-bold uppercase tracking-wider"
            style="color: {getNameColor(isWinner, isCurrentPlayer)}"
          >
            {player.player.name}
          </span>
        </div>

        <!-- Big score -->
        <div
          class="text-7xl font-black tracking-tight mb-4 transition-all"
          style="color: {getScoreColor(isWinner, isCurrentPlayer)}"
        >
          {player.score}
        </div>

        <!-- Stats row -->
        <div class="flex gap-4 text-xs">
          <div class="flex flex-col items-center gap-0.5">
            <span
              class="text-[10px] uppercase tracking-wider"
              style="color: var(--hud-on-tertiary-container)"
            >
              PPD
            </span>
            <span
              class="text-sm font-bold"
              style="color: var(--hud-on-surface)"
            >
              {ppd.toFixed(2)}
            </span>
          </div>
          <div
            class="w-px h-6"
            style="background-color: var(--hud-surface-container-high)"
          ></div>
          <div class="flex flex-col items-center gap-0.5">
            <span
              class="text-[10px] uppercase tracking-wider"
              style="color: var(--hud-on-tertiary-container)"
            >
              Average
            </span>
            <span
              class="text-sm font-bold"
              style="color: var(--hud-on-surface)"
            >
              {avg.toFixed(2)}
            </span>
          </div>
          <div
            class="w-px h-6"
            style="background-color: var(--hud-surface-container-high)"
          ></div>
          <div class="flex flex-col items-center gap-0.5">
            <span
              class="text-[10px] uppercase tracking-wider"
              style="color: var(--hud-on-tertiary-container)"
            >
              Darts
            </span>
            <span
              class="text-sm font-bold"
              style="color: var(--hud-on-surface)"
            >
              {player.dartsThrown}
            </span>
          </div>
        </div>

        <!-- Busts indicator -->
        {#if player.busts > 0}
          <div
            class="mt-2 flex items-center gap-1.5 text-xs"
            style="color: var(--hud-error)"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              style="background-color: var(--hud-error)"
            ></span>
            <span class="font-medium">Busts: {player.busts}</span>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <!-- Last hit indicator -->
  {#if lastHit}
    <div class="text-center animate-fade-in">
      <span
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
        style="color: var(--hud-primary); background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
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
