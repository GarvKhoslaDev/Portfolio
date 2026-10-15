/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { BrutalistHero } from './components/BrutalistHero';
import { FullscreenTerminal } from './components/FullscreenTerminal';
import { SkillsCredentialsSection } from './components/SkillsCredentialsSection';
import { DiagnosticLabsSection } from './components/DiagnosticLabsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MovieCreditsSection } from './components/MovieCreditsSection';
import { BrutalistFooter } from './components/BrutalistFooter';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedDossierId, setSelectedDossierId] = useState<string | null>(null);

  const scrollToTerminal = () => {
    const el = document.getElementById('cli-terminal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f4f4f5] flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Sticky Minimal Navigation */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Main Continuous Full-Screen Scroll-Driven Experience */}
      <main className="flex-1">
        {/* 01. Initial State — Opening Viewport (Cinematic Brutalist Hero with Glass-Blurred [NETWORK ANALYST] & Dark Mountain) */}
        <BrutalistHero
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
          onScrollToExplore={scrollToTerminal}
        />

        {/* 02. As User Scrolls — Expand into the CLI Experience (Windows CMD, Visible ASCII Art, Autocomplete, Progressive Reveal) */}
        <FullscreenTerminal
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
        />

        {/* 03. Continue Scrolling — Complete Portfolio: Technical Skills & Academic Credentials */}
        <SkillsCredentialsSection />

        {/* 04. Hardware & Diagnostic Troubleshooting Labs (Fluke LinkRunner G2 & Wireshark PCAP Analyzer) */}
        <DiagnosticLabsSection />

        {/* 05. Enterprise Infrastructure & Network Projects */}
        <ProjectsSection
          onSelectProject={(id) => setSelectedDossierId(id)}
        />

        {/* 06. Professional Experience & Deskside Support Operations (VCC CUPE 4627) */}
        <ExperienceSection
          onSelectExperience={(id) => setSelectedDossierId(id)}
        />

        {/* 07. Full-Screen Classic Movie Ending Credits with Auto-Scroll & Bold Line Highlights */}
        <MovieCreditsSection />
      </main>

      {/* 08. Brutalist Grand Finale: Giant [GARV KHOSLA] & Action Center */}
      <BrutalistFooter
        onOpenResume={() => setResumeOpen(true)}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <ExperienceDetailModal
        itemId={selectedDossierId}
        onClose={() => setSelectedDossierId(null)}
      />
    </div>
  );
}
