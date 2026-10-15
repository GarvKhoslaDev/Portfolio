import React, { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const resumeText = `GARV KHOSLA
Vancouver, BC | 672.833.1264 | garvkhosla.2k4@gmail.com

PROFESSIONAL EXPERIENCE
- Vancouver Community College (VCC) - Service Desk Technician II (CUPE 4627) (Aug 2026 - Present)
- Vancouver Community College (VCC) - Service Desk Technician I / IT Support Specialist (Jun 2026 - Aug 2026)
- Langara College - IT Technician Intern (2024, 4 months)

EDUCATION & CERTIFICATIONS
- Langara College - Diploma in Computer Systems (Hardware, Software & Programming) | GPA: 3.5 (2023 - 2025)
- Certifications: CompTIA A+ Certified, SCCM Training Completed, CCNA Curriculum Knowledge

PROJECTS & TECHNICAL INITIATIVES
- Enterprise Routing & Switching Lab (Jeremy's IT Lab / Boson) - Cisco Packet Tracer, Wireshark
- Yieldly Inventory and Waste Intelligence System - Python, SQL`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white text-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Top Bar */}
        <div className="no-print flex items-center justify-between px-5 py-3.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <span className="font-mono-code font-bold text-xs uppercase tracking-wider text-neutral-800">
              OFFICIAL RESUME DOSSIER · GARV KHOSLA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code uppercase font-semibold text-neutral-700 bg-white border border-neutral-300 rounded hover:bg-neutral-50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code uppercase font-semibold text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-[13px] leading-relaxed max-w-[800px] mx-auto w-full">
          {/* Header */}
          <div className="text-center border-b border-neutral-300 pb-4 mb-5">
            <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-neutral-950 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="mt-1 text-xs text-neutral-600 font-mono-code">
              {PERSONAL_INFO.location} &nbsp;|&nbsp; {PERSONAL_INFO.phone} &nbsp;|&nbsp; {PERSONAL_INFO.email}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-3 text-neutral-950">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline font-bold text-neutral-950 text-xs sm:text-[13px]">
                    <span>{exp.company}</span>
                    <span className="font-mono-code text-[11px] font-normal text-neutral-600">{exp.location}</span>
                  </div>
                  <div className="flex justify-between items-baseline italic text-xs text-neutral-700 mb-1.5">
                    <span>{exp.title} {exp.grade ? `(${exp.grade})` : ''}</span>
                    <span className="font-mono-code text-[11px] not-italic text-neutral-500">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-800">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mb-6">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-3 text-neutral-950">
              Education & Certifications
            </h2>

            <div className="flex justify-between items-baseline font-bold text-neutral-950 text-xs sm:text-[13px]">
              <span>{EDUCATION.institution}</span>
              <span className="font-mono-code text-[11px] font-normal text-neutral-600">{EDUCATION.location}</span>
            </div>
            <div className="flex justify-between items-baseline italic text-xs text-neutral-700 mb-1.5">
              <span>{EDUCATION.degree}</span>
              <span className="font-mono-code text-[11px] not-italic text-neutral-500">GPA: {EDUCATION.gpa} | {EDUCATION.period}</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-800">
              <li>
                <strong>Relevant Certifications & Training:</strong> {EDUCATION.certifications.join(', ')}.
              </li>
              <li>
                <strong>Network & Systems Focus:</strong> {EDUCATION.focusAreas.join(', ')}.
              </li>
            </ul>
          </div>

          {/* Projects & Technical Initiatives */}
          <div className="mb-4">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-3 text-neutral-950">
              Projects & Technical Initiatives
            </h2>

            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline font-bold text-neutral-950 text-xs">
                    <span>{proj.title}</span>
                    <span className="font-mono-code text-[11px] font-normal text-neutral-600">{proj.tools.join(', ')}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-800 mt-1">
                    {proj.technicalDetails.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono-code text-neutral-500">
            <span>Garv Khosla — Network Analyst Application</span>
            <span>Vancouver, BC · 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
