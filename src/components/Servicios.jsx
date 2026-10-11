import React from "react";

function Servicio() {
    return(

        <section id="servicios" className="py-5 bg-light">
          <div className="container py-3">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-primary-custom">Procedimientos y Servicios</h2>
              <p className="text-muted">Servicios clínicos integrales diseñados para la salud preventiva y curativa de tu compañero.</p>
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3">
                <article className="card h-100 service-card border-0 shadow-sm text-center p-3">
                  <div className="card-icon mx-auto my-3 text-primary-custom">
                    <i className="bi bi-bandaid fs-1"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold">Consulta General</h3>
                    <p className="card-text text-muted">Evaluación física exhaustiva, diagnóstico oportuno y planes terapéuticos personalizados.</p>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <article className="card h-100 service-card border-0 shadow-sm text-center p-3">
                  <div className="card-icon mx-auto my-3 text-primary-custom">
                    <i className="bi bi-shield-plus fs-1"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold">Vacunación y Desparasitación</h3>
                    <p className="card-text text-muted">Calendarios de inmunización canina y felina con registro digital y control de fechas.</p>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <article className="card h-100 service-card border-0 shadow-sm text-center p-3">
                  <div className="card-icon mx-auto my-3 text-primary-custom">
                    <i className="bi bi-scissors fs-1"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold">Cirugía Menor</h3>
                    <p className="card-text text-muted">Pabellón quirúrgico equipado, esterilizaciones y procedimientos de tejidos blandos seguros.</p>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <article className="card h-100 service-card border-0 shadow-sm text-center p-3">
                  <div className="card-icon mx-auto my-3 text-primary-custom">
                    <i className="bi bi-speedometer2 fs-1"></i>
                  </div>
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold">Control de Peso y Nutrición</h3>
                    <p className="card-text text-muted">Monitoreo del peso y asesoramiento dietético adaptado a la edad y requerimientos biológicos.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

    )
}

export default Servicio;