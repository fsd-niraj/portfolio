"use client";
import { FlipWords } from "@/components/ui/Filpwords";
import { homePageData } from "../data";
import { motion } from "motion/react";
import { LIST_CONTAINER_VARIANTS, LIST_ITEM_VARIANTS } from "../constants";
import { Link } from "@/components/ui/Link";

export default function Home() {

  const Highlight = ({ text }: { text: string }) => {
    return <span className="text-black dark:text-white">{text}</span>
  }

  return (

    <>
      <div className="max-w-2xl m-auto p-8 font-[family-name:var(--font-geist-sans)] flex flex-col h-screen gap-4 cursor-default z-1">
        <motion.main className="grow" variants={LIST_CONTAINER_VARIANTS} initial="hidden" animate="visible">
          <motion.h1 variants={LIST_ITEM_VARIANTS} className="my-2 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-400">@fsd-niraj
          </motion.h1>
          <motion.p variants={LIST_ITEM_VARIANTS} className="leading-snug mt-4 mb-6">{homePageData.summary}
          </motion.p>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">Trying to be a <span className="line-through">100x dev</span> 1x better dev daily.
          </motion.p>
          <motion.p variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-zinc-400 leading-snug mt-4 mb-6">
            Much interested in <FlipWords words={homePageData.interests} duration={1500} />
          </motion.p>
          <motion.div variants={LIST_ITEM_VARIANTS}>
            My knowledge portfolio includes readings from <br />
            {homePageData.following.map((name, i) =>
              <motion.div key={i}> - <Link href={name.href} title={name.name} /> <br /></motion.div>
            )}
          </motion.div>
          <motion.h2 variants={LIST_ITEM_VARIANTS} className="my-3">Career timeline so far:</motion.h2>
          <motion.div variants={LIST_ITEM_VARIANTS} className="text-gray-500 dark:text-gray-400">
            <motion.h4>Most recent</motion.h4>
            - Managed site reliability being a Software Engineer at Legends, Toronto. <br />
            <motion.h4>Past</motion.h4>
            - worked at an Ed-tech startup for more than <Highlight text="2" /> years in Mumbai, India. <br />
            - freelanced for <Highlight text="3+" /> companies and did <Highlight text="one" /> contract for <Highlight text="two" /> months. <br />
            - did a <Highlight text="LOTTT" /> of open-source contributions. And still doing.
          </motion.div>
          <motion.p variants={LIST_ITEM_VARIANTS} className="my-4">Open for project discussions, coffee-chats <Link href="mailto:develop.niraj@gmail.com" title="develop.niraj@gmail.com" /> </motion.p>
        </motion.main>
        <footer>
          <motion.div variants={LIST_CONTAINER_VARIANTS}
            initial="hidden" animate="visible" className="flex justify-center tracking-tight gap-4">
            {homePageData.social.filter(s => s.show).map((s, i) =>
              <Link href={s.href} title={s.name} key={i} />
            )}
          </motion.div>
        </footer>
      </div>
    </>
  );
}
