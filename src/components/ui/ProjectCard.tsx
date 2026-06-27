import React, { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
  textColor?: string;
  gridStart: number;
  gridSpan: number;
  href?: string;
  flourishes?: ReactNode;
  children: ReactNode;
}

export default function ProjectCard({
  title,
  subtitle,
  bgColor,
  textColor = "text-[#1c1c1c]",
  gridStart,
  gridSpan,
  href = "#",
  flourishes,
  children,
}: ProjectCardProps) {
  const customStyles = {
    "--grid-column-start": gridStart,
    "--grid-column-span": gridSpan,
  } as React.CSSProperties;

  return (
    <div
      style={customStyles}
      className="card-wrapper-col display-contents group relative"
    >
      <a
        href={href}
        className={`card block w-full relative rounded-[32px] p-5 xs:p-6 sm:p-8 md:p-10 overflow-hidden cursor-pointer select-none transition-all duration-500 ease-out transform group-hover:-translate-y-2 group-hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4)] ${bgColor} ${textColor}`}
      >
        {flourishes && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80 group-hover:scale-105 transition-transform duration-500">
            {flourishes}
          </div>
        )}

        <div className="flex flex-col h-full justify-between gap-8 relative z-10">
          <div className="flex flex-col items-end text-right select-none">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-60">
              {subtitle}
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-1 leading-none">
              {title}
            </h3>
          </div>
          <div className="w-full flex justify-center items-end mt-4 transform group-hover:scale-[1.02] transition-transform duration-500">
            {children}
          </div>
        </div>
      </a>
    </div>
  );
}
