import { useTranslations } from "next-intl";
import { CricketGameMode } from "@/services/cricket";
import { ZeroOneMode } from "@/services/zeroone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGear, faCheck, faLink } from "@fortawesome/free-solid-svg-icons";
import { ConnectionState } from "../hooks/useGranboardConnection";

interface GameHeaderProps {
  gameMode: CricketGameMode | ZeroOneMode;
  connectionState: ConnectionState;
  onConnect: () => void;
  onShowLegend?: () => void;
  onShowSettings?: () => void;
  /** Optional slot for the ShareGameDialog component */
  shareGameSlot?: React.ReactNode;
}

export function GameHeader({
  gameMode,
  connectionState,
  onConnect,
  onShowLegend,
  onShowSettings,
  shareGameSlot,
}: GameHeaderProps) {
  const t = useTranslations();

  // Determine if it's a ZeroOne mode
  const isZeroOneMode = typeof gameMode === 'number' && (gameMode === 301 || gameMode === 501 || gameMode === 701);

  return (
    <div className="flex justify-between items-center bg-theme-card-alpha backdrop-blur-sm rounded-xl border border-theme-card px-4 py-3">
      {/* Game title */}
      <div className="flex items-center gap-3">
        <div className="flex items-baseline gap-2">
          <h1 className="text-xl font-black text-theme-primary tracking-wider uppercase">
            {isZeroOneMode ? "01" : "CRICKET"}
          </h1>
          {isZeroOneMode ? (
            <span className="text-accent font-bold text-sm px-2 py-0.5 bg-accent/10 rounded-md">
              {gameMode}
            </span>
          ) : (
            <span className={`font-bold text-sm px-2 py-0.5 rounded-md ${
              gameMode === CricketGameMode.CutThroat
                ? "text-red-400 bg-red-500/10"
                : "text-accent bg-accent/10"
            }`}>
              {gameMode === CricketGameMode.CutThroat
                ? t('cricket.gameMode.cutThroat.title')
                : t('cricket.gameMode.standard.title')
              }
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 items-center">
        {onShowLegend && (
          <button
            data-testid="legend-button"
            onClick={onShowLegend}
            className="px-3 py-1.5 bg-theme-secondary hover:bg-theme-tertiary text-theme-secondary rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            title={t('cricket.game.showLegend')}
          >
            <FontAwesomeIcon icon={faBook} className="text-xs" />
            <span className="hidden sm:inline">{t('cricket.game.legend')}</span>
          </button>
        )}
        {onShowSettings && (
          <button
            data-testid="settings-button"
            onClick={onShowSettings}
            className="px-3 py-1.5 bg-theme-secondary hover:bg-theme-tertiary text-theme-secondary rounded-lg text-sm font-medium transition-all flex items-center gap-2"
            title={t('cricket.game.settings')}
          >
            <FontAwesomeIcon icon={faGear} className="text-xs" />
            <span className="hidden sm:inline">{t('cricket.game.settings')}</span>
          </button>
        )}
        {shareGameSlot}
        {connectionState === "connected" ? (
          <div data-testid="connection-status" className="px-3 py-1.5 bg-green-600/15 text-green-400 border border-green-500/30 rounded-lg font-medium text-sm flex items-center gap-2">
            <FontAwesomeIcon icon={faCheck} className="text-xs" />
            <span className="hidden sm:inline">{t('cricket.game.connected')}</span>
          </div>
        ) : (
          <button
            data-testid="connect-button"
            onClick={onConnect}
            disabled={connectionState === "connecting"}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-sm"
          >
            <FontAwesomeIcon icon={faLink} className="text-xs" />
            {connectionState === "connecting"
              ? t('cricket.game.connecting')
              : connectionState === "error"
              ? t('cricket.game.errorRetry')
              : t('cricket.game.connectGranboard')}
          </button>
        )}
      </div>
    </div>
  );
}
