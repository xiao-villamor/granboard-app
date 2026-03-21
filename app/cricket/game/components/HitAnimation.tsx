import { Segment } from "@/services/boardinfo";
import { useEffect, useState } from "react";

interface HitAnimationProps {
  hit: Segment | null;
  onComplete?: () => void;
}

export function HitAnimation({ hit, onComplete }: HitAnimationProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hit) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onComplete?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hit, onComplete]);

  if (!hit || !show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none">
      {/* Overlay with fade */}
      <div className="absolute inset-0 bg-black/50 animate-fade-in" />

      {/* Hit display */}
      <div className="relative animate-bounce-scale">
        <div
          className="rounded-3xl shadow-2xl p-16 border"
          style={{
            backgroundColor: 'var(--hud-surface-container-low)',
            borderColor: 'rgba(255, 185, 95, 0.3)',
          }}
        >
          <div className="text-center">
            <div
              className="text-9xl font-headline font-extrabold"
              style={{ color: 'var(--hud-primary)' }}
            >
              {hit.ShortName}
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-3xl blur-3xl opacity-40 animate-pulse"
          style={{ backgroundColor: 'var(--hud-primary)' }}
        />
      </div>
    </div>
  );
}
