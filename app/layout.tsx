import type { Metadata } from "next";

import "./globals.css";

import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://udaykiran-bhonagiri-portfolio.vercel.app"),

  title: {
    default: "Uday Kiran | Full Stack Developer & AI Engineer",
    template: "%s | Uday Kiran",
  },

  description:
    "Portfolio of Uday Kiran, a Full Stack Developer and AI Developer building modern web applications, AI-powered products, and scalable software solutions.",

  keywords: [
    "Uday Kiran",
    "Full Stack Developer",
    "AI Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "AI Engineer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Uday Kiran",
    },
  ],

  creator: "Uday Kiran",

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Uday Kiran | Full Stack Developer & AI Engineer",
    description:
      "Building modern applications, AI-powered products, and scalable software solutions.",
    siteName: "Uday Kiran Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}