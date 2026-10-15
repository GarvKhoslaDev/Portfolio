import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Grid, Layers, Eye, Maximize2, Minimize2 } from 'lucide-react';
import { SlideCoverDark } from './slides/SlideCoverDark';
import { SlideCoverLight } from './slides/SlideCoverLight';
import { SlideIntroduction } from './slides/SlideIntroduction';
import { SlideProfile } from './slides/SlideProfile';
import { SlideEducation } from './slides/SlideEducation';
import { SlideExperience } from './slides/SlideExperience';

type ViewMode = 'single' | 'grid' | 'perspective';

interface DeckViewerProps {
  onSelectExperience: (id: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const DeckViewer: React.FC<DeckViewerProps> = ({
  onSelectExperience,
  onOpenResume,
  onOpenContact,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('single');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slides = [
    { id: 0, title: "Cover Dossier", num: "12/1", component: <SlideCoverDark onExplore={() => setCurrentSlide(1)} slideNumber="12/1" /> },
    { id: 1, title: "Systems Spec", num: "12/2", component: <SlideCoverLight onExplore={() => setCurrentSlide(2)} slideNumber="12/2" /> },
    { id: 2, title: "Introduction", num: "12/3", component: <SlideIntroduction onOpenDetails={() => setCurrentSlide(3)} slideNumber="12/3" /> },
    { id: 3, title: "Profile & Role", num: "12/4", component: <SlideProfile onOpenExperience={() => setCurrentSlide(5)} slideNumber="12/4" /> },
    { id: 4, title: "Education & Certs", num: "12/5", component: <SlideEducation onOpenDetails={onOpenResume} slideNumber="12/5" /> },
    { id: 5, title: "Chronological Experience", num: "12/6", component: <SlideExperience onSelectExperience={onSelectExperience} slideNumber="12/6" /> },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="presentation-deck" className="relative w-full py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      {/* Deck Controls Header */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-code text-xs">
        {/* Left: Section descriptor */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-200 bg-neutral-900/60 px-2.5 py-1 rounded border border-neutral-700/60">
            EDITORIAL PORTFOLIO PRESENTATION DECK
          </span>
          <span className="hidden sm:inline text-neutral-400">·</span>
          <span className="text-neutral-300 text-[11px]">
            SLIDE {currentSlide + 1} OF {slides.length}
          </span>
        </div>

        {/* Right: View mode segmented controls */}
        <div className="flex items-center gap-1.5 bg-[#1b1c1e] border border-neutral-700/80 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setViewMode('single')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              viewMode === 'single'
                ? 'bg-white text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="Focus on single presentation card"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Deck</span>
          </button>

          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-white text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="View all 6 presentation slides in catalog grid (Reference 2)"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>6-Slide Grid</span>
          </button>

          <button
            onClick={() => setViewMode('perspective')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              viewMode === 'perspective'
                ? 'bg-white text-neutral-950 shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
            title="View floating perspective presentation stack (Reference 1)"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Studio Stack</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: SINGLE DECK VIEW */}
      {viewMode === 'single' && (
        <div className="max-w-5xl mx-auto">
          {/* Card Presentation Frame */}
          <div className="relative group">
            <div className="transform transition-all duration-300">
              {slides[currentSlide].component}
            </div>

            {/* Navigation Overlay Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-[-16px] sm:left-[-24px] top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-neutral-900/90 text-white border border-neutral-700 shadow-xl hover:bg-neutral-800 transition-transform active:scale-95 cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-[-16px] sm:right-[-24px] top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-neutral-900/90 text-white border border-neutral-700 shadow-xl hover:bg-neutral-800 transition-transform active:scale-95 cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Navigation Strip / Pagination */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-mono-code text-[11px]">
            <div className="flex items-center gap-1.5">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-2.5 py-1 rounded transition-colors uppercase cursor-pointer ${
                    currentSlide === idx
                      ? 'bg-neutral-900 text-white font-bold border border-neutral-700'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {s.num}
                </button>
              ))}
            </div>

            <div className="text-neutral-300 text-[10px] uppercase tracking-wider">
              {slides[currentSlide].title} · USE ← / → KEYS TO NAVIGATE
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 6-SLIDE CATALOG GRID (Exact 1:1 Recreation of Image 2) */}
      {viewMode === 'grid' && (
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                onClick={() => { setCurrentSlide(idx); setViewMode('single'); }}
                className="cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                title={`Click to view Slide ${idx + 1}: ${slide.title}`}
              >
                {slide.component}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-xs font-mono-code text-neutral-300 uppercase tracking-widest">
            CLICK ANY SLIDE TO EXPAND INTO PRESENTATION DECK MODE
          </div>
        </div>
      )}

      {/* VIEW 3: 3D PERSPECTIVE STUDIO STACK (Exact 1:1 Recreation of Image 1) */}
      {viewMode === 'perspective' && (
        <div className="max-w-6xl mx-auto py-10 relative overflow-hidden">
          <div className="relative min-h-[640px] md:min-h-[720px] flex items-center justify-center">
            {/* Background Layer 1: Left Angled Slide */}
            <div
              onClick={() => { setCurrentSlide(2); setViewMode('single'); }}
              className="absolute left-2 md:left-8 top-8 w-4/5 md:w-3/5 opacity-50 blur-[0.5px] scale-90 -rotate-6 hover:opacity-80 transition-all cursor-pointer pointer-events-auto"
            >
              <SlideIntroduction slideNumber="12/3" isCompact />
            </div>

            {/* Background Layer 2: Right Angled Slide */}
            <div
              onClick={() => { setCurrentSlide(5); setViewMode('single'); }}
              className="absolute right-2 md:right-8 bottom-6 w-4/5 md:w-3/5 opacity-60 blur-[0.5px] scale-95 rotate-3 hover:opacity-90 transition-all cursor-pointer pointer-events-auto"
            >
              <SlideExperience slideNumber="12/6" isCompact />
            </div>

            {/* Foreground Focused Hero Slide (Raised, elevated shadow matching Image 1) */}
            <div className="relative z-30 w-full max-w-3xl transform shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
              <SlideCoverDark onExplore={() => { setCurrentSlide(1); setViewMode('single'); }} slideNumber="12/1" />
            </div>
          </div>

          <div className="text-center font-mono-code text-xs text-neutral-200 uppercase tracking-wider mt-4">
            3D STUDIO PRESENTATION STACK · INTERACTIVE PROTOTYPE
          </div>
        </div>
      )}
    </div>
  );
};
