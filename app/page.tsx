"use client";

import { Granboard } from "@/services/granboard";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "./components/LanguageSelector";
import { useSettings } from "./contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faEye } from "@fortawesome/free-solid-svg-icons";

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
    <main className="relative min-h-screen bg-theme-primary flex flex-col items-center justify-center px-8 py-12">
      {/* Settings Button - Top Left */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => openDialog()}
          className="px-4 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faGear} className="w-5 h-5" /> {t('cricket.game.settings')}
        </button>
      </div>

      {/* Connection Test - Top Right */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <span className="text-theme-muted text-sm">{t('common.bluetooth')} :</span>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            connectionState === "connected"
              ? "bg-green-600 text-white"
              : connectionState === "connecting"
              ? "bg-yellow-600 text-white"
              : connectionState === "error"
              ? "bg-red-600 text-white"
              : "bg-theme-interactive text-theme-interactive bg-theme-interactive-hover"
          }`}
          onClick={onConnectionTest}
        >
          {t(`common.connectionState.${connectionState}`)}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-6xl font-bold text-theme-primary mb-16 tracking-wider">
        {t('home.title')}
      </h1>

      {/* Game Modes */}
      <div className="w-full max-w-2xl flex flex-col gap-8">
        <Link
          href="/01"
          data-testid="game-card-01"
          className="w-full h-32 text-white bg-blue-700 hover:bg-blue-600 rounded-2xl text-6xl font-bold flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
        >
          {t('home.modes.01')}
        </Link>

        <Link
          href="/cricket"
          data-testid="game-card-cricket"
          className="w-full h-32 text-white bg-green-700 hover:bg-green-600 rounded-2xl text-6xl font-bold flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
        >
          {t('home.modes.cricket')}
        </Link>

        <Link
          href="/training"
          data-testid="game-card-training"
          className="w-full h-32 text-white bg-orange-700 hover:bg-orange-600 rounded-2xl text-6xl font-bold flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50"
        >
          {t('home.modes.training')}
        </Link>

        {/* Watch Game - Join as spectator */}
        <div className="w-full bg-theme-elevated rounded-2xl p-6 shadow-2xl border border-theme-primary">
          <div className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon icon={faEye} className="text-purple-400 text-xl" />
            <h2 className="text-xl font-bold text-theme-primary">{t('spectator.watchGame')}</h2>
          </div>
          <p className="text-theme-muted text-sm mb-4">{t('spectator.enterCodeDescription')}</p>
          <div className="flex gap-3">
            <input
              type="text"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value.toUpperCase())}
              onKeyDown={handleGameCodeKeyDown}
              placeholder={t('spectator.codePlaceholder')}
              className="flex-1 px-4 py-3 bg-theme-secondary text-theme-primary font-mono text-lg tracking-widest rounded-xl border border-theme-primary focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-theme-tertiary placeholder:tracking-normal placeholder:font-sans placeholder:text-base"
              maxLength={12}
              data-testid="game-code-input"
            />
            <button
              onClick={handleJoinGame}
              disabled={gameCode.trim().length === 0}
              className="px-6 py-3 bg-purple-700 text-white rounded-xl font-bold hover:bg-purple-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
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
