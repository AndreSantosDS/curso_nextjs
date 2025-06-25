import React, { useEffect, useState } from "react";
import "./style.css";

////https://sujeitoprogramador.com/rn-api/?api=posts

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    async function loadApi() {
      try {
        const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setNutri(json);
      } catch (error) {
        console.error("Erro ao carregar a API:", error);
      }
    }

    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="capa" />
            <p className="subtitulo">{item.subtitulo}</p>
            <h1>Categoria: {item.categoria}</h1>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
