export const data = [
  {
    id: 1,
    pregunta: "¿Cuál es el propósito principal de React en el desarrollo web?",
    opciones: ["Manejar la lógica del servidor", "Gestionar la interfaz de usuario", "Realizar consultas a la base de datos", "Crear estilos CSS"],
    respuestaCorrecta: "Gestionar la interfaz de usuario",
  },
  {
    id: 2,
    pregunta: "En el contexto de React, ¿qué es JSX?",
    opciones: ["Un lenguaje de programación", "Una extensión de JavaScript para escribir elementos React", "Una herramienta de gestión de dependencias", "Una base de datos en tiempo real"],
    respuestaCorrecta: "Una extensión de JavaScript para escribir elementos React",
  },
  {
    id: 3,
    pregunta: "¿Cuál es el rol de Node.js en el desarrollo backend?",
    opciones: ["Gestionar la interfaz de usuario", "Ejecutar código JavaScript en el servidor", "Manejar las consultas a la base de datos", "Generar estilos CSS"],
    respuestaCorrecta: "Ejecutar código JavaScript en el servidor",
  },
  {
    id: 4,
    pregunta: "¿Qué hace Express.js en el contexto del desarrollo backend?",
    opciones: ["Gestiona la interfaz de usuario", "Maneja las rutas y middlewares", "Realiza consultas a la base de datos", "Genera estilos CSS"],
    respuestaCorrecta: "Maneja las rutas y middlewares",
  },
  {
    id: 5,
    pregunta: "¿Cuál es el propósito principal de la función render() en React?",
    opciones: ["Generar estilos CSS", "Mostrar la interfaz de usuario en el navegador", "Realizar operaciones en la base de datos", "Manejar la lógica del servidor"],
    respuestaCorrecta: "Mostrar la interfaz de usuario en el navegador",
  },
  {
    id: 6,
    pregunta: "En React, ¿cómo se pasa información de un componente padre a un componente hijo?",
    opciones: ["Con la función setState()", "Utilizando props", "Con la función emit()", "A través de una variable global"],
    respuestaCorrecta: "Utilizando props",
  },
  {
    id: 7,
    pregunta: "¿Cuál es la utilidad de la librería Axios en el desarrollo frontend?",
    opciones: ["Gestionar la interfaz de usuario", "Realizar peticiones HTTP", "Generar estilos CSS", "Manejar la lógica del servidor"],
    respuestaCorrecta: "Realizar peticiones HTTP",
  },
  {
    id: 8,
    pregunta: "En el desarrollo backend, ¿cómo se manejan las rutas en Express.js?",
    opciones: ["Con la función route()", "Utilizando el módulo Path", "Con la función handleRoute()", "Con el enrutamiento de Express"],
    respuestaCorrecta: "Con el enrutamiento de Express",
  },
  {
    id: 9,
    pregunta: "¿Cuál es el propósito de la función componentDidMount() en un componente de clase de React?",
    opciones: ["Manejar eventos de click", "Ejecutar código después de que el componente se monta", "Generar estilos CSS", "Realizar operaciones en la base de datos"],
    respuestaCorrecta: "Ejecutar código después de que el componente se monta",
  },
  {
    id: 10,
    pregunta: "En el contexto de React, ¿qué es un estado (state)?",
    opciones: ["Un objeto que contiene información de estilos", "Una función que devuelve JSX", "Un conjunto de datos que puede cambiar con el tiempo", "Un identificador único para cada componente"],
    respuestaCorrecta: "Un conjunto de datos que puede cambiar con el tiempo",
  },
  {
    id: 11,
    pregunta: "¿Qué función cumple el middleware en Express.js?",
    opciones: ["Gestionar la interfaz de usuario", "Manejar las rutas", "Realizar consultas a la base de datos", "Generar estilos CSS"],
    respuestaCorrecta: "Manejar las rutas",
  },
  {
    id: 12,
    pregunta: "En React, ¿cómo se actualiza el estado de un componente?",
    opciones: ["Con la función updateState()", "Modificando directamente la propiedad state", "Con la función setState()", "Usando Redux"],
    respuestaCorrecta: "Con la función setState()",
  },
  {
    id: 13,
    pregunta: "¿Qué es un componente de clase en React?",
    opciones: ["Una función que devuelve JSX", "Un conjunto de estilos CSS", "Una clase de JavaScript que extiende de React.Component", "Un módulo de Node.js"],
    respuestaCorrecta: "Una clase de JavaScript que extiende de React.Component",
  },
  {
    id: 14,
    pregunta: "¿Cómo se realiza la instalación de paquetes en Node.js?",
    opciones: ["Con el comando npm install", "Descargándolos directamente desde el navegador", "Utilizando el comando node install", "Con el gestor de paquetes Yarn"],
    respuestaCorrecta: "Con el comando npm install",
  },
  {
    id: 15,
    pregunta: "En el desarrollo backend, ¿qué es un middleware en Express.js?",
    opciones: ["Una función que maneja las rutas", "Un componente de React que controla el estado", "Un paquete de estilos CSS", "Una función que ejecuta tareas antes de llegar a la ruta final"],
    respuestaCorrecta: "Una función que ejecuta tareas antes de llegar a la ruta final",
  },
  ];

/**
 * Obtiene una cantidad específica de preguntas aleatorias de un array dado.
 *
 * @param {Pregunta} preguntas - El array de preguntas original.
 * @param {number} cantidad - La cantidad de preguntas aleatorias que se desea obtener.
 * @returns {Array} - Un nuevo array con la cantidad especificada de preguntas aleatorias.
 */
export const obtenerPreguntasAleatorias = (preguntas, cantidad) => {
  /**
   * Obtiene una pregunta aleatoria del array y la elimina.
   *
   * @returns {Object} - La pregunta aleatoria.
   */
  const obtenerPreguntaAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * copiaPreguntas.length);
    return copiaPreguntas.splice(indiceAleatorio, 1)[0];
  };

  // Copiar el array de preguntas
  const copiaPreguntas = [...preguntas];

  // Obtener 'cantidad' elementos aleatorios del array
  const preguntasAleatorias = Array.from({ length: cantidad }, obtenerPreguntaAleatoria);

  return preguntasAleatorias;
};



/**
 * Revisa y actualiza el puntaje de una pregunta en el estado previo de puntajes.
 * @param {Object} prevPuntajes - Estado previo de puntajes.
 * @param {string} pregunta - Pregunta a la que se le actualizará el puntaje.
 * @param {number} cantidad - Cantidad de puntos a agregar o restar.
 * @returns {Object} - Nuevo estado de puntajes actualizado.
 */



export const revisarPuntaje = (prevPuntajes, pregunta, cantidad) => {
  // Verificar si la pregunta ya existe en el estado previo
  const puntajeExistente = prevPuntajes.hasOwnProperty(pregunta) ? prevPuntajes[pregunta] : 0;

  // Calcular el nuevo puntaje asegurándose de que no sea menor que 0
  const puntajeNoNegativo = Math.max(puntajeExistente + cantidad, 0);

  // Devolver el nuevo estado de puntajes actualizado
  return {
    ...prevPuntajes,
    [pregunta]: puntajeNoNegativo,
  };
};