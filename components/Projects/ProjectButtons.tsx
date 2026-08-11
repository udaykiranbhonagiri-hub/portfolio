"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Button from "../ui/Button";
import { fadeUp } from "../../lib/animations";

type ProjectButtonsProps = {
  github: string;
  live: string;
};

export default function ProjectButtons({
  github,
  live,
}: ProjectButtonsProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-8 flex flex-wrap gap-4"
    >
      {/* GitHub */}

      <Button
        href={github}
        target="_blank"
      >
        <>
          <FaGithub size={18} />
          GitHub
        </>
      </Button>

      {/* Live Demo */}

      {live && (
        <Button
          href={live}
          target="_blank"
          primary
        >
          <>
            <ExternalLink size={18} />
            Live Demo
          </>
        </Button>
      )}
    </motion.div>
  );
}