import { Anchor, Box, Text, Title } from "@mantine/core";

export default function Home() {

  const greeting = "Hi, I'm Niraj"

  const summary = [
    "I'm a software developer based in Toronto.",
    "I'm passionate about building secure and scalable yet impactful products for everyone.",
    "Currently focusing on mastering Web and Mobile Application journey starting with designing system → building → securing → testing → deploying incuding both frontend and backend."
  ]

  const socialMedia = [
    { name: "LinkedIn", href: "https://linkedin.com/in/nirajp247" },
    { name: "Github", href: "https://github.com/fsd-niraj" },
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
      <Box py="sm">
        <Text>{greeting}</Text>

        <Box my="md">
          {summary.map((d, i) =>
            <Text key={i} mb="sm">{d}</Text>
          )}
        </Box>

        <Title order={5}>Projects</Title>
        {projects.map((d, i) => <p key={i}>{d.name} {d.link && <a href={d.link}>Link</a>}</p>)}
        <Title order={5}>Open Source</Title>
        {openSource.map((d, i) => <p key={i}>{d.name} {d.link && <a href={d.link}>Link</a>}</p>)}
        <Title order={5}>Blogs</Title>
        {blogs.map((d, i) => <p key={i}>{d.name} {d.link && <a href={d.link}>Link</a>}</p>)}

        {socialMedia.map((link, index) =>
          <><Anchor href={link.href} key={index}>{link.name}</Anchor>{index !== socialMedia.length - 1 && " · "}</>
        )}


      </Box >
    </>
  );
}
