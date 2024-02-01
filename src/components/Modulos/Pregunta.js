import { useEffect } from "react";
import { useState } from "react";
import { ListaOpciones } from "./ListaOpciones";

export function Pregunta({
  id,
  pregunta,
  opciones = [],
  respuestaCorrecta,
  onScore,
  nombre,
  show
}) {

  const [seleccion, setSeleccion] = useState(0);
  const handleSeleccion = (texto) => {
  
  setSeleccion(texto);
    if (texto === respuestaCorrecta) {
      onScore(nombre, 1);
    } else {
      onScore(nombre, -1);
    }

    console.log(texto);
  };


  return (
    <>
    
      <div className="pregunta-container">
      
        <p key={id} className="pregunta">
          {pregunta}
        </p>
        <div className="opciones">
          {ListaOpciones(opciones, respuestaCorrecta, seleccion, handleSeleccion, show)}  
        </div>
      
      
      </div>

      
    </>
  );
}

