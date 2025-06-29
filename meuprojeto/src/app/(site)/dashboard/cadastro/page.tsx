import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel - Cadastrando usuário",
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

export default function Cadastro(){
    return(
        <div>
            <h1>Cadastrando cliente</h1>
            <span>Essa é a pagina de cadastro de clientes do dashboard</span>
            <br />
        </div>
    )
}