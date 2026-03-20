"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Segment } from "@/services/boardinfo";
import {
  CheckoutPracticeState,
  createCheckoutPracticeState,
  processCheckoutHit,
  getCheckoutPracticeStats,
  CHECKOUT_SCORES,
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

export default function CheckoutPracticePage() {
  const router = useRouter();
  const t = useTranslations();
  const { openDialog } = useSettings();
  const [startingScore, setStartingScore] = useState(101);
  const [doubleOut, setDoubleOut] = useState(true);
  const [gameState, setGameState] = useState<CheckoutPracticeState>(
    createCheckoutPracticeState(101, true)
  );

  const onSegmentHit = useCallback((segment: Segment) => {
    const hitId = `${Date.now()}-${Math.random()}`;
    setGameState((prev) => processCheckoutHit(prev, segment, hitId));
  }, []);

  const { connectionState, connectToBoard } =
    useGranboardConnection(onSegmentHit);

  const stats = getCheckoutPracticeStats(gameState);

  const handleReset = () => {
    setGameState(createCheckoutPracticeState(startingScore, doubleOut));
  };

  const handleChangeScore = (score: number) => {
    setStartingScore(score);
    setGameState(createCheckoutPracticeState(score, doubleOut));
  };

  const handleToggleDoubleOut = () => {
    const newDoubleOut = !doubleOut;
    setDoubleOut(newDoubleOut);
    setGameState(createCheckoutPracticeState(startingScore, newDoubleOut));
  };

  // Group checkout scores for display
  const highScores = CHECKOUT_SCORES.filter((s) => s >= 150);
  const midScores = CHECKOUT_SCORES.filter((s) => s >= 100 && s < 150);
  const lowScores = CHECKOUT_SCORES.filter((s) => s < 100);

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
            {t("training.checkout.title")}
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-600 transition-all text-sm font-medium flex items-center gap-2"
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

      {/* Score selector (only when no attempts yet) */}
      {gameState.totalAttempts === 0 && gameState.currentDarts.length === 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card">
          <h3 className="text-sm font-bold text-theme-muted mb-3 uppercase">
            {t("training.checkout.selectScore")}
          </h3>

          {/* Double out toggle */}
          <label className="flex items-center gap-3 mb-4 p-3 bg-theme-secondary rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={doubleOut}
              onChange={handleToggleDoubleOut}
              className="w-5 h-5 text-accent rounded focus:ring-accent"
            />
            <span className="font-medium text-theme-primary">
              {t("zeroOne.options.doubleOut.title")}
            </span>
          </label>

          {/* High scores */}
          <div className="mb-2">
            <span className="text-xs text-theme-muted">
              {t("training.checkout.high")}
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {highScores.map((score) => (
                <button
                  key={score}
                  onClick={() => handleChangeScore(score)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    startingScore === score
                      ? "bg-teal-700 text-white"
                      : "bg-theme-secondary text-theme-primary hover:bg-theme-tertiary"
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>
          </div>

          {/* Mid scores */}
          <div className="mb-2">
            <span className="text-xs text-theme-muted">
              {t("training.checkout.mid")}
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {midScores.map((score) => (
                <button
                  key={score}
                  onClick={() => handleChangeScore(score)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    startingScore === score
                      ? "bg-teal-700 text-white"
                      : "bg-theme-secondary text-theme-primary hover:bg-theme-tertiary"
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>
          </div>

          {/* Low scores */}
          <div>
            <span className="text-xs text-theme-muted">
              {t("training.checkout.low")}
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {lowScores.map((score) => (
                <button
                  key={score}
                  onClick={() => handleChangeScore(score)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                    startingScore === score
                      ? "bg-teal-700 text-white"
                      : "bg-theme-secondary text-theme-primary hover:bg-theme-tertiary"
                  }`}
                >
                  {score}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Current checkout display */}
      <div className="bg-teal-700 text-white rounded-2xl p-6 text-center shadow-2xl">
        <div className="text-sm uppercase tracking-wider mb-1 text-teal-200">
          {t("training.checkout.remaining")}
        </div>
        <div className="text-8xl font-black mb-2">{gameState.currentScore}</div>
        {gameState.suggestion && (
          <div className="text-lg text-teal-100">
            <span className="text-teal-300 text-sm">
              {t("training.checkout.suggestion")}:{" "}
            </span>
            <span className="font-bold">{gameState.suggestion}</span>
          </div>
        )}
        <div className="text-sm text-teal-300 mt-2">
          {t("training.checkout.dartsThrown", {
            count: gameState.currentDarts.length,
          })}
          {doubleOut && (
            <span className="ml-2">
              ({t("zeroOne.options.doubleOut.title")})
            </span>
          )}
        </div>
      </div>

      {/* Current darts in this attempt */}
      {gameState.currentDarts.length > 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card">
          <h3 className="text-sm font-bold text-theme-muted mb-2 uppercase">
            {t("training.checkout.currentAttempt")}
          </h3>
          <div className="flex gap-2">
            {gameState.currentDarts.map((hit, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-lg font-bold bg-theme-secondary text-theme-primary"
              >
                {hit.segment.ShortName}{" "}
                <span className="text-xs opacity-70">({hit.value})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-green-500">
            {stats.successRate}%
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.checkout.successRate")}
          </div>
        </div>
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-teal-500">
            {stats.successfulCheckouts}
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.checkout.checkouts")}
          </div>
        </div>
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-accent">
            {stats.totalAttempts}
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.checkout.attempts")}
          </div>
        </div>
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card text-center">
          <div className="text-3xl font-bold text-purple-500">
            {stats.avgDartsOnSuccess || "-"}
          </div>
          <div className="text-xs text-theme-muted uppercase">
            {t("training.checkout.avgDarts")}
          </div>
        </div>
      </div>

      {/* Recent attempts */}
      {gameState.attempts.length > 0 && (
        <div className="bg-theme-card rounded-xl p-4 border border-theme-card flex-1">
          <h3 className="text-lg font-bold text-theme-primary mb-3">
            {t("training.checkout.recentAttempts")}
          </h3>
          <div className="space-y-2">
            {[...gameState.attempts]
              .reverse()
              .slice(0, 10)
              .map((attempt, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    attempt.success
                      ? "bg-green-100 dark:bg-green-900/30"
                      : "bg-red-100 dark:bg-red-900/30"
                  }`}
                >
                  <div className="flex gap-1">
                    {attempt.darts.map((d, j) => (
                      <span
                        key={j}
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          attempt.success
                            ? "bg-green-200 dark:bg-green-800/40 text-green-700"
                            : "bg-red-200 dark:bg-red-800/40 text-red-700"
                        }`}
                      >
                        {d.segment.ShortName}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`font-bold text-sm ${
                      attempt.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {attempt.success
                      ? t("training.checkout.success")
                      : t("training.checkout.bust")}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
