import {
  PlayerState,
  calculatePPD,
  calculateAverage,
  getCheckoutSuggestion,
  isCheckoutScore,
} from "@/services/zeroone";
import { Segment, SegmentSection } from "@/services/boardinfo";

interface ScoreBoardProps {
  players: PlayerState[];
  currentPlayerIndex: number;
  gameFinished: boolean;
  currentTurnHits?: Segment[];
  dartsThrown?: number;
}

export function ScoreBoard({
  players,
  currentPlayerIndex,
  gameFinished,
  currentTurnHits = [],
  dartsThrown = 0,
}: ScoreBoardProps) {
  const currentPlayer = players[currentPlayerIndex];
  const otherPlayers = players.filter((_, idx) => idx !== currentPlayerIndex);

  const checkoutSuggestion = currentPlayer
    ? getCheckoutSuggestion(currentPlayer.currentScore)
    : null;
  const onCheckout = currentPlayer
    ? isCheckoutScore(currentPlayer.currentScore)
    : false;

  const ppd = currentPlayer ? calculatePPD(currentPlayer) : 0;
  const avg = currentPlayer ? calculateAverage(currentPlayer) : 0;

  /** Format a dart hit segment for display (e.g. "T20", "D15", "25", "Miss") */
  const formatDartHit = (segment: Segment): string => {
    return segment.ShortName;
  };

  /** True if a dart slot has been thrown */
  const getDartSlotHit = (slotIndex: number): Segment | null => {
    return currentTurnHits[slotIndex] ?? null;
  };

  const isMiss = (segment: Segment) =>
    segment.Section === SegmentSection.Other && segment.Value === 0;

  return (
    <div className="h-full flex flex-col gap-3 overflow-hidden">
      {/* ── Main layout: score plate + stats ── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-3 min-h-0">

        {/* ── LEFT: Score Plate (current player) ── */}
        <div
          className="lg:col-span-2 rounded-xl shadow-2xl flex flex-col overflow-hidden border relative"
          style={{
            backgroundColor: 'var(--hud-surface-container-highest)',
            borderColor: 'rgba(69, 70, 77, 0.10)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: 'rgba(255, 185, 95, 0.05)' }}
          />

          <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center gap-4">
            {/* Remaining label */}
            <span
              className="text-xs uppercase tracking-[0.2em] font-label font-semibold"
              style={{ color: 'var(--hud-tertiary)' }}
            >
              {"Remaining"}
            </span>

            {/* Big score */}
            {!gameFinished && currentPlayer && (
              <div
                className="font-headline font-extrabold leading-none tracking-tighter"
                style={{
                  fontSize: 'clamp(5rem, 16vw, 9rem)',
                  color: currentPlayer.currentScore === 0
                    ? 'var(--hud-secondary)'
                    : onCheckout
                    ? 'var(--hud-secondary)'
                    : 'var(--hud-primary)',
                }}
                data-testid={`scoreboard-player-${currentPlayer.player.name}`}
              >
                {currentPlayer.currentScore}
              </div>
            )}

            {/* Dart slots */}
            <div className="flex justify-center items-center gap-3 mt-2">
              {[0, 1, 2].map((slotIdx) => {
                const hit = getDartSlotHit(slotIdx);
                const thrown = slotIdx < dartsThrown;
                const isActive = slotIdx === dartsThrown && !gameFinished;

                return (
                  <div
                    key={slotIdx}
                    className="px-4 py-2.5 rounded-lg flex flex-col items-center gap-0.5 min-w-[72px] border transition-all"
                    style={{
                      backgroundColor: isActive
                        ? 'rgba(255, 185, 95, 0.08)'
                        : 'var(--hud-surface-container-low)',
                      borderColor: isActive
                        ? 'rgba(255, 185, 95, 0.3)'
                        : 'rgba(69, 70, 77, 0.10)',
                    }}
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: 'var(--hud-on-tertiary-container)' }}
                    >
                      {`Dart ${slotIdx + 1}`}
                    </span>
                    <span
                      className="text-lg font-headline font-bold"
                      style={{
                        color: !thrown
                          ? 'var(--hud-surface-container-highest)'
                          : hit && isMiss(hit)
                          ? 'var(--hud-error)'
                          : 'var(--hud-secondary)',
                      }}
                    >
                      {thrown && hit ? formatDartHit(hit) : "—"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Checkout suggestion */}
            {onCheckout && checkoutSuggestion && !gameFinished && (
              <div
                className="w-full max-w-sm mt-2 px-5 py-3 rounded-lg border flex items-center justify-between gap-3"
                style={{
                  backgroundColor: 'var(--hud-surface-container-low)',
                  borderColor: 'rgba(68, 226, 205, 0.15)',
                }}
              >
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-0.5"
                    style={{ color: 'rgba(185, 200, 222, 0.6)' }}
                  >
                    {"Suggested Checkout"}
                  </p>
                  <p
                    className="text-base font-headline font-bold"
                    style={{ color: 'var(--hud-on-surface)' }}
                  >
                    {checkoutSuggestion}
                  </p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{
                    backgroundColor: 'rgba(68, 226, 205, 0.1)',
                    color: 'var(--hud-secondary)',
                  }}
                >
                  ⊙
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── RIGHT: Session Stats + other players ── */}
        <div className="lg:col-span-1 flex flex-col gap-3 min-h-0 overflow-auto">

          {/* Session Stats card */}
          {currentPlayer && (
            <div
              className="rounded-xl p-5 border flex flex-col gap-4"
              style={{
                backgroundColor: 'var(--hud-surface-container-low)',
                borderColor: 'rgba(69, 70, 77, 0.05)',
              }}
            >
              <h3
                className="font-headline font-bold text-base flex items-center gap-2"
                style={{ color: 'var(--hud-on-surface)' }}
              >
                <span style={{ color: 'var(--hud-primary)' }}>▮</span>
                {currentPlayer.player.name}
              </h3>

              <div className="space-y-3">
                {/* Average */}
                <div className="flex justify-between items-end">
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: 'rgba(185, 200, 222, 0.5)' }}
                    >
                      {"Average"}
                    </p>
                    <p
                      className="text-2xl font-headline font-extrabold"
                      style={{ color: 'var(--hud-on-surface)' }}
                    >
                      {avg.toFixed(1)}
                    </p>
                  </div>
                </div>

                {/* PPD */}
                <div className="flex justify-between items-end">
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: 'rgba(185, 200, 222, 0.5)' }}
                    >
                      PPD
                    </p>
                    <p
                      className="text-2xl font-headline font-extrabold"
                      style={{ color: 'var(--hud-on-surface)' }}
                    >
                      {ppd.toFixed(1)}
                    </p>
                  </div>
                  <div className="h-1.5 w-14 rounded-full overflow-hidden mb-2"
                    style={{ backgroundColor: 'var(--hud-surface-container)' }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, (ppd / 60) * 100)}%`,
                        backgroundColor: 'var(--hud-primary)',
                      }}
                    />
                  </div>
                </div>

                {/* Total Darts */}
                <div
                  className="pt-3 border-t flex justify-between items-center"
                  style={{ borderColor: 'rgba(69, 70, 77, 0.10)' }}
                >
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: 'rgba(185, 200, 222, 0.5)' }}
                    >
                      {"Darts"}
                    </p>
                    <p
                      className="text-lg font-headline font-bold"
                      style={{ color: 'var(--hud-on-surface)' }}
                    >
                      {currentPlayer.dartsThrown}
                    </p>
                  </div>
                  {currentPlayer.busts > 0 && (
                    <div
                      className="flex items-center gap-1 text-sm"
                      style={{ color: 'var(--hud-error)' }}
                    >
                      <span>💥</span>
                      <span className="font-medium">{currentPlayer.busts}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Other players compact cards */}
          {otherPlayers.length > 0 && (
            <div className="flex flex-col gap-2">
              {otherPlayers.map((playerState) => {
                const isFinished = playerState.currentScore === 0;
                return (
                  <div
                    key={playerState.player.id}
                    data-testid={`scoreboard-player-${playerState.player.name}`}
                    className="px-4 py-3 rounded-xl border flex items-center justify-between"
                    style={{
                      backgroundColor: isFinished
                        ? 'rgba(68, 226, 205, 0.08)'
                        : 'var(--hud-surface-container)',
                      borderColor: isFinished
                        ? 'rgba(68, 226, 205, 0.25)'
                        : 'rgba(69, 70, 77, 0.10)',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {isFinished && (
                        <span style={{ color: 'var(--hud-secondary)' }}>✓</span>
                      )}
                      <span
                        className="font-headline font-bold text-sm"
                        style={{
                          color: isFinished
                            ? 'var(--hud-secondary)'
                            : 'var(--hud-on-surface)',
                        }}
                      >
                        {playerState.player.name}
                      </span>
                    </div>
                    <span
                      className="text-2xl font-headline font-extrabold"
                      style={{
                        color: isFinished
                          ? 'var(--hud-secondary)'
                          : 'var(--hud-on-surface-variant)',
                      }}
                    >
                      {playerState.currentScore}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
