import type { Metadata } from 'next'
import "./globals.css"
import { ThemeProvider } from '@/context/ThemeProvider'
import PageTransition from '@/components/animations/PageTransition'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import { Inter, Sora } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Nikhil Pillai | Full Stack Developer",

    template:
      "%s | Nikhil Pillai",
  },

  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and MongoDB. Explore projects, open-source contributions, and modern web development work.",

  keywords: [
    "Nikhil Pillai",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "MERN Stack",
    "Portfolio",
    "Open Source",
  ],

  authors: [
    {
      name:
        "Nikhil Pillai",
    },
  ],

  creator:
    "Nikhil Pillai",

  metadataBase:
    new URL(
      "https://your-domain.vercel.app"
    ),

  openGraph: {
    title:
      "Nikhil Pillai | Full Stack Developer",

    description:
      "Explore projects, open-source contributions, and full-stack web development work.",

    url:
      "https://your-domain.vercel.app",

    siteName:
      "Nikhil Pillai Portfolio",

    locale:
      "en_IN",

    type:
      "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans relative min-h-screen flex flex-col overflow-x-hidden`}>


        <div
          className="
        fixed
        top-20
        left-1/2
        -translate-x-1/2
        h-[400px]
        w-[400px]
        rounded-full
        bg-zinc-400/10
        blur-[120px]

        dark:bg-zinc-500/10

        -z-10
        pointer-events-none
      "
        />

        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>

          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}