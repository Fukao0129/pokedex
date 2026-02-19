import React from "react";
import { createPortal } from "react-dom";

interface BaseModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function BaseModal({
  children,
  isOpen,
  onClose,
}: BaseModalProps) {
  /** Escキーで閉じる */
  React.useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  /** 開いているときは背景のスクロールを防止 */
  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return createPortal(
    <>
      {/* オーバーレイ */}
      <div className="fixed inset-0 bg-black opacity-80" onClick={onClose} />

      {/* コンテンツ */}
      <div
        className="p-6 bg-white rounded max-w-lg w-[90%] fixed inset-0 m-auto h-fit"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </>,
    document.body,
  );
}
