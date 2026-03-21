<script lang="ts">
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa';
  import { faEye, faCopy, faCheck, faXmark, faShareNodes, faTowerBroadcast, faCircleStop } from '@fortawesome/free-solid-svg-icons';

  interface Props {
    open: boolean;
    onclose: () => void;
    roomCode: string | null;
    spectatorCount: number;
    isConnected: boolean;
    onCreateRoom: () => Promise<string | null>;
    onCloseRoom: () => void;
    roomState: string;
  }

  let {
    open,
    onclose,
    roomCode,
    spectatorCount,
    isConnected,
    onCreateRoom,
    onCloseRoom,
    roomState,
  }: Props = $props();

  let qrDataUrl = $state<string | null>(null);
  let copied = $state(false);
  let canShare = $state(false);

  let watchUrl = $derived(
    roomCode && typeof window !== 'undefined'
      ? `${window.location.origin}/watch/${roomCode}`
      : ''
  );

  // Generate QR code when room code changes (lazy-load qrcode library)
  $effect(() => {
    if (roomCode && watchUrl) {
      import('qrcode').then((QRCode) => {
        QRCode.toDataURL(watchUrl, {
          width: 200,
          margin: 2,
          color: { dark: '#000000', light: '#ffffff' },
        }).then((url: string) => { qrDataUrl = url; }).catch(console.error);
      });
    }
  });

  onMount(() => {
    canShare = typeof navigator !== 'undefined' && 'share' in navigator;
  });

  async function handleCopyLink() {
    if (watchUrl) {
      await navigator.clipboard.writeText(watchUrl);
      copied = true;
      setTimeout(() => { copied = false; }, 2000);
    }
  }

  async function handleShare() {
    if (navigator.share && watchUrl) {
      try {
        await navigator.share({
          title: 'Watch my dart game!',
          text: `Join with code: ${roomCode}`,
          url: watchUrl,
        });
      } catch {
        // User cancelled share
      }
    }
  }

  function handleBackdropClick() {
    onclose();
  }

  function stopPropagation(e: MouseEvent) {
    e.stopPropagation();
  }
</script>

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div
    class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onclick={handleBackdropClick}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
    <div
      class="relative rounded-2xl border w-full max-w-md overflow-hidden shadow-2xl animate-scale-in"
      style="background-color: var(--hud-surface-container-low); border-color: rgba(69, 70, 77, 0.20);"
      onclick={stopPropagation}
    >
      <div class="p-8 text-center">
        <!-- Header row -->
        <div class="flex justify-between items-center mb-6">
          <h2
            class="font-headline font-bold text-xl"
            style="color: var(--hud-on-surface);"
          >
            Share Your Game
          </h2>
          <button
            onclick={onclose}
            class="transition-colors"
            style="color: var(--hud-tertiary);"
            title="Close"
          >
            <Fa icon={faXmark} class="text-lg" />
          </button>
        </div>

        {#if !roomCode}
          <!-- No room yet: create state -->
          <div class="space-y-6 py-2">
            <div
              class="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
              style="background-color: rgba(128, 155, 255, 0.08);"
            >
              <Fa icon={faTowerBroadcast} class="text-2xl" style="color: var(--hud-game-01);" />
            </div>
            <p class="text-sm leading-relaxed" style="color: rgba(185, 200, 222, 0.7);">
              Create a room so others can watch
            </p>
            <button
              onclick={async () => { await onCreateRoom(); }}
              disabled={!isConnected || roomState === 'creating'}
              class="px-8 py-3 rounded-xl font-bold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hud-gradient-cta"
            >
              {roomState === 'creating' ? 'Creating...' : 'Go Live'}
            </button>
            {#if !isConnected}
              <p class="text-xs font-medium" style="color: var(--hud-error);">
                Server unavailable
              </p>
            {/if}
          </div>
        {:else}
          <!-- Room active: share state -->
          <div class="space-y-6">
            <p class="text-sm" style="color: rgba(185, 200, 222, 0.7);">
              Scan QR
            </p>

            {#if qrDataUrl}
              <div class="inline-block bg-white p-4 rounded-lg shadow-inner mb-2">
                <img
                  src={qrDataUrl}
                  alt="Session QR Code"
                  width="192"
                  height="192"
                  class="rounded"
                />
              </div>
            {/if}

            <div class="space-y-1">
              <p
                class="text-[10px] font-bold uppercase tracking-widest"
                style="color: rgba(185, 200, 222, 0.5);"
              >
                Game code
              </p>
              <div
                class="text-5xl font-headline font-black tracking-widest"
                style="color: var(--hud-primary);"
              >
                {roomCode}
              </div>
            </div>

            <!-- URL row -->
            <div
              class="pt-5 border-t"
              style="border-color: rgba(69, 70, 77, 0.10);"
            >
              <div
                class="rounded-lg px-4 py-3 flex items-center justify-between gap-4"
                style="background-color: var(--hud-surface-container-highest);"
              >
                <span
                  class="text-xs font-mono truncate"
                  style="color: var(--hud-tertiary);"
                >
                  {watchUrl}
                </span>
                <button
                  onclick={handleCopyLink}
                  class="flex-shrink-0 transition-colors"
                  style="color: {copied ? 'var(--hud-secondary)' : 'var(--hud-primary)'};"
                  title="Copy link"
                >
                  <Fa icon={copied ? faCheck : faCopy} class="text-lg" />
                </button>
              </div>
            </div>

            <!-- Native share (mobile only) -->
            {#if canShare}
              <button
                onclick={handleShare}
                class="w-full px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 hud-gradient-cta"
              >
                <Fa icon={faShareNodes} />
                Share
              </button>
            {/if}

            <!-- Spectator count + stop live row -->
            <div
              class="flex items-center justify-between text-xs"
              style="color: var(--hud-on-tertiary-container);"
            >
              <div class="flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full animate-live-dot" style="background-color: var(--hud-secondary);" />
                <span class="font-label font-semibold uppercase tracking-widest" style="color: var(--hud-secondary);">LIVE</span>
                <span class="ml-1">&middot;</span>
                <Fa icon={faEye} class="ml-1" />
                <span>{spectatorCount}</span>
              </div>
              <button
                onclick={() => { onCloseRoom(); onclose(); }}
                class="flex items-center gap-1.5 font-medium transition-colors"
                style="color: var(--hud-error);"
              >
                <Fa icon={faCircleStop} />
                Stop Sharing
              </button>
            </div>

            <!-- Done button -->
            <button
              onclick={onclose}
              class="w-full py-4 rounded-lg font-headline font-bold transition-colors border"
              style="background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface); border-color: rgba(69, 70, 77, 0.10);"
            >
              Done
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
