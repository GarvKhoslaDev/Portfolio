export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  title: string;
  grade?: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  gpa: string;
  period: string;
  certifications: string[];
  focusAreas: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tools: string[];
  period: string;
  overview: string;
  technicalDetails: string[];
  architecturePoints: string[];
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
  title: "Network Analyst & Systems Specialist",
  subTitle: "Service Desk Technician II (CUPE 4627)",
  location: "Vancouver, BC",
  phone: "672.833.1264",
  email: "garvkhosla.2k4@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  dateLabel: "OCTOBER 2026",
  version: "v2.6",
  shortBio: "Primary technical escalation point and systems specialist with proven expertise across enterprise campus networking, Microsoft Active Directory, SCCM endpoint packaging, and client-side network diagnostics using Fluke instrumentation.",
  statement: "Specializing in bridging frontline infrastructure triage with permanent network resolution, executing disciplined ITIL change management, and building robust multi-subnet routing topologies."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "vcc-tier2",
    company: "VANCOUVER COMMUNITY COLLEGE (VCC)",
    location: "Vancouver, BC",
    title: "Service Desk Technician II",
    grade: "CUPE 4627 - Pay Grade 25",
    period: "August 2026 – Present",
    summary: "Primary technical escalation point for Tier 1 Service Desk staff, handling advanced, chronic, and complex help requests regarding hardware, operating systems, and campus network connectivity.",
    highlights: [
      "Act as the primary technical escalation point for Tier 1 Service Desk staff, handling advanced, chronic, and complex help requests regarding hardware, operating systems, and network connectivity.",
      "Evaluate documented resolutions and analyze incident trends across campus networks to suggest permanent fixes and alert supervisors to emerging infrastructure issues.",
      "Manage group policies and access administration in Microsoft Active Directory; support enterprise deployment and release processes following ITIL Change Management practices.",
      "Build and configure SCCM application deployment packages for enterprise rollouts, executing hands-on fixes at the desktop and system level.",
      "Configure, administer, and optimize helpdesk workflows within TeamDynamix (TDX), tailoring IT inventory tracking and reinforcing SLAs to manage end-user expectations.",
      "Provide specialized troubleshooting for non-Windows computing devices (Mac OS, mobile devices, tablets) and diagnose complex audiovisual equipment using schematic diagrams and repair manuals.",
      "Document detailed problem-solving workflows, actions taken, and diagnostic utility outputs from initial report through to final incident resolution."
    ],
    technologies: ["Active Directory", "SCCM Deployments", "Group Policy (GPO)", "TeamDynamix (TDX)", "ITIL Change Management", "macOS & Mobile MDM", "Audiovisual Schematics"]
  },
  {
    id: "vcc-tier1",
    company: "VANCOUVER COMMUNITY COLLEGE (VCC)",
    location: "Vancouver, BC",
    title: "Service Desk Technician I / IT Support Specialist",
    period: "June 2026 – August 2026",
    summary: "Delivered frontline deskside support, physical network line validation using Fluke testing equipment, client IP configuration, and campus-wide OS migrations.",
    highlights: [
      "Provided frontline deskside support, utilizing Fluke network and cable testers to verify wall ports, patch cables, and link states during workstation moves and connection setups.",
      "Performed initial client-side troubleshooting and gathered detailed diagnostic data (error logs, port states, IP configurations) before cleanly escalating complex network issues to the core network team.",
      "Configured static/dynamic IP addressing, subnet masks, default gateways, and wireless supplicants on Windows, macOS, and mobile devices to establish reliable endpoint network attachment.",
      "Supported enterprise operating system deployments, Windows 10 to 11 migrations, and the rollout of Linux-based LeafOS thin-client VDI workstations across campus labs.",
      "Recorded, tracked, and categorized incident data and network service requests using TeamDynamix (TDX), ensuring precise documentation of all client-side diagnostic steps."
    ],
    technologies: ["Fluke Cable Testers", "LeafOS Thin-Client VDI", "Windows 11 Migration", "TCP/IP Subnetting", "TeamDynamix", "Wireless 802.1X"]
  },
  {
    id: "langara-intern",
    company: "LANGARA COLLEGE",
    location: "Vancouver, BC",
    title: "IT Technician Intern",
    period: "2024 (4 months)",
    summary: "Supported campus IT operations by diagnosing hardware, desktop OS, and network connectivity issues in a higher education environment.",
    highlights: [
      "Supported campus IT operations by diagnosing hardware, desktop OS, and network connectivity issues in a higher education environment.",
      "Assisted in updating technical documentation, end-user FAQ guides, and maintaining accurate asset inventory records."
    ],
    technologies: ["Campus IT Operations", "Hardware Diagnostics", "Desktop OS Support", "Asset Inventory", "Technical FAQ Documentation"]
  }
];

export const EDUCATION: EducationItem = {
  institution: "LANGARA COLLEGE",
  location: "Vancouver, BC",
  degree: "Diploma in Computer Systems (Hardware, Software & Programming)",
  gpa: "3.5",
  period: "2023 – 2025",
  certifications: [
    "CompTIA A+ Certified",
    "SCCM Training Completed",
    "CCNA Curriculum Knowledge"
  ],
  focusAreas: [
    "TCP/IP Networking & Subnet Architecture",
    "Network Diagnostics & Protocol Analysis",
    "Linux Administration & Shell Utilities",
    "C Programming & System Architecture",
    "Relational Database Systems & SQL"
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "routing-switching-lab",
    title: "Enterprise Routing & Switching Lab",
    category: "Network Infrastructure & Cisco Protocols",
    tools: ["Cisco Packet Tracer", "Wireshark", "Boson NetSim", "CLI"],
    period: "Jeremy’s IT Lab / Boson Infrastructure",
    overview: "Multi-subnet virtual network topology designed to implement and test enterprise routing protocols, switching segmentation, loop prevention, and deep packet captures.",
    technicalDetails: [
      "Configured multi-subnet virtual network topologies to practice CCNA routing, switching, and VLAN segmentation (802.1Q trunking, Inter-VLAN routing with Router-on-a-Stick).",
      "Implemented OSPFv2/v3 dynamic routing protocols with single and multi-area designs, Spanning Tree Protocol (STP/RSTP) for loop prevention, and EtherChannel (LACP/PAgP) link aggregation.",
      "Captured and analyzed packets using Wireshark to inspect TCP 3-way handshakes, DHCP DORA process, ARP requests/replies, and DNS resolutions.",
      "Configured standard and extended Access Control Lists (ACLs), port security with sticky MAC addresses, and secure management interfaces (SSHv2, console passwords)."
    ],
    architecturePoints: [
      "802.1Q VLAN Trunking & Subnet Segmentation",
      "OSPFv2 / OSPFv3 Dynamic Route Propagation",
      "RSTP 802.1w Rapid Spanning Tree Topology",
      "Wireshark Packet Dissection & DORA Analysis",
      "Switchport Port Security & Violation Actions"
    ]
  },
  {
    id: "yieldly-inventory",
    title: "Yieldly Inventory and Waste Intelligence System",
    category: "Software & Relational Databases",
    tools: ["Python", "SQL", "Relational Database", "Data Analytics"],
    period: "Technical Systems Project",
    overview: "Relational database schema and Python transaction engine built to manage high-volume inventory items, track expiration thresholds, and generate analytical waste reports.",
    technicalDetails: [
      "Designed a normalized 3NF relational database schema using SQL to manage inventory transactions, item categories, supplier logs, and waste tracking.",
      "Wrote complex SQL analytical queries utilizing joins, window functions, and aggregation to compute real-time shrink metrics and turnover rates.",
      "Integrated Python scripts for automated batch ingestion of inventory records and automated alert generation for low-stock and expiring items."
    ],
    architecturePoints: [
      "Normalized 3NF Relational Schema Design",
      "Complex SQL Analytical Queries & Aggregations",
      "Python Data Processing & Batch Ingestion",
      "Transaction Logging & Audit Trail Tracking"
    ]
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    category: "Networking & Protocols",
    description: "Enterprise routing, switching, packet inspection, and physical link diagnostics.",
    skills: ["CCNA Curriculum", "TCP/IP & Subnetting", "VLAN 802.1Q", "OSPFv2/v3", "STP / RSTP", "EtherChannel", "Wireshark Packet Analysis", "Fluke Cable & Port Testers", "DHCP DORA & DNS", "ACLs & Port Security"]
  },
  {
    category: "Systems & Endpoint Management",
    description: "Enterprise OS rollouts, policy orchestration, and thin-client environments.",
    skills: ["Microsoft Active Directory", "Group Policy (GPO)", "SCCM Deployment Packaging", "Windows 10 to 11 Migrations", "LeafOS Thin-Client VDI", "macOS & Mobile Device Support", "Desktop Hardware Triage"]
  },
  {
    category: "ITSM & Service Operations",
    description: "ITIL-aligned incident workflows, ticket triage, and SLA enforcement.",
    skills: ["TeamDynamix (TDX) Administration", "ITIL Change Management", "Tier 1 Escalation Handling", "SLA & Ticket Tracking", "Audiovisual Diagnostics", "Technical Documentation & FAQs", "Hardware Asset Inventory"]
  },
  {
    category: "Programming & Databases",
    description: "Systems programming, scripting, and relational data structures.",
    skills: ["Python", "SQL & Relational Databases", "C Systems Programming", "Linux / Bash Shell", "Git & Version Control"]
  }
];
