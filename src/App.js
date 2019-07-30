import React from "react";
import "./App.css";
import Header from "./compoenents/Header";
import About from "./compoenents/About";
import Project from "./compoenents/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Project />
    </div>
  );
}

export default App;
