import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import FloatingRobot from "@/components/FloatingRobot";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi. We're 3xdevs.",
  description: "We're passionate about crafting experiences that are engaging, and user-centric.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('themeMode');
                  const savedTickIndex = localStorage.getItem('tickIndex');
                  const isDarkMode = savedTickIndex ? parseInt(savedTickIndex, 10) >= 6 : true;
                  
                  if (savedTheme) {
                    document.body.classList.add('theme-' + savedTheme);
                  } else {
                    document.body.classList.add('theme-emerald');
                  }
                  
                  if (!isDarkMode) {
                    document.body.classList.add('light-mode');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          {children}
          <FloatingRobot />
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  );
}
