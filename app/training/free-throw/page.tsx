"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Segment } from "@/services/boardinfo";
import {
  FreeThrowState,
  createFreeThrowState,
  processFreeThrowHit,
  getFreeThrowStats,
} from "@/services/training";
import { useGranboardConnection } from "@/app/cricket/game/hooks/useGranboardConnection";
import { useSettings } from "@/app/contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faGear,
  faCheck,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

export default function FreeThrowPage() {
  const router = useRouter();
  const t = useTranslations();
  const { openDialog } = useSettings();
  const [gameState, setGameState] = useState<FreeThrowState>(
    createFreeThrowState()
  );

  const onSegmentHit = useCallback((segment: Segment) => {
    const hitId = `${Date.now()}-${Math.random()}`;
    setGameState((prev) => processFreeThrowHit(prev, segment, hitId));
  }, []);

  const { connectionState, connectToBoard } =
    useGranboardConnection(onSegmentHit);

  const stats = getFreeThrowStats(gameState);
  const lastHits = gameState.hits.slice(-10).reverse();

  const handleReset = () => {
    setGameState(createFreeThrowState());
  };

  return (
    <main className="min-h-screen bg-theme-primary flex flex-col p-4 gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            data-testid="back-button"
            onClick={() => router.push("/training")}
            className="px-3 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {t("common.back")}
          </button>
          <h1 className="text-2xl font-bold text-theme-primary tracking-wider">
            {t("training.freeThrow.title")}
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-600 transition-all text-sm font-medium flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faRotateRight} />{" "}
            {t("training.reset")}
          </button>
          <button
            data-testid="settings-button"
            onClick={() => openDialog()}
            className="px-4 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg text-sm font-medium transition-all flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faGear} /> {t("cricket.game.settings")}
          </button>
          {connectionState === "connected" ? (
            <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium text-sm flex items-center gap-2">
              <FontAwesomeIcon icon={faCheck} />{" "}
              {t("cricket.game.connected")}
            </div>
          ) : (
            <button
              data-testid="connect-button"
              onClick={connectToBoard}
              disabled={connectionState === "connecting"}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:opacity-90 text-sm font-medium disabled:bg-theme-interactive transition-all"
            >
              {connectionState === "connecting"
                ? t("cricket.game.connecting")
                : connectionState === "error"
                ? t("cricket.game.errorRetry")
                : t("cricket.game.connectGranboard")}
            </button>
          )}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-orange-500">
            {gameState.totalDarts}
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.freeThrow.darts")}
          </div>
        </div>
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-accent">
            {gameState.totalPoints}
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.freeThrow.totalPoints")}
          </div>
        </div>
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-purple-500">{stats.ppd}</div>
          <div className="text-xs text-theme-muted uppercase">PPD</div>
        </div>
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-green-500">
            {stats.hitRate}%
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.freeThrow.hitRate")}
          </div>
        </div>
      </div>

      {/* Breakdown row */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <div className="bg-theme-card rounded-lg p-3 border border-theme-card text-center">
          <div className="text-xl font-bold text-theme-primary">
            {gameState.singles}
          </div>
          <div className="text-xs text-theme-muted">
            {t("training.freeThrow.singles")}
          </div>
        </div>
        <div className="bg-theme-card rounded-lg p-3 border border-theme-card text-center">
          <div className="text-xl font-bold text-blue-500">
            {gameState.doubles}
          </div>
          <div className="text-xs text-theme-muted">
            {t("training.freeThrow.doubles")}
          </div>
        </div>
        <div className="bg-theme-card rounded-lg p-3 border border-theme-card text-center">
          <div className="text-xl font-bold text-red-500">
            {gameState.triples}
          </div>
          <div className="text-xs text-theme-muted">
            {t("training.freeThrow.triples")}
          </div>
        </div>
        <div className="bg-theme-card rounded-lg p-3 border border-theme-card text-center">
          <div className="text-xl font-bold text-yellow-500">
            {gameState.bullseyes}
          </div>
          <div className="text-xs text-theme-muted">Bull</div>
        </div>
        <div className="bg-theme-card rounded-lg p-3 border border-theme-card text-center">
          <div className="text-xl font-bold text-yellow-600">
            {gameState.doubleBulls}
          </div>
          <div className="text-xs text-theme-muted">D.Bull</div>
        </div>
        <div className="bg-theme-card rounded-lg p-3 border border-theme-card text-center">
          <div className="text-xl font-bold text-gray-500">
            {gameState.misses}
          </div>
          <div className="text-xs text-theme-muted">
            {t("training.freeThrow.misses")}
          </div>
        </div>
      </div>

      {/* Recent hits */}
      <div className="bg-theme-card rounded-xl p-4 border border-theme-card flex-1">
        <h3 className="text-lg font-bold text-theme-primary mb-3">
          {t("training.freeThrow.recentHits")}
        </h3>
        {lastHits.length === 0 ? (
          <p className="text-theme-muted text-center py-8">
            {t("training.freeThrow.waitingForDarts")}
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {lastHits.map((hit, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm font-bold ${
                  hit.value === 0
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-500"
                    : hit.segment.Type === 3
                    ? "bg-red-100 dark:bg-red-900/40 text-red-600"
                    : hit.segment.Type === 2
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-600"
                    : "bg-theme-secondary text-theme-primary"
                }`}
              >
                {hit.segment.ShortName}{" "}
                <span className="text-xs opacity-70">({hit.value})</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Most hit section */}
      {stats.mostHitSection > 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <span className="text-theme-muted text-sm">
            {t("training.freeThrow.mostHit")}:{" "}
          </span>
          <span className="text-xl font-bold text-accent">
            {stats.mostHitSection === 25 ? "BULL" : stats.mostHitSection}
          </span>
          <span className="text-theme-muted text-sm">
            {" "}
            ({stats.mostHitCount}x)
          </span>
        </div>
      )}
    </main>
  );
}
