"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Segment } from "@/services/boardinfo";
import {
  TargetPracticeState,
  createTargetPracticeState,
  processTargetPracticeHit,
  getTargetPracticeStats,
  getTargetDisplayName,
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

export default function TargetPracticePage() {
  const router = useRouter();
  const t = useTranslations();
  const { openDialog } = useSettings();
  const [totalTargets, setTotalTargets] = useState(10);
  const [gameState, setGameState] = useState<TargetPracticeState>(
    createTargetPracticeState(10)
  );

  const onSegmentHit = useCallback((segment: Segment) => {
    const hitId = `${Date.now()}-${Math.random()}`;
    setGameState((prev) => processTargetPracticeHit(prev, segment, hitId));
  }, []);

  const { connectionState, connectToBoard } =
    useGranboardConnection(onSegmentHit);

  const stats = getTargetPracticeStats(gameState);

  const handleReset = () => {
    setGameState(createTargetPracticeState(totalTargets));
  };

  const handleChangeTargets = (count: number) => {
    setTotalTargets(count);
    setGameState(createTargetPracticeState(count));
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
            {t("training.targetPractice.title")}
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-all text-sm font-medium flex items-center gap-2"
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

      {/* Target count selector (only if session not started or finished) */}
      {gameState.totalDarts === 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card">
          <h3 className="text-sm font-bold text-theme-muted mb-2 uppercase">
            {t("training.targetPractice.numberOfTargets")}
          </h3>
          <div className="flex gap-3">
            {[5, 10, 15, 20].map((count) => (
              <button
                key={count}
                onClick={() => handleChangeTargets(count)}
                className={`px-4 py-2 rounded-lg font-bold transition-all ${
                  totalTargets === count
                    ? "bg-purple-700 text-white"
                    : "bg-theme-secondary text-theme-primary hover:bg-theme-tertiary"
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Current target display */}
      {!gameState.sessionFinished && (
        <div className="bg-purple-700 text-white rounded-2xl p-8 text-center shadow-2xl">
          <div className="text-sm uppercase tracking-wider mb-2 text-purple-200">
            {t("training.targetPractice.aimFor")}
          </div>
          <div className="text-8xl font-black mb-2">
            {getTargetDisplayName(gameState.currentTarget)}
          </div>
          <div className="text-lg text-purple-200">
            {t("training.targetPractice.dartsRemaining", {
              count: 3 - gameState.currentRoundDarts.length,
            })}
          </div>
          <div className="text-sm text-purple-300 mt-2">
            {t("training.targetPractice.progress", {
              current: gameState.targetsCompleted + 1,
              total: gameState.targetsTotal,
            })}
          </div>
        </div>
      )}

      {/* Session finished banner */}
      {gameState.sessionFinished && (
        <div className="bg-yellow-600 text-white rounded-2xl p-8 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            {t("training.targetPractice.sessionComplete")}
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-3xl font-bold">{stats.accuracy}%</div>
              <div className="text-sm text-yellow-200">
                {t("training.targetPractice.accuracy")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.perfectRate}%</div>
              <div className="text-sm text-yellow-200">
                {t("training.targetPractice.perfectRate")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.correctHits}</div>
              <div className="text-sm text-yellow-200">
                {t("training.targetPractice.correctHits")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stats.totalDarts}</div>
              <div className="text-sm text-yellow-200">
                {t("training.freeThrow.darts")}
              </div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-white text-yellow-700 rounded-xl hover:bg-theme-secondary font-bold text-lg transition-all"
          >
            {t("training.playAgain")}
          </button>
        </div>
      )}

      {/* Stats */}
      {!gameState.sessionFinished && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
            <div className="text-3xl font-bold text-green-500">
              {stats.accuracy}%
            </div>
            <div className="text-xs text-theme-muted uppercase">
              {t("training.targetPractice.accuracy")}
            </div>
          </div>
          <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
            <div className="text-3xl font-bold text-purple-500">
              {stats.perfectRate}%
            </div>
            <div className="text-xs text-theme-muted uppercase">
              {t("training.targetPractice.perfectRate")}
            </div>
          </div>
          <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
            <div className="text-3xl font-bold text-accent">
              {stats.correctHits}/{stats.totalDarts}
            </div>
            <div className="text-xs text-theme-muted uppercase">
              {t("training.targetPractice.correctHits")}
            </div>
          </div>
          <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
            <div className="text-3xl font-bold text-orange-500">
              {stats.targetsCompleted}/{gameState.targetsTotal}
            </div>
            <div className="text-xs text-theme-muted uppercase">
              {t("training.targetPractice.targets")}
            </div>
          </div>
        </div>
      )}

      {/* Current round darts */}
      {!gameState.sessionFinished && gameState.currentRoundDarts.length > 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card">
          <h3 className="text-sm font-bold text-theme-muted mb-2 uppercase">
            {t("training.targetPractice.currentDarts")}
          </h3>
          <div className="flex gap-2">
            {gameState.currentRoundDarts.map((hit, i) => {
              const isCorrect =
                (hit.segment.Section as number) === gameState.currentTarget;
              return (
                <div
                  key={i}
                  className={`px-4 py-2 rounded-lg font-bold ${
                    isCorrect
                      ? "bg-green-100 dark:bg-green-900/40 text-green-600"
                      : "bg-red-100 dark:bg-red-900/40 text-red-600"
                  }`}
                >
                  {hit.segment.ShortName}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Target history */}
      {gameState.targetHistory.length > 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card flex-1">
          <h3 className="text-lg font-bold text-theme-primary mb-3">
            {t("training.targetPractice.history")}
          </h3>
          <div className="space-y-2">
            {[...gameState.targetHistory].reverse().map((entry, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-theme-secondary rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-purple-500 w-12 text-center">
                    {getTargetDisplayName(entry.target)}
                  </span>
                  <div className="flex gap-1">
                    {entry.darts.map((d, j) => {
                      const isCorrect =
                        (d.segment.Section as number) === entry.target;
                      return (
                        <span
                          key={j}
                          className={`px-2 py-1 rounded text-xs font-bold ${
                            isCorrect
                              ? "bg-green-100 dark:bg-green-900/40 text-green-600"
                              : "bg-red-100 dark:bg-red-900/40 text-red-600"
                          }`}
                        >
                          {d.segment.ShortName}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <span className="font-bold text-theme-primary">
                  {entry.correctHits}/3
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
