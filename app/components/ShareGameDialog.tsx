"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import QRCode from "qrcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faEye, faCopy, faCheck, faXmark, faShareNodes, faTowerBroadcast, faCircleStop } from "@fortawesome/free-solid-svg-icons";

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
          <div className="flex items-center gap-2 text-sm bg-theme-card border border-theme-card rounded-lg px-2.5 py-1.5">
            <span className="text-accent font-mono font-bold tracking-wider">{roomCode}</span>
            <div className="w-px h-4 bg-theme-secondary" />
            <FontAwesomeIcon icon={faEye} className="text-theme-muted text-xs" />
            <span className="text-theme-muted font-medium">{spectatorCount}</span>
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
          className={`px-3 py-1.5 rounded-lg transition-all text-sm font-medium flex items-center gap-2 ${
            roomCode
              ? "bg-purple-600/15 text-purple-400 border border-purple-500/30 hover:bg-purple-600/25"
              : "bg-purple-600 text-white hover:bg-purple-500 shadow-sm"
          }`}
          title={t("spectator.shareGame")}
        >
          <FontAwesomeIcon icon={roomCode ? faShareNodes : faTowerBroadcast} className="text-xs" />
          {!roomCode ? t("spectator.goLive") : t("spectator.share")}
        </button>
      </div>
    );
  }

  // ─── Full dialog ───────────────────────────────────────────
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowDialog(false)}>
      <div
        className="bg-theme-elevated rounded-2xl border border-theme-primary max-w-md w-full overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 pb-4 border-b border-theme-primary">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-600/15 flex items-center justify-center">
              <FontAwesomeIcon icon={faTowerBroadcast} className="text-purple-400" />
            </div>
            <div>
              <h3 className="font-bold text-theme-primary text-lg leading-tight">
                {t("spectator.shareGame")}
              </h3>
              {roomCode && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-live-dot" />
                  <span className="text-xs text-green-400 font-medium">LIVE</span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => setShowDialog(false)}
            className="w-8 h-8 flex items-center justify-center text-theme-tertiary hover:text-theme-primary bg-theme-secondary hover:bg-theme-tertiary rounded-lg transition-all"
          >
            <FontAwesomeIcon icon={faXmark} className="text-sm" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          {!roomCode ? (
            /* No room yet - offer to create */
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 flex items-center justify-center mx-auto">
                <FontAwesomeIcon icon={faTowerBroadcast} className="text-purple-400 text-2xl" />
              </div>
              <div>
                <p className="text-theme-secondary text-sm leading-relaxed">
                  {t("spectator.createRoomDescription")}
                </p>
              </div>
              <button
                onClick={async () => {
                  await onCreateRoom();
                }}
                disabled={!isConnected || roomState === "creating"}
                className="px-8 py-3 bg-purple-600 text-white rounded-xl font-bold text-base hover:bg-purple-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/20"
              >
                {roomState === "creating" ? t("spectator.creating") : t("spectator.goLive")}
              </button>
              {!isConnected && (
                <p className="text-red-400 text-xs font-medium">{t("spectator.serverUnavailable")}</p>
              )}
            </div>
          ) : (
            /* Room active - show sharing options */
            <div className="space-y-4 stagger-children">
              {/* QR Code */}
              {qrDataUrl && (
                <div className="flex flex-col items-center gap-3 animate-fade-in-up">
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <img
                      src={qrDataUrl}
                      alt="QR Code"
                      className="rounded-lg"
                      width={180}
                      height={180}
                    />
                  </div>
                  <p className="text-xs text-theme-muted text-center">
                    {t("spectator.scanQr")}
                  </p>
                </div>
              )}

              {/* Game Code */}
              <div className="bg-theme-card rounded-xl p-4 border border-theme-card animate-fade-in-up">
                <div className="text-[10px] text-theme-muted uppercase tracking-wider font-medium mb-2">{t("spectator.gameCode")}</div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-black text-accent tracking-[0.2em]">
                    {roomCode}
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="px-3 py-2 bg-theme-secondary hover:bg-theme-tertiary text-theme-secondary rounded-lg transition-all text-sm"
                    title="Copy code"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-green-400" : ""} />
                  </button>
                </div>
              </div>

              {/* Watch URL */}
              <div className="bg-theme-card rounded-xl p-4 border border-theme-card animate-fade-in-up">
                <div className="text-[10px] text-theme-muted uppercase tracking-wider font-medium mb-2">{t("spectator.watchLink")}</div>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs text-theme-secondary font-mono bg-theme-secondary rounded-lg px-3 py-2 overflow-hidden text-ellipsis whitespace-nowrap block">
                    {watchUrl}
                  </code>
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-2 bg-theme-secondary hover:bg-theme-tertiary text-theme-secondary rounded-lg transition-all text-sm flex-shrink-0"
                    title="Copy link"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-green-400" : ""} />
                  </button>
                </div>
              </div>

              {/* Native share button (mobile) */}
              {typeof navigator !== "undefined" && "share" in navigator && (
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-3 bg-accent text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm animate-fade-in-up"
                >
                  <FontAwesomeIcon icon={faShareNodes} />
                  {t("spectator.shareNative")}
                </button>
              )}

              {/* Spectator count + stop sharing row */}
              <div className="flex items-center justify-between pt-1 animate-fade-in-up">
                <div className="flex items-center gap-2 text-theme-muted text-sm">
                  <FontAwesomeIcon icon={faEye} className="text-xs" />
                  <span>{t("spectator.spectators", { count: spectatorCount })}</span>
                </div>
                <button
                  onClick={() => {
                    onCloseRoom();
                    setShowDialog(false);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 text-red-400 hover:bg-red-600/15 rounded-lg transition-all text-xs font-medium"
                >
                  <FontAwesomeIcon icon={faCircleStop} className="text-xs" />
                  {t("spectator.stopSharing")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
