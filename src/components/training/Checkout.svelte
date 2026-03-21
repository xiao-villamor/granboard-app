<script lang="ts">
  import { onMount } from 'svelte';
  import type { Segment } from '@/services/boardinfo';
  import {
    type CheckoutPracticeState,
    createCheckoutPracticeState,
    processCheckoutHit,
    getCheckoutPracticeStats,
    CHECKOUT_SCORES,
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

  let startingScore = $state(101);
  let doubleOut = $state(true);
  let gameState = $state<CheckoutPracticeState>(createCheckoutPracticeState(101, true));
  let connectionState = $state<'disconnected' | 'connecting' | 'connected' | 'error'>('disconnected');
  let granboard = $state<Granboard | null>(null);

  function onSegmentHit(segment: Segment) {
    const hitId = `${Date.now()}-${Math.random()}`;
    gameState = processCheckoutHit(gameState, segment, hitId);
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

  let stats = $derived(getCheckoutPracticeStats(gameState));

  function handleReset() {
    gameState = createCheckoutPracticeState(startingScore, doubleOut);
  }

  function handleChangeScore(score: number) {
    startingScore = score;
    gameState = createCheckoutPracticeState(score, doubleOut);
  }

  function handleToggleDoubleOut() {
    doubleOut = !doubleOut;
    gameState = createCheckoutPracticeState(startingScore, doubleOut);
  }

  // Group checkout scores for display (static data, no reactivity needed)
  const highScores = CHECKOUT_SCORES.filter((s) => s >= 150);
  const midScores = CHECKOUT_SCORES.filter((s) => s >= 100 && s < 150);
  const lowScores = CHECKOUT_SCORES.filter((s) => s < 100);
  let recentAttempts = $derived([...gameState.attempts].reverse().slice(0, 10));
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
        class="px-3 py-2 rounded-lg transition-all flex items-center gap-2"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-on-surface); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <Fa icon={faArrowLeft} /> Back
      </button>
      <h1
        class="text-2xl font-bold tracking-wider"
        style="color: var(--hud-on-surface);"
      >
        Checkout
      </h1>
    </div>
    <div class="flex gap-3">
      <button
        onclick={handleReset}
        class="px-4 py-2 rounded-lg transition-all text-sm font-medium flex items-center gap-2"
        style="background-color: var(--hud-primary); color: var(--hud-on-primary);"
      >
        <Fa icon={faRotateRight} /> Reset
      </button>
      <button
        data-testid="settings-button"
        onclick={() => settings.openDialog()}
        class="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-on-surface); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <Fa icon={faGear} /> Settings
      </button>
      {#if connectionState === 'connected'}
        <div
          class="px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
          style="background-color: var(--hud-secondary); color: var(--hud-on-secondary);"
        >
          <Fa icon={faCheck} /> Connected
        </div>
      {:else}
        <button
          data-testid="connect-button"
          onclick={connectToBoard}
          disabled={connectionState === 'connecting'}
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50"
          style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: var(--hud-on-primary);"
        >
          {connectionState === 'connecting'
            ? 'Connecting...'
            : connectionState === 'error'
            ? 'Error — tap to retry'
            : 'Connect GranBoard'}
        </button>
      {/if}
    </div>
  </div>

  <!-- Score selector (only when no attempts yet) -->
  {#if gameState.totalAttempts === 0 && gameState.currentDarts.length === 0}
    <div
      class="rounded-xl p-4"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <h3
        class="text-sm font-bold mb-3 uppercase"
        style="color: var(--hud-on-tertiary-container);"
      >
        Select a score
      </h3>

      <!-- Double out toggle -->
      <label
        class="flex items-center gap-3 mb-4 p-3 rounded-lg cursor-pointer"
        style="background-color: var(--hud-surface-container-low);"
      >
        <input
          type="checkbox"
          checked={doubleOut}
          oninput={handleToggleDoubleOut}
          class="w-5 h-5 rounded"
          style="accent-color: var(--hud-primary);"
        />
        <span
          class="font-medium"
          style="color: var(--hud-on-surface);"
        >
          Double Out
        </span>
      </label>

      <!-- High scores -->
      <div class="mb-2">
        <span
          class="text-xs"
          style="color: var(--hud-on-tertiary-container);"
        >
          High (170–100)
        </span>
        <div class="flex flex-wrap gap-2 mt-1">
          {#each highScores as score}
            <button
              onclick={() => handleChangeScore(score)}
              class="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
              style={startingScore === score
                ? 'background-color: var(--hud-primary); color: var(--hud-on-primary);'
                : 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);'
              }
            >
              {score}
            </button>
          {/each}
        </div>
      </div>

      <!-- Mid scores -->
      <div class="mb-2">
        <span
          class="text-xs"
          style="color: var(--hud-on-tertiary-container);"
        >
          Mid (99–60)
        </span>
        <div class="flex flex-wrap gap-2 mt-1">
          {#each midScores as score}
            <button
              onclick={() => handleChangeScore(score)}
              class="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
              style={startingScore === score
                ? 'background-color: var(--hud-primary); color: var(--hud-on-primary);'
                : 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);'
              }
            >
              {score}
            </button>
          {/each}
        </div>
      </div>

      <!-- Low scores -->
      <div>
        <span
          class="text-xs"
          style="color: var(--hud-on-tertiary-container);"
        >
          Low (59–2)
        </span>
        <div class="flex flex-wrap gap-2 mt-1">
          {#each lowScores as score}
            <button
              onclick={() => handleChangeScore(score)}
              class="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
              style={startingScore === score
                ? 'background-color: var(--hud-primary); color: var(--hud-on-primary);'
                : 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);'
              }
            >
              {score}
            </button>
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Current checkout display -->
  <div
    class="rounded-2xl p-6 text-center shadow-2xl"
    style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%);"
  >
    <div
      class="text-sm uppercase tracking-wider mb-1"
      style="color: var(--hud-on-primary); opacity: 0.8;"
    >
      Remaining
    </div>
    <div
      class="text-8xl font-black mb-2"
      style="color: var(--hud-on-primary);"
    >
      {gameState.currentScore}
    </div>
    {#if gameState.suggestion}
      <div class="text-lg">
        <span
          class="text-sm"
          style="color: var(--hud-on-primary); opacity: 0.6;"
        >
          Suggestion:
        </span>
        {' '}
        <span
          class="font-bold"
          style="color: var(--hud-on-primary);"
        >
          {gameState.suggestion}
        </span>
      </div>
    {/if}
    <div
      class="text-sm mt-2"
      style="color: var(--hud-on-primary); opacity: 0.7;"
    >
      {gameState.currentDarts.length === 1 ? '1 dart thrown' : `${gameState.currentDarts.length} darts thrown`}
      {#if doubleOut}
        <span class="ml-2">(Double Out)</span>
      {/if}
    </div>
  </div>

  <!-- Current darts in this attempt -->
  {#if gameState.currentDarts.length > 0}
    <div
      class="rounded-xl p-4"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <h3
        class="text-sm font-bold mb-2 uppercase"
        style="color: var(--hud-on-tertiary-container);"
      >
        Current Attempt
      </h3>
      <div class="flex gap-2">
        {#each gameState.currentDarts as hit}
          <div
            class="px-4 py-2 rounded-lg font-bold"
            style="background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);"
          >
            {hit.segment.ShortName} <span class="text-xs" style="opacity: 0.7;">({hit.value})</span>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-3xl font-bold" style="color: var(--hud-secondary);">
        {stats.successRate}%
      </div>
      <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
        Success Rate
      </div>
    </div>
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-3xl font-bold" style="color: var(--hud-primary);">
        {stats.successfulCheckouts}
      </div>
      <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
        Checkouts
      </div>
    </div>
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-3xl font-bold" style="color: var(--hud-game-training);">
        {stats.totalAttempts}
      </div>
      <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
        Attempts
      </div>
    </div>
    <div
      class="rounded-xl p-4 text-center"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <div class="text-3xl font-bold" style="color: var(--hud-secondary);">
        {stats.avgDartsOnSuccess || '-'}
      </div>
      <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
        Avg Darts
      </div>
    </div>
  </div>

  <!-- Recent attempts -->
  {#if gameState.attempts.length > 0}
    <div
      class="rounded-xl p-4 flex-1"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <h3
        class="text-lg font-bold mb-3"
        style="color: var(--hud-on-surface);"
      >
        Recent Attempts
      </h3>
      <div class="space-y-2">
        {#each recentAttempts as attempt}
          <div
            class="flex items-center justify-between p-3 rounded-lg"
            style="background-color: {attempt.success ? 'rgba(68, 226, 205, 0.1)' : 'rgba(255, 180, 171, 0.1)'};"
          >
            <div class="flex gap-1">
              {#each attempt.darts as d}
                <span
                  class="px-2 py-1 rounded text-xs font-bold"
                  style={attempt.success
                    ? 'background-color: rgba(68, 226, 205, 0.2); color: var(--hud-secondary);'
                    : 'background-color: rgba(147, 0, 10, 0.4); color: var(--hud-error);'
                  }
                >
                  {d.segment.ShortName}
                </span>
              {/each}
            </div>
            <span
              class="font-bold text-sm"
              style="color: {attempt.success ? 'var(--hud-secondary)' : 'var(--hud-error)'};"
            >
              {attempt.success ? 'Success' : 'Bust'}
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</main>

<GlobalSettingsDialog />
