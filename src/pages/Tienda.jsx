import React from 'react';
import Catalogo from '../components/Catalogo';

function Tienda({agregarAlCarrito}) {
  return (
    <main>
      <Catalogo agregarAlCarrito={agregarAlCarrito} />
    </main>
  );
}

export default Tienda;