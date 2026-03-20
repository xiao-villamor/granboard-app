"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useSettings } from "../contexts/SettingsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGear, faBullseye, faCrosshairs, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

export default function TrainingHub() {
  const router = useRouter();
  const t = useTranslations();
  const { openDialog } = useSettings();

  return (
    <main className="relative min-h-screen bg-theme-primary flex flex-col items-center px-8 py-10 gap-8">
      {/* Back button */}
      <button
        data-testid="back-button"
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 px-4 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2"
      >
        <FontAwesomeIcon icon={faArrowLeft} /> {t("common.back")}
      </button>

      {/* Settings Button - Top Right */}
      <div className="absolute top-6 right-6">
        <button
          data-testid="settings-button"
          onClick={() => openDialog()}
          className="px-4 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faGear} /> {t("cricket.game.settings")}
        </button>
      </div>

      {/* Title */}
      <div className="w-full text-center">
        <h1 className="text-6xl font-bold text-theme-primary mb-2 tracking-wider">
          {t("training.title")}
        </h1>
        <p className="text-theme-tertiary text-lg">
          {t("training.subtitle")}
        </p>
      </div>

      {/* Training modes */}
      <div className="w-full max-w-3xl flex flex-col gap-6">
        {/* Free Throw */}
        <button
          data-testid="training-free-throw"
          onClick={() => router.push("/training/free-throw")}
          className="w-full p-8 bg-orange-700 hover:bg-orange-600 text-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 text-left"
        >
          <div className="flex items-center gap-6">
            <FontAwesomeIcon icon={faBullseye} className="text-5xl w-14 h-14" />
            <div>
              <div className="text-3xl font-bold mb-1">
                {t("training.freeThrow.title")}
              </div>
              <div className="text-sm text-orange-200">
                {t("training.freeThrow.description")}
              </div>
            </div>
          </div>
        </button>

        {/* Target Practice */}
        <button
          data-testid="training-target-practice"
          onClick={() => router.push("/training/target-practice")}
          className="w-full p-8 bg-purple-700 hover:bg-purple-600 text-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 text-left"
        >
          <div className="flex items-center gap-6">
            <FontAwesomeIcon icon={faCrosshairs} className="text-5xl w-14 h-14" />
            <div>
              <div className="text-3xl font-bold mb-1">
                {t("training.targetPractice.title")}
              </div>
              <div className="text-sm text-purple-200">
                {t("training.targetPractice.description")}
              </div>
            </div>
          </div>
        </button>

        {/* Checkout Practice */}
        <button
          data-testid="training-checkout"
          onClick={() => router.push("/training/checkout")}
          className="w-full p-8 bg-teal-700 hover:bg-teal-600 text-white rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-teal-500/50 text-left"
        >
          <div className="flex items-center gap-6">
            <FontAwesomeIcon icon={faFlagCheckered} className="text-5xl w-14 h-14" />
            <div>
              <div className="text-3xl font-bold mb-1">
                {t("training.checkout.title")}
              </div>
              <div className="text-sm text-teal-200">
                {t("training.checkout.description")}
              </div>
            </div>
          </div>
        </button>
      </div>
    </main>
  );
}
