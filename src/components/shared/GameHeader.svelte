<script lang="ts">
  import Fa from 'svelte-fa';
  import { faBook, faGear, faLink, faTowerBroadcast, faShareNodes, faEye } from '@fortawesome/free-solid-svg-icons';
  import { CricketGameMode } from '@/services/cricket';
  import type { ZeroOneMode } from '@/services/zeroone';
  import type { ConnectionState } from '@/stores/granboardConnection.svelte';

  interface Props {
    gameMode: CricketGameMode | ZeroOneMode;
    connectionState: ConnectionState;
    onConnect: () => void;
    onShowLegend?: () => void;
    onShowSettings?: () => void;
    onShowShare?: () => void;
    /** Whether a live room is currently active */
    roomActive?: boolean;
    spectatorCount?: number;
  }

  let {
    gameMode,
    connectionState,
    onConnect,
    onShowLegend,
    onShowSettings,
    onShowShare,
    roomActive,
    spectatorCount,
  }: Props = $props();

  // Determine if it's a ZeroOne mode
  let isZeroOneMode = $derived(typeof gameMode === 'number' && (gameMode === 301 || gameMode === 501 || gameMode === 701));
</script>

<div
  class="flex justify-between items-center w-full border-none"
>
  <!-- Left: Branding + Mode -->
  <div class="flex items-center gap-3">
    <span
      class="text-lg md:text-xl font-bold tracking-[0.15em] uppercase font-headline"
      style="color: var(--hud-primary);"
    >
      {isZeroOneMode ? 'DART LOUNGE' : 'CRICKET'}
    </span>

    <!-- Mode chip (subtle) -->
    {#if isZeroOneMode}
      <span
        class="hidden sm:inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border"
        style="color: var(--hud-game-01); background-color: rgba(128, 155, 255, 0.08); border-color: rgba(128, 155, 255, 0.2); letter-spacing: 0.04em;"
      >
        <span style="color: rgba(128, 155, 255, 0.45); font-size: 0.6rem;">&#x25B8;</span>
        {gameMode}
      </span>
    {:else}
      <span
        class="hidden sm:inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border"
        style="color: {gameMode === CricketGameMode.CutThroat
          ? 'var(--hud-error)'
          : 'var(--hud-game-cricket)'}; background-color: {gameMode === CricketGameMode.CutThroat
          ? 'rgba(255, 180, 171, 0.08)'
          : 'rgba(92, 253, 128, 0.08)'}; border-color: {gameMode === CricketGameMode.CutThroat
          ? 'rgba(255, 180, 171, 0.2)'
          : 'rgba(92, 253, 128, 0.2)'}; letter-spacing: 0.04em;"
      >
        <span style="opacity: 0.45; font-size: 0.6rem;">&#x25B8;</span>
        {gameMode === CricketGameMode.CutThroat ? 'Cut-Throat' : 'Standard'}
      </span>
    {/if}
  </div>

  <!-- Right: Actions -->
  <div class="flex gap-4 md:gap-6 items-center">
    <!-- Bluetooth Status Pill -->
    {#if connectionState === 'connected'}
      <div
        data-testid="connection-status"
        class="flex items-center gap-2 px-4 py-1.5 rounded-full border"
        style="background-color: rgba(255, 185, 95, 0.08); color: var(--hud-primary); border-color: rgba(255, 185, 95, 0.2);"
      >
        <span
          class="w-1.5 h-1.5 rounded-full animate-live-dot"
          style="background-color: var(--hud-primary);"
        ></span>
        <span class="text-[10px] font-bold tracking-widest uppercase">Board Connected</span>
      </div>
    {:else}
      <button
        data-testid="connect-button"
        onclick={onConnect}
        disabled={connectionState === 'connecting'}
        class="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hud-gradient-cta"
      >
        <Fa icon={faLink} class="w-3 h-3" />
        {connectionState === 'connecting'
          ? 'Connecting...'
          : connectionState === 'error'
            ? 'Retry'
            : 'Connect'}
      </button>
    {/if}

    <!-- Icon Buttons -->
    {#if onShowShare}
      <button
        data-testid="share-button"
        onclick={onShowShare}
        class="transition-colors duration-300 active:scale-95 flex items-center gap-1.5"
        style="color: {roomActive ? 'var(--hud-primary)' : 'rgba(148, 163, 184, 0.5)'};"
        title="Share Your Game"
      >
        <Fa
          icon={roomActive ? faShareNodes : faTowerBroadcast}
          class="w-4 h-4 md:w-5 md:h-5"
        />
        {#if roomActive && spectatorCount !== undefined}
          <Fa icon={faEye} class="w-3 h-3 opacity-70" />
          <span class="text-xs font-bold">{spectatorCount}</span>
        {/if}
      </button>
    {/if}

    {#if onShowSettings}
      <button
        data-testid="settings-button"
        onclick={onShowSettings}
        class="transition-colors duration-300 active:scale-95"
        style="color: rgba(148, 163, 184, 0.5);"
        title="Settings"
      >
        <Fa icon={faGear} class="w-4 h-4 md:w-5 md:h-5" />
      </button>
    {/if}

    {#if onShowLegend}
      <button
        data-testid="legend-button"
        onclick={onShowLegend}
        class="transition-colors duration-300 active:scale-95 hidden sm:block"
        style="color: rgba(148, 163, 184, 0.5);"
        title="Show Legend"
      >
        <Fa icon={faBook} class="w-4 h-4 md:w-5 md:h-5" />
      </button>
    {/if}
  </div>
</div>
