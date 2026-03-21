import { CricketGameMode } from "@/services/cricket";
import { ZeroOneMode } from "@/services/zeroone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGear, faLink, faTowerBroadcast, faShareNodes, faEye } from "@fortawesome/free-solid-svg-icons";
import { ConnectionState } from "../hooks/useGranboardConnection";

interface GameHeaderProps {
  gameMode: CricketGameMode | ZeroOneMode;
  connectionState: ConnectionState;
  onConnect: () => void;
  onShowLegend?: () => void;
  onShowSettings?: () => void;
  onShowShare?: () => void;
  /** Whether a live room is currently active */
  roomActive?: boolean;
  spectatorCount?: number;
}

export function GameHeader({
  gameMode,
  connectionState,
  onConnect,
  onShowLegend,
  onShowSettings,
  onShowShare,
  roomActive,
  spectatorCount,
}: GameHeaderProps) {
  // Determine if it's a ZeroOne mode
  const isZeroOneMode = typeof gameMode === 'number' && (gameMode === 301 || gameMode === 501 || gameMode === 701);

  return (
    <div
      className="flex justify-between items-center rounded-xl px-5 py-3 border"
      style={{
        background: 'var(--hud-glass-bg)',
        backdropFilter: 'blur(var(--hud-glass-blur))',
        WebkitBackdropFilter: 'blur(var(--hud-glass-blur))',
        borderColor: 'rgba(69, 70, 77, 0.15)',
        boxShadow: '0 1px 0 rgba(218, 226, 253, 0.04) inset, 0 4px 24px rgba(6, 14, 32, 0.35)',
      }}
    >
      {/* Game title + mode chip */}
      <div className="flex items-center gap-3">
        {/* Accent bar */}
        <div
          className="hidden sm:block w-0.5 h-7 rounded-full"
          style={{
            background: isZeroOneMode
              ? 'linear-gradient(180deg, var(--hud-game-01) 0%, transparent 100%)'
              : 'linear-gradient(180deg, var(--hud-game-cricket) 0%, transparent 100%)',
          }}
        />

        <div className="flex items-center gap-2.5">
          {/* Game label */}
          <h1
            className="text-base font-headline font-extrabold tracking-[0.12em] uppercase"
            style={{ color: 'var(--hud-on-surface)' }}
          >
            {isZeroOneMode ? "01" : "CRICKET"}
          </h1>

          {/* Mode chip — code-path style */}
          {isZeroOneMode ? (
            <span
              className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border"
              style={{
                color: 'var(--hud-game-01)',
                backgroundColor: 'rgba(128, 155, 255, 0.08)',
                borderColor: 'rgba(128, 155, 255, 0.2)',
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ color: 'rgba(128, 155, 255, 0.45)', fontSize: '0.6rem' }}>▸</span>
              {gameMode}
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded border"
              style={{
                color: gameMode === CricketGameMode.CutThroat
                  ? 'var(--hud-error)'
                  : 'var(--hud-game-cricket)',
                backgroundColor: gameMode === CricketGameMode.CutThroat
                  ? 'rgba(255, 180, 171, 0.08)'
                  : 'rgba(92, 253, 128, 0.08)',
                borderColor: gameMode === CricketGameMode.CutThroat
                  ? 'rgba(255, 180, 171, 0.2)'
                  : 'rgba(92, 253, 128, 0.2)',
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ opacity: 0.45, fontSize: '0.6rem' }}>▸</span>
              {gameMode === CricketGameMode.CutThroat
                ? "Cut-Throat"
                : "Standard"
              }
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-1.5 items-center">
        {onShowLegend && (
          <button
            data-testid="legend-button"
            onClick={onShowLegend}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
            style={{
              backgroundColor: 'rgba(69, 70, 77, 0.12)',
              color: 'var(--hud-tertiary)',
              border: '1px solid rgba(69, 70, 77, 0.15)',
            }}
            title="Show Legend"
          >
            <FontAwesomeIcon icon={faBook} className="w-3 h-3" />
            <span className="hidden sm:inline">{"Legend"}</span>
          </button>
        )}
        {onShowSettings && (
          <button
            data-testid="settings-button"
            onClick={onShowSettings}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
            style={{
              backgroundColor: 'rgba(69, 70, 77, 0.12)',
              color: 'var(--hud-tertiary)',
              border: '1px solid rgba(69, 70, 77, 0.15)',
            }}
            title="Settings"
          >
            <FontAwesomeIcon icon={faGear} className="w-3 h-3" />
            <span className="hidden sm:inline">{"Settings"}</span>
          </button>
        )}
        {onShowShare && (
          <button
            data-testid="share-button"
            onClick={onShowShare}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5"
            style={{
              backgroundColor: roomActive
                ? 'rgba(128, 155, 255, 0.10)'
                : 'rgba(69, 70, 77, 0.12)',
              color: roomActive ? 'var(--hud-game-01)' : 'var(--hud-tertiary)',
              border: roomActive
                ? '1px solid rgba(128, 155, 255, 0.25)'
                : '1px solid rgba(69, 70, 77, 0.15)',
            }}
            title="Share Your Game"
          >
            <FontAwesomeIcon
              icon={roomActive ? faShareNodes : faTowerBroadcast}
              className="w-3 h-3"
            />
            {roomActive && spectatorCount !== undefined ? (
              <>
                <FontAwesomeIcon icon={faEye} className="w-2.5 h-2.5 opacity-70" />
                <span>{spectatorCount}</span>
              </>
            ) : (
              <span className="hidden sm:inline">{"Go Live"}</span>
            )}
          </button>
        )}

        {/* Divider */}
        <div
          className="w-px h-5 mx-0.5"
          style={{ backgroundColor: 'rgba(69, 70, 77, 0.3)' }}
        />

        {connectionState === "connected" ? (
          <div
            data-testid="connection-status"
            className="px-2.5 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5"
            style={{
              backgroundColor: 'rgba(68, 226, 205, 0.08)',
              color: 'var(--hud-secondary)',
              border: '1px solid rgba(68, 226, 205, 0.2)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-live-dot"
              style={{ backgroundColor: 'var(--hud-secondary)' }}
            />
            <span className="hidden sm:inline">{"Connected"}</span>
          </div>
        ) : (
          <button
            data-testid="connect-button"
            onClick={onConnect}
            disabled={connectionState === "connecting"}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 shadow-sm hud-gradient-cta"
          >
            <FontAwesomeIcon icon={connectionState === "connecting" ? faLink : faLink} className="w-3 h-3" />
            {connectionState === "connecting"
              ? "Connecting..."
              : connectionState === "error"
              ? "Error — tap to retry"
              : "Connect GranBoard"}
          </button>
        )}
      </div>
    </div>
  );
}
