import { Segment } from "@/services/boardinfo";
import { PlayerCricketState } from "@/services/cricket";
import { useEffect, useState } from "react";

interface TurnSummaryProps {
  show: boolean;
  currentPlayer: PlayerCricketState;
  hits: Segment[];
  onComplete: () => void;
}

export function TurnSummary({
  show,
  currentPlayer,
  hits,
  onComplete,
}: TurnSummaryProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!visible) return null;

  return (
    <div data-testid="turn-summary" className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 animate-fade-in" />

      {/* Summary card */}
      <div className="relative animate-slide-up">
        <div
          className="rounded-3xl shadow-2xl p-10 border min-w-[500px]"
          style={{
            backgroundColor: 'var(--hud-surface-container-low)',
            borderColor: 'rgba(255, 185, 95, 0.3)',
          }}
        >
          {/* Player name */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-headline font-extrabold mb-2" style={{ color: 'var(--hud-primary)' }}>
              {currentPlayer.player.name}
            </h2>
            <div className="text-xl" style={{ color: 'var(--hud-tertiary)' }}>{"Turn completed"}</div>
          </div>

          {/* Hits */}
          <div className="flex justify-center gap-4">
            {hits.map((hit, index) => (
              <div
                key={index}
                className="rounded-xl p-6 min-w-[120px] text-center transform hover:scale-110 transition-transform border"
                style={{
                  backgroundColor: 'var(--hud-surface-container-high)',
                  borderColor: 'rgba(69, 70, 77, 0.15)',
                  animation: `slideIn 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="text-5xl font-headline font-extrabold" style={{ color: 'var(--hud-primary)' }}>
                  {hit.ShortName}
                </div>
              </div>
            ))}
            {/* Empty slots */}
            {Array.from({ length: 3 - hits.length }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="rounded-xl p-6 min-w-[120px] text-center border-2 border-dashed"
                style={{
                  backgroundColor: 'var(--hud-surface-container)',
                  borderColor: 'var(--hud-surface-container-highest)',
                }}
              >
                <div className="text-5xl font-headline font-extrabold" style={{ color: 'var(--hud-on-tertiary-container)' }}>-</div>
              </div>
            ))}
          </div>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-3xl blur-3xl opacity-30 animate-pulse"
          style={{ backgroundColor: 'var(--hud-primary)' }}
        />
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
