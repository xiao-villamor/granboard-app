<script lang="ts">
  import type { Player, PlayerState as PlayerCricketState, CricketGameMode } from '@/services/cricket';
  import { calculateMPR } from '@/services/cricket';
  import type { PlayerState as PlayerZeroOneState, ZeroOneMode } from '@/services/zeroone';
  import { calculatePPD, calculateAverage } from '@/services/zeroone';
  import { CricketGameMode as CricketGameModeEnum } from '@/services/cricket';

  type GameMode = CricketGameMode | ZeroOneMode;
  type PlayerState = PlayerCricketState | PlayerZeroOneState;

  interface Props {
    winner: Player;
    players: PlayerState[];
    totalRounds: number;
    gameMode: GameMode;
    onNewGame: () => void;
    onQuit: () => void;
  }

  let { winner, players, totalRounds, gameMode, onNewGame, onQuit }: Props = $props();

  // Type guards
  function isCricketPlayer(player: PlayerState): player is PlayerCricketState {
    return 'totalMarks' in player;
  }

  function isCricketMode(mode: GameMode): mode is CricketGameMode {
    return typeof mode === 'string';
  }

  let isCricket = $derived(isCricketMode(gameMode));

  // Sort players by ranking (winner first, then by score or MPR)
  let sortedPlayers = $derived(
    [...players].sort((a, b) => {
      if (a.player.id === winner.id) return -1;
      if (b.player.id === winner.id) return 1;

      if (isCricket) {
        const aCricket = a as PlayerCricketState;
        const bCricket = b as PlayerCricketState;
        if (gameMode === CricketGameModeEnum.CutThroat) {
          return aCricket.totalPoints - bCricket.totalPoints;
        } else {
          return bCricket.totalPoints - aCricket.totalPoints;
        }
      } else {
        const aZeroOne = a as PlayerZeroOneState;
        const bZeroOne = b as PlayerZeroOneState;
        return aZeroOne.currentScore - bZeroOne.currentScore;
      }
    }),
  );
</script>

<div
  class="p-8 rounded-2xl shadow-2xl border animate-scale-in"
  style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); border-color: rgba(255, 185, 95, 0.3);"
>
  <h2 class="text-5xl font-headline font-extrabold mb-2 text-center" style="color: var(--hud-on-primary);">
    {winner.name} wins!
  </h2>
  <p class="text-xl text-center mb-6" style="color: rgba(71, 42, 0, 0.7);">
    Game ended after {totalRounds} {totalRounds > 1 ? 'Rounds' : 'round'}
  </p>

  <!-- Statistics Table -->
  <div
    class="rounded-xl p-6 mb-6 border"
    style="background-color: var(--hud-surface-container-low); border-color: rgba(69, 70, 77, 0.15);"
  >
    <h3 class="text-2xl font-headline font-bold mb-4 text-center" style="color: var(--hud-on-surface);">
      Game Stats
    </h3>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr style="border-bottom: 2px solid var(--hud-surface-container-highest);">
            <th class="p-3 text-left font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">Rank</th>
            <th class="p-3 text-left font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">Player</th>
            {#if isCricket}
              <th class="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">Points</th>
              <th class="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">Marks</th>
              <th class="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">MPR</th>
            {:else}
              <th class="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">Remaining</th>
              <th class="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">Average</th>
              <th class="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style="color: var(--hud-tertiary);">PPD</th>
            {/if}
          </tr>
        </thead>
        <tbody>
          {#each sortedPlayers as playerState, index (playerState.player.id)}
            {@const isWinner = playerState.player.id === winner.id}
            <tr
              style="border-bottom: 1px solid var(--hud-surface-container-high); background-color: {isWinner ? 'rgba(255, 185, 95, 0.08)' : 'transparent'};"
            >
              <td class="p-3 text-center">
                {#if index === 0}
                  <span class="text-2xl">🥇</span>
                {:else if index === 1}
                  <span class="text-2xl">🥈</span>
                {:else if index === 2}
                  <span class="text-2xl">🥉</span>
                {:else}
                  <span class="font-semibold" style="color: var(--hud-tertiary);">
                    {index + 1}
                  </span>
                {/if}
              </td>
              <td class="p-3 font-bold" style="color: var(--hud-on-surface);">
                {playerState.player.name}
                {#if isWinner}
                  <span class="ml-2">👑</span>
                {/if}
              </td>
              {#if isCricket && isCricketPlayer(playerState)}
                <td
                  class="p-3 text-center font-bold"
                  style="color: {gameMode === CricketGameModeEnum.CutThroat
                    ? 'var(--hud-error)'
                    : 'var(--hud-primary)'};"
                >
                  {playerState.totalPoints}
                </td>
                <td class="p-3 text-center font-semibold" style="color: var(--hud-on-surface);">
                  {playerState.totalMarks}
                </td>
                <td class="p-3 text-center font-bold text-lg" style="color: var(--hud-secondary);">
                  {calculateMPR(playerState).toFixed(2)}
                </td>
              {:else if !isCricket && !isCricketPlayer(playerState)}
                <td class="p-3 text-center font-bold" style="color: var(--hud-primary);">
                  {playerState.currentScore}
                </td>
                <td class="p-3 text-center font-semibold" style="color: var(--hud-on-surface);">
                  {calculateAverage(playerState).toFixed(2)}
                </td>
                <td class="p-3 text-center font-bold text-lg" style="color: var(--hud-secondary);">
                  {calculatePPD(playerState).toFixed(2)}
                </td>
              {/if}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <!-- Action Buttons -->
  <div class="flex gap-4 justify-center">
    <button
      onclick={onNewGame}
      class="px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
      style="background-color: var(--hud-on-primary); color: var(--hud-primary);"
    >
      New Game
    </button>
    <button
      onclick={onQuit}
      class="px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
      style="background-color: var(--hud-surface-container-high); color: var(--hud-on-surface);"
    >
      Quit
    </button>
  </div>
</div>
