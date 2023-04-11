import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import ThemeContext from '../context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const context = useContext(ThemeContext);
  const theme = context.theme;

  const getDentists = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);

  return ( 
    <main className="" style={{ background: theme.background, color: theme.font }}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => (
          <Card name={dentist.name} username={dentist.username} id={dentist.id} key={dentist.id} ></Card>
        ))}
      </div>
    </main>
  )
}

export default Home