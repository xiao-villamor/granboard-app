import {
  CricketGameMode,
  CricketNumber,
  PlayerState,
  CRICKET_NUMBERS,
  getPlayerScore,
  calculateMPR,
} from "@/services/cricket";


interface ScoreBoardProps {
  players: PlayerState[];
  currentPlayerIndex: number;
  gameMode: CricketGameMode;
  gameFinished: boolean;
}

type MarkState = "single" | "double" | "closed" | null;

function getMarkState(marks: number): MarkState {
  if (marks === 0) return null;
  if (marks === 1) return "single";
  if (marks === 2) return "double";
  return "closed";
}

interface MarkCellProps {
  marks: number;
  allClosed: boolean;
}

function MarkCell({ marks, allClosed }: MarkCellProps) {
  const markState = getMarkState(marks);
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10">
      {markState === "closed" && (
        <div
          className="absolute inset-0 rounded-full border-2"
          style={{ borderColor: allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)' }}
        />
      )}
      {markState === "single" && (
        <span className="text-2xl font-bold leading-none" style={{ color: 'var(--hud-primary)' }}>/</span>
      )}
      {(markState === "double" || markState === "closed") && (
        <span
          className="text-2xl font-bold leading-none"
          style={{ color: markState === "closed" && allClosed ? 'var(--hud-on-tertiary-container)' : markState === "closed" ? 'var(--hud-secondary)' : 'var(--hud-primary)' }}
        >
          ✕
        </span>
      )}
      {!markState && (
        <span className="text-2xl font-light opacity-20" style={{ color: 'var(--hud-on-surface-variant)' }}>—</span>
      )}
    </div>
  );
}

export function ScoreBoard({
  players,
  currentPlayerIndex,
  gameMode,
  gameFinished,
}: ScoreBoardProps) {

  // Check if all players have closed a specific number
  const isNumberClosedByAll = (num: CricketNumber) => {
    return players.every((p) => getPlayerScore(p, num).marks >= 3);
  };

  // Split players into left and right columns
  const midPoint = Math.ceil(players.length / 2);
  const leftPlayers = players.slice(0, midPoint);
  const rightPlayers = players.slice(midPoint);

  return (
    <div
      className="rounded-xl shadow-2xl h-full flex flex-col overflow-hidden border"
      style={{
        backgroundColor: 'var(--hud-surface-container-low)',
        borderColor: 'rgba(69, 70, 77, 0.10)',
      }}
    >
      {/* ── Player Header Cards ── */}
      <div
        className="grid gap-3 p-3 border-b"
        style={{
          gridTemplateColumns: `repeat(${players.length}, 1fr)`,
          borderColor: 'rgba(69, 70, 77, 0.10)',
        }}
      >
        {players.map((playerState, idx) => {
          const isCurrentPlayer = idx === currentPlayerIndex;
          const isFinished = gameMode === CricketGameMode.Standard
            ? CRICKET_NUMBERS.every((n) => getPlayerScore(playerState, n).marks >= 3)
            : false;

          return (
            <div
              key={playerState.player.id}
              data-testid={`scoreboard-player-${playerState.player.name}`}
              className="relative p-4 rounded-xl border transition-all"
              style={{
                backgroundColor: isCurrentPlayer && !gameFinished
                  ? 'var(--hud-surface-container-low)'
                  : 'var(--hud-surface-container-low)',
                borderColor: isCurrentPlayer && !gameFinished
                  ? 'rgba(255, 185, 95, 0.10)'
                  : 'transparent',
                boxShadow: isCurrentPlayer && !gameFinished
                  ? '0 0 20px rgba(255, 185, 95, 0.15)'
                  : 'none',
                opacity: isCurrentPlayer || gameFinished ? 1 : 0.6,
              }}
            >
              {/* CURRENT TURN badge */}
              {isCurrentPlayer && !gameFinished && (
                <div
                  className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-tighter shadow-xl"
                  style={{
                    backgroundColor: 'var(--hud-primary)',
                    color: 'var(--hud-on-primary)',
                  }}
                >
                  CURRENT TURN
                </div>
              )}

              <div className="flex flex-col gap-1 mb-2">
                <span
                  className="font-headline font-extrabold text-xs tracking-widest uppercase"
                  style={{
                    color: isCurrentPlayer && !gameFinished
                      ? 'var(--hud-primary)'
                      : 'var(--hud-tertiary)',
                  }}
                >
                  {isCurrentPlayer && !gameFinished ? "Active" : "Player"}
                </span>
                <h2
                  className="text-lg font-headline font-bold truncate"
                  style={{ color: 'var(--hud-on-surface)' }}
                >
                  {playerState.player.name}
                </h2>
              </div>

              {/* Score (points) */}
              <div
                className="text-4xl font-headline font-black"
                style={{
                  color: isCurrentPlayer && !gameFinished
                    ? 'var(--hud-primary)'
                    : 'var(--hud-on-surface-variant)',
                }}
              >
                {playerState.totalPoints}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Cricket Scoring Table ── */}
      <div className="overflow-auto flex-1 relative">
        <div
          className="overflow-hidden"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${leftPlayers.length}, 1fr) 3.5rem repeat(${rightPlayers.length || 1}, 1fr)`,
          }}
        >
          {/* Player 1 marks column headers */}
          {leftPlayers.map((playerState) => {
            const isCurrentPlayer = players.indexOf(playerState) === currentPlayerIndex;
            return (
              <div
                key={playerState.player.id}
                className="py-2 text-center font-bold text-xs sticky top-0 z-10"
                style={{
                  backgroundColor: 'var(--hud-surface-container-low)',
                  color: isCurrentPlayer && !gameFinished
                    ? 'var(--hud-primary)'
                    : 'var(--hud-on-tertiary-container)',
                  borderBottom: isCurrentPlayer && !gameFinished
                    ? '2px solid var(--hud-primary)'
                    : '2px solid var(--hud-surface-container-highest)',
                }}
              >
                {playerState.player.name}
              </div>
            );
          })}

          {/* Center header */}
          <div
            className="py-2 text-center sticky top-0 z-10"
            style={{
              backgroundColor: 'var(--hud-surface-container-highest)',
              borderBottom: '2px solid var(--hud-surface-container-highest)',
            }}
          />

          {/* Player 2 marks column headers */}
          {rightPlayers.length > 0 ? (
            rightPlayers.map((playerState) => {
              const isCurrentPlayer = players.indexOf(playerState) === currentPlayerIndex;
              return (
                <div
                  key={playerState.player.id}
                  className="py-2 text-center font-bold text-xs sticky top-0 z-10"
                  style={{
                    backgroundColor: 'var(--hud-surface-container-low)',
                    color: isCurrentPlayer && !gameFinished
                      ? 'var(--hud-primary)'
                      : 'var(--hud-on-tertiary-container)',
                    borderBottom: isCurrentPlayer && !gameFinished
                      ? '2px solid var(--hud-primary)'
                      : '2px solid var(--hud-surface-container-highest)',
                  }}
                >
                  {playerState.player.name}
                </div>
              );
            })
          ) : (
            <div
              className="py-2 sticky top-0 z-10"
              style={{
                backgroundColor: 'var(--hud-surface-container-low)',
                borderBottom: '2px solid var(--hud-surface-container-highest)',
              }}
            />
          )}

          {/* Rows for each cricket number */}
          {CRICKET_NUMBERS.map((num) => {
            const allClosed = isNumberClosedByAll(num);
            const rowStyle = {
              backgroundColor: allClosed ? 'rgba(45, 52, 73, 0.25)' : 'transparent',
              borderBottom: '1px solid var(--hud-surface-container-high)',
            };

            return [
              // Left player mark cells
              ...leftPlayers.map((playerState) => {
                const score = getPlayerScore(playerState, num);

                return (
                  <div
                    key={`${playerState.player.id}-${num}`}
                    className="h-14 flex items-center justify-center"
                    style={rowStyle}
                  >
                    <MarkCell marks={score.marks} allClosed={allClosed} />
                  </div>
                );
              }),

              // Center number cell
              <div
                key={`num-${num}`}
                data-testid={`cricket-number-${num === 25 ? 'Bull' : num}`}
                className="h-14 flex items-center justify-center font-headline font-extrabold text-xl"
                style={{
                  ...rowStyle,
                  backgroundColor: allClosed
                    ? 'rgba(45, 52, 73, 0.5)'
                    : 'var(--hud-surface-container-highest)',
                  color: allClosed ? 'var(--hud-on-tertiary-container)' : 'var(--hud-secondary)',
                  borderLeft: '1px solid var(--hud-surface-container-highest)',
                  borderRight: '1px solid var(--hud-surface-container-highest)',
                }}
              >
                {num === 25 ? "Bull" : num}
              </div>,

              // Right player mark cells (or empty if only 1 player column)
              ...(rightPlayers.length > 0
                ? rightPlayers.map((playerState) => {
                    const score = getPlayerScore(playerState, num);

                    return (
                      <div
                        key={`${playerState.player.id}-${num}`}
                        className="h-14 flex items-center justify-center"
                        style={{ ...rowStyle, backgroundColor: allClosed ? 'rgba(45, 52, 73, 0.25)' : 'var(--hud-surface-container-low)' }}
                      >
                        <MarkCell marks={score.marks} allClosed={allClosed} />
                      </div>
                    );
                  })
                : [
                    <div
                      key="empty-right"
                      className="h-14"
                      style={{ ...rowStyle, backgroundColor: 'var(--hud-surface-container-low)' }}
                    />
                  ]
              ),
            ];
          })}

          {/* Footer: Points row */}
          {leftPlayers.map((playerState) => (
            <div
              key={`pts-left-${playerState.player.id}`}
              className="h-10 flex items-center justify-center font-bold text-lg sticky bottom-10 z-10"
              style={{
                backgroundColor: 'var(--hud-surface-container)',
                borderTop: '2px solid var(--hud-primary)',
                color: gameMode === CricketGameMode.CutThroat
                  ? 'var(--hud-error)'
                  : 'var(--hud-on-surface)',
              }}
            >
              {playerState.totalPoints}
            </div>
          ))}
          <div
            className="h-10 flex items-center justify-center font-label text-xs uppercase tracking-widest font-semibold sticky bottom-10 z-10"
            style={{
              backgroundColor: 'var(--hud-surface-container)',
              borderTop: '2px solid var(--hud-primary)',
              color: 'var(--hud-tertiary)',
            }}
            data-testid="points-label"
          >
            {"Points"}
          </div>
          {rightPlayers.length > 0 ? (
            rightPlayers.map((playerState) => (
              <div
                key={`pts-right-${playerState.player.id}`}
                className="h-10 flex items-center justify-center font-bold text-lg sticky bottom-10 z-10"
                style={{
                  backgroundColor: 'var(--hud-surface-container)',
                  borderTop: '2px solid var(--hud-primary)',
                  color: gameMode === CricketGameMode.CutThroat
                    ? 'var(--hud-error)'
                    : 'var(--hud-on-surface)',
                }}
              >
                {playerState.totalPoints}
              </div>
            ))
          ) : (
            <div
              className="h-10 sticky bottom-10 z-10"
              style={{
                backgroundColor: 'var(--hud-surface-container)',
                borderTop: '2px solid var(--hud-primary)',
              }}
            />
          )}

          {/* Footer: MPR row */}
          {leftPlayers.map((playerState) => (
            <div
              key={`mpr-left-${playerState.player.id}`}
              className="h-10 flex items-center justify-center font-bold text-base sticky bottom-0 z-10"
              style={{
                backgroundColor: 'var(--hud-surface-container)',
                color: 'var(--hud-secondary)',
              }}
            >
              {calculateMPR(playerState).toFixed(2)}
            </div>
          ))}
          <div
            className="h-10 flex items-center justify-center font-label text-xs uppercase tracking-widest font-semibold sticky bottom-0 z-10"
            style={{
              backgroundColor: 'var(--hud-surface-container)',
              color: 'var(--hud-tertiary)',
            }}
            data-testid="mpr-label"
          >
            {"MPR"}
          </div>
          {rightPlayers.length > 0 ? (
            rightPlayers.map((playerState) => (
              <div
                key={`mpr-right-${playerState.player.id}`}
                className="h-10 flex items-center justify-center font-bold text-base sticky bottom-0 z-10"
                style={{
                  backgroundColor: 'var(--hud-surface-container)',
                  color: 'var(--hud-secondary)',
                }}
              >
                {calculateMPR(playerState).toFixed(2)}
              </div>
            ))
          ) : (
            <div
              className="h-10 sticky bottom-0 z-10"
              style={{ backgroundColor: 'var(--hud-surface-container)' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
