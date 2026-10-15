import React, { useState, useRef, useEffect } from 'react';
import { CornerDownLeft, Trash2, Play, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TECHNICAL_SKILLS, PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  type: 'cmd' | 'output';
  content: React.ReactNode;
}

const ASCII_BANNER = `
  _     _____    _    ____  _   _      _    ____   ___  _   _ _____   __  __ _____ 
 | |   | ____|  / \  |  _ \| \ | |    / \  | __ ) / _ \| | | |_   _| |  \/  | ____|
 | |   |  _|   / _ \ | |_) |  \| |   / _ \ |  _ \| | | | | | | | |   | |\/| |  _|  
 | |___| |___ / ___ \|  _ <| |\  |  / ___ \| |_) | |_| | |_| | | |   | |  | | |___ 
 |_____|_____/_/   \_\_| \_\_| \_| /_/   \_\____/ \___/ \___/  |_|   |_|  |_|_____|
`;

export const LinuxCliTerminal: React.FC<{ onOpenResume: () => void; onOpenContact: () => void }> = ({
  onOpenResume,
  onOpenContact
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-ascii',
      type: 'output',
      content: (
        <div className="space-y-3 font-mono-code">
          <pre className="text-white text-[9px] sm:text-[11px] md:text-xs leading-none select-none font-bold overflow-x-auto text-emerald-400">
            {ASCII_BANNER}
          </pre>
          <div className="text-xs text-neutral-300 border-t border-b border-neutral-800 py-2 space-y-1">
            <div className="flex flex-wrap items-center justify-between gap-2 text-neutral-400">
              <span>Linux kernel 6.8.0-45-generic #45-Ubuntu SMP x86_64</span>
              <span className="text-emerald-400 font-bold">TTY1 · ONLINE</span>
            </div>
            <div className="text-white">
              Welcome to <strong className="text-emerald-400">Garv Khosla</strong>'s interactive terminal. Type commands below to inspect my career, certifications, and network engineering.
            </div>
          </div>
          <div className="text-xs text-neutral-400">
            Available commands: <span className="text-white font-bold">whoami</span> · <span className="text-white font-bold">experience</span> · <span className="text-white font-bold">skills</span> · <span className="text-white font-bold">projects</span> · <span className="text-white font-bold">certs</span> · <span className="text-white font-bold">ping</span> · <span className="text-white font-bold">route</span> · <span className="text-white font-bold">fluke</span> · <span className="text-white font-bold">contact</span> · <span className="text-white font-bold">resume</span> · <span className="text-white font-bold">clear</span>
          </div>
        </div>
      )
    }
  ]);

  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistory((prev) => [...prev, rawCmd]);
    setCmdIndex(-1);

    const newHistory: HistoryItem[] = [
      ...history,
      {
        id: `cmd-${Date.now()}`,
        type: 'cmd',
        content: (
          <div className="flex items-center gap-2 font-bold text-white font-mono-code text-xs sm:text-sm">
            <span className="text-emerald-400">garv@vcc-core:~$</span>
            <span>{rawCmd}</span>
          </div>
        )
      }
    ];

    let outputContent: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        outputContent = (
          <div className="space-y-1.5 text-neutral-300 font-mono-code text-xs">
            <div className="text-neutral-500 font-semibold uppercase text-[10px] tracking-wider mb-1">
              Command Reference Table:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <div><strong className="text-emerald-300">whoami</strong> : Bio, role & VCC CUPE 4627 standing</div>
              <div><strong className="text-emerald-300">experience</strong> : Full employment history & accomplishments</div>
              <div><strong className="text-emerald-300">skills</strong> : AD, SCCM, 802.1Q, Linux & Python matrix</div>
              <div><strong className="text-emerald-300">projects</strong> : Cisco CCNA lab & Yieldly SQL system</div>
              <div><strong className="text-emerald-300">certs</strong> : CompTIA A+, CCNA knowledge & GPA 3.5</div>
              <div><strong className="text-emerald-300">ping</strong> : ICMP test to campus gateway 10.24.20.1</div>
              <div><strong className="text-emerald-300">route</strong> : Cisco IOS dynamic routing table output</div>
              <div><strong className="text-emerald-300">fluke</strong> : Fluke LinkRunner TDR & PoE wiremap test</div>
              <div><strong className="text-emerald-300">contact</strong> : Direct telephone, email & location</div>
              <div><strong className="text-emerald-300">resume</strong> : Open printable PDF document dossier</div>
              <div><strong className="text-emerald-300">clear</strong> : Clear screen buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="space-y-2 text-neutral-200 font-mono-code text-xs sm:text-sm">
            <div className="text-white font-bold text-base flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs font-normal text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                [UID: 1000(garv) GID: 1000(cupe4627)]
              </span>
            </div>
            <div className="text-emerald-400 font-semibold">{PERSONAL_INFO.title} ({PERSONAL_INFO.subTitle})</div>
            <div className="text-xs text-neutral-400">Location: {PERSONAL_INFO.location} · Focus: Campus Triage, AD GPO & CCNA Lab</div>
            <p className="font-sans text-xs text-neutral-300 mt-2 max-w-2xl leading-relaxed">
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
              <div key={exp.id} className="border-l-2 border-emerald-400 pl-3.5 py-1 space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="font-bold text-white text-sm">0{idx + 1}. {exp.company}</span>
                  <span className="text-neutral-400 text-[11px]">{exp.period}</span>
                </div>
                <div className="text-emerald-300 font-semibold">{exp.title} {exp.grade ? `(${exp.grade})` : ''} · {exp.location}</div>
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
                  <span className="text-neutral-500 uppercase text-[10px] font-bold">Tech: </span>
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
              <div key={i} className="bg-neutral-900/60 border border-neutral-800 p-2.5 rounded">
                <div className="text-emerald-400 font-bold uppercase text-[11px] mb-1">
                  0{i + 1}. {c.category}
                </div>
                <div className="text-neutral-300">
                  {c.skills.join('  ·  ')}
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
              <div key={proj.id} className="border-l-2 border-sky-400 pl-3.5 py-1 space-y-1">
                <div className="font-bold text-white text-sm">{idx + 1}. {proj.title}</div>
                <div className="text-sky-300 text-[11px]">{proj.category} · {proj.period}</div>
                <div className="text-neutral-300 font-sans leading-relaxed">{proj.overview}</div>
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
          <div className="space-y-2 font-mono-code text-xs">
            <div className="bg-neutral-900/70 p-3 rounded border border-neutral-800">
              <div className="text-white font-bold text-sm">{EDUCATION.institution}</div>
              <div className="text-neutral-300">{EDUCATION.degree}</div>
              <div className="text-emerald-400 font-semibold mt-1">Cumulative GPA: {EDUCATION.gpa} | {EDUCATION.period}</div>
            </div>
            <div className="pt-1 space-y-1">
              <span className="text-[10px] text-neutral-400 uppercase font-bold">Verified Credentials:</span>
              {EDUCATION.certifications.map((c, i) => (
                <div key={i} className="text-white flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'ping':
      case 'ping 10.24.20.1':
        outputContent = (
          <div className="space-y-1 font-mono-code text-xs text-neutral-300">
            <div>PING 10.24.20.1 (10.24.20.1): 56 data bytes</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=0 ttl=64 time=0.482 ms</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=1 ttl=64 time=0.511 ms</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=2 ttl=64 time=0.495 ms</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=3 ttl=64 time=0.478 ms</div>
            <div className="text-neutral-400 pt-1">
              --- 10.24.20.1 ping statistics ---<br />
              4 packets transmitted, 4 packets received, 0.0% packet loss, rtt min/avg/max = 0.478/0.491/0.511 ms
            </div>
          </div>
        );
        break;

      case 'route':
      case 'show ip route':
        outputContent = (
          <div className="space-y-1 font-mono-code text-xs text-neutral-300">
            <div className="text-neutral-500">Gateway of last resort is 10.24.1.1 to network 0.0.0.0</div>
            <div className="text-sky-300">O*E2 0.0.0.0/0 [110/1] via 10.24.1.1, GigabitEthernet0/0</div>
            <div className="text-emerald-400">C    10.24.1.0/24 is directly connected, GigabitEthernet0/0 (CORE_VLAN1)</div>
            <div className="text-emerald-400">C    10.24.20.0/24 is directly connected, GigabitEthernet0/1.20 (CAMPUS_LABS)</div>
            <div className="text-emerald-400">C    10.24.30.0/24 is directly connected, GigabitEthernet0/1.30 (STAFF_VOIP)</div>
            <div className="text-sky-300">O    10.24.100.0/24 [110/2] via 10.24.1.254, TenGigabitEthernet0/2</div>
          </div>
        );
        break;

      case 'fluke':
      case 'fluke-test':
        outputContent = (
          <div className="space-y-1.5 font-mono-code text-xs bg-neutral-900/80 p-3 rounded border border-neutral-800 text-neutral-200">
            <div className="text-emerald-400 font-bold text-sm">FLUKE LINKRUNNER G2 TDR DIAGNOSTIC: PASS</div>
            <div>Cable Type: TIA-568-C.2 Cat6A UTP · Wiremap: 1:1 Pins 1-8 OK</div>
            <div>Cable Length: 42.4m · Speed: 1000BASE-T Full-Duplex</div>
            <div>PoE+ Power: 802.3at Class 4 (53.8 VDC, 25.5W)</div>
            <div>CDP/LLDP Switchport: VCC-CORE-SW02 Port Fa0/14 (VLAN 20)</div>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1.5 font-mono-code text-xs text-neutral-200">
            <div><strong className="text-white">Phone: </strong> +1 {PERSONAL_INFO.phone}</div>
            <div><strong className="text-white">Email: </strong> {PERSONAL_INFO.email}</div>
            <div><strong className="text-white">Location: </strong> {PERSONAL_INFO.location}</div>
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="text-xs font-mono-code underline text-emerald-400 hover:text-emerald-300 cursor-pointer"
              >
                Launch Direct Message Modal →
              </button>
            </div>
          </div>
        );
        break;

      case 'resume':
      case 'cat resume':
        onOpenResume();
        outputContent = (
          <div className="text-xs font-mono-code text-emerald-400">
            Opened Garv Khosla's official printable PDF resume modal.
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputContent = (
          <div className="text-xs font-mono-code text-rose-400">
            command not found: {rawCmd}. Type <span className="underline font-bold text-white">help</span> for available commands.
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
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
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

  const quickCommands = [
    'whoami',
    'experience',
    'skills',
    'projects',
    'certs',
    'ping',
    'route',
    'fluke',
    'contact',
    'resume'
  ];

  return (
    <section id="cli-terminal" className="min-h-screen py-12 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white flex flex-col justify-center border-b border-neutral-900">
      <div className="max-w-6xl mx-auto w-full space-y-4">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-neutral-900 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono-code font-bold text-xs uppercase tracking-widest text-emerald-400">
              [LINUX SYSTEM CONSOLE · BASH & CISCO REPL]
            </span>
          </div>
          <span className="font-mono-code text-[11px] text-neutral-400 uppercase tracking-wider">
            garv@vcc-core-sw01:~
          </span>
        </div>

        {/* Quick Click Command Buttons */}
        <div className="flex flex-wrap items-center gap-2 font-mono-code text-xs">
          <span className="text-neutral-500 uppercase text-[10px] font-bold">Quick Execute:</span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => executeCommand(q)}
              className="px-2.5 py-1 bg-[#121316] hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-600 rounded text-neutral-300 hover:text-white transition-all cursor-pointer text-[11px]"
            >
              ${q}
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            className="px-2.5 py-1 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 rounded transition-all cursor-pointer text-[11px] ml-auto flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        {/* Full-Page Terminal Screen */}
        <div className="bg-[#090a0d] border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] font-mono-code">
          {/* Window Title Bar */}
          <div className="bg-[#111215] px-4 py-3 border-b border-neutral-800 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
              <span className="text-xs text-neutral-400 ml-2 font-medium">
                garv@vcc-core-sw01: ~ (bash / zsh)
              </span>
            </div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:block">
              UTF-8 · 256-COLOR
            </div>
          </div>

          {/* Terminal Content Buffer */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-7 min-h-[460px] max-h-[620px] overflow-y-auto space-y-4 text-xs sm:text-[13px] cursor-text"
          >
            {history.map((item) => (
              <div key={item.id} className="leading-relaxed">
                {item.content}
              </div>
            ))}

            {/* Prompt Input Line */}
            <div className="flex items-center gap-2 pt-1 font-mono-code">
              <span className="text-emerald-400 font-bold shrink-0">garv@vcc-core:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'experience', 'whoami', 'ping')..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-neutral-600 font-mono-code text-xs sm:text-[13px]"
                autoComplete="off"
                spellCheck={false}
              />
              <CornerDownLeft className="w-3.5 h-3.5 text-neutral-600" />
            </div>

            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
