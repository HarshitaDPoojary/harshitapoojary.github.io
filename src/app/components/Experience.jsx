'use client';

import { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

// Palette for card types
const COLORS = {
  full:   { card: "#121a2b", arrow: "#1f2a44", ring: "#60a5fa" }, // blue-ish
  intern: { card: "#10221a", arrow: "#1a3a2c", ring: "#34d399" }, // green-ish
};
const withBase = (p) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${p}`


// Your data
const EXPERIENCES = [
  // Internships
  {
    type: "intern",
    title: "AI Intern",
    company: "Deep Defense Solutions",
    location: "Remote, USA",
    date: "Jul 2025 – Present",
    icon: withBase("/images/dds.jpg"),
    points: [
      "Developing ML pipelines in Python to detect false incident reports for a community-management system and trigger actions.",
    ],
  },
  {
    type: "intern",
    title: "Data Science Intern",
    company: "Zero-True",
    location: "Remote – New York, USA",
    date: "Jun 2024 – Aug 2024",
    icon: withBase("/images/zerotrue.jpg"),
    points: [
      "Worked alongside founders/clients to design SQL/Python-integrated dashboards; delivered interactive demos and best-practice guidance.",
      "Implemented 5 Vuetify UI components including  Lists, Dropdown, Navigation bar for the notebook.",
    ],
  },
  {
    type: "intern",
    title: "Student Researcher",
    company: "University of Southern California",
    location: "Los Angeles, USA",
    date: "Jan 2024 – Aug 2024",
    icon: withBase("/images/usc.png"),
    points: [
      "Analyzed YOLOv5/YOLOv8 on ~10k StreetView images for tent detection/counting; leveraged geospatial metadata to handle noisy urban conditions.",
      "Coded grid-based segmentation to quantify encampment density across ~502.7 sq. miles; produced multi-intensity heatmaps via lat-long clustering.",
    ],
  },

  // Full-time
  {
    type: "full",
    title: "Machine Learning Engineer",
    company: "Reliance Jio",
    location: "Mumbai, India",
    date: "Dec 2021 – Jul 2023",
    icon: withBase("/images/jio.png"),
    points: [
      "Optimized RetinaFace with TensorRT FP16 on T4/A100 (C++/Python), reducing face registration time ~40% with real-time inference at scale.",
      "Automated CI/CD for JioFace, VMD, and ANPR using Python, Docker, Kubernetes, GitLab, JIRA—improving rollout velocity ~50%.",
      "Delivered spoof detection (ResNet/CDCNet) ~90% accuracy and scaled to 20+ sites.",
      "Directed 4 interns curating datasets and validating models for production.",
    ],
  },
  {
    type: "full",
    title: "Software Engineer",
    company: "Reliance Jio",
    location: "Mumbai, India",
    date: "Jun 2019 – Dec 2021",
    icon: withBase("/images/jio.png"),
    points: [
      "Built microservices & REST APIs serving ML-driven recommendations for 100M+ users; increased engagement ~20%.",
      "Designed ingestion pipelines and complex SQL across fragmented data to improve throughput and aggregation.",
      "Analyzed behaviors across 10 campaigns (regression/time-series) to improve CTR and ROI.",
      "Collaborated with PMs/frontend to cut latency ~15% and boost engagement ~12%.",
    ],
  },
  {
    type: "full",
    title: "Software Engineer",
    company: "TaksyKraft",
    location: "Hyderabad, India (Remote)",
    date: "Jan 2019 – Jun 2019",
    icon: withBase("/images/taksykraft.jpg"),
    points: [
      "Developed engagement-prediction APIs for real-time targeting; improved ROI ~10% across 10+ clients.",
      "Built data pipelines and Tableau dashboards, reducing reporting delays ~40%.",
    ],
  },
];

// Small pill button
function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-3 py-1.5 rounded-full text-sm font-medium transition border",
        active
          ? "bg-white text-black border-white"
          : "bg-white/10 text-white border-white/20 hover:bg-white/20"
      ].join(" ")}
    >
      {children}
    </button>
  );
}

// Mode toggle (Highlight vs Filter)
function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex items-center gap-2">
      <Pill active={mode === "highlight"} onClick={() => setMode("highlight")}>Highlight</Pill>
      <Pill active={mode === "filter"} onClick={() => setMode("filter")}>Filter</Pill>
    </div>
  );
}

// Legend + Focus controls
function Legend({ focus, setFocus, mode, setMode }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-3 justify-between">
      <div className="flex items-center gap-2">
        <Pill active={focus === "all"} onClick={() => setFocus("all")}>All</Pill>
        <Pill active={focus === "full"} onClick={() => setFocus("full")}>Full-time</Pill>
        <Pill active={focus === "intern"} onClick={() => setFocus("intern")}>Internships</Pill>
      </div>
      <ModeToggle mode={mode} setMode={setMode} />
    </div>
  );
}

function ExperienceCard({ exp, focus, mode }) {
  const palette = COLORS[exp.type];
  const isMuted = focus !== "all" && exp.type !== focus;
  const isFilteredOut = mode === "filter" && isMuted;

  if (isFilteredOut) return null; // hide in Filter mode

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: palette.card,
        color: "#fff",
        borderRadius: "12px",
        border: focus === exp.type ? `1px solid ${palette.ring}` : "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        opacity: isMuted && mode === "highlight" ? 0.45 : 1,
        transform: isMuted && mode === "highlight" ? "scale(0.98)" : "none",
        transition: "opacity 200ms, transform 200ms, box-shadow 200ms, border-color 200ms",
      }}
      contentArrowStyle={{ borderRight: `7px solid ${palette.arrow}` }}
      date={exp.date}
      iconStyle={{
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        filter: isMuted && mode === "highlight" ? "grayscale(1) opacity(0.6)" : "none",
        border: focus === exp.type ? `2px solid ${palette.ring}` : "2px solid transparent",
      }}
      icon={
        <Image
          src={exp.icon}
          alt={`${exp.company} logo`}
          width={40}
          height={40}
          style={{ objectFit: "contain" }}
        />
      }
    >
      <h3 className="text-white text-[20px] sm:text-[22px] font-bold">{exp.title}</h3>
      <p className="text-white/70 text-[14px] font-medium m-0">
        {exp.company} · {exp.location}
      </p>
      <ul className="mt-4 list-disc ml-5 space-y-2">
        {exp.points.map((p, i) => (
          <li key={i} className="text-white/90 text-[14px] leading-relaxed">
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-3 text-[11px] uppercase tracking-wider opacity-70">
        {exp.type === "full" ? "Full-time" : "Internship"}
      </div>
    </VerticalTimelineElement>
  );
}

export default function Experience() {
  const [focus, setFocus] = useState("all");       // 'all' | 'full' | 'intern'
  const [mode, setMode] = useState("filter");   // 'highlight' | 'filter'

  return (
    <section id="experience" className="relative z-0">
      <div className="mb-4">
        {/* <p className="text-sm text-white/60">What I have done so far</p> */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
      </div>

      <Legend focus={focus} setFocus={setFocus} mode={mode} setMode={setMode} />

      <VerticalTimeline>
        {EXPERIENCES.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} focus={focus} mode={mode} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
