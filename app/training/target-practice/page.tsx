"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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
            Target Practice
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg hover:opacity-90 transition-all text-sm font-medium flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-secondary)',
              color: '#1a1a2e',
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
                color: '#1a1a2e',
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
              className="px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium disabled:opacity-50 transition-all"
              style={{
                background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
                color: '#1a1a2e',
              }}
            >
              {connectionState === "connecting"
                ? "Connecting…"
                : connectionState === "error"
                ? "Reconnect"
                : "Connect"}
            </button>
          )}
        </div>
      </div>

      {/* Target count selector (only if session not started or finished) */}
      {gameState.totalDarts === 0 && (
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
            Number of Targets
          </h3>
          <div className="flex gap-3">
            {[5, 10, 15, 20].map((count) => (
              <button
                key={count}
                onClick={() => handleChangeTargets(count)}
                className="px-4 py-2 rounded-lg font-bold transition-all"
                style={
                  totalTargets === count
                    ? {
                        backgroundColor: 'var(--hud-secondary)',
                        color: '#1a1a2e',
                      }
                    : {
                        backgroundColor: 'var(--hud-surface-container-highest)',
                        color: 'var(--hud-on-surface)',
                      }
                }
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Current target display */}
      {!gameState.sessionFinished && (
        <div
          className="rounded-2xl p-8 text-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, var(--hud-secondary) 0%, #2a9d8f 100%)',
            color: '#1a1a2e',
          }}
        >
          <div
            className="text-sm uppercase tracking-wider mb-2"
            style={{ color: 'rgba(26, 26, 46, 0.8)' }}
          >
            Aim for
          </div>
          <div className="text-8xl font-black mb-2" style={{ color: '#1a1a2e' }}>
            {getTargetDisplayName(gameState.currentTarget)}
          </div>
          <div className="text-lg" style={{ color: 'rgba(26, 26, 46, 0.7)' }}>
            {(() => { const count = 3 - gameState.currentRoundDarts.length; return count === 1 ? "1 dart remaining" : `${count} darts remaining`; })()}
          </div>
          <div className="text-sm mt-2" style={{ color: 'rgba(26, 26, 46, 0.7)' }}>
            {`${gameState.targetsCompleted + 1} / ${gameState.targetsTotal}`}
          </div>
        </div>
      )}

      {/* Session finished banner */}
      {gameState.sessionFinished && (
        <div
          className="rounded-2xl p-8 text-center shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
            color: '#1a1a2e',
          }}
        >
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#1a1a2e' }}>
            Session Complete
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-3xl font-bold" style={{ color: '#1a1a2e' }}>{stats.accuracy}%</div>
              <div className="text-sm" style={{ color: 'rgba(26, 26, 46, 0.7)' }}>
                Accuracy
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#1a1a2e' }}>{stats.perfectRate}%</div>
              <div className="text-sm" style={{ color: 'rgba(26, 26, 46, 0.7)' }}>
                Perfect Rate
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#1a1a2e' }}>{stats.correctHits}</div>
              <div className="text-sm" style={{ color: 'rgba(26, 26, 46, 0.7)' }}>
                Correct Hits
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: '#1a1a2e' }}>{stats.totalDarts}</div>
              <div className="text-sm" style={{ color: 'rgba(26, 26, 46, 0.7)' }}>
                Darts
              </div>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-8 py-3 rounded-xl font-bold text-lg transition-all hover:opacity-90"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-on-surface)',
            }}
          >
            Play Again
          </button>
        </div>
      )}

      {/* Stats */}
      {!gameState.sessionFinished && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="rounded-xl p-4 text-center"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <div className="text-3xl font-bold" style={{ color: 'var(--hud-secondary)' }}>
              {stats.accuracy}%
            </div>
            <div className="text-xs uppercase" style={{ color: 'var(--hud-on-tertiary-container)' }}>
              Accuracy
            </div>
          </div>
          <div
            className="rounded-xl p-4 text-center"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <div className="text-3xl font-bold" style={{ color: 'var(--hud-secondary)' }}>
              {stats.perfectRate}%
            </div>
            <div className="text-xs uppercase" style={{ color: 'var(--hud-on-tertiary-container)' }}>
              Perfect Rate
            </div>
          </div>
          <div
            className="rounded-xl p-4 text-center"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <div className="text-3xl font-bold" style={{ color: 'var(--hud-primary)' }}>
              {stats.correctHits}/{stats.totalDarts}
            </div>
            <div className="text-xs uppercase" style={{ color: 'var(--hud-on-tertiary-container)' }}>
              Correct Hits
            </div>
          </div>
          <div
            className="rounded-xl p-4 text-center"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <div className="text-3xl font-bold" style={{ color: 'var(--hud-game-training)' }}>
              {stats.targetsCompleted}/{gameState.targetsTotal}
            </div>
            <div className="text-xs uppercase" style={{ color: 'var(--hud-on-tertiary-container)' }}>
              Targets
            </div>
          </div>
        </div>
      )}

      {/* Current round darts */}
      {!gameState.sessionFinished && gameState.currentRoundDarts.length > 0 && (
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
            Current Darts
          </h3>
          <div className="flex gap-2">
            {gameState.currentRoundDarts.map((hit, i) => {
              const isCorrect =
                (hit.segment.Section as number) === gameState.currentTarget;
              return (
                <div
                  key={i}
                  className="px-4 py-2 rounded-lg font-bold"
                  style={
                    isCorrect
                      ? {
                          backgroundColor: 'rgba(68, 226, 205, 0.15)',
                          color: 'var(--hud-secondary)',
                        }
                      : {
                          backgroundColor: 'rgba(147, 0, 10, 0.4)',
                          color: 'var(--hud-error)',
                        }
                  }
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
            History
          </h3>
          <div className="space-y-2">
            {[...gameState.targetHistory].reverse().map((entry, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 rounded-lg"
                style={{ backgroundColor: 'var(--hud-surface-container-low)' }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-bold w-12 text-center"
                    style={{ color: 'var(--hud-secondary)' }}
                  >
                    {getTargetDisplayName(entry.target)}
                  </span>
                  <div className="flex gap-1">
                    {entry.darts.map((d, j) => {
                      const isCorrect =
                        (d.segment.Section as number) === entry.target;
                      return (
                        <span
                          key={j}
                          className="px-2 py-1 rounded text-xs font-bold"
                          style={
                            isCorrect
                              ? {
                                  backgroundColor: 'rgba(68, 226, 205, 0.15)',
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
                      );
                    })}
                  </div>
                </div>
                <span className="font-bold" style={{ color: 'var(--hud-on-surface)' }}>
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
