import React from "react";
import "./App.css";
import ItemRow from "./components/ItemRow";
import ItemTable from "./components/ItemTable";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <ItemTable />
      </main>
    </React.Fragment>
  );
}

export default App;
