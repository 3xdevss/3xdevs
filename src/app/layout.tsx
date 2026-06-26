import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import FloatingRobot from "@/components/FloatingRobot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seán Halpin · Designer Portfolio",
  description: "I'm passionate about crafting experiences that are engaging, accessible, and user-centric.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
