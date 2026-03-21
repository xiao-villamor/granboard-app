<script lang="ts">
  import { settings } from '@/stores/settings.svelte';
  import Fa from 'svelte-fa';
  import { faXmark, faVolumeHigh, faVolumeMute, faMoon, faSun, faDesktop } from '@fortawesome/free-solid-svg-icons';

  function handleVolumeChange(e: Event) {
    const target = e.target as HTMLInputElement;
    settings.setVolume(parseFloat(target.value));
  }

  function getThemeIcon() {
    if (settings.theme === 'dark') return faMoon;
    if (settings.theme === 'light') return faSun;
    return faDesktop;
  }
</script>

{#if settings.isDialogOpen}
  <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div
      data-testid="settings-dialog"
      class="rounded-2xl max-w-md w-full overflow-hidden max-h-[90vh] flex flex-col"
      style="background-color: var(--hud-glass-bg); backdrop-filter: blur(var(--hud-glass-blur)); outline: 1px solid rgba(69, 70, 77, 0.12);"
    >
      <!-- Header -->
      <div
        class="flex-shrink-0 flex justify-between items-center p-6 pb-4"
        style="border-bottom: 1px solid rgba(69, 70, 77, 0.12);"
      >
        <h3 class="font-bold text-2xl" style="color: var(--hud-on-surface);">Settings</h3>
        <button
          data-testid="settings-close-button"
          onclick={() => settings.closeDialog()}
          class="text-2xl font-bold px-3 py-1 rounded-lg transition-colors hover:opacity-80"
          style="background-color: var(--hud-surface-container-high); color: var(--hud-tertiary);"
        >
          <Fa icon={faXmark} />
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-6 space-y-4">
        <!-- Sound Control -->
        <div
          class="rounded-xl p-4"
          style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
        >
          <div class="flex items-center justify-between">
            <label class="font-bold text-base flex items-center gap-2" style="color: var(--hud-on-surface);">
              <Fa icon={settings.soundEnabled ? faVolumeHigh : faVolumeMute} /> Sound
            </label>
            <button
              data-testid="sound-toggle-button"
              onclick={() => settings.toggleSound()}
              class="px-4 py-2 rounded-lg text-sm font-bold transition-all"
              style={settings.soundEnabled
                ? 'background-color: var(--hud-secondary); color: #1a1a1a;'
                : 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);'
              }
            >
              {settings.soundEnabled ? 'On' : 'Off'}
            </button>
          </div>
        </div>

        <!-- Volume Control -->
        <div
          class="rounded-xl p-4"
          style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
        >
          <div class="flex items-center justify-between mb-3">
            <label class="font-bold text-base flex items-center gap-2" style="color: var(--hud-on-surface);">
              <Fa icon={faVolumeHigh} /> Volume
            </label>
            <span class="font-bold text-sm" style="color: var(--hud-on-surface);">
              {Math.round(settings.volume * 100)}%
            </span>
          </div>
          <input
            data-testid="volume-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={settings.volume}
            oninput={handleVolumeChange}
            disabled={!settings.soundEnabled}
            class="volume-slider w-full h-3 rounded-lg appearance-none cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-6
              [&::-webkit-slider-thumb]:h-6
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-webkit-slider-thumb]:hover:scale-110
              [&::-webkit-slider-thumb]:shadow-xl
              [&::-webkit-slider-thumb]:transition-transform
              [&::-moz-range-thumb]:w-6
              [&::-moz-range-thumb]:h-6
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:cursor-pointer
              [&::-moz-range-thumb]:hover:scale-110
              [&::-moz-range-thumb]:shadow-xl"
            style="background-color: var(--hud-surface-container-highest);"
          />
          {#if !settings.soundEnabled}
            <p class="text-xs mt-2 text-center" style="color: var(--hud-tertiary);">
              Enable sound to adjust volume
            </p>
          {/if}
        </div>

        <!-- Theme Selector -->
        <div
          class="rounded-xl p-4"
          style="background-color: var(--hud-surface-container-high); outline: 1px solid rgba(69, 70, 77, 0.12);"
        >
          <label class="font-bold text-base flex items-center gap-2 mb-3" style="color: var(--hud-on-surface);">
            <Fa icon={getThemeIcon()} />
            Theme
          </label>
          <div class="grid grid-cols-3 gap-2">
            <button
              onclick={() => settings.setTheme('light')}
              class="px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
              style={settings.theme === 'light'
                ? 'background-color: var(--hud-primary); color: #1a1a1a;'
                : 'background-color: var(--hud-surface-container-high); color: var(--hud-on-surface);'
              }
            >
              <Fa icon={faSun} class="w-4 h-4" />
              <span class="hidden sm:inline">Light</span>
            </button>
            <button
              onclick={() => settings.setTheme('dark')}
              class="px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
              style={settings.theme === 'dark'
                ? 'background-color: var(--hud-surface-container-highest); color: var(--hud-on-surface);'
                : 'background-color: var(--hud-surface-container-high); color: var(--hud-on-surface);'
              }
            >
              <Fa icon={faMoon} class="w-4 h-4" />
              <span class="hidden sm:inline">Dark</span>
            </button>
            <button
              onclick={() => settings.setTheme('system')}
              class="px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
              style={settings.theme === 'system'
                ? 'background-color: var(--hud-secondary); color: #1a1a1a;'
                : 'background-color: var(--hud-surface-container-high); color: var(--hud-on-surface);'
              }
            >
              <Fa icon={faDesktop} class="w-4 h-4" />
              <span class="hidden sm:inline">System</span>
            </button>
          </div>
        </div>

        <!-- Custom Content slot -->
        {#if settings.customDialogComponent}
          <div class="pt-4" style="border-top: 1px solid rgba(69, 70, 77, 0.12);">
            <svelte:component this={settings.customDialogComponent} {...settings.customDialogProps} />
          </div>
        {/if}
      </div>

      <!-- Close Button -->
      <div class="flex-shrink-0 p-6 pt-4" style="border-top: 1px solid rgba(69, 70, 77, 0.12);">
        <button
          onclick={() => settings.closeDialog()}
          class="w-full px-6 py-3 rounded-xl hover:opacity-90 font-bold transition-all shadow-lg"
          style="background: linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%); color: var(--hud-on-primary);"
        >
          Done
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .volume-slider::-webkit-slider-thumb {
    background-color: var(--hud-primary);
    border: 2px solid var(--hud-outline-variant);
  }
  .volume-slider::-moz-range-thumb {
    background-color: var(--hud-primary);
    border: 2px solid var(--hud-outline-variant);
  }
</style>
