import React, { useState } from 'react';

function Agenda() {
  const [nombreDueno, setNombreDueno] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [tipoMascota, setTipoMascota] = useState('');
  const [servicio, setServicio] = useState('');
  const [fechaCita, setFechaCita] = useState('');
  const [horario, setHorario] = useState('');
  const [observaciones, setObservaciones] = useState('');

  const [exito, setExito] = useState(false);

  const [errores, setErrores] = useState({
    nombreDueno: false,
    telefono: false,
    correo: false,
    nombreMascota: false,
    tipoMascota: false,
    servicio: false,
    fechaCita: false,
    horario: false
  });

  // Fecha mínima: hoy
  const hoy = new Date().toISOString().split('T')[0];

  const manejarSubmit = (e) => {
    e.preventDefault();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTel = /^[0-9]{9}$/;

    const vNombreDueno = nombreDueno.trim().length >= 3;
    const vTelefono = regexTel.test(telefono.trim());
    const vCorreo = regexEmail.test(correo.trim());
    const vNombreMascota = nombreMascota.trim().length >= 2;
    const vTipoMascota = tipoMascota !== '';
    const vServicio = servicio !== '';
    const vFechaCita = fechaCita !== '' && fechaCita >= hoy;
    const vHorario = horario !== '';

    setErrores({
      nombreDueno: !vNombreDueno,
      telefono: !vTelefono,
      correo: !vCorreo,
      nombreMascota: !vNombreMascota,
      tipoMascota: !vTipoMascota,
      servicio: !vServicio,
      fechaCita: !vFechaCita,
      horario: !vHorario
    });

    if (
      vNombreDueno &&
      vTelefono &&
      vCorreo &&
      vNombreMascota &&
      vTipoMascota &&
      vServicio &&
      vFechaCita &&
      vHorario
    ) {
      setExito(true);
      setNombreDueno('');
      setTelefono('');
      setCorreo('');
      setNombreMascota('');
      setTipoMascota('');
      setServicio('');
      setFechaCita('');
      setHorario('');
      setObservaciones('');

      setTimeout(() => {
        setExito(false);
      }, 6000);
    }
  };

  return (
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

              {/* Renderizado condicional para la alerta de éxito */}
              {exito && (
                <div id="alerta-exito" className="alert alert-success d-flex align-items-center mb-4" role="alert">
                  <i className="bi bi-check-circle-fill fs-4 me-2"></i>
                  <div>
                    <strong>¡Solicitud enviada correctamente!</strong> Nos comunicaremos contigo para confirmar el horario.
                  </div>
                </div>
              )}

              <form id="formulario-agenda" onSubmit={manejarSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="nombreDueno" className="form-label fw-semibold">Nombre del Titular / Dueño *</label>
                    <input
                      type="text"
                      className={`form-control ${errores.nombreDueno ? 'is-invalid' : ''}`}
                      id="nombreDueno"
                      placeholder="Ej: Juan Pérez"
                      value={nombreDueno}
                      onChange={(e) => {
                        setNombreDueno(e.target.value);
                        if (errores.nombreDueno) setErrores({ ...errores, nombreDueno: false });
                      }}
                    />
                    <div className="invalid-feedback">Por favor, ingresa tu nombre completo (mínimo 3 caracteres).</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="telefono" className="form-label fw-semibold">Teléfono de Contacto *</label>
                    <input
                      type="tel"
                      className={`form-control ${errores.telefono ? 'is-invalid' : ''}`}
                      id="telefono"
                      placeholder="Ej: 912345678"
                      value={telefono}
                      onChange={(e) => {
                        setTelefono(e.target.value);
                        if (errores.telefono) setErrores({ ...errores, telefono: false });
                      }}
                    />
                    <div className="invalid-feedback">Ingresa un número chileno válido de 9 dígitos.</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="correo" className="form-label fw-semibold">Correo Electrónico *</label>
                    <input
                      type="email"
                      className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
                      id="correo"
                      placeholder="correo@ejemplo.cl"
                      value={correo}
                      onChange={(e) => {
                        setCorreo(e.target.value);
                        if (errores.correo) setErrores({ ...errores, correo: false });
                      }}
                    />
                    <div className="invalid-feedback">Ingresa un correo electrónico con formato válido.</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="nombreMascota" className="form-label fw-semibold">Nombre de la Mascota *</label>
                    <input
                      type="text"
                      className={`form-control ${errores.nombreMascota ? 'is-invalid' : ''}`}
                      id="nombreMascota"
                      placeholder="Ej: Rocky, Luna"
                      value={nombreMascota}
                      onChange={(e) => {
                        setNombreMascota(e.target.value);
                        if (errores.nombreMascota) setErrores({ ...errores, nombreMascota: false });
                      }}
                    />
                    <div className="invalid-feedback">Ingresa el nombre de tu mascota.</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="tipoMascota" className="form-label fw-semibold">Especie *</label>
                    <select
                      className={`form-select ${errores.tipoMascota ? 'is-invalid' : ''}`}
                      id="tipoMascota"
                      value={tipoMascota}
                      onChange={(e) => {
                        setTipoMascota(e.target.value);
                        if (errores.tipoMascota) setErrores({ ...errores, tipoMascota: false });
                      }}
                    >
                      <option value="" disabled>Selecciona una especie...</option>
                      <option value="perro">Canino (Perro)</option>
                      <option value="gato">Felino (Gato)</option>
                      <option value="conejo">Conejo</option>
                      <option value="ave">Ave de compañía</option>
                      <option value="otro">Otro</option>
                    </select>
                    <div className="invalid-feedback">Debes seleccionar una especie.</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="servicio" className="form-label fw-semibold">Motivo de Consulta / Servicio *</label>
                    <select
                      className={`form-select ${errores.servicio ? 'is-invalid' : ''}`}
                      id="servicio"
                      value={servicio}
                      onChange={(e) => {
                        setServicio(e.target.value);
                        if (errores.servicio) setErrores({ ...errores, servicio: false });
                      }}
                    >
                      <option value="" disabled>Selecciona un servicio...</option>
                      <option value="consulta">Consulta General</option>
                      <option value="vacuna">Vacunación / Desparasitación</option>
                      <option value="cirugia">Evaluación Quirúrgica</option>
                      <option value="control">Control Sano y Peso</option>
                    </select>
                    <div className="invalid-feedback">Selecciona el tipo de servicio que requieres.</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="fechaCita" className="form-label fw-semibold">Fecha Preferida *</label>
                    <input
                      type="date"
                      className={`form-control ${errores.fechaCita ? 'is-invalid' : ''}`}
                      id="fechaCita"
                      min={hoy}
                      value={fechaCita}
                      onChange={(e) => {
                        setFechaCita(e.target.value);
                        if (errores.fechaCita) setErrores({ ...errores, fechaCita: false });
                      }}
                    />
                    <div className="invalid-feedback">Selecciona una fecha igual o posterior a hoy.</div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="horario" className="form-label fw-semibold">Bloque Horario *</label>
                    <select
                      className={`form-select ${errores.horario ? 'is-invalid' : ''}`}
                      id="horario"
                      value={horario}
                      onChange={(e) => {
                        setHorario(e.target.value);
                        if (errores.horario) setErrores({ ...errores, horario: false });
                      }}
                    >
                      <option value="" disabled>Selecciona un bloque...</option>
                      <option value="manana">Mañana (09:00 - 13:00 hrs)</option>
                      <option value="tarde">Tarde (15:00 - 19:00 hrs)</option>
                    </select>
                    <div className="invalid-feedback">Elige una preferencia de bloque horario.</div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="observaciones" className="form-label fw-semibold">Comentarios o síntomas previos (Opcional)</label>
                    <textarea
                      className="form-control"
                      id="observaciones"
                      rows="3"
                      placeholder="Describe brevemente cualquier síntoma o detalle relevante para el médico..."
                      value={observaciones}
                      onChange={(e) => setObservaciones(e.target.value)}
                    ></textarea>
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
  );
}

export default Agenda;