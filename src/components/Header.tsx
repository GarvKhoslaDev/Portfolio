import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, Terminal, Film } from 'lucide-react';
import { AppleColorPrism } from './AppleColorPrism';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-neutral-900 text-white transition-all select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Brand Wordmark with Monochrome Badge */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 text-base sm:text-lg font-display font-black tracking-tight text-white uppercase hover:text-neutral-300 transition-colors"
          >
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-[10px] font-mono-code font-bold text-black bg-white px-1.5 py-0.5 rounded">
              GK-26
            </span>
          </a>
        </div>

        {/* Minimal single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono-code uppercase tracking-wider text-neutral-400">
          <button
            onClick={() => scrollToSection('cli-terminal')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 text-neutral-300 font-semibold"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI</span>
          </button>
          <button
            onClick={() => scrollToSection('skills-credentials')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('diagnostic-labs')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Labs
          </button>
          <button
            onClick={() => scrollToSection('projects-section')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience-section')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('movie-credits')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <Film className="w-3.5 h-3.5" />
            <span>Credits</span>
          </button>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-code font-semibold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090a0c] border-b border-neutral-900 px-6 py-4 space-y-3 text-xs font-mono-code uppercase tracking-wider text-neutral-300">
          <button
            onClick={() => scrollToSection('cli-terminal')}
            className="block w-full text-left py-2 text-white font-bold"
          >
            &gt; 01. CLI Terminal (About Me)
          </button>
          <button
            onClick={() => scrollToSection('skills-credentials')}
            className="block w-full text-left py-2 hover:text-white"
          >
            &gt; 02. Skills & Credentials
          </button>
          <button
            onClick={() => scrollToSection('diagnostic-labs')}
            className="block w-full text-left py-2 hover:text-white"
          >
            &gt; 03. Diagnostic & Protocol Labs
          </button>
          <button
            onClick={() => scrollToSection('projects-section')}
            className="block w-full text-left py-2 hover:text-white"
          >
            &gt; 04. Featured Projects
          </button>
          <button
            onClick={() => scrollToSection('experience-section')}
            className="block w-full text-left py-2 hover:text-white"
          >
            &gt; 05. Enterprise Experience
          </button>
          <button
            onClick={() => scrollToSection('movie-credits')}
            className="block w-full text-left py-2 hover:text-white"
          >
            &gt; 06. Movie Ending Credits
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="block w-full text-left py-2 hover:text-white"
          >
            &gt; 07. Contact Coordinates
          </button>
          <div className="pt-2 border-t border-neutral-800">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full py-2.5 text-center bg-white text-black rounded font-semibold cursor-pointer"
            >
              Download / Print Resume PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
