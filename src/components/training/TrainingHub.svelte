<script lang="ts">
  import { settings } from '@/stores/settings.svelte';
  import GlobalSettingsDialog from '@/components/shared/GlobalSettingsDialog.svelte';
  import Fa from 'svelte-fa';
  import {
    faArrowLeft,
    faGear,
    faBullseye,
    faCrosshairs,
    faFlagCheckered,
  } from '@fortawesome/free-solid-svg-icons';
</script>

<main
  class="relative min-h-screen flex flex-col items-center px-8 py-10 gap-8"
  style="background-color: var(--hud-background);"
>
  <!-- Back button -->
  <button
    data-testid="back-button"
    onclick={() => { window.location.href = '/'; }}
    class="absolute top-6 left-6 px-4 py-2 rounded-lg transition-all flex items-center gap-2 back-button"
    style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12);"
  >
    <Fa icon={faArrowLeft} /> Back
  </button>

  <!-- Settings Button - Top Right -->
  <div class="absolute top-6 right-6">
    <button
      data-testid="settings-button"
      onclick={() => settings.openDialog()}
      class="px-4 py-2 rounded-lg transition-all flex items-center gap-2 settings-button"
      style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <Fa icon={faGear} /> Settings
    </button>
  </div>

  <!-- Title -->
  <div class="w-full text-center">
    <h1
      class="font-headline text-6xl font-extrabold mb-2 tracking-wider"
      style="color: var(--hud-on-surface);"
    >
      Training
    </h1>
    <p
      class="text-lg"
      style="color: var(--hud-tertiary);"
    >
      Practice your darts
    </p>
  </div>

  <!-- Training modes -->
  <div class="w-full max-w-3xl flex flex-col gap-6">
    <!-- Free Throw -->
    <button
      data-testid="training-free-throw"
      onclick={() => { window.location.href = '/training/free-throw'; }}
      class="group w-full p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left training-card"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12); border-left: 4px solid var(--hud-game-training);"
      onmouseenter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 131, 63, 0.15)'; }}
      onmouseleave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div class="flex items-center gap-6">
        <div
          class="flex items-center justify-center w-14 h-14 rounded-full"
          style="background-color: rgba(255, 131, 63, 0.15);"
        >
          <Fa
            icon={faBullseye}
            class="text-3xl"
            style="color: var(--hud-game-training);"
          />
        </div>
        <div>
          <div
            class="text-3xl font-bold mb-1"
            style="color: var(--hud-on-surface);"
          >
            Free Throw
          </div>
          <div
            class="text-sm"
            style="color: var(--hud-tertiary);"
          >
            Throw freely and track your stats
          </div>
        </div>
      </div>
    </button>

    <!-- Target Practice -->
    <button
      data-testid="training-target-practice"
      onclick={() => { window.location.href = '/training/target-practice'; }}
      class="group w-full p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left training-card"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12); border-left: 4px solid var(--hud-secondary);"
      onmouseenter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(68, 226, 205, 0.15)'; }}
      onmouseleave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div class="flex items-center gap-6">
        <div
          class="flex items-center justify-center w-14 h-14 rounded-full"
          style="background-color: rgba(68, 226, 205, 0.15);"
        >
          <Fa
            icon={faCrosshairs}
            class="text-3xl"
            style="color: var(--hud-secondary);"
          />
        </div>
        <div>
          <div
            class="text-3xl font-bold mb-1"
            style="color: var(--hud-on-surface);"
          >
            Target Practice
          </div>
          <div
            class="text-sm"
            style="color: var(--hud-tertiary);"
          >
            Hit specific targets to improve accuracy
          </div>
        </div>
      </div>
    </button>

    <!-- Checkout Practice -->
    <button
      data-testid="training-checkout"
      onclick={() => { window.location.href = '/training/checkout'; }}
      class="group w-full p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left training-card"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12); border-left: 4px solid var(--hud-primary);"
      onmouseenter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 185, 95, 0.15)'; }}
      onmouseleave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div class="flex items-center gap-6">
        <div
          class="flex items-center justify-center w-14 h-14 rounded-full"
          style="background-color: rgba(255, 185, 95, 0.15);"
        >
          <Fa
            icon={faFlagCheckered}
            class="text-3xl"
            style="color: var(--hud-primary);"
          />
        </div>
        <div>
          <div
            class="text-3xl font-bold mb-1"
            style="color: var(--hud-on-surface);"
          >
            Checkout
          </div>
          <div
            class="text-sm"
            style="color: var(--hud-tertiary);"
          >
            Practice finishing combinations
          </div>
        </div>
      </div>
    </button>
  </div>
</main>

<GlobalSettingsDialog />

<style>
  .back-button:hover,
  .settings-button:hover {
    color: var(--hud-on-surface) !important;
  }
</style>
