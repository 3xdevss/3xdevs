"use client";

import React, { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ContactForm() {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 mt-8">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        className={`px-6 py-3 rounded-lg border transition-all ${
          isDarkMode
            ? "bg-white/10 border-white/20 text-white placeholder-white/60"
            : "bg-black/10 border-black/20 text-black placeholder-black/60"
        } focus:border-[var(--accent-color)] focus:outline-none`}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        className={`px-6 py-3 rounded-lg border transition-all ${
          isDarkMode
            ? "bg-white/10 border-white/20 text-white placeholder-white/60"
            : "bg-black/10 border-black/20 text-black placeholder-black/60"
        } focus:border-[var(--accent-color)] focus:outline-none`}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
        rows={5}
        className={`px-6 py-3 rounded-lg border transition-all resize-none ${
          isDarkMode
            ? "bg-white/10 border-white/20 text-white placeholder-white/60"
            : "bg-black/10 border-black/20 text-black placeholder-black/60"
        } focus:border-[var(--accent-color)] focus:outline-none`}
        required
      ></textarea>

      <button
        type="submit"
        className="px-8 py-3 rounded-full font-semibold transition-all bg-[var(--accent-color)] text-[var(--bg-primary)] hover:opacity-90 shadow-md cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
