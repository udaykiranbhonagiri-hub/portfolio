"use client";

import { motion } from "framer-motion";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinksProps = {
  links: FooterLink[];
};

export default function FooterLinks({
  links,
}: FooterLinksProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          whileHover={{
            y: -2,
          }}
          className="
            text-sm
            font-medium
            text-gray-400
            transition-colors
            duration-300
            hover:text-blue-400
          "
        >
          {link.label}
        </motion.a>
      ))}
    </div>
  );
}