import React, {useState} from "react";
import './App.css';


function App() {
  const [values, setValues] = useState();
  console.log(values)
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    console.log(values)
  }

  return <div className="app--container">
    <div className="register--container">
      <h1 className="register--title">Scrim Shop</h1>
      <input
        type = "text" 
        name="email"
        placeholder="Email"
        className="register--input"
        onChange={handleChangeValues}
      />
      <input
        type = "text" 
        name="nome"
        placeholder="Nome"
        className="register--input"
        onChange={handleChangeValues}
      />
      <input
        type = "text" 
        name="sobrenome"
        placeholder="Sobrenome"
        className="register--input"
        onChange={handleChangeValues}
      />
      <input
        type = "integer" 
        name="cpf"
        placeholder="CPF"
        className="register--input"
        onChange={handleChangeValues}
      />
      <input
        type = "date" 
        name="data_nascimento"
        placeholder="Data de nascimento"
        className="register--input"
        onChange={handleChangeValues}
      />
      <button
        className="register--button"
        onClick={() => handleClickButton()}
      >
        Cadastrar
      </button>
    </div>
  </div>;
}

export default App;
