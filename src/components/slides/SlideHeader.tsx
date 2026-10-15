import React from 'react';
import { BarcodeGraphic } from '../BarcodeGraphic';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface SlideHeaderProps {
  theme?: 'dark' | 'light';
  subText?: string;
  dateText?: string;
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({
  theme = 'light',
  subText = 'PERSONAL PRESENTATION',
  dateText = 'OCTOBER 2026'
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`w-full flex items-center justify-between text-[9px] sm:text-[10px] tracking-widest uppercase font-mono-code border-b pb-2 sm:pb-3 ${
      isDark ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
    }`}>
      {/* Left section */}
      <div className="flex items-center gap-2">
        <span className="font-semibold">{subText}</span>
        <span className="hidden sm:inline text-neutral-400">·</span>
        <span className="hidden sm:inline text-neutral-400">VANCOUVER, BC</span>
      </div>

      {/* Center section with name and barcode */}
      <div className="flex items-center gap-2 font-bold tracking-wider text-center">
        <span className={isDark ? 'text-white' : 'text-neutral-900'}>{PERSONAL_INFO.name}</span>
        <span className="hidden md:inline font-normal text-neutral-400">1234 —</span>
        <BarcodeGraphic className={`h-2.5 sm:h-3 ${isDark ? 'text-neutral-300' : 'text-neutral-800'}`} />
      </div>

      {/* Right section with date / contact */}
      <div className="flex items-center gap-2">
        <span>{dateText}</span>
        <span className="hidden lg:inline text-neutral-400">·</span>
        <span className="hidden lg:inline">{PERSONAL_INFO.phone}</span>
      </div>
    </div>
  );
};
