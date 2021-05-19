import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/imagenes/facebook.png";
import Contenedores from "./components/Contenedores";
import { Bloque } from "./components/Bloque";
import Nombre from "./components/Nombre";
import Contador from "./components/Contador";

//hola esto es un comentario
/*
Comentario multilinea
*/

function App() {
  const saludo = "Hola Mundo!";

  const saludarConNombre = (nombre) => {
    alert(`hola ${nombre}`);
  };

  //https://picsum.photos/200/300

  const people = {
    name: "Kevin",
    lastName: "Morales",
  };
  const people1 = {
    name: "Danny",
    lastName: "Juarez",
  };

  const cambiarColor = () => {
    if (claseCambio === "nombre1") {
      setClaseCambio("nombre2");
    } else {
      setClaseCambio("nombre1");
    }
  };
  //use state
  const [claseCambio, setClaseCambio] = useState("nombre1");
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "colum",
            justifyContent: "center",
          }}
        >
          <Nombre nombre="Kevin" clase={claseCambio} />
          <Nombre nombre="Daniel" clase={claseCambio} />
        </div>
        <button onClick={() => cambiarColor()} type="button">
          Cambiar Color
        </button>
        <hr></hr>
        <Contador contador={contador} cero={setContador} />
       
        <button onClick={() => setContador(contador + 1)} type="button">
          Aumentar
        </button>
        <button onClick={() => setContador(contador - 1)} type="button">
          Disminuir
        </button>
      </div>
    </>
  );
}

export default App;
