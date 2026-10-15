import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Mail, Phone, Copy, Check, ArrowUp, Terminal } from 'lucide-react';
import { AppleColorPrism } from './AppleColorPrism';

interface BrutalistFooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const BrutalistFooter: React.FC<BrutalistFooterProps> = ({ onOpenResume, onOpenContact }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTerminal = () => {
    const el = document.getElementById('cli-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      id="footer-section"
      className="snap-start min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex flex-col justify-between scroll-mt-14 sm:scroll-mt-16 bg-[#050505] text-white pt-16 sm:pt-24 pb-12 px-4 sm:px-8 lg:px-12 select-none border-t border-neutral-900 relative overflow-hidden"
    >
      {/* Subtle monochrome ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Giant Bracketed Name Display */}
        <div className="text-center border-b border-neutral-900 pb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-xs sm:text-sm font-mono-code uppercase tracking-widest text-neutral-400">
              AVAILABLE FOR NETWORK ANALYST & SYSTEMS ROLES
            </span>
          </div>
          <h2 className="font-display font-black tracking-tighter text-white uppercase text-[clamp(2.5rem,8.5vw,9.5rem)] leading-[0.88]">
            <span className="text-neutral-500 inline-block font-mono-code font-light mr-1">[</span>
            GARV KHOSLA
            <span className="text-neutral-500 inline-block font-mono-code font-light ml-1">]</span>
          </h2>
          <div className="mt-3 text-xs sm:text-sm font-mono-code text-neutral-400">
            VANCOUVER, BRITISH COLUMBIA · CUPE 4627 TIER 1 ESCALATION LEAD
          </div>
        </div>

        {/* Action Center Grid matching user's uploaded reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono-code text-xs sm:text-sm border-b border-neutral-900 pb-12 items-center">
          {/* Col 1: Direct Contact List matching reference */}
          <div className="space-y-1.5 text-xs">
            <div className="text-neutral-400 font-semibold uppercase text-[10px] tracking-wider mb-1">
              Direct Coordinates
            </div>
            <div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 font-bold transition-colors cursor-pointer"
              >
                <span>+1 {PERSONAL_INFO.phone}</span>
                {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3 h-3 text-neutral-500" />}
              </button>
            </div>
            <div>
              <span className="text-neutral-400">LinkedIn: </span>
              <span className="text-white">Garv Khosla</span>
            </div>
            <div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>{PERSONAL_INFO.email}</span>
                {copied === 'email' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3 h-3 text-neutral-500" />}
              </button>
            </div>
            <div>
              <span className="text-neutral-400">Location: </span>
              <span className="text-white">Vancouver, BC</span>
            </div>
          </div>

          {/* Col 2: Action Buttons */}
          <div className="space-y-3 md:text-center">
            <span className="text-neutral-500 uppercase tracking-wider text-xs block">Immediate Actions</span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-4 py-2.5 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg w-full sm:w-auto justify-center"
              >
                <FileText className="w-4 h-4" />
                <span>Resume PDF</span>
              </button>
              <button
                onClick={scrollToTerminal}
                className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-700 hover:border-white text-white font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <Terminal className="w-4 h-4" />
                <span>Run CLI</span>
              </button>
            </div>
          </div>

          {/* Col 3: Reference Image Accent with Monochrome Badge */}
          <div className="flex items-center justify-between md:justify-end gap-6">
            <div className="space-y-1 md:text-right">
              <span className="text-neutral-400 text-xs block">Status: Active Service Desk II</span>
              <span className="text-white font-bold block text-sm">Open to Network Analyst Roles</span>
              <span className="text-neutral-500 text-[11px] block">Vancouver Community College</span>
            </div>

            {/* Minimalist monochrome status tag */}
            <div className="shrink-0 pl-4 border-l border-neutral-800 flex flex-col items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              <span className="text-[9px] font-mono-code text-neutral-500 uppercase">2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-xs text-neutral-500">
          <div>
            © 2026 Garv Khosla · Systems & Network Analyst · Built with Apple Keynote Precision
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
