import { Player, PlayerState as PlayerCricketState, calculateMPR, CricketGameMode } from "@/services/cricket";
import { PlayerState as PlayerZeroOneState, calculatePPD, calculateAverage, ZeroOneMode } from "@/services/zeroone";

type GameMode = CricketGameMode | ZeroOneMode;
type PlayerState = PlayerCricketState | PlayerZeroOneState;

interface GameOverBannerProps {
  winner: Player;
  players: PlayerState[];
  totalRounds: number;
  gameMode: GameMode;
  onNewGame: () => void;
  onQuit: () => void;
}

// Type guards
function isCricketPlayer(player: PlayerState): player is PlayerCricketState {
  return 'totalMarks' in player;
}

function isCricketMode(mode: GameMode): mode is CricketGameMode {
  return typeof mode === 'string';
}

export function GameOverBanner({
  winner,
  players,
  totalRounds,
  gameMode,
  onNewGame,
  onQuit,
}: GameOverBannerProps) {
  const isCricket = isCricketMode(gameMode);

  // Sort players by ranking (winner first, then by score or MPR)
  const sortedPlayers = [...players].sort((a, b) => {
    if (a.player.id === winner.id) return -1;
    if (b.player.id === winner.id) return 1;

    if (isCricket) {
      const aCricket = a as PlayerCricketState;
      const bCricket = b as PlayerCricketState;
      if (gameMode === CricketGameMode.CutThroat) {
        return aCricket.totalPoints - bCricket.totalPoints;
      } else {
        return bCricket.totalPoints - aCricket.totalPoints;
      }
    } else {
      const aZeroOne = a as PlayerZeroOneState;
      const bZeroOne = b as PlayerZeroOneState;
      return aZeroOne.currentScore - bZeroOne.currentScore;
    }
  });

  return (
    <div
      className="p-8 rounded-2xl shadow-2xl border animate-scale-in"
      style={{
        background: 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)',
        borderColor: 'rgba(255, 185, 95, 0.3)',
      }}
    >
      <h2 className="text-5xl font-headline font-extrabold mb-2 text-center" style={{ color: 'var(--hud-on-primary)' }}>
        {`${winner.name} wins!`}
      </h2>
      <p className="text-xl text-center mb-6" style={{ color: 'rgba(71, 42, 0, 0.7)' }}>
        {`Game ended after ${totalRounds} ${totalRounds > 1 ? "Rounds" : "round"}`}
      </p>

      {/* Statistics Table */}
      <div
        className="rounded-xl p-6 mb-6 border"
        style={{
          backgroundColor: 'var(--hud-surface-container-low)',
          borderColor: 'rgba(69, 70, 77, 0.15)',
        }}
      >
        <h3 className="text-2xl font-headline font-bold mb-4 text-center" style={{ color: 'var(--hud-on-surface)' }}>
          {"Game Stats"}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: '2px solid var(--hud-surface-container-highest)' }}>
                <th className="p-3 text-left font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"Rank"}</th>
                <th className="p-3 text-left font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"Player"}</th>
                {isCricket ? (
                  <>
                    <th className="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"Points"}</th>
                    <th className="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"Marks"}</th>
                    <th className="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"MPR"}</th>
                  </>
                ) : (
                  <>
                    <th className="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"Remaining"}</th>
                    <th className="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>{"Average"}</th>
                    <th className="p-3 text-center font-label text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>PPD</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((playerState, index) => {
                const isWinner = playerState.player.id === winner.id;
                return (
                  <tr
                    key={playerState.player.id}
                    style={{
                      borderBottom: '1px solid var(--hud-surface-container-high)',
                      backgroundColor: isWinner ? 'rgba(255, 185, 95, 0.08)' : 'transparent',
                    }}
                  >
                    <td className="p-3 text-center">
                      {index === 0 ? (
                        <span className="text-2xl">🥇</span>
                      ) : index === 1 ? (
                        <span className="text-2xl">🥈</span>
                      ) : index === 2 ? (
                        <span className="text-2xl">🥉</span>
                      ) : (
                        <span className="font-semibold" style={{ color: 'var(--hud-tertiary)' }}>
                          {index + 1}
                        </span>
                      )}
                    </td>
                    <td className="p-3 font-bold" style={{ color: 'var(--hud-on-surface)' }}>
                      {playerState.player.name}
                      {isWinner && (
                        <span className="ml-2">👑</span>
                      )}
                    </td>
                    {isCricket && isCricketPlayer(playerState) ? (
                      <>
                        <td
                          className="p-3 text-center font-bold"
                          style={{
                            color: gameMode === CricketGameMode.CutThroat
                              ? 'var(--hud-error)'
                              : 'var(--hud-primary)',
                          }}
                        >
                          {playerState.totalPoints}
                        </td>
                        <td className="p-3 text-center font-semibold" style={{ color: 'var(--hud-on-surface)' }}>
                          {playerState.totalMarks}
                        </td>
                        <td className="p-3 text-center font-bold text-lg" style={{ color: 'var(--hud-secondary)' }}>
                          {calculateMPR(playerState).toFixed(2)}
                        </td>
                      </>
                    ) : !isCricket && !isCricketPlayer(playerState) ? (
                      <>
                        <td className="p-3 text-center font-bold" style={{ color: 'var(--hud-primary)' }}>
                          {playerState.currentScore}
                        </td>
                        <td className="p-3 text-center font-semibold" style={{ color: 'var(--hud-on-surface)' }}>
                          {calculateAverage(playerState).toFixed(2)}
                        </td>
                        <td className="p-3 text-center font-bold text-lg" style={{ color: 'var(--hud-secondary)' }}>
                          {calculatePPD(playerState).toFixed(2)}
                        </td>
                      </>
                    ) : null}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={onNewGame}
          className="px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
          style={{
            backgroundColor: 'var(--hud-on-primary)',
            color: 'var(--hud-primary)',
          }}
        >
          {"New Game"}
        </button>
        <button
          onClick={onQuit}
          className="px-8 py-3 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
          style={{
            backgroundColor: 'var(--hud-surface-container-high)',
            color: 'var(--hud-on-surface)',
          }}
        >
          {"Quit"}
        </button>
      </div>
    </div>
  );
}
