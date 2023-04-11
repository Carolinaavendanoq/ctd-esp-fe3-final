import React, {useContext} from 'react'
import Form from '../Components/Form'
import ThemeContext from '../context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme;

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact