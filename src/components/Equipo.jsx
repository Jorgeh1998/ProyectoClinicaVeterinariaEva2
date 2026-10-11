import React from "react";

function Equipo() {
    return(

        <section id="equipo" className="py-5">
          <div className="container py-3">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-primary-custom">Nuestro Equipo Profesional</h2>
              <p className="text-muted">Médicos y asistentes con alta vocación clínica al servicio de tu mascota.</p>
            </div>
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-md-4">
                <article className="card border-0 shadow-sm h-100 text-center overflow-hidden">
                  <img src="https://plus.unsplash.com/premium_photo-1661963697387-9ba753d0df95?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top team-img" alt="Dr. Roberto San Martín" />
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold mb-1">Dr. Roberto San Martín</h3>
                    <p className="badge bg-primary-subtle text-primary mb-2">Médico Veterinario Jefe</p>
                    <p className="card-text text-muted small">Especialista en medicina interna y cirugía de tejidos blandos con más de 12 años de trayectoria.</p>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-4">
                <article className="card border-0 shadow-sm h-100 text-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top team-img" alt="Dra. Camila Morales" />
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold mb-1">Dra. Camila Morales</h3>
                    <p className="badge bg-primary-subtle text-primary mb-2">Médico Veterinaria</p>
                    <p className="card-text text-muted small">Especialista en atención de animales exóticos, felinos y medicina preventiva.</p>
                  </div>
                </article>
              </div>
              <div className="col-12 col-md-4">
                <article className="card border-0 shadow-sm h-100 text-center overflow-hidden">
                  <img src="https://plus.unsplash.com/premium_photo-1677165479422-bc6eb405bd21?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top team-img" alt="Sebastián Contreras" />
                  <div className="card-body">
                    <h3 className="h5 card-title fw-bold mb-1">Sebastián Contreras</h3>
                    <p className="badge bg-success-subtle text-success mb-2">Técnico Veterinario</p>
                    <p className="card-text text-muted small">Apoyo clínico en pabellón, gestión y dosificación farmacológica y toma de muestras.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

    )
}

export default Equipo;