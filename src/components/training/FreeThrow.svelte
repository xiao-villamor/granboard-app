<script lang="ts">
  import { onMount } from 'svelte';
  import type { Segment } from '@/services/boardinfo';
  import {
    type FreeThrowState,
    createFreeThrowState,
    processFreeThrowHit,
    getFreeThrowStats,
  } from '@/services/training';
  import { Granboard } from '@/services/granboard';
  import { settings } from '@/stores/settings.svelte';
  import GlobalSettingsDialog from '@/components/shared/GlobalSettingsDialog.svelte';
  import Fa from 'svelte-fa';
  import {
    faArrowLeft,
    faGear,
    faCheck,
    faRotateRight,
  } from '@fortawesome/free-solid-svg-icons';

  let gameState = $state<FreeThrowState>(createFreeThrowState());
  let connectionState = $state<'disconnected' | 'connecting' | 'connected' | 'error'>('disconnected');
  let granboard = $state<Granboard | null>(null);

  function onSegmentHit(segment: Segment) {
    const hitId = `${Date.now()}-${Math.random()}`;
    gameState = processFreeThrowHit(gameState, segment, hitId);
  }

  function setupBoard(board: Granboard) {
    board.segmentHitCallback = onSegmentHit;
    board.onDisconnect = () => {
      connectionState = 'disconnected';
      granboard = null;
    };
    granboard = board;
    connectionState = 'connected';
  }

  onMount(() => {
    const tryAutoConnect = async () => {
      connectionState = 'connecting';
      const board = await Granboard.TryAutoConnect();
      if (board) {
        setupBoard(board);
      } else {
        connectionState = 'disconnected';
      }
    };
    tryAutoConnect();
  });

  async function connectToBoard() {
    connectionState = 'connecting';
    try {
      const board = await Granboard.ConnectToBoard();
      setupBoard(board);
    } catch (error) {
      console.error(error);
      connectionState = 'error';
    }
  }

  let stats = $derived(getFreeThrowStats(gameState));
  let lastHits = $derived(gameState.hits.slice(-10).reverse());

  function handleReset() {
    gameState = createFreeThrowState();
  }
</script>

<main
  class="min-h-screen flex flex-col p-4 gap-4"
  style="background-color: var(--hud-background);"
>
  <!-- Header -->
  <div class="flex justify-between items-center">
    <div class="flex items-center gap-3">
      <button
        data-testid="back-button"
        onclick={() => { window.location.href = '/training'; }}
        class="px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <Fa icon={faArrowLeft} /> Back
      </button>
      <h1
        class="text-2xl font-bold tracking-wider"
        style="color: var(--hud-on-surface);"
      >
        Free Throw
      </h1>
    </div>
    <div class="flex gap-3">
      <button
        onclick={handleReset}
        class="px-4 py-2 rounded-lg transition-all text-sm font-medium flex items-center gap-2"
        style="background-color: var(--hud-game-training); color: #1a1a1a;"
      >
        <Fa icon={faRotateRight} /> Reset
      </button>
      <button
        data-testid="settings-button"
        onclick={() => settings.openDialog()}
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <Fa icon={faGear} /> Settings
      </button>
      {#if connectionState === 'connected'}
        <div
          class="px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
          style="background-color: var(--hud-secondary); color: #1a1a1a;"
        >
          <Fa icon={faCheck} /> Connected
        </div>
      {:else}
        <button
          data-testid="connect-button"
          onclick={connectToBoard}
          disabled={connectionState === 'connecting'}
          class="px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium disabled:opacity-50 transition-all"
          style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: #1a1a1a;"
        >
          {connectionState === 'connecting'
            ? 'Connecting...'
            : connectionState === 'error'
            ? 'Error - Retry'
            : 'Connect Granboard'}
        </button>
      {/if}
    </div>
  </div>

  <!-- Stats Grid -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div
        class="text-3xl font-bold"
        style="color: var(--hud-game-training);"
      >
        {gameState.totalDarts}
      </div>
      <div
        class="text-xs uppercase tracking-widest font-semibold"
        style="color: var(--hud-on-tertiary-container);"
      >
        Darts
      </div>
    </div>
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div
        class="text-3xl font-bold"
        style="color: var(--hud-primary);"
      >
        {gameState.totalPoints}
      </div>
      <div
        class="text-xs uppercase tracking-widest font-semibold"
        style="color: var(--hud-on-tertiary-container);"
      >
        Total Points
      </div>
    </div>
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div
        class="text-3xl font-bold"
        style="color: var(--hud-secondary);"
      >
        {stats.ppd}
      </div>
      <div
        class="text-xs uppercase tracking-widest font-semibold"
        style="color: var(--hud-on-tertiary-container);"
      >
        PPD
      </div>
    </div>
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div
        class="text-3xl font-bold"
        style="color: var(--hud-secondary);"
      >
        {stats.hitRate}%
      </div>
      <div
        class="text-xs uppercase tracking-widest font-semibold"
        style="color: var(--hud-on-tertiary-container);"
      >
        Hit Rate
      </div>
    </div>
  </div>

  <!-- Breakdown row -->
  <div class="grid grid-cols-3 md:grid-cols-6 gap-3">
    <div
      class="rounded-lg p-3 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-xl font-bold" style="color: var(--hud-on-surface);">
        {gameState.singles}
      </div>
      <div class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-on-tertiary-container);">
        Singles
      </div>
    </div>
    <div
      class="rounded-lg p-3 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-xl font-bold" style="color: var(--hud-secondary);">
        {gameState.doubles}
      </div>
      <div class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-on-tertiary-container);">
        Doubles
      </div>
    </div>
    <div
      class="rounded-lg p-3 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-xl font-bold" style="color: var(--hud-error);">
        {gameState.triples}
      </div>
      <div class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-on-tertiary-container);">
        Triples
      </div>
    </div>
    <div
      class="rounded-lg p-3 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-xl font-bold" style="color: var(--hud-primary);">
        {gameState.bullseyes}
      </div>
      <div class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-on-tertiary-container);">
        Bull
      </div>
    </div>
    <div
      class="rounded-lg p-3 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-xl font-bold" style="color: var(--hud-primary);">
        {gameState.doubleBulls}
      </div>
      <div class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-on-tertiary-container);">
        D.Bull
      </div>
    </div>
    <div
      class="rounded-lg p-3 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-xl font-bold" style="color: var(--hud-on-tertiary-container);">
        {gameState.misses}
      </div>
      <div class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-on-tertiary-container);">
        Misses
      </div>
    </div>
  </div>

  <!-- Recent hits -->
  <div
    class="rounded-xl p-4 flex-1"
    style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12);"
  >
    <h3
      class="text-lg font-bold mb-3"
      style="color: var(--hud-on-surface);"
    >
      Recent Hits
    </h3>
    {#if lastHits.length === 0}
      <p
        class="text-center py-8"
        style="color: var(--hud-tertiary);"
      >
        Waiting for darts...
      </p>
    {:else}
      <div class="flex flex-wrap gap-2">
        {#each lastHits as hit, i}
          <div
            class="px-3 py-2 rounded-lg text-sm font-bold"
            style={
              hit.value === 0
                ? 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-tertiary-container);'
                : hit.segment.Type === 3
                ? 'background-color: color-mix(in srgb, var(--hud-error-container) 40%, transparent); color: var(--hud-error);'
                : hit.segment.Type === 2
                ? 'background-color: color-mix(in srgb, var(--hud-secondary) 15%, transparent); color: var(--hud-secondary);'
                : 'background-color: var(--hud-surface-container-high); color: var(--hud-on-surface);'
            }
          >
            {hit.segment.ShortName} <span class="text-xs opacity-70">({hit.value})</span>
          </div>
        {/each}
      </div>
    {/if}
  </div>

  <!-- Most hit section -->
  {#if stats.mostHitSection > 0}
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <span
        class="text-sm"
        style="color: var(--hud-tertiary);"
      >
        Most Hit:
      </span>
      {' '}
      <span
        class="text-xl font-bold"
        style="color: var(--hud-primary);"
      >
        {stats.mostHitSection === 25 ? 'BULL' : stats.mostHitSection}
      </span>
      {' '}
      <span
        class="text-sm"
        style="color: var(--hud-tertiary);"
      >
        ({stats.mostHitCount}x)
      </span>
    </div>
  {/if}
</main>

<GlobalSettingsDialog />
