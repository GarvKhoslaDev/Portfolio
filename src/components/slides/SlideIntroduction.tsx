import React from 'react';
import { SlideHeader } from './SlideHeader';
import { SlideCardWrapper } from './SlideCardWrapper';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface SlideProps {
  onOpenDetails?: () => void;
  slideNumber?: string;
  isCompact?: boolean;
}

export const SlideIntroduction: React.FC<SlideProps> = ({ onOpenDetails, slideNumber = "12/3", isCompact = false }) => {
  return (
    <SlideCardWrapper theme="light" slideNumber={slideNumber}>
      {/* Top Header */}
      <SlideHeader theme="light" subText="PERSONAL PRESENTATION" dateText="OCTOBER 2026" />

      {/* Main Grid: Split Title on Left, Floating Technical Sheet on Right */}
      <div className="my-auto py-3 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Column: Massive Split Title & Narrative */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-neutral-950 uppercase leading-[0.88] mb-4 sm:mb-6">
            INTRODUC-
            <br />
            TION
          </h2>

          <div className="space-y-3 font-sans text-xs sm:text-[13px] text-neutral-700 leading-relaxed pr-2">
            <p>
              I am an IT professional and Network Analyst with a rigorous foundation in campus systems,
              endpoint management, and network troubleshooting. Currently serving as{' '}
              <strong className="text-neutral-950 font-semibold">Service Desk Technician II (CUPE 4627)</strong> at{' '}
              Vancouver Community College, I act as the primary technical escalation point for Tier 1 staff across hardware, OS, and infrastructure.
            </p>
            <p className="hidden sm:block">
              My engineering philosophy focuses on root-cause diagnosis rather than temporary workarounds:
              analyzing recurring incident patterns, utilizing Fluke network testers for physical layer verification,
              and administering Active Directory Group Policies following strict ITIL Change Management practices.
            </p>
          </div>
        </div>

        {/* Right Column: Floating Technical Spec Sheet Card with soft shadow */}
        <div className="md:col-span-5 relative">
          <div className="bg-white border border-neutral-200/90 rounded-xl p-4 sm:p-5 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-2 mb-3">
              <span className="text-[10px] font-mono-code font-bold tracking-wider text-neutral-900 uppercase">
                DOSSIER SPEC // GK-26
              </span>
              <span className="text-[9px] font-mono-code text-neutral-400">VANCOUVER, BC</span>
            </div>

            <div className="space-y-2.5 text-[11px] font-mono-code text-neutral-600">
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-400">PRIMARY ROLE</span>
                <span className="font-semibold text-neutral-900 text-right">Service Desk Tech II</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-400">INSTITUTION</span>
                <span className="font-semibold text-neutral-900 text-right">Vancouver Community College</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-400">ESCALATION TIER</span>
                <span className="font-semibold text-neutral-900 text-right">Tier 1 Primary Escalation</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-400">DIAGNOSTICS</span>
                <span className="font-semibold text-neutral-900 text-right">Fluke Testers · Wireshark</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-400">CORE FOCUS</span>
                <span className="font-semibold text-neutral-900 text-right">Active Directory · SCCM</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-[9px] font-mono-code text-neutral-500">{PERSONAL_INFO.email}</span>
              {!isCompact && onOpenDetails && (
                <button
                  onClick={onOpenDetails}
                  className="text-[10px] font-mono-code font-semibold uppercase text-neutral-900 underline hover:text-neutral-600"
                >
                  FULL PROFILE →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Header */}
      <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest">
        <span>INFRASTRUCTURE ANALYSIS</span>
        <span>VANCOUVER, BC · 672.833.1264</span>
      </div>
    </SlideCardWrapper>
  );
};
