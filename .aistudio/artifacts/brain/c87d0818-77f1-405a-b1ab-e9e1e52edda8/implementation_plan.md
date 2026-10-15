# Apple-Grade Scroll-Driven Portfolio for Garv Khosla

A creative, high-impact personal portfolio website for Garv Khosla featuring Apple-style pinned scroll staging, stark deep-black aesthetics, oversized bracketed display typography (e.g. `[NETWORK SYSTEMS]`, `[TIER 2 ESCALATION]`), and an interactive layered server rack hardware zoom that responds to scroll.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following directions have been confirmed and synthesized from your selections:

- **Confirmed Decision 1 (Scroll Architecture)**: Apple-style pinned scroll staging (`position: sticky`) with progressive section reveals, layered cross-fades, and scroll-linked scale transforms instead of static presentation slide cards.
- **Confirmed Decision 2 (Visual Aesthetic & Hero Typography)**: Stark deep black (`#050505` to `#0a0a0a`) with oversized high-contrast bracketed typography (e.g. `[NETWORK ANALYST]`, `[GARV KHOSLA]`, `[INFRASTRUCTURE]`, `[PORTFOLIO 2026]`) directly inspired by the uploaded reference artwork.
- **Confirmed Decision 3 (Scroll-Driven Interactive Capability)**: Interactive 3D/layered server rack hardware zoom that visually unpacks and highlights physical enterprise components (patch panels, switches, transceivers, Fluke diagnostics, LeafOS terminals) as the user scrolls through the timeline.

---

## 1. Overview & Core Concept

- **What It Does**: Replaces static presentation slides with an immersive, scroll-driven single-page experience. As the user scrolls, each section locks into view, revealing kinetic typography, interactive enterprise hardware layers, and deep technical capabilities.
- **Target Audience**: Engineering hiring managers, IT directors, infrastructure team leads, and recruiters evaluating Garv Khosla for Network Analyst, Systems Administrator, and Service Desk Tier II roles.
- **Key Value**: Demonstrates senior frontend polish and complex systems capability through tactile, responsive engineering rather than generic template layouts.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **The Hero Stage (`[NETWORK SYSTEMS]`)**:
   - Giant bracketed header `[NETWORK ANALYST]` anchored across the screen with high-impact brutalist typography.
   - Editorial metadata grid: Vancouver BC, contact telephone (`672.833.1264`), CUPE 4627 designation, and `Portfolio 2026`.
   - Scroll indicator cue guiding the user into the pinned story sequence.

2. **Pinned Stage 1 — Layered Server Rack & Hardware Zoom**:
   - A multi-depth enterprise rack visualization pinned to the viewport.
   - As the user scrolls:
     - **Frame 0% - 30%**: Wide datacenter view of the rack enclosure.
     - **Frame 30% - 65%**: Smooth camera zoom into the active switch ports and fiber optic patching with live link lights.
     - **Frame 65% - 100%**: Exploded technical inspection highlighting Fluke Cat6A link validation, transceiver optics, and 802.1Q VLAN tags.

3. **Pinned Stage 2 — Career Trajectory & Campus Escalations**:
   - Pinned stage with progressive narrative reveals:
     - **Act 1**: Vancouver Community College (VCC) Service Desk Technician II (CUPE 4627 - Pay Grade 25).
     - **Act 2**: VCC Service Desk Technician I & Fluke deskside link validation.
     - **Act 3**: Langara College IT Technician Internship & campus OS deployment.
   - Each transition cross-fades achievements, technologies, and metrics with sticky chapter numbers (`01`, `02`, `03`).

4. **Pinned Stage 3 — Interactive Network Lab & Protocol Inspection**:
   - Scroll-synchronized Wireshark packet tracer and Fluke LinkRunner diagnostic module.
   - Users can pause scrolling to interact with test pins, packet bytes, and VLAN tags directly.

5. **Stage 4 — Education, Credentials & High-Impact Footer**:
   - Langara College Diploma (GPA 3.5), CompTIA A+ certification, and CCNA curriculum competencies.
   - Giant bottom bracketed lockup `[GARV KHOSLA]` with 1-click **Resume Download / PDF Print** and direct contact actions.

### Visual Identity & Theme

- **Background Canvas**: Pure pitch black (`#050505`) with subtle dark gray borders (`#1a1a1c`).
- **Typography**:
  - *Display*: Ultra-bold condensed sans-serif (`Archivo` / `Plus Jakarta Sans`, 800–900 weight, tight negative tracking `-0.04em`, uppercase with brutalist bracket closures `[...]`).
  - *Data & Telemetry*: Monospace (`Space Mono`, tabular numerals, 11px–12px).
  - *Prose & Descriptions*: High-legibility geometric sans (`Plus Jakarta Sans`, 400–500 weight, muted zinc `#a1a1aa`).
- **Accent Budget**: Pure stark white (`#ffffff`) for dominant typographic anchors, with crisp emerald (`#10b981`) for live network link states and sky blue (`#38bdf8`) for packet inspection.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Pinned Sticky Sections over Heavy Three.js Canvas**:
  - *Chosen Approach*: Multi-layered CSS sticky stages (`position: sticky`, `top: 0`) and scroll progress interpolation using Motion (`useScroll`, `useTransform`).
  - *Why*: Ultra-fast load times, zero WebGL crashing on low-end GPUs, crisp typography rendering, and fluid 60fps animations.
- **Decision 2: Preserving 100% Resume Accuracy**:
  - *Chosen Approach*: Every metric, role, tool, and certification is pulled directly from Garv Khosla's uploaded resume without any fabricated achievements.
- **Decision 3: Zero-Pill Unboxed Metadata**:
  - *Chosen Approach*: Clean typographic separators (`·` or `/`) instead of generic colored pill badges.

---

## 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────────────────────┐
│                               Header                                   │
│  [GARV KHOSLA]  ·  Overview · Hardware Zoom · Experience · Resume CTA │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│                            Hero Section                                │
│       [NETWORK ANALYST]  -  Brutalist Bracketed Display Type           │
│       Vancouver, BC  ·  672.833.1264  ·  Portfolio 2026                │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│         Pinned Stage 1: Interactive 3D Server Rack Hardware Zoom        │
│    Sticky Viewport Stage  ──>  Scroll Interpolator (0.0 to 1.0)        │
│    ├── Layer A: Full Server Rack Architecture Overview                 │
│    ├── Layer B: High-Speed Fiber Optic Switchport Zoom                 │
│    └── Layer C: Fluke LinkRunner & Cat6A Transceiver Inspection        │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│         Pinned Stage 2: Chronological Escalation Timeline              │
│    Sticky Viewport Stage  ──>  Step Cross-Fader                        │
│    ├── Act 01: VCC Service Desk Tech II (CUPE 4627 Pay Grade 25)      │
│    ├── Act 02: VCC Service Desk Tech I / IT Support Specialist         │
│    └── Act 03: Langara College IT Internship & Campus Infrastructure   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│         Interactive Diagnostic Console (Fluke + Wireshark)             │
│    ├── Fluke LinkRunner G2 Interactive Port & Wiremap Emulator         │
│    └── Wireshark Deep Packet Dissection (DHCP DORA, TCP 3-Way, OSPF)   │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────┐
│         Credentials, Projects & Bold Footer                            │
│    ├── Langara Diploma (GPA 3.5), CompTIA A+, CCNA Knowledge          │
│    ├── Enterprise Routing & Switching Lab + Yieldly SQL System        │
│    └── Giant [GARV KHOSLA] Footer with Resume Print / PDF Export       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Execution Steps

1. **Refactor Design Tokens & Typography**:
   - Establish pure pitch black theme (`#050505`), bracketed typography styles, and high-contrast brutalist layout.
2. **Implement Hero Section**:
   - Giant `[NETWORK ANALYST]` display typography with metadata grid and kinetic scroll entrance.
3. **Build the Apple-Style Pinned Server Rack Zoom Stage**:
   - Sticky scroll track with multi-layered visual zoom focusing through the server rack, fiber optic patch, and Fluke testing interface.
4. **Build the Pinned Experience Story Stage**:
   - Progressive step scroll through Garv's actual VCC and Langara roles.
5. **Integrate Interactive Technical Consoles**:
   - Retain and elevate the Fluke LinkRunner emulator and Wireshark packet tracer within the dark aesthetic.
6. **Build Credentials & Bold Bracketed Footer**:
   - Giant bracketed name lockup with 1-click printable resume modal and direct contact dispatch.
7. **Verify & Validate**:
   - Verify smooth 60fps scrolling, mobile responsiveness, and compile without errors.
