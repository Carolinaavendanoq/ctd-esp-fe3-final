import  React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext, { themes} from "./context";


function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }

  const providerValue = useMemo(()=>({theme,
    handleChangeTheme}),[theme,handleChangeTheme])

  return (
      <div className="App">
        <ThemeContext.Provider value={providerValue}>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </ThemeContext.Provider>
      </div>
  );
}

export default App;
