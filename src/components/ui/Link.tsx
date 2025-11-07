import { LIST_ITEM_VARIANTS } from "@/constants";
import { motion, Variants } from "motion/react";

export const Link = ({ href, title, newTab }: { href: string, title: string, newTab?: boolean }) => {
  return (<>
    <motion.a variants={LIST_ITEM_VARIANTS} href={href} target={newTab ? "_blank" : ""} rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:underline hover:text-green-600 dark:hover:text-green-400 transition-colors duration-400">{title}</motion.a>
    &nbsp;
  </>
  )
}