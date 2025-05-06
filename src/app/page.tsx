"use client";
import { FlipWords } from "@/components/ui/Filpwords";
import { homePageData } from "../data";
import { motion, Variants } from "motion/react";

export default function Home() {

  const Anchor = ({ href, title }: { href: string, title: string }) => {
    return (<>
      <motion.a variants={LIST_ITEM_VARIANTS} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-500 hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors duration-400">{title}</motion.a>
      &nbsp;
    </>
    )
  }

  const Highlight = ({ text }: { text: string }) => {
    return <span className="text-black dark:text-white">{text}</span>
  }

  const LIST_CONTAINER_VARIANTS: Variants = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05
      }
    }
  };

  const LIST_ITEM_VARIANTS: Variants = {
    hidden: {
      y: -10,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (

    <>
      <div className="max-w-2xl m-auto p-8 font-[family-name:var(--font-geist-sans)] flex flex-col h-screen gap-4 cursor-default">
        <motion.main className="grow" variants={LIST_CONTAINER_VARIANTS} initial="hidden" animate="visible">
          <motion.h1 variants={LIST_ITEM_VARIANTS} className="my-2 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-400">@fsd-niraj</motion.h1>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">{homePageData.summary}
          </motion.p>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">Trying to be a <span className="line-through">100x dev</span> 1x better dev daily.
          </motion.p>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">
            Much interested in <FlipWords words={homePageData.interests} duration={1500} />
          </motion.p>
          <motion.p variants={LIST_ITEM_VARIANTS}>Cracks that inspire me daily: {homePageData.following.map((name, i) =>
            <Anchor href={name.href} title={name.name} key={i} />
          )}
          </motion.p>
          <motion.h2 variants={LIST_ITEM_VARIANTS} className="my-3">What did I do?</motion.h2>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-gray-500">
            - worked at an Ed-tech startup for more than <Highlight text="2" /> years in Mumbai, India. <br />
            - freelanced for <Highlight text="3+" /> companies and did <Highlight text="one" /> contract for <Highlight text="two" /> months. <br />
            - did a <Highlight text="LOTTT" /> of open-source contributions. And still doing.
          </motion.p>
          <motion.h2 variants={LIST_ITEM_VARIANTS} className="my-3">Projects – trying to solve real ife problems.</motion.h2>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-gray-500">
            - AI based brain tumor detector. <br />
            - CV based real time helmet detector. <br />
            - Resume builder which allowed me to apply 100+ jobs with each tailored resume.
          </motion.p>
          <motion.p variants={LIST_ITEM_VARIANTS} className="my-4">Open for project discussions, coffee-chats <Anchor href="mailto:develop.niraj@gmail.com" title="develop.niraj@gmail.com" /> </motion.p>
        </motion.main>
        <footer>
          <motion.div variants={LIST_CONTAINER_VARIANTS}
            initial="hidden" animate="visible" className="flex justify-center tracking-tight gap-4">
            {homePageData.social.map((s, i) =>
              <Anchor href={s.href} title={s.name} key={i} />
            )}
          </motion.div>
        </footer>
      </div>
    </>
  );
}
