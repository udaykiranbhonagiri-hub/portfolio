import type { Metadata } from "next";

import "./globals.css";

import ThemeProvider from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Uday Kiran | Full Stack Developer & AI Engineer",
  description:
    "Portfolio of Uday Kiran, Full Stack Developer and AI Developer.",
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