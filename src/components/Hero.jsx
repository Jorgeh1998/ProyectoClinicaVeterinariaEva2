import React from "react";

function Hero() {

    return(
        <section id="inicio" className="hero-section text-white text-center d-flex align-items-center py-5">
          <div className="container py-4">
            <span className="badge bg-warning text-dark px-3 py-2 mb-3 rounded-pill fw-bold text-uppercase tracking-wider">
              Desde 2009 al cuidado de tus mascotas en Rancagua
            </span>
            <h1 className="display-4 fw-bold mb-3">El cuidado y bienestar que tu mascota merece</h1>
            <p className="lead mb-4 mx-auto text-light hero-desc">
              Atención clínica especializada para perros, gatos, conejos y aves. Contamos con tecnología moderna, médicos dedicados y seguimiento personalizado.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="#agenda" className="btn btn-warning btn-lg fw-bold text-dark px-4 shadow">Solicitar Consulta</a>
              <a href="#productos" className="btn btn-outline-light btn-lg px-4">Ir a la Tienda</a>
            </div>
          </div>
        </section>
    )
}

export default Hero;