<script lang="ts">
  import Fa from 'svelte-fa';
  import {
    faDice,
    faBullseye,
    faPencil,
    faClipboardList,
    faCheck,
    faXmark,
    faArrowLeft,
    faArrowUp,
    faArrowDown,
  } from '@fortawesome/free-solid-svg-icons';
  import type { Player } from '@/services/cricket';

  interface Props {
    players: Player[];
    onOrderSet: (orderedPlayers: Player[]) => void;
    onThrowForOrder: () => void;
    onclose: () => void;
  }

  let { players, onOrderSet, onThrowForOrder, onclose }: Props = $props();

  let showManualOrder = $state(false);
  let manualPlayers = $state<Player[]>([...players]);

  function movePlayer(index: number, direction: 'up' | 'down') {
    const newPlayers = [...manualPlayers];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    if (targetIndex < 0 || targetIndex >= newPlayers.length) return;

    // Swap players
    [newPlayers[index], newPlayers[targetIndex]] = [
      newPlayers[targetIndex],
      newPlayers[index],
    ];

    manualPlayers = newPlayers;
  }

  function handleValidateManualOrder() {
    onOrderSet(manualPlayers);
  }
</script>

{#if showManualOrder}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-theme-elevated rounded-2xl p-8 max-w-2xl w-full mx-4 border border-theme-card shadow-2xl">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-theme-primary">
          Set Order Manually
        </h2>
        <button
          onclick={() => { showManualOrder = false; }}
          class="text-theme-tertiary hover:text-theme-primary text-2xl"
        >
          <Fa icon={faArrowLeft} />
        </button>
      </div>

      <div class="mb-6 p-4 bg-accent-bg rounded-xl border border-accent">
        <p class="text-sm text-accent">
          Drag players into your preferred order
        </p>
      </div>

      <div class="space-y-3 mb-6">
        {#each manualPlayers as player, index (player.id)}
          <div
            class="flex items-center justify-between p-4 bg-theme-card rounded-xl border border-theme-card"
          >
            <div class="flex items-center gap-4">
              <span class="w-10 h-10 flex items-center justify-center text-2xl font-bold text-green-400 bg-theme-secondary rounded-full">
                {index + 1}
              </span>
              <span class="text-xl font-medium text-theme-primary">
                {player.name}
              </span>
            </div>
            <div class="flex gap-2">
              <button
                onclick={() => movePlayer(index, 'up')}
                disabled={index === 0}
                class="px-3 py-2 rounded-lg font-bold transition-all {index === 0
                  ? 'bg-theme-interactive text-theme-muted cursor-not-allowed'
                  : 'bg-accent text-white hover:opacity-90'}"
              >
                <Fa icon={faArrowUp} />
              </button>
              <button
                onclick={() => movePlayer(index, 'down')}
                disabled={index === manualPlayers.length - 1}
                class="px-3 py-2 rounded-lg font-bold transition-all {index === manualPlayers.length - 1
                  ? 'bg-theme-interactive text-theme-muted cursor-not-allowed'
                  : 'bg-accent text-white hover:opacity-90'}"
              >
                <Fa icon={faArrowDown} />
              </button>
            </div>
          </div>
        {/each}
      </div>

      <button
        onclick={handleValidateManualOrder}
        class="w-full px-8 py-4 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all font-bold text-xl shadow-lg flex items-center justify-center gap-2"
      >
        <Fa icon={faCheck} /> Confirm Order
      </button>
    </div>
  </div>
{:else}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-theme-elevated rounded-2xl p-8 max-w-2xl w-full mx-4 border border-theme-card shadow-2xl">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-theme-primary">
          Player Order
        </h2>
        <button
          onclick={onclose}
          class="text-theme-tertiary hover:text-theme-primary text-2xl transition-colors"
        >
          <Fa icon={faXmark} />
        </button>
      </div>

      <div class="mb-6 p-4 bg-theme-secondary rounded-xl border border-theme-card">
        <p class="text-sm text-theme-primary font-medium">
          Choose how to determine the player order
        </p>
      </div>

      <div class="space-y-4 mb-6">
        <button
          data-testid="order-random-button"
          onclick={() => {
            const shuffled = [...players].sort(() => Math.random() - 0.5);
            onOrderSet(shuffled);
          }}
          class="w-full p-6 bg-purple-700 text-white rounded-xl hover:bg-purple-600 transition-all shadow-lg text-left"
        >
          <div class="flex items-center gap-4">
            <Fa icon={faDice} class="text-4xl w-12 h-12" />
            <div>
              <div class="text-xl font-bold">Random Order</div>
              <div class="text-sm text-purple-200">
                Shuffle players into a random order
              </div>
            </div>
          </div>
        </button>

        <button
          data-testid="order-throw-button"
          onclick={() => {
            onThrowForOrder();
            onclose();
          }}
          class="w-full p-6 bg-accent text-white rounded-xl hover:opacity-90 transition-all shadow-lg text-left"
        >
          <div class="flex items-center gap-4">
            <Fa icon={faBullseye} class="text-4xl w-12 h-12" />
            <div>
              <div class="text-xl font-bold">Throw for Order</div>
              <div class="text-sm text-accent">
                Each player throws a dart — highest score goes first
              </div>
            </div>
          </div>
        </button>

        <button
          data-testid="order-manual-button"
          onclick={() => { showManualOrder = true; }}
          class="w-full p-6 bg-green-700 text-white rounded-xl hover:bg-green-600 transition-all shadow-lg text-left"
        >
          <div class="flex items-center gap-4">
            <Fa icon={faPencil} class="text-4xl w-12 h-12" />
            <div>
              <div class="text-xl font-bold">Manual Order</div>
              <div class="text-sm text-green-200">
                Drag and drop players into your preferred order
              </div>
            </div>
          </div>
        </button>

        <button
          data-testid="order-current-button"
          onclick={() => {
            onOrderSet(players);
            onclose();
          }}
          class="w-full p-6 bg-slate-600 text-white rounded-xl hover:bg-slate-500 transition-all shadow-lg text-left"
        >
          <div class="flex items-center gap-4">
            <Fa icon={faClipboardList} class="text-4xl w-12 h-12" />
            <div>
              <div class="text-xl font-bold">Current Order</div>
              <div class="text-sm text-slate-200">
                Keep the current player order
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
{/if}
