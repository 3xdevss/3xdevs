"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import FloatingStars from "@/components/FloatingStars";

export default function ContactUsPage() {
  const [tickIndex, setTickIndex] = useState(6);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Determine if light mode (0-5) or dark mode (6-11)
  const isDarkMode = tickIndex >= 6;

  // Update document class for light/dark mode
  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [isDarkMode]);

  const lightModeGradients = "from-[#e6f7ef] to-[#f4f3ec]";
  const darkModeGradients = "from-[#204523] to-[#061109]";
  const themeGradient = isDarkMode ? darkModeGradients : lightModeGradients;
  const heroTextColor = isDarkMode ? "text-[#abf7da]" : "text-[#2d2c2a]";
  const secondaryTextColor = isDarkMode ? "text-emerald-100/70" : "text-emerald-900/70";
  const tickActiveColor = isDarkMode ? "bg-[#abf7da]" : "bg-[#3b7a57]";
  const tickInactiveColor = isDarkMode ? "bg-white/30 hover:bg-white/70" : "bg-black/20 hover:bg-black/40";
  const tickLabelColor = isDarkMode ? "text-[#abf7da]" : "text-[#3b7a57]";

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
    <div
      className={`min-h-screen flex flex-col items-center justify-between pb-12 transition-all duration-500 bg-gradient-to-b ${themeGradient}`}
    >
      <Header />

      <main className="w-full max-w-[1280px] px-6 md:px-12 flex-1 flex flex-col items-center justify-center relative z-10">
        <FloatingStars />

        {/* Hero Section */}
        <section className="text-center py-20 md:py-32 max-w-2xl flex flex-col items-center gap-8 relative select-none">
          <h1 className={`text-5xl md:text-7xl font-black tracking-tight leading-[1.1] ${heroTextColor}`}>
            Contact Us
          </h1>

          <p className={`text-base md:text-lg leading-relaxed ${isDarkMode ? "text-emerald-100/70" : "text-emerald-900/70"} font-medium max-w-xl`}>
            Have a project in mind? Get in touch with us and let&apos;s create something amazing together.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col gap-4 mt-8">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`px-6 py-3 rounded-lg border transition-all ${
                isDarkMode
                  ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-[#9bf0c9]"
                  : "bg-black/10 border-black/20 text-black placeholder-black/60 focus:border-[#3b7a57]"
              } focus:outline-none`}
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
                  ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-[#9bf0c9]"
                  : "bg-black/10 border-black/20 text-black placeholder-black/60 focus:border-[#3b7a57]"
              } focus:outline-none`}
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
                  ? "bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-[#9bf0c9]"
                  : "bg-black/10 border-black/20 text-black placeholder-black/60 focus:border-[#3b7a57]"
              } focus:outline-none`}
              required
            ></textarea>

            <button
              type="submit"
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                isDarkMode
                  ? "bg-[#9bf0c9] text-[#121c17] hover:bg-[#abf7da]"
                  : "bg-[#3b7a57] text-white hover:bg-[#2d6246]"
              }`}
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="w-full max-w-[1280px] px-6 md:px-12 mt-16 md:mt-24 pt-12 border-t border-white/5 relative z-10">
        <div className={`w-full flex items-center gap-6 select-none`}>
          <div className={`flex gap-2 ${isDarkMode ? "bg-black/40 border border-white/5" : "bg-white/40 border border-black/10"} p-1 rounded-full shrink-0 transition-colors`}>
            {(["emerald", "violet", "indigo"] as const).map((t) => (
              <button
                key={t}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all ${
                  t === "emerald"
                    ? isDarkMode
                      ? "bg-[#abf7da] text-[#061109] shadow"
                      : "bg-[#3b7a57] text-white shadow"
                    : isDarkMode
                    ? "text-white/60 hover:text-white"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex-1 w-full flex items-center gap-2">
            <span className={`text-[10px] font-bold ${tickLabelColor} shrink-0`}>☀️</span>
            <div className={`flex-1 h-[2px] ${isDarkMode ? "bg-white/10" : "bg-black/10"} rounded-full relative flex justify-between items-center px-1 transition-colors`}>
              {Array.from({ length: 12 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTickIndex(idx)}
                  className={`w-1 h-3 rounded-full transition-all duration-300 ${
                    idx === tickIndex ? `${tickActiveColor} h-5 w-1.5 shadow` : tickInactiveColor
                  }`}
                />
              ))}
            </div>
            <span className={`text-[10px] font-bold ${isDarkMode ? "text-white/40" : "text-black/40"} shrink-0`}>🌙</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
