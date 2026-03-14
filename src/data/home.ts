export const hero = {
  name: 'Niraj',
  role: 'developer',
  fields: 'Product and AI',
};

export const glance = [
  { tenure: '3.5+', description: 'years of experience' },
  { tenure: '2', description: 'freelance' },
];

export const projects = [
  {
    img: '/assets/image3.png',
    title: 'HyperX NGENUITY - MacOS',
    category: 'project',
    href: 'https://github.com/fsd-niraj/hyperx-macos',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/008/911/small_2x/blue-noise-textured-gradient-background-grainy-blurred-landing-page-backdrop-website-header-poster-banner-design-photo.jpg',
    title: 'Youtube FaceLess',
    category: 'project',
    href: '#',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/008/911/small_2x/blue-noise-textured-gradient-background-grainy-blurred-landing-page-backdrop-website-header-poster-banner-design-photo.jpg',
    title: 'AI Receptionist',
    category: 'project',
    href: '#',
  },
  {
    img: '/assets/image2.png',
    title: 'Vibe coded landing page',
    category: 'project',
    href: '#',
  },
  {
    img: '/assets/image1.png',
    title: 'Vibe coded dashboard',
    category: 'project',
    href: '#',
  },
];

export const blogs = [
  {
    date: 'Dec 8, 2025',
    title: "Why Interac Isn't as Fast as UPI",
    subTitle: '',
    href: 'https://medium.com/@fsd-niraj/why-interac-isnt-as-fast-as-upi-a11a866ea799',
  },
  {
    date: 'April 30, 2025',
    title: 'How iOS and Android Power Live App Icons',
    subTitle:
      'Unlocking the mystery behind the live Clock and Calendar icons — and why you can’t replicate them in your own apps (yet as of April 2025).',
    href: 'https://medium.com/gitconnected/real-time-app-icons-hmm-lets-read-about-it-a31192a14782',
  },
  {
    date: 'Dec 6, 2024',
    title: 'An Introduction to GitHub Dependabot Alerts',
    subTitle:
      'Discover how GitHub Dependabot alerts help developers automate dependency management, detect vulnerabilities, and maintain a secure and compliant codebase effortlessly.',
    href: 'https://medium.com/gitconnected/dependabot-start-using-it-right-now-b765828ae83d',
  },
  {
    date: 'Sept 24, 2024',
    title: 'What Happens When a Message is Deleted on WhatsApp',
    subTitle:
      "Exploring WhatsApp's Notification Handling for Deleted Messages with System Design Insights and Code Samples.",
    href: 'https://medium.com/gitconnected/how-does-whatsapp-changes-notifications-once-message-is-deleted-c3a0f0f265c5',
  },
  {
    date: 'Sept 19, 2024',
    title: 'Building ATS friendly resume',
    subTitle:
      'Master the Art of ATS Optimization: Structure Your Resume for Maximum Parsing Accuracy',
    href: 'https://medium.com/gitconnected/how-to-get-a-100-resume-parse-rate-a-developers-guide-c27fc5d09767',
  },
  {
    date: 'June 24, 2024',
    title: 'Server monitoring system with grafana',
    subTitle: '',
    href: 'https://medium.com/gitconnected/building-a-robust-server-monitoring-system-with-grafana-prometheus-loki-and-node-js-455d1e170407',
  },
];

export const books = [
  { title: 'Think Straight', author: 'Darius foroux', category: 'mind' },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kelppmann',
    category: 'tech',
  },
  {
    title: 'Database Internals',
    author: 'Alex petrov',
    category: 'tech',
  },
  {
    title: 'Zanzibar',
    author: 'Google',
    category: 'tech',
  },
];

export type SocialIconKey =
  | 'github'
  | 'twitter'
  | 'linkedin'
  | 'instagram'
  | 'email';

export const socialLinks: {
  url: string;
  label: string;
  iconKey: SocialIconKey;
}[] = [
  { url: '#', label: 'GitHub', iconKey: 'github' },
  { url: '#', label: 'Twitter', iconKey: 'twitter' },
  { url: '#', label: 'LinkedIn', iconKey: 'linkedin' },
  { url: '#', label: 'Instagram', iconKey: 'instagram' },
];
