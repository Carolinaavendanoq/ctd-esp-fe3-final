import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const[name, setName] = useState('');
  const isValidName = name.length > 5;
  const[errorName, setErrorName] = useState(false);
  const[message, setMessage] = useState(false);

  const signUpUser = (e) => {
    e.preventDefault();
    if (isValidName) {
      setErrorName(false);
      setMessage(true);
    }else{
      setErrorName(true);
      setMessage(false);
    }
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  };


  return (
    <>
      <form onSubmit={signUpUser}>
        <div>
          <label for="name">Nombre completo:</label>
          <input id='name' type="text" value={name} onChange={onNameChange} />
          {errorName && <p>Por favor verifique su información nuevamente</p>}
          <label for="email">Email:</label>
          <input id="email" type="email" />
        </div>
        <div>
          <button type="submit">Enviar</button>
          {message && <p>Gracias {name}, te contactaremos cuando antes vía mail</p>}
        </div>
      </form>
    </>
  );
};

export default Form;
