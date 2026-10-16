import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, FastForward, Film } from 'lucide-react';
import { AppleColorPrism } from './AppleColorPrism';
import appleDatacenterImg from '../assets/images/apple_datacenter_glow_1792090135687.jpg';
import appleChipImg from '../assets/images/apple_network_chip_1792090136219.jpg';
import heroNetworkImg from '../assets/images/hero_network_monochrome_1792088551461.jpg';
import hardwareDevicesImg from '../assets/images/tech_hardware_devices_1792088554319.jpg';

export const MovieCreditsSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth continuous vertical crawl across the entire full screen
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (isPlaying && scrollContainerRef.current) {
        const step = (delta * 0.06 * speedMultiplier);
        scrollContainerRef.current.scrollTop += step;

        // Loop smoothly when reaching bottom
        if (
          scrollContainerRef.current.scrollTop + scrollContainerRef.current.clientHeight >=
          scrollContainerRef.current.scrollHeight - 5
        ) {
          setTimeout(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTop = 0;
            }
          }, 3000);
        }
      }
      animId = requestAnimationFrame(scrollStep);
    };

    animId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, speedMultiplier]);

  const resetCredits = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setIsPlaying(true);
    }
  };

  const creditSections = [
    {
      heading: "EXECUTIVE PRODUCTION",
      items: [
        { role: "Executive Production Institution", highlight: "VANCOUVER COMMUNITY COLLEGE (VCC)" },
        { role: "Campus Operational Lead", highlight: "SERVICE DESK TECHNICIAN II" },
        { role: "Government Classification", highlight: "CUPE 4627 — PAY GRADE 25" },
        { role: "Core Technical Mandate", highlight: "PRIMARY TIER 1 ESCALATION ARCHITECTURE" },
      ]
    },
    {
      heading: "PHYSICAL LAYER & HARDWARE INSTRUMENTATION",
      items: [
        { role: "Hardware Diagnostic Specialist", highlight: "FLUKE NETWORKS LINKRUNNER G2" },
        { role: "Cable Validation Specification", highlight: "TIA-568-C.2 CAT6A VERIFIED PASS" },
        { role: "Power-Over-Ethernet Engineering", highlight: "802.3at CLASS 4 POE+ (25.5W / 54V)" },
        { role: "Optical Interconnect Standard", highlight: "10GBASE-LR SFP+ SINGLE-MODE FIBER" },
      ]
    },
    {
      heading: "NETWORK SYSTEMS & ROUTING TOPOLOGIES",
      items: [
        { role: "Core Topology Architecture", highlight: "CISCO CCNA ROUTING & SWITCHING" },
        { role: "Deep Packet Capture & Analysis", highlight: "WIRESHARK PROTOCOL DISSECTION" },
        { role: "Dynamic Route Convergence", highlight: "OSPFv2 / OSPFv3 SINGLE & MULTI-AREA" },
        { role: "Loop Mitigation & Port Bundling", highlight: "RSTP 802.1w & ETHERCHANNEL LACP" },
        { role: "VLAN Segmentation", highlight: "802.1Q TRUNKING & ROUTER-ON-A-STICK" },
        { role: "Infrastructure Practice Labs", highlight: "JEREMY'S IT LAB & BOSON NETSIM" },
      ]
    },
    {
      heading: "ENTERPRISE SYSTEMS & ENDPOINT GOVERNANCE",
      items: [
        { role: "Identity & Access Administration", highlight: "MICROSOFT ACTIVE DIRECTORY & GPO" },
        { role: "Enterprise Deployment Packaging", highlight: "MICROSOFT SCCM APPLICATION ROLLOUTS" },
        { role: "IT Service Management (ITSM)", highlight: "TEAMDYNAMIX (TDX) SLA DISCIPLINE" },
        { role: "IT Governance Framework", highlight: "ITIL CHANGE MANAGEMENT PRACTICES" },
        { role: "Thin-Client VDI Workstations", highlight: "LINUX-BASED LEAFOS TERMINALS" },
        { role: "Operating System Migrations", highlight: "WINDOWS 10 TO WINDOWS 11 ROLLOUTS" },
      ]
    },
    {
      heading: "ACADEMIC HONORS & CERTIFICATIONS",
      items: [
        { role: "Academic Diploma", highlight: "DIPLOMA IN COMPUTER SYSTEMS" },
        { role: "Alma Mater Institution", highlight: "LANGARA COLLEGE (VANCOUVER, BC)" },
        { role: "Cumulative Academic Honors", highlight: "GPA 3.5 — GRADE A+ LEVEL STANDING" },
        { role: "Industry Credential", highlight: "COMPTIA A+ CERTIFIED" },
        { role: "Enterprise Certification", highlight: "SCCM TRAINING COMPLETED" },
        { role: "Networking Curriculum", highlight: "CISCO CCNA CURRICULUM VERIFIED" },
      ]
    },
    {
      heading: "SOFTWARE & DATABASE SYSTEMS",
      items: [
        { role: "Relational Database Architect", highlight: "YIELDLY INVENTORY & WASTE SYSTEM" },
        { role: "Query Engineering", highlight: "COMPLEX SQL JOINS, WINDOWS & AGGREGATIONS" },
        { role: "Automation & Scripting", highlight: "PYTHON AUTOMATED INVENTORY BATCHES" },
        { role: "Systems Programming", highlight: "C SYSTEMS & LINUX SHELL SCRIPTING" },
      ]
    },
    {
      heading: "FILMED ON LOCATION",
      items: [
        { role: "Production Headquarters", highlight: "VANCOUVER, BRITISH COLUMBIA, CANADA" },
        { role: "Campus Facilities", highlight: "VCC BROADWAY & DOWNTOWN CAMPUSES" },
        { role: "Direct Telephony Coordinates", highlight: "+1 672.833.1264" },
        { role: "Direct Electronic Mail", highlight: "GARVKHOSLA.2K4@GMAIL.COM" },
      ]
    }
  ];

  return (
    <section
      id="movie-credits"
      className="relative w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] h-screen snap-start bg-black text-white select-none border-b border-neutral-900 flex flex-col justify-between overflow-hidden scroll-mt-14 sm:scroll-mt-16"
    >
      {/* Top Floating Control Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between border-b border-neutral-900/80 font-mono-code text-xs">
        <div className="flex items-center gap-3">
          <Film className="w-4 h-4 text-white animate-pulse" />
          <span className="font-bold uppercase tracking-widest text-white text-[11px] sm:text-xs">
            [FULL-SCREEN CINEMATIC MOVIE ENDING CREDITS]
          </span>
        </div>

        {/* Play/Pause & Speed Controller */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded text-white transition-colors cursor-pointer font-bold text-xs"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-white" /> : <Play className="w-3.5 h-3.5 text-white" />}
            <span>{isPlaying ? 'Pause Roll' : 'Resume Roll'}</span>
          </button>

          <button
            onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
            className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-300 hover:text-white transition-colors cursor-pointer text-xs"
            title="Toggle 2x Speed"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>{speedMultiplier}x</span>
          </button>

          <button
            onClick={resetCredits}
            className="p-1 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer"
            title="Reset to Top"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Full-Page Continuous Scrolling Credits Viewport */}
      <div
        ref={scrollContainerRef}
        className="flex-1 w-full h-full overflow-y-auto px-4 sm:px-8 lg:px-16 pt-24 pb-32 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-20 sm:space-y-24">
          {/* Film Opening Title Card */}
          <div className="space-y-4 pt-10">
            <div className="text-xs sm:text-sm font-mono-code uppercase tracking-[0.4em] text-neutral-400">
              A 2026 ENTERPRISE INFRASTRUCTURE PRODUCTION
            </div>
            <h2 className="font-display font-black text-4xl sm:text-7xl md:text-8xl text-white tracking-tighter uppercase leading-[0.9]">
              DIRECTED BY
              <br />
              GARV KHOSLA
            </h2>
          </div>

          {/* Cinematic Film Stills Strip (Centered inside full-screen roll) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 pb-4">
            <div className="rounded-xl overflow-hidden border border-neutral-850 relative group aspect-[16/10]">
              <img
                src={appleDatacenterImg}
                alt="Optical Datacenter"
                className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 text-[8px] font-mono-code text-neutral-300 uppercase">
                STILL 01 · CAMPUS BACKBONE
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-850 relative group aspect-[16/10]">
              <img
                src={appleChipImg}
                alt="Network Core Silicon"
                className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 text-[8px] font-mono-code text-neutral-300 uppercase">
                STILL 02 · SWITCH FABRIC
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-850 relative group aspect-[16/10]">
              <img
                src={heroNetworkImg}
                alt="Fiber Optic Patching"
                className="w-full h-full object-cover filter contrast-125 grayscale brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 text-[8px] font-mono-code text-neutral-300 uppercase">
                STILL 03 · 10G OPTIC TRUNK
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-850 relative group aspect-[16/10]">
              <img
                src={hardwareDevicesImg}
                alt="Fluke LinkRunner"
                className="w-full h-full object-cover filter contrast-125 grayscale brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 text-[8px] font-mono-code text-neutral-300 uppercase">
                STILL 04 · FLUKE TDR TEST
              </div>
            </div>
          </div>

          {/* Film Credit Sections with Bold Highlights on each line */}
          <div className="space-y-20 font-mono-code">
            {creditSections.map((sec, sIdx) => (
              <div key={sIdx} className="space-y-6">
                {/* Category Header */}
                <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-neutral-400 border-b border-neutral-800 pb-2 inline-block px-6">
                  {sec.heading}
                </div>

                {/* Rows: Role on left, BOLD HIGHLIGHT on right */}
                <div className="space-y-3.5 max-w-3xl mx-auto text-xs sm:text-sm">
                  {sec.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900/60 pb-2 text-center sm:text-left gap-1.5 hover:bg-neutral-950/80 px-2 rounded transition-colors"
                    >
                      <span className="text-neutral-400 font-medium tracking-wide">
                        {item.role}
                      </span>
                      <strong className="text-white font-extrabold tracking-tight sm:text-right uppercase text-sm sm:text-base">
                        {item.highlight}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Giant THE END & Directed By Finale */}
          <div className="pt-24 pb-28 space-y-6 border-t border-neutral-900">
            <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-[0.18em] text-white uppercase select-none leading-none">
              THE END
            </div>

            <div className="space-y-2">
              <div className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
                THANKS FOR WATCHING 
              </div>
              <div className="text-xs sm:text-sm font-mono-code text-neutral-400 uppercase tracking-widest pt-1">
                Garv Khosla 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
