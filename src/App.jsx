import Inicio from "./components/Views/InicioMain.jsx";
import Preguntas from "./components/Views/PreguntasMain.jsx";
import { Routes, Route } from "react-router-dom";

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
