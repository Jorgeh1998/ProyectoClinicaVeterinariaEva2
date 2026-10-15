import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './estilos.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";

// Paginas
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Registro from "./pages/Registro";
import Categorias from "./pages/Categorias";
import Ofertas from "./pages/Ofertas";
import Checkout from "./pages/Checkout";

function App() {

  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carritoVeterinaria");
    return guardado ? JSON.parse(guardado) : [];
  });

  // Cada vez que el carrito cambie, se guarda automaticamente en localStorage
  useEffect(() => {
    localStorage.setItem("carritoVeterinaria", JSON.stringify(carrito));
  }, [carrito]);

  // funcion para agregar productos
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find((item) => item.id === producto.id);
      if (existe) {
        // Si ya está en el carrito, le sumamos 1 a la cantidad
        return carritoActual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        // Si es nuevo, lo agregamos con cantidad 1
        return [...carritoActual, { ...producto, cantidad: 1 }];
      }
    });
  };

  // funcion para quitar un producto
  const quitarDelCarrito = (id) => {
    setCarrito((carritoActual) => carritoActual.filter((item) => item.id !== id));
  };

  // funcion para vacio o "pagar" el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Calculamos el total de artículos para mostrarlo en el botón del Header
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  //===================================================================//
  
  return (
    <BrowserRouter>
      {/* Le pasamos totalItems como PROP al Header */}
      <Header contadorCarrito={totalItems} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Tienda agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/categorias" element={<Categorias agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/ofertas" element={<Ofertas agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/checkout" element={<Checkout agregarAlCarrito={agregarAlCarrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>

      <Footer />
      
      {/* Le pasamos los datos y funciones como PROPS al Carrito lateral */}
      <Carrito
        carrito={carrito}
        quitarDelCarrito={quitarDelCarrito}
        vaciarCarrito={vaciarCarrito}
      />
    </BrowserRouter>
  );
}

export default App;