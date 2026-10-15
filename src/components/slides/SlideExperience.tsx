import React from 'react';
import { SlideHeader } from './SlideHeader';
import { SlideCardWrapper } from './SlideCardWrapper';
import hardwareDevicesImg from '../../assets/images/tech_hardware_devices_1792088554319.jpg';
import { EXPERIENCES, PROJECTS } from '../../data/portfolioData';

interface SlideProps {
  onSelectExperience?: (id: string) => void;
  slideNumber?: string;
  isCompact?: boolean;
}

export const SlideExperience: React.FC<SlideProps> = ({ onSelectExperience, slideNumber = "12/6", isCompact = false }) => {
  return (
    <SlideCardWrapper theme="light" slideNumber={slideNumber}>
      {/* Top Header */}
      <SlideHeader theme="light" subText="PERSONAL PRESENTATION" dateText="OCTOBER 2026" />

      {/* Top Section: Massive EXPERIENCE Title */}
      <div className="pt-2 sm:pt-3 flex items-baseline justify-between border-b border-neutral-300 pb-2">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-neutral-950 uppercase leading-none">
          EXPERIENCE
        </h2>
        <span className="font-mono-code text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:inline">
          CHRONOLOGICAL TRACK RECORD
        </span>
      </div>

      {/* Middle Grid: 4 Columns matching the reference */}
      <div className="my-auto py-2 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-mono-code text-[10px]">
        {/* Column 1: VCC Tier 2 */}
        <div
          onClick={() => onSelectExperience?.('vcc-tier2')}
          className="border border-neutral-200 bg-white p-2.5 rounded-lg shadow-sm hover:border-neutral-400 transition-colors cursor-pointer group"
        >
          <div className="text-[9px] font-bold text-neutral-900 uppercase truncate">
            VANCOUVER COMM. COLLEGE
          </div>
          <div className="text-[8px] text-neutral-500 uppercase mt-0.5">
            AUG 2026 – PRESENT
          </div>
          <div className="font-sans font-semibold text-[11px] text-neutral-950 mt-1 line-clamp-2 group-hover:text-neutral-700">
            Service Desk Tech II (CUPE 4627)
          </div>
          <p className="font-sans text-[10px] text-neutral-600 mt-1 line-clamp-3">
            Primary escalation for Tier 1 staff, GPO administration, SCCM packaging, TDX SLA governance.
          </p>
        </div>

        {/* Column 2: VCC Tier 1 */}
        <div
          onClick={() => onSelectExperience?.('vcc-tier1')}
          className="border border-neutral-200 bg-white p-2.5 rounded-lg shadow-sm hover:border-neutral-400 transition-colors cursor-pointer group"
        >
          <div className="text-[9px] font-bold text-neutral-900 uppercase truncate">
            VANCOUVER COMM. COLLEGE
          </div>
          <div className="text-[8px] text-neutral-500 uppercase mt-0.5">
            JUN 2026 – AUG 2026
          </div>
          <div className="font-sans font-semibold text-[11px] text-neutral-950 mt-1 line-clamp-2 group-hover:text-neutral-700">
            Service Desk Tech I / Support
          </div>
          <p className="font-sans text-[10px] text-neutral-600 mt-1 line-clamp-3">
            Fluke cable testing, client IP configurations, Windows 11 migrations, LeafOS VDI setups.
          </p>
        </div>

        {/* Column 3: Langara College Intern */}
        <div
          onClick={() => onSelectExperience?.('langara-intern')}
          className="border border-neutral-200 bg-white p-2.5 rounded-lg shadow-sm hover:border-neutral-400 transition-colors cursor-pointer group"
        >
          <div className="text-[9px] font-bold text-neutral-900 uppercase truncate">
            LANGARA COLLEGE
          </div>
          <div className="text-[8px] text-neutral-500 uppercase mt-0.5">
            2024 (4 MONTHS)
          </div>
          <div className="font-sans font-semibold text-[11px] text-neutral-950 mt-1 line-clamp-2 group-hover:text-neutral-700">
            IT Technician Intern
          </div>
          <p className="font-sans text-[10px] text-neutral-600 mt-1 line-clamp-3">
            Campus IT operations, desktop OS troubleshooting, FAQ guides, asset inventory tracking.
          </p>
        </div>

        {/* Column 4: Routing & Switching Lab */}
        <div
          onClick={() => onSelectExperience?.('routing-switching-lab')}
          className="border border-neutral-200 bg-white p-2.5 rounded-lg shadow-sm hover:border-neutral-400 transition-colors cursor-pointer group"
        >
          <div className="text-[9px] font-bold text-neutral-900 uppercase truncate">
            CISCO INFRASTRUCTURE LAB
          </div>
          <div className="text-[8px] text-neutral-500 uppercase mt-0.5">
            CCNA PRACTICE LAB
          </div>
          <div className="font-sans font-semibold text-[11px] text-neutral-950 mt-1 line-clamp-2 group-hover:text-neutral-700">
            Enterprise Routing & Switching
          </div>
          <p className="font-sans text-[10px] text-neutral-600 mt-1 line-clamp-3">
            Packet Tracer, Wireshark packet capture, OSPFv2/v3, STP/RSTP, 802.1Q trunking, ACLs.
          </p>
        </div>
      </div>

      {/* Hardware Still-Life Strip matching reference image */}
      <div className="relative rounded-lg overflow-hidden border border-neutral-300 my-1">
        <img
          src={hardwareDevicesImg}
          alt="Fluke network tester and transceivers"
          referrerPolicy="no-referrer"
          className="w-full h-14 sm:h-18 md:h-20 object-cover filter contrast-105"
        />
        <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
        <div className="absolute bottom-1 right-2 bg-white/90 text-neutral-900 font-mono-code text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded shadow-sm">
          HARDWARE SUITE: FLUKE CABLE TESTER · TRANSCEIVERS · 802.1Q SWITCHES
        </div>
      </div>

      {/* Bottom Sub-Header Statement */}
      <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[9px] sm:text-[10px] font-mono-code text-neutral-600 uppercase tracking-wider">
        <span className="truncate">TIER 1 ESCALATION · ACTIVE DIRECTORY · SCCM DEPLOYMENT · FLUKE VERIFICATION</span>
        <span className="text-neutral-400 shrink-0">PAGE 12/6</span>
      </div>
    </SlideCardWrapper>
  );
};
