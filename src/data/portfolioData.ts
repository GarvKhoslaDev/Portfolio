export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  title: string;
  department?: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  certifications: string[];
  availability: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tools: string[];
  period: string;
  overview: string;
  technicalDetails: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "GARV KHOSLA",
  monogram: "G/K®",
  code: "1234 — |||||||||||||||",
  title: "Network & Systems Specialist",
  subTitle: "Service Desk Technician II · Information Technology Services",
  location: "Vancouver, BC",
  phone: "672.833.1264",
  email: "garvkhosla.2k4@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  dateLabel: "OCTOBER 2026",
  version: "v2.6",
  availability: "Available for scheduled after-hours/weekend maintenance windows and on-call response; able to inspect cabling in ceilings and floors and handle server hardware.",
  shortBio: "Service Desk Technician II at Vancouver Community College acting as the escalation point for Tier 1 staff across Broadway and Downtown campuses, specializing in CLI/Fluke network triage, CCNA-level routing & switching, Active Directory, and SCCM deployments."
};

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Networking (CCNA-level)",
    description: "Ethernet, LAN/WAN, WLAN (802.11), TCP/IP, VLANs (802.1Q), STP/RSTP, EtherChannel (LACP/PAgP), OSPFv2, inter-VLAN routing, DHCP, DNS, NAT, IPv4 ACLs, port security",
    skills: [
      "Ethernet",
      "LAN/WAN",
      "WLAN (802.11)",
      "TCP/IP",
      "VLANs (802.1Q)",
      "STP/RSTP",
      "EtherChannel (LACP/PAgP)",
      "OSPFv2",
      "Inter-VLAN Routing",
      "DHCP",
      "DNS",
      "NAT",
      "IPv4 ACLs",
      "Port Security"
    ]
  },
  {
    category: "Systems",
    description: "Windows Server (Active Directory), Windows 10/11, macOS, Linux (Ubuntu, LeafOS thin clients), Microsoft SCCM, PowerShell",
    skills: [
      "Windows Server (Active Directory)",
      "Windows 10/11",
      "macOS",
      "Linux (Ubuntu, LeafOS thin clients)",
      "Microsoft SCCM",
      "PowerShell"
    ]
  },
  {
    category: "Cloud (foundational, lab-based)",
    description: "Azure and AWS fundamentals: virtual networks/VPCs, subnets, security groups, virtual machines, basic monitoring",
    skills: [
      "Azure VNets & Subnets",
      "AWS VPCs & Security Groups",
      "Virtual Machines (Windows/Linux & EC2)",
      "Entra ID & Recovery Services",
      "S3 Buckets",
      "Azure Monitor & AWS CloudWatch"
    ]
  },
  {
    category: "Diagnostics & Tools",
    description: "Wireshark, Fluke cable/network testers, ping, traceroute, nslookup, ipconfig, TeamDynamix (TDX)",
    skills: [
      "Wireshark",
      "Fluke Cable/Network Testers",
      "ping",
      "traceroute / tracert",
      "nslookup",
      "ipconfig",
      "TeamDynamix (TDX)"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "vcc-tier2",
    company: "Vancouver Community College (VCC)",
    location: "Vancouver, BC",
    title: "Service Desk Technician II",
    department: "Information Technology Services",
    period: "Aug 2026 to Present",
    summary: "Act as the escalation point for Tier 1 Service Desk staff, diagnosing hardware, OS, and network connectivity issues across Broadway and Downtown campuses.",
    highlights: [
      "Act as the escalation point for Tier 1 Service Desk staff, diagnosing hardware, OS, and network connectivity issues across Broadway and Downtown campuses.",
      "Perform client-side triage using CLI tools (ping, tracert, nslookup, ipconfig, PowerShell) and Fluke testers (port link status, CDP/LLDP detection) to isolate client vs. infrastructure faults before escalating to the network team.",
      "Administer user accounts, security groups, and OU permissions in Active Directory; support deployment and patch schedules in line with ITIL change management.",
      "Package, test, and deploy applications using Microsoft SCCM, resolving endpoint configuration issues in campus labs and staff offices.",
      "Track incident trends and manage workflows in TeamDynamix, update asset inventory records, and write technical documentation.",
      "Troubleshoot macOS, mobile platforms, and campus audiovisual equipment using vendor diagnostic manuals."
    ],
    technologies: [
      "Active Directory",
      "Microsoft SCCM",
      "Fluke Testers (CDP/LLDP)",
      "CLI Triage & PowerShell",
      "TeamDynamix (TDX)",
      "ITIL Change Management",
      "macOS & AV Diagnostics"
    ]
  },
  {
    id: "vcc-tier1",
    company: "Vancouver Community College (VCC)",
    location: "Vancouver, BC",
    title: "Service Desk Technician I",
    department: "Client Services & Desktop Operations",
    period: "Jun 2026 to Aug 2026",
    summary: "Delivered deskside support, using Fluke testers to inspect wall jacks, patch cables, and link states during office moves, desktop rebuilds, and classroom lab deployments.",
    highlights: [
      "Delivered deskside support, using Fluke testers to inspect wall jacks, patch cables, and link states during office moves, desktop rebuilds, and classroom lab deployments.",
      "Configured client TCP/IP settings and installed VCC device certificates to connect endpoints to existing 802.1X wireless profiles; resolved certificate trust errors on Windows, macOS, and mobile devices.",
      "Supported campus-wide workstation refreshes, Windows 10 to 11 migrations, and deployment of Linux-based LeafOS thin clients connecting to VDI environments.",
      "Captured event logs, IP/MAC configurations, and physical port states to escalate recurring issues to the core network and server teams in TeamDynamix."
    ],
    technologies: [
      "Fluke Cable/Port Testers",
      "802.1X Wireless Certificates",
      "TCP/IP Configuration",
      "Windows 10/11 Migrations",
      "Linux LeafOS Thin Clients (VDI)",
      "TeamDynamix"
    ]
  },
  {
    id: "langara-intern",
    company: "Langara College",
    location: "Vancouver, BC",
    title: "IT Technician Intern",
    department: "Campus IT Operations",
    period: "2024 (4 months)",
    summary: "Diagnosed workstation hardware, OS imaging, network printer, and physical-layer cabling issues; maintained hardware inventory records and updated user documentation.",
    highlights: [
      "Diagnosed workstation hardware, OS imaging, network printer, and physical-layer cabling issues; maintained hardware inventory records and updated user documentation."
    ],
    technologies: [
      "Workstation Hardware",
      "OS Imaging",
      "Network Printers",
      "Physical-Layer Cabling",
      "Hardware Inventory"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "routing-switching-lab",
    title: "Routing, Switching & Packet Analysis Lab (CCNA)",
    category: "Cisco IOS, Packet Tracer, Wireshark",
    tools: [
      "Cisco IOS",
      "Packet Tracer",
      "Wireshark",
      "802.1Q VLANs",
      "OSPFv2",
      "RSTP",
      "LACP/PAgP",
      "ACLs & DAI"
    ],
    period: "CCNA (200-301) Lab",
    overview: "Built multi-subnet topologies in Packet Tracer with Layer 2/Layer 3 switching, dynamic OSPFv2 routing, loop prevention, Layer 2 security, and Wireshark packet analysis.",
    technicalDetails: [
      "Built multi-subnet topologies in Packet Tracer using 802.1Q VLAN trunking, router-on-a-stick, Layer 3 switch inter-VLAN routing, and single/multi-area OSPFv2.",
      "Configured RSTP (PortFast, BPDU Guard) and LACP/PAgP EtherChannel for loop-free switching and link aggregation.",
      "Applied standard/extended ACLs, DHCP Snooping, Dynamic ARP Inspection, and port security; used Wireshark to examine TCP handshakes, ARP, DNS, and DHCP traffic."
    ]
  },
  {
    id: "cloud-infrastructure-lab",
    title: "Cloud Infrastructure Fundamentals Lab",
    category: "Azure & AWS",
    tools: [
      "Microsoft Azure",
      "AWS",
      "VNets & VPCs",
      "NSGs & Security Groups",
      "Windows/Linux VMs & EC2",
      "Entra ID",
      "Azure Monitor & CloudWatch"
    ],
    period: "Cloud Lab",
    overview: "Hands-on foundational cloud networking, virtual machine deployment, identity integration, and resource monitoring across Azure and AWS.",
    technicalDetails: [
      "Azure: practised creating VNets and subnets, configuring basic NSGs, and deploying Windows Server and Linux VMs; explored Entra ID integration and Recovery Services Vaults.",
      "AWS: explored VPC networking, public/private subnets, Internet Gateways, NAT, and security groups; practised deploying EC2 instances and creating S3 buckets.",
      "Monitoring: introductory exposure to Azure Monitor and AWS CloudWatch for reviewing resource metrics and basic alerts."
    ]
  }
];

export const EDUCATION: EducationItem = {
  institution: "Langara College",
  location: "Vancouver, BC",
  degree: "Diploma in Computer Systems (Hardware, Software & Networking)",
  certifications: [
    "CompTIA A+ Certified",
    "SCCM Deployment Training",
    "CCNA (200-301) lab curriculum"
  ],
  availability: "Available for scheduled after-hours/weekend maintenance windows and on-call response; able to inspect cabling in ceilings and floors and handle server hardware."
};
