import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ThemeContext from '../context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  const [dentist, setDentist] = useState([]);
  const params = useParams();
  const id = params.id;

  const getDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    setDentist(data);
  };


  useEffect(()=> {
    getDentist();
  }, [params]);

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Detail Dentist id </h1>
      <p>{dentist.name}</p>
      <p>{dentist.email}</p>
      <p>{dentist.phone}</p>
      <p>{dentist.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      
    </div>
  );
}

export default Detail