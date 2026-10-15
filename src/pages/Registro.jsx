import React, { useState } from 'react';

// Regiones y Comunas
const divisionTerritorial = [
  { region: "Región de Valparaíso", comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"] },
  { region: "Región Metropolitana", comunas: ["Santiago", "Puente Alto", "Maipú", "Providencia"] },
  { region: "Región de O'Higgins", comunas: ["Rancagua", "Machalí", "Rengo", "San Fernando"] }
];

function Registro() {
  // Estados para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');

  // Estado para mostrar la alerta verde de éxito
  const [exito, setExito] = useState(false);

  // Estado para los errores de validación
  const [errores, setErrores] = useState({
    nombre: false,
    correo: false,
    password: false,
    confirmPassword: false,
    region: false,
    comuna: false
  });

  // Obtener las comunas correspondientes a la región seleccionada
  const comunasDisponibles = divisionTerritorial.find((item) => item.region === region)?.comunas || [];

  // Cuando se cambia la region, deberia actualizar la region
  const manejarCambioRegion = (e) => {
    setRegion(e.target.value);
    setComuna('');
    if (errores.region) setErrores({ ...errores, region: false });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const dominiosPermitidos = ['@duoc.cl', '@duocuc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const nombreLimpio = nombre.trim();
    const correoLimpio = correo.trim().toLowerCase();

    // Reglas de validacion
    const vNombre = nombreLimpio.length >= 3 && nombreLimpio.length <= 50;
    const vCorreo = correoLimpio.length > 0 && dominiosPermitidos.some((d) => correoLimpio.endsWith(d));
    const vPass = password.length >= 4 && password.length <= 10;
    const vConfPass = confirmPassword === password && confirmPassword !== '';
    const vRegion = region !== '';
    const vComuna = comuna !== '';

    setErrores({
      nombre: !vNombre,
      correo: !vCorreo,
      password: !vPass,
      confirmPassword: !vConfPass,
      region: !vRegion,
      comuna: !vComuna
    });

    // Si todo es válido, mostramos alerta y limpiamos formulario
    if (vNombre && vCorreo && vPass && vConfPass && vRegion && vComuna) {
      setExito(true);
      setNombre('');
      setCorreo('');
      setTelefono('');
      setPassword('');
      setConfirmPassword('');
      setRegion('');
      setComuna('');

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setExito(false);
      }, 5000);
    }
  };

  return (
    <main className="flex-grow-1 py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="card border-0 shadow-lg p-4 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold mt-2 text-primary-custom">Registro de Cliente</h2>
                <p className="text-muted">Únete a nuestra plataforma para gestionar las atenciones de tus mascotas.</p>
              </div>

              {/* Alerta de Registro Exitoso */}
              {exito && (
                <div className="alert alert-success" role="alert">
                  <i className="bi bi-check-circle-fill me-2"></i> ¡Usuario registrado correctamente!
                </div>
              )}

              <form onSubmit={manejarSubmit} noValidate>
                <div className="row g-3">
                  {/* Nombre Completo */}
                  <div className="col-12">
                    <label htmlFor="regNombre" className="form-label fw-semibold">Nombre Completo *</label>
                    <input
                      type="text"
                      className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                      id="regNombre"
                      placeholder="Ej: Juan Pérez"
                      value={nombre}
                      onChange={(e) => {
                        setNombre(e.target.value);
                        if (errores.nombre) setErrores({ ...errores, nombre: false });
                      }}
                    />
                    <div className="invalid-feedback">El nombre es obligatorio (mínimo 3 caracteres, máx 50).</div>
                  </div>

                  {/* Correo */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="regCorreo" className="form-label fw-semibold">Correo *</label>
                    <input
                      type="email"
                      className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
                      id="regCorreo"
                      placeholder="ejemplo@duoc.cl"
                      value={correo}
                      onChange={(e) => {
                        setCorreo(e.target.value);
                        if (errores.correo) setErrores({ ...errores, correo: false });
                      }}
                    />
                    <div className="invalid-feedback">Obligatorio y debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.</div>
                  </div>

                  {/* Teléfono (Opcional) */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="regTelefono" className="form-label fw-semibold">Teléfono (Opcional)</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="regTelefono"
                      placeholder="912345678"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </div>

                  {/* Contraseña */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="regPassword" className="form-label fw-semibold">Contraseña *</label>
                    <input
                      type="password"
                      className={`form-control ${errores.password ? 'is-invalid' : ''}`}
                      id="regPassword"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errores.password) setErrores({ ...errores, password: false });
                      }}
                    />
                    <div className="invalid-feedback">Debe tener entre 4 y 10 caracteres.</div>
                  </div>

                  {/* Confirmar Contraseña */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="regConfirmPassword" className="form-label fw-semibold">Confirmar Contraseña *</label>
                    <input
                      type="password"
                      className={`form-control ${errores.confirmPassword ? 'is-invalid' : ''}`}
                      id="regConfirmPassword"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        if (errores.confirmPassword) setErrores({ ...errores, confirmPassword: false });
                      }}
                    />
                    <div className="invalid-feedback">Las contraseñas no coinciden.</div>
                  </div>

                  {/* Región */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="regRegion" className="form-label fw-semibold">Región *</label>
                    <select
                      className={`form-select ${errores.region ? 'is-invalid' : ''}`}
                      id="regRegion"
                      value={region}
                      onChange={manejarCambioRegion}
                    >
                      <option value="" disabled>Seleccione la región...</option>
                      {divisionTerritorial.map((item) => (
                        <option key={item.region} value={item.region}>
                          {item.region}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">Seleccione una región.</div>
                  </div>

                  {/* Comuna */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="regComuna" className="form-label fw-semibold">Comuna *</label>
                    <select
                      className={`form-select ${errores.comuna ? 'is-invalid' : ''}`}
                      id="regComuna"
                      value={comuna}
                      disabled={region === ''}
                      onChange={(e) => {
                        setComuna(e.target.value);
                        if (errores.comuna) setErrores({ ...errores, comuna: false });
                      }}
                    >
                      <option value="" disabled>Seleccione la comuna...</option>
                      {comunasDisponibles.map((com) => (
                        <option key={com} value={com}>
                          {com}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">Seleccione una comuna.</div>
                  </div>

                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-warning btn-lg fw-bold px-5 text-dark shadow">
                      Registrar Usuario
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registro;