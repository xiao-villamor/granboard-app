"use client";

import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSpectator } from "@/app/hooks/useSpectator";
import { SpectatorCricketBoard } from "./SpectatorCricketBoard";
import { SpectatorZeroOneBoard } from "./SpectatorZeroOneBoard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye, faSpinner, faTriangleExclamation, faBullseye } from "@fortawesome/free-solid-svg-icons";

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
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-8">
        <div className="animate-fade-in-up text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
            <FontAwesomeIcon icon={faSpinner} className="text-accent text-3xl animate-spin" />
          </div>
          <h1 className="text-3xl font-bold text-theme-primary mb-2">
            {t("spectator.connecting")}
          </h1>
          <p className="text-theme-muted text-lg">
            {t("spectator.joiningRoom", { code })}
          </p>
          <div className="mt-6 px-5 py-2.5 bg-theme-card border border-theme-card rounded-xl inline-block">
            <span className="font-mono font-bold text-accent text-xl tracking-widest">{code}</span>
          </div>
        </div>
      </main>
    );
  }

  // ─── Error State ───────────────────────────────────────────
  if (state === "error") {
    return (
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <div className="animate-fade-in-up text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 mb-6">
            <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-500 text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-theme-primary mb-2">
            {t("spectator.error")}
          </h1>
          <p className="text-theme-muted text-base mb-8">
            {error || t("spectator.roomNotFound")}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition-all"
          >
            {t("spectator.backHome")}
          </button>
        </div>
      </main>
    );
  }

  // ─── Room Closed State ─────────────────────────────────────
  if (state === "closed") {
    return (
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <div className="animate-fade-in-up text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-theme-secondary mb-6">
            <span className="text-4xl">&#x1F44B;</span>
          </div>
          <h1 className="text-3xl font-bold text-theme-primary mb-2">
            {t("spectator.roomClosed")}
          </h1>
          <p className="text-theme-muted text-base mb-8">
            {t("spectator.hostDisconnected")}
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition-all"
          >
            {t("spectator.backHome")}
          </button>
        </div>
      </main>
    );
  }

  // ─── Joined - Waiting for game state ───────────────────────
  if (!gameState) {
    return (
      <main className="min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 gap-6">
        <div className="animate-fade-in-up text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
            <FontAwesomeIcon icon={faBullseye} className="text-accent text-3xl animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-theme-primary mb-2">
            {t("spectator.waitingForGame")}
          </h1>
          <p className="text-theme-muted text-base mb-6">
            {t("spectator.hostSetting")}
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-theme-muted text-sm bg-theme-card border border-theme-card rounded-xl px-4 py-2">
              <FontAwesomeIcon icon={faEye} className="text-xs" />
              <span>{t("spectator.spectators", { count: spectatorCount })}</span>
            </div>
            <div className="px-4 py-2 bg-theme-card border border-theme-card rounded-xl">
              <span className="text-theme-muted text-xs uppercase tracking-wider">{t("spectator.gameCode")}</span>
              <span className="text-lg font-mono font-bold text-accent ml-2">{code}</span>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ─── Spectating Active Game ────────────────────────────────
  return (
    <main className="h-screen bg-theme-primary flex flex-col px-4 py-3 gap-3 overflow-hidden">
      {/* Header bar */}
      <div className="flex items-center justify-between flex-shrink-0 animate-fade-in-down">
        <div className="flex items-center gap-3">
          <button
            onClick={handleLeave}
            className="px-3 py-2 bg-theme-elevated border border-theme-primary text-theme-secondary rounded-xl transition-all hover:border-accent hover:text-accent flex items-center gap-2 text-sm"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" /> {t("common.back")}
          </button>
          <div className="px-3 py-2 bg-theme-card border border-theme-card rounded-xl flex items-center gap-2">
            <span className="text-xs text-theme-muted uppercase tracking-wider">{t("spectator.gameCode")}:</span>
            <span className="text-sm font-mono font-bold text-accent tracking-wider">{code}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-theme-muted text-sm bg-theme-card border border-theme-card rounded-xl px-3 py-2">
            <FontAwesomeIcon icon={faEye} className="text-xs" />
            <span className="font-medium">{spectatorCount}</span>
          </div>
          <div className="px-3 py-2 bg-red-600/10 border border-red-600/20 text-red-400 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-live-dot" />
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
            <p className="text-theme-muted text-lg">
              {t("spectator.unsupportedGame")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
