import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'
import {Header} from '@/components/header'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Daly Games - Descubra jogos incriveis para se divertir.",
  description: "Mais de 10 mil jogos separados e organizados.",
  keywords: ["games", "jogos", "steam"],
  openGraph:{
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
