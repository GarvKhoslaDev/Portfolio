import React from 'react';

interface SlideCardWrapperProps {
  children: React.ReactNode;
  theme?: 'dark' | 'light';
  slideNumber?: string;
  className?: string;
  onClick?: () => void;
}

export const SlideCardWrapper: React.FC<SlideCardWrapperProps> = ({
  children,
  theme = 'light',
  slideNumber = '12/1',
  className = '',
  onClick,
}) => {
  const isDark = theme === 'dark';

  return (
    <article
      onClick={onClick}
      className={`relative w-full aspect-[16/10] min-h-[500px] sm:min-h-[560px] md:min-h-[620px] rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-9 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isDark
          ? 'bg-[#0f1012] text-white border border-neutral-800/80 shadow-black/40'
          : 'bg-[#fafaf8] text-neutral-900 border border-neutral-300/80 shadow-neutral-900/15'
      } ${className}`}
    >
      {/* Side vertical copyright mark matching reference image */}
      <div
        className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[7px] sm:text-[8px] font-mono-code tracking-widest pointer-events-none select-none opacity-40 ${
          isDark ? 'text-neutral-400' : 'text-neutral-600'
        }`}
      >
        ©2026 GK PORTFOLIO
      </div>

      {/* Main card content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>

      {/* Bottom corner slide index indicator */}
      <div
        className={`absolute bottom-3 left-6 sm:bottom-4 sm:left-9 text-[8px] sm:text-[9px] font-mono-code tracking-wider opacity-60 ${
          isDark ? 'text-neutral-400' : 'text-neutral-500'
        }`}
      >
        {slideNumber}
      </div>
    </article>
  );
};
