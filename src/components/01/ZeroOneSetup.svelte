<script lang="ts">
  import { type Player, ZeroOneMode } from '@/services/zeroone';
  import { Granboard } from '@/services/granboard';
  import { settings } from '@/stores/settings.svelte';
  import Fa from 'svelte-fa';
  import { faArrowLeft, faGear, faTrash, faGripVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
  import PlayerOrderDialog from '@/components/shared/PlayerOrderDialog.svelte';
  import PlayerOrderModal from '@/components/shared/PlayerOrderModal.svelte';
  import GlobalSettingsDialog from '@/components/shared/GlobalSettingsDialog.svelte';

  type CheckoutMode = 'doubleOut' | 'straightOut' | 'doubleIn';

  let players = $state<Player[]>([]);
  let currentName = $state('');
  let gameMode = $state<ZeroOneMode>(ZeroOneMode.FiveOhOne);
  let checkoutMode = $state<CheckoutMode>('doubleOut');
  let maxRounds = $state<number>(0); // 0 = unlimited
  let showOrderDialog = $state(false);
  let showOrderModal = $state(false);
  let granboard = $state<Granboard | null>(null);

  function addPlayer() {
    if (currentName.trim() === '') return;

    const newPlayer: Player = {
      id: Math.random().toString(36).substr(2, 9),
      name: currentName.trim(),
    };

    players = [...players, newPlayer];
    currentName = '';
  }

  function removePlayer(id: string) {
    players = players.filter((p) => p.id !== id);
  }

  function handleOrderDetermined(orderedPlayers: Player[]) {
    players = orderedPlayers;
    showOrderModal = false;

    const doubleOut = checkoutMode === 'doubleOut';
    sessionStorage.setItem('zeroOnePlayers', JSON.stringify(orderedPlayers));
    sessionStorage.setItem('zeroOneMode', gameMode.toString());
    sessionStorage.setItem('zeroOneDoubleOut', doubleOut.toString());
    sessionStorage.setItem('zeroOneMaxRounds', maxRounds.toString());
    window.location.href = '/01/game';
  }

  async function handleThrowForOrder() {
    try {
      const board = await Granboard.ConnectToBoard();
      granboard = board;
      showOrderModal = true;
    } catch (error) {
      console.error('Failed to connect to Granboard:', error);
      alert('Connection failed');
    }
  }

  function handleCloseOrderModal() {
    showOrderModal = false;
  }

  function startGame() {
    if (players.length < 1) {
      alert('At least 1 player required');
      return;
    }

    const doubleOut = checkoutMode === 'doubleOut';

    if (players.length === 1) {
      sessionStorage.setItem('zeroOnePlayers', JSON.stringify(players));
      sessionStorage.setItem('zeroOneMode', gameMode.toString());
      sessionStorage.setItem('zeroOneDoubleOut', doubleOut.toString());
      sessionStorage.setItem('zeroOneMaxRounds', maxRounds.toString());
      window.location.href = '/01/game';
      return;
    }

    showOrderDialog = true;
  }

  function handleOrderSet(orderedPlayers: Player[]) {
    players = orderedPlayers;
    showOrderDialog = false;

    const doubleOut = checkoutMode === 'doubleOut';
    sessionStorage.setItem('zeroOnePlayers', JSON.stringify(orderedPlayers));
    sessionStorage.setItem('zeroOneMode', gameMode.toString());
    sessionStorage.setItem('zeroOneDoubleOut', doubleOut.toString());
    sessionStorage.setItem('zeroOneMaxRounds', maxRounds.toString());
    window.location.href = '/01/game';
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      addPlayer();
    }
  }

  function modeLabel(mode: ZeroOneMode): string {
    switch (mode) {
      case ZeroOneMode.ThreeOhOne: return 'Short (101–301)';
      case ZeroOneMode.FiveOhOne: return 'Standard (501)';
      case ZeroOneMode.SevenOhOne: return 'Long (701–1001)';
    }
  }

  function modeValue(mode: ZeroOneMode): string {
    switch (mode) {
      case ZeroOneMode.ThreeOhOne: return '301';
      case ZeroOneMode.FiveOhOne: return '501';
      case ZeroOneMode.SevenOhOne: return '701';
    }
  }

  function initials(name: string): string {
    return name.split(' ').map((w) => w[0]).join('').toUpperCase().slice(0, 2);
  }

  // Custom slider: compute fill percentage for round limit
  let sliderFillPercent = $derived(maxRounds === 0 ? 100 : (maxRounds / 50) * 100);

  const checkoutOptions: { key: CheckoutMode; label: string }[] = [
    { key: 'doubleOut', label: 'Double Out' },
    { key: 'straightOut', label: 'Straight Out' },
    { key: 'doubleIn', label: 'Double In' },
  ];

  const gameModes = [ZeroOneMode.FiveOhOne, ZeroOneMode.ThreeOhOne, ZeroOneMode.SevenOhOne];
</script>

<main class="min-h-screen pb-32" style="background-color: var(--hud-background); color: var(--hud-on-surface);">
  <!-- TopAppBar -->
  <header class="sticky top-0 z-40 shadow-2xl shadow-black/20" style="background-color: var(--hud-background);">
    <div class="flex justify-between items-center w-full px-6 py-4">
      <div class="flex items-center gap-4">
        <button
          data-testid="back-button"
          onclick={() => { window.location.href = '/'; }}
          class="text-slate-400 transition-all duration-300 active:opacity-70"
        >
          <Fa icon={faArrowLeft} class="w-5 h-5" />
        </button>
        <h1 class="text-2xl font-extrabold font-headline tracking-tight" style="color: var(--hud-primary);">
          GranBoard
        </h1>
      </div>
      <div class="flex gap-4">
        <button
          data-testid="settings-button"
          onclick={() => settings.openDialog()}
          class="text-slate-400 hover:text-amber-300 transition-colors duration-300 active:opacity-70"
        >
          <Fa icon={faGear} class="w-5 h-5" />
        </button>
      </div>
    </div>
  </header>

  <div class="max-w-4xl mx-auto px-6 pt-12">
    <!-- Editorial Header -->
    <section class="mb-12 animate-fade-in-up">
      <h2 class="text-5xl font-extrabold font-headline tracking-tight mb-2" style="color: var(--hud-on-surface);">
        New Match
      </h2>
      <p class="font-body max-w-md" style="color: var(--hud-tertiary);">
        Set up your 01 game
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Left Column: Score & Players -->
      <div class="md:col-span-7 space-y-12">
        <!-- Starting Score Section -->
        <div class="animate-fade-in-up">
          <label class="text-xs uppercase tracking-widest font-semibold mb-6 block" style="color: var(--hud-tertiary);">
            Game Mode
          </label>
          <div class="flex flex-wrap gap-4">
            {#each gameModes as mode}
              <button
                data-testid={`game-mode-${modeValue(mode)}`}
                onclick={() => { gameMode = mode; }}
                class="flex-1 min-w-[100px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 {gameMode === mode ? 'border-2 shadow-lg' : 'hover:brightness-110'}"
                style="background-color: {gameMode === mode ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)'}; border-color: {gameMode === mode ? 'var(--hud-primary)' : 'transparent'}; color: {gameMode === mode ? 'var(--hud-primary)' : 'var(--hud-tertiary)'}; box-shadow: {gameMode === mode ? '0 4px 15px rgba(255, 185, 95, 0.1)' : 'none'};"
              >
                <span class="text-3xl font-extrabold font-headline">{modeValue(mode)}</span>
                <span class="text-[10px] uppercase font-bold opacity-60">{modeLabel(mode)}</span>
              </button>
            {/each}
          </div>
        </div>

        <!-- Player Roster -->
        <div class="animate-fade-in-up">
          <div class="flex justify-between items-end mb-6">
            <label class="text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">
              Players
            </label>
            <button
              data-testid="add-player-button"
              onclick={addPlayer}
              disabled={currentName.trim() === ''}
              class="text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity disabled:opacity-30"
              style="color: var(--hud-secondary);"
            >
              <Fa icon={faUserPlus} class="text-lg" />
              Add
            </button>
          </div>

          <!-- Name Input -->
          <div class="mb-4">
            <input
              data-testid="player-name-input"
              type="text"
              bind:value={currentName}
              onkeypress={handleKeyPress}
              placeholder="Player name"
              class="w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-1 transition-all font-body"
              style="background-color: var(--hud-surface-container-low); border-color: rgba(69, 70, 77, 0.15); color: var(--hud-on-surface);"
              maxlength={20}
            />
          </div>

          <div class="space-y-3">
            {#each players as player, index (player.id)}
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <div
                data-testid={`player-item-${player.name}`}
                class="flex items-center justify-between p-5 rounded-xl group transition-colors"
                style="background-color: var(--hud-surface-container-low);"
                onmouseenter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--hud-surface-container)'; }}
                onmouseleave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--hud-surface-container-low)'; }}
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                    style="background-color: {index === 0 ? 'rgba(255, 185, 95, 0.2)' : 'rgba(68, 226, 205, 0.2)'}; color: {index === 0 ? 'var(--hud-primary)' : 'var(--hud-secondary)'};"
                  >
                    {initials(player.name)}
                  </div>
                  <div>
                    <p class="font-bold" style="color: var(--hud-on-surface);">{player.name}{index === 0 ? ' (You)' : ''}</p>
                    <p class="text-xs" style="color: var(--hud-tertiary); opacity: 0.6;">
                      {index === 0 ? 'Ready to throw' : 'Guest Player'}
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    data-testid={`remove-player-button-${player.name}`}
                    onclick={() => removePlayer(player.id)}
                    class="transition-colors"
                    style="color: rgba(185, 200, 222, 0.4);"
                    onmouseenter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--hud-error)'; }}
                    onmouseleave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(185, 200, 222, 0.4)'; }}
                  >
                    <Fa icon={faTrash} class="text-xl" />
                  </button>
                  <Fa
                    icon={faGripVertical}
                    class="transition-colors"
                    style="color: var(--hud-on-tertiary-container);"
                  />
                </div>
              </div>
            {/each}

            <!-- Always-visible Add opponent slot -->
            <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
            <div
              class="p-5 border-2 border-dashed rounded-xl flex items-center justify-center gap-3 cursor-pointer transition-all"
              style="border-color: rgba(69, 70, 77, 0.2); color: rgba(185, 200, 222, 0.3);"
              onmouseenter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255, 185, 95, 0.3)'; }}
              onmouseleave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(69, 70, 77, 0.2)'; }}
              onclick={() => {
                const input = document.querySelector('[data-testid="player-name-input"]') as HTMLInputElement;
                input?.focus();
              }}
            >
              <Fa icon={faUserPlus} />
              <span class="font-semibold text-sm">Add opponent...</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Match Settings -->
      <div class="md:col-span-5">
        <div class="rounded-xl p-8 sticky top-28 animate-fade-in-up" style="background-color: var(--hud-surface-container-low);">
          <label class="text-xs uppercase tracking-widest font-semibold mb-8 block" style="color: var(--hud-tertiary);">
            Match Rules
          </label>
          <div class="space-y-8">
            <!-- Checkout Mode -->
            <div>
              <span class="text-sm font-semibold mb-4 block" style="color: var(--hud-on-surface);">
                Double Out
              </span>
              <div class="grid grid-cols-1 gap-2">
                {#each checkoutOptions as { key, label }}
                  {@const isActive = checkoutMode === key}
                  <button
                    data-testid={`checkout-mode-${key}`}
                    onclick={() => { checkoutMode = key; }}
                    class="flex items-center justify-between p-3 rounded-lg transition-colors hover:brightness-110"
                    style="background-color: {isActive ? 'var(--hud-surface-container-highest)' : 'transparent'}; outline: {isActive ? '1px solid rgba(255, 185, 95, 0.3)' : 'none'};"
                  >
                    <span class="text-sm font-medium" style="color: {isActive ? 'var(--hud-on-surface)' : 'var(--hud-tertiary)'};">
                      {label}
                    </span>
                    {#if isActive}
                      <span class="text-lg" style="color: var(--hud-primary);">&#10003;</span>
                    {:else}
                      <div class="w-5 h-5 rounded-full border-2" style="border-color: var(--hud-outline-variant);" />
                    {/if}
                  </button>
                {/each}
              </div>
            </div>

            <!-- Round Limit — custom slider with teal fill -->
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-semibold" style="color: var(--hud-on-surface);">
                  Rounds
                </span>
                <span class="text-lg font-extrabold font-headline" style="color: var(--hud-secondary);">
                  {maxRounds === 0 ? '∞' : maxRounds}
                </span>
              </div>
              <!-- Custom slider track -->
              <div class="relative w-full h-1.5 rounded-full" style="background-color: var(--hud-surface-container-highest);">
                <!-- Teal fill bar -->
                <div
                  class="absolute top-0 left-0 h-full rounded-full"
                  style="width: {sliderFillPercent}%; background-color: var(--hud-secondary);"
                />
                <!-- Circular thumb -->
                <div
                  class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-xl"
                  style="left: {sliderFillPercent}%; background-color: var(--hud-secondary); border-color: var(--hud-surface-container-low); box-shadow: 0 2px 8px rgba(68, 226, 205, 0.4);"
                />
                <!-- Invisible range input overlaid for interaction -->
                <input
                  data-testid="max-rounds-input"
                  type="range"
                  min="0"
                  max="50"
                  bind:value={maxRounds}
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  style="margin: 0;"
                />
              </div>
              <div class="flex justify-between mt-3">
                <span class="text-[10px]" style="color: var(--hud-tertiary); opacity: 0.4;">0</span>
                <span class="text-[10px]" style="color: var(--hud-tertiary); opacity: 0.4;">
                  Unlimited
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Fixed Action Bar -->
  <div class="fixed bottom-0 left-0 w-full z-50 px-6 pb-10 pt-4" style="background: linear-gradient(to top, var(--hud-background), var(--hud-background) 60%, transparent);">
    <div class="max-w-4xl mx-auto">
      <button
        data-testid="start-game-button"
        onclick={startGame}
        disabled={players.length < 1}
        class="w-full h-16 rounded-xl flex items-center justify-center gap-3 shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        style="background: {players.length >= 1
          ? 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)'
          : 'var(--hud-surface-container-high)'}; box-shadow: {players.length >= 1 ? '0 8px 30px rgba(255, 185, 95, 0.2)' : 'none'};"
      >
        <span class="text-lg">&#9654;</span>
        <span class="font-headline font-extrabold text-lg tracking-wide uppercase" style="color: var(--hud-on-primary);">
          Start Match Session
        </span>
      </button>
    </div>
  </div>

  <!-- Player order dialog -->
  {#if showOrderDialog}
    <PlayerOrderDialog
      {players}
      onorderset={handleOrderSet}
      onthrowfororder={handleThrowForOrder}
      onclose={() => { showOrderDialog = false; }}
    />
  {/if}

  <!-- Player order modal (for throw for order) -->
  {#if showOrderModal && granboard}
    <PlayerOrderModal
      {players}
      {granboard}
      onorderdetermined={handleOrderDetermined}
      onclose={handleCloseOrderModal}
    />
  {/if}

  <GlobalSettingsDialog />
</main>
