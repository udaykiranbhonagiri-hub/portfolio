"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import Button from "../ui/Button";
import { portfolio } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations";

export default function HeroButtons() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={1.2}
      className="mt-10 flex flex-wrap items-center gap-5"
    >
      {/* View Projects */}

      <Button
        href="#projects"
        primary
      >
        <span className="flex items-center gap-2">
          View Projects
          <ArrowRight size={18} />
        </span>
      </Button>

      {/* Download Resume */}

      <Button
        href={portfolio.resume}
        target="_blank"
        download
      >
        <span className="flex items-center gap-2">
          Download Resume
          <Download size={18} />
        </span>
      </Button>
    </motion.div>
  );
}