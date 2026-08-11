"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

type FooterSocial = {
  label: string;
  href: string;
  icon: string;
};

type FooterSocialsProps = {
  socials: FooterSocial[];
};

export default function FooterSocials({
  socials,
}: FooterSocialsProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return <FaGithub size={20} />;

      case "linkedin":
        return <FaLinkedin size={20} />;

      case "email":
        return <FaEnvelope size={20} />;

      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 md:justify-end">
      {socials.map((social, index) => {
        const isExternal =
          social.href.startsWith("http://") ||
          social.href.startsWith("https://");

        return (
          <motion.a
            key={social.label}
            href={social.href}
            target={isExternal ? "_blank" : undefined}
            rel={
              isExternal
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={social.label}
            title={social.label}
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
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.12,
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-gray-400
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-500/50
              hover:bg-blue-500/10
              hover:text-blue-400
              hover:shadow-lg
              hover:shadow-blue-500/20
            "
          >
            {getIcon(social.icon)}
          </motion.a>
        );
      })}
    </div>
  );
}