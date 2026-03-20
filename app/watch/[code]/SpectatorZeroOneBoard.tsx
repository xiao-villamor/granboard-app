"use client";

import { useTranslations } from "next-intl";
import type {
  SerializedZeroOneGameState,
  SerializedSegment,
} from "@/services/socketTypes";

interface SpectatorZeroOneBoardProps {
  gameState: SerializedZeroOneGameState;
  currentTurnHits: SerializedSegment[];
  lastHit: SerializedSegment | null;
}

function calculatePPD(player: { dartsThrown: number; totalPointsScored: number }): number {
  if (player.dartsThrown === 0) return 0;
  return Math.round((player.totalPointsScored / player.dartsThrown) * 100) / 100;
}

function calculateAverage(player: { roundsPlayed: number; totalPointsScored: number }): number {
  if (player.roundsPlayed === 0) return 0;
  return Math.round((player.totalPointsScored / player.roundsPlayed) * 100) / 100;
}

export function SpectatorZeroOneBoard({ gameState, currentTurnHits, lastHit }: SpectatorZeroOneBoardProps) {
  const t = useTranslations("zeroOne.game");

  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Game info bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted">
            {gameState.mode} {gameState.doubleOut ? "(Double Out)" : ""}
          </span>
        </div>
        <div className="text-xs font-medium text-theme-muted bg-theme-card border border-theme-card rounded-lg px-3 py-1">
          {t("round")} {gameState.currentRound}
          {gameState.maxRounds > 0 ? ` / ${gameState.maxRounds}` : ""}
        </div>
      </div>

      {/* Game over banner */}
      {gameState.gameFinished && gameState.winner && (
        <div className="bg-gradient-to-r from-yellow-600 to-amber-500 text-white rounded-xl p-4 text-center animate-scale-in">
          <div className="text-3xl font-black tracking-tight">{gameState.winner.name} won!</div>
        </div>
      )}

      {/* Current player + dart count */}
      {!gameState.gameFinished && (
        <div className="bg-theme-card border border-accent/20 rounded-xl p-3 flex items-center justify-between animate-glow-pulse">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
              <span className="text-accent text-xs font-black">&#x25B6;</span>
            </div>
            <div>
              <div className="text-xs text-theme-muted">{t("currentPlayer")}</div>
              <div className="text-base font-bold text-accent">{currentPlayer?.player.name}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Current turn hits */}
            {currentTurnHits.length > 0 && (
              <div className="flex gap-1.5">
                {currentTurnHits.map((hit, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-accent/15 text-accent rounded-lg text-xs font-bold border border-accent/20"
                  >
                    {hit.ShortName}
                  </span>
                ))}
              </div>
            )}
            {/* Dart dots */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i < gameState.dartsThrown
                      ? "bg-accent shadow-sm shadow-accent/30"
                      : "bg-theme-secondary"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Player scores grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 stagger-children">
        {gameState.players.map((player, idx) => {
          const isCurrentPlayer = idx === gameState.currentPlayerIndex;
          const ppd = calculatePPD(player);
          const avg = calculateAverage(player);
          const isWinner = gameState.gameFinished && player.score === 0;

          return (
            <div
              key={player.player.id}
              className={`bg-theme-card rounded-xl border p-5 flex flex-col items-center justify-center transition-all animate-fade-in-up ${
                isWinner
                  ? "border-yellow-500/50 shadow-lg shadow-yellow-500/10"
                  : isCurrentPlayer && !gameState.gameFinished
                  ? "border-accent/40 shadow-lg shadow-accent/10"
                  : "border-theme-card"
              }`}
            >
              {/* Player name */}
              <div className="flex items-center gap-2 mb-3">
                {isCurrentPlayer && !gameState.gameFinished && (
                  <div className="w-2 h-2 rounded-full bg-accent animate-live-dot" />
                )}
                {isWinner && (
                  <span className="text-yellow-500 text-sm">&#9733;</span>
                )}
                <span className={`text-sm font-bold uppercase tracking-wider ${
                  isWinner
                    ? "text-yellow-500"
                    : isCurrentPlayer && !gameState.gameFinished
                    ? "text-accent"
                    : "text-theme-muted"
                }`}>
                  {player.player.name}
                </span>
              </div>

              {/* Big score */}
              <div className={`text-7xl font-black tracking-tight mb-4 transition-all ${
                isWinner
                  ? "text-yellow-500"
                  : isCurrentPlayer && !gameState.gameFinished
                  ? "text-accent"
                  : "text-theme-primary"
              }`}>
                {player.score}
              </div>

              {/* Stats row */}
              <div className="flex gap-4 text-xs text-theme-muted">
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider">PPD</span>
                  <span className="text-sm font-bold text-theme-primary">{ppd.toFixed(2)}</span>
                </div>
                <div className="w-px h-6 bg-theme-card" />
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider">{t("average")}</span>
                  <span className="text-sm font-bold text-theme-primary">{avg.toFixed(2)}</span>
                </div>
                <div className="w-px h-6 bg-theme-card" />
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider">{t("darts")}</span>
                  <span className="text-sm font-bold text-theme-primary">{player.dartsThrown}</span>
                </div>
              </div>

              {/* Busts indicator */}
              {player.busts > 0 && (
                <div className="mt-2 flex items-center gap-1.5 text-red-400 text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <span className="font-medium">Busts: {player.busts}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Last hit indicator */}
      {lastHit && (
        <div className="text-center animate-fade-in">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 text-accent rounded-xl text-sm font-bold border border-accent/20">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {lastHit.LongName} ({lastHit.Value})
          </span>
        </div>
      )}
    </div>
  );
}
