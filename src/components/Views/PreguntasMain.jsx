// Inicio.js
import "../styles/Preguntas.css";
import { useState, useEffect } from "react";
import { Blobs } from "../Modulos/Blobs.jsx";
import { data, obtenerPreguntasAleatorias, revisarPuntaje } from "../data.js";
import { ListaPreguntas } from "../Modulos/ListaPreguntas.jsx";
import { ContainerResultados } from "../Modulos/ContainerResultados.jsx";

export const Preguntas = () => {
  //PUNTAJE TOTAL DEL USUARIO
  const [score, setScore] = useState(0);
  const [respuestasFinales, setRespuestasFinales] = useState({
    pregunta1: 0,
    pregunta2: 0,
    pregunta3: 0,
    pregunta4: 0,
  });
  const [preguntasAleatorias, setPreguntasAleatorias] = useState([]);

  const [show, setShow] = useState(false);

  const modificarPuntaje = (pregunta, cantidad) => {
    setRespuestasFinales((prevPuntajes) =>
      revisarPuntaje(prevPuntajes, pregunta, cantidad)
    );
  };

  const showPuntaje = () => {
    // Mostrar puntajes individuales
    for (const key in respuestasFinales) {
      console.log(`${key}: ${respuestasFinales[key]}`);
    }
    // Calcular y mostrar la suma total
    const sumaTotal = Object.values(respuestasFinales).reduce(
      (acc, valor) => acc + valor,
      0
    );
    console.log("Puntaje total:", sumaTotal);

    // Actualizar el estado y mostrar el puntaje
    setScore(sumaTotal);
    setShow(true);
  };

  const PreguntasParaMostrar = 5;

  useEffect(() => {
    // Obtener una copia aleatoria de 5 preguntas del objeto data.js

    const preguntasAleatorias = obtenerPreguntasAleatorias(
      data,
      PreguntasParaMostrar
    );
    setPreguntasAleatorias(preguntasAleatorias);
  }, []);

  return (
    <>
      <div className="main">
        {ListaPreguntas(preguntasAleatorias, modificarPuntaje, show)}
        {ContainerResultados(show, showPuntaje, score, PreguntasParaMostrar)}
        <Blobs></Blobs>
      </div>
    </>
  );
};

export default Preguntas;
