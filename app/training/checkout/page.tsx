"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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
    <main
      className="min-h-screen flex flex-col p-4 gap-4"
      style={{ backgroundColor: 'var(--hud-background)' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            data-testid="back-button"
            onClick={() => router.push("/training")}
            className="px-3 py-2 rounded-lg transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-on-surface)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </button>
          <h1
            className="text-2xl font-bold tracking-wider"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            Checkout
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg transition-all text-sm font-medium flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-primary)',
              color: 'var(--hud-on-primary)',
            }}
          >
            <FontAwesomeIcon icon={faRotateRight} />{" "}
            Reset
          </button>
          <button
            data-testid="settings-button"
            onClick={() => openDialog()}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-on-surface)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon icon={faGear} /> Settings
          </button>
          {connectionState === "connected" ? (
            <div
              className="px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
              style={{
                backgroundColor: 'var(--hud-secondary)',
                color: 'var(--hud-on-secondary)',
              }}
            >
              <FontAwesomeIcon icon={faCheck} />{" "}
              Connected
            </div>
          ) : (
            <button
              data-testid="connect-button"
              onClick={connectToBoard}
              disabled={connectionState === "connecting"}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50"
              style={{
                background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
                color: 'var(--hud-on-primary)',
              }}
            >
              {connectionState === "connecting"
                ? "Connecting..."
                : connectionState === "error"
                ? "Error — tap to retry"
                : "Connect GranBoard"}
            </button>
          )}
        </div>
      </div>

      {/* Score selector (only when no attempts yet) */}
      {gameState.totalAttempts === 0 && gameState.currentDarts.length === 0 && (
        <div
          className="rounded-xl p-4"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <h3
            className="text-sm font-bold mb-3 uppercase"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Select a score
          </h3>

          {/* Double out toggle */}
          <label
            className="flex items-center gap-3 mb-4 p-3 rounded-lg cursor-pointer"
            style={{ backgroundColor: 'var(--hud-surface-container-low)' }}
          >
            <input
              type="checkbox"
              checked={doubleOut}
              onChange={handleToggleDoubleOut}
              className="w-5 h-5 rounded"
              style={{ accentColor: 'var(--hud-primary)' }}
            />
            <span
              className="font-medium"
              style={{ color: 'var(--hud-on-surface)' }}
            >
              Double Out
            </span>
          </label>

          {/* High scores */}
          <div className="mb-2">
            <span
              className="text-xs"
              style={{ color: 'var(--hud-on-tertiary-container)' }}
            >
              High (170–100)
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {highScores.map((score) => (
                <button
                  key={score}
                  onClick={() => handleChangeScore(score)}
                  className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                  style={
                    startingScore === score
                      ? {
                          backgroundColor: 'var(--hud-primary)',
                          color: 'var(--hud-on-primary)',
                        }
                      : {
                          backgroundColor: 'var(--hud-surface-container-highest)',
                          color: 'var(--hud-on-surface)',
                        }
                  }
                >
                  {score}
                </button>
              ))}
            </div>
          </div>

          {/* Mid scores */}
          <div className="mb-2">
            <span
              className="text-xs"
              style={{ color: 'var(--hud-on-tertiary-container)' }}
            >
              Mid (99–60)
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {midScores.map((score) => (
                <button
                  key={score}
                  onClick={() => handleChangeScore(score)}
                  className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                  style={
                    startingScore === score
                      ? {
                          backgroundColor: 'var(--hud-primary)',
                          color: 'var(--hud-on-primary)',
                        }
                      : {
                          backgroundColor: 'var(--hud-surface-container-highest)',
                          color: 'var(--hud-on-surface)',
                        }
                  }
                >
                  {score}
                </button>
              ))}
            </div>
          </div>

          {/* Low scores */}
          <div>
            <span
              className="text-xs"
              style={{ color: 'var(--hud-on-tertiary-container)' }}
            >
              Low (59–2)
            </span>
            <div className="flex flex-wrap gap-2 mt-1">
              {lowScores.map((score) => (
                <button
                  key={score}
                  onClick={() => handleChangeScore(score)}
                  className="px-3 py-1.5 rounded-lg text-sm font-bold transition-all"
                  style={
                    startingScore === score
                      ? {
                          backgroundColor: 'var(--hud-primary)',
                          color: 'var(--hud-on-primary)',
                        }
                      : {
                          backgroundColor: 'var(--hud-surface-container-highest)',
                          color: 'var(--hud-on-surface)',
                        }
                  }
                >
                  {score}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Current checkout display */}
      <div
        className="rounded-2xl p-6 text-center shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
        }}
      >
        <div
          className="text-sm uppercase tracking-wider mb-1"
          style={{ color: 'var(--hud-on-primary)', opacity: 0.8 }}
        >
          Remaining
        </div>
        <div
          className="text-8xl font-black mb-2"
          style={{ color: 'var(--hud-on-primary)' }}
        >
          {gameState.currentScore}
        </div>
        {gameState.suggestion && (
          <div className="text-lg">
            <span
              className="text-sm"
              style={{ color: 'var(--hud-on-primary)', opacity: 0.6 }}
            >
              Suggestion:{" "}
            </span>
            <span
              className="font-bold"
              style={{ color: 'var(--hud-on-primary)' }}
            >
              {gameState.suggestion}
            </span>
          </div>
        )}
        <div
          className="text-sm mt-2"
          style={{ color: 'var(--hud-on-primary)', opacity: 0.7 }}
        >
          {gameState.currentDarts.length === 1 ? "1 dart thrown" : `${gameState.currentDarts.length} darts thrown`}
          {doubleOut && (
            <span className="ml-2">
              (Double Out)
            </span>
          )}
        </div>
      </div>

      {/* Current darts in this attempt */}
      {gameState.currentDarts.length > 0 && (
        <div
          className="rounded-xl p-4"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <h3
            className="text-sm font-bold mb-2 uppercase"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Current Attempt
          </h3>
          <div className="flex gap-2">
            {gameState.currentDarts.map((hit, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-lg font-bold"
                style={{
                  backgroundColor: 'var(--hud-surface-container-highest)',
                  color: 'var(--hud-on-surface)',
                }}
              >
                {hit.segment.ShortName}{" "}
                <span className="text-xs" style={{ opacity: 0.7 }}>({hit.value})</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          className="rounded-xl p-4 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-3xl font-bold"
            style={{ color: 'var(--hud-secondary)' }}
          >
            {stats.successRate}%
          </div>
          <div
            className="text-xs uppercase"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Success Rate
          </div>
        </div>
        <div
          className="rounded-xl p-4 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-3xl font-bold"
            style={{ color: 'var(--hud-primary)' }}
          >
            {stats.successfulCheckouts}
          </div>
          <div
            className="text-xs uppercase"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Checkouts
          </div>
        </div>
        <div
          className="rounded-xl p-4 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-3xl font-bold"
            style={{ color: 'var(--hud-game-training)' }}
          >
            {stats.totalAttempts}
          </div>
          <div
            className="text-xs uppercase"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Attempts
          </div>
        </div>
        <div
          className="rounded-xl p-4 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-3xl font-bold"
            style={{ color: 'var(--hud-secondary)' }}
          >
            {stats.avgDartsOnSuccess || "-"}
          </div>
          <div
            className="text-xs uppercase"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Avg Darts
          </div>
        </div>
      </div>

      {/* Recent attempts */}
      {gameState.attempts.length > 0 && (
        <div
          className="rounded-xl p-4 flex-1"
          style={{
            backgroundColor: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <h3
            className="text-lg font-bold mb-3"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            Recent Attempts
          </h3>
          <div className="space-y-2">
            {[...gameState.attempts]
              .reverse()
              .slice(0, 10)
              .map((attempt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{
                    backgroundColor: attempt.success
                      ? 'rgba(68, 226, 205, 0.1)'
                      : 'rgba(255, 180, 171, 0.1)',
                  }}
                >
                  <div className="flex gap-1">
                    {attempt.darts.map((d, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={
                          attempt.success
                            ? {
                                backgroundColor: 'rgba(68, 226, 205, 0.2)',
                                color: 'var(--hud-secondary)',
                              }
                            : {
                                backgroundColor: 'rgba(147, 0, 10, 0.4)',
                                color: 'var(--hud-error)',
                              }
                        }
                      >
                        {d.segment.ShortName}
                      </span>
                    ))}
                  </div>
                  <span
                    className="font-bold text-sm"
                    style={{
                      color: attempt.success
                        ? 'var(--hud-secondary)'
                        : 'var(--hud-error)',
                    }}
                  >
                    {attempt.success
                      ? "Success"
                      : "Bust"}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </main>
  );
}
