import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Niraj Panchal',
    title: 'Software Engineer',
    tagline: 'Trying to be 1x better dev daily.',
    summary:
      "Impact-driven developer, tinkerer, and open-source enthusiast. I build things that solve real problems — from real-time analytics dashboards to AI-powered inspection tools.",
    location: 'Toronto, Canada',
    email: 'develop.niraj@gmail.com',
    available: true,
  },
  experience: [
    {
      title: 'Software Engineer',
      company: 'Legends',
      location: 'Toronto, Canada',
      period: '2023 — Present',
      description:
        'Built POS dashboards with real-time analytics, improved site reliability and monitoring systems, implemented networking solutions for distributed systems.',
      current: true,
    },
    {
      title: 'Full Stack Developer',
      company: 'Ed-tech Startup',
      location: 'Mumbai, India',
      period: '2021 — 2023',
      description:
        'Developed and maintained educational platform features, worked with MERN stack and cloud technologies, collaborated closely with the product team.',
    },
    {
      title: 'Freelance Developer',
      company: 'Various Clients',
      location: 'Remote',
      period: '2020 — 2021',
      description:
        'Delivered projects for 3+ companies across diverse tech stacks and requirements, including a 2-month contract engagement.',
    },
  ],
  projects: [
    {
      title: 'POS Analytics Dashboard',
      description:
        'Real-time point-of-sale dashboards with live analytics, improving operational visibility for large-scale venue management.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      year: '2024',
    },
    {
      title: 'AI-Powered Site Inspector',
      description:
        'Computer vision application that analyzes site images to determine maintenance needs, replacing manual on-site inspections.',
      tech: ['Python', 'Computer Vision', 'React Native', 'AWS'],
      year: '2024',
      impact: '90% reduction in verification time',
    },
    {
      title: 'Ed-tech Learning Platform',
      description:
        'Full-stack educational platform serving thousands of students with interactive learning features and real-time collaboration tools.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSockets'],
      year: '2022',
    },
  ],
  stack: [
    'TypeScript',
    'JavaScript',
    'Python',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Azure',
    'Docker',
    'Git',
    'Linux',
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/fsd-niraj', newTab: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/nirajp247', newTab: true },
    { name: 'X', href: 'https://x.com/fsd_niraj', newTab: true },
    { name: 'Medium', href: 'https://medium.com/@fsd-niraj', newTab: true },
  ],
};
