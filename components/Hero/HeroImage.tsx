"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Rotating Outer Ring */}

      <motion.div
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-blue-500/20
          md:h-[420px]
          md:w-[420px]
        "
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Circle */}

      <motion.div
        className="
          absolute
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-purple-500/20
          md:h-[360px]
          md:w-[360px]
        "
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Image Container */}

      <div
        className="
          relative
          z-10
          flex
          h-64
          w-64
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-blue-500/20
          bg-gradient-to-br
          from-blue-500/10
          via-purple-500/10
          to-cyan-500/10
          shadow-2xl
          shadow-blue-500/10
          md:h-80
          md:w-80
        "
      >
        <div
          className="
            flex
            h-full
            w-full
            items-center
            justify-center
            text-7xl
            md:text-8xl
          "
        >
          👨‍💻
        </div>
      </div>

      {/* Small Floating Badge */}

      <motion.div
        className="
          absolute
          -right-2
          top-8
          z-20
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-2
          text-sm
          font-semibold
          text-gray-800
          shadow-lg
          dark:border-white/10
          dark:bg-gray-900
          dark:text-gray-200
        "
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        AI + Full Stack
      </motion.div>
    </div>
  );
}