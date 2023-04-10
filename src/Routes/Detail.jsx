import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentist, setDentist] = useState(undefined);
  const params = useParams();
  const id = params.id;
  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    console.log("My data" + data);
    setDentist(data);
    console.log("My dentist" + dentist);
  };
  console.log(dentist);

  useEffect(()=> {
    getDentist();
    console.log("My" + dentist);
  }, [params]);

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
    </>
  );
}

export default Detail