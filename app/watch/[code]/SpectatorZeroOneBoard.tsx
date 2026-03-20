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
    <div className="flex flex-col gap-4 h-full">
      {/* Game info header */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-theme-muted uppercase tracking-wider">
          {gameState.mode} {gameState.doubleOut ? "(Double Out)" : ""}
        </div>
        <div className="text-sm text-theme-muted">
          {t("round")} {gameState.currentRound}
          {gameState.maxRounds > 0 ? ` / ${gameState.maxRounds}` : ""}
        </div>
      </div>

      {/* Game over banner */}
      {gameState.gameFinished && gameState.winner && (
        <div className="bg-yellow-600 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{gameState.winner.name} won!</div>
        </div>
      )}

      {/* Current player indicator */}
      {!gameState.gameFinished && (
        <div className="bg-accent/20 border border-accent/40 rounded-xl p-3 flex items-center justify-between">
          <div>
            <span className="text-sm text-theme-muted">Current:</span>
            <span className="text-lg font-bold text-accent ml-2">{currentPlayer?.player.name}</span>
          </div>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full ${
                  i < gameState.dartsThrown ? "bg-accent" : "bg-theme-secondary"
                }`}
              />
            ))}
          </div>
          {currentTurnHits.length > 0 && (
            <div className="flex gap-1">
              {currentTurnHits.map((hit, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-accent/30 text-accent rounded text-xs font-bold"
                >
                  {hit.ShortName}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Player scores grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {gameState.players.map((player, idx) => {
          const isCurrentPlayer = idx === gameState.currentPlayerIndex;
          const ppd = calculatePPD(player);
          const avg = calculateAverage(player);

          return (
            <div
              key={player.player.id}
              className={`bg-theme-card rounded-xl border-2 p-6 flex flex-col items-center justify-center transition-all ${
                isCurrentPlayer && !gameState.gameFinished
                  ? "border-accent shadow-lg shadow-accent/20"
                  : "border-theme-card"
              }`}
            >
              <div className={`text-lg font-bold mb-2 ${isCurrentPlayer ? "text-accent" : "text-theme-primary"}`}>
                {player.player.name}
              </div>
              <div className="text-7xl font-black text-theme-primary mb-3">
                {player.score}
              </div>
              <div className="flex gap-4 text-sm text-theme-muted">
                <span>PPD: <strong className="text-theme-primary">{ppd}</strong></span>
                <span>{t("average")}: <strong className="text-theme-primary">{avg}</strong></span>
                <span>{t("darts")}: <strong className="text-theme-primary">{player.dartsThrown}</strong></span>
              </div>
              {player.busts > 0 && (
                <div className="mt-1 text-xs text-red-500">
                  Busts: {player.busts}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Last hit indicator */}
      {lastHit && (
        <div className="text-center">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-bold animate-pulse">
            {lastHit.LongName} ({lastHit.Value})
          </span>
        </div>
      )}
    </div>
  );
}
