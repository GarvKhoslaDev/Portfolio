import React, { useRef, useState, useEffect } from 'react';
import appleDatacenterImg from '../assets/images/apple_datacenter_glow_1792090135687.jpg';
import appleChipImg from '../assets/images/apple_network_chip_1792090136219.jpg';
import heroNetworkImg from '../assets/images/hero_network_monochrome_1792088551461.jpg';
import hardwareDevicesImg from '../assets/images/tech_hardware_devices_1792088554319.jpg';
import { AppleColorPrism } from './AppleColorPrism';

export const PinnedHardwareZoom: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 4 Levels: 0, 1, 2, 3
  const activeLevel =
    scrollProgress < 0.25 ? 0 : scrollProgress < 0.50 ? 1 : scrollProgress < 0.75 ? 2 : 3;

  const jumpToLevel = (level: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const target = scrollTop + (level * 0.26) * totalScrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const levels = [
    {
      id: 0,
      bracketTitle: "[01. NEXT-GEN OPTICAL BACKBONE]",
      kicker: "CAMPUS DATACENTER · HIGH-SPEED FIBER HIGHWAY",
      headline: "Optical Backbone Architecture",
      description: "College-wide datacenter infrastructure utilizing dual redundant optical pathways, architectural cooling, and high-density distribution supporting faculty and student laboratories.",
      specs: [
        { label: "OPTIC FABRIC", val: "Multimode OM4 & Singlemode OS2" },
        { label: "TRUNK CAPACITY", val: "40 Gbps Campus Ring" },
        { label: "SLA AVAILABILITY", val: "99.98% ITIL Standard" },
      ],
      img: appleDatacenterImg,
      scale: 1.0 + scrollProgress * 0.12,
    },
    {
      id: 1,
      bracketTitle: "[02. HARDWARE SILICON & SWITCH FABRIC]",
      kicker: "ENTERPRISE SILICON · LAYER 3 PACKET ENGINE",
      headline: "ASIC Switching Architecture",
      description: "Hardware-accelerated line-rate packet forwarding, TCAM table routing, and high-density copper bus architecture engineered for zero-latency multi-VLAN switching.",
      specs: [
        { label: "PROCESSING", val: "ASIC Line-Rate Engine" },
        { label: "FORWARDING RATE", val: "720 Mpps Aggregate" },
        { label: "TCAM CAPACITY", val: "64,000 MAC Routes" },
      ],
      img: appleChipImg,
      scale: 1.02 + (scrollProgress - 0.25) * 0.2,
    },
    {
      id: 2,
      bracketTitle: "[03. 10G SFP+ OPTIC TRUNK ZOOM]",
      kicker: "CORE SWITCHING · 802.1Q INTER-VLAN LINK",
      headline: "Hands-On Fiber Patching",
      description: "Physical layer patch verification, LC duplex single-mode interconnects, STP root bridge protection, and EtherChannel port aggregation at the rack face.",
      specs: [
        { label: "TRANSCEIVER", val: "10GBASE-LR SFP+ Duplex" },
        { label: "TRUNK PROTOCOL", val: "IEEE 802.1Q VLAN Tagging" },
        { label: "CRC FRAME LOSS", val: "0.00% Zero Degradation" },
      ],
      img: heroNetworkImg,
      scale: 1.04 + (scrollProgress - 0.5) * 0.22,
    },
    {
      id: 3,
      bracketTitle: "[04. FLUKE TDR & ENDPOINT CERTIFICATION]",
      kicker: "HARDWARE VALIDATION · LINKRUNNER G2 EMULATION",
      headline: "Fluke Link Certification",
      description: "Physical line certification with Fluke LinkRunner TDR testing, PoE+ 25.5W voltage audit, and automated client IP discovery for Windows 11 and LeafOS VDI workstations.",
      specs: [
        { label: "TEST STANDARD", val: "TIA-568-C.2 Verified PASS" },
        { label: "POE+ POWER", val: "53.8 VDC (Class 4 PoE+)" },
        { label: "VDI DEPLOYMENT", val: "LeafOS Thin-Client Verified" },
      ],
      img: hardwareDevicesImg,
      scale: 1.0 + (scrollProgress - 0.75) * 0.15,
    },
  ];

  const currentLevelData = levels[activeLevel];

  return (
    <div
      ref={containerRef}
      id="hardware-zoom"
      className="relative w-full h-[360vh] bg-[#050505] text-white"
    >
      {/* Pinned Viewport Container (Sticky 100vh) */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-hidden bg-[#050505] border-b border-neutral-900">
        {/* Top Control Bar: Bracketed Level & Scrub Bar */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20 border-b border-neutral-900 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-mono-code font-bold uppercase tracking-widest text-white">
                {currentLevelData.bracketTitle}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <AppleColorPrism height="h-4" />
            </div>
            <div className="text-[10px] sm:text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
              {currentLevelData.kicker}
            </div>
          </div>

          {/* Level Switcher Buttons */}
          <div className="flex items-center gap-1.5 font-mono-code text-xs bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => jumpToLevel(lvl.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded uppercase tracking-wider transition-all cursor-pointer ${
                  activeLevel === lvl.id
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                0{lvl.id + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Center Visual Stage: Kinetic Zoom Frame */}
        <div className="relative my-auto w-full max-w-7xl mx-auto h-[55vh] sm:h-[62vh] rounded-2xl overflow-hidden border border-neutral-800 bg-[#090a0c] shadow-[0_0_60px_rgba(0,122,255,0.15)] flex items-center justify-center">
          {/* Layer 0 Image (Apple Datacenter Glow) */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeLevel === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={appleDatacenterImg}
              alt="Optical Fiber Datacenter"
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${levels[0].scale})` }}
              className="w-full h-full object-cover filter contrast-115 transition-transform duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
          </div>

          {/* Layer 1 Image (Apple Silicon Chip) */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeLevel === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={appleChipImg}
              alt="Network Silicon Processor Core"
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${levels[1].scale})` }}
              className="w-full h-full object-cover filter contrast-115 transition-transform duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
          </div>

          {/* Layer 2 Image (Fiber Patch Macro) */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeLevel === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={heroNetworkImg}
              alt="Fiber Optic Switchport Macro"
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${levels[2].scale})` }}
              className="w-full h-full object-cover filter contrast-125 grayscale transition-transform duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
          </div>

          {/* Layer 3 Image (Fluke LinkRunner) */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              activeLevel === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={hardwareDevicesImg}
              alt="Fluke LinkRunner and Transceivers"
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${levels[3].scale})` }}
              className="w-full h-full object-cover filter contrast-110 grayscale transition-transform duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />
          </div>

          {/* Technical HUD Overlay Box inside the Frame */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-col md:flex-row md:items-end justify-between gap-4 p-4 sm:p-6 bg-black/85 backdrop-blur-md border border-neutral-800 rounded-xl">
            <div className="max-w-xl">
              <h2 className="font-display font-black text-xl sm:text-3xl text-white tracking-tight uppercase">
                {currentLevelData.headline}
              </h2>
              <p className="mt-1 font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {currentLevelData.description}
              </p>
            </div>

            {/* Spec Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 border-t md:border-t-0 md:border-l border-neutral-800 pt-3 md:pt-0 md:pl-5 font-mono-code text-[10px] sm:text-xs">
              {currentLevelData.specs.map((s, idx) => (
                <div key={idx}>
                  <div className="text-neutral-400 text-[9px] uppercase tracking-wider">{s.label}</div>
                  <div className="font-bold text-white mt-0.5">{s.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Pinned Footer & Scroll Progress Scrubber */}
        <div className="w-full z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-900 font-mono-code text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-neutral-500 uppercase">Camera Zoom:</span>
            <span className="text-white font-bold">{Math.round(scrollProgress * 100)}%</span>
            <span className="text-neutral-600">·</span>
            <span className="uppercase text-neutral-300">Continuous Interpolation</span>
          </div>

          {/* Progress Bar Track with Gradient */}
          <div className="w-full sm:w-72 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-emerald-400 to-white transition-all duration-100 ease-out"
              style={{ width: `${Math.max(scrollProgress * 100, 3)}%` }}
            />
          </div>

          <div className="text-neutral-400 uppercase tracking-widest text-[10px] hidden sm:block">
            CONTINUE SCROLLING TO UNLOCK CAREER STORY →
          </div>
        </div>
      </div>
    </div>
  );
};
