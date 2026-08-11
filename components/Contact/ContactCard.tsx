"use client";

import { motion } from "framer-motion";

type ContactCardProps = {
  title: string;
  value: string;
  href: string;
  icon: string;
  delay?: number;
};

export default function ContactCard({
  title,
  value,
  href,
  icon,
  delay = 0,
}: ContactCardProps) {
  const isExternalLink =
    href.startsWith("http://") ||
    href.startsWith("https://");

  return (
    <motion.a
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-lg
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:bg-blue-500/10
        hover:shadow-xl
        hover:shadow-blue-500/10
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-blue-500/10
          text-2xl
          transition-all
          duration-300
          group-hover:bg-blue-500/20
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div className="min-w-0">
        <p
          className="
            text-sm
            font-medium
            text-gray-500
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm
            font-semibold
            text-gray-200
            transition-colors
            duration-300
            group-hover:text-blue-400
          "
        >
          {value}
        </p>
      </div>
    </motion.a>
  );
}