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
    <div className="flex flex-col gap-3 h-full">
      {/* Game info bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-theme-muted">
            {gameState.mode === "cutthroat" ? "Cricket Cut Throat" : "Cricket Standard"}
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
          <div className="text-3xl font-black tracking-tight">{t("wonGame", { name: gameState.winner.name })}</div>
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

      {/* Scoreboard */}
      <div className="bg-theme-card rounded-xl shadow-lg border border-theme-card flex-1 overflow-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-theme-card z-10">
            <tr className="border-b-2 border-accent/30">
              {leftPlayers.map((p) => {
                const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex;
                return (
                  <th
                    key={p.player.id}
                    className={`p-2.5 text-center font-bold text-sm min-w-[70px] transition-all ${
                      isCurrentPlayer && !gameState.gameFinished
                        ? "text-accent"
                        : "text-theme-primary"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className={isCurrentPlayer && !gameState.gameFinished ? "text-accent" : ""}>{p.player.name}</span>
                      {isCurrentPlayer && !gameState.gameFinished && (
                        <div className="w-full h-0.5 bg-accent rounded-full" />
                      )}
                    </div>
                  </th>
                );
              })}
              <th className="p-2.5 text-center font-bold text-theme-primary text-base min-w-[50px] border-x border-theme-card" />
              {rightPlayers.map((p) => {
                const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex;
                return (
                  <th
                    key={p.player.id}
                    className={`p-2.5 text-center font-bold text-sm min-w-[70px] transition-all ${
                      isCurrentPlayer && !gameState.gameFinished
                        ? "text-accent"
                        : "text-theme-primary"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span>{p.player.name}</span>
                      {isCurrentPlayer && !gameState.gameFinished && (
                        <div className="w-full h-0.5 bg-accent rounded-full" />
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
                  className={`border-b border-theme-card/50 transition-all ${allClosed ? "opacity-40" : ""}`}
                >
                  {leftPlayers.map((p) => {
                    const score = p.scores[num];
                    const marks = score?.marks ?? 0;
                    const symbol = getMarkSymbol(marks);
                    const isClosed = marks >= 3;
                    return (
                      <td key={p.player.id} className="p-2 text-center">
                        <div
                          className={`text-2xl font-bold transition-all ${
                            isClosed
                              ? allClosed ? "text-theme-muted" : "text-green-400"
                              : marks > 0 ? "text-accent" : "text-theme-tertiary"
                          }`}
                        >
                          {symbol || "\u2013"}
                        </div>
                      </td>
                    );
                  })}
                  <td className={`p-2 text-center font-black text-lg border-x border-theme-card/50 ${allClosed ? "text-theme-muted line-through" : "text-theme-primary"}`}>
                    {num === 25 ? "BULL" : num}
                  </td>
                  {rightPlayers.map((p) => {
                    const score = p.scores[num];
                    const marks = score?.marks ?? 0;
                    const symbol = getMarkSymbol(marks);
                    const isClosed = marks >= 3;
                    return (
                      <td key={p.player.id} className="p-2 text-center">
                        <div
                          className={`text-2xl font-bold transition-all ${
                            isClosed
                              ? allClosed ? "text-theme-muted" : "text-green-400"
                              : marks > 0 ? "text-accent" : "text-theme-tertiary"
                          }`}
                        >
                          {symbol || "\u2013"}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {/* Points / MPR row */}
            <tr className="border-t-2 border-accent/30 bg-theme-elevated/50">
              {leftPlayers.map((p) => (
                <td key={p.player.id} className="p-3 text-center">
                  <div className="text-xl font-black text-theme-primary">{p.totalPoints}</div>
                  <div className="text-[10px] font-medium text-theme-muted uppercase tracking-wider">MPR {calculateMPR(p)}</div>
                </td>
              ))}
              <td className="p-3 text-center font-bold text-xs text-theme-muted border-x border-theme-card/50 uppercase tracking-wider">
                PTS
              </td>
              {rightPlayers.map((p) => (
                <td key={p.player.id} className="p-3 text-center">
                  <div className="text-xl font-black text-theme-primary">{p.totalPoints}</div>
                  <div className="text-[10px] font-medium text-theme-muted uppercase tracking-wider">MPR {calculateMPR(p)}</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
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
