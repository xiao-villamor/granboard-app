"use client";

import { useRouter } from "next/navigation";
import { useSettings } from "../contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGear, faBullseye, faCrosshairs, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

export default function TrainingHub() {
  const router = useRouter();
  const { openDialog } = useSettings();

  return (
    <main
      className="relative min-h-screen flex flex-col items-center px-8 py-10 gap-8"
      style={{ backgroundColor: 'var(--hud-background)' }}
    >
      {/* Back button */}
      <button
        data-testid="back-button"
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 px-4 py-2 rounded-lg transition-all flex items-center gap-2"
        style={{
          backgroundColor: 'var(--hud-surface-container-high)',
          color: 'var(--hud-tertiary)',
          outline: '1px solid rgba(69, 70, 77, 0.12)',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hud-on-surface)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hud-tertiary)'; }}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> {"Back"}
      </button>

      {/* Settings Button - Top Right */}
      <div className="absolute top-6 right-6">
        <button
          data-testid="settings-button"
          onClick={() => openDialog()}
          className="px-4 py-2 rounded-lg transition-all flex items-center gap-2"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            color: 'var(--hud-tertiary)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hud-on-surface)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hud-tertiary)'; }}
        >
          <FontAwesomeIcon icon={faGear} /> {"Settings"}
        </button>
      </div>

      {/* Title */}
      <div className="w-full text-center">
        <h1
          className="font-headline text-6xl font-extrabold mb-2 tracking-wider"
          style={{ color: 'var(--hud-on-surface)' }}
        >
          {"Training"}
        </h1>
        <p
          className="text-lg"
          style={{ color: 'var(--hud-tertiary)' }}
        >
          {"Practice your darts"}
        </p>
      </div>

      {/* Training modes */}
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {/* Free Throw */}
        <button
          data-testid="training-free-throw"
          onClick={() => router.push("/training/free-throw")}
          className="group w-full p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left"
          style={{
            backgroundColor: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
            borderLeft: '4px solid var(--hud-game-training)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 131, 63, 0.15)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          <div className="flex items-center gap-6">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{ backgroundColor: 'rgba(255, 131, 63, 0.15)' }}
            >
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-3xl"
                style={{ color: 'var(--hud-game-training)' }}
              />
            </div>
            <div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: 'var(--hud-on-surface)' }}
              >
                {"Free Throw"}
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--hud-tertiary)' }}
              >
                {"Throw freely and track your stats"}
              </div>
            </div>
          </div>
        </button>

        {/* Target Practice */}
        <button
          data-testid="training-target-practice"
          onClick={() => router.push("/training/target-practice")}
          className="group w-full p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left"
          style={{
            backgroundColor: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
            borderLeft: '4px solid var(--hud-secondary)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(68, 226, 205, 0.15)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          <div className="flex items-center gap-6">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{ backgroundColor: 'rgba(68, 226, 205, 0.15)' }}
            >
              <FontAwesomeIcon
                icon={faCrosshairs}
                className="text-3xl"
                style={{ color: 'var(--hud-secondary)' }}
              />
            </div>
            <div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: 'var(--hud-on-surface)' }}
              >
                {"Target Practice"}
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--hud-tertiary)' }}
              >
                {"Hit specific targets to improve accuracy"}
              </div>
            </div>
          </div>
        </button>

        {/* Checkout Practice */}
        <button
          data-testid="training-checkout"
          onClick={() => router.push("/training/checkout")}
          className="group w-full p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] text-left"
          style={{
            backgroundColor: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
            borderLeft: '4px solid var(--hud-primary)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 185, 95, 0.15)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          <div className="flex items-center gap-6">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-full"
              style={{ backgroundColor: 'rgba(255, 185, 95, 0.15)' }}
            >
              <FontAwesomeIcon
                icon={faFlagCheckered}
                className="text-3xl"
                style={{ color: 'var(--hud-primary)' }}
              />
            </div>
            <div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: 'var(--hud-on-surface)' }}
              >
                {"Checkout"}
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--hud-tertiary)' }}
              >
                {"Practice finishing combinations"}
              </div>
            </div>
          </div>
        </button>
      </div>
    </main>
  );
}
