// Inicio.js

import "../styles/Inicio.css";
import { BotonNormal } from "../Modulos/BotonNormal";
import { Link } from "react-router-dom";
import { Blobs } from "../Modulos/Blobs";
const Inicio = () => {
  return (
    <div>
      <div className="inicio">
        <div className="logo">
          <img className="quizzical" alt="Quizzical" src="Quizzical.svg" />
        </div>
        <div className="descripcion">Alguna descripción si fuera necesario</div>

        <Link to="/Preguntas">
          <BotonNormal css="BotonInicio"> Iniciar </BotonNormal>
        </Link>
      </div>
      <Blobs></Blobs>
    </div>
  );
};

export default Inicio;
