import React from 'react';
import { EDUCATION, TECHNICAL_SKILLS, PROJECTS } from '../data/portfolioData';
import { Award, GraduationCap, CheckCircle2, ArrowUpRight, Database, Terminal } from 'lucide-react';

interface BrutalistCredentialsProps {
  onSelectProject: (id: string) => void;
}

export const BrutalistCredentials: React.FC<BrutalistCredentialsProps> = ({ onSelectProject }) => {
  return (
    <section id="credentials" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section 1: Education & Credentials with Giant Bracketed Header */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-4 mb-8 gap-2">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-white">
                [ACADEMIC RIGOR & VERIFIED CERTIFICATIONS]
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-1">
                EDUCATION & CREDENTIALS
              </h2>
            </div>
            <div className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider">
              LANGARA COLLEGE · GPA 3.5
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Langara Box */}
            <div className="bg-[#090a0c] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-white" />
                  <span className="font-mono-code font-bold text-xs uppercase text-white tracking-wider">
                    DIPLOMA IN COMPUTER SYSTEMS
                  </span>
                </div>
                <span className="font-mono-code text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  GPA 3.5
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  {EDUCATION.institution}
                </h3>
                <p className="text-sm font-sans text-neutral-300 mt-1">
                  {EDUCATION.degree}
                </p>
                <div className="text-xs font-mono-code text-neutral-500 mt-1">
                  {EDUCATION.period} · {EDUCATION.location}
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800/80">
                <div className="text-[10px] font-mono-code uppercase font-bold text-neutral-400 mb-2">
                  ACADEMIC & SYSTEMS FOCUS:
                </div>
                <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs text-neutral-300">
                  {EDUCATION.focusAreas.map((area, i) => (
                    <React.Fragment key={i}>
                      <span>{area}</span>
                      {i < EDUCATION.focusAreas.length - 1 && <span className="text-neutral-700" aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div className="bg-[#090a0c] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-white" />
                  <span className="font-mono-code font-bold text-xs uppercase text-white tracking-wider">
                    INDUSTRY CERTIFICATIONS
                  </span>
                </div>
                <span className="font-mono-code text-[11px] text-neutral-400">
                  CURRENT STANDING
                </span>
              </div>

              <div className="space-y-4 pt-1 font-mono-code">
                {EDUCATION.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-neutral-850 pb-3">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-bold text-sm text-white">{cert}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                      Verified
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs font-mono-code text-neutral-400 leading-relaxed">
                Demonstrated practical competence in hardware diagnosis, enterprise SCCM packaging, and Cisco CCNA switching and routing topologies.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Competencies Categorized */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-4 mb-8 gap-2">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-white">
                [ENTERPRISE TECHNICAL DOMAINS]
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mt-1">
                COMPETENCY MATRIX
              </h2>
            </div>
            <div className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider">
              UNBOXED ARCHITECTURAL TAXONOMY
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECHNICAL_SKILLS.map((cat, idx) => (
              <div key={idx} className="bg-[#090a0c] border border-neutral-800 rounded-2xl p-6 sm:p-7 space-y-3">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                  <h3 className="font-mono-code font-bold text-sm uppercase text-white tracking-wider">
                    0{idx + 1}. {cat.category}
                  </h3>
                  <span className="font-mono-code text-[10px] text-neutral-500 uppercase">
                    {cat.skills.length} Areas
                  </span>
                </div>
                <p className="font-sans text-xs text-neutral-400">
                  {cat.description}
                </p>

                {/* Zero-Pill Unboxed Text with typographic separators */}
                <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono-code text-xs text-neutral-200">
                  {cat.skills.map((skill, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="hover:text-white transition-colors">{skill}</span>
                      {sIdx < cat.skills.length - 1 && (
                        <span className="text-neutral-700" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Technical Software & Database Projects */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-4 mb-8 gap-2">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-white">
                [SYSTEMS & SOFTWARE LABS]
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mt-1">
                FEATURED INITIATIVES
              </h2>
            </div>
            <div className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider">
              CISCO PACKET TRACER · PYTHON · SQL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="group bg-[#090a0c] border border-neutral-800 rounded-2xl p-6 sm:p-8 hover:border-neutral-600 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5 mb-3 text-xs font-mono-code text-neutral-400">
                    <span className="font-bold text-neutral-300">0{idx + 1}. {proj.category}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-neutral-200 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed">
                    {proj.overview}
                  </p>

                  <div className="mt-4 space-y-2 font-mono-code text-xs text-neutral-300">
                    {proj.architecturePoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2 font-mono-code text-xs text-neutral-400">
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Stack:</span>
                  {proj.tools.map((t, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span className="text-neutral-200">{t}</span>
                      {tIdx < proj.tools.length - 1 && <span className="text-neutral-700" aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
