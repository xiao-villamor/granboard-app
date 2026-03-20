"use client";

import { useSounds } from "@/app/cricket/game/hooks/useSounds";
import { useSettings } from "@/app/contexts/SettingsContext";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

type SoundType =
  | "dart-miss"
  | "game-over"
  | "bull"
  | "double-bull"
  | "victory"
  | "whistle-single"
  | "whistle-double"
  | "whistle-triple";

interface SoundInfo {
  id: SoundType;
  nameKey: string;
  descKey: string;
  category: string;
}

const soundsList: SoundInfo[] = [
  {
    id: "dart-miss",
    nameKey: "dartMiss",
    descKey: "dartMissDesc",
    category: "Gameplay",
  },
  {
    id: "bull",
    nameKey: "bull",
    descKey: "bullDesc",
    category: "Achievements",
  },
  {
    id: "double-bull",
    nameKey: "doubleBull",
    descKey: "doubleBullDesc",
    category: "Achievements",
  },
  {
    id: "whistle-single",
    nameKey: "whistleSingle",
    descKey: "whistleSingleDesc",
    category: "Achievements",
  },
  {
    id: "whistle-double",
    nameKey: "whistleDouble",
    descKey: "whistleDoubleDesc",
    category: "Achievements",
  },
  {
    id: "whistle-triple",
    nameKey: "whistleTriple",
    descKey: "whistleTripleDesc",
    category: "Achievements",
  },
  {
    id: "victory",
    nameKey: "victory",
    descKey: "victoryDesc",
    category: "Achievements",
  },
  {
    id: "game-over",
    nameKey: "gameOver",
    descKey: "gameOverDesc",
    category: "Events",
  },
];

export default function SoundsDebugPage() {
  const router = useRouter();
  const t = useTranslations("debug.sounds");
  const tCommon = useTranslations("common");
  const { playSound } = useSounds();
  const { volume, setVolume, soundEnabled, toggleSound } = useSettings();
  const [playing, setPlaying] = useState<SoundType | null>(null);

  const handlePlaySound = (soundId: SoundType) => {
    setPlaying(soundId);
    playSound(soundId);
    setTimeout(() => setPlaying(null), 1000);
  };

  const groupedSounds = soundsList.reduce((acc, sound) => {
    if (!acc[sound.category]) {
      acc[sound.category] = [];
    }
    acc[sound.category].push(sound);
    return acc;
  }, {} as Record<string, SoundInfo[]>);

  const getVolumeIcon = () => {
    if (!soundEnabled) return faVolumeOff;
    if (volume < 0.3) return faVolumeLow;
    return faVolumeHigh;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push("/")}
            className="mb-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> {tCommon("back")}
          </button>
          <h1 className="text-5xl font-bold text-white mb-2">{t("title")}</h1>
          <p className="text-purple-200">
            {t("subtitle")}
          </p>
        </div>

        {/* Volume Controls */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("audioControls")}
          </h2>

          <div className="space-y-4">
            {/* Sound Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{t("soundEnabled")}</span>
              <button
                onClick={toggleSound}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  soundEnabled ? "bg-green-500" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    soundEnabled ? "translate-x-9" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            {/* Volume Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium flex items-center gap-2">
                  <FontAwesomeIcon icon={getVolumeIcon()} />
                  {t("volume")}
                </span>
                <span className="text-purple-200">
                  {Math.round(volume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                disabled={!soundEnabled}
                className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: soundEnabled
                    ? `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${
                        volume * 100
                      }%, #4b5563 ${volume * 100}%, #4b5563 100%)`
                    : undefined,
                }}
              />
            </div>
          </div>
        </div>

        {/* Sounds Grid */}
        {Object.entries(groupedSounds).map(([category, sounds]) => (
          <div key={category} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sounds.map((sound) => (
                <button
                  key={sound.id}
                  onClick={() => handlePlaySound(sound.id)}
                  disabled={!soundEnabled}
                  className={`group relative bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed ${
                    playing === sound.id
                      ? "ring-4 ring-purple-400 scale-105"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {t(sound.nameKey)}
                    </h3>
                    {playing === sound.id && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full animate-pulse">
                        Playing
                      </span>
                    )}
                  </div>
                  <p className="text-purple-200 text-sm">{t(sound.descKey)}</p>
                  <div className="mt-3 text-xs text-purple-300 font-mono">
                    {sound.id}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Play All Button */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("sequentialTest")}
          </h2>
          <button
            onClick={() => {
              soundsList.forEach((sound, index) => {
                setTimeout(() => handlePlaySound(sound.id), index * 800);
              });
            }}
            disabled={!soundEnabled}
            className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {t("playAll")}
          </button>
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-purple-300 text-sm">
          <p>{t("tip")}</p>
        </div>
      </div>
    </main>
  );
}
