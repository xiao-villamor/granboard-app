import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChartBar, faBullseye, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface LegendDialogProps {
  show: boolean;
  doubleOut: boolean;
  onClose: () => void;
}

export function LegendDialog({ show, doubleOut, onClose }: LegendDialogProps) {
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
            {"01 Legend"}
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
            <div
              className="p-3 md:p-4 rounded-xl border"
              style={{
                backgroundColor: 'rgba(255, 185, 95, 0.06)',
                borderColor: 'rgba(255, 185, 95, 0.2)',
              }}
            >
              <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-primary)' }}>
                <FontAwesomeIcon icon={faBullseye} /> {"Objective"}
              </p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
                {"Reduce your score to exactly zero. Bust (going below zero) resets your turn."}
              </p>
            </div>

            <div
              className="p-3 md:p-4 rounded-xl border"
              style={{
                backgroundColor: 'rgba(255, 185, 95, 0.06)',
                borderColor: 'rgba(255, 185, 95, 0.2)',
              }}
            >
              <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-primary)' }}>
                <FontAwesomeIcon icon={faChartBar} /> {"PPD — Points Per Dart"}
              </p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
                {"Average points scored per dart thrown."}
              </p>
            </div>

            <div
              className="p-3 md:p-4 rounded-xl border"
              style={{
                backgroundColor: 'rgba(255, 185, 95, 0.06)',
                borderColor: 'rgba(255, 185, 95, 0.2)',
              }}
            >
              <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-primary)' }}>
                <FontAwesomeIcon icon={faChartBar} /> {"3-Dart Average"}
              </p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
                {"Average points scored per 3-dart turn."}
              </p>
            </div>

            <div
              className="p-3 md:p-4 rounded-xl border"
              style={{
                backgroundColor: 'rgba(255, 180, 171, 0.06)',
                borderColor: 'rgba(255, 180, 171, 0.2)',
              }}
            >
              <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-error)' }}>
                <FontAwesomeIcon icon={faTriangleExclamation} /> {"Bust"}
              </p>
              <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
                {"Scoring below zero resets your score for that turn."}
              </p>
            </div>

            {doubleOut && (
              <div
                className="p-3 md:p-4 rounded-xl border"
                style={{
                  backgroundColor: 'rgba(255, 185, 95, 0.06)',
                  borderColor: 'rgba(255, 185, 95, 0.2)',
                }}
              >
                <p className="text-sm md:text-base font-bold mb-2 flex items-center gap-2" style={{ color: 'var(--hud-primary)' }}>
                  <FontAwesomeIcon icon={faBullseye} /> {"Double Out"}
                </p>
                <p className="text-xs md:text-sm" style={{ color: 'var(--hud-tertiary)' }}>
                  {"Must finish on a double (or bullseye). Only available in some modes."}
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
