import React from 'react';
import { SlideHeader } from './SlideHeader';
import { SlideCardWrapper } from './SlideCardWrapper';
import paperSculptureImg from '../../assets/images/architectural_paper_sculpture_1792088553719.jpg';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface SlideProps {
  onExplore?: () => void;
  slideNumber?: string;
  isCompact?: boolean;
}

export const SlideCoverLight: React.FC<SlideProps> = ({ onExplore, slideNumber = "12/2", isCompact = false }) => {
  return (
    <SlideCardWrapper theme="light" slideNumber={slideNumber}>
      {/* Top Header */}
      <SlideHeader theme="light" subText="PERSONAL PRESENTATION" dateText="OCTOBER 2026" />

      {/* Brand & Version row */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-mono-code pt-2 sm:pt-3 text-neutral-800">
        <span className="font-bold tracking-tight">{PERSONAL_INFO.monogram}</span>
        <span className="text-neutral-500 font-medium">v2.0</span>
      </div>

      {/* Center visual: architectural paper sculpture / server topology curve */}
      <div className="my-auto py-2 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-3/5 rounded-xl overflow-hidden border border-neutral-300 shadow-md">
          <img
            src={paperSculptureImg}
            alt="Minimalist architectural paper curve"
            referrerPolicy="no-referrer"
            className="w-full h-36 sm:h-48 md:h-56 object-cover filter contrast-105"
          />
        </div>

        <div className="w-full md:w-2/5 flex flex-col justify-center space-y-2 text-neutral-700 font-mono-code text-[10px] sm:text-[11px] leading-relaxed">
          <div className="uppercase font-bold tracking-wider text-neutral-900 border-b border-neutral-300 pb-1">
            CORE ARCHITECTURE SPEC
          </div>
          <p className="text-neutral-600">
            STRUCTURED CAMPUS INFRASTRUCTURE: MULTI-VLAN SEGMENTATION, ITIL CHANGE AUDITS, AND ACTIVE DIRECTORY ENDPOINT POLICIES.
          </p>
          <div className="flex items-center gap-3 pt-1 text-neutral-500 text-[10px]">
            <span>VDI · LeafOS</span>
            <span>·</span>
            <span>TDX SLAs</span>
            <span>·</span>
            <span>802.1Q</span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Massive Display Typography & Justified block */}
      <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
        <div className="leading-none">
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter text-neutral-950 uppercase">
            CLEAN
            <br />
            PORTFOLIO
          </h2>
        </div>

        <div className="max-w-xs text-right hidden sm:block">
          <p className="text-[9px] md:text-[10px] tracking-wider uppercase font-mono-code text-neutral-600 leading-tight">
            VANCOUVER COMMUNITY COLLEGE & LANGARA COLLEGE.
            SYSTEMS SUPPORT, CLIENT-SIDE LOGS, AND FLUKE NETWORK CERTIFICATION.
          </p>
          {!isCompact && onExplore && (
            <button
              onClick={onExplore}
              className="mt-2 text-[10px] font-mono-code uppercase tracking-widest text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
            >
              VIEW TIMELINE →
            </button>
          )}
        </div>
      </div>
    </SlideCardWrapper>
  );
};
