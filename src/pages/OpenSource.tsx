import { Group, Avatar, Text, Accordion, List, Title } from '@mantine/core';

export default function Opensource() {

  const charactersList = [
    {
      image: 'https://avatars.githubusercontent.com/u/54469796?s=48&v=4',
      label: 'Supabase',
      description: 'The open source Firebase alternative. Supabase gives you a dedicated Postgres database to build your web, mobile, and AI applications.',
      content: ["Number one PR"],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/9828093?s=48&v=4',
      label: 'Mattermost',
      description: 'Mattermost is an open source platform for secure collaboration across the entire software development lifecycle.',
      content: ["Number one Pr.", "Number 2 Pr"],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/79146003?s=48&v=4',
      label: 'Mantine',
      description: 'Mattermost is an open source platform for secure collaboration across the entire software development lifecycle.',
      content: ["Number one Pr.", "Number 2 Pr"],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/161534807?s=48&v=4',
      label: 'Stack Auth',
      description: 'Open-source Auth0/Clerk alternative.',
      content: ["Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/62968818?s=48&v=4',
      label: 'Payload',
      description: 'Payload is the open-source, fullstack Next.js framework, giving you instant backend superpowers. Get a full TypeScript backend and admin panel instantly.',
      content: ['Fixd x by doing y. PR number #123', "Fixed n by doing m. PR number 3"],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/119600397?s=48&v=4',
      label: 'Twenty',
      description: 'Building a modern alternative to Salesforce, powered by the community.',
      content: ['Fixd x by doing y. PR number #123', "Fixed n by doing m. PR number 3"],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/23416667?s=48&v=4',
      label: 'Chatwoot',
      description: 'Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc. 🔥💬',
      content: ['Fixd x by doing y. PR number #123', "Fixed n by doing m. PR number 3"],
    },
    {
      image: 'https://avatars.githubusercontent.com/u/66570915?s=48&v=4',
      label: 'SST',
      description: 'Build full-stack apps on your own infrastructure.',
      content: ['Fixd x by doing y. PR number #123', "Fixed n by doing m. PR number 3"],
    },
  ];

  interface AccordionLabelProps {
    label: string;
    image: string;
    description: string;
    content?: string[]
  }

  function AccordionLabel({ label, image, description }: AccordionLabelProps) {
    return (
      <Group wrap="nowrap">
        <Avatar src={image} radius="xl" size="md" />
        <div>
          <Text>{label}</Text>
          <Text size="sm" c="dimmed" fw={400}>
            {description}
          </Text>
        </div>
      </Group>
    );
  }

  const items = charactersList.map((item, key) => (
    <Accordion.Item value={key.toString()} key={key}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <List p="0" m="0" type='ordered'>
          {item.content.map((c, cid) =>
            <List.Item>
              <Text size="sm" key={cid}>{c}</Text>
            </List.Item>
          )}
        </List>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Title order={3}>Open Source Contributions</Title>
      <Accordion chevronPosition="right" variant="contained" py="md">
        {items}
      </Accordion>
    </>
  )
}