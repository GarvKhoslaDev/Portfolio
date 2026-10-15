import React from 'react';
import { SlideHeader } from './SlideHeader';
import { SlideCardWrapper } from './SlideCardWrapper';
import serverRackImg from '../../assets/images/editorial_server_rack_1792088553001.jpg';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface SlideProps {
  onOpenExperience?: () => void;
  slideNumber?: string;
  isCompact?: boolean;
}

export const SlideProfile: React.FC<SlideProps> = ({ onOpenExperience, slideNumber = "12/4", isCompact = false }) => {
  return (
    <SlideCardWrapper theme="light" slideNumber={slideNumber}>
      {/* Top Header */}
      <SlideHeader theme="light" subText="PERSONAL PRESENTATION" dateText="OCTOBER 2026" />

      {/* Main Grid: Left vertical image, right narrative + massive GARV KHOSLA block */}
      <div className="my-auto py-3 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        {/* Left Vertical Image */}
        <div className="md:col-span-4 rounded-xl overflow-hidden border border-neutral-300 shadow-sm relative group">
          <img
            src={serverRackImg}
            alt="Enterprise datacenter server rack cabling"
            referrerPolicy="no-referrer"
            className="w-full h-44 sm:h-64 md:h-full object-cover filter contrast-110 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 text-[9px] font-mono-code text-white bg-black/60 px-1.5 py-0.5 rounded uppercase">
            VCC CAMPUS DATACENTER
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-8 flex flex-col justify-between space-y-4">
          {/* Top text columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-neutral-700 leading-relaxed">
            <div>
              <div className="font-mono-code text-[10px] uppercase font-bold text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
                ENTERPRISE WORKFLOWS
              </div>
              <p>
                Configure, administer, and optimize helpdesk workflows within TeamDynamix (TDX),
                reinforcing strict SLAs and inventory governance. Evaluate documented resolutions
                and trend analysis across campus networks to alert leadership to emerging infrastructure faults.
              </p>
            </div>
            <div>
              <div className="font-mono-code text-[10px] uppercase font-bold text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
                ENDPOINT PACKAGING
              </div>
              <p>
                Build and configure SCCM application deployment packages for enterprise rollouts.
                Administer Active Directory Group Policies, supporting change management release processes
                across Windows 10/11, macOS, and Linux-based LeafOS thin clients.
              </p>
            </div>
          </div>

          {/* Bottom Massive Name Block matching reference */}
          <div className="pt-2 border-t border-neutral-300 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-neutral-950 uppercase leading-none">
                GARV
                <br />
                KHOSLA
              </h2>
            </div>
            <div className="text-right font-mono-code text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:block">
              <p>NETWORK ANALYST</p>
              <p>{PERSONAL_INFO.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] font-mono-code text-neutral-500 uppercase tracking-widest">
        <span>SERVICE DESK TECHNICIAN II</span>
        <span>VANCOUVER COMMUNITY COLLEGE · CUPE 4627</span>
      </div>
    </SlideCardWrapper>
  );
};
