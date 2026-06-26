import React from "react";

interface StarProps {
  className?: string;
  size?: number;
}

export function Star({ className = "", size = 24 }: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-[var(--accent-color)] transition-colors duration-500 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C12 6.627 18.627 12 24 12C18.627 12 12 17.373 12 24C12 17.373 5.373 12 0 12C5.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

export default function FloatingStars() {
  return (
    <>
      <div className="absolute top-[20%] right-[10%] md:right-[20%] z-0 pointer-events-none animate-float-1">
        <Star size={36} className="opacity-30 drop-shadow-[0_0_8px_var(--accent-color)]" />
      </div>

      <div className="absolute top-[45%] left-[8%] md:left-[15%] z-0 pointer-events-none animate-float-2">
        <Star size={26} className="opacity-20 drop-shadow-[0_0_6px_var(--accent-color)]" />
      </div>
    </>
  );
}
