"use client";

import { useSettings, Theme } from "@/app/contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faVolumeHigh, faVolumeMute, faMoon, faSun, faDesktop } from "@fortawesome/free-solid-svg-icons";

export function GlobalSettingsDialog() {
  const { isDialogOpen, closeDialog, volume, soundEnabled, setVolume, toggleSound, theme, setTheme, customContent } = useSettings();

  if (!isDialogOpen) return null;

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        data-testid="settings-dialog"
        className="rounded-2xl max-w-md w-full overflow-hidden max-h-[90vh] flex flex-col"
        style={{
          backgroundColor: 'var(--hud-glass-bg)',
          backdropFilter: 'blur(var(--hud-glass-blur))',
          outline: '1px solid rgba(69, 70, 77, 0.12)',
        }}
      >
        {/* Header */}
        <div
          className="flex-shrink-0 flex justify-between items-center p-6 pb-4"
          style={{ borderBottom: '1px solid rgba(69, 70, 77, 0.12)' }}
        >
          <h3 className="font-bold text-2xl" style={{ color: 'var(--hud-on-surface)' }}>Settings</h3>
          <button
            data-testid="settings-close-button"
            onClick={closeDialog}
            className="text-2xl font-bold px-3 py-1 rounded-lg transition-colors hover:opacity-80"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-tertiary)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hud-on-surface)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hud-tertiary)'; }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* Global Settings - Always visible */}

          {/* Sound Control */}
          <div
            className="rounded-xl p-4"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <div className="flex items-center justify-between">
              <label className="font-bold text-base flex items-center gap-2" style={{ color: 'var(--hud-on-surface)' }}>
                <FontAwesomeIcon icon={soundEnabled ? faVolumeHigh : faVolumeMute} /> Sound
              </label>
              <button
                data-testid="sound-toggle-button"
                onClick={toggleSound}
                className="px-4 py-2 rounded-lg text-sm font-bold transition-all"
                style={
                  soundEnabled
                    ? { backgroundColor: 'var(--hud-secondary)', color: '#1a1a1a' }
                    : { backgroundColor: 'var(--hud-surface-container-highest)', color: 'var(--hud-on-surface)' }
                }
              >
                {soundEnabled ? "On" : "Off"}
              </button>
            </div>
          </div>

          {/* Volume Control */}
          <div
            className="rounded-xl p-4"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <label className="font-bold text-base flex items-center gap-2" style={{ color: 'var(--hud-on-surface)' }}>
                <FontAwesomeIcon icon={faVolumeHigh} /> Volume
              </label>
              <span className="font-bold text-sm" style={{ color: 'var(--hud-on-surface)' }}>
                {Math.round(volume * 100)}%
              </span>
            </div>
            <input
              data-testid="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              disabled={!soundEnabled}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer
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
              style={{
                backgroundColor: 'var(--hud-surface-container-highest)',
                // @ts-ignore -- CSS custom properties for pseudo-elements via inline won't work; using CSS vars as fallback
              }}
            />
            <style>{`
              [data-testid="volume-slider"]::-webkit-slider-thumb {
                background-color: var(--hud-primary);
                border: 2px solid var(--hud-outline-variant);
              }
              [data-testid="volume-slider"]::-moz-range-thumb {
                background-color: var(--hud-primary);
                border: 2px solid var(--hud-outline-variant);
              }
            `}</style>
            {!soundEnabled && (
              <p className="text-xs mt-2 text-center" style={{ color: 'var(--hud-tertiary)' }}>
                Enable sound to adjust volume
              </p>
            )}
          </div>

          {/* Theme Selector */}
          <div
            className="rounded-xl p-4"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <label className="font-bold text-base flex items-center gap-2 mb-3" style={{ color: 'var(--hud-on-surface)' }}>
              <FontAwesomeIcon icon={theme === 'dark' ? faMoon : theme === 'light' ? faSun : faDesktop} />
              Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTheme('light')}
                className="px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                style={
                  theme === 'light'
                    ? { backgroundColor: 'var(--hud-primary)', color: '#1a1a1a' }
                    : { backgroundColor: 'var(--hud-surface-container-high)', color: 'var(--hud-on-surface)' }
                }
              >
                <FontAwesomeIcon icon={faSun} className="w-4 h-4" />
                <span className="hidden sm:inline">Light</span>
              </button>
              <button
                onClick={() => setTheme('dark')}
                className="px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                style={
                  theme === 'dark'
                    ? { backgroundColor: 'var(--hud-surface-container-highest)', color: 'var(--hud-on-surface)' }
                    : { backgroundColor: 'var(--hud-surface-container-high)', color: 'var(--hud-on-surface)' }
                }
              >
                <FontAwesomeIcon icon={faMoon} className="w-4 h-4" />
                <span className="hidden sm:inline">Dark</span>
              </button>
              <button
                onClick={() => setTheme('system')}
                className="px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                style={
                  theme === 'system'
                    ? { backgroundColor: 'var(--hud-secondary)', color: '#1a1a1a' }
                    : { backgroundColor: 'var(--hud-surface-container-high)', color: 'var(--hud-on-surface)' }
                }
              >
                <FontAwesomeIcon icon={faDesktop} className="w-4 h-4" />
                <span className="hidden sm:inline">System</span>
              </button>
            </div>
          </div>

          {/* Custom Content - Variable content passed by the context */}
          {customContent && (
            <div className="pt-4" style={{ borderTop: '1px solid rgba(69, 70, 77, 0.12)' }}>
              {customContent}
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="flex-shrink-0 p-6 pt-4" style={{ borderTop: '1px solid rgba(69, 70, 77, 0.12)' }}>
          <button
            onClick={closeDialog}
            className="w-full px-6 py-3 rounded-xl hover:opacity-90 font-bold transition-all shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
              color: 'var(--hud-on-primary)',
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
