import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //Create a state variable for dark mode
  const [isDarkMode, setDarkMode] = useState(false);

  //Create an event handler to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  //Update the className based on the dark mode state
  const appClass = isDarkMode ? 'App dark' : 'App light';

  return (
    <>
      {isDarkMode ? (
        <div className="App dark">
          <header>
            <h2>Shopster</h2>
            <button onClick={toggleDarkMode}>Switch to Light Mode</button>
          </header>
          <ShoppingList items={itemData} />
        </div>
      ) : (
        <div className="App light">
          <header>
            <h2>Shopster</h2>
            <button onClick={toggleDarkMode}>Switch to Dark Mode</button>
          </header>
          <ShoppingList items={itemData} />
        </div>
      )}
    </>
  );
}

export default App;