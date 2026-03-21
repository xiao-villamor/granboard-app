<script lang="ts">
  interface Props {
    onNewGame: () => void;
    onQuit: () => void;
  }

  let { onNewGame, onQuit }: Props = $props();
</script>

<div class="space-y-3">
  <button
    data-testid="new-game-button"
    onclick={onNewGame}
    class="w-full px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-xl focus:outline-none hud-gradient-cta"
  >
    New Game
  </button>
  <button
    data-testid="quit-button"
    onclick={onQuit}
    class="w-full px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
    style="background-color: var(--hud-error-container); color: var(--hud-on-error-container);"
  >
    Quit
  </button>
</div>
