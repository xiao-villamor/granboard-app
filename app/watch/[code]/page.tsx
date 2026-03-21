"use client";

import { useParams, useRouter } from "next/navigation";
import { useSpectator } from "@/app/hooks/useSpectator";
import { SpectatorCricketBoard } from "./SpectatorCricketBoard";
import { SpectatorZeroOneBoard } from "./SpectatorZeroOneBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faSpinner, faTriangleExclamation, faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function WatchPage() {
  const params = useParams();
  const router = useRouter();
  const code = (params.code as string)?.toUpperCase() || "";

  const {
    state,
    gameType,
    gameState,
    currentTurnHits,
    lastHit,
    spectatorCount,
    error,
    leave,
  } = useSpectator(code);

  const handleLeave = () => {
    leave();
    router.push("/");
  };

  // ─── Connecting State ──────────────────────────────────────
  if (state === "connecting") {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center px-8 gap-8"
        style={{ backgroundColor: 'var(--hud-background)' }}
      >
        <div className="animate-fade-in-up text-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon
              icon={faSpinner}
              className="text-3xl animate-spin"
              style={{ color: 'var(--hud-primary)' }}
            />
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {"Connecting..."}
          </h1>
          <p
            className="text-lg"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {`Joining room ${code}...`}
          </p>
          <div
            className="mt-6 px-5 py-2.5 rounded-xl inline-block"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <span
              className="font-mono font-bold text-xl tracking-widest"
              style={{ color: 'var(--hud-primary)' }}
            >
              {code}
            </span>
          </div>
        </div>
      </main>
    );
  }

  // ─── Error State ───────────────────────────────────────────
  if (state === "error") {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center px-8 gap-6"
        style={{ backgroundColor: 'var(--hud-background)' }}
      >
        <div className="animate-fade-in-up text-center max-w-md">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{
              backgroundColor: 'var(--hud-error-container)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="text-3xl"
              style={{ color: 'var(--hud-error)' }}
            />
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {"Error"}
          </h1>
          <p
            className="text-base mb-8"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {error || "Room not found"}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
              color: 'var(--hud-on-primary)',
            }}
          >
            {"Back to Home"}
          </button>
        </div>
      </main>
    );
  }

  // ─── Room Closed State ─────────────────────────────────────
  if (state === "closed") {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center px-8 gap-6"
        style={{ backgroundColor: 'var(--hud-background)' }}
      >
        <div className="animate-fade-in-up text-center max-w-md">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <span className="text-4xl">&#x1F44B;</span>
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {"Room closed"}
          </h1>
          <p
            className="text-base mb-8"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {"Host disconnected"}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 rounded-xl font-bold transition-all hover:opacity-90"
            style={{
              background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
              color: 'var(--hud-on-primary)',
            }}
          >
            {"Back to Home"}
          </button>
        </div>
      </main>
    );
  }

  // ─── Joined - Waiting for game state ───────────────────────
  if (!gameState) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center px-8 gap-6"
        style={{ backgroundColor: 'var(--hud-background)' }}
      >
        <div className="animate-fade-in-up text-center">
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon
              icon={faBullseye}
              className="text-3xl animate-pulse"
              style={{ color: 'var(--hud-primary)' }}
            />
          </div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {"Waiting for game to start..."}
          </h1>
          <p
            className="text-base mb-6"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {"Host is setting up the game"}
          </p>
          <div className="flex items-center justify-center gap-6">
            <div
              className="flex items-center gap-2 text-sm rounded-xl px-4 py-2"
              style={{
                backgroundColor: 'var(--hud-surface-container-high)',
                color: 'var(--hud-tertiary)',
                outline: '1px solid rgba(69, 70, 77, 0.12)',
              }}
            >
              <FontAwesomeIcon icon={faEye} className="text-xs" />
              <span>{spectatorCount === 1 ? "1 spectator" : `${spectatorCount} spectators`}</span>
            </div>
            <div
              className="px-4 py-2 rounded-xl"
              style={{
                backgroundColor: 'var(--hud-surface-container-high)',
                outline: '1px solid rgba(69, 70, 77, 0.12)',
              }}
            >
              <span
                className="text-xs uppercase tracking-wider font-semibold"
                style={{ color: 'var(--hud-on-tertiary-container)' }}
              >
                {"Game Code"}
              </span>
              <span
                className="text-lg font-mono font-bold ml-2"
                style={{ color: 'var(--hud-primary)' }}
              >
                {code}
              </span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ─── Spectating Active Game ────────────────────────────────
  return (
    <main
      className="h-screen flex flex-col px-4 py-3 gap-3 overflow-hidden"
      style={{ backgroundColor: 'var(--hud-background)' }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between flex-shrink-0 animate-fade-in-down">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLeave}
            className="px-3 py-2 rounded-xl transition-all flex items-center gap-2 text-sm"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-on-surface)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--hud-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--hud-on-surface)';
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" /> {"Back"}
          </button>
          <div
            className="px-3 py-2 rounded-xl flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <span
              className="text-xs uppercase tracking-wider font-semibold"
              style={{ color: 'var(--hud-on-tertiary-container)' }}
            >
              {"Game Code"}:
            </span>
            <span
              className="text-sm font-mono font-bold tracking-wider"
              style={{ color: 'var(--hud-primary)' }}
            >
              {code}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-2 text-sm rounded-xl px-3 py-2"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-tertiary)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon icon={faEye} className="text-xs" />
            <span className="font-medium">{spectatorCount}</span>
          </div>
          <div
            className="px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-error-container)',
              color: 'var(--hud-error)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-live-dot"
              style={{ backgroundColor: 'var(--hud-error)' }}
            />
            LIVE
          </div>
        </div>
      </div>

      {/* Game content */}
      <div className="flex-1 min-h-0 animate-fade-in">
        {gameType === "cricket" && (
          <SpectatorCricketBoard
            gameState={gameState}
            currentTurnHits={currentTurnHits}
            lastHit={lastHit}
          />
        )}
        {gameType === "zeroone" && (
          <SpectatorZeroOneBoard
            gameState={gameState}
            currentTurnHits={currentTurnHits}
            lastHit={lastHit}
          />
        )}
        {gameType !== "cricket" && gameType !== "zeroone" && (
          <div className="flex items-center justify-center h-full">
            <p
              className="text-lg"
              style={{ color: 'var(--hud-tertiary)' }}
            >
              {"Unsupported game type"}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
