"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

// Compact chip
function SkillPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs md:text-sm text-white/90">
      {children}
    </span>
  );
}

// A single row: Section title + skills
function SkillRow({ title, items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 py-4">
      <div className="sm:col-span-1">
        <h4 className="font-semibold tracking-tight">{title}</h4>
      </div>

      {/* Chips layout (default) */}
      <div className="sm:col-span-3">
        <div className="flex flex-wrap gap-2">
          {items.map((s) => (
            <SkillPill key={s}>{s}</SkillPill>
          ))}
        </div>
      </div>
    </div>
  );
}

const SKILLS = {
  "Core Languages": ["Python", "C"],
  "Other Programming Languages": ["JavaScript", "C++", "Java", "HTML/CSS", "Scala"],
  "Frameworks & Libraries": ["Node.js", "AngularJS", "PySpark", "PyTorch", "Keras", "TensorFlow", "OpenCV", "Streamlit"],
  "Databases": ["MongoDB", "Redis", "MySQL", "Elasticsearch", "Milvus", "Hadoop", "DynamoDB"],
  "Tools & Platforms": [
    "Docker", "Kubernetes", "AWS", "Azure", "Jenkins",
    "GitHub", "GitLab", "JIRA", "Postman", "Swagger",
    "Power BI", "Tableau", "Google Analytics"
  ],
};


const publications = [
  { title: "Pruning for Performance: Efficient Idiom and Metaphor Classification in Low-Resource Konkani Using mBERT", href: "https://arxiv.org/abs/2506.02005", external: true },
  { title: "Comparative Analysis of Deep Learning techniques for Malaria Detection", href: "https://ieeexplore.ieee.org/document/9972167", external: true },
  { title: "System and method for early detection and post disease detection of dementia patients", href: "https://ieeexplore.ieee.org/document/9885629", external: true },
  { title: "Classification of Garbage For Robotic System Using Deep Learning Techniques", href: "https://ieeexplore.ieee.org/document/9788240", external: true },
  { title: "Innovative Teaching and Learning System", href: "http://ijircce.com/admin/main/storage/app/pdf/GV40CdSbq5UCiHZThcc1wMyoAY2weBvOqClvBbUV.pdf", external: true },
];



// Whole section (stacked; no cards)
function SoftwareSkillsSection() {
  return (
    <section aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="sr-only">Software Skills</h3>

      {/* Stacked rows with subtle separators to keep it tidy */}
      <div className="divide-y divide-white/10">
        {Object.entries(SKILLS).map(([title, items]) => (
          <SkillRow key={title} title={title} items={items} />
        ))}
      </div>
    </section>
  );
}

const TAB_DATA = [
  {
    title: "Software Skills",
    id: "software_skills",
    content: <SoftwareSkillsSection  />, // ← use component instead of raw markup
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <span className="font-semibold">University of Southern California</span>
          <ul className="list-disc pl-6">
            <li>Master of Science in Computer Science</li>
            <li>GPA: 3.81/4.00</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">University of Mumbai</span>
          <ul className="list-disc pl-6">
            <li>Bachelor of Engineering</li>
            <li>Computer Engineering</li>
            <li>GPA: 3.83/4.0</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Publications",
    id: "publication",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        {publications.map((p) => (
          <li key={p.title}>
            {p.external ? (
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-blue-300">
                {p.title}
              </a>
            ) : (
              <Link href={p.href} className="underline underline-offset-2 hover:text-blue-300">
                {p.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("software_skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a fourth-year Computer Engineering student at the University of Florida, with a passion for 
          understanding how technology works. From a young age, I was fascinated by how everyday objects like cell phones 
          enable communication over long distances. While I’ve always enjoyed using technology, building it is where my true interest lies.
           In high school, I developed a love for programming and problem-solving, 
          which led me to pursue a Bachelor of Science in Computer Engineering, with a minor in Business Administration at UF. 
        
          In my free time, I enjoy interfacing with new technologies and microprocessor systems. I also enjoy learning about AI in 
          embedded systems and software development. The purpose of this website is to showcase my passion for technology and my skills. Please feel
          free to leave any feedback, thank you!
          
         
          
         
          

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("software_skills")}
              active={tab === "software_skills"}
            >
              {" "}
              Software Skills{" "}
            </TabButton>
    
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("publication")}
              active={tab === "publication"}
            >
              {" "}
              Publication{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
