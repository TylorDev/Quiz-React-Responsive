import React from "react";
import Inicio from "./components/Views/InicioMain.js";
import Preguntas from "./components/Views/PreguntasMain.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Preguntas" element={<Preguntas></Preguntas>}></Route>
        <Route path="/" element={<Inicio></Inicio>}></Route>
      </Routes>
    </>
  );
}

export default App;
