"use client";

import { Granboard } from "@/services/granboard";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSettings } from "./contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faEye, faBullseye, faCircleDot, faCrosshairs } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const router = useRouter();
  const { openDialog } = useSettings();
  const [granboard, setGranboard] = useState<Granboard>();
  const [connectionState, setConnectionState] = useState<
    "waiting" | "connecting" | "connected" | "error"
  >("waiting");
  const [gameCode, setGameCode] = useState("");

  const onConnectionTest = async () => {
    setConnectionState("connecting");

    try {
      setGranboard(await Granboard.ConnectToBoard());
      setConnectionState("connected");
    } catch (error) {
      console.error(error);
      setConnectionState("error");
    }
  };

  const handleJoinGame = () => {
    const trimmed = gameCode.trim().toUpperCase();
    if (trimmed.length > 0) {
      router.push(`/watch/${trimmed}`);
    }
  };

  const handleGameCodeKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleJoinGame();
    }
  };

  const connectionStateLabel = () => {
    switch (connectionState) {
      case "waiting": return "Connect";
      case "connecting": return "Connecting...";
      case "connected": return "Connected";
      case "error": return "Error";
    }
  };

  return (
    <main className="min-h-screen pb-24" style={{ backgroundColor: 'var(--hud-background)', color: 'var(--hud-on-surface)' }}>
      {/* Background Layering Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(255, 185, 95, 0.05)' }} />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(68, 226, 205, 0.05)' }} />
      </div>

      {/* TopAppBar */}
      <header className="sticky top-0 z-50 shadow-2xl shadow-black/20" style={{ backgroundColor: 'var(--hud-background)' }}>
        <div className="flex justify-between items-center w-full px-6 py-4">
          <h1 className="font-headline font-extrabold text-2xl tracking-tight" style={{ color: 'var(--hud-primary)' }}>
            GranBoard
          </h1>
          <div className="flex gap-4 items-center">
            {/* Bluetooth status */}
            <button
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                connectionState === "connected"
                  ? "bg-emerald-500/10 text-emerald-400"
                  : connectionState === "connecting"
                  ? "bg-amber-500/10 text-amber-400"
                  : connectionState === "error"
                  ? "bg-red-500/10 text-red-400"
                  : "text-slate-400 hover:text-amber-300"
              }`}
              onClick={onConnectionTest}
            >
              {connectionStateLabel()}
            </button>
            <button
              onClick={() => openDialog()}
              className="text-slate-400 hover:text-amber-300 transition-colors duration-300 active:opacity-70"
            >
              <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-12">
        {/* Editorial Header */}
        <section className="mb-12 animate-fade-in-up">
          <h2 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tight mb-4" style={{ color: 'var(--hud-on-surface)' }}>
            Select your <span style={{ color: 'var(--hud-primary)' }}>session.</span>
          </h2>
          <p className="font-body text-lg max-w-md ml-1 opacity-80" style={{ color: 'var(--hud-tertiary)' }}>
            Choose a classic game or sharpen your skills in the Lab.
          </p>
        </section>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left Column: Primary Game Selection */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children">
            {/* Game Card: 01 Games */}
            <Link
              href="/01"
              data-testid="game-card-01"
              className="group relative overflow-hidden rounded-xl p-8 h-80 flex flex-col justify-between transition-all duration-300 shadow-xl animate-fade-in-up"
              style={{ backgroundColor: 'var(--hud-surface-container-low)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hud-surface-container)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--hud-surface-container-low)'}
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <FontAwesomeIcon icon={faCrosshairs} className="text-[180px]" />
              </div>
              <div>
                <span className="font-label text-xs uppercase tracking-widest font-bold mb-2 block" style={{ color: 'var(--hud-secondary)' }}>
                  Standard
                </span>
                <h3 className="font-headline font-bold text-3xl" style={{ color: 'var(--hud-on-surface)' }}>
                  01
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed" style={{ color: 'var(--hud-tertiary)', opacity: 0.6 }}>
                  301 / 501 / 701
                </p>
              </div>
              <span className="hud-gradient-cta w-fit px-8 py-3 rounded-full font-bold transition-all hover:brightness-110 active:scale-95">
                Start Game
              </span>
            </Link>

            {/* Game Card: Cricket */}
            <Link
              href="/cricket"
              data-testid="game-card-cricket"
              className="group relative overflow-hidden rounded-xl p-8 h-80 flex flex-col justify-between transition-all duration-300 shadow-xl animate-fade-in-up"
              style={{ backgroundColor: 'var(--hud-surface-container-low)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--hud-surface-container)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--hud-surface-container-low)'}
            >
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <FontAwesomeIcon icon={faCircleDot} className="text-[180px]" />
              </div>
              <div>
                <span className="font-label text-xs uppercase tracking-widest font-bold mb-2 block" style={{ color: 'var(--hud-secondary)' }}>
                  Competitive
                </span>
                <h3 className="font-headline font-bold text-3xl" style={{ color: 'var(--hud-on-surface)' }}>
                  Cricket
                </h3>
                <p className="font-body mt-2 text-sm leading-relaxed" style={{ color: 'var(--hud-tertiary)', opacity: 0.6 }}>
                  Standard / Cut Throat
                </p>
              </div>
              <span className="w-fit px-8 py-3 rounded-full font-bold transition-all hover:bg-white/5 active:scale-95 border" style={{ borderColor: 'rgba(69, 70, 77, 0.2)', color: 'var(--hud-on-surface)' }}>
                Start Game
              </span>
            </Link>

            {/* Wide Card: Training Lab */}
            <Link
              href="/training"
              data-testid="game-card-training"
              className="sm:col-span-2 group relative overflow-hidden rounded-xl p-10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:brightness-110 shadow-2xl border border-white/5 animate-fade-in-up"
              style={{ backgroundColor: 'var(--hud-surface-container-highest)' }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <FontAwesomeIcon icon={faBullseye} style={{ color: 'var(--hud-primary)' }} />
                  <span className="font-label text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--hud-primary)' }}>
                    Refinement
                  </span>
                </div>
                <h3 className="font-headline font-bold text-4xl mb-2" style={{ color: 'var(--hud-on-surface)' }}>
                  Training Lab
                </h3>
                <p className="font-body max-w-sm" style={{ color: 'var(--hud-tertiary)', opacity: 0.6 }}>
                  Free Throw / Target / Checkout
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <span className="hud-gradient-cta px-10 py-4 rounded-full font-extrabold shadow-lg transition-all active:scale-95 inline-block" style={{ boxShadow: '0 4px 15px rgba(255, 185, 95, 0.1)' }}>
                  Enter Lab
                </span>
              </div>
            </Link>
          </div>

          {/* Right Column: Sidebar Widgets */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Watch Game Widget */}
            <div
              className="rounded-xl p-8 border border-white/5 shadow-xl animate-fade-in-up"
              style={{ backgroundColor: 'var(--hud-surface-container-low)' }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="font-label text-xs uppercase tracking-widest font-bold mb-1" style={{ color: 'var(--hud-tertiary)', opacity: 0.6 }}>
                    Live
                  </p>
                  <h4 className="font-headline font-bold text-xl" style={{ color: 'var(--hud-on-surface)' }}>
                    Watch Game
                  </h4>
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(128, 90, 213, 0.1)' }}>
                  <FontAwesomeIcon icon={faEye} className="text-purple-400" />
                </div>
              </div>
              <p className="text-sm mb-6 font-body" style={{ color: 'var(--hud-tertiary)', opacity: 0.8 }}>
                Enter a game code to watch a live game.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={gameCode}
                  onChange={(e) => setGameCode(e.target.value.toUpperCase())}
                  onKeyDown={handleGameCodeKeyDown}
                  placeholder="Enter game code"
                  className="w-full px-4 py-3 rounded-lg font-mono text-lg tracking-widest border focus:outline-none focus:ring-1 transition-all placeholder:tracking-normal placeholder:font-sans placeholder:text-sm"
                  style={{
                    backgroundColor: 'var(--hud-surface-container)',
                    borderColor: 'rgba(69, 70, 77, 0.15)',
                    color: 'var(--hud-on-surface)',
                  }}
                  maxLength={12}
                  data-testid="game-code-input"
                />
                <button
                  onClick={handleJoinGame}
                  disabled={gameCode.trim().length === 0}
                  className="w-full py-3 rounded-lg font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-[0.98]"
                  style={{
                    backgroundColor: 'rgba(128, 90, 213, 0.2)',
                    color: '#a78bfa',
                  }}
                  data-testid="join-game-button"
                >
                  Join
                </button>
              </div>
            </div>

            {/* Bluetooth Connection Widget */}
            <div
              className="rounded-xl p-6 border border-white/5 animate-fade-in-up"
              style={{ backgroundColor: 'var(--hud-surface-container-lowest)' }}
            >
              <h4 className="font-headline font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--hud-on-surface)' }}>
                <span style={{ color: 'var(--hud-secondary)' }}>&#8226;</span>
                Bluetooth
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm" style={{ color: 'var(--hud-tertiary)', opacity: 0.6 }}>Status</span>
                  <span className={`font-headline font-bold text-sm ${
                    connectionState === "connected" ? "text-emerald-400"
                    : connectionState === "error" ? "text-red-400"
                    : "text-slate-400"
                  }`}>
                    {connectionStateLabel()}
                  </span>
                </div>
                <button
                  onClick={onConnectionTest}
                  className="w-full py-2.5 rounded-lg text-sm font-bold transition-all active:scale-[0.98]"
                  style={{
                    backgroundColor: 'rgba(68, 226, 205, 0.1)',
                    color: 'var(--hud-secondary)',
                  }}
                >
                  {connectionState === "connected" ? "Reconnect" : "Connect"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
