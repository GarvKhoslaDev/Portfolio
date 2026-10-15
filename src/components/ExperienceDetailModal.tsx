import React from 'react';
import { X, CheckCircle, Terminal, Calendar, MapPin, Building2, Wrench } from 'lucide-react';
import { EXPERIENCES, PROJECTS, ExperienceItem, ProjectItem } from '../data/portfolioData';

interface ExperienceDetailModalProps {
  itemId: string | null;
  onClose: () => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({ itemId, onClose }) => {
  if (!itemId) return null;

  const experience = EXPERIENCES.find((e) => e.id === itemId);
  const project = PROJECTS.find((p) => p.id === itemId);

  if (!experience && !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 font-mono-code">
      <div className="relative w-full max-w-2xl bg-[#0f1012] text-white rounded-2xl border border-neutral-700 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-neutral-800 pb-4 mb-4">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-widest">
              {experience ? 'TECHNICAL DOSSIER // EXPERIENCE' : 'TECHNICAL DOSSIER // PROJECT'}
            </div>
            <h2 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight uppercase mt-1">
              {experience ? experience.company : project?.title}
            </h2>
            <div className="text-xs text-neutral-300 font-medium mt-1">
              {experience ? `${experience.title} ${experience.grade ? `(${experience.grade})` : ''}` : project?.category}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metadata info */}
        <div className="flex flex-wrap gap-4 text-[11px] text-neutral-400 border-b border-neutral-800 pb-4 mb-4">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-neutral-500" />
            <span>{experience ? experience.period : project?.period}</span>
          </div>
          {experience && (
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-500" />
              <span>{experience.location}</span>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mb-5">
          <div className="text-[10px] uppercase font-bold text-neutral-300 tracking-wider mb-2">
            OVERVIEW & MANDATE
          </div>
          <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {experience ? experience.summary : project?.overview}
          </p>
        </div>

        {/* Highlights / Technical details */}
        <div className="mb-5">
          <div className="text-[10px] uppercase font-bold text-neutral-300 tracking-wider mb-2">
            DETAILED RESPONSIBILITIES & ACTIONS TAKEN
          </div>
          <ul className="space-y-2 text-xs text-neutral-300 font-sans">
            {(experience ? experience.highlights : project?.technicalDetails)?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools and Technologies */}
        <div>
          <div className="text-[10px] uppercase font-bold text-neutral-300 tracking-wider mb-2">
            TECHNOLOGIES & PROTOCOLS DEPLOYED
          </div>
          <div className="flex flex-wrap gap-1.5 text-[10px] font-mono-code text-neutral-300">
            {(experience ? experience.technologies : project?.tools)?.map((tech, i) => (
              <span key={i} className="bg-neutral-800/90 border border-neutral-700 px-2.5 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
