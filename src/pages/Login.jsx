import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({ correo: false, password: false });
  
  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();

    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const correoLimpio = correo.trim().toLowerCase();
    const passLimpio = password.trim();

    // Validaciones originales de tu app.js
    const correoValido = correoLimpio.length > 0 &&
                         correoLimpio.length <= 100 &&
                         dominiosPermitidos.some(d => correoLimpio.endsWith(d));
    
    const passValido = passLimpio.length >= 4 && passLimpio.length <= 10;

    setErrores({
      correo: !correoValido,
      password: !passValido
    });

    if (correoValido && passValido) {
      if (correoLimpio === 'admin@gmail.com' && passLimpio === 'admin123') {
        sessionStorage.setItem('sesionAdmin', 'activa');
        navigate('/admin');
      } else {
        alert('¡Inicio de sesión exitoso! (Simulación)');
        setCorreo('');
        setPassword('');
        navigate('/');
      }
    }
  };

  return (
    <main className="flex-grow-1 d-flex align-items-center py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="card border-0 shadow-lg p-4 p-md-5">
              <div className="text-center mb-4">
                <i className="bi bi-person-circle text-primary-custom" style={{ fontSize: '3rem' }}></i>
                <h2 className="fw-bold mt-2">Inicio de Sesión</h2>
                <p className="text-muted">Accede a tu portal de cliente</p>
              </div>

              <form onSubmit={manejarSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="loginCorreo" className="form-label fw-semibold">Correo Electrónico *</label>
                  <input
                    type="email"
                    className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
                    id="loginCorreo"
                    placeholder="correo@duoc.cl"
                    maxLength="100"
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                      if (errores.correo) setErrores({ ...errores, correo: false });
                    }}
                  />
                  <div className="invalid-feedback">
                    El correo es obligatorio y debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="loginPassword" className="form-label fw-semibold">Contraseña *</label>
                  <input 
                    type="password" 
                    className={`form-control ${errores.password ? 'is-invalid' : ''}`}
                    id="loginPassword" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errores.password) setErrores({ ...errores, password: false });
                    }}
                  />
                  <div className="invalid-feedback">
                    La contraseña es obligatoria y debe tener entre 4 y 10 caracteres.
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary bg-primary-custom btn-lg fw-bold shadow-sm">
                    Iniciar Sesión
                  </button>
                </div>
                
                <div className="text-center mt-4">
                  <p className="small text-muted mb-0">
                    ¿No tienes una cuenta? <Link to="/registro" className="text-primary-custom fw-bold text-decoration-none">Regístrate aquí</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;