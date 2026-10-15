import React from 'react';
import { InteractiveFlukeTester } from './InteractiveFlukeTester';

export const FlukeDiagnosticSection: React.FC = () => {
  return (
    <section id="fluke-diagnostics" className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-4 mb-8 gap-2">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-white">
              [PHYSICAL LAYER HARDWARE VERIFICATION]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-1">
              FLUKE LINKRUNNER G2 EMULATOR
            </h2>
          </div>
          <div className="font-mono-code text-xs text-neutral-400 uppercase tracking-wider">
            VCC CAMPUS DESKSIDE SUITE · CUPE 4627
          </div>
        </div>

        <InteractiveFlukeTester />
      </div>
    </section>
  );
};
