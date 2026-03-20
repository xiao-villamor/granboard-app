import { useTranslations } from "next-intl";
import { CricketGameMode } from "@/services/cricket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface GameLegendProps {
  gameMode: CricketGameMode;
}

export function GameLegend({ gameMode }: GameLegendProps) {
  const t = useTranslations("cricket.legend");

  return (
    <div
      className={`rounded-xl p-3 border backdrop-blur-sm ${
        gameMode === CricketGameMode.CutThroat
          ? "bg-red-900/20 border-red-700/50"
          : "bg-accent-bg border-accent/50"
      }`}
    >
      <h3 className="font-bold mb-2 text-white text-sm">{t("legendTitle")}</h3>
      <div className="grid grid-cols-4 gap-2 text-xs text-slate-300">
        <div>{t("oneMark_short")}</div>
        <div>{t("twoMarks_short")}</div>
        <div>{t("closed_short")}</div>
        <div className="text-accent">{t("mprAvg")}</div>
      </div>

      {gameMode === CricketGameMode.CutThroat && (
        <div className="mt-2 p-2 bg-slate-800/50 rounded-lg border border-red-500/30">
          <p className="text-xs text-red-400 font-bold flex items-center gap-2">
            <FontAwesomeIcon icon={faTriangleExclamation} /> {t("cutThroatWarning")}
          </p>
        </div>
      )}
    </div>
  );
}
