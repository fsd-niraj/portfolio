import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Niraj",
  initials: "NP",
  location: "Toronto | Mumbai",
  locationLink: "https://www.google.com/maps/place/toronto",
  description:
    "Software Engineer | AI Enthusiast",
  summary:
    "I'm an impact driven software developer experienced in building and shipping production ready applications. Currently focusing on mastering Web Application journey starting with designing system ➡ building ➡ securing ➡ testing ➡ deploying.",
  avatarUrl: "/me.jpg",
  skills: [
    "System Design",
    "Cybersecurity",
    "AI",
    "DevOps",
    "Web & Mobile Apps",
    "Full-Stack",
    "Databases"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "develop.niraj@gmail.com",
    tel: "+16477133450",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fsd-niraj",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nirajp247/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@fsd-niraj",
        icon: Icons.medium,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Expertrons",
      href: "https://expertrons.com",
      badges: [],
      location: "Mumbai, MH, India",
      title: "Software Developer",
      logoUrl: "/expertrons.png",
      start: "12/2020",
      end: "12/2022",
      description:
        ["Implemented Redis Caching system which reduced the latency by almost 65% to 75%.",
          "Integrated Sentry for client-side logs monitoring, helping identify and resolve bugs faster by 2 times.",
          "Led database optimization, achieving a 40% performance boost for app-wide APIs.",
          "Recognized as a Q1 Star Performer",
          // "Created and maintained 2 major test documentation, including test plans, test cases, and test reports of the Web Application.",
          // "Participated in architectural discussions and provided technical solutions to improve system scalability and reliability.",
          // "Developed a service that quickly transfers client data into the sales and business team’s portal.",
        ]
    },
    {
      company: "Camp K12",
      badges: [],
      href: "",
      location: "Mumbai, MH, India",
      title: "Developer Intern",
      logoUrl: "/campk12.png",
      start: "04/2019",
      end: "11/2019",
      description: [
        "Worked on landing pages, helped migrate from WordPress to HTML, CSS, and Javascript.",
        // "Integrated Sentry for client-side logs monitoring, helping identify and resolve bugs faster by 2 times.",
        // "Led database optimization, achieving a 40% performance boost for app-wide APIs.",
        // "Created and maintained 2 major test documentation, including test plans, test cases, and test reports of the Web Application.",
        // "Participated in architectural discussions and provided technical solutions to improve system scalability and reliability.",
        // "Developed a service that quickly transfers client data into the sales and business team’s portal.",
        // "Recognized as a Q1 Star Performer"
      ]
    },
  ],
  education: [
    {
      school: "Humber College",
      degree: "Enterprise Software Development",
      logoUrl: "/humber.png",
      start: "01/2023",
      end: "04/2024",
    },
    {
      school: "YCMOU",
      degree: "Bachelors of Computer Applications",
      logoUrl: "/ycmou.png",
      start: "06/2017",
      end: "05/2020",
    },
    {
      school: "University of Mumbai",
      href: "",
      degree: "Bachelors of Commerce",
      logoUrl: "/unimumbai.png",
      start: "06/2017",
      end: "05/2020",
    },
  ],
  projects: [
    {
      title: "Dependabot",
      href: "",
      dates: "Dec 2024",
      active: true,
      description:
        "Gave Github’s Dependabot a new look and feel by bringing it to the developer’s home ground, VS Code, as an extension. Read a [blog](#) based on this project.",
      technologies: [
        "Typescript", "VS Code", "GitHub APIs"
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "POS System",
      href: "",
      dates: "Jan 2024",
      active: true,
      description:
        "Designed and implemented a POS system, optimized for small-scale, offline operations to ensure fast and reliable transaction processing.",
      technologies: [
        "React.js",
        "Typescript",
        "MongoDB",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Server Observability System",
      href: "",
      dates: "Jan 2024",
      active: true,
      description:
        "This observability system collects metrics like methods, route, status code, time of an API and a specific route with the help of Prometheus",
      technologies: [
        "Grafana",
        "Prometheus",
        "Loki",
        "Nodejs",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Crypto Exchange App",
      href: "",
      dates: "Sept 2024",
      active: true,
      description:
        "Coded a centralized crypto exchange platform, allowing a user to swap and stake their crypto very securely",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Mantine",
      dates: "",
      location: "Remote - Canada",
      type: "Open-Source",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJWqfPjritCCxs9EbQuN11m9fX27x4ln5nlg&s",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mantinedev/mantine",
        },
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://mantine.dev/",
        },
      ],
    },
  ],
} as const;
