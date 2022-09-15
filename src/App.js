import { useState } from "react";
import "./App.css";

function App() {
  const [pais, setPais] = useState("");
  const [valor, setValor] = useState(0);
  function FuncDiminuir() {
    setValor(valor - 1);
  }
  function FuncAumentar() {
    setValor(valor + 1);  }

  return (
    <div className="App">
      <h2>Nome: {pais}</h2>
      <input
        type="text"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      />
    
      <div>
        <p>
          Número: <b>{valor}</b>
        </p>
        <button onClick={FuncAumentar}>Aumentar número!</button>
        <button onClick={FuncDiminuir}>Diminuir número!</button>
        <hr />
        <img src={`https://countryflagsapi.com/svg/${pais}`} />
      </div>
    </div>
  );
}

export default App;
