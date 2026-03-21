"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCopy, faCheck, faXmark, faShareNodes, faTowerBroadcast, faCircleStop } from "@fortawesome/free-solid-svg-icons";

interface ShareGameDialogProps {
  open: boolean;
  onClose: () => void;
  roomCode: string | null;
  spectatorCount: number;
  isConnected: boolean;
  onCreateRoom: () => Promise<string | null>;
  onCloseRoom: () => void;
  roomState: string;
}

export function ShareGameDialog({
  open,
  onClose,
  roomCode,
  spectatorCount,
  isConnected,
  onCreateRoom,
  onCloseRoom,
  roomState,
}: ShareGameDialogProps) {
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl border w-full max-w-md overflow-hidden shadow-2xl animate-scale-in"
        style={{
          backgroundColor: 'var(--hud-surface-container-low)',
          borderColor: 'rgba(69, 70, 77, 0.20)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 text-center">
          {/* Header row */}
          <div className="flex justify-between items-center mb-6">
            <h2
              className="font-headline font-bold text-xl"
              style={{ color: 'var(--hud-on-surface)' }}
            >
              {"Share Your Game"}
            </h2>
            <button
              onClick={onClose}
              className="transition-colors"
              style={{ color: 'var(--hud-tertiary)' }}
              title="Close"
            >
              <FontAwesomeIcon icon={faXmark} className="text-lg" />
            </button>
          </div>

          {!roomCode ? (
            /* ── No room yet: create state ── */
            <div className="space-y-6 py-2">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
                style={{ backgroundColor: 'rgba(128, 155, 255, 0.08)' }}
              >
                <FontAwesomeIcon icon={faTowerBroadcast} className="text-2xl" style={{ color: 'var(--hud-game-01)' }} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(185, 200, 222, 0.7)' }}>
                {"Create a room so others can watch"}
              </p>
              <button
                onClick={async () => { await onCreateRoom(); }}
                disabled={!isConnected || roomState === "creating"}
                className="px-8 py-3 rounded-xl font-bold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hud-gradient-cta"
              >
                {roomState === "creating" ? "Creating..." : "Go Live"}
              </button>
              {!isConnected && (
                <p className="text-xs font-medium" style={{ color: 'var(--hud-error)' }}>
                  {"Server unavailable"}
                </p>
              )}
            </div>
          ) : (
            /* ── Room active: share state ── */
            <div className="space-y-6">
              <p className="text-sm" style={{ color: 'rgba(185, 200, 222, 0.7)' }}>
                {"Scan QR"}
              </p>

              {qrDataUrl && (
                <div className="inline-block bg-white p-4 rounded-lg shadow-inner mb-2">
                  <img
                    src={qrDataUrl}
                    alt="Session QR Code"
                    width={192}
                    height={192}
                    className="rounded"
                  />
                </div>
              )}

              <div className="space-y-1">
                <p
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: 'rgba(185, 200, 222, 0.5)' }}
                >
                  {"Game code"}
                </p>
                <div
                  className="text-5xl font-headline font-black tracking-widest"
                  style={{ color: 'var(--hud-primary)' }}
                >
                  {roomCode}
                </div>
              </div>

              {/* URL row */}
              <div
                className="pt-5 border-t"
                style={{ borderColor: 'rgba(69, 70, 77, 0.10)' }}
              >
                <div
                  className="rounded-lg px-4 py-3 flex items-center justify-between gap-4"
                  style={{ backgroundColor: 'var(--hud-surface-container-highest)' }}
                >
                  <span
                    className="text-xs font-mono truncate"
                    style={{ color: 'var(--hud-tertiary)' }}
                  >
                    {watchUrl}
                  </span>
                  <button
                    onClick={handleCopyLink}
                    className="flex-shrink-0 transition-colors"
                    style={{ color: copied ? 'var(--hud-secondary)' : 'var(--hud-primary)' }}
                    title="Copy link"
                  >
                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Native share (mobile only) */}
              {typeof navigator !== "undefined" && "share" in navigator && (
                <button
                  onClick={handleShare}
                  className="w-full px-4 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 hud-gradient-cta"
                >
                  <FontAwesomeIcon icon={faShareNodes} />
                  {"Share"}
                </button>
              )}

              {/* Spectator count + stop live row */}
              <div
                className="flex items-center justify-between text-xs"
                style={{ color: 'var(--hud-on-tertiary-container)' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full animate-live-dot" style={{ backgroundColor: 'var(--hud-secondary)' }} />
                  <span className="font-label font-semibold uppercase tracking-widest" style={{ color: 'var(--hud-secondary)' }}>LIVE</span>
                  <span className="ml-1">·</span>
                  <FontAwesomeIcon icon={faEye} className="ml-1" />
                  <span>{spectatorCount}</span>
                </div>
                <button
                  onClick={() => { onCloseRoom(); onClose(); }}
                  className="flex items-center gap-1.5 font-medium transition-colors"
                  style={{ color: 'var(--hud-error)' }}
                >
                  <FontAwesomeIcon icon={faCircleStop} />
                  {"Stop Sharing"}
                </button>
              </div>

              {/* Done button */}
              <button
                onClick={onClose}
                className="w-full py-4 rounded-lg font-headline font-bold transition-colors border"
                style={{
                  backgroundColor: 'var(--hud-surface-container-highest)',
                  color: 'var(--hud-on-surface)',
                  borderColor: 'rgba(69, 70, 77, 0.10)',
                }}
              >
                {"Done"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
