<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Fa from 'svelte-fa';
  import { faArrowLeft, faEye, faSpinner, faTriangleExclamation, faBullseye } from '@fortawesome/free-solid-svg-icons';
  import { createSpectator } from '@/stores/spectator.svelte';
  import SpectatorCricketBoard from './SpectatorCricketBoard.svelte';
  import SpectatorZeroOneBoard from './SpectatorZeroOneBoard.svelte';

  interface Props {
    code?: string;
  }

  let { code: codeProp = '' }: Props = $props();

  const code = (codeProp ?? '').toUpperCase();

  const spectator = createSpectator(code);

  function handleLeave() {
    spectator.leave();
    window.location.href = '/';
  }

  function handleMouseEnter(e: MouseEvent) {
    (e.currentTarget as HTMLElement).style.color = 'var(--hud-primary)';
  }

  function handleMouseLeave(e: MouseEvent) {
    (e.currentTarget as HTMLElement).style.color = 'var(--hud-on-surface)';
  }

  onMount(() => {
    spectator.connect();
  });

  onDestroy(() => {
    spectator.disconnect();
  });
</script>

{#if spectator.state === 'connecting'}
  <!-- Connecting State -->
  <main
    class="min-h-screen flex flex-col items-center justify-center px-8 gap-8"
    style="background-color: var(--hud-background)"
  >
    <div class="animate-fade-in-up text-center">
      <div
        class="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
      >
        <Fa
          icon={faSpinner}
          class="text-3xl animate-spin"
          style="color: var(--hud-primary)"
        />
      </div>
      <h1
        class="text-3xl font-bold mb-2"
        style="color: var(--hud-on-surface)"
      >
        Connecting...
      </h1>
      <p
        class="text-lg"
        style="color: var(--hud-tertiary)"
      >
        Joining room {code}...
      </p>
      <div
        class="mt-6 px-5 py-2.5 rounded-xl inline-block"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
      >
        <span
          class="font-mono font-bold text-xl tracking-widest"
          style="color: var(--hud-primary)"
        >
          {code}
        </span>
      </div>
    </div>
  </main>

{:else if spectator.state === 'error'}
  <!-- Error State -->
  <main
    class="min-h-screen flex flex-col items-center justify-center px-8 gap-6"
    style="background-color: var(--hud-background)"
  >
    <div class="animate-fade-in-up text-center max-w-md">
      <div
        class="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
        style="background-color: var(--hud-error-container); outline: 1px solid rgba(69, 70, 77, 0.12)"
      >
        <Fa
          icon={faTriangleExclamation}
          class="text-3xl"
          style="color: var(--hud-error)"
        />
      </div>
      <h1
        class="text-3xl font-bold mb-2"
        style="color: var(--hud-on-surface)"
      >
        Error
      </h1>
      <p
        class="text-base mb-8"
        style="color: var(--hud-tertiary)"
      >
        {spectator.error || 'Room not found'}
      </p>
      <button
        onclick={() => { window.location.href = '/'; }}
        class="px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
        style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: var(--hud-on-primary)"
      >
        Back to Home
      </button>
    </div>
  </main>

{:else if spectator.state === 'closed'}
  <!-- Room Closed State -->
  <main
    class="min-h-screen flex flex-col items-center justify-center px-8 gap-6"
    style="background-color: var(--hud-background)"
  >
    <div class="animate-fade-in-up text-center max-w-md">
      <div
        class="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
      >
        <span class="text-4xl">&#x1F44B;</span>
      </div>
      <h1
        class="text-3xl font-bold mb-2"
        style="color: var(--hud-on-surface)"
      >
        Room closed
      </h1>
      <p
        class="text-base mb-8"
        style="color: var(--hud-tertiary)"
      >
        Host disconnected
      </p>
      <button
        onclick={() => { window.location.href = '/'; }}
        class="px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
        style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: var(--hud-on-primary)"
      >
        Back to Home
      </button>
    </div>
  </main>

{:else if !spectator.gameState}
  <!-- Joined - Waiting for game state -->
  <main
    class="min-h-screen flex flex-col items-center justify-center px-8 gap-6"
    style="background-color: var(--hud-background)"
  >
    <div class="animate-fade-in-up text-center">
      <div
        class="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
        style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
      >
        <Fa
          icon={faBullseye}
          class="text-3xl animate-pulse"
          style="color: var(--hud-primary)"
        />
      </div>
      <h1
        class="text-3xl font-bold mb-2"
        style="color: var(--hud-on-surface)"
      >
        Waiting for game to start...
      </h1>
      <p
        class="text-base mb-6"
        style="color: var(--hud-tertiary)"
      >
        Host is setting up the game
      </p>
      <div class="flex items-center justify-center gap-6">
        <div
          class="flex items-center gap-2 text-sm rounded-xl px-4 py-2"
          style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12)"
        >
          <Fa icon={faEye} class="text-xs" />
          <span>{spectator.spectatorCount === 1 ? '1 spectator' : `${spectator.spectatorCount} spectators`}</span>
        </div>
        <div
          class="px-4 py-2 rounded-xl"
          style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
        >
          <span
            class="text-xs uppercase tracking-wider font-semibold"
            style="color: var(--hud-on-tertiary-container)"
          >
            Game Code
          </span>
          <span
            class="text-lg font-mono font-bold ml-2"
            style="color: var(--hud-primary)"
          >
            {code}
          </span>
        </div>
      </div>
    </div>
  </main>

{:else}
  <!-- Spectating Active Game -->
  <main
    class="h-screen flex flex-col px-4 py-3 gap-3 overflow-hidden"
    style="background-color: var(--hud-background)"
  >
    <!-- Header bar -->
    <div class="flex items-center justify-between flex-shrink-0 animate-fade-in-down">
      <div class="flex items-center gap-3">
        <button
          onclick={handleLeave}
          class="px-3 py-2 rounded-xl transition-all flex items-center gap-2 text-sm"
          style="background-color: var(--hud-surface-container-high); color: var(--hud-on-surface); outline: 1px solid rgba(69, 70, 77, 0.12)"
          onmouseenter={handleMouseEnter}
          onmouseleave={handleMouseLeave}
        >
          <Fa icon={faArrowLeft} class="text-xs" /> Back
        </button>
        <div
          class="px-3 py-2 rounded-xl flex items-center gap-2"
          style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12)"
        >
          <span
            class="text-xs uppercase tracking-wider font-semibold"
            style="color: var(--hud-on-tertiary-container)"
          >
            Game Code:
          </span>
          <span
            class="text-sm font-mono font-bold tracking-wider"
            style="color: var(--hud-primary)"
          >
            {code}
          </span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <div
          class="flex items-center gap-2 text-sm rounded-xl px-3 py-2"
          style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12)"
        >
          <Fa icon={faEye} class="text-xs" />
          <span class="font-medium">{spectator.spectatorCount}</span>
        </div>
        <div
          class="px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
          style="background-color: var(--hud-error-container); color: var(--hud-error)"
        >
          <span
            class="w-2 h-2 rounded-full animate-live-dot"
            style="background-color: var(--hud-error)"
          ></span>
          LIVE
        </div>
      </div>
    </div>

    <!-- Game content -->
    <div class="flex-1 min-h-0 animate-fade-in">
      {#if spectator.gameType === 'cricket'}
        <SpectatorCricketBoard
          gameState={spectator.gameState}
          currentTurnHits={spectator.currentTurnHits}
          lastHit={spectator.lastHit}
        />
      {:else if spectator.gameType === 'zeroone'}
        <SpectatorZeroOneBoard
          gameState={spectator.gameState}
          currentTurnHits={spectator.currentTurnHits}
          lastHit={spectator.lastHit}
        />
      {:else}
        <div class="flex items-center justify-center h-full">
          <p
            class="text-lg"
            style="color: var(--hud-tertiary)"
          >
            Unsupported game type
          </p>
        </div>
      {/if}
    </div>
  </main>
{/if}
