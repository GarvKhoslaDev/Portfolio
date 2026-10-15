import React, { useState } from 'react';
import { Activity, CheckCircle2, RefreshCw, Zap, Network, ShieldCheck, Terminal } from 'lucide-react';

type TestMode = 'link_state' | 'wiremap' | 'poe' | 'vlan_dhcp';

export const InteractiveFlukeTester: React.FC = () => {
  const [activeMode, setActiveMode] = useState<TestMode>('link_state');
  const [isTesting, setIsTesting] = useState(false);
  const [hasRun, setHasRun] = useState(true);

  const runTest = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setHasRun(true);
    }, 600);
  };

  return (
    <div className="bg-[#18191c] text-white rounded-2xl border border-neutral-700/80 p-5 sm:p-7 shadow-2xl font-mono-code">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-200">
            FLUKE NETWORKS · LINKRUNNER G2 EMULATOR
          </span>
        </div>
        <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
          VCC CAMPUS DESKSIDE SUITE · CUPE 4627
        </div>
      </div>

      {/* Mode Selector Tabs (Clean segmented control) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
        <button
          onClick={() => { setActiveMode('link_state'); runTest(); }}
          className={`px-3 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-lg border transition-all text-left flex items-center justify-between ${
            activeMode === 'link_state'
              ? 'bg-neutral-800 text-white border-neutral-600 shadow-sm'
              : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800/50'
          }`}
        >
          <span>1. Link State</span>
          <Activity className="w-3.5 h-3.5 text-neutral-400" />
        </button>

        <button
          onClick={() => { setActiveMode('wiremap'); runTest(); }}
          className={`px-3 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-lg border transition-all text-left flex items-center justify-between ${
            activeMode === 'wiremap'
              ? 'bg-neutral-800 text-white border-neutral-600 shadow-sm'
              : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800/50'
          }`}
        >
          <span>2. T568B Wiremap</span>
          <Network className="w-3.5 h-3.5 text-neutral-400" />
        </button>

        <button
          onClick={() => { setActiveMode('poe'); runTest(); }}
          className={`px-3 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-lg border transition-all text-left flex items-center justify-between ${
            activeMode === 'poe'
              ? 'bg-neutral-800 text-white border-neutral-600 shadow-sm'
              : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800/50'
          }`}
        >
          <span>3. PoE+ Power</span>
          <Zap className="w-3.5 h-3.5 text-neutral-400" />
        </button>

        <button
          onClick={() => { setActiveMode('vlan_dhcp'); runTest(); }}
          className={`px-3 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider rounded-lg border transition-all text-left flex items-center justify-between ${
            activeMode === 'vlan_dhcp'
              ? 'bg-neutral-800 text-white border-neutral-600 shadow-sm'
              : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:bg-neutral-800/50'
          }`}
        >
          <span>4. VLAN & DHCP</span>
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
        </button>
      </div>

      {/* Tester LCD Screen Simulation */}
      <div className="bg-[#0b0c0e] rounded-xl border-2 border-neutral-700 p-4 sm:p-5 relative shadow-inner">
        {/* Status indicator bar */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-2 mb-3 text-[10px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">PORT: ETH-SW02/P14</span>
            <span>·</span>
            <span>AUTO-NEG: 1000M/FDX</span>
          </div>
          <button
            onClick={runTest}
            disabled={isTesting}
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white text-[10px] uppercase font-semibold bg-neutral-800 hover:bg-neutral-700 px-2.5 py-1 rounded transition-colors"
          >
            <RefreshCw className={`w-3 h-3 ${isTesting ? 'animate-spin' : ''}`} />
            {isTesting ? 'Scanning...' : 'Retest'}
          </button>
        </div>

        {/* Content based on selected mode */}
        {isTesting ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
            <Activity className="w-6 h-6 text-emerald-400 animate-spin" />
            <div className="text-xs text-neutral-300 tracking-wider">
              TRANSMITTING TDR PULSE & 802.3 LINK BEACON...
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Top Pass Banner */}
            <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/30 p-2.5 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="font-display font-black text-lg text-emerald-400 tracking-wider">
                  PASS · 100% SPEC VERIFIED
                </span>
              </div>
              <span className="text-[10px] font-mono-code text-emerald-300/80">TIA-568-C.2 CAT6A</span>
            </div>

            {/* Test Details */}
            {activeMode === 'link_state' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px] pt-1">
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">PHYSICAL LINK</div>
                  <div className="text-emerald-400 font-bold mt-0.5">UP (LINK-ACTIVE)</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">ESTABLISHED SPEED</div>
                  <div className="text-white font-bold mt-0.5">1000 Mbps Full-Duplex</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">CABLE LENGTH (TDR)</div>
                  <div className="text-white font-bold mt-0.5">42.4 Meters (~139 ft)</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">SKEW DELAY</div>
                  <div className="text-white font-bold mt-0.5">18 ns (&lt; 50ns limit)</div>
                </div>
              </div>
            )}

            {activeMode === 'wiremap' && (
              <div>
                <div className="text-[10px] text-neutral-400 uppercase mb-2">
                  T568B 8-PIN CONTINUITY & PAIR INTEGRITY:
                </div>
                <div className="grid grid-cols-8 gap-1 text-center font-mono-code text-[10px]">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((pin) => (
                    <div key={pin} className="bg-neutral-900 border border-emerald-500/40 p-1.5 rounded">
                      <div className="text-neutral-500 text-[8px]">PIN {pin}</div>
                      <div className="text-emerald-400 font-bold mt-0.5">1:1</div>
                      <div className="text-[8px] text-neutral-400 mt-0.5">OK</div>
                    </div>
                  ))}
                </div>
                <div className="text-[9px] text-neutral-400 mt-2">
                  Split Pairs: NONE · Opens: NONE · Shorts: NONE · Reversals: NONE
                </div>
              </div>
            )}

            {activeMode === 'poe' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px] pt-1">
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">POE STANDARD</div>
                  <div className="text-emerald-400 font-bold mt-0.5">802.3at (PoE+ Class 4)</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">REQUESTED POWER</div>
                  <div className="text-white font-bold mt-0.5">25.50 Watts</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">MEASURED VOLTAGE</div>
                  <div className="text-white font-bold mt-0.5">53.8 VDC Under Load</div>
                </div>
                <div className="bg-neutral-900/80 p-2 rounded border border-neutral-800">
                  <div className="text-[9px] text-neutral-500 uppercase">POWERED PAIRS</div>
                  <div className="text-white font-bold mt-0.5">Pairs 1,2 and 3,6</div>
                </div>
              </div>
            )}

            {activeMode === 'vlan_dhcp' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800 space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500 uppercase">VLAN ID (CDP/LLDP)</span>
                    <span className="text-white font-bold">VLAN 20 (CAMPUS_LABS)</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500 uppercase">SWITCH PORT</span>
                    <span className="text-neutral-300">VCC-DOWNTOWN-SW04 Fa0/12</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500 uppercase">GATEWAY IP</span>
                    <span className="text-emerald-400">10.24.20.1 (RTT 0.72ms)</span>
                  </div>
                </div>

                <div className="bg-neutral-900/80 p-2.5 rounded border border-neutral-800 space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500 uppercase">DHCP DORA LEASE</span>
                    <span className="text-emerald-400 font-bold">SUCCESS (86400s)</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500 uppercase">OFFERED CLIENT IP</span>
                    <span className="text-white font-bold">10.24.20.145 /24</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500 uppercase">CAMPUS DNS SERVERS</span>
                    <span className="text-neutral-300">10.24.1.10, 10.24.1.11</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Practical Application Callout */}
      <div className="mt-3 flex items-start gap-2 text-[10px] text-neutral-400">
        <Terminal className="w-3.5 h-3.5 text-neutral-500 mt-0.5 shrink-0" />
        <p>
          <strong className="text-neutral-200">Production Workflow at VCC:</strong> Before escalating connectivity issues to Tier 3 Network Engineers,
          Garv runs physical layer validation to rule out wall port faults, patch cord degradation, or incorrect VLAN switchport tagging.
        </p>
      </div>
    </div>
  );
};
