import React from 'react';
import { SlideHeader } from './SlideHeader';
import { SlideCardWrapper } from './SlideCardWrapper';
import { EDUCATION, PERSONAL_INFO } from '../../data/portfolioData';

interface SlideProps {
  onOpenDetails?: () => void;
  slideNumber?: string;
  isCompact?: boolean;
}

export const SlideEducation: React.FC<SlideProps> = ({ onOpenDetails, slideNumber = "12/5", isCompact = false }) => {
  return (
    <SlideCardWrapper theme="light" slideNumber={slideNumber}>
      {/* Top Header */}
      <SlideHeader theme="light" subText="PERSONAL PRESENTATION" dateText="OCTOBER 2026" />

      {/* Top Section: Massive EDUCATION Title and Brand Lockup */}
      <div className="pt-2 sm:pt-4 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 border-b border-neutral-300 pb-3">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-neutral-950 uppercase leading-none">
          EDUCATION
        </h2>

        <div className="flex items-center gap-4 text-right">
          <div className="hidden sm:block max-w-xs font-mono-code text-[10px] text-neutral-600 uppercase leading-snug">
            LANGARA COLLEGE DIPLOMA IN COMPUTER SYSTEMS. COMPTIA A+ CERTIFIED WITH CCNA CURRICULUM KNOWLEDGE.
          </div>
          <span className="font-mono-code font-bold text-lg text-neutral-900">{PERSONAL_INFO.monogram}</span>
        </div>
      </div>

      {/* Middle Grid: GRADE A+ Callout and Curriculum Rows matching the reference image */}
      <div className="my-auto py-3 grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        {/* Left Column: GRADE A+ callout */}
        <div className="md:col-span-3 flex md:flex-col items-center md:items-start justify-between border-b md:border-b-0 md:border-r border-neutral-300 pb-2 md:pb-0 md:pr-4">
          <div>
            <div className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-500">
              ACADEMIC STANDING
            </div>
            <div className="font-display font-black text-3xl sm:text-4xl text-neutral-950 mt-1">
              GPA 3.5
            </div>
          </div>
          <div className="mt-2 md:mt-6 bg-neutral-900 text-white font-mono-code text-[10px] px-2.5 py-1 uppercase tracking-widest font-semibold rounded">
            GRADE A+ LEVEL
          </div>
        </div>

        {/* Right Columns: Structured Rows with hairline horizontal dividers */}
        <div className="md:col-span-9 space-y-3 font-mono-code">
          {/* Row 1: Degree */}
          <div className="border-b border-neutral-300 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <div className="font-bold text-xs sm:text-sm text-neutral-950 uppercase">
                {EDUCATION.institution}
              </div>
              <div className="text-[11px] text-neutral-700 font-sans font-medium">
                {EDUCATION.degree}
              </div>
            </div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
              {EDUCATION.period} · {EDUCATION.location}
            </div>
          </div>

          {/* Row 2: Certifications */}
          <div className="border-b border-neutral-300 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <div className="font-bold text-xs text-neutral-950 uppercase">
                CERTIFICATIONS & CREDENTIALS
              </div>
              <div className="text-[11px] text-neutral-700 font-sans">
                {EDUCATION.certifications.join(' · ')}
              </div>
            </div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
              VERIFIED CREDENTIALS
            </div>
          </div>

          {/* Row 3: Systems & Networking Focus */}
          <div className="border-b border-neutral-300 pb-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <div className="font-bold text-xs text-neutral-950 uppercase">
                NETWORK & SYSTEMS CURRICULUM
              </div>
              <div className="text-[11px] text-neutral-700 font-sans">
                {EDUCATION.focusAreas.join(' · ')}
              </div>
            </div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
              HARDWARE & SOFTWARE
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest">
        <span>LANGARA COLLEGE ALUMNI</span>
        <span>VANCOUVER, BC · 2023–2025</span>
      </div>
    </SlideCardWrapper>
  );
};
