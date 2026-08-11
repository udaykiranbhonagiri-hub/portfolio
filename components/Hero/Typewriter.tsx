"use client";

import { useEffect, useState } from "react";
import { portfolio } from "../../data/portfolio";

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

export default function Typewriter() {
  const roles = portfolio.roles;

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const updatedText = currentRole.substring(0, text.length + 1);

        setText(updatedText);

        if (updatedText === currentRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, PAUSE_DURATION);
        }
      } else {
        const updatedText = currentRole.substring(0, text.length - 1);

        setText(updatedText);

        if (updatedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <h2 className="mt-6 min-h-[48px] text-2xl font-semibold text-blue-400 md:text-3xl">
      {text}
      <span className="ml-1 animate-pulse text-blue-300">|</span>
    </h2>
  );
}