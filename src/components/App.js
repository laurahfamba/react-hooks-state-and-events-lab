
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemData from "../data/items";


function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const appClassName = darkMode ? "App dark" : "App light";

  return (
    <div className={appClassName}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      
      <ShoppingList items={ItemData} />
    </div>
  );
}

export default App;