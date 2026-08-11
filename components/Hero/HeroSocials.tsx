"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { portfolio } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations";

const socials = [
  {
    name: "GitHub",
    href: portfolio.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: portfolio.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    href: `mailto:${portfolio.email}`,
    icon: FaEnvelope,
  },
];

export default function HeroSocials() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={1.4}
      className="mt-10 flex items-center gap-5"
    >
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.15,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-gray-700
              bg-white/5
              text-xl
              text-gray-300
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-500/20
              hover:text-blue-400
            "
            aria-label={social.name}
          >
            <Icon />
          </motion.a>
        );
      })}
    </motion.div>
  );
}