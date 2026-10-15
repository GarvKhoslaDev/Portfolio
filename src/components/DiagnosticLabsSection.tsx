import React, { useState } from 'react';
import { InteractiveFlukeTester } from './InteractiveFlukeTester';
import { InteractiveWiresharkLab } from './InteractiveWiresharkLab';
import { Wrench, Network, ShieldCheck, Activity } from 'lucide-react';

export const DiagnosticLabsSection: React.FC = () => {
  const [activeLab, setActiveLab] = useState<'fluke' | 'wireshark'>('fluke');

  return (
    <section 
      id="diagnostic-labs" 
      className="w-full min-h-screen py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900 flex flex-col justify-center scroll-mt-14 sm:scroll-mt-16 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-5 mb-8 gap-3">
          <div>
            <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-neutral-400">
              [03 // TROUBLESHOOTING & PROTOCOL LAB SUITE]
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-1.5">
              INTERACTIVE HARDWARE & PACKET LABS
            </h2>
          </div>
          <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
            PHYSICAL LAYER TDR · 802.3BT POE · WIRESHARK PCAP INSPECTION
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mb-6 font-mono-code text-xs">
          <button
            onClick={() => setActiveLab('fluke')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeLab === 'fluke'
                ? 'bg-white text-black border-white shadow-lg'
                : 'bg-[#0a0a0c] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>01. Fluke LinkRunner G2 (Hardware & TDR)</span>
          </button>

          <button
            onClick={() => setActiveLab('wireshark')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeLab === 'wireshark'
                ? 'bg-white text-black border-white shadow-lg'
                : 'bg-[#0a0a0c] text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            <Network className="w-4 h-4" />
            <span>02. Wireshark Protocol Lab (TCP / DHCP / OSPF)</span>
          </button>
        </div>

        {/* Interactive Lab Container */}
        <div className="transition-all duration-300">
          {activeLab === 'fluke' ? (
            <div>
              <InteractiveFlukeTester />
            </div>
          ) : (
            <div>
              <InteractiveWiresharkLab />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
