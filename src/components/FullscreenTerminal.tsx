import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, Trash2, Minus, Square, X, Plus, ChevronDown, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TECHNICAL_SKILLS, PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  type: 'cmd' | 'output';
  content: React.ReactNode;
}

const ABOUT_ME_ASCII = `
   █████╗ ██████╗  ██████╗ ██╗   ██╗████████╗    ███╗   ███╗███████╗
  ██╔══██╗██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝    ████╗ ████║██╔════╝
  ███████║██████╔╝██║   ██║██║   ██║   ██║       ██╔████╔██║█████╗  
  ██╔══██║██╔══██╗██║   ██║██║   ██║   ██║       ██║╚██╔╝██║██╔══╝  
  ██║  ██║██████╔╝╚██████╔╝╚██████╔╝   ██║       ██║ ╚═╝ ██║███████╗
  ╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝    ╚═╝       ╚═╝     ╚═╝╚══════╝
`;

const COMMANDS_LIST = [
  'whoami',
  'experience',
  'skills',
  'projects',
  'certs',
  'ping',
  'ipconfig',
  'dir',
  'systeminfo',
  'fluke',
  'contact',
  'resume',
  'help',
  'cls',
  'clear'
];

export const FullscreenTerminal: React.FC<{ onOpenResume: () => void; onOpenContact: () => void }> = ({
  onOpenResume,
  onOpenContact
}) => {
  const [inputVal, setInputVal] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAutoUnfoldedRef = useRef(false);

  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-header',
      type: 'output',
      content: (
        <div className="space-y-3 font-mono-code text-[#cccccc]">
          {/* Prominent Visible ASCII Art for ABOUT ME */}
          <div className="overflow-x-auto select-none pt-2">
            <pre className="font-mono-code font-bold text-[9px] sm:text-[11px] md:text-xs text-white leading-[1.15] drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
              {ABOUT_ME_ASCII}
            </pre>
          </div>

          <div className="text-xs sm:text-sm text-neutral-300 pt-1 space-y-1">
            <div>Microsoft Windows [Version 10.0.26200.9711]</div>
            <div>(c) Microsoft Corporation. All rights reserved.</div>
            <div className="text-neutral-400 text-xs pt-1">
              Welcome to Garv Khosla's enterprise terminal. Press <kbd className="bg-neutral-800 text-white px-1.5 py-0.5 rounded border border-neutral-700 font-bold">TAB</kbd> to auto-complete commands, or type <strong className="text-white">help</strong>.
            </div>
          </div>
        </div>
      )
    }
  ]);

  // Scroll ONLY the internal terminal container, never the window!
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Progressive scroll-unfold: As the user advances into the CLI, automatically reveal initial profile details
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoUnfoldedRef.current) {
            hasAutoUnfoldedRef.current = true;
            // Reveal initial whoami dossier command smoothly as user arrives
            setTimeout(() => {
              executeCommand('whoami');
            }, 500);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Tab suggestions
  useEffect(() => {
    const trimmed = inputVal.trim().toLowerCase();
    if (!trimmed) {
      setSuggestions([]);
      return;
    }
    const matched = COMMANDS_LIST.filter((c) => c.startsWith(trimmed) && c !== trimmed);
    setSuggestions(matched);
  }, [inputVal]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const trimmed = inputVal.trim().toLowerCase();
      if (!trimmed) {
        setSuggestions(COMMANDS_LIST.slice(0, 8));
        return;
      }
      const matched = COMMANDS_LIST.filter((c) => c.startsWith(trimmed));
      if (matched.length === 1) {
        setInputVal(matched[0]);
        setSuggestions([]);
      } else if (matched.length > 1) {
        setSuggestions(matched);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const currentScrollY = window.scrollY;
      executeCommand(inputVal);
      setSuggestions([]);
      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
        inputRef.current?.focus({ preventScroll: true });
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(cmdIndex - 1, 0);
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setCmdIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        } else {
          setCmdIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const currentScrollY = window.scrollY;

    setCmdHistory((prev) => [...prev, rawCmd]);
    setCmdIndex(-1);

    const newHistory: HistoryItem[] = [
      ...history,
      {
        id: `cmd-${Date.now()}`,
        type: 'cmd',
        content: (
          <div className="flex items-center gap-2 font-mono-code text-xs sm:text-sm text-white">
            <span className="text-[#cccccc]">C:\Users\gkhosla&gt;</span>
            <span className="font-bold">{rawCmd}</span>
          </div>
        )
      }
    ];

    let outputContent: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputContent = (
          <div className="space-y-2 font-mono-code text-xs text-[#cccccc]">
            <div className="text-white font-bold uppercase text-[11px] border-b border-neutral-800 pb-1">
              WINDOWS COMMAND UTILITIES — GARV KHOSLA PROFILE
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-neutral-300">
              <div><strong className="text-white">whoami</strong> : Bio, role & VCC CUPE 4627 standing</div>
              <div><strong className="text-white">experience</strong> : Full employment history & achievements</div>
              <div><strong className="text-white">skills</strong> : AD GPO, SCCM, 802.1Q & Linux matrix</div>
              <div><strong className="text-white">projects</strong> : Cisco CCNA lab & Yieldly SQL system</div>
              <div><strong className="text-white">certs</strong> : CompTIA A+, CCNA knowledge & GPA 3.5</div>
              <div><strong className="text-white">ipconfig</strong> : Adapter configuration & campus VLANs</div>
              <div><strong className="text-white">dir</strong> : List files and credential folders</div>
              <div><strong className="text-white">systeminfo</strong> : Host operating system and SLA telemetry</div>
              <div><strong className="text-white">ping</strong> : ICMP test to campus gateway 10.24.20.1</div>
              <div><strong className="text-white">fluke</strong> : Fluke LinkRunner TDR cable & PoE test</div>
              <div><strong className="text-white">contact</strong> : Direct telephone, email, and location</div>
              <div><strong className="text-white">resume</strong> : Open printable PDF document dossier</div>
              <div><strong className="text-white">cls / clear</strong> : Clear command prompt buffer</div>
            </div>
            <div className="text-[11px] text-neutral-500 pt-1">
              Tip: Press <kbd className="text-white bg-neutral-800 px-1 py-0.5 rounded">TAB</kbd> anytime to auto-complete!
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="space-y-2 font-mono-code text-xs sm:text-sm text-neutral-200">
            <div className="text-white font-bold text-base flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs font-normal text-white bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded">
                DOMAIN USER: VCC\gkhosla (CUPE 4627 Pay Grade 25)
              </span>
            </div>
            <div className="text-white font-semibold">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.subTitle}
            </div>
            <div className="text-xs text-neutral-400">
              Location: {PERSONAL_INFO.location} · Institution: Vancouver Community College
            </div>
            <p className="font-sans text-xs sm:text-sm text-neutral-300 mt-2 max-w-3xl leading-relaxed">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>
        );
        break;

      case 'experience':
      case 'history':
        outputContent = (
          <div className="space-y-4 font-mono-code text-xs">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="border-l-2 border-white pl-4 py-1 space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-white text-sm">0{idx + 1}. {exp.company}</span>
                  <span className="text-neutral-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-neutral-200 font-semibold">
                  {exp.title} {exp.grade ? `(${exp.grade})` : ''} · {exp.location}
                </div>
                <div className="text-neutral-300 font-sans leading-relaxed pt-1">{exp.summary}</div>
                <div className="pt-1.5 space-y-1">
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">Key Deliverables:</span>
                  <ul className="list-disc pl-4 space-y-1 font-sans text-neutral-300">
                    {exp.highlights.slice(0, 3).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-[11px] text-neutral-400 pt-1">
                  <span className="text-neutral-500 uppercase text-[10px] font-bold">Stack: </span>
                  {exp.technologies.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
      case 'get skills':
        outputContent = (
          <div className="space-y-3 font-mono-code text-xs">
            {TECHNICAL_SKILLS.map((c, i) => (
              <div key={i} className="bg-neutral-900/80 border border-neutral-800 p-3 rounded">
                <div className="text-white font-bold uppercase text-[11px] mb-1.5">
                  0{i + 1}. {c.category}
                </div>
                <div className="text-neutral-300 leading-relaxed">
                  {c.skills.join('   ·   ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
      case 'labs':
        outputContent = (
          <div className="space-y-3 font-mono-code text-xs">
            {PROJECTS.map((proj, idx) => (
              <div key={proj.id} className="border-l-2 border-neutral-400 pl-4 py-1.5 space-y-1">
                <div className="font-bold text-white text-sm">{idx + 1}. {proj.title}</div>
                <div className="text-neutral-300 text-[11px]">{proj.category} · {proj.period}</div>
                <div className="text-neutral-300 font-sans leading-relaxed pt-1">{proj.overview}</div>
                <div className="text-neutral-400 text-[11px] pt-1">
                  <span className="text-neutral-500 font-bold">Stack: </span>{proj.tools.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
      case 'education':
        outputContent = (
          <div className="space-y-3 font-mono-code text-xs">
            <div className="bg-neutral-900/80 p-3.5 rounded border border-neutral-800">
              <div className="text-white font-bold text-sm">{EDUCATION.institution}</div>
              <div className="text-neutral-300">{EDUCATION.degree}</div>
              <div className="text-white font-semibold mt-1">Cumulative GPA: {EDUCATION.gpa} | {EDUCATION.period}</div>
            </div>
            <div className="pt-1 space-y-1.5">
              <span className="text-[10px] text-neutral-400 uppercase font-bold block">Verified Credentials:</span>
              {EDUCATION.certifications.map((c, i) => (
                <div key={i} className="text-white flex items-center gap-2">
                  <span className="text-neutral-400 font-bold">[✓]</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'ipconfig':
      case 'ipconfig /all':
        outputContent = (
          <div className="space-y-1 font-mono-code text-xs text-neutral-300">
            <div className="font-bold text-white mb-1">Windows IP Configuration:</div>
            <div>&nbsp;&nbsp;&nbsp;Host Name . . . . . . . . . . . . : VCC-WKSTN-204</div>
            <div>&nbsp;&nbsp;&nbsp;Primary Dns Suffix  . . . . . . . : campus.vcc.ca</div>
            <div>&nbsp;&nbsp;&nbsp;Node Type . . . . . . . . . . . . : Hybrid</div>
            <div>&nbsp;&nbsp;&nbsp;IP Routing Enabled. . . . . . . . : Yes (802.1Q Sub-Interfaces)</div>
            <div className="pt-1.5 font-bold text-white">Ethernet adapter Ethernet 1 (VLAN 20):</div>
            <div className="text-white font-bold">&nbsp;&nbsp;&nbsp;IPv4 Address. . . . . . . . . . . : 10.24.20.145(Preferred)</div>
            <div>&nbsp;&nbsp;&nbsp;Subnet Mask . . . . . . . . . . . : 255.255.255.0</div>
            <div>&nbsp;&nbsp;&nbsp;Default Gateway . . . . . . . . . : 10.24.20.1</div>
            <div>&nbsp;&nbsp;&nbsp;DHCP Server . . . . . . . . . . . : 10.24.1.10</div>
            <div>&nbsp;&nbsp;&nbsp;DNS Servers . . . . . . . . . . . : 10.24.1.10, 10.24.1.11</div>
          </div>
        );
        break;

      case 'dir':
        outputContent = (
          <div className="space-y-1 font-mono-code text-xs text-neutral-300">
            <div>Directory of C:\Users\gkhosla</div>
            <div>10/15/2026  12:00 PM    &lt;DIR&gt;          .</div>
            <div>10/15/2026  12:00 PM    &lt;DIR&gt;          ..</div>
            <div>10/15/2026  11:45 AM            28,491 RESUME_GARV_KHOSLA.PDF</div>
            <div>10/15/2026  11:20 AM    &lt;DIR&gt;          VCC_ACTIVE_DIRECTORY_GPOS</div>
            <div>10/15/2026  10:30 AM    &lt;DIR&gt;          SCCM_DEPLOYMENT_PACKAGES</div>
            <div>10/15/2026  09:15 AM    &lt;DIR&gt;          FLUKE_TDR_TEST_LOGS</div>
            <div>10/15/2026  08:00 AM    &lt;DIR&gt;          CISCO_CCNA_PACKET_TRACES</div>
            <div className="text-neutral-500 pt-1">
              1 File(s)         28,491 bytes<br />
              5 Dir(s)  428,918,292,480 bytes free
            </div>
          </div>
        );
        break;

      case 'systeminfo':
        outputContent = (
          <div className="space-y-1 font-mono-code text-xs text-neutral-300">
            <div>OS Name:                   Microsoft Windows 11 Enterprise (VDI LeafOS Enabled)</div>
            <div>OS Version:                10.0.26200 Build 26200</div>
            <div>System Role:               Service Desk Technician II (CUPE 4627)</div>
            <div>Registered Owner:          Garv Khosla</div>
            <div>Domain:                    VCC.INTERNAL</div>
            <div>Network Cards:             10 Gbps SFP+ Fiber, Intel I219-LM Gigabit</div>
          </div>
        );
        break;

      case 'ping':
      case 'ping 10.24.20.1':
        outputContent = (
          <div className="space-y-1 font-mono-code text-xs text-neutral-300">
            <div>Pinging 10.24.20.1 with 32 bytes of data:</div>
            <div>Reply from 10.24.20.1: bytes=32 time&lt;1ms TTL=64</div>
            <div>Reply from 10.24.20.1: bytes=32 time&lt;1ms TTL=64</div>
            <div>Reply from 10.24.20.1: bytes=32 time&lt;1ms TTL=64</div>
            <div>Reply from 10.24.20.1: bytes=32 time&lt;1ms TTL=64</div>
            <div className="text-neutral-400 pt-1">
              Ping statistics for 10.24.20.1:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),<br />
              Approximate round trip times in milli-seconds: Minimum = 0ms, Maximum = 1ms, Average = 0ms
            </div>
          </div>
        );
        break;

      case 'fluke':
        outputContent = (
          <div className="space-y-1.5 font-mono-code text-xs bg-neutral-900/90 p-3 rounded border border-neutral-800 text-neutral-200">
            <div className="text-white font-bold text-sm">FLUKE LINKRUNNER G2 TDR DIAGNOSTIC: PASS</div>
            <div>Cable Standard: TIA-568-C.2 Cat6A UTP · Wiremap: 1:1 Pins 1-8 OK</div>
            <div>Measured Distance: 42.4 Meters (~139 ft) · Propagation Delay: 18ns</div>
            <div>PoE+ Negotiation: 802.3at Class 4 (53.8 VDC Under Load, 25.5 Watts)</div>
            <div>CDP/LLDP Port Attachment: VCC-CORE-SW02 Port Fa0/14 (VLAN 20)</div>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-2 font-mono-code text-xs text-neutral-200">
            <div><strong className="text-white">Full Name: </strong> {PERSONAL_INFO.name}</div>
            <div><strong className="text-white">Phone: </strong> +1 {PERSONAL_INFO.phone}</div>
            <div><strong className="text-white">Email: </strong> {PERSONAL_INFO.email}</div>
            <div><strong className="text-white">Location: </strong> {PERSONAL_INFO.location}</div>
            <div className="pt-1">
              <button
                onClick={onOpenContact}
                className="text-xs font-mono-code underline text-white hover:text-neutral-300 cursor-pointer"
              >
                Launch Direct Message Modal →
              </button>
            </div>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        outputContent = (
          <div className="text-xs font-mono-code text-white">
            Opening Garv Khosla's official printable PDF resume modal.
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        requestAnimationFrame(() => {
          window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
          inputRef.current?.focus({ preventScroll: true });
        });
        return;

      default:
        outputContent = (
          <div className="text-xs font-mono-code text-neutral-400">
            '{rawCmd}' is not recognized as an internal or external command. Type <span className="underline font-bold text-white">help</span> for available commands, or press <span className="underline font-bold text-white">TAB</span> for auto-completion.
          </div>
        );
    }

    newHistory.push({
      id: `out-${Date.now()}`,
      type: 'output',
      content: outputContent
    });

    setHistory(newHistory);
    setInputVal('');

    requestAnimationFrame(() => {
      window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
      if (terminalBodyRef.current) {
        terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
      }
      inputRef.current?.focus({ preventScroll: true });
    });
  };

  const quickChips = [
    'whoami',
    'experience',
    'skills',
    'projects',
    'certs',
    'ipconfig',
    'ping',
    'fluke',
    'dir',
    'contact'
  ];

  const handleFastRun = (cmd: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const currentScrollY = window.scrollY;
    executeCommand(cmd);
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
      inputRef.current?.focus({ preventScroll: true });
    });
  };

  const handleTerminalClick = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    const currentScrollY = window.scrollY;
    inputRef.current?.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
    });
  };

  const handleClearSession = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const currentScrollY = window.scrollY;
    setHistory([]);
    setInputVal('');
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
      inputRef.current?.focus({ preventScroll: true });
    });
  };

  return (
    <section
      ref={sectionRef}
      id="cli-terminal"
      className="relative w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] snap-start bg-[#0c0c0c] text-[#cccccc] flex flex-col font-mono-code select-none border-b border-neutral-900 scroll-mt-14 sm:scroll-mt-16 transition-all duration-500"
    >
      {/* Exact Windows 11 Terminal Top Tab Bar */}
      <div className="bg-[#1f1f1f] text-neutral-300 h-10 flex items-center justify-between px-2 select-none border-b border-[#2d2d2d] shrink-0">
        {/* Left Tabs Area */}
        <div className="flex items-center h-full gap-1">
          <div className="bg-[#0c0c0c] text-white px-3.5 h-full flex items-center gap-2 text-xs border-t-2 border-white rounded-t-sm">
            <span className="font-bold text-[11px]">&gt;_</span>
            <span className="font-medium text-[11px]">Command Prompt</span>
            <button
              onClick={handleClearSession}
              className="p-0.5 hover:bg-neutral-800 rounded ml-1 text-neutral-400 hover:text-white cursor-pointer"
              title="Clear Terminal"
            >
              <X className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={handleClearSession}
            className="p-1 hover:bg-neutral-700/60 rounded text-neutral-400 hover:text-white cursor-pointer"
            title="New Session"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
          <button
            className="p-1 hover:bg-neutral-700/60 rounded text-neutral-400 hover:text-white cursor-pointer"
            title="Options"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Window Controls */}
        <div className="flex items-center">
          <button className="px-3 py-2 hover:bg-neutral-700/60 text-neutral-400 hover:text-white">
            <Minus className="w-3 h-3" />
          </button>
          <button className="px-3 py-2 hover:bg-neutral-700/60 text-neutral-400 hover:text-white">
            <Square className="w-2.5 h-2.5" />
          </button>
          <button 
            onClick={handleClearSession}
            className="px-3 py-2 hover:bg-red-600 text-neutral-400 hover:text-white cursor-pointer"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Quick Run Commands Header Bar */}
      <div className="bg-[#141414] px-4 sm:px-6 py-2 border-b border-neutral-800 flex flex-wrap items-center gap-1.5 text-xs shrink-0">
        <span className="text-neutral-500 uppercase text-[10px] font-bold mr-1">Fast Run:</span>
        {quickChips.map((cmd) => (
          <button
            key={cmd}
            onClick={(e) => handleFastRun(cmd, e)}
            className="px-2 py-0.5 bg-[#1f1f1f] hover:bg-neutral-700 text-neutral-300 hover:text-white rounded text-[11px] transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
        <span className="text-neutral-500 text-[11px] ml-auto hidden md:inline">
          Press <kbd className="bg-neutral-800 text-white px-1 rounded">TAB</kbd> to autocomplete
        </span>
      </div>

      {/* Full-Page Command Prompt Terminal Screen */}
      <div
        ref={terminalBodyRef}
        onClick={handleTerminalClick}
        style={{ overflowAnchor: 'none' }}
        className="flex-1 min-h-[500px] max-h-[78vh] p-4 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-[13px] cursor-text"
      >
        {history.map((item) => (
          <div key={item.id} className="leading-relaxed">
            {item.content}
          </div>
        ))}

        {/* TAB Autocomplete Suggestion Chips */}
        {suggestions.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 bg-[#1a1a1a] border border-neutral-700 p-2 rounded text-xs text-neutral-400">
            <span className="text-[10px] text-white font-bold uppercase">Press Tab to complete:</span>
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const currentScrollY = window.scrollY;
                  setInputVal(s);
                  setSuggestions([]);
                  inputRef.current?.focus({ preventScroll: true });
                  requestAnimationFrame(() => {
                    window.scrollTo({ top: currentScrollY, behavior: 'instant' as ScrollBehavior });
                  });
                }}
                className="bg-neutral-800 hover:bg-neutral-700 text-white px-2 py-0.5 rounded cursor-pointer font-bold"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Active Command Input Line */}
        <div className="flex items-center gap-2 pt-1 font-mono-code text-xs sm:text-[13px]">
          <span className="text-[#cccccc] shrink-0">C:\Users\gkhosla&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'experience', 'whoami', 'skills' (TAB to complete)..."
            className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-neutral-700 font-mono-code text-xs sm:text-[13px]"
            autoComplete="off"
            spellCheck={false}
          />
          <CornerDownLeft className="w-3.5 h-3.5 text-neutral-600" />
        </div>
      </div>

      {/* Bottom Bar: Status & Smooth Snapping Transition to Education & Skills */}
      <div className="bg-[#141414] border-t border-neutral-800 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs text-neutral-400 select-none shrink-0 font-mono-code">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
          <span className="text-[11px] text-neutral-300">Command Prompt Active · [C:\Users\gkhosla]</span>
        </div>
        <button
          onClick={() => {
            const el = document.getElementById('skills-credentials');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Continue scrolling reveals Skills & Portfolio</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
