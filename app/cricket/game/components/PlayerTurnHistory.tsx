import { Player } from "@/services/cricket";
import { PlayerTurn } from "../hooks/usePlayerTurnHistory";
import { Segment } from "@/services/boardinfo";

interface PlayerTurnHistoryProps {
  player: Player;
  turns: PlayerTurn[];
  currentTurnHits: Segment[];
  currentRound: number;
}

export function PlayerTurnHistory({ player, turns, currentTurnHits, currentRound }: PlayerTurnHistoryProps) {
  return (
    <div
      className="rounded-xl shadow-2xl h-full flex flex-col overflow-hidden border"
      style={{
        backgroundColor: 'var(--hud-surface-container-low)',
        borderColor: 'rgba(69, 70, 77, 0.10)',
      }}
    >
      <h3
        className="text-sm font-label font-semibold uppercase tracking-widest px-4 py-3 flex-shrink-0"
        style={{
          color: 'var(--hud-tertiary)',
          borderBottom: '1px solid var(--hud-surface-container-high)',
        }}
        data-testid="history-title"
      >
        {"History"} — {player.name}
      </h3>
      <div className="overflow-y-auto flex-1 p-3 space-y-2">
        {/* Current turn */}
        <div
          className="rounded-lg p-2.5 border"
          style={{
            backgroundColor: 'rgba(255, 185, 95, 0.08)',
            borderColor: 'rgba(255, 185, 95, 0.25)',
          }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold" style={{ color: 'var(--hud-primary)' }} data-testid={`current-round-${currentRound}`}>
              {"Round"} {currentRound} ({"In Progress"})
            </span>
            <span className="text-xs" style={{ color: 'var(--hud-primary)' }}>
              {currentTurnHits.length} / 3 {"Darts"}
            </span>
          </div>
          <div className="flex gap-1.5">
            {currentTurnHits.length > 0 ? (
              <>
                {currentTurnHits.map((hit, hitIdx) => (
                  <div
                    key={hitIdx}
                    className="flex-1 rounded px-2 py-1.5 text-center"
                    style={{
                      backgroundColor: 'var(--hud-surface-container-high)',
                      boxShadow: hitIdx === currentTurnHits.length - 1
                        ? '0 0 0 2px var(--hud-secondary)'
                        : 'none',
                    }}
                  >
                    <div className="text-sm font-bold" style={{ color: 'var(--hud-on-surface)' }}>
                      {hit.ShortName}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--hud-on-tertiary-container)' }}>
                      {hit.Value}
                    </div>
                  </div>
                ))}
                {/* Fill remaining dart slots */}
                {currentTurnHits.length < 3 &&
                  Array.from({ length: 3 - currentTurnHits.length }).map((_, i) => (
                    <div
                      key={`empty-${i}`}
                      className="flex-1 rounded px-2 py-1.5 text-center"
                      style={{ backgroundColor: 'var(--hud-surface-container)' }}
                    >
                      <div className="text-sm" style={{ color: 'var(--hud-on-tertiary-container)' }}>-</div>
                      <div className="text-xs" style={{ color: 'var(--hud-on-tertiary-container)' }}>0</div>
                    </div>
                  ))}
              </>
            ) : (
              /* No darts thrown yet */
              Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  className="flex-1 rounded px-2 py-1.5 text-center"
                  style={{ backgroundColor: 'var(--hud-surface-container)' }}
                >
                  <div className="text-sm" style={{ color: 'var(--hud-on-tertiary-container)' }}>-</div>
                  <div className="text-xs" style={{ color: 'var(--hud-on-tertiary-container)' }}>0</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Previous turns */}
        {turns.length > 0 ? (
          [...turns].reverse().map((turn, idx) => {
            return (
              <div
                key={`${turn.round}-${idx}`}
                className="rounded-lg p-2.5 border"
                style={{
                  backgroundColor: 'var(--hud-surface-container)',
                  borderColor: 'rgba(69, 70, 77, 0.10)',
                }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold" style={{ color: 'var(--hud-tertiary)' }} data-testid={`completed-round-${turn.round}`}>
                    {"Round"} {turn.round}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--hud-on-tertiary-container)' }}>
                    {turn.hits.length} {"Darts"}
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {turn.hits.map((hit, hitIdx) => (
                    <div
                      key={hitIdx}
                      className="flex-1 rounded px-2 py-1.5 text-center"
                      style={{ backgroundColor: 'var(--hud-surface-container-high)' }}
                    >
                      <div className="text-sm font-bold" style={{ color: 'var(--hud-on-surface)' }}>
                        {hit.ShortName}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--hud-on-tertiary-container)' }}>
                        {hit.Value}
                      </div>
                    </div>
                  ))}
                  {/* Fill empty dart slots */}
                  {turn.hits.length < 3 &&
                    Array.from({ length: 3 - turn.hits.length }).map((_, i) => (
                      <div
                        key={`empty-${i}`}
                        className="flex-1 rounded px-2 py-1.5 text-center"
                        style={{ backgroundColor: 'var(--hud-surface-container)' }}
                      >
                        <div className="text-sm" style={{ color: 'var(--hud-on-tertiary-container)' }}>-</div>
                        <div className="text-xs" style={{ color: 'var(--hud-on-tertiary-container)' }}>0</div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-4 text-sm" style={{ color: 'var(--hud-on-tertiary-container)' }}>
            {"No completed turns yet"}
          </div>
        )}
      </div>
    </div>
  );
}
