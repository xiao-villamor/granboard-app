<script lang="ts">
  import { onMount } from 'svelte';
  import type { Segment } from '@/services/boardinfo';
  import {
    type TargetPracticeState,
    createTargetPracticeState,
    processTargetPracticeHit,
    getTargetPracticeStats,
    getTargetDisplayName,
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

  let totalTargets = $state(10);
  let gameState = $state<TargetPracticeState>(createTargetPracticeState(10));
  let connectionState = $state<'disconnected' | 'connecting' | 'connected' | 'error'>('disconnected');
  let granboard = $state<Granboard | null>(null);

  function onSegmentHit(segment: Segment) {
    const hitId = `${Date.now()}-${Math.random()}`;
    gameState = processTargetPracticeHit(gameState, segment, hitId);
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

  let stats = $derived(getTargetPracticeStats(gameState));
  let reversedHistory = $derived([...gameState.targetHistory].reverse());

  function handleReset() {
    gameState = createTargetPracticeState(totalTargets);
  }

  function handleChangeTargets(count: number) {
    totalTargets = count;
    gameState = createTargetPracticeState(count);
  }

  function dartsRemainingLabel(): string {
    const count = 3 - gameState.currentRoundDarts.length;
    return count === 1 ? '1 dart remaining' : `${count} darts remaining`;
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
        class="px-3 py-2 rounded-lg transition-all flex items-center gap-2"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-on-surface); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <Fa icon={faArrowLeft} /> Back
      </button>
      <h1
        class="text-2xl font-bold tracking-wider"
        style="color: var(--hud-on-surface);"
      >
        Target Practice
      </h1>
    </div>
    <div class="flex gap-3">
      <button
        onclick={handleReset}
        class="px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm font-medium flex items-center gap-2"
        style="background-color: var(--hud-secondary); color: #1a1a2e;"
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
          style="background-color: var(--hud-secondary); color: #1a1a2e;"
        >
          <Fa icon={faCheck} /> Connected
        </div>
      {:else}
        <button
          data-testid="connect-button"
          onclick={connectToBoard}
          disabled={connectionState === 'connecting'}
          class="px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium disabled:opacity-50 transition-all"
          style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: #1a1a2e;"
        >
          {connectionState === 'connecting'
            ? 'Connecting...'
            : connectionState === 'error'
            ? 'Reconnect'
            : 'Connect'}
        </button>
      {/if}
    </div>
  </div>

  <!-- Target count selector (only if session not started or finished) -->
  {#if gameState.totalDarts === 0}
    <div
      class="rounded-xl p-4"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <h3
        class="text-sm font-bold mb-2 uppercase"
        style="color: var(--hud-on-tertiary-container);"
      >
        Number of Targets
      </h3>
      <div class="flex gap-3">
        {#each [5, 10, 15, 20] as count}
          <button
            onclick={() => handleChangeTargets(count)}
            class="px-4 py-2 rounded-lg font-bold transition-all"
            style={totalTargets === count
              ? 'background-color: var(--hud-secondary); color: #1a1a2e;'
              : 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);'
            }
          >
            {count}
          </button>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Current target display -->
  {#if !gameState.sessionFinished}
    <div
      class="rounded-2xl p-8 text-center shadow-2xl"
      style="background: linear-gradient(135deg, var(--hud-secondary) 0%, #2a9d8f 100%); color: #1a1a2e;"
    >
      <div
        class="text-sm uppercase tracking-wider mb-2"
        style="color: rgba(26, 26, 46, 0.8);"
      >
        Aim for
      </div>
      <div class="text-8xl font-black mb-2" style="color: #1a1a2e;">
        {getTargetDisplayName(gameState.currentTarget)}
      </div>
      <div class="text-lg" style="color: rgba(26, 26, 46, 0.7);">
        {dartsRemainingLabel()}
      </div>
      <div class="text-sm mt-2" style="color: rgba(26, 26, 46, 0.7);">
        {gameState.targetsCompleted + 1} / {gameState.targetsTotal}
      </div>
    </div>
  {/if}

  <!-- Session finished banner -->
  {#if gameState.sessionFinished}
    <div
      class="rounded-2xl p-8 text-center shadow-2xl"
      style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: #1a1a2e;"
    >
      <h2 class="text-4xl font-bold mb-4" style="color: #1a1a2e;">
        Session Complete
      </h2>
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div>
          <div class="text-3xl font-bold" style="color: #1a1a2e;">{stats.accuracy}%</div>
          <div class="text-sm" style="color: rgba(26, 26, 46, 0.7);">Accuracy</div>
        </div>
        <div>
          <div class="text-3xl font-bold" style="color: #1a1a2e;">{stats.perfectRate}%</div>
          <div class="text-sm" style="color: rgba(26, 26, 46, 0.7);">Perfect Rate</div>
        </div>
        <div>
          <div class="text-3xl font-bold" style="color: #1a1a2e;">{stats.correctHits}</div>
          <div class="text-sm" style="color: rgba(26, 26, 46, 0.7);">Correct Hits</div>
        </div>
        <div>
          <div class="text-3xl font-bold" style="color: #1a1a2e;">{stats.totalDarts}</div>
          <div class="text-sm" style="color: rgba(26, 26, 46, 0.7);">Darts</div>
        </div>
      </div>
      <button
        onclick={handleReset}
        class="px-8 py-3 rounded-xl font-bold text-lg transition-all hover:opacity-90"
        style="background-color: var(--hud-surface-container-high); color: var(--hud-on-surface);"
      >
        Play Again
      </button>
    </div>
  {/if}

  <!-- Stats -->
  {#if !gameState.sessionFinished}
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        class="rounded-xl p-4 text-center"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <div class="text-3xl font-bold" style="color: var(--hud-secondary);">
          {stats.accuracy}%
        </div>
        <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
          Accuracy
        </div>
      </div>
      <div
        class="rounded-xl p-4 text-center"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <div class="text-3xl font-bold" style="color: var(--hud-secondary);">
          {stats.perfectRate}%
        </div>
        <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
          Perfect Rate
        </div>
      </div>
      <div
        class="rounded-xl p-4 text-center"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <div class="text-3xl font-bold" style="color: var(--hud-primary);">
          {stats.correctHits}/{stats.totalDarts}
        </div>
        <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
          Correct Hits
        </div>
      </div>
      <div
        class="rounded-xl p-4 text-center"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <div class="text-3xl font-bold" style="color: var(--hud-game-training);">
          {stats.targetsCompleted}/{gameState.targetsTotal}
        </div>
        <div class="text-xs uppercase" style="color: var(--hud-on-tertiary-container);">
          Targets
        </div>
      </div>
    </div>
  {/if}

  <!-- Current round darts -->
  {#if !gameState.sessionFinished && gameState.currentRoundDarts.length > 0}
    <div
      class="rounded-xl p-4"
      style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <h3
        class="text-sm font-bold mb-2 uppercase"
        style="color: var(--hud-on-tertiary-container);"
      >
        Current Darts
      </h3>
      <div class="flex gap-2">
        {#each gameState.currentRoundDarts as hit}
          {@const isCorrect = (hit.segment.Section as number) === gameState.currentTarget}
          <div
            class="px-4 py-2 rounded-lg font-bold"
            style={isCorrect
              ? 'background-color: rgba(68, 226, 205, 0.15); color: var(--hud-secondary);'
              : 'background-color: rgba(147, 0, 10, 0.4); color: var(--hud-error);'
            }
          >
            {hit.segment.ShortName}
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Target history -->
  {#if gameState.targetHistory.length > 0}
    <div
      class="rounded-xl p-4 flex-1"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <h3
        class="text-lg font-bold mb-3"
        style="color: var(--hud-on-surface);"
      >
        History
      </h3>
      <div class="space-y-2">
        {#each reversedHistory as entry}
          <div
            class="flex items-center justify-between p-3 rounded-lg"
            style="background-color: var(--hud-surface-container-low);"
          >
            <div class="flex items-center gap-3">
              <span
                class="font-bold w-12 text-center"
                style="color: var(--hud-secondary);"
              >
                {getTargetDisplayName(entry.target)}
              </span>
              <div class="flex gap-1">
                {#each entry.darts as d}
                  {@const isCorrect = (d.segment.Section as number) === entry.target}
                  <span
                    class="px-2 py-1 rounded text-xs font-bold"
                    style={isCorrect
                      ? 'background-color: rgba(68, 226, 205, 0.15); color: var(--hud-secondary);'
                      : 'background-color: rgba(147, 0, 10, 0.4); color: var(--hud-error);'
                    }
                  >
                    {d.segment.ShortName}
                  </span>
                {/each}
              </div>
            </div>
            <span class="font-bold" style="color: var(--hud-on-surface);">
              {entry.correctHits}/3
            </span>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</main>

<GlobalSettingsDialog />
