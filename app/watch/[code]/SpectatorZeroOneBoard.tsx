"use client";

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
  const currentPlayer = gameState.players[gameState.currentPlayerIndex];

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Game info bar */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ color: 'var(--hud-tertiary)' }}
          >
            {gameState.mode} {gameState.doubleOut ? "(Double Out)" : ""}
          </span>
        </div>
        <div
          className="text-xs font-medium rounded-lg px-3 py-1"
          style={{
            color: 'var(--hud-tertiary)',
            backgroundColor: 'var(--hud-surface-container-high)',
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
          <div className="text-3xl font-black tracking-tight">{gameState.winner.name} won!</div>
        </div>
      )}

      {/* Current player + dart count */}
      {!gameState.gameFinished && (
        <div
          className="rounded-xl p-3 flex items-center justify-between animate-glow-pulse"
          style={{
            backgroundColor: 'var(--hud-glass-bg)',
            backdropFilter: 'blur(var(--hud-glass-blur))',
            outline: '1px solid rgba(69, 70, 77, 0.12)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: 'var(--hud-surface-container-high)' }}
            >
              <span style={{ color: 'var(--hud-primary)' }} className="text-xs font-black">&#x25B6;</span>
            </div>
            <div>
              <div
                className="text-xs"
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
                      color: 'var(--hud-primary)',
                      backgroundColor: 'var(--hud-surface-container-high)',
                      outline: '1px solid rgba(69, 70, 77, 0.12)',
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
                      ? '0 0 6px color-mix(in srgb, var(--hud-primary) 30%, transparent)'
                      : 'none',
                  }}
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
              className="rounded-xl p-5 flex flex-col items-center justify-center transition-all animate-fade-in-up"
              style={{
                ...(isWinner
                  ? {
                      backgroundColor: 'var(--hud-glass-bg)',
                      backdropFilter: 'blur(var(--hud-glass-blur))',
                      outline: '1px solid var(--hud-primary)',
                      boxShadow: '0 4px 24px color-mix(in srgb, var(--hud-primary) 10%, transparent)',
                    }
                  : isCurrentPlayer && !gameState.gameFinished
                  ? {
                      backgroundColor: 'var(--hud-glass-bg)',
                      backdropFilter: 'blur(var(--hud-glass-blur))',
                      outline: '1px solid color-mix(in srgb, var(--hud-primary) 40%, transparent)',
                      boxShadow: '0 4px 24px color-mix(in srgb, var(--hud-primary) 10%, transparent)',
                    }
                  : {
                      backgroundColor: 'var(--hud-surface-container-low)',
                      outline: '1px solid rgba(69, 70, 77, 0.12)',
                    }),
              }}
            >
              {/* Player name */}
              <div className="flex items-center gap-2 mb-3">
                {isCurrentPlayer && !gameState.gameFinished && (
                  <div
                    className="w-2 h-2 rounded-full animate-live-dot"
                    style={{ backgroundColor: 'var(--hud-primary)' }}
                  />
                )}
                {isWinner && (
                  <span className="text-sm" style={{ color: 'var(--hud-primary)' }}>&#9733;</span>
                )}
                <span
                  className="text-sm font-bold uppercase tracking-wider"
                  style={{
                    color: isWinner
                      ? 'var(--hud-primary)'
                      : isCurrentPlayer && !gameState.gameFinished
                      ? 'var(--hud-primary)'
                      : 'var(--hud-tertiary)',
                  }}
                >
                  {player.player.name}
                </span>
              </div>

              {/* Big score */}
              <div
                className="text-7xl font-black tracking-tight mb-4 transition-all"
                style={{
                  color: isWinner
                    ? 'var(--hud-primary)'
                    : isCurrentPlayer && !gameState.gameFinished
                    ? 'var(--hud-primary)'
                    : 'var(--hud-on-surface)',
                }}
              >
                {player.score}
              </div>

              {/* Stats row */}
              <div className="flex gap-4 text-xs">
                <div className="flex flex-col items-center gap-0.5">
                  <span
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: 'var(--hud-on-tertiary-container)' }}
                  >
                    PPD
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--hud-on-surface)' }}
                  >
                    {ppd.toFixed(2)}
                  </span>
                </div>
                <div
                  className="w-px h-6"
                  style={{ backgroundColor: 'var(--hud-surface-container-high)' }}
                />
                <div className="flex flex-col items-center gap-0.5">
                  <span
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: 'var(--hud-on-tertiary-container)' }}
                  >
                    {"Average"}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--hud-on-surface)' }}
                  >
                    {avg.toFixed(2)}
                  </span>
                </div>
                <div
                  className="w-px h-6"
                  style={{ backgroundColor: 'var(--hud-surface-container-high)' }}
                />
                <div className="flex flex-col items-center gap-0.5">
                  <span
                    className="text-[10px] uppercase tracking-wider"
                    style={{ color: 'var(--hud-on-tertiary-container)' }}
                  >
                    {"Darts"}
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: 'var(--hud-on-surface)' }}
                  >
                    {player.dartsThrown}
                  </span>
                </div>
              </div>

              {/* Busts indicator */}
              {player.busts > 0 && (
                <div
                  className="mt-2 flex items-center gap-1.5 text-xs"
                  style={{ color: 'var(--hud-error)' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--hud-error)' }}
                  />
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
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
            style={{
              color: 'var(--hud-primary)',
              backgroundColor: 'var(--hud-surface-container-high)',
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
