"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { portfolio } from "../../data/portfolio";

export default function Logo() {
  return (
    <Link href="#hero">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="flex items-center gap-3 cursor-pointer"
      >
        {/* Logo Circle */}

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-lg
            font-bold
            text-white
            shadow-lg
            shadow-blue-500/30
          "
        >
          {portfolio.shortName}
        </div>

        {/* Name */}

        <div className="hidden sm:flex flex-col">
          <span className="text-lg font-bold text-white">
            {portfolio.name}
          </span>

          <span className="text-xs text-gray-400">
            {portfolio.title}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}