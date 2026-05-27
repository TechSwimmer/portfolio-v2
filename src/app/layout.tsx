import type { Metadata } from 'next'
import "./globals.css"

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Nikhil Pillai | Portfolio",
  description: "Full Stack Developer portfolio" 
};

type RootLayoutProps = {
  children:React.ReactNode;
};

export default function RootLayout({
  children
}:RootLayoutProps){
  return(
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1">
          { children }
        </main>
        <Footer/>
      </body>
    </html>
  )
}