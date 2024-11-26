import { useState } from "react";
import "./App.css";
function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const enviarAlert = (event) => {
    event.preventDefault();
    console.log("Dados enviados");
    console.log("Nome:", nome);
    console.log("Email: ", email);
    alert(`Formulário enviado com sucesso ${nome} ${email}`);
  };

  return (
    <div className="container">
      <form className="form" onSubmit={enviarAlert}>
        <legend className="title">Cadastro</legend>
        <p>
          <label className="nome">
            Nome:
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Email:
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </p>

        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
