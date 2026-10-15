import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BarcodeGraphic } from './BarcodeGraphic';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <footer className="border-t border-neutral-800 bg-[#141517] text-neutral-400 py-10 px-4 sm:px-6 lg:px-8 font-mono-code text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <span>{PERSONAL_INFO.name}</span>
            <span>·</span>
            <span>{PERSONAL_INFO.monogram}</span>
            <BarcodeGraphic className="h-2.5 text-neutral-400 ml-1" />
          </div>
          <p className="text-[11px] text-neutral-400 mt-1">
            Network Analyst & Service Desk Technician II · Vancouver, BC
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-wider text-neutral-300">
          <button
            onClick={onOpenResume}
            className="hover:text-white transition-colors cursor-pointer"
          >
            View Official Resume
          </button>
          <span>·</span>
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact Direct
          </button>
          <span>·</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-white transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>

        <div className="text-[10px] text-neutral-400">
          © 2026 Garv Khosla · All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
