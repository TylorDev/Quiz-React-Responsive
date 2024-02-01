import React from "react";
import { useState } from "react";

export function Opcion({texto, onClick, seleccionada, correcto, show}) {
  
  

  const mostrarResultado = (correcto, seleccionada) => {
    if (seleccionada && correcto) {
      return "correcta  btn-opcion";
    } else if (seleccionada) {
      return "incorrecta  btn-opcion";
    } else if (correcto) {
      return "correcta  btn-opcion";
    } else {
      return "btn-opcion";
    }
  };

  return (
    <div className="opcion">
    <button
        disabled={show}
       className=  {show?mostrarResultado(correcto, seleccionada): seleccionada?" seleccionado btn-opcion": "btn-opcion"}  onClick={onClick}>
      <div className="opcion-text">{texto}</div>
    </button>
  </div>  
  );
}
