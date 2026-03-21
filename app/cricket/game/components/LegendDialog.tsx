import { CricketGameMode } from "@/services/cricket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChartBar, faBullseye, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface LegendDialogProps {
  show: boolean;
  gameMode: CricketGameMode;
  onClose: () => void;
}

export function LegendDialog({ show, gameMode, onClose }: LegendDialogProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        data-testid="legend-dialog"
        className="rounded-2xl border max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-scale-in"
        style={{
          backgroundColor: 'var(--hud-surface-container-low)',
          borderColor: 'rgba(69, 70, 77, 0.15)',
        }}
      >
        <div
          className="flex justify-between items-center p-4 md:p-6 pb-3"
          style={{ borderBottom: '1px solid var(--hud-surface-container-highest)' }}
        >
          <h3 className="font-headline font-extrabold text-xl md:text-2xl" style={{ color: 'var(--hud-on-surface)' }}>
            {"Cricket Legend"}
          </h3>
          <button
            data-testid="legend-close-button"
            onClick={onClose}
            className="text-2xl font-bold px-3 py-1 rounded-lg transition-colors"
            style={{ color: 'var(--hud-on-tertiary-container)' }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-4 md:p-6 pt-4">
          <div className="space-y-3 md:space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-headline font-bold mb-2 md:mb-3" style={{ color: 'var(--hud-primary)' }}>
              {"Mark Symbols"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-sm md:text-base">
              <div
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style={{ backgroundColor: 'var(--hud-surface-container)' }}
              >
                <span className="text-xl md:text-2xl font-bold" style={{ color: 'var(--hud-primary)' }}>/</span>
                <span style={{ color: 'var(--hud-tertiary)' }}>{"One mark"}</span>
              </div>
              <div
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style={{ backgroundColor: 'var(--hud-surface-container)' }}
              >
                <span className="text-xl md:text-2xl font-bold" style={{ color: 'var(--hud-primary)' }}>X</span>
                <span style={{ color: 'var(--hud-tertiary)' }}>{"Two marks"}</span>
              </div>
              <div
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style={{ backgroundColor: 'var(--hud-surface-container)' }}
              >
                <span className="text-xl md:text-2xl font-bold" style={{ color: 'var(--hud-secondary)' }}>⊗</span>
                <span style={{ color: 'var(--hud-tertiary)' }}>{"Closed (3 marks)"}</span>
              </div>
              <div
                className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg"
                style={{ backgroundColor: 'var(--hud-surface-container)' }}
              >
                <span className="text-xl md:text-2xl font-bold" style={{ color: 'var(--hud-on-tertiary-container)' }}>⊗</span>
                <span style={{ color: 'var(--hud-tertiary)' }}>{"Closed by all"}</span>
              </div>
            </div>
          </div>

          <div
            className="p-3 md:p-4 rounded-xl border"
            style={{
              backgroundColor: 'rgba(255, 185, 95, 0.06)',
              borderColor: 'rgba(255, 185, 95, 0.2)',
            }}
          >
            <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-primary)' }}>
              <FontAwesomeIcon icon={faChartBar} /> {"MPR — Marks Per Round"}
            </p>
            <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
              {"Average marks scored per round. A good MPR is 3.0+"}
            </p>
            <ul className="list-disc list-inside mt-2 text-xs md:text-sm space-y-1" style={{ color: 'var(--hud-tertiary)' }}>
              <li>{"Single"}</li>
              <li>{"Double"}</li>
              <li>{"Triple"}</li>
            </ul>
          </div>

          <div
            className="p-3 md:p-4 rounded-xl border"
            style={{
              backgroundColor: 'rgba(255, 185, 95, 0.06)',
              borderColor: 'rgba(255, 185, 95, 0.2)',
            }}
          >
            <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-primary)' }}>
              <FontAwesomeIcon icon={faBullseye} /> {"Standard Cricket"}
            </p>
            <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
              {"Close a number to score points. Most points when all numbers are closed wins."}
            </p>
          </div>

          {gameMode === CricketGameMode.CutThroat && (
            <div
              className="p-3 md:p-4 rounded-xl border"
              style={{
                backgroundColor: 'rgba(255, 180, 171, 0.06)',
                borderColor: 'rgba(255, 180, 171, 0.2)',
              }}
            >
              <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-error)' }}>
                <FontAwesomeIcon icon={faTriangleExclamation} /> {"Cut-Throat Cricket"}
              </p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
                {"Closing a number adds points to opponents. Fewest points wins."}
              </p>
            </div>
          )}
          </div>
        </div>

        <div
          className="p-4 md:p-6 pt-3"
          style={{ borderTop: '1px solid var(--hud-surface-container-highest)' }}
        >
          <button
            onClick={onClose}
            className="w-full px-4 md:px-6 py-2 md:py-3 rounded-xl font-bold text-sm md:text-base transition-all shadow-lg hud-gradient-cta"
          >
            {"Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
