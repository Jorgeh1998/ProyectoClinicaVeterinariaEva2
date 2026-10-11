import React from "react";
import'./estilos.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Servicio from "./components/Servicios";
import Equipo from "./components/Equipo";
import Agenda from "./components/Agenda";

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
        <section id="educacion" className="py-4">
          <div className="container py-3">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary-custom">Consejos y Cuidados Veterinarios</h2>
              <p className="text-muted">Aprende sobre la importancia de las visitas regulares y la vacunación temprana.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
                  <iframe src="https://www.youtube-nocookie.com/embed/LZ9AKsUCcTI" title="Cuidados básicos para mascotas" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN Y MAPA INTERACTIVO */}
        <section id="ubicacion" className="py-5 bg-light">
          <div className="container py-4">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-5">
                <h2 className="fw-bold text-primary-custom mb-3">Encuéntranos en Rancagua</h2>
                <p className="text-muted mb-4">Estamos convenientemente ubicados en la Región de O'Higgins con estacionamiento para clientes e instalaciones accesibles.</p>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  <li className="d-flex align-items-start gap-2">
                    <i className="bi bi-geo-alt-fill text-danger fs-4"></i>
                    <div>
                      <strong>Dirección:</strong><br />Av. San Martín #840, Rancagua, Región de O'Higgins
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="bi bi-telephone-fill text-primary-custom fs-4"></i>
                    <div>
                      <strong>Teléfono Directo:</strong><br />+56 72 223 4567
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="bi bi-clock-fill text-warning fs-4"></i>
                    <div>
                      <strong>Horario de Atención:</strong><br />Lunes a Viernes: 09:00 - 19:30 hrs<br />Sábados: 09:00 - 14:00 hrs
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-7">
                <div className="ratio ratio-4x3 rounded-3 shadow-sm overflow-hidden border">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.748366967735!2d-70.744154!3d-34.170669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96634360e206b0cb%3A0x8898144b6c3aa07b!2sRancagua%2C%20O&#39;Higgins!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
