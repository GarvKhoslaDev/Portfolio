import React from 'react';
import { EDUCATION, TECHNICAL_SKILLS } from '../data/portfolioData';
import { Award, GraduationCap, Network, Server, Shield, Database, Check } from 'lucide-react';

export const SkillsCredentialsSection: React.FC = () => {
  return (
    <section 
      id="skills-credentials" 
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900 flex flex-col justify-center scroll-mt-14 sm:scroll-mt-16 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-5 mb-10 gap-3">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-400">
              [02 // TECHNICAL COMPETENCIES & CREDENTIALS]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-1.5">
              EDUCATION & ENTERPRISE SKILLS
            </h2>
          </div>
          <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
            LANGARA COLLEGE GPA 3.5 · COMPTIA A+ · SCCM CERTIFIED
          </div>
        </div>

        {/* Top 2-Column Split: Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Education Box */}
          <div className="bg-[#0a0a0c] rounded-xl border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-8 transition-colors">
            <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-3 mb-4">
              <GraduationCap className="w-5 h-5 text-white" />
              <h3 className="font-mono-code font-bold text-xs uppercase tracking-wider text-white">
                DIPLOMA IN COMPUTER SYSTEMS
              </h3>
            </div>

            <div className="space-y-3 font-mono-code text-xs">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-lg text-white">{EDUCATION.institution}</span>
                <span className="text-neutral-400">{EDUCATION.location}</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed">
                {EDUCATION.degree}
              </p>
              <div className="flex items-center justify-between text-neutral-400 pt-3 border-t border-neutral-800">
                <span>Cumulative Academic GPA: <strong className="text-white text-sm">{EDUCATION.gpa}</strong></span>
                <span className="text-neutral-400">{EDUCATION.period}</span>
              </div>
            </div>
          </div>

          {/* Certifications Box */}
          <div className="bg-[#0a0a0c] rounded-xl border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-8 transition-colors">
            <div className="flex items-center gap-2.5 border-b border-neutral-800 pb-3 mb-4">
              <Award className="w-5 h-5 text-white" />
              <h3 className="font-mono-code font-bold text-xs uppercase tracking-wider text-white">
                INDUSTRY CREDENTIALS & CURRICULUM
              </h3>
            </div>

            <div className="space-y-3 font-mono-code text-xs">
              {EDUCATION.certifications.map((cert, i) => (
                <div key={i} className="flex items-center justify-between border-b border-neutral-900 pb-2.5">
                  <span className="text-white font-medium flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-400" />
                    {cert}
                  </span>
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Verified Credential</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid - Pure High-Contrast Brutalist Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_SKILLS.map((cat, idx) => (
            <div key={idx} className="bg-[#0a0a0c] rounded-xl border border-neutral-800/80 hover:border-neutral-700 p-6 transition-colors">
              <div className="border-b border-neutral-800 pb-3 mb-3 flex items-center justify-between">
                <h4 className="font-mono-code font-bold text-xs uppercase tracking-wider text-white">
                  0{idx + 1}. {cat.category}
                </h4>
                <span className="text-[10px] font-mono-code text-neutral-400 uppercase">{cat.skills.length} Competencies</span>
              </div>
              <p className="font-sans text-xs text-neutral-300 mb-4 leading-relaxed">
                {cat.description}
              </p>

              {/* Zero-Pill Unboxed Text with Typographic Separators */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono-code text-xs text-neutral-200">
                {cat.skills.map((skill, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="hover:text-white transition-colors">{skill}</span>
                    {sIdx < cat.skills.length - 1 && (
                      <span className="text-neutral-600" aria-hidden="true">·</span>
                    )}
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

