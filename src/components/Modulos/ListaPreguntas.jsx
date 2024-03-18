import { Pregunta } from "./Pregunta.jsx";

export function ListaPreguntas(preguntasAleatorias, modificarPuntaje, show) {
  return (
    <>
      {preguntasAleatorias.map((pregunta) => (
        <Pregunta
          key={pregunta.id}
          nombre={"pregunta" + pregunta.id}
          pregunta={pregunta.pregunta}
          opciones={pregunta.opciones}
          respuestaCorrecta={pregunta.respuestaCorrecta}
          onScore={modificarPuntaje}
          show={show}
        />
      ))}
    </>
  );
}
