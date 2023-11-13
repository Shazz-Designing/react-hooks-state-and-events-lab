import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //Create a state variable for dark mode
  const [isDarkMode, setDarkMode] = useState(false);

  //Create an event handler to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
