import "./App.css";

import React, { useContext } from "react";

import Recite from "./components/recite.js";
import { ThemeContext } from "./context.js";
import Toolbar from "./components/toolbar.js";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleThemeStyle = {
    width: '10%',
    alignSelf: 'center',
    margin: '1rem',
    padding: '0.5rem'
}
  return (
    <div className={`app ${theme}`}>
      <div className="App">
        <Toolbar />
        <h1 className="title">SHAHADA</h1>
        <Recite />
      
        <button style={toggleThemeStyle} onClick={toggleTheme}>
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;
