"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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
            className="px-3 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-medium"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-tertiary)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {"Back"}
          </button>
          <h1
            className="text-2xl font-bold tracking-wider"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {"Free Throw"}
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg transition-all text-sm font-medium flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-game-training)',
              color: '#1a1a1a',
            }}
          >
            <FontAwesomeIcon icon={faRotateRight} />{" "}
            {"Reset"}
          </button>
          <button
            data-testid="settings-button"
            onClick={() => openDialog()}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-tertiary)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <FontAwesomeIcon icon={faGear} /> {"Settings"}
          </button>
          {connectionState === "connected" ? (
            <div
              className="px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2"
              style={{
                backgroundColor: 'var(--hud-secondary)',
                color: '#1a1a1a',
              }}
            >
              <FontAwesomeIcon icon={faCheck} />{" "}
              {"Connected"}
            </div>
          ) : (
            <button
              data-testid="connect-button"
              onClick={connectToBoard}
              disabled={connectionState === "connecting"}
              className="px-4 py-2 rounded-lg hover:opacity-90 text-sm font-medium disabled:opacity-50 transition-all"
              style={{
                background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
                color: '#1a1a1a',
              }}
            >
              {connectionState === "connecting"
                ? "Connecting..."
                : connectionState === "error"
                ? "Error - Retry"
                : "Connect Granboard"}
            </button>
          )}
        </div>
      </div>

      {/* Stats Grid */}
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
            style={{ color: 'var(--hud-game-training)' }}
          >
            {gameState.totalDarts}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Darts"}
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
            {gameState.totalPoints}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Total Points"}
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
            {stats.ppd}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            PPD
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
            {stats.hitRate}%
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Hit Rate"}
          </div>
        </div>
      </div>

      {/* Breakdown row */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        <div
          className="rounded-lg p-3 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {gameState.singles}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Singles"}
          </div>
        </div>
        <div
          className="rounded-lg p-3 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--hud-secondary)' }}
          >
            {gameState.doubles}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Doubles"}
          </div>
        </div>
        <div
          className="rounded-lg p-3 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--hud-error)' }}
          >
            {gameState.triples}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Triples"}
          </div>
        </div>
        <div
          className="rounded-lg p-3 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--hud-primary)' }}
          >
            {gameState.bullseyes}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            Bull
          </div>
        </div>
        <div
          className="rounded-lg p-3 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--hud-primary)' }}
          >
            {gameState.doubleBulls}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            D.Bull
          </div>
        </div>
        <div
          className="rounded-lg p-3 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div
            className="text-xl font-bold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {gameState.misses}
          </div>
          <div
            className="text-xs uppercase tracking-widest font-semibold"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            {"Misses"}
          </div>
        </div>
      </div>

      {/* Recent hits */}
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
          {"Recent Hits"}
        </h3>
        {lastHits.length === 0 ? (
          <p
            className="text-center py-8"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {"Waiting for darts..."}
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {lastHits.map((hit, i) => (
              <div
                key={i}
                className="px-3 py-2 rounded-lg text-sm font-bold"
                style={
                  hit.value === 0
                    ? {
                        backgroundColor: 'var(--hud-surface-container-highest)',
                        color: 'var(--hud-on-tertiary-container)',
                      }
                    : hit.segment.Type === 3
                    ? {
                        backgroundColor: 'color-mix(in srgb, var(--hud-error-container) 40%, transparent)',
                        color: 'var(--hud-error)',
                      }
                    : hit.segment.Type === 2
                    ? {
                        backgroundColor: 'color-mix(in srgb, var(--hud-secondary) 15%, transparent)',
                        color: 'var(--hud-secondary)',
                      }
                    : {
                        backgroundColor: 'var(--hud-surface-container-high)',
                        color: 'var(--hud-on-surface)',
                      }
                }
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
        <div
          className="rounded-xl p-4 text-center"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <span
            className="text-sm"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {"Most Hit"}:{" "}
          </span>
          <span
            className="text-xl font-bold"
            style={{ color: 'var(--hud-primary)' }}
          >
            {stats.mostHitSection === 25 ? "BULL" : stats.mostHitSection}
          </span>
          <span
            className="text-sm"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {" "}
            ({stats.mostHitCount}x)
          </span>
        </div>
      )}
    </main>
  );
}
