import React from "react";
import'./estilos.css';
import Header from "./components/Header";
import Hero from "./components/Hero"

function App() {

  return (
    <>

      {/*Usaremos el componenete Header */}
      
      <Header />

      {/*Usamos el componente Hero */}


      <Hero />


      {/* FOOTER INFORMATIVO */}
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-4">
              <h5 className="fw-bold text-warning mb-3">Veterinaria San Marcos</h5>
              <p className="text-secondary small">
                Comprometidos desde 2009 con la salud, el bienestar animal y la tranquilidad de las familias en Rancagua.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <h5 className="fw-bold mb-3">Navegación Rápida</h5>
              <ul className="list-unstyled small d-flex flex-column gap-2">
                <li><a href="#productos" className="text-secondary text-decoration-none hover-link">Farmacia y Accesorios</a></li>
                <li><a href="#login" className="text-secondary text-decoration-none hover-link">Portal de Clientes (Login)</a></li>
                <li><a href="#registro" className="text-secondary text-decoration-none hover-link">Crear una Cuenta</a></li>
                <li><a href="#agenda" className="text-secondary text-decoration-none hover-link">Solicitud de Horas</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h5 className="fw-bold mb-3">Canales de Urgencia</h5>
              <p className="text-secondary small mb-1">Para pacientes críticos comunícate inmediatamente a nuestra línea directa.</p>
              <a href="tel:+56722234567" className="btn btn-outline-warning btn-sm mt-2">Llamar a Urgencias</a>
            </div>
          </div>
          <hr className="border-secondary opacity-25" />
          <div className="text-center text-secondary small py-2">
            &copy; 2026 Veterinaria San Marcos | Proyecto Académico DSY1104 - DUOC UC. Todos los derechos reservados.
          </div>
        </div>
      </footer>

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
