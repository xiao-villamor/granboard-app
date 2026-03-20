"use client";

import { useTranslations } from "next-intl";
import type {
  SerializedCricketGameState,
  SerializedPlayerCricketState,
  SerializedSegment,
} from "@/services/socketTypes";

const CRICKET_NUMBERS = [15, 16, 17, 18, 19, 20, 25] as const;

interface SpectatorCricketBoardProps {
  gameState: SerializedCricketGameState;
  currentTurnHits: SerializedSegment[];
  lastHit: SerializedSegment | null;
}

function getMarkSymbol(marks: number) {
  if (marks === 0) return "";
  if (marks === 1) return "/";
  if (marks === 2) return "X";
  if (marks >= 3) return "\u2297"; // ⊗
  return "";
}

function calculateMPR(player: SerializedPlayerCricketState): number {
  if (player.roundsPlayed === 0) return 0;
  return Math.round((player.totalMarks / player.roundsPlayed) * 100) / 100;
}

export function SpectatorCricketBoard({ gameState, currentTurnHits, lastHit }: SpectatorCricketBoardProps) {
  const t = useTranslations("cricket.game");

  const isNumberClosedByAll = (num: number) => {
    return gameState.players.every((p) => (p.scores[num]?.marks ?? 0) >= 3);
  };

  const midPoint = Math.ceil(gameState.players.length / 2);
  const leftPlayers = gameState.players.slice(0, midPoint);
  const rightPlayers = gameState.players.slice(midPoint);

  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Game info header */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-theme-muted uppercase tracking-wider">
          {gameState.mode === "cutthroat" ? "Cricket Cut Throat" : "Cricket Standard"}
        </div>
        <div className="text-sm text-theme-muted">
          {t("round")} {gameState.currentRound}
          {gameState.maxRounds > 0 ? ` / ${gameState.maxRounds}` : ""}
        </div>
      </div>

      {/* Game over banner */}
      {gameState.gameFinished && gameState.winner && (
        <div className="bg-yellow-600 text-white rounded-xl p-4 text-center">
          <div className="text-3xl font-bold">{t("wonGame", { name: gameState.winner.name })}</div>
        </div>
      )}

      {/* Current player + dart count */}
      {!gameState.gameFinished && (
        <div className="bg-accent/20 border border-accent/40 rounded-xl p-3 flex items-center justify-between">
          <div>
            <span className="text-sm text-theme-muted">{t("currentPlayer")}:</span>
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
          {/* Show current turn hits */}
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

      {/* Scoreboard */}
      <div className="bg-theme-card rounded-xl shadow-2xl border-2 border-theme-card flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-theme-card z-10">
            <tr className="border-b-2 border-accent">
              {leftPlayers.map((p) => {
                const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex;
                return (
                  <th
                    key={p.player.id}
                    className={`p-2 text-center font-bold text-sm min-w-[70px] ${
                      isCurrentPlayer && !gameState.gameFinished
                        ? "text-accent border-b-4 border-accent"
                        : "text-theme-primary"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span>{p.player.name}</span>
                      {isCurrentPlayer && !gameState.gameFinished && (
                        <span className="text-accent text-xs">&#x25BC;</span>
                      )}
                    </div>
                  </th>
                );
              })}
              <th className="p-2 text-center font-bold text-theme-primary text-base min-w-[50px] border-x-2 border-theme-card" />
              {rightPlayers.map((p) => {
                const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex;
                return (
                  <th
                    key={p.player.id}
                    className={`p-2 text-center font-bold text-sm min-w-[70px] ${
                      isCurrentPlayer && !gameState.gameFinished
                        ? "text-accent border-b-4 border-accent"
                        : "text-theme-primary"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span>{p.player.name}</span>
                      {isCurrentPlayer && !gameState.gameFinished && (
                        <span className="text-accent text-xs">&#x25BC;</span>
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {CRICKET_NUMBERS.map((num) => {
              const allClosed = isNumberClosedByAll(num);
              return (
                <tr
                  key={num}
                  className={`border-b border-theme-card ${allClosed ? "bg-theme-elevated-alpha" : ""}`}
                >
                  {leftPlayers.map((p) => {
                    const score = p.scores[num];
                    const symbol = getMarkSymbol(score?.marks ?? 0);
                    const isClosed = (score?.marks ?? 0) >= 3;
                    return (
                      <td key={p.player.id} className={`p-2 text-center ${allClosed ? "bg-theme-secondary" : ""}`}>
                        <div
                          className={`text-2xl font-bold ${
                            isClosed
                              ? allClosed ? "text-theme-muted" : "text-green-400"
                              : (score?.marks ?? 0) > 0 ? "text-accent" : "text-theme-interactive"
                          }`}
                        >
                          {symbol || "-"}
                        </div>
                      </td>
                    );
                  })}
                  <td className={`p-2 text-center font-bold text-xl border-x-2 border-theme-card ${allClosed ? "text-theme-muted" : "text-theme-primary"}`}>
                    {num === 25 ? "BULL" : num}
                  </td>
                  {rightPlayers.map((p) => {
                    const score = p.scores[num];
                    const symbol = getMarkSymbol(score?.marks ?? 0);
                    const isClosed = (score?.marks ?? 0) >= 3;
                    return (
                      <td key={p.player.id} className={`p-2 text-center ${allClosed ? "bg-theme-secondary" : ""}`}>
                        <div
                          className={`text-2xl font-bold ${
                            isClosed
                              ? allClosed ? "text-theme-muted" : "text-green-400"
                              : (score?.marks ?? 0) > 0 ? "text-accent" : "text-theme-interactive"
                          }`}
                        >
                          {symbol || "-"}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {/* Points / MPR row */}
            <tr className="border-t-2 border-accent">
              {leftPlayers.map((p) => (
                <td key={p.player.id} className="p-2 text-center">
                  <div className="text-lg font-bold text-theme-primary">{p.totalPoints}</div>
                  <div className="text-xs text-theme-muted">MPR: {calculateMPR(p)}</div>
                </td>
              ))}
              <td className="p-2 text-center font-bold text-sm text-theme-muted border-x-2 border-theme-card">
                PTS
              </td>
              {rightPlayers.map((p) => (
                <td key={p.player.id} className="p-2 text-center">
                  <div className="text-lg font-bold text-theme-primary">{p.totalPoints}</div>
                  <div className="text-xs text-theme-muted">MPR: {calculateMPR(p)}</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
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
