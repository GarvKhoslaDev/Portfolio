import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Copy, Check, FileText, Mail, Terminal } from 'lucide-react';
import fluidArtImg from '../assets/images/abstract_fluid_ink_1792098615441.jpg';

interface BrutalistHeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onScrollToExplore: () => void;
}

export const BrutalistHero: React.FC<BrutalistHeroProps> = ({
  onOpenResume,
  onOpenContact,
  onScrollToExplore,
}) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollToTerminal = () => {
    const el = document.getElementById('cli-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="front-page"
      className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] snap-start flex flex-col justify-between px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-8 bg-black text-white select-none border-b border-neutral-900 overflow-hidden scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Top Banner: Giant Brutalist Bracketed Headline in Clean Pure White */}
      <div className="relative z-10 w-full text-center">
        <h1 className="font-display font-black tracking-tighter text-white uppercase text-[clamp(2.5rem,8.2vw,9.5rem)] leading-[0.88] transition-all duration-500">
          <span className="text-neutral-500 inline-block font-mono-code font-light mr-1">[</span>
          NETWORK ANALYST
          <span className="text-neutral-500 inline-block font-mono-code font-light ml-1">]</span>
        </h1>
        <div className="mt-3 text-xs sm:text-sm font-mono-code uppercase tracking-widest text-neutral-400 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span>ENTERPRISE INFRASTRUCTURE</span>
          <span className="text-neutral-600">·</span>
          <span>TIER 1 ESCALATION</span>
          <span className="text-neutral-600">·</span>
          <span className="text-white font-semibold">FLUKE DIAGNOSTICS</span>
          <span className="text-neutral-600">·</span>
          <span>CCNA ROUTING</span>
        </div>
      </div>

      {/* Middle Information Row: Pure Black Background with Rectangular Fluid Art Card on the Right */}
      <div className="relative z-10 my-auto py-6 sm:py-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 border-y border-neutral-900">
        {/* Left Information Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-xs sm:text-sm font-mono-code items-center">
          {/* Column 1: Created & Prepared by */}
          <div className="space-y-1">
            <span className="text-neutral-500 text-xs uppercase tracking-wider block">Created and Engineered by</span>
            <span className="font-bold text-white text-base sm:text-lg block tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-neutral-400 text-xs block">
              Service Desk Tech II (VCC CUPE 4627)
            </span>
          </div>

          {/* Column 2: Direct Contact Coordinates with 1-click copy */}
          <div className="space-y-1">
            <button
              onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors group cursor-pointer"
              title="Click to copy phone"
            >
              <span className="font-mono-code text-sm sm:text-base font-semibold text-white">
                +1 {PERSONAL_INFO.phone}
              </span>
              {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3 h-3 text-neutral-500 opacity-60 group-hover:opacity-100" />}
            </button>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors group cursor-pointer"
              title="Click to copy email"
            >
              <span className="text-xs sm:text-sm">{PERSONAL_INFO.email}</span>
              {copied === 'email' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3 h-3 text-neutral-500 opacity-60 group-hover:opacity-100" />}
            </button>
          </div>

          {/* Column 3: Location Coordinates */}
          <div className="space-y-1">
            <span className="font-bold text-white text-base sm:text-lg block tracking-tight">
              Vancouver, BC
            </span>
            <span className="text-neutral-300 text-xs block">
              Campus Networks · Active Directory
            </span>
            <span className="text-neutral-400 text-xs block">
              Langara Systems Diploma · GPA 3.5
            </span>
          </div>
        </div>

        {/* Right: Rectangular Card with User's Uploaded Art Image */}
        <div className="shrink-0">
          <div className="w-36 sm:w-44 md:w-52 aspect-[3/4] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 relative group shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={fluidArtImg}
              alt="Fluid Ink Specimen"
              className="w-full h-full object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono-code text-white/90 uppercase tracking-widest px-1">
              <span>SPECIMEN // 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: "Portfolio" on left and "2026" on right */}
      <div className="relative z-10 flex items-end justify-between pt-6">
        <div className="flex items-baseline gap-4">
          <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white capitalize">
            Portfolio
          </span>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code uppercase font-bold text-black bg-white hover:bg-neutral-200 rounded-md transition-colors cursor-pointer shadow-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </button>
            <button
              onClick={scrollToTerminal}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code uppercase font-semibold text-white bg-neutral-900 border border-neutral-700 hover:border-white hover:bg-neutral-800 rounded-md transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI Shell</span>
            </button>
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code uppercase font-semibold text-neutral-300 bg-neutral-950 border border-neutral-800 hover:text-white hover:border-neutral-600 rounded-md transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Center subtle scroll down prompt */}
        <button
          onClick={onScrollToExplore}
          className="flex flex-col items-center gap-1 text-[10px] font-mono-code uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <span>SCROLL TO ENTER</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-white" />
        </button>

        <div className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white">
          2026
        </div>
      </div>
    </section>
  );
};
