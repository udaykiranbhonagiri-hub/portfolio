"use client";

import { motion } from "framer-motion";

type ContactInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
  required?: boolean;
  textarea?: boolean;
};

export default function ContactInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  textarea = false,
}: ContactInputProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
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
      }}
      className="flex flex-col gap-2"
    >
      {/* Label */}

      <label
        htmlFor={name}
        className="
          text-sm
          font-medium
          text-gray-300
        "
      >
        {label}
      </label>

      {/* Input */}

      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={6}
          className="
            w-full
            resize-none
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            backdrop-blur-md
            transition-all
            duration-300
            placeholder:text-gray-600
            focus:border-blue-500
            focus:bg-blue-500/5
            focus:ring-2
            focus:ring-blue-500/20
          "
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            backdrop-blur-md
            transition-all
            duration-300
            placeholder:text-gray-600
            focus:border-blue-500
            focus:bg-blue-500/5
            focus:ring-2
            focus:ring-blue-500/20
          "
        />
      )}
    </motion.div>
  );
}