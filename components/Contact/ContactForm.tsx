"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import ContactInput from "./ContactInput";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [statusMessage, setStatusMessage] =
    useState("");

  // ================= Handle Input =================

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  // ================= Submit Form =================

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // ================= API Error =================

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send the message."
        );
      }

      // ================= Success =================

      setStatus("success");

      setStatusMessage(
        result.message ||
          "Message sent successfully."
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus("error");

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-xl
        md:p-8
      "
    >
      {/* ================= Heading ================= */}

      <div className="mb-8">
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.25em]
            text-blue-400
          "
        >
          Send a Message
        </p>

        <h3
          className="
            mt-2
            text-2xl
            font-bold
            text-white
            md:text-3xl
          "
        >
          Lets Talk
        </h3>

        <p className="mt-3 text-gray-400">
          Have a project, opportunity, or idea?
          Send me a message.
        </p>
      </div>

      {/* ================= Form Fields ================= */}

      <div className="space-y-6">
        {/* Name */}

        <ContactInput
          label="Name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}

        <ContactInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Subject */}

        <ContactInput
          label="Subject"
          name="subject"
          placeholder="What would you like to discuss?"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        {/* Message */}

        <ContactInput
          label="Message"
          name="message"
          placeholder="Write your message..."
          value={formData.message}
          onChange={handleChange}
          required
          textarea
        />
      </div>

      {/* ================= Success Message ================= */}

      {status === "success" && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mt-6
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-green-500/30
            bg-green-500/10
            p-4
            text-green-400
          "
        >
          <CheckCircle
            size={20}
            className="shrink-0"
          />

          <p className="text-sm">
            {statusMessage}
          </p>
        </motion.div>
      )}

      {/* ================= Error Message ================= */}

      {status === "error" && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mt-6
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-red-500/30
            bg-red-500/10
            p-4
            text-red-400
          "
        >
          <AlertCircle
            size={20}
            className="shrink-0"
          />

          <p className="text-sm">
            {statusMessage}
          </p>
        </motion.div>
      )}

      {/* ================= Submit Button ================= */}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{
          scale: isSubmitting ? 1 : 1.02,
        }}
        whileTap={{
          scale: isSubmitting ? 1 : 0.98,
        }}
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-blue-600
          px-6
          py-4
          font-semibold
          text-white
          shadow-lg
          shadow-blue-600/20
          transition-all
          duration-300
          hover:bg-blue-500
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {isSubmitting ? (
          <>
            <span
              className="
                h-5
                w-5
                animate-spin
                rounded-full
                border-2
                border-white/30
                border-t-white
              "
            />

            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </motion.button>
    </motion.form>
  );
}