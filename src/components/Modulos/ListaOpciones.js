import { Opcion } from "./Opcion";

export function ListaOpciones(opciones, respuestaCorrecta, seleccion, handleSeleccion, show) {
  return <>
    {opciones.map((item, index) => (
      <Opcion
        key={index}
        id={index}
        texto={item}
        correcto={respuestaCorrecta === item}
        seleccionada={seleccion === item}
        onClick={() => handleSeleccion(item)}
        show={show}
      ></Opcion>
    ))}
  </>;
}
