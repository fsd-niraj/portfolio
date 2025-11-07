import { Variants } from 'motion/react';

export const LIST_CONTAINER_VARIANTS: Variants = {
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

export const LIST_ITEM_VARIANTS: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
