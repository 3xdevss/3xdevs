"use client";

import React, { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function ContactForm() {
  const { isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$5k – $15k",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    setFormData({
      name: "",
      email: "",
      service: "Web Development",
      budget: "$5k – $15k",
      details: "",
    });
  };

  const inputBgClass = isDarkMode
    ? "bg-white/[0.02] border-white/[0.08] text-white placeholder-white/30 focus:border-[var(--accent-color)] focus:bg-white/[0.04]"
    : "bg-black/[0.02] border-black/[0.08] text-black placeholder-black/30 focus:border-[var(--accent-color)] focus:bg-black/[0.04]";

  const optionBgClass = isDarkMode ? "bg-neutral-900 text-white" : "bg-white text-black";

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 relative z-20">
      <div className={`border rounded-[24px] backdrop-blur-sm transition-all duration-300 p-3 ${
        isDarkMode
          ? "border-white/[0.08] bg-white/[0.01] text-white"
          : "border-black/[0.08] bg-black/[0.01] text-black"
      }`}>
        <div className={`border rounded-xl backdrop-blur-sm transition-all duration-300 p-5 md:p-6 flex flex-col gap-5 ${
          isDarkMode
            ? "border-white/[0.08] bg-white/[0.02] text-white"
            : "border-black/[0.08] bg-black/[0.02] text-black"
        }`}>
          {/* Name & Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium focus:outline-none ${inputBgClass}`}
                required
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium focus:outline-none ${inputBgClass}`}
                required
              />
            </div>
          </div>

          {/* Service Needed Dropdown */}
          <div className="flex flex-col items-start w-full">
            <label className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
              Service needed
            </label>
            <div className="relative w-full">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium appearance-none cursor-pointer focus:outline-none ${inputBgClass}`}
                required
              >
                <option value="Web Development" className={optionBgClass}>Web Development</option>
                <option value="Mobile App" className={optionBgClass}>Mobile App</option>
                <option value="UI/UX Design" className={optionBgClass}>UI/UX Design</option>
                <option value="Brand Online" className={optionBgClass}>Brand Online</option>
                <option value="Not sure yet" className={optionBgClass}>Not sure yet</option>
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[var(--text-secondary)] opacity-80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Budget Range Dropdown */}
          <div className="flex flex-col items-start w-full">
            <label className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
              Budget range
            </label>
            <div className="relative w-full">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium appearance-none cursor-pointer focus:outline-none ${inputBgClass}`}
                required
              >
                <option value="Less than $5k" className={optionBgClass}>Less than $5k</option>
                <option value="$5k – $15k" className={optionBgClass}>$5k – $15k</option>
                <option value="$15k – $50k" className={optionBgClass}>$15k – $50k</option>
                <option value="$50k+" className={optionBgClass}>$50k+</option>
              </select>
              <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-[var(--text-secondary)] opacity-80">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Project Details Textarea */}
          <div className="flex flex-col items-start w-full">
            <label className="text-sm font-semibold mb-2 text-[var(--text-primary)]">
              Project details
            </label>
            <textarea
              name="details"
              placeholder="Tell us about your project, timeline, and goals..."
              value={formData.details}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-5 py-3 rounded-xl border transition-all duration-300 text-sm font-medium resize-none focus:outline-none ${inputBgClass}`}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold tracking-wide transition-all duration-300 shadow-md cursor-pointer text-center text-sm md:text-base border hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 bg-[var(--accent-color)] text-[var(--bg-primary)] border-[var(--accent-color)] hover:opacity-90 mt-1"
          >
            <svg className="w-4 h-4 transform rotate-45 mr-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}

