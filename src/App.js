import React from "react";
import "./App.css";
import ItemRow from "./components/ItemRow";
import ItemList from "./components/ItemList";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <ItemList />
      </main>
    </React.Fragment>
  );
}

export default App;
