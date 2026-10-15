import React from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ArrowUpRight, Check, Terminal } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (id: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section 
      id="projects-section" 
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900 flex flex-col justify-center scroll-mt-14 sm:scroll-mt-16 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-5 mb-10 gap-3">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-400">
              [04 // INFRASTRUCTURE & NETWORK ARCHITECTURE]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-1.5">
              FEATURED ENTERPRISE PROJECTS
            </h2>
          </div>
          <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
            CISCO ROUTING · RELATIONAL DATABASE SCHEMAS · LINUX SECURITY
          </div>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj.id)}
              className="group bg-[#0a0a0c] rounded-xl border border-neutral-800/80 hover:border-neutral-500 p-6 sm:p-8 transition-all duration-300 shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 border-b border-neutral-800 pb-3 mb-4">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    0{idx + 1}. {proj.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-white transition-colors">
                    <span className="text-[10px] uppercase font-mono-code">View Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight group-hover:text-neutral-200 transition-colors uppercase">
                  {proj.title}
                </h3>

                <p className="mt-3 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {proj.overview}
                </p>

                {/* Technical key features */}
                <div className="mt-5 space-y-2.5">
                  {proj.architecturePoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono-code text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools list */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-400">
                <span className="text-neutral-500 uppercase text-[10px] font-bold">Stack:</span>
                {proj.tools.map((tool, i) => (
                  <React.Fragment key={i}>
                    <span className="text-white font-medium">{tool}</span>
                    {i < proj.tools.length - 1 && <span className="text-neutral-600" aria-hidden="true">·</span>}
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

