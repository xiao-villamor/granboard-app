"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Player, CricketGameMode } from "@/services/cricket";
import { PlayerOrderModal } from "./components/PlayerOrderModal";
import { PlayerOrderDialog } from "./components/PlayerOrderDialog";
import { Granboard } from "@/services/granboard";
import { useSettings } from "../contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGear, faTrash, faGripVertical, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function CricketSetup() {
  const router = useRouter();
  const { openDialog } = useSettings();
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentName, setCurrentName] = useState("");
  const [gameMode, setGameMode] = useState<CricketGameMode>(
    CricketGameMode.Standard
  );
  const [maxRounds, setMaxRounds] = useState<number>(20);
  const [showOrderDialog, setShowOrderDialog] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [granboard, setGranboard] = useState<Granboard | null>(null);

  const addPlayer = () => {
    if (currentName.trim() === "") return;

    const newPlayer: Player = {
      id: Math.random().toString(36).substr(2, 9),
      name: currentName.trim(),
    };

    setPlayers([...players, newPlayer]);
    setCurrentName("");
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter((p) => p.id !== id));
  };

  const handleOrderDetermined = (orderedPlayers: Player[]) => {
    setPlayers(orderedPlayers);
    setShowOrderModal(false);

    sessionStorage.setItem("cricketPlayers", JSON.stringify(orderedPlayers));
    sessionStorage.setItem("cricketGameMode", gameMode);
    sessionStorage.setItem("cricketMaxRounds", maxRounds.toString());
    router.push("/cricket/game");
  };

  const handleThrowForOrder = async () => {
    try {
      const board = await Granboard.ConnectToBoard();
      setGranboard(board);
      setShowOrderModal(true);
    } catch (error) {
      console.error("Failed to connect to Granboard:", error);
      alert("Connection failed");
    }
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
  };

  const startGame = () => {
    if (players.length < 1) {
      alert("At least 2 players required");
      return;
    }

    if (players.length === 1) {
      sessionStorage.setItem("cricketPlayers", JSON.stringify(players));
      sessionStorage.setItem("cricketGameMode", gameMode);
      sessionStorage.setItem("cricketMaxRounds", maxRounds.toString());
      router.push("/cricket/game");
      return;
    }

    setShowOrderDialog(true);
  };

  const handleOrderSet = (orderedPlayers: Player[]) => {
    setPlayers(orderedPlayers);
    setShowOrderDialog(false);

    sessionStorage.setItem("cricketPlayers", JSON.stringify(orderedPlayers));
    sessionStorage.setItem("cricketGameMode", gameMode);
    sessionStorage.setItem("cricketMaxRounds", maxRounds.toString());
    router.push("/cricket/game");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addPlayer();
    }
  };

  const initials = (name: string) => {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  // Custom slider: compute fill percentage for round limit (5–50)
  const sliderFillPercent = ((maxRounds - 5) / (50 - 5)) * 100;

  return (
    <main className="min-h-screen pb-32" style={{ backgroundColor: 'var(--hud-background)', color: 'var(--hud-on-surface)' }}>
      {/* TopAppBar */}
      <header className="sticky top-0 z-40 shadow-2xl shadow-black/20" style={{ backgroundColor: 'var(--hud-background)' }}>
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              data-testid="back-button"
              onClick={() => router.push("/")}
              className="text-slate-400 transition-all duration-300 active:opacity-70"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-extrabold font-headline tracking-tight" style={{ color: 'var(--hud-primary)' }}>
              {`GranBoard`}
            </h1>
          </div>
          <div className="flex gap-4">
            <button
              data-testid="settings-button"
              onClick={() => openDialog()}
              className="text-slate-400 hover:text-amber-300 transition-colors duration-300 active:opacity-70"
            >
              <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-12">
        {/* Editorial Header */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="text-5xl font-extrabold font-headline tracking-tight mb-2" style={{ color: 'var(--hud-on-surface)' }}>
            New Match
          </h2>
          <p className="font-body max-w-md" style={{ color: 'var(--hud-tertiary)' }}>
            {`Set up your Cricket game`}
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Game Mode & Players */}
          <div className="md:col-span-7 space-y-12">
            {/* Game Mode Selection */}
            <div className="animate-fade-in-up">
              <label className="text-xs uppercase tracking-widest font-semibold mb-6 block" style={{ color: 'var(--hud-tertiary)' }}>
                {`Game Mode`}
              </label>
              <div className="flex flex-wrap gap-4">
                <button
                  data-testid="game-mode-standard"
                  onClick={() => setGameMode(CricketGameMode.Standard)}
                  className={`flex-1 min-w-[140px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${
                    gameMode === CricketGameMode.Standard ? 'border-2 shadow-lg' : 'hover:brightness-110'
                  }`}
                  style={{
                    backgroundColor: gameMode === CricketGameMode.Standard ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)',
                    borderColor: gameMode === CricketGameMode.Standard ? 'var(--hud-secondary)' : 'transparent',
                    color: gameMode === CricketGameMode.Standard ? 'var(--hud-secondary)' : 'var(--hud-tertiary)',
                    boxShadow: gameMode === CricketGameMode.Standard ? '0 4px 15px rgba(68, 226, 205, 0.1)' : 'none',
                  }}
                >
                  <span className="text-xl font-extrabold font-headline">{`Standard`}</span>
                  <span className="text-[10px] uppercase font-bold opacity-60">{`Close numbers to score points`}</span>
                </button>
                <button
                  data-testid="game-mode-cutthroat"
                  onClick={() => setGameMode(CricketGameMode.CutThroat)}
                  className={`flex-1 min-w-[140px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${
                    gameMode === CricketGameMode.CutThroat ? 'border-2 shadow-lg' : 'hover:brightness-110'
                  }`}
                  style={{
                    backgroundColor: gameMode === CricketGameMode.CutThroat ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)',
                    borderColor: gameMode === CricketGameMode.CutThroat ? 'var(--hud-error)' : 'transparent',
                    color: gameMode === CricketGameMode.CutThroat ? 'var(--hud-error)' : 'var(--hud-tertiary)',
                    boxShadow: gameMode === CricketGameMode.CutThroat ? '0 4px 15px rgba(255, 180, 171, 0.1)' : 'none',
                  }}
                >
                  <span className="text-xl font-extrabold font-headline">{`Cut-Throat`}</span>
                  <span className="text-[10px] uppercase font-bold opacity-60">{`Score points on opponents`}</span>
                </button>
              </div>
            </div>

            {/* Player Roster */}
            <div className="animate-fade-in-up">
              <div className="flex justify-between items-end mb-6">
                <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>
                  {`Players`}
                </label>
                <button
                  data-testid="add-player-button"
                  onClick={addPlayer}
                  disabled={currentName.trim() === ""}
                  className="text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity disabled:opacity-30"
                  style={{ color: 'var(--hud-secondary)' }}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
                  {`Add`}
                </button>
              </div>

              {/* Name Input */}
              <div className="mb-4">
                <input
                  data-testid="player-name-input"
                  type="text"
                  value={currentName}
                  onChange={(e) => setCurrentName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={"Player name"}
                  className="w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-1 transition-all font-body"
                  style={{
                    backgroundColor: 'var(--hud-surface-container-low)',
                    borderColor: 'rgba(69, 70, 77, 0.15)',
                    color: 'var(--hud-on-surface)',
                  }}
                  maxLength={20}
                />
              </div>

              <div className="space-y-3">
                {players.map((player, index) => (
                  <div
                    key={player.id}
                    data-testid={`player-item-${player.name}`}
                    className="flex items-center justify-between p-5 rounded-xl group transition-colors"
                    style={{ backgroundColor: 'var(--hud-surface-container-low)' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hud-surface-container)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--hud-surface-container-low)'}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                        style={{
                          backgroundColor: index === 0 ? 'rgba(255, 185, 95, 0.2)' : 'rgba(68, 226, 205, 0.2)',
                          color: index === 0 ? 'var(--hud-primary)' : 'var(--hud-secondary)',
                        }}
                      >
                        {initials(player.name)}
                      </div>
                      <div>
                        <p className="font-bold" style={{ color: 'var(--hud-on-surface)' }}>{player.name}{index === 0 ? ' (You)' : ''}</p>
                        <p className="text-xs" style={{ color: 'var(--hud-tertiary)', opacity: 0.6 }}>
                          {index === 0 ? 'Ready to throw' : 'Guest Player'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        data-testid={`remove-player-button-${player.name}`}
                        onClick={() => removePlayer(player.id)}
                        className="transition-colors"
                        style={{ color: 'rgba(185, 200, 222, 0.4)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--hud-error)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(185, 200, 222, 0.4)'}
                      >
                        <FontAwesomeIcon icon={faTrash} className="text-xl" />
                      </button>
                      <FontAwesomeIcon
                        icon={faGripVertical}
                        className="transition-colors"
                        style={{ color: 'var(--hud-on-tertiary-container)' }}
                      />
                    </div>
                  </div>
                ))}

                {/* Always-visible Add opponent slot */}
                <div
                  className="p-5 border-2 border-dashed rounded-xl flex items-center justify-center gap-3 cursor-pointer transition-all"
                  style={{ borderColor: 'rgba(69, 70, 77, 0.2)', color: 'rgba(185, 200, 222, 0.3)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255, 185, 95, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(69, 70, 77, 0.2)';
                  }}
                  onClick={() => {
                    const input = document.querySelector('[data-testid="player-name-input"]') as HTMLInputElement;
                    input?.focus();
                  }}
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span className="font-semibold text-sm">Add opponent...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Match Settings */}
          <div className="md:col-span-5">
            <div className="rounded-xl p-8 sticky top-28 animate-fade-in-up" style={{ backgroundColor: 'var(--hud-surface-container-low)' }}>
              <label className="text-xs uppercase tracking-widest font-semibold mb-8 block" style={{ color: 'var(--hud-tertiary)' }}>
                Match Rules
              </label>
              <div className="space-y-8">
                {/* Round Limit — custom slider with teal fill */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold" style={{ color: 'var(--hud-on-surface)' }}>
                      {`Rounds`}
                    </span>
                    <span className="text-lg font-extrabold font-headline" style={{ color: 'var(--hud-secondary)' }}>
                      {maxRounds}
                    </span>
                  </div>
                  {/* Custom slider track */}
                  <div className="relative w-full h-1.5 rounded-full" style={{ backgroundColor: 'var(--hud-surface-container-highest)' }}>
                    {/* Teal fill bar */}
                    <div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ width: `${sliderFillPercent}%`, backgroundColor: 'var(--hud-secondary)' }}
                    />
                    {/* Circular thumb */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-xl"
                      style={{
                        left: `${sliderFillPercent}%`,
                        backgroundColor: 'var(--hud-secondary)',
                        borderColor: 'var(--hud-surface-container-low)',
                        boxShadow: '0 2px 8px rgba(68, 226, 205, 0.4)',
                      }}
                    />
                    {/* Invisible range input overlaid for interaction */}
                    <input
                      data-testid="max-rounds-input"
                      type="range"
                      min="5"
                      max="50"
                      value={maxRounds}
                      onChange={(e) => setMaxRounds(parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      style={{ margin: 0 }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="text-[10px]" style={{ color: 'var(--hud-tertiary)', opacity: 0.4 }}>5</span>
                    <span className="text-[10px]" style={{ color: 'var(--hud-tertiary)', opacity: 0.4 }}>50</span>
                  </div>
                </div>

                {/* Rules Info */}
                <div className="pt-6 border-t border-white/5">
                  <span className="text-sm font-semibold mb-3 block" style={{ color: 'var(--hud-on-surface)' }}>
                    {`Rules — ${gameMode === CricketGameMode.CutThroat ? 'Cut-Throat' : 'Standard'}`}
                  </span>
                  <div className="space-y-2">
                    {(["Numbers in play: 15, 16, 17, 18, 19, 20, and Bull", "A number is closed when hit 3 times (single = 1, double = 2, triple = 3)", "Bull counts as 25 points; double bull counts as 50 points"] as string[]).map((rule, index) => (
                      <p key={index} className="text-xs leading-relaxed" style={{ color: 'var(--hud-tertiary)', opacity: 0.8 }}>
                        {rule}
                      </p>
                    ))}
                  </div>
                  {gameMode === CricketGameMode.Standard ? (
                    <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--hud-surface-container)' }}>
                      <p className="font-bold text-xs mb-1" style={{ color: 'var(--hud-secondary)' }}>{"Standard Rules"}</p>
                      {(["Once you close a number, further hits score points for you", "A number is fully closed when all players have closed it — no more points can be scored on it", "Player with the highest score when all numbers are closed wins", "If a player closes all numbers with the lowest score, the game ends"] as string[]).map((rule, index) => (
                        <p key={index} className="text-xs" style={{ color: 'var(--hud-tertiary)', opacity: 0.7 }}>{rule}</p>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: 'var(--hud-surface-container)' }}>
                      <p className="font-bold text-xs mb-1" style={{ color: 'var(--hud-error)' }}>{"Cut-Throat Rules"}</p>
                      {(["Once you close a number, further hits add points to opponents who haven't closed it", "A number is fully closed when all players have closed it", "Player with the lowest score when all numbers are closed wins"] as string[]).map((rule, index) => (
                        <p key={index} className="text-xs" style={{ color: 'var(--hud-tertiary)', opacity: 0.7 }}>{rule}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 px-6 pb-10 pt-4" style={{ background: 'linear-gradient(to top, var(--hud-background), var(--hud-background) 60%, transparent)' }}>
        <div className="max-w-4xl mx-auto">
          <button
            data-testid="start-game-button"
            onClick={startGame}
            disabled={players.length < 1}
            className="w-full h-16 rounded-xl flex items-center justify-center gap-3 shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              background: players.length >= 1
                ? 'linear-gradient(135deg, var(--hud-primary) 0%, var(--hud-on-primary-container) 100%)'
                : 'var(--hud-surface-container-high)',
              boxShadow: players.length >= 1 ? '0 8px 30px rgba(255, 185, 95, 0.2)' : 'none',
            }}
          >
            <span className="text-lg">&#9654;</span>
            <span className="font-headline font-extrabold text-lg tracking-wide uppercase" style={{ color: 'var(--hud-on-primary)' }}>
              Start Match Session
            </span>
          </button>
        </div>
      </div>

      {/* Player order dialog */}
      {showOrderDialog && (
        <PlayerOrderDialog
          players={players}
          onOrderSet={handleOrderSet}
          onThrowForOrder={handleThrowForOrder}
          onClose={() => setShowOrderDialog(false)}
        />
      )}

      {/* Player order modal (for throw for order) */}
      {showOrderModal && granboard && (
        <PlayerOrderModal
          players={players}
          granboard={granboard}
          onOrderDetermined={handleOrderDetermined}
          onClose={handleCloseOrderModal}
        />
      )}
    </main>
  );
}
