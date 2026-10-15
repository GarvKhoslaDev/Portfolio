import React, { useState } from 'react';
import { Network, Terminal, CheckCircle2, ChevronRight, FileCode, Layers } from 'lucide-react';

type LabTrace = 'dhcp' | 'tcp' | 'ospf';

export const InteractiveWiresharkLab: React.FC = () => {
  const [selectedTrace, setSelectedTrace] = useState<LabTrace>('dhcp');
  const [selectedFrame, setSelectedFrame] = useState<number>(0);

  const traces = {
    dhcp: {
      name: "DHCP DORA 4-Way Exchange",
      summary: "Dynamic Host Configuration Protocol client lease negotiation across VLAN 20 gateway relay.",
      frames: [
        {
          num: 1,
          time: "0.000000",
          source: "0.0.0.0",
          dest: "255.255.255.255",
          proto: "DHCP",
          info: "DHCP Discover - Transaction ID 0x3d1d",
          details: [
            "Ethernet II: Src: 00:1a:2b:3c:4d:5e, Dst: ff:ff:ff:ff:ff:ff (Broadcast)",
            "IPv4: Src: 0.0.0.0, Dst: 255.255.255.255, Protocol: UDP (17)",
            "User Datagram Protocol: Src Port: 68 (bootpc), Dst Port: 67 (bootps)",
            "Bootstrap Protocol (Option 53): DHCP Discover"
          ]
        },
        {
          num: 2,
          time: "0.004120",
          source: "10.24.20.1",
          dest: "255.255.255.255",
          proto: "DHCP",
          info: "DHCP Offer - IP: 10.24.20.145, Gateway: 10.24.20.1",
          details: [
            "Ethernet II: Src: 00:0c:29:8a:11:02, Dst: ff:ff:ff:ff:ff:ff (Broadcast)",
            "IPv4: Src: 10.24.20.1, Dst: 255.255.255.255",
            "Option 53: DHCP Offer",
            "Option 1: Subnet Mask 255.255.255.0",
            "Option 3: Router 10.24.20.1",
            "Option 6: Domain Name Server: 10.24.1.10, 10.24.1.11"
          ]
        },
        {
          num: 3,
          time: "0.004580",
          source: "0.0.0.0",
          dest: "255.255.255.255",
          proto: "DHCP",
          info: "DHCP Request - Requested IP: 10.24.20.145",
          details: [
            "Option 53: DHCP Request",
            "Option 50: Requested IP Address: 10.24.20.145",
            "Option 54: Server Identifier: 10.24.20.1"
          ]
        },
        {
          num: 4,
          time: "0.007810",
          source: "10.24.20.1",
          dest: "10.24.20.145",
          proto: "DHCP",
          info: "DHCP ACK - Transaction ID 0x3d1d (Lease: 86400s)",
          details: [
            "Option 53: DHCP ACK",
            "Option 51: IP Address Lease Time: 1 day (86400 seconds)",
            "Assigned IP: 10.24.20.145 is committed to client ARP table."
          ]
        }
      ]
    },
    tcp: {
      name: "TCP 3-Way Handshake (RFC 793)",
      summary: "Transmission Control Protocol reliable connection establishment prior to HTTP/SSH data payload.",
      frames: [
        {
          num: 1,
          time: "0.000000",
          source: "10.24.20.145",
          dest: "10.24.1.50",
          proto: "TCP",
          info: "54230 -> 443 [SYN] Seq=0 Win=64240 Len=0 MSS=1460 WS=256",
          details: [
            "Flags: 0x002 (SYN)",
            "Sequence Number: 0 (relative sequence number)",
            "Window size value: 64240",
            "TCP Option: Maximum segment size 1460 bytes"
          ]
        },
        {
          num: 2,
          time: "0.001240",
          source: "10.24.1.50",
          dest: "10.24.20.145",
          proto: "TCP",
          info: "443 -> 54230 [SYN, ACK] Seq=0 Ack=1 Win=65535 Len=0",
          details: [
            "Flags: 0x012 (SYN, ACK)",
            "Sequence Number: 0",
            "Acknowledgment Number: 1 (relative ack number)",
            "Window size value: 65535"
          ]
        },
        {
          num: 3,
          time: "0.001420",
          source: "10.24.20.145",
          dest: "10.24.1.50",
          proto: "TCP",
          info: "54230 -> 443 [ACK] Seq=1 Ack=1 Win=64240 Len=0",
          details: [
            "Flags: 0x010 (ACK)",
            "Sequence Number: 1",
            "Acknowledgment Number: 1",
            "Connection State: ESTABLISHED"
          ]
        }
      ]
    },
    ospf: {
      name: "OSPFv2 Link State Advertisement",
      summary: "Open Shortest Path First dynamic neighbor adjacency and link state database synchronization.",
      frames: [
        {
          num: 1,
          time: "0.000000",
          source: "10.0.0.1",
          dest: "224.0.0.5",
          proto: "OSPF",
          info: "Hello Packet - Area 0.0.0.0, Router-ID 1.1.1.1",
          details: [
            "OSPF Header: Version 2, Message Type 1 (Hello Packet)",
            "Source OSPF Router: 1.1.1.1, Area ID: 0.0.0.0 (Backbone)",
            "Network Mask: 255.255.255.252 (/30 Point-to-Point)",
            "Hello Interval: 10s, Router Dead Interval: 40s"
          ]
        },
        {
          num: 2,
          time: "0.002100",
          source: "10.0.0.2",
          dest: "224.0.0.5",
          proto: "OSPF",
          info: "Hello Packet - Active Neighbor 1.1.1.1 detected",
          details: [
            "Neighbor 1.1.1.1 listed in Active Neighbors list",
            "Adjacency State transitioned: Init -> 2-Way -> ExStart"
          ]
        },
        {
          num: 3,
          time: "0.005400",
          source: "10.0.0.1",
          dest: "10.0.0.2",
          proto: "OSPF",
          info: "Database Description (DBD) & Link State Request (LSR)",
          details: [
            "Exchanging LSA headers for Area 0 route convergence",
            "Topology converged: Shortest Path First (Dijkstra) calculation complete"
          ]
        }
      ]
    }
  };

  const currentTrace = traces[selectedTrace];
  const activeFrameData = currentTrace.frames[selectedFrame] || currentTrace.frames[0];

  return (
    <div className="bg-[#121316] text-white rounded-2xl border border-neutral-700/80 p-5 sm:p-7 shadow-2xl font-mono-code">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-3 gap-2">
        <div className="flex items-center gap-2.5">
          <Layers className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-200">
            WIRESHARK DEEP PACKET INSPECTION · CCNA LAB SUITE
          </span>
        </div>
        <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
          JEREMY'S IT LAB · CISCO PACKET TRACER
        </div>
      </div>

      {/* Protocol Selector Tabs */}
      <div className="flex flex-wrap gap-2 my-4">
        <button
          onClick={() => { setSelectedTrace('dhcp'); setSelectedFrame(0); }}
          className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded border transition-colors ${
            selectedTrace === 'dhcp'
              ? 'bg-sky-950/70 text-sky-300 border-sky-500/50'
              : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
          }`}
        >
          DHCP DORA Process
        </button>
        <button
          onClick={() => { setSelectedTrace('tcp'); setSelectedFrame(0); }}
          className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded border transition-colors ${
            selectedTrace === 'tcp'
              ? 'bg-sky-950/70 text-sky-300 border-sky-500/50'
              : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
          }`}
        >
          TCP 3-Way Handshake
        </button>
        <button
          onClick={() => { setSelectedTrace('ospf'); setSelectedFrame(0); }}
          className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded border transition-colors ${
            selectedTrace === 'ospf'
              ? 'bg-sky-950/70 text-sky-300 border-sky-500/50'
              : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
          }`}
        >
          OSPFv2 Adjacency
        </button>
      </div>

      {/* Packet Table Simulation */}
      <div className="bg-[#090a0c] rounded-xl border border-neutral-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[10px] sm:text-[11px]">
            <thead className="bg-neutral-900/90 text-neutral-400 border-b border-neutral-800 uppercase tracking-wider">
              <tr>
                <th className="py-2 px-3">No.</th>
                <th className="py-2 px-3">Time</th>
                <th className="py-2 px-3">Source</th>
                <th className="py-2 px-3">Destination</th>
                <th className="py-2 px-3">Protocol</th>
                <th className="py-2 px-3">Info</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60">
              {currentTrace.frames.map((frame, idx) => (
                <tr
                  key={frame.num}
                  onClick={() => setSelectedFrame(idx)}
                  className={`cursor-pointer transition-colors ${
                    selectedFrame === idx
                      ? 'bg-sky-900/40 text-sky-200 font-semibold'
                      : 'hover:bg-neutral-900/50 text-neutral-300'
                  }`}
                >
                  <td className="py-2 px-3">{frame.num}</td>
                  <td className="py-2 px-3 tabular-nums">{frame.time}</td>
                  <td className="py-2 px-3">{frame.source}</td>
                  <td className="py-2 px-3">{frame.dest}</td>
                  <td className="py-2 px-3 font-bold text-sky-400">{frame.proto}</td>
                  <td className="py-2 px-3 truncate max-w-xs">{frame.info}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Packet Dissection Pane */}
        <div className="p-3 sm:p-4 bg-neutral-950 border-t border-neutral-800">
          <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
            <FileCode className="w-3.5 h-3.5 text-sky-400" />
            Packet Details · Frame {activeFrameData.num} ({activeFrameData.proto})
          </div>
          <div className="space-y-1.5 text-[11px] text-neutral-300 bg-neutral-900/80 p-3 rounded border border-neutral-800/80">
            {activeFrameData.details.map((line, i) => (
              <div key={i} className="flex items-start gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="font-mono-code">{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lab Context */}
      <div className="mt-3 flex items-start gap-2 text-[10px] text-neutral-400">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
        <p>
          <strong className="text-neutral-200">CCNA Verification Discipline:</strong> In virtual topologies with 802.1Q sub-interfaces and Router-on-a-Stick,
          analyzing packet captures confirms proper VLAN trunking encapsulation, avoids duplex mismatches, and audits DHCP helper-address forwarding.
        </p>
      </div>
    </div>
  );
};
