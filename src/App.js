import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import About from "./Components/About";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Work />
      <About />
    </div>
  );
}

export default App;
