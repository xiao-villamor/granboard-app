"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import QRCode from "qrcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faEye, faCopy, faCheck, faXmark, faShareNodes } from "@fortawesome/free-solid-svg-icons";

interface ShareGameDialogProps {
  roomCode: string | null;
  spectatorCount: number;
  isConnected: boolean;
  onCreateRoom: () => Promise<string | null>;
  onCloseRoom: () => void;
  roomState: string;
}

export function ShareGameDialog({
  roomCode,
  spectatorCount,
  isConnected,
  onCreateRoom,
  onCloseRoom,
  roomState,
}: ShareGameDialogProps) {
  const t = useTranslations();
  const [showDialog, setShowDialog] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const watchUrl = roomCode
    ? `${typeof window !== "undefined" ? window.location.origin : ""}/watch/${roomCode}`
    : "";

  // Generate QR code when room code changes
  useEffect(() => {
    if (roomCode && watchUrl) {
      QRCode.toDataURL(watchUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      }).then(setQrDataUrl).catch(console.error);
    }
  }, [roomCode, watchUrl]);

  const handleCopyCode = async () => {
    if (roomCode) {
      await navigator.clipboard.writeText(roomCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = async () => {
    if (watchUrl) {
      await navigator.clipboard.writeText(watchUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share && watchUrl) {
      try {
        await navigator.share({
          title: "Watch my dart game!",
          text: `Join with code: ${roomCode}`,
          url: watchUrl,
        });
      } catch {
        // User cancelled share
      }
    }
  };

  // ─── Compact indicator (shown in game header) ──────────────
  if (!showDialog) {
    return (
      <div className="flex items-center gap-2">
        {roomCode && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-400 font-mono font-bold">{roomCode}</span>
            <FontAwesomeIcon icon={faEye} className="text-theme-muted" />
            <span className="text-theme-muted">{spectatorCount}</span>
          </div>
        )}
        <button
          onClick={() => {
            if (!roomCode && isConnected) {
              onCreateRoom().then(() => setShowDialog(true));
            } else {
              setShowDialog(true);
            }
          }}
          className="px-3 py-1.5 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition-all text-sm font-medium flex items-center gap-2"
          title={t("spectator.shareGame")}
        >
          <FontAwesomeIcon icon={faShareNodes} />
          {!roomCode ? t("spectator.goLive") : t("spectator.share")}
        </button>
      </div>
    );
  }

  // ─── Full dialog ───────────────────────────────────────────
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-theme-elevated rounded-2xl border-2 border-theme-primary max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-4 border-b border-theme-primary">
          <h3 className="font-bold text-theme-primary text-2xl flex items-center gap-2">
            <FontAwesomeIcon icon={faShareNodes} className="text-purple-500" />
            {t("spectator.shareGame")}
          </h3>
          <button
            onClick={() => setShowDialog(false)}
            className="text-theme-tertiary hover:text-theme-primary text-2xl font-bold px-3 py-1 bg-theme-interactive-hover rounded-lg transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {!roomCode ? (
            /* No room yet - offer to create */
            <div className="text-center space-y-4">
              <p className="text-theme-muted">
                {t("spectator.createRoomDescription")}
              </p>
              <button
                onClick={async () => {
                  await onCreateRoom();
                }}
                disabled={!isConnected || roomState === "creating"}
                className="px-6 py-3 bg-purple-700 text-white rounded-xl font-bold text-lg hover:bg-purple-600 transition-all disabled:opacity-50"
              >
                {roomState === "creating" ? t("spectator.creating") : t("spectator.goLive")}
              </button>
              {!isConnected && (
                <p className="text-red-400 text-sm">{t("spectator.serverUnavailable")}</p>
              )}
            </div>
          ) : (
            /* Room active - show sharing options */
            <>
              {/* QR Code */}
              {qrDataUrl && (
                <div className="flex flex-col items-center gap-3">
                  <img
                    src={qrDataUrl}
                    alt="QR Code"
                    className="rounded-xl shadow-lg"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm text-theme-muted text-center">
                    {t("spectator.scanQr")}
                  </p>
                </div>
              )}

              {/* Game Code */}
              <div className="bg-theme-card rounded-xl p-4 border border-theme-card">
                <div className="text-xs text-theme-muted uppercase mb-2">{t("spectator.gameCode")}</div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-black text-accent tracking-wider">
                    {roomCode}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="px-3 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all text-sm"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  </button>
                </div>
              </div>

              {/* Watch URL */}
              <div className="bg-theme-card rounded-xl p-4 border border-theme-card">
                <div className="text-xs text-theme-muted uppercase mb-2">{t("spectator.watchLink")}</div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm text-theme-primary font-mono bg-theme-secondary rounded px-2 py-1 overflow-hidden text-ellipsis">
                    {watchUrl}
                  </code>
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-2 bg-theme-interactive text-theme-interactive bg-theme-interactive-hover rounded-lg transition-all text-sm flex-shrink-0"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                  </button>
                </div>
              </div>

              {/* Native share button (mobile) */}
              {typeof navigator !== "undefined" && "share" in navigator && (
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-3 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <FontAwesomeIcon icon={faShareNodes} />
                  {t("spectator.shareNative")}
                </button>
              )}

              {/* Spectator count */}
              <div className="flex items-center justify-center gap-2 text-theme-muted">
                <FontAwesomeIcon icon={faEye} />
                <span>{t("spectator.spectators", { count: spectatorCount })}</span>
              </div>

              {/* Stop sharing */}
              <button
                onClick={() => {
                  onCloseRoom();
                  setShowDialog(false);
                }}
                className="w-full px-4 py-2 bg-red-600/20 text-red-400 rounded-xl hover:bg-red-600/30 transition-all text-sm"
              >
                {t("spectator.stopSharing")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
