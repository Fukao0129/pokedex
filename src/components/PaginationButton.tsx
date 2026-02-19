import React from "react";

interface PaginationButtonProps {
  disabled: boolean;
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function PaginationButton({
  disabled,
  active,
  onClick,
  children,
}: PaginationButtonProps) {
  const classes = [
    "w-10",
    "h-10",
    "flex",
    "items-center",
    "justify-center",
    "rounded-full",
    "border-2",
    disabled
      ? "cursor-default bg-gray-100 border-transparent"
      : active
        ? "cursor-pointer bg-[linear-gradient(to_bottom,#ef4444_50%,#ffffff_50%)] border-slate-800"
        : "cursor-pointer bg-gray-200 border-transparent",
    "transition-transform",
  ].join(" ");

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      <span
        className={`${
          disabled ? "text-gray-300" : "text-gray-900"
        } font-bold text-sm`}
      >
        {children}
      </span>
    </button>
  );
}
