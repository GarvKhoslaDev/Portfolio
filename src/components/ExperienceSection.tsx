import React from 'react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';
import { Building2, Calendar, MapPin, ArrowUpRight, Check } from 'lucide-react';

interface ExperienceSectionProps {
  onSelectExperience: (id: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectExperience }) => {
  return (
    <section 
      id="experience-section" 
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900 flex flex-col justify-center scroll-mt-14 sm:scroll-mt-16 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-5 mb-10 gap-3">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-400">
              [05 // PROFESSIONAL TRACK RECORD & SERVICE DESK]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-1.5">
              ENTERPRISE EXPERIENCE & DESKSIDE OPERATIONS
            </h2>
          </div>
          <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
            VANCOUVER, BC · CUPE 4627 BARGAINING UNIT
          </div>
        </div>

        {/* Experience List Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              onClick={() => onSelectExperience(exp.id)}
              className="group bg-[#0a0a0c] rounded-xl border border-neutral-800/80 hover:border-neutral-500 p-6 sm:p-8 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-800 pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono-code uppercase tracking-widest text-neutral-400">
                    {`0${index + 1}. ${exp.company}`}
                  </span>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mt-0.5 group-hover:text-neutral-200 transition-colors uppercase">
                    {exp.title}
                    {exp.grade && (
                      <span className="ml-2.5 text-xs font-mono-code font-normal text-neutral-400 lowercase">
                        ({exp.grade})
                      </span>
                    )}
                  </h3>
                </div>

                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400 shrink-0">
                  <span className="text-white font-medium">{exp.period}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{exp.location}</span>
                  <div className="flex items-center gap-1 ml-2 text-neutral-400 group-hover:text-white transition-colors">
                    <span className="text-[10px] uppercase font-mono-code">Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Role Summary */}
              <p className="font-sans text-sm text-neutral-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Highlights bullet list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {exp.highlights.slice(0, 4).map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300 font-sans">
                    <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Technologies deployed */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-400">
                <span className="text-neutral-500 uppercase text-[10px] font-bold">Key Technologies:</span>
                {exp.technologies.map((tech, i) => (
                  <React.Fragment key={i}>
                    <span className="text-white font-medium">{tech}</span>
                    {i < exp.technologies.length - 1 && <span className="text-neutral-600" aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

