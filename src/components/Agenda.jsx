import React from "react";

function Agenda() {
    return(

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
        
    )
}

export default Agenda;