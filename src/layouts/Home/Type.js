import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "puedes leer mi experiencia.",
          "encontrarás apuntes maravillosos.",
          "puedes leer artículos sobre física.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;