"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Player, ZeroOneMode } from "@/services/zeroone";
import { PlayerOrderModal } from "../cricket/components/PlayerOrderModal";
import { PlayerOrderDialog } from "../cricket/components/PlayerOrderDialog";
import { Granboard } from "@/services/granboard";
import { useSettings } from "../contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGear, faTrash, faGripVertical, faUserPlus } from "@fortawesome/free-solid-svg-icons";

type CheckoutMode = "doubleOut" | "straightOut" | "doubleIn";

export default function ZeroOneSetup() {
  const router = useRouter();
  const { openDialog } = useSettings();
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentName, setCurrentName] = useState("");
  const [gameMode, setGameMode] = useState<ZeroOneMode>(ZeroOneMode.FiveOhOne);
  const [checkoutMode, setCheckoutMode] = useState<CheckoutMode>("doubleOut");
  const [maxRounds, setMaxRounds] = useState<number>(0); // 0 = unlimited
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

    const doubleOut = checkoutMode === "doubleOut";
    sessionStorage.setItem("zeroOnePlayers", JSON.stringify(orderedPlayers));
    sessionStorage.setItem("zeroOneMode", gameMode.toString());
    sessionStorage.setItem("zeroOneDoubleOut", doubleOut.toString());
    sessionStorage.setItem("zeroOneMaxRounds", maxRounds.toString());
    router.push("/01/game");
  };

  const handleThrowForOrder = async () => {
    try {
      const board = await Granboard.ConnectToBoard();
      setGranboard(board);
      setShowOrderModal(true);
    } catch (error) {
      console.error("Failed to connect to Granboard:", error);
      alert('Connection failed');
    }
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
  };

  const startGame = () => {
    if (players.length < 1) {
      alert('At least 1 player required');
      return;
    }

    const doubleOut = checkoutMode === "doubleOut";

    if (players.length === 1) {
      sessionStorage.setItem("zeroOnePlayers", JSON.stringify(players));
      sessionStorage.setItem("zeroOneMode", gameMode.toString());
      sessionStorage.setItem("zeroOneDoubleOut", doubleOut.toString());
      sessionStorage.setItem("zeroOneMaxRounds", maxRounds.toString());
      router.push("/01/game");
      return;
    }

    setShowOrderDialog(true);
  };

  const handleOrderSet = (orderedPlayers: Player[]) => {
    setPlayers(orderedPlayers);
    setShowOrderDialog(false);

    const doubleOut = checkoutMode === "doubleOut";
    sessionStorage.setItem("zeroOnePlayers", JSON.stringify(orderedPlayers));
    sessionStorage.setItem("zeroOneMode", gameMode.toString());
    sessionStorage.setItem("zeroOneDoubleOut", doubleOut.toString());
    sessionStorage.setItem("zeroOneMaxRounds", maxRounds.toString());
    router.push("/01/game");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addPlayer();
    }
  };

  const modeLabel = (mode: ZeroOneMode) => {
    switch (mode) {
      case ZeroOneMode.ThreeOhOne: return 'Short (101–301)';
      case ZeroOneMode.FiveOhOne: return 'Standard (501)';
      case ZeroOneMode.SevenOhOne: return 'Long (701–1001)';
    }
  };

  const modeValue = (mode: ZeroOneMode) => {
    switch (mode) {
      case ZeroOneMode.ThreeOhOne: return '301';
      case ZeroOneMode.FiveOhOne: return '501';
      case ZeroOneMode.SevenOhOne: return '701';
    }
  };

  const initials = (name: string) => {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  };

  // Custom slider: compute fill percentage for round limit
  const sliderFillPercent = maxRounds === 0 ? 100 : (maxRounds / 50) * 100;

  const checkoutOptions: { key: CheckoutMode; label: string }[] = [
    { key: "doubleOut", label: "Double Out" },
    { key: "straightOut", label: "Straight Out" },
    { key: "doubleIn", label: "Double In" },
  ];

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
              GranBoard
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
            Set up your 01 game
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column: Score & Players */}
          <div className="md:col-span-7 space-y-12">
            {/* Starting Score Section */}
            <div className="animate-fade-in-up">
              <label className="text-xs uppercase tracking-widest font-semibold mb-6 block" style={{ color: 'var(--hud-tertiary)' }}>
                Game Mode
              </label>
              <div className="flex flex-wrap gap-4">
                {[ZeroOneMode.FiveOhOne, ZeroOneMode.ThreeOhOne, ZeroOneMode.SevenOhOne].map((mode) => (
                  <button
                    key={mode}
                    data-testid={`game-mode-${modeValue(mode)}`}
                    onClick={() => setGameMode(mode)}
                    className={`flex-1 min-w-[100px] h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300 active:scale-95 ${
                      gameMode === mode
                        ? 'border-2 shadow-lg'
                        : 'hover:brightness-110'
                    }`}
                    style={{
                      backgroundColor: gameMode === mode ? 'var(--hud-surface-container-highest)' : 'var(--hud-surface-container-low)',
                      borderColor: gameMode === mode ? 'var(--hud-primary)' : 'transparent',
                      color: gameMode === mode ? 'var(--hud-primary)' : 'var(--hud-tertiary)',
                      boxShadow: gameMode === mode ? '0 4px 15px rgba(255, 185, 95, 0.1)' : 'none',
                    }}
                  >
                    <span className="text-3xl font-extrabold font-headline">{modeValue(mode)}</span>
                    <span className="text-[10px] uppercase font-bold opacity-60">{modeLabel(mode)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Player Roster */}
            <div className="animate-fade-in-up">
              <div className="flex justify-between items-end mb-6">
                <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: 'var(--hud-tertiary)' }}>
                  Players
                </label>
                <button
                  data-testid="add-player-button"
                  onClick={addPlayer}
                  disabled={currentName.trim() === ""}
                  className="text-sm font-semibold flex items-center gap-1 hover:opacity-80 transition-opacity disabled:opacity-30"
                  style={{ color: 'var(--hud-secondary)' }}
                >
                  <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
                  Add
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
                  placeholder="Player name"
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
                {/* Checkout Mode */}
                <div>
                  <span className="text-sm font-semibold mb-4 block" style={{ color: 'var(--hud-on-surface)' }}>
                    Double Out
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {checkoutOptions.map(({ key, label }) => {
                      const isActive = checkoutMode === key;
                      return (
                        <button
                          key={key}
                          data-testid={`checkout-mode-${key}`}
                          onClick={() => setCheckoutMode(key)}
                          className="flex items-center justify-between p-3 rounded-lg transition-colors hover:brightness-110"
                          style={{
                            backgroundColor: isActive ? 'var(--hud-surface-container-highest)' : 'transparent',
                            outline: isActive ? '1px solid rgba(255, 185, 95, 0.3)' : 'none',
                          }}
                        >
                          <span className="text-sm font-medium" style={{ color: isActive ? 'var(--hud-on-surface)' : 'var(--hud-tertiary)' }}>
                            {label}
                          </span>
                          {isActive ? (
                            <span className="text-lg" style={{ color: 'var(--hud-primary)' }}>&#10003;</span>
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: 'var(--hud-outline-variant)' }} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Round Limit — custom slider with teal fill */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold" style={{ color: 'var(--hud-on-surface)' }}>
                      Rounds
                    </span>
                    <span className="text-lg font-extrabold font-headline" style={{ color: 'var(--hud-secondary)' }}>
                      {maxRounds === 0 ? '∞' : maxRounds}
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
                      min="0"
                      max="50"
                      value={maxRounds}
                      onChange={(e) => setMaxRounds(parseInt(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      style={{ margin: 0 }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <span className="text-[10px]" style={{ color: 'var(--hud-tertiary)', opacity: 0.4 }}>0</span>
                    <span className="text-[10px]" style={{ color: 'var(--hud-tertiary)', opacity: 0.4 }}>
                      Unlimited
                    </span>
                  </div>
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
