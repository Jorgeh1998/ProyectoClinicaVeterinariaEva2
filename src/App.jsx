import React from "react";
import'./estilos.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <>

      {/*Usaremos el componenete Header */}
      
      <Header />
      
      <main>
        {/* HERO SECTION */}
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

        {/* SERVICIOS Y PROCEDIMIENTOS */}
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

        {/* EQUIPO MÉDICO */}
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

        {/* FORMULARIO DE AGENDAMIENTO */}
        <section id="agenda" className="py-5 bg-light">
          <div className="container py-3">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="card border-0 shadow-lg p-4 p-md-5">
                  <div className="text-center mb-4">
                    <i className="bi bi-calendar-heart text-primary-custom fs-1"></i>
                    <h2 className="fw-bold mt-2">Agenda tu Cita Médica</h2>
                    <p className="text-muted">Completa los datos del dueño y paciente para solicitar una hora médica. Te responderemos en minutos.</p>
                  </div>

                  <div id="alerta-exito" className="alert alert-success d-none d-flex align-items-center mb-4" role="alert">
                    <i className="bi bi-check-circle-fill fs-4 me-2"></i>
                    <div>
                      <strong>¡Solicitud enviada correctamente!</strong> Nos comunicaremos contigo para confirmar el horario.
                    </div>
                  </div>

                  <form id="formulario-agenda" noValidate>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="nombreDueno" className="form-label fw-semibold">Nombre del Titular / Dueño *</label>
                        <input type="text" className="form-control" id="nombreDueno" placeholder="Ej: Juan Pérez" autoComplete="name" />
                        <div className="invalid-feedback" id="error-nombreDueno">Por favor, ingresa tu nombre completo (mínimo 3 caracteres).</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="telefono" className="form-label fw-semibold">Teléfono de Contacto *</label>
                        <input type="tel" className="form-control" id="telefono" placeholder="Ej: 912345678" autoComplete="tel" />
                        <div className="invalid-feedback" id="error-telefono">Ingresa un número chileno válido de 9 dígitos.</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="correo" className="form-label fw-semibold">Correo Electrónico *</label>
                        <input type="email" className="form-control" id="correo" placeholder="correo@ejemplo.cl" autoComplete="email" />
                        <div className="invalid-feedback" id="error-correo">Ingresa un correo electrónico con formato válido.</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="nombreMascota" className="form-label fw-semibold">Nombre de la Mascota *</label>
                        <input type="text" className="form-control" id="nombreMascota" placeholder="Ej: Rocky, Luna" />
                        <div className="invalid-feedback" id="error-nombreMascota">Ingresa el nombre de tu mascota.</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="tipoMascota" className="form-label fw-semibold">Especie *</label>
                        <select className="form-select" id="tipoMascota" defaultValue="">
                          <option value="" disabled>Selecciona una especie...</option>
                          <option value="perro">Canino (Perro)</option>
                          <option value="gato">Felino (Gato)</option>
                          <option value="conejo">Conejo</option>
                          <option value="ave">Ave de compañía</option>
                          <option value="otro">Otro</option>
                        </select>
                        <div className="invalid-feedback" id="error-tipoMascota">Debes seleccionar una especie.</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="servicio" className="form-label fw-semibold">Motivo de Consulta / Servicio *</label>
                        <select className="form-select" id="servicio" defaultValue="">
                          <option value="" disabled>Selecciona un servicio...</option>
                          <option value="consulta">Consulta General</option>
                          <option value="vacuna">Vacunación / Desparasitación</option>
                          <option value="cirugia">Evaluación Quirúrgica</option>
                          <option value="control">Control Sano y Peso</option>
                        </select>
                        <div className="invalid-feedback" id="error-servicio">Selecciona el tipo de servicio que requieres.</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="fechaCita" className="form-label fw-semibold">Fecha Preferida *</label>
                        <input type="date" className="form-control" id="fechaCita" />
                        <div className="invalid-feedback" id="error-fechaCita">Selecciona una fecha igual o posterior a hoy.</div>
                      </div>

                      <div className="col-12 col-md-6">
                        <label htmlFor="horario" className="form-label fw-semibold">Bloque Horario *</label>
                        <select className="form-select" id="horario" defaultValue="">
                          <option value="" disabled>Selecciona un bloque...</option>
                          <option value="manana">Mañana (09:00 - 13:00 hrs)</option>
                          <option value="tarde">Tarde (15:00 - 19:00 hrs)</option>
                        </select>
                        <div className="invalid-feedback" id="error-horario">Elige una preferencia de bloque horario.</div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="observaciones" className="form-label fw-semibold">Comentarios o síntomas previos (Opcional)</label>
                        <textarea className="form-control" id="observaciones" rows="3" placeholder="Describe brevemente cualquier síntoma o detalle relevante para el médico..."></textarea>
                      </div>

                      <div className="col-12 text-center mt-4">
                        <button type="submit" className="btn btn-warning btn-lg fw-bold px-5 py-2 shadow-sm text-dark">
                          Confirmar Solicitud de Cita
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

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
