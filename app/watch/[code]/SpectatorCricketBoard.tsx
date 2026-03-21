"use client";

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
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {gameState.mode === "cutthroat" ? "Cricket Cut Throat" : "Cricket Standard"}
          </span>
        </div>
        <div
          className="text-xs font-semibold uppercase tracking-widest rounded-lg px-3 py-1"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            color: 'var(--hud-tertiary)',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          {"Round"} {gameState.currentRound}
          {gameState.maxRounds > 0 ? ` / ${gameState.maxRounds}` : ""}
        </div>
      </div>

      {/* Game over banner */}
      {gameState.gameFinished && gameState.winner && (
        <div
          className="rounded-xl p-4 text-center animate-scale-in"
          style={{
            background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
            color: 'var(--hud-on-primary)',
          }}
        >
          <div className="text-3xl font-black tracking-tight">{`${gameState.winner.name} won!`}</div>
        </div>
      )}

      {/* Current player + dart count */}
      {!gameState.gameFinished && (
        <div
          className="rounded-xl p-3 flex items-center justify-between animate-glow-pulse"
          style={{
            backgroundColor: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--hud-surface-container-high)' }}
            >
              <span className="text-xs font-black" style={{ color: 'var(--hud-primary)' }}>&#x25B6;</span>
            </div>
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--hud-tertiary)' }}
              >
                {"Current Player"}
              </div>
              <div
                className="text-base font-bold"
                style={{ color: 'var(--hud-primary)' }}
              >
                {currentPlayer?.player.name}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Current turn hits */}
            {currentTurnHits.length > 0 && (
              <div className="flex gap-1.5">
                {currentTurnHits.map((hit, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--hud-surface-container-high)',
                      color: 'var(--hud-primary)',
                    }}
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
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i < gameState.dartsThrown
                      ? 'var(--hud-primary)'
                      : 'var(--hud-surface-container-high)',
                    boxShadow: i < gameState.dartsThrown
                      ? '0 1px 3px rgba(255, 185, 95, 0.3)'
                      : 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scoreboard */}
      <div
        className="rounded-xl shadow-lg flex-1 overflow-auto"
        style={{
          backgroundColor: 'var(--hud-glass-bg)',
          backdropFilter: 'blur(var(--hud-glass-blur))',
        }}
      >
        <table className="w-full border-collapse">
          <thead
            className="sticky top-0 z-10"
            style={{ backgroundColor: 'var(--hud-surface-container)' }}
          >
            <tr>
              {leftPlayers.map((p) => {
                const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex;
                return (
                  <th
                    key={p.player.id}
                    className="p-2.5 text-center font-bold text-sm min-w-[70px] transition-all"
                    style={{
                      color: isCurrentPlayer && !gameState.gameFinished
                        ? 'var(--hud-primary)'
                        : 'var(--hud-on-surface)',
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span>{p.player.name}</span>
                      {isCurrentPlayer && !gameState.gameFinished && (
                        <div
                          className="w-full h-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--hud-primary)' }}
                        />
                      )}
                    </div>
                  </th>
                );
              })}
              <th
                className="p-2.5 text-center font-bold text-base min-w-[50px]"
                style={{
                  color: 'var(--hud-on-surface)',
                  outline: '1px solid rgba(69, 70, 77, 0.12)',
                }}
              />
              {rightPlayers.map((p) => {
                const isCurrentPlayer = gameState.players.indexOf(p) === gameState.currentPlayerIndex;
                return (
                  <th
                    key={p.player.id}
                    className="p-2.5 text-center font-bold text-sm min-w-[70px] transition-all"
                    style={{
                      color: isCurrentPlayer && !gameState.gameFinished
                        ? 'var(--hud-primary)'
                        : 'var(--hud-on-surface)',
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span>{p.player.name}</span>
                      {isCurrentPlayer && !gameState.gameFinished && (
                        <div
                          className="w-full h-0.5 rounded-full"
                          style={{ backgroundColor: 'var(--hud-primary)' }}
                        />
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
                  className={`transition-all ${allClosed ? "opacity-40" : ""}`}
                  style={{ outline: '1px solid rgba(69, 70, 77, 0.12)' }}
                >
                  {leftPlayers.map((p) => {
                    const score = p.scores[num];
                    const marks = score?.marks ?? 0;
                    const symbol = getMarkSymbol(marks);
                    const isClosed = marks >= 3;
                    return (
                      <td key={p.player.id} className="p-2 text-center">
                        <div
                          className="text-2xl font-bold transition-all"
                          style={{
                            color: isClosed
                              ? allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)'
                              : marks > 0 ? 'var(--hud-primary)' : 'var(--hud-on-tertiary-container)',
                          }}
                        >
                          {symbol || "\u2013"}
                        </div>
                      </td>
                    );
                  })}
                  <td
                    className={`p-2 text-center font-black text-lg ${allClosed ? "line-through" : ""}`}
                    style={{
                      backgroundColor: 'var(--hud-surface-container-low)',
                      color: allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-on-surface)',
                      outline: '1px solid rgba(69, 70, 77, 0.12)',
                    }}
                  >
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
                          className="text-2xl font-bold transition-all"
                          style={{
                            color: isClosed
                              ? allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)'
                              : marks > 0 ? 'var(--hud-primary)' : 'var(--hud-on-tertiary-container)',
                          }}
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
            <tr style={{ backgroundColor: 'var(--hud-surface-container-low)' }}>
              {leftPlayers.map((p) => (
                <td key={p.player.id} className="p-3 text-center">
                  <div
                    className="text-xl font-black"
                    style={{ color: 'var(--hud-on-surface)' }}
                  >
                    {p.totalPoints}
                  </div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--hud-tertiary)' }}
                  >
                    MPR {calculateMPR(p)}
                  </div>
                </td>
              ))}
              <td
                className="p-3 text-center font-semibold text-xs uppercase tracking-widest"
                style={{
                  color: 'var(--hud-tertiary)',
                  outline: '1px solid rgba(69, 70, 77, 0.12)',
                }}
              >
                PTS
              </td>
              {rightPlayers.map((p) => (
                <td key={p.player.id} className="p-3 text-center">
                  <div
                    className="text-xl font-black"
                    style={{ color: 'var(--hud-on-surface)' }}
                  >
                    {p.totalPoints}
                  </div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--hud-tertiary)' }}
                  >
                    MPR {calculateMPR(p)}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Last hit indicator */}
      {lastHit && (
        <div className="text-center animate-fade-in">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
            style={{
              backgroundColor: 'var(--hud-surface-container-high)',
              color: 'var(--hud-primary)',
              outline: '1px solid rgba(69, 70, 77, 0.12)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--hud-primary)' }}
            />
            {lastHit.LongName} ({lastHit.Value})
          </span>
        </div>
      )}
    </div>
  );
}
