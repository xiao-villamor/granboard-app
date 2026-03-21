import { Segment } from "@/services/boardinfo";
import { PlayerState as PlayerCricketState } from "@/services/cricket";
import { PlayerState as PlayerZeroOneState } from "@/services/zeroone";

type PlayerState = PlayerCricketState | PlayerZeroOneState;

interface CurrentPlayerPanelProps {
  currentPlayer: PlayerState;
  dartsThrown: number;
  currentRound: number;
  maxRounds: number;
  currentTurnHits: Segment[];
  hasHistory: boolean;
  onUndo: () => void;
  onNextPlayer: () => void;
}

export function CurrentPlayerPanel({
  currentPlayer,
  dartsThrown,
  currentRound,
  maxRounds,
  currentTurnHits,
  hasHistory,
  onUndo,
  onNextPlayer,
}: CurrentPlayerPanelProps) {
  return (
    <div
      className="rounded-xl shadow-2xl p-4 border"
      style={{
        background: 'var(--hud-glass-bg)',
        backdropFilter: 'blur(var(--hud-glass-blur))',
        WebkitBackdropFilter: 'blur(var(--hud-glass-blur))',
        borderColor: 'rgba(69, 70, 77, 0.15)',
      }}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="flex-1">
          <h2 className="text-2xl font-headline font-extrabold mb-1" style={{ color: 'var(--hud-on-surface)' }}>
            <span style={{ color: 'var(--hud-primary)' }}>{currentPlayer.player.name}</span>
          </h2>
          <div className="flex gap-3 text-sm" style={{ color: 'var(--hud-tertiary)' }}>
            <p data-testid="dart-counter">
              {"Dart"}{' '}
              <span className="font-bold" style={{ color: 'var(--hud-on-surface)' }}>{dartsThrown}</span> / 3
            </p>
            <span style={{ color: 'var(--hud-outline-variant)' }}>|</span>
            <p data-testid="round-counter">
              {"Round"}{' '}
              <span className="font-bold" style={{ color: 'var(--hud-on-surface)' }}>{currentRound}</span>
              {maxRounds > 0 && <> / {maxRounds}</>}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            data-testid="undo-button"
            onClick={onUndo}
            disabled={!hasHistory}
            className="px-4 py-2 rounded-lg font-bold text-sm transition-all"
            style={{
              backgroundColor: !hasHistory
                ? 'var(--hud-surface-container-high)'
                : 'var(--hud-primary)',
              color: !hasHistory
                ? 'var(--hud-on-tertiary-container)'
                : 'var(--hud-on-primary)',
              cursor: !hasHistory ? 'not-allowed' : 'pointer',
              opacity: !hasHistory ? 0.5 : 1,
            }}
            title={"Undo last move"}
          >
            ↶ {"Undo"}
          </button>
          <button
            data-testid="next-player-button"
            onClick={onNextPlayer}
            className="px-4 py-2 rounded-lg font-bold text-sm transition-all"
            style={{
              backgroundColor: 'var(--hud-error-container)',
              color: 'var(--hud-on-error-container)',
            }}
            title={"End turn and pass to next player"}
          >
            {"Next Player"}
          </button>
        </div>
      </div>
    </div>
  );
}
