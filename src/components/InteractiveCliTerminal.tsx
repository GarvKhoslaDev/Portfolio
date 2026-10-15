import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, Shield, Maximize2, Trash2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, TECHNICAL_SKILLS } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  type: 'cmd' | 'output';
  content: React.ReactNode;
}

export const InteractiveCliTerminal: React.FC<{ onOpenResume: () => void; onOpenContact: () => void }> = ({
  onOpenResume,
  onOpenContact
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      type: 'output',
      content: (
        <div className="space-y-1 text-neutral-300">
          <div className="text-emerald-400 font-bold">
            GARV KHOSLA INFRASTRUCTURE CLI [Version 2.6.0-LTS]
          </div>
          <div className="text-xs text-neutral-400">
            Connected to <span className="text-white font-semibold">vcc-core-sw01.campus.internal</span> (Vancouver, BC)
          </div>
          <div className="text-xs text-neutral-400 pt-1">
            Type <span className="text-sky-300 font-bold underline">help</span> or click any quick-command chip below to query credentials, network routes, and experience.
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

    // Add to command history
    setCmdHistory((prev) => [...prev, rawCmd]);
    setCmdIndex(-1);

    const newHistory: HistoryItem[] = [
      ...history,
      {
        id: `cmd-${Date.now()}`,
        type: 'cmd',
        content: (
          <div className="flex items-center gap-2 font-bold text-white">
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
          <div className="space-y-1.5 text-neutral-300">
            <div className="text-neutral-400 font-semibold uppercase text-[10px] tracking-wider mb-1">
              Available Executive Commands:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><strong className="text-emerald-300">whoami</strong> : Executive profile & campus title</div>
              <div><strong className="text-emerald-300">skills</strong> : Active Directory, SCCM & Network matrix</div>
              <div><strong className="text-emerald-300">experience</strong> : VCC Tier II, Tier I & Langara roles</div>
              <div><strong className="text-emerald-300">certs</strong> : CompTIA A+, CCNA knowledge & GPA</div>
              <div><strong className="text-emerald-300">ping 10.24.20.1</strong> : ICMP diagnostic test to gateway</div>
              <div><strong className="text-emerald-300">show ip route</strong> : Cisco IOS routing table output</div>
              <div><strong className="text-emerald-300">fluke-test</strong> : Run Cat6A wiremap & PoE inspection</div>
              <div><strong className="text-emerald-300">contact</strong> : Direct telephone, email & location</div>
              <div><strong className="text-emerald-300">resume</strong> : Open official printable PDF dossier</div>
              <div><strong className="text-emerald-300">clear</strong> : Clear current terminal output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputContent = (
          <div className="space-y-1 text-neutral-200">
            <div className="text-white font-bold text-sm">{PERSONAL_INFO.name}</div>
            <div className="text-emerald-400 font-semibold">{PERSONAL_INFO.title}</div>
            <div className="text-xs text-neutral-400">{PERSONAL_INFO.subTitle} · Vancouver, BC</div>
            <p className="text-xs font-sans text-neutral-300 mt-1 max-w-xl">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>
        );
        break;

      case 'skills':
      case 'get skills':
        outputContent = (
          <div className="space-y-2 text-xs">
            {TECHNICAL_SKILLS.map((c, i) => (
              <div key={i}>
                <span className="text-sky-300 font-bold uppercase">{c.category}: </span>
                <span className="text-neutral-300">{c.skills.join(' · ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
      case 'history':
        outputContent = (
          <div className="space-y-3 text-xs">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="border-l-2 border-emerald-500/50 pl-3">
                <div className="text-white font-bold">{exp.company} — {exp.title}</div>
                <div className="text-[10px] text-neutral-400 font-mono-code">{exp.period} · {exp.location}</div>
                <div className="text-neutral-300 font-sans mt-0.5">{exp.summary}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
      case 'education':
        outputContent = (
          <div className="space-y-1.5 text-xs text-neutral-200">
            <div className="text-white font-bold">{EDUCATION.institution} — {EDUCATION.degree}</div>
            <div className="text-emerald-400">Cumulative GPA: {EDUCATION.gpa} | {EDUCATION.period}</div>
            <div className="pt-1 text-neutral-300">
              <strong className="text-sky-300">Verified Credentials: </strong>
              {EDUCATION.certifications.join(' · ')}
            </div>
          </div>
        );
        break;

      case 'ping 10.24.20.1':
      case 'ping':
        outputContent = (
          <div className="space-y-1 text-xs font-mono-code text-neutral-300">
            <div>PING 10.24.20.1 (10.24.20.1): 56 data bytes</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=0 ttl=64 time=0.482 ms</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=1 ttl=64 time=0.511 ms</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=2 ttl=64 time=0.495 ms</div>
            <div className="text-emerald-400">64 bytes from 10.24.20.1: icmp_seq=3 ttl=64 time=0.478 ms</div>
            <div className="text-neutral-400 pt-1">
              --- 10.24.20.1 ping statistics ---<br />
              4 packets transmitted, 4 packets received, 0.0% packet loss, min/avg/max = 0.478/0.491/0.511 ms
            </div>
          </div>
        );
        break;

      case 'show ip route':
      case 'route':
        outputContent = (
          <div className="space-y-1 text-xs font-mono-code text-neutral-300">
            <div className="text-neutral-500">Codes: C - connected, S - static, O - OSPF, IA - OSPF inter area</div>
            <div>Gateway of last resort is 10.24.1.1 to network 0.0.0.0</div>
            <div className="text-sky-300">O*E2 0.0.0.0/0 [110/1] via 10.24.1.1, 4d18h, GigabitEthernet0/0</div>
            <div className="text-emerald-400">C    10.24.1.0/24 is directly connected, GigabitEthernet0/0 (CORE_VLAN1)</div>
            <div className="text-emerald-400">C    10.24.20.0/24 is directly connected, GigabitEthernet0/1.20 (CAMPUS_LABS)</div>
            <div className="text-emerald-400">C    10.24.30.0/24 is directly connected, GigabitEthernet0/1.30 (STAFF_VOIP)</div>
            <div className="text-sky-300">O    10.24.100.0/24 [110/2] via 10.24.1.254, 2w3d, TenGigabitEthernet0/2</div>
          </div>
        );
        break;

      case 'fluke-test':
        outputContent = (
          <div className="space-y-1 text-xs font-mono-code text-neutral-300 bg-neutral-900/60 p-2.5 rounded border border-neutral-800">
            <div className="text-emerald-400 font-bold">FLUKE LINKRUNNER G2 TDR SCAN: PASS</div>
            <div>Cable: Cat6A UTP · Wiremap 1:1 Pins 1-8 OK · Length: 42.4m</div>
            <div>Negotiated: 1000BASE-T Full-Duplex · PoE+ 802.3at: 25.5W</div>
            <div>CDP Neighbor: VCC-CORE-SW02 Port Fa0/14 (VLAN 20)</div>
          </div>
        );
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-xs text-neutral-200">
            <div><strong className="text-white">Phone: </strong> +1 {PERSONAL_INFO.phone}</div>
            <div><strong className="text-white">Email: </strong> {PERSONAL_INFO.email}</div>
            <div><strong className="text-white">Location: </strong> {PERSONAL_INFO.location}</div>
            <div className="pt-1">
              <button
                onClick={onOpenContact}
                className="text-xs font-mono-code underline text-emerald-400 hover:text-emerald-300"
              >
                Launch Direct Message Form →
              </button>
            </div>
          </div>
        );
        break;

      case 'resume':
        onOpenResume();
        outputContent = (
          <div className="text-xs text-emerald-400">
            Opening Garv Khosla's official printable PDF resume modal...
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputContent = (
          <div className="text-xs text-rose-400">
            command not found: {rawCmd}. Type <span className="underline font-bold text-white">help</span> for valid syntax.
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
    'skills',
    'experience',
    'certs',
    'ping 10.24.20.1',
    'show ip route',
    'fluke-test',
    'contact'
  ];

  return (
    <section id="cli-terminal" className="py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#050505] text-white border-b border-neutral-900">
      <div className="max-w-6xl mx-auto">
        {/* Header with Apple RGB Prism Bar */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-neutral-900 pb-4 mb-6 gap-2">
          <div className="flex items-center gap-3">
            <div>
              <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <span>[INTERACTIVE SYSTEM SHELL]</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mt-1">
                UNIX & CISCO IOS TERMINAL
              </h2>
            </div>
          </div>

          {/* Iconic Apple-style RGB color prism */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 h-5" title="Apple-inspired Pro RGB signature">
              <span className="w-1.5 h-5 rounded-full bg-[#ff3b30]" />
              <span className="w-1.5 h-5 rounded-full bg-[#34c759]" />
              <span className="w-1.5 h-5 rounded-full bg-[#007aff]" />
            </div>
            <span className="font-mono-code text-[11px] text-neutral-400 uppercase tracking-wider">
              BASH & CISCO IOS REPL
            </span>
          </div>
        </div>

        {/* Quick Launch Command Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-4 font-mono-code text-xs">
          <span className="text-neutral-500 uppercase text-[10px] font-bold">Fast Execute:</span>
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
            title="Clear terminal"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>

        {/* Terminal Chrome Window */}
        <div className="bg-[#0a0b0d] border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] font-mono-code">
          {/* Top Window Bar */}
          <div className="bg-[#121316] px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
              <span className="text-xs text-neutral-400 ml-2 font-medium">
                garv@vcc-core-sw01:~ (ssh -p 22)
              </span>
            </div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest hidden sm:block">
              TTY1 · UTF-8
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-6 min-h-[320px] max-h-[480px] overflow-y-auto space-y-4 text-xs cursor-text"
          >
            {history.map((item) => (
              <div key={item.id} className="leading-relaxed">
                {item.content}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold shrink-0">garv@vcc-core:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'whoami', or 'ping'..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-neutral-600 font-mono-code text-xs"
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
