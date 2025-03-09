import { Anchor, Box } from "@mantine/core";

export default function Home() {

  const socialMedia = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/niraj" },
    { name: "Github", href: "https://www.github.com/fsd-niraj" },
    { name: "Medium", href: "https://fsd-niraj.medium.com" },
  ];

  const projects = [
    { name: "Realtime Voice Translator", link: "" },
    { name: "AI resume builder", link: "" },
    { name: "Brain tumor detector", link: "" },
    { name: "Phishing-sites detector", link: "" },
    { name: "POS System", link: "" },
    { name: "iOS and Android applications", link: "" },
  ];

  const openSource = [
    { name: "Twenty", link: "https://github.com/fsd-niraj/twenty" },
    { name: "Mattermost", link: "https://github.com/fsd-niraj/mattermost" },
    { name: "Lightdash", link: "https://github.com/fsd-niraj/lightdash" },
    { name: "Mantine", link: "https://github.com/fsd-niraj/mantine" },
    { name: "Stack Auth", link: "https://github.com/fsd-niraj/stack-auth" },
  ]

  const blogs = [
    { name: "Server Monitoring System with Grafana, Prometheus, Loki, and Node.jsTwenty", link: "" },
    { name: "Introduction to GitHub Dependabot Alerts", link: "" },
    { name: "WhatsApp notification service", link: "" },
    { name: "Building ATS-friendly resume", link: "" },
  ]

  return (
    <>
      <Box>
        <p>Hi, I'm Niraj.</p>

        <p>I'm a software developer based in Toronto, ON. I'm passionate about building secure and scalable yet impactful products for everyone.</p>

        <p>Currently I'm helping a stealth startup designing and debugging their system.</p>

        <p>Projects</p>
        {projects.map((d, i) => <p key={i}> - {d.name} {d.link && <a href={d.link}>Link</a>}</p>)}
        <p>Open Source</p>
        {openSource.map((d, i) => <p key={i}> - {d.name} {d.link && <a href={d.link}>Link</a>}</p>)}
        <p>Blogs</p>
        {blogs.map((d, i) => <p key={i}> - {d.name} {d.link && <a href={d.link}>Link</a>}</p>)}

        {socialMedia.map((link, index) =>
          <><Anchor href={link.href} key={index}>{link.name}</Anchor>{index !== socialMedia.length - 1 && " · "}</>
        )}


      </Box >
    </>
  );
}
