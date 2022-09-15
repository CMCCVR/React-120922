import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [user, setUser] = useState({
    id: 1,
    pais: "Republica de Cabo Verde",
    photo:
      "https://viajecomnorma.com.br/wp-content/uploads/2019/11/Mapa-Cabo-Verde.jpg",
  });

  const objs = 

  const [valor, setValor] = useState(0);

  function FuncDiminuir() {
    setValor(valor - 1);
  }
  function FuncAumentar() {
    setValor(valor + 1);
  }

  return (
    <div className="App">
      <h2>Nome: {name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <p>
          Número: <b>{valor}</b>
        </p>
        <button onClick={FuncAumentar}>Aumentar número!</button>
        <button onClick={FuncDiminuir}>Diminuir número!</button>
        <hr />
        Nacionalidade: <b>{user.pais}</b>
        <br />
        <img src={user.photo} />
      </div>
    </div>
  );
}

export default App;
