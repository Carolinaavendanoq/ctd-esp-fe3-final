import React, { useContext} from "react";
// import Card from "../Components/Card";
import ThemeContext from "../context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const context = useContext(ThemeContext);
  const theme = context.theme;
  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
