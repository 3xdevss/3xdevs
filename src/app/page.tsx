import React from "react";
import { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: "3xdevs | Custom Software & Web Development",
  description: "We craft engaging, modern, and user-centric web applications and custom software solutions. You need it, we build it.",
};

export default function Home() {
  return <HomePageClient />;
}

