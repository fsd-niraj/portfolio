import { FlipWords } from "@/app/components/ui/Filpwords";
import { homePageData } from "./data";

export default function Home() {

  const Anchor = ({ href, title }: { href: string, title: string }) => {
    return (<>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-500 hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors duration-400">{title}</a>
      &nbsp;
    </>
    )
  }

  const Highlight = ({ text }: { text: string }) => {
    return <span className="text-black dark:text-white">{text}</span>
  }

  return (

    <>
      <div className="max-w-2xl m-auto p-8 font-[family-name:var(--font-geist-sans)] flex flex-col h-screen gap-4 cursor-default">
        <main className="grow">
          <h1 className="my-2 text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors duration-400">@fsd-niraj</h1>
          <p className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">{homePageData.summary}
          </p>
          <p className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">
            Much interested in <FlipWords words={homePageData.interests} duration={1500} />
          </p>
          <p>Cracks that inspire me daily: {homePageData.following.map((name, i) =>
            <Anchor href={name.href} title={name.name} key={i} />
          )}
          </p>
          <h2 className="my-3">What did I do?</h2>
          <p className="text-gray-500 dark:text-gray-500">
            - worked at an Ed-tech startup for more than <Highlight text="2" /> years in Mumbai, India. <br />
            - freelanced for <Highlight text="3+" /> companies and did <Highlight text="one" /> contract for <Highlight text="two" /> months. <br />
            - did a <Highlight text="LOTTT" /> of open-source contributions. And still doing.
          </p>
          <h2 className="my-3">Projects – trying to solve real ife problems.</h2>
          <p className="text-gray-500 dark:text-gray-500">
            - AI based brain tumor detector. <br />
            - CV based real time helmet detector. <br />
            - Resume builder which allowed me to apply 100+ jobs with each tailored resume.
          </p>
          <p className="my-4">Open for project discussions, coffee-chats <Anchor href="mailto:develop.niraj@gmail.com" title="develop.niraj@gmail.com" /> </p>
        </main>
        <footer>
          <div className="flex justify-center tracking-tight gap-4">
            {homePageData.social.map((s, i) =>
              <Anchor href={s.href} title={s.name} key={i} />
            )}
          </div>
        </footer>
      </div>
    </>
  );
}
