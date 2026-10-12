import React from "react";
import'./estilos.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Servicio from "./components/Servicios";
import Equipo from "./components/Equipo";
import Agenda from "./components/Agenda";
import Video from "./components/Video";
import Ubicacion from "./components/Ubicacion";

function App() {

  return (
    <>

      {/*Usaremos el componenete Header */}
      
        <Header />
      
      {/* HERO SECTION */}
      <main>
        <Hero />
        
      {/* SERVICIOS Y PROCEDIMIENTOS */}

        <Servicio/>
        

        {/* EQUIPO MÉDICO */}

        <Equipo/>
        

        {/* FORMULARIO DE AGENDAMIENTO */}

        <Agenda/>
        

        {/* VIDEO EDUCATIVO EMBEBIDO */}
        
        <Video/>

      {/* UBICACIÓN Y MAPA INTERACTIVO */}
      </main>
        <Ubicacion/>

      {/* FOOTER INFORMATIVO */}
      
      <Footer />

      {/* MENÚ LATERAL (OFFCANVAS) PARA EL CARRITO */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCarrito" aria-labelledby="offcanvasCarritoLabel">
        <div className="offcanvas-header bg-light">
          <h5 className="offcanvas-title fw-bold" id="offcanvasCarritoLabel">Mi carrito de compras</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <div id="items-carrito" className="flex-grow-1 overflow-auto mb-3">
            {/* Aquí irán los productos más adelante */}
          </div>
          
          <div className="border-top pt-3">
            <h4 className="fw-bold d-flex justify-content-between">
              <span>TOTAL:</span>
              <span id="total-carrito">$0</span>
            </h4>
            <button className="btn btn-success w-100 fw-bold mt-2 py-2" id="btn-pagar">PAGAR</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
