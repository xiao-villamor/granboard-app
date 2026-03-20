"use client";

import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSpectator } from "@/app/hooks/useSpectator";
import { SpectatorCricketBoard } from "./SpectatorCricketBoard";
import { SpectatorZeroOneBoard } from "./SpectatorZeroOneBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faSpinner, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function WatchPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
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
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <FontAwesomeIcon icon={faSpinner} className="text-accent text-5xl animate-spin" />
        <h1 className="text-3xl font-bold text-theme-primary">
          {t("spectator.connecting")}
        </h1>
        <p className="text-theme-muted text-lg">
          {t("spectator.joiningRoom", { code })}
        </p>
      </main>
    );
  }

  // ─── Error State ───────────────────────────────────────────
  if (state === "error") {
    return (
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 text-5xl" />
        <h1 className="text-3xl font-bold text-theme-primary">
          {t("spectator.error")}
        </h1>
        <p className="text-theme-muted text-lg text-center max-w-md">
          {error || t("spectator.roomNotFound")}
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition-all"
        >
          {t("spectator.backHome")}
        </button>
      </main>
    );
  }

  // ─── Room Closed State ─────────────────────────────────────
  if (state === "closed") {
    return (
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <div className="text-6xl">&#x1F44B;</div>
        <h1 className="text-3xl font-bold text-theme-primary">
          {t("spectator.roomClosed")}
        </h1>
        <p className="text-theme-muted text-lg text-center">
          {t("spectator.hostDisconnected")}
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition-all"
        >
          {t("spectator.backHome")}
        </button>
      </main>
    );
  }

  // ─── Joined - Waiting for game state ───────────────────────
  if (!gameState) {
    return (
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <FontAwesomeIcon icon={faSpinner} className="text-accent text-5xl animate-spin" />
        <h1 className="text-3xl font-bold text-theme-primary">
          {t("spectator.waitingForGame")}
        </h1>
        <p className="text-theme-muted text-lg text-center">
          {t("spectator.hostSetting")}
        </p>
        <div className="flex items-center gap-2 text-theme-muted">
          <FontAwesomeIcon icon={faEye} />
          <span>{t("spectator.spectators", { count: spectatorCount })}</span>
        </div>
        <div className="px-4 py-2 bg-theme-card border border-theme-card rounded-lg">
          <span className="text-theme-muted text-sm">{t("spectator.gameCode")}:</span>
          <span className="text-xl font-mono font-bold text-accent ml-2">{code}</span>
        </div>
      </main>
    );
  }

  // ─── Spectating Active Game ────────────────────────────────
  return (
    <main className="h-screen bg-theme-primary flex flex-col px-4 py-3 gap-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLeave}
            className="px-3 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2 text-sm"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {t("common.back")}
          </button>
          <div className="px-3 py-1.5 bg-theme-card border border-theme-card rounded-lg">
            <span className="text-xs text-theme-muted">{t("spectator.gameCode")}:</span>
            <span className="text-sm font-mono font-bold text-accent ml-1">{code}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-theme-muted text-sm">
            <FontAwesomeIcon icon={faEye} />
            <span>{spectatorCount}</span>
          </div>
          <div className="px-3 py-1.5 bg-red-600/20 text-red-400 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            LIVE
          </div>
        </div>
      </div>

      {/* Game content */}
      <div className="flex-1 min-h-0">
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
            <p className="text-theme-muted text-lg">
              {t("spectator.unsupportedGame")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
