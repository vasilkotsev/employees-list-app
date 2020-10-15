import React from "react";
import "./App.css";
import ItemList from "./components/ItemsListContainer";

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
