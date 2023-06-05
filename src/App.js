import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
