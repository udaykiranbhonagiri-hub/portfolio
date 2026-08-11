"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  primary?: boolean;
  target?: string;
  download?: boolean;
};

export default function Button({
  href,
  children,
  primary = false,
  target,
  download,
}: ButtonProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const className = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    px-6
    py-3
    font-semibold
    transition-all
    duration-300
    ${
      primary
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
        : "border border-gray-300 bg-gray-100 text-gray-900 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
    }
  `;
  if (!href) {
    return (
      <button
        type="button"
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {isExternal ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          download={download}
          className={className}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </motion.div>
  );
}