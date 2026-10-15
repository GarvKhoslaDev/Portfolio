import React from 'react';
import { SlideHeader } from './SlideHeader';
import { SlideCardWrapper } from './SlideCardWrapper';
import heroNetworkImg from '../../assets/images/hero_network_monochrome_1792088551461.jpg';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface SlideProps {
  onExplore?: () => void;
  slideNumber?: string;
  isCompact?: boolean;
}

export const SlideCoverDark: React.FC<SlideProps> = ({ onExplore, slideNumber = "12/1", isCompact = false }) => {
  return (
    <SlideCardWrapper theme="dark" slideNumber={slideNumber}>
      {/* Top Header */}
      <SlideHeader theme="dark" subText="PERSONAL PRESENTATION" dateText="OCTOBER 2026" />

      {/* Brand & Version row */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono-code pt-2 sm:pt-3 text-neutral-300">
        <span className="font-bold tracking-tight">{PERSONAL_INFO.monogram}</span>
        <span className="opacity-80">v2.6</span>
      </div>

      {/* Middle Layout: Image with high-contrast focal presence */}
      <div className="my-auto py-2 sm:py-3 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-8 relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl group">
          <img
            src={heroNetworkImg}
            alt="Garv Khosla Enterprise Fiber Patching"
            referrerPolicy="no-referrer"
            className="w-full h-40 sm:h-52 md:h-64 object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-3 text-[10px] font-mono-code uppercase tracking-wider text-neutral-300 bg-black/60 px-2 py-0.5 rounded">
            FIBER OPTIC PATCH · ENTERPRISE SWITCH
          </div>
        </div>

        <div className="hidden md:flex md:col-span-4 flex-col justify-end space-y-3 text-neutral-400 font-mono-code text-[11px] leading-relaxed">
          <p className="border-l border-neutral-700 pl-3">
            PRIMARY ESCALATION & INFRASTRUCTURE ANALYSIS
          </p>
          <p className="text-[10px] text-neutral-500 uppercase leading-snug">
            CAMPUS NETWORK TRIAGE · ACTIVE DIRECTORY · SCCM DEPLOYMENT · FLUKE VERIFICATION
          </p>
        </div>
      </div>

      {/* Bottom Section: Massive Typography & Justified Summary */}
      <div className="pt-2 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
        <div className="leading-none">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-white uppercase">
            CLEAN
            <br />
            PORTFOLIO
          </h1>
        </div>

        <div className="max-w-xs text-right hidden sm:block">
          <p className="text-[9px] md:text-[10px] tracking-wider uppercase font-mono-code text-neutral-400 leading-tight">
            GARV KHOSLA — SERVICE DESK TECHNICIAN II & NETWORK ANALYST.
            PROVIDING ADVANCED TIER 1 ESCALATION, GPO MANAGEMENT, AND CCNA LAB ROUTING.
          </p>
          {!isCompact && onExplore && (
            <button
              onClick={onExplore}
              className="mt-2 text-[10px] font-mono-code uppercase tracking-widest text-white underline underline-offset-4 hover:text-neutral-300 transition-colors"
            >
              EXPLORE DOSSIER →
            </button>
          )}
        </div>
      </div>
    </SlideCardWrapper>
  );
};
