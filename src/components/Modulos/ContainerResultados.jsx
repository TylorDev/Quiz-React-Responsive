import React from "react";
import { Link } from "react-router-dom";
import { BotonNormal } from "./BotonNormal.jsx";

export function ContainerResultados(
  show,
  showPuntaje,
  score,
  PreguntasParaMostrar
) {
  return (
    <>
      {!show && (
        <div className="jugarDenuevo">
          <BotonNormal css="btn-fin" onClick={showPuntaje}>
            {" "}
            Ver resultados{" "}
          </BotonNormal>
        </div>
      )}

      {show && (
        <div className="jugarDenuevo">
          <div className="calificacion">
            {" "}
            Resultado {score}/{PreguntasParaMostrar} respuestas correctas
          </div>
          <Link to="/">
            <BotonNormal css="btn-jugar"> Volver a intentar </BotonNormal>
          </Link>
        </div>
      )}
    </>
  );
}
