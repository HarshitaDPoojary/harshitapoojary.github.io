import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    uf,
    ipg,
    uhg,
    isa,
    angular,
    python,
    pytorch,
    java,
    cpp,
    cs,
    dotnet,
    sqlserver,
    familyguy,
    propertyprobe,
    trainOfFour,
    cachesim,
    minesweeper,
    portfolioWebsite,
    mlcv
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Researcher",
      icon: mobile,
    },
    {
      title: "Computer Science & Math Student",
      icon: backend,
    },
    {
      title: "Student Organization Leader",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C#",
      icon: cs,
    },
    {
      name: ".NET",
      icon: dotnet,
    },
    {
      name: "SQL Server",
      icon: sqlserver
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Undergraduate Researcher",
      company_name: "University of Florida - Computational Reasoning Group",
      icon: uf,
      iconBg: "#F3F3F3",
      date: "Jan 2022 - Nov 2022",
      points: [
        "Optimized learning in a programming course by investigating student characteristics and behaviors.",
        "Developed a statistical model in Python using Pandas, NumPy, Matplotlib, and Seaborn that established a correlation between students' procrastination & their performance in the course (p = 0.0035).",
        "Published results and presented at Koli Calling 2022, an international computing education conference.",
      ],
    },
    {
      title: "IT Security Intern",
      company_name: "Intertape Polymer Group",
      icon: ipg,
      iconBg: "#F3F3F3",
      date: "May 2022 - Aug 2022",
      points: [
        "Managed employees’ cyber safety practices to ensure implementation of cybersecurity standards.",
        "Documented the company’s IT network infrastructure to more efficiently plan for cybersecurity threats.",
        "Constructed application network diagrams using Microsoft Visio.",
      ],
    },
    {
      title: "Director, Freshman Leadership Experience",
      company_name: "University of Florida - Indian Students Association",
      icon: isa,
      iconBg: "#F3F3F3",
      date: "June 2022 - May 2023",
      points: [
        "Helped a cohort of over 150 first-year college students across academic disciplines navigate university life & become student leaders.",
        "Planned and hosted a variety of informative meetings, socials, and profesisonal networking events over the year.",
        "Drove a 50% increase in membership and engagement from the previous year.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "UnitedHealth Group",
      icon: uhg,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Aug 2023",
      points: [
        "Developed and maintained a custom identity and access management product that services 400,000+ employees.",
        "Built backend and database infrastructure to support data flow for new AI feature, streamlining access review process by 50%.",
        "Built and unit/regression tested features for .NET web APIs and console apps using C#, TypeScript, SQL Server, and Postman.",
        "Communicated ideas & suggestions in scrum ceremonies including sprint planning, daily stand-ups, and sprint review."
      ],
    },
    {
      title: "External Vice President",
      company_name: "University of Florida - Indian Students Association",
      icon: isa,
      iconBg: "#F3F3F3",
      date: "May 2023 - Present",
      points: [
        "Managed one of the largest student-run organizations at the University of Florida (over 400 members).",
        "Handled external relations, cultural programs, and event planning (over 1000 attendees).",
      ],
    },
    {
      title: "Machine Learning Researcher",
      company_name: "University of Florida - Smart Medical Informatics Learning & Evaluation Lab",
      icon: uf,
      iconBg: "#F3F3F3",
      date: "Jan 2023 - Present",
      points: [
        "Founded a project to improve deep learning models’ accuracy in Parkinson’s prediction with generative AI data augmentation.",
        "Achieved over 70% base accuracy in Parkinson’s disease prediction from retinal scans with machine learning classifiers.",
        "Distributed training and testing of models in PyTorch using the HiPerGator supercomputer at UF.",
        "Wrote research proposals and supplements to secure over $2,000 in funding for the lab."
      ],
    },
  ];
  
  const projects = [
    {
      name: "Lightweight Optimized Integrated Search",
      description:
        "LOIS: the Family Guy Search Engine! Look for your favorite episodes based on dialogue and characters in that episode.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        }
      ],
      image: familyguy,
      source_code_link: "https://github.com/AkshayAshok2/family-guy-search-engine",
    },
    {
      name: "PropertyProbe",
      description:
        "Web application that allows prospective real estate investors to quickly and easily find pre-foreclosure properties and relevant information.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "go",
          color: "blue-text-gradient",
        }
      ],
      image: propertyprobe,
      source_code_link: "https://github.com/AkshayAshok2/property-probe",
    },
    {
      name: "Train of Four",
      description:
        "App that uses computer vision to aid in dosing of anesthesia in pre-procedure patients by analyzing muscle reactivity.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
      ],
      image: trainOfFour,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cache Simulator",
      description:
        "Emulates a memory cache using both the \"first-in, first-out\" and \"least recently used\" principles.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
      ],
      image: cachesim,
      source_code_link: "https://github.com/AkshayAshok2/cache-simulator",
    },
    {
      name: "Minesweeper",
      description:
        "Recreated the timeless classic game in C++.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
      ],
      image: minesweeper,
      source_code_link: "https://github.com/AkshayAshok2/minesweeper",
    },
    {
      name: "Machine Learning",
      description:
        "Smaller projects and bits of code to learn about and practice new technologies in the realm of AI, machine learning, and computer vision!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
      ],
      image: mlcv,
      source_code_link: "https://github.com/AkshayAshok2/ml-cv-practice",
    },
    {
      name: "Portfolio Website",
      description:
        "Where you are now!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
      ],
      image: portfolioWebsite,
      source_code_link: "https://github.com/AkshayAshok2/AkshayAshok2.github.io",
    },
  ];
  
  export { services, technologies, experiences, projects };