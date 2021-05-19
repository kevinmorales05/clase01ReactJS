import React from "react";

export default function Contador({ contador, cero }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: 40,
        width: 200,
      }}
    >
      Contador: {contador}
      <button onClick={() => cero(0)} type="button">
        Encerar
      </button>
    </div>
  );
}
