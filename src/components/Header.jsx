import React from 'react';

export default function Header(props) {
  const suma = 2 + 10;
  const sumar = (a, b) => a + b;
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
      <p>{sumar(10, 30)}</p>
    </div>
  );
}
