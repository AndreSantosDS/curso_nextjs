import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatos - Aprendendo NextJS",
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

export default function Contatos(){
    return(
        <div>
            <h1>Página de contatos</h1>
            <span>(xx) 000230-2323</span>
        </div>
    )
}