import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, handleChangeTheme} = useContext(ThemeContext);
  
  return (
    <nav style={{ background: theme.background, color: theme.font }}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/contacto">Contacto</Link>
      </button>
      <button>
        <Link to="/favs">Favs</Link>
      </button>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleChangeTheme} >Change theme</button>
    </nav>
  )
}

export default Navbar