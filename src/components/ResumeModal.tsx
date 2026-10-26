import React, { useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, PROJECTS, TECHNICAL_SKILLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const resumeText = `Garv Khosla
Vancouver, BC  |  672.833.1264  |  garvkhosla.2k4@gmail.com

TECHNICAL SKILLS
Networking (CCNA-level): Ethernet, LAN/WAN, WLAN (802.11), TCP/IP, VLANs (802.1Q), STP/RSTP, EtherChannel (LACP/PAgP), OSPFv2, inter-VLAN routing, DHCP, DNS, NAT, IPv4 ACLs, port security
Systems: Windows Server (Active Directory), Windows 10/11, macOS, Linux (Ubuntu, LeafOS thin clients), Microsoft SCCM, PowerShell
Cloud (foundational, lab-based): Azure and AWS fundamentals: virtual networks/VPCs, subnets, security groups, virtual machines, basic monitoring
Diagnostics & Tools: Wireshark, Fluke cable/network testers, ping, traceroute, nslookup, ipconfig, TeamDynamix (TDX)

EXPERIENCE
Vancouver Community College (VCC) | Service Desk Technician II Information Technology Services
Aug 2026 to Present Vancouver, BC
• Act as the escalation point for Tier 1 Service Desk staff, diagnosing hardware, OS, and network connectivity issues across Broadway and Downtown campuses.
• Perform client-side triage using CLI tools (ping, tracert, nslookup, ipconfig, PowerShell) and Fluke testers (port link status, CDP/LLDP detection) to isolate client vs. infrastructure faults before escalating to the network team.
• Administer user accounts, security groups, and OU permissions in Active Directory; support deployment and patch schedules in line with ITIL change management.
• Package, test, and deploy applications using Microsoft SCCM, resolving endpoint configuration issues in campus labs and staff offices.
• Track incident trends and manage workflows in TeamDynamix, update asset inventory records, and write technical documentation.
• Troubleshoot macOS, mobile platforms, and campus audiovisual equipment using vendor diagnostic manuals.

Vancouver Community College (VCC) | Service Desk Technician I Client Services & Desktop Operations
Jun 2026 to Aug 2026 Vancouver, BC
• Delivered deskside support, using Fluke testers to inspect wall jacks, patch cables, and link states during office moves, desktop rebuilds, and classroom lab deployments.
• Configured client TCP/IP settings and installed VCC device certificates to connect endpoints to existing 802.1X wireless profiles; resolved certificate trust errors on Windows, macOS, and mobile devices.
• Supported campus-wide workstation refreshes, Windows 10 to 11 migrations, and deployment of Linux-based LeafOS thin clients connecting to VDI environments.
• Captured event logs, IP/MAC configurations, and physical port states to escalate recurring issues to the core network and server teams in TeamDynamix.

Langara College | IT Technician Intern Campus IT Operations
2024 (4 months) Vancouver, BC
• Diagnosed workstation hardware, OS imaging, network printer, and physical-layer cabling issues; maintained hardware inventory records and updated user documentation.

TECHNICAL PROJECTS & LABS
Routing, Switching & Packet Analysis Lab (CCNA) | Cisco IOS, Packet Tracer, Wireshark
• Built multi-subnet topologies in Packet Tracer using 802.1Q VLAN trunking, router-on-a-stick, Layer 3 switch inter-VLAN routing, and single/multi-area OSPFv2.
• Configured RSTP (PortFast, BPDU Guard) and LACP/PAgP EtherChannel for loop-free switching and link aggregation.
• Applied standard/extended ACLs, DHCP Snooping, Dynamic ARP Inspection, and port security; used Wireshark to examine TCP handshakes, ARP, DNS, and DHCP traffic.

Cloud Infrastructure Fundamentals Lab | Azure & AWS
• Azure: practised creating VNets and subnets, configuring basic NSGs, and deploying Windows Server and Linux VMs; explored Entra ID integration and Recovery Services Vaults.
• AWS: explored VPC networking, public/private subnets, Internet Gateways, NAT, and security groups; practised deploying EC2 instances and creating S3 buckets.
• Monitoring: introductory exposure to Azure Monitor and AWS CloudWatch for reviewing resource metrics and basic alerts.

EDUCATION & CREDENTIALS
Langara College | Diploma in Computer Systems (Hardware, Software & Networking)
CompTIA A+ Certified  •  SCCM Deployment Training  •  CCNA (200-301) lab curriculum
Availability: Available for scheduled after-hours/weekend maintenance windows and on-call response; able to inspect cabling in ceilings and floors and handle server hardware.`;

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
              OFFICIAL RESUME · GARV KHOSLA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code uppercase font-semibold text-neutral-700 bg-white border border-neutral-300 rounded hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code uppercase font-semibold text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors ml-2 cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-[13px] leading-relaxed max-w-[820px] mx-auto w-full">
          {/* Header */}
          <div className="text-center border-b border-neutral-300 pb-4 mb-5">
            <h1 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-neutral-950">
              Garv Khosla
            </h1>
            <div className="mt-1 text-xs text-neutral-700 font-mono-code">
              {PERSONAL_INFO.location} &nbsp;|&nbsp; {PERSONAL_INFO.phone} &nbsp;|&nbsp; {PERSONAL_INFO.email}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-2.5 text-neutral-950">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-800">
              {TECHNICAL_SKILLS.map((cat, idx) => (
                <div key={idx}>
                  <strong className="text-neutral-950">{cat.category}:</strong> {cat.description}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-3 text-neutral-950">
              Experience
            </h2>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-wrap justify-between items-baseline font-bold text-neutral-950 text-xs sm:text-[13px]">
                    <span>
                      {exp.company} | {exp.title} {exp.department ? <span className="font-semibold text-neutral-700">{exp.department}</span> : ''}
                    </span>
                    <span className="font-mono-code text-[11px] font-normal text-neutral-600">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-neutral-800 mt-1.5">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Projects & Labs */}
          <div className="mb-5">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-3 text-neutral-950">
              Technical Projects &amp; Labs
            </h2>

            <div className="space-y-3.5">
              {PROJECTS.map((proj) => (
                <div key={proj.id}>
                  <div className="font-bold text-neutral-950 text-xs sm:text-[13px]">
                    {proj.title} | <span className="font-semibold text-neutral-700">{proj.category}</span>
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

          {/* Education & Credentials */}
          <div className="mb-4">
            <h2 className="text-xs font-mono-code font-bold uppercase tracking-wider border-b-2 border-neutral-900 pb-1 mb-2.5 text-neutral-950">
              Education &amp; Credentials
            </h2>

            <div className="space-y-1.5 text-xs text-neutral-800">
              <div className="font-bold text-neutral-950">
                {EDUCATION.institution} | {EDUCATION.degree}
              </div>
              <div className="font-semibold text-neutral-800">
                {EDUCATION.certifications.join('  •  ')}
              </div>
              <div className="pt-1">
                <strong className="text-neutral-950">Availability:</strong> {EDUCATION.availability}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
