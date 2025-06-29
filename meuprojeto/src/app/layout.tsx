import type { Metadata } from "next";
import "./globals.css";
import {Header} from '@/components/header/index'

export const metadata: Metadata = {
  title: "Meu site - Aprendendo NextJS",
  description: "Site completo para praticar nextjs com sujeito programador",
  keywords: ['HTML', "CSS", "JavaScript", 'Programação'],
  openGraph:{
    title: "Aprendendo Next JS com Sujeito",
    images: ['https://sujeitoprogramador.com/wp-content/uploads/2025/05/dev-tumb-jr.jpg']
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
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
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
