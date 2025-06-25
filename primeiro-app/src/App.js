import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    if (input === "") return;

    setTarefas([...tarefas, input]);
    setInput("");
  }

  function handleDelete(item) {
    const filteredTasks = tarefas.filter(tarefa => tarefa !== item);
    setTarefas(filteredTasks);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        /><br />

        <button type="submit">Registrar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>
            {tarefa}{" "}
            <button onClick={() => handleDelete(tarefa)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
