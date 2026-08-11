"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1.8,
        duration: 0.8,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        items-center
        gap-2
        text-gray-400
        hover:text-blue-400
        transition-colors
        z-20
      "
    >
      {/* Scroll Text */}

      <span
        className="
          text-xs
          uppercase
          tracking-[0.35em]
        "
      >
        Scroll
      </span>

      {/* Mouse */}

      <div
        className="
          flex
          h-10
          w-6
          justify-center
          rounded-full
          border-2
          border-current
          pt-2
        "
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-2
            w-2
            rounded-full
            bg-current
          "
        />
      </div>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </motion.a>
  );
}