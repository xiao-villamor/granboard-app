"use client";

import { Granboard } from "@/services/granboard";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "./components/LanguageSelector";
import { useSettings } from "./contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faEye, faBullseye, faCircleDot } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const t = useTranslations();
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

  return (
    <main className="relative min-h-screen bg-theme-primary flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-green-600/5 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-3xl" />
      </div>

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
        <button
          onClick={() => openDialog()}
          className="px-4 py-2 bg-theme-elevated/80 backdrop-blur-sm text-theme-secondary border border-theme-primary rounded-xl transition-all hover:border-accent hover:text-accent flex items-center gap-2 text-sm font-medium"
        >
          <FontAwesomeIcon icon={faGear} className="w-4 h-4" /> {t('cricket.game.settings')}
        </button>

        <div className="flex items-center gap-3">
          <span className="text-theme-muted text-xs uppercase tracking-wider">{t('common.bluetooth')}</span>
          <button
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${
              connectionState === "connected"
                ? "bg-green-600/10 text-green-500 border-green-600/30"
                : connectionState === "connecting"
                ? "bg-yellow-600/10 text-yellow-500 border-yellow-600/30"
                : connectionState === "error"
                ? "bg-red-600/10 text-red-500 border-red-600/30"
                : "bg-theme-elevated/80 text-theme-secondary border-theme-primary hover:border-accent"
            }`}
            onClick={onConnectionTest}
          >
            {t(`common.connectionState.${connectionState}`)}
          </button>
        </div>
      </div>

      {/* Hero section */}
      <div className="text-center mb-12 animate-fade-in-up relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
          <FontAwesomeIcon icon={faBullseye} className="text-accent text-3xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-theme-primary tracking-tight mb-3">
          {t('home.title')}
        </h1>
        <p className="text-theme-muted text-lg">Dartboard Scoring App</p>
      </div>

      {/* Game Modes */}
      <div className="w-full max-w-lg flex flex-col gap-4 relative z-10 stagger-children">
        <Link
          href="/01"
          data-testid="game-card-01"
          className="group w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
        >
          <div className="relative px-8 py-7 bg-gradient-to-r from-blue-700 to-blue-600 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
              <span className="text-2xl font-black text-white">01</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-white">{t('home.modes.01')}</div>
              <div className="text-sm text-blue-200/80">301 / 501 / 701</div>
            </div>
            <div className="text-white/40 group-hover:text-white/70 transition-all text-xl">
              &rsaquo;
            </div>
          </div>
        </Link>

        <Link
          href="/cricket"
          data-testid="game-card-cricket"
          className="group w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
        >
          <div className="relative px-8 py-7 bg-gradient-to-r from-green-700 to-green-600 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
              <FontAwesomeIcon icon={faCircleDot} className="text-2xl text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-white">{t('home.modes.cricket')}</div>
              <div className="text-sm text-green-200/80">Standard / Cut Throat</div>
            </div>
            <div className="text-white/40 group-hover:text-white/70 transition-all text-xl">
              &rsaquo;
            </div>
          </div>
        </Link>

        <Link
          href="/training"
          data-testid="game-card-training"
          className="group w-full rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
        >
          <div className="relative px-8 py-7 bg-gradient-to-r from-orange-700 to-orange-600 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
              <FontAwesomeIcon icon={faBullseye} className="text-2xl text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-white">{t('home.modes.training')}</div>
              <div className="text-sm text-orange-200/80">Free Throw / Target / Checkout</div>
            </div>
            <div className="text-white/40 group-hover:text-white/70 transition-all text-xl">
              &rsaquo;
            </div>
          </div>
        </Link>

        {/* Watch Game - Join as spectator */}
        <div className="w-full bg-theme-elevated rounded-2xl p-6 border border-theme-primary transition-all hover:border-purple-500/30 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-600/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faEye} className="text-purple-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-theme-primary">{t('spectator.watchGame')}</h2>
              <p className="text-theme-muted text-xs">{t('spectator.enterCodeDescription')}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value.toUpperCase())}
              onKeyDown={handleGameCodeKeyDown}
              placeholder={t('spectator.codePlaceholder')}
              className="flex-1 px-4 py-3 bg-theme-secondary text-theme-primary font-mono text-lg tracking-widest rounded-xl border border-theme-primary focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-theme-tertiary placeholder:tracking-normal placeholder:font-sans placeholder:text-sm transition-all"
              maxLength={12}
              data-testid="game-code-input"
            />
            <button
              onClick={handleJoinGame}
              disabled={gameCode.trim().length === 0}
              className="px-6 py-3 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              data-testid="join-game-button"
            >
              {t('spectator.join')}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
