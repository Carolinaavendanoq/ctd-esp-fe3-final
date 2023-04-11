import React, {useContext} from 'react'
import ThemeContext from '../context';
const Footer = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <footer style={{ background: theme.background, color: theme.font }}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
