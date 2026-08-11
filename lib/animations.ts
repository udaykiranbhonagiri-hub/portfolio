import { Variants } from "framer-motion";

/* ===========================
   Fade Up
=========================== */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  }),
};

/* ===========================
   Fade Left
=========================== */

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* ===========================
   Fade Right
=========================== */

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

/* ===========================
   Scale In
=========================== */

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* ===========================
   Stagger Container
=========================== */

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ===========================
   Floating Animation
=========================== */

export const floating = {
  animate: {
    y: [0, -10, 0],

    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ===========================
   Rotation
=========================== */

export const rotateSlow = {
  animate: {
    rotate: 360,

    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};