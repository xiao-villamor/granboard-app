<script lang="ts">
  import Fa from 'svelte-fa';
  import { faArrowLeft, faGear, faTrash, faGripVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
  import { type Player, CricketGameMode } from '@/services/cricket';
  import { Granboard } from '@/services/granboard';
  import { settings } from '@/stores/settings.svelte';
  import PlayerOrderDialog from '@/components/shared/PlayerOrderDialog.svelte';
  import PlayerOrderModal from '@/components/shared/PlayerOrderModal.svelte';
  import GlobalSettingsDialog from '@/components/shared/GlobalSettingsDialog.svelte';

  let players = $state<Player[]>([]);
  let currentName = $state('');
  let gameMode = $state<CricketGameMode>(CricketGameMode.Standard);
  let maxRounds = $state<number>(20);
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

    sessionStorage.setItem('cricketPlayers', JSON.stringify(orderedPlayers));
    sessionStorage.setItem('cricketGameMode', gameMode);
    sessionStorage.setItem('cricketMaxRounds', maxRounds.toString());
    window.location.href = '/cricket/game';
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
      alert('At least 2 players required');
      return;
    }

    if (players.length === 1) {
      sessionStorage.setItem('cricketPlayers', JSON.stringify(players));
      sessionStorage.setItem('cricketGameMode', gameMode);
      sessionStorage.setItem('cricketMaxRounds', maxRounds.toString());
      window.location.href = '/cricket/game';
      return;
    }

    showOrderDialog = true;
  }

  function handleOrderSet(orderedPlayers: Player[]) {
    players = orderedPlayers;
    showOrderDialog = false;

    sessionStorage.setItem('cricketPlayers', JSON.stringify(orderedPlayers));
    sessionStorage.setItem('cricketGameMode', gameMode);
    sessionStorage.setItem('cricketMaxRounds', maxRounds.toString());
    window.location.href = '/cricket/game';
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      addPlayer();
    }
  }

  function initials(name: string): string {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  }

  // Custom slider: compute fill percentage for round limit (5-50)
  let sliderFillPercent = $derived(((maxRounds - 5) / (50 - 5)) * 100);

  const rules = [
    'Numbers in play: 15, 16, 17, 18, 19, 20, and Bull',
    'A number is closed when hit 3 times (single = 1, double = 2, triple = 3)',
    'Bull counts as 25 points; double bull counts as 50 points',
  ];

  const standardRules = [
    'Once you close a number, further hits score points for you',
    'A number is fully closed when all players have closed it — no more points can be scored on it',
    'Player with the highest score when all numbers are closed wins',
    'If a player closes all numbers with the lowest score, the game ends',
  ];

  const cutThroatRules = [
    'Once you close a number, further hits add points to opponents who haven\'t closed it',
    'A number is fully closed when all players have closed it',
    'Player with the lowest score when all numbers are closed wins',
  ];
</script>

<main class="min-h-screen pb-32" style="background-color: var(--hud-background); color: var(--hud-on-surface);">
  <!-- TopAppBar -->
  <header class="sticky top-0 z-40 shadow-2xl shadow-black/20" style="background-color: var(--hud-background);">
    <div class="flex justify-between items-center w-full px-6 py-4">
      <div class="flex items-center gap-4">
        <a
          data-testid="back-button"
          href="/"
          class="text-slate-400 transition-all duration-300 active:opacity-70"
        >
          <Fa icon={faArrowLeft} class="w-5 h-5" />
        </a>
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
        Set up your Cricket game
      </p>
    </section>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Left Column: Game Mode & Players -->
      <div class="md:col-span-7 space-y-12">
        <!-- Game Mode Selection -->
        <div class="animate-fade-in-up">
          <label class="text-xs uppercase tracking-widest font-semibold mb-6 block" style="color: var(--hud-tertiary);">
            Game Mode
          </label>
          <div class="flex flex-wrap gap-4">
            <button
              data-testid="game-mode-standard"
              onclick={() => { gameMode = CricketGameMode.Standard; }}
              class="flex-1 min-w-[140px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 {gameMode === CricketGameMode.Standard ? 'border-2 shadow-lg' : 'hover:brightness-110'}"
              style="background-color: {gameMode === CricketGameMode.Standard ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)'}; border-color: {gameMode === CricketGameMode.Standard ? 'var(--hud-secondary)' : 'transparent'}; color: {gameMode === CricketGameMode.Standard ? 'var(--hud-secondary)' : 'var(--hud-tertiary)'}; box-shadow: {gameMode === CricketGameMode.Standard ? '0 4px 15px rgba(68, 226, 205, 0.1)' : 'none'};"
            >
              <span class="text-xl font-extrabold font-headline">Standard</span>
              <span class="text-[10px] uppercase font-bold opacity-60">Close numbers to score points</span>
            </button>
            <button
              data-testid="game-mode-cutthroat"
              onclick={() => { gameMode = CricketGameMode.CutThroat; }}
              class="flex-1 min-w-[140px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 {gameMode === CricketGameMode.CutThroat ? 'border-2 shadow-lg' : 'hover:brightness-110'}"
              style="background-color: {gameMode === CricketGameMode.CutThroat ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)'}; border-color: {gameMode === CricketGameMode.CutThroat ? 'var(--hud-error)' : 'transparent'}; color: {gameMode === CricketGameMode.CutThroat ? 'var(--hud-error)' : 'var(--hud-tertiary)'}; box-shadow: {gameMode === CricketGameMode.CutThroat ? '0 4px 15px rgba(255, 180, 171, 0.1)' : 'none'};"
            >
              <span class="text-xl font-extrabold font-headline">Cut-Throat</span>
              <span class="text-[10px] uppercase font-bold opacity-60">Score points on opponents</span>
            </button>
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
                data-testid="player-item-{player.name}"
                class="flex items-center justify-between p-5 rounded-xl group transition-colors"
                style="background-color: var(--hud-surface-container-low);"
                onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--hud-surface-container)'; }}
                onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--hud-surface-container-low)'; }}
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
                    data-testid="remove-player-button-{player.name}"
                    onclick={() => removePlayer(player.id)}
                    class="transition-colors"
                    style="color: rgba(185, 200, 222, 0.4);"
                    onmouseenter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--hud-error)'; }}
                    onmouseleave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(185, 200, 222, 0.4)'; }}
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
            <!-- Round Limit — custom slider with teal fill -->
            <div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-semibold" style="color: var(--hud-on-surface);">
                  Rounds
                </span>
                <span class="text-lg font-extrabold font-headline" style="color: var(--hud-secondary);">
                  {maxRounds}
                </span>
              </div>
              <!-- Custom slider track -->
              <div class="relative w-full h-1.5 rounded-full" style="background-color: var(--hud-surface-container-highest);">
                <!-- Teal fill bar -->
                <div
                  class="absolute top-0 left-0 h-full rounded-full"
                  style="width: {sliderFillPercent}%; background-color: var(--hud-secondary);"
                ></div>
                <!-- Circular thumb -->
                <div
                  class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-xl"
                  style="left: {sliderFillPercent}%; background-color: var(--hud-secondary); border-color: var(--hud-surface-container-low); box-shadow: 0 2px 8px rgba(68, 226, 205, 0.4);"
                ></div>
                <!-- Invisible range input overlaid for interaction -->
                <input
                  data-testid="max-rounds-input"
                  type="range"
                  min="5"
                  max="50"
                  bind:value={maxRounds}
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  style="margin: 0;"
                />
              </div>
              <div class="flex justify-between mt-3">
                <span class="text-[10px]" style="color: var(--hud-tertiary); opacity: 0.4;">5</span>
                <span class="text-[10px]" style="color: var(--hud-tertiary); opacity: 0.4;">50</span>
              </div>
            </div>

            <!-- Rules Info -->
            <div class="pt-6 border-t border-white/5">
              <span class="text-sm font-semibold mb-3 block" style="color: var(--hud-on-surface);">
                Rules — {gameMode === CricketGameMode.CutThroat ? 'Cut-Throat' : 'Standard'}
              </span>
              <div class="space-y-2">
                {#each rules as rule}
                  <p class="text-xs leading-relaxed" style="color: var(--hud-tertiary); opacity: 0.8;">
                    {rule}
                  </p>
                {/each}
              </div>
              {#if gameMode === CricketGameMode.Standard}
                <div class="mt-4 p-3 rounded-lg" style="background-color: var(--hud-surface-container);">
                  <p class="font-bold text-xs mb-1" style="color: var(--hud-secondary);">Standard Rules</p>
                  {#each standardRules as rule}
                    <p class="text-xs" style="color: var(--hud-tertiary); opacity: 0.7;">{rule}</p>
                  {/each}
                </div>
              {:else}
                <div class="mt-4 p-3 rounded-lg" style="background-color: var(--hud-surface-container);">
                  <p class="font-bold text-xs mb-1" style="color: var(--hud-error);">Cut-Throat Rules</p>
                  {#each cutThroatRules as rule}
                    <p class="text-xs" style="color: var(--hud-tertiary); opacity: 0.7;">{rule}</p>
                  {/each}
                </div>
              {/if}
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
      onOrderSet={handleOrderSet}
      onThrowForOrder={handleThrowForOrder}
      onclose={() => { showOrderDialog = false; }}
    />
  {/if}

  <!-- Player order modal (for throw for order) -->
  {#if showOrderModal && granboard}
    <PlayerOrderModal
      {players}
      {granboard}
      onOrderDetermined={handleOrderDetermined}
      onclose={handleCloseOrderModal}
    />
  {/if}

  <GlobalSettingsDialog />
</main>
