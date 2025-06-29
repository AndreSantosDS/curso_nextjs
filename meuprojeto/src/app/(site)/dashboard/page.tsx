import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel - Aprendendo NextJS",
  description: "Entre em contato com o sujeito programador!",
  keywords: ['HTML', "CSS", "JavaScript", 'Programação'],
  openGraph:{
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

export default function Dashboard(){
    return(
        <div>
            <h1>Página painel</h1>
            <span>Bem vindo ao painel do site</span>
            <br />
        </div>
    )
}