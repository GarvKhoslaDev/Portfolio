import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES, PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, ShieldAlert, Cpu, Terminal, Network } from 'lucide-react';

interface PinnedExperienceTimelineProps {
  onSelectDetail: (id: string) => void;
}

export const PinnedExperienceTimeline: React.FC<PinnedExperienceTimelineProps> = ({ onSelectDetail }) => {
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

  // 4 Acts: 0, 1, 2, 3
  const activeAct =
    scrollProgress < 0.28 ? 0 : scrollProgress < 0.56 ? 1 : scrollProgress < 0.82 ? 2 : 3;

  const jumpToAct = (actIndex: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const target = scrollTop + (actIndex * 0.3) * totalScrollable;
    window.scrollTo({ top: target, behavior: 'smooth' });
  };

  const acts = [
    {
      id: "vcc-tier2",
      actNum: "01",
      bracketLabel: "[01. CAMPUS ESCALATION LEAD]",
      company: "VANCOUVER COMMUNITY COLLEGE (VCC)",
      title: "Service Desk Technician II",
      grade: "CUPE 4627 - Pay Grade 25",
      period: "August 2026 – Present",
      location: "Vancouver, BC",
      highlightKicker: "PRIMARY TIER 1 TECHNICAL ESCALATION POINT",
      summary: "Primary technical escalation point for Tier 1 Service Desk staff, handling advanced, chronic, and complex help requests across campus networks, Microsoft Active Directory, and SCCM deployment packaging.",
      keyPoints: [
        "Act as primary escalation point for Tier 1 staff across hardware, operating systems, and network connectivity.",
        "Evaluate documented resolutions and analyze incident trends across campus networks to suggest permanent infrastructure fixes.",
        "Manage group policies and access administration in Microsoft Active Directory; enforce ITIL Change Management practices.",
        "Build and configure SCCM application deployment packages for enterprise rollouts, executing hands-on fixes at desktop & system level.",
        "Configure, administer, and optimize helpdesk workflows within TeamDynamix (TDX), tailoring IT inventory tracking and reinforcing SLAs.",
        "Specialized troubleshooting for macOS, mobile devices, tablets, and complex AV equipment using schematic diagrams."
      ],
      technologies: ["Active Directory GPO", "SCCM Packages", "TeamDynamix (TDX)", "ITIL Change Management", "macOS MDM", "Audiovisual Schematics"]
    },
    {
      id: "vcc-tier1",
      actNum: "02",
      bracketLabel: "[02. DESKSIDE & FLUKE VERIFICATION]",
      company: "VANCOUVER COMMUNITY COLLEGE (VCC)",
      title: "Service Desk Technician I / IT Support Specialist",
      period: "June 2026 – August 2026",
      location: "Vancouver, BC",
      highlightKicker: "PHYSICAL LAYER VALIDATION & OS DEPLOYMENT",
      summary: "Delivered frontline deskside support, physical network line validation using Fluke testers, client IP configuration, and campus-wide Windows 11 / LeafOS VDI migrations.",
      keyPoints: [
        "Utilized Fluke network and cable testers to verify wall ports, patch cables, and link states during workstation moves.",
        "Performed initial client-side troubleshooting and gathered detailed diagnostic logs before cleanly escalating to the core network team.",
        "Configured static/dynamic IP addressing, subnet masks, default gateways, and wireless supplicants (802.1X).",
        "Supported enterprise OS deployments, Windows 10 to 11 migrations, and the rollout of Linux-based LeafOS thin-client VDI workstations.",
        "Recorded and categorized incidents in TeamDynamix (TDX), ensuring precise documentation of diagnostic steps."
      ],
      technologies: ["Fluke Cable Testers", "LeafOS Thin-Client VDI", "Windows 11 Migration", "TCP/IP Subnetting", "802.1X Supplicant", "TeamDynamix"]
    },
    {
      id: "langara-intern",
      actNum: "03",
      bracketLabel: "[03. HIGHER-ED IT OPERATIONS]",
      company: "LANGARA COLLEGE",
      title: "IT Technician Intern",
      period: "2024 (4 Months)",
      location: "Vancouver, BC",
      highlightKicker: "CAMPUS HARDWARE & INVENTORY GOVERNANCE",
      summary: "Supported higher-education IT operations by diagnosing hardware, desktop OS, and network connectivity issues while authoring technical FAQ documentation.",
      keyPoints: [
        "Diagnosed hardware, desktop OS, and campus network connectivity in a fast-paced higher education environment.",
        "Authored updated technical documentation and end-user FAQ guides to streamline recurring student/faculty requests.",
        "Maintained accurate asset inventory records and hardware tracking lifecycle across campus labs."
      ],
      technologies: ["Hardware Diagnostics", "Desktop OS Support", "Technical FAQ Guides", "Asset Inventory", "Campus IT Ops"]
    },
    {
      id: "routing-switching-lab",
      actNum: "04",
      bracketLabel: "[04. ENTERPRISE ROUTING LAB]",
      company: "CISCO CCNA INFRASTRUCTURE LAB",
      title: "Enterprise Routing & Switching Specialist",
      period: "Jeremy's IT Lab / Boson Infrastructure",
      location: "Virtual & Physical Labs",
      highlightKicker: "MULTI-SUBNET TOPOLOGY & PROTOCOL CONVERGENCE",
      summary: "Constructed multi-subnet virtual network topologies in Cisco Packet Tracer & Wireshark to implement enterprise routing protocols, VLAN segmentation, and ACL security.",
      keyPoints: [
        "Configured 802.1Q trunking, Inter-VLAN routing (Router-on-a-Stick), and multi-area OSPFv2/v3 dynamic routing protocols.",
        "Implemented Spanning Tree Protocol (STP/RSTP) for loop prevention and EtherChannel link aggregation (LACP/PAgP).",
        "Captured and analyzed packets using Wireshark for TCP 3-way handshakes, DHCP DORA exchange, and ARP inspection.",
        "Enforced switchport port security with sticky MAC addresses and standard/extended Access Control Lists (ACLs)."
      ],
      technologies: ["Cisco Packet Tracer", "Wireshark", "OSPFv2 / OSPFv3", "802.1Q VLANs", "RSTP Loop Mitigation", "EtherChannel"]
    }
  ];

  const currentAct = acts[activeAct];

  return (
    <div
      ref={containerRef}
      id="experience-timeline"
      className="relative w-full h-[320vh] bg-[#050505] text-white"
    >
      {/* Pinned Sticky Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-hidden bg-[#050505] border-b border-neutral-900">
        {/* Top Header */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-900 pb-4 z-20">
          <div>
            <div className="text-xs sm:text-sm font-mono-code font-bold uppercase tracking-widest text-white flex items-center gap-2">
              <span>{currentAct.bracketLabel}</span>
              <span className="text-neutral-500 font-normal">·</span>
              <span className="text-neutral-400 font-normal text-xs">{currentAct.period}</span>
            </div>
            <div className="text-[10px] sm:text-xs font-mono-code text-neutral-500 uppercase tracking-wider mt-0.5">
              CAREER TRAJECTORY & CAMPUS NETWORK LEADERSHIP
            </div>
          </div>

          {/* Act Jump Controls */}
          <div className="flex items-center gap-1.5 font-mono-code text-xs bg-neutral-950 p-1 rounded-lg border border-neutral-800">
            {acts.map((act, idx) => (
              <button
                key={act.id}
                onClick={() => jumpToAct(idx)}
                className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all cursor-pointer ${
                  activeAct === idx
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Act {act.actNum}
              </button>
            ))}
          </div>
        </div>

        {/* Center Story Card */}
        <div className="my-auto max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          {/* Left Column: Massive Act Number & Brutalist Header */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-display font-black text-6xl sm:text-8xl md:text-9xl text-neutral-800 tracking-tighter leading-none select-none">
              {currentAct.actNum}
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-emerald-400 block">
                {currentAct.highlightKicker}
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
                {currentAct.title}
              </h2>
              <div className="text-sm font-mono-code text-neutral-400 font-semibold">
                {currentAct.company} {currentAct.grade ? `(${currentAct.grade})` : ''}
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md">
              {currentAct.summary}
            </p>

            <button
              onClick={() => onSelectDetail(currentAct.id)}
              className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase font-semibold text-white underline underline-offset-4 hover:text-neutral-300 transition-colors cursor-pointer"
            >
              <span>Examine Complete Technical Workflow</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Progressive Highlights Box */}
          <div className="lg:col-span-7 bg-[#0a0a0c] border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 mb-4 text-xs font-mono-code text-neutral-400">
              <span className="uppercase font-bold text-white tracking-wider">
                CORE TECHNICAL DELIVERABLES
              </span>
              <span className="text-neutral-500">{currentAct.location}</span>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-neutral-300">
              {currentAct.keyPoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center gap-2 font-mono-code text-xs">
              <span className="text-[10px] uppercase font-bold text-neutral-500">Infrastructure Stack:</span>
              {currentAct.technologies.map((t, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span className="text-neutral-200">{t}</span>
                  {tIdx < currentAct.technologies.length - 1 && <span className="text-neutral-700" aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Pinned Footer & Progress */}
        <div className="w-full z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-neutral-900 font-mono-code text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-neutral-500 uppercase">Act Progress:</span>
            <span className="text-white font-bold">{Math.round(scrollProgress * 100)}%</span>
            <span className="text-neutral-600">·</span>
            <span className="uppercase text-neutral-400">{currentAct.company}</span>
          </div>

          <div className="w-full sm:w-64 h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
            <div
              className="h-full bg-white transition-all duration-100 ease-out"
              style={{ width: `${Math.max(scrollProgress * 100, 4)}%` }}
            />
          </div>

          <div className="text-neutral-400 uppercase tracking-widest text-[10px] hidden sm:block">
            CONTINUE SCROLLING FOR DIAGNOSTIC CONSOLES →
          </div>
        </div>
      </div>
    </div>
  );
};
