import React from 'react';
import { Link } from 'react-router-dom';

function Header({ contadorCarrito = 0 }) {

  const irArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const irArribaInicio = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  return (
    <header className="sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/" onClick={irArriba}>
            <i className="bi bi-heart-pulse-fill text-warning fs-3"></i>
            <span>Veterinaria San Marcos</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold align-items-lg-center">
              {/* 2. INICIO: Usa Link to="/" */}
              <li className="nav-item">
                <Link className="nav-link text-white active" to="/" onClick={irArribaInicio}>Inicio</Link>
              </li>

              {/* 3. SERVICIOS: Lleva una barra / antes del # para volver al Home y bajar a Servicios */}
              <li className="nav-item">
                <a className="nav-link text-white" href="/#servicios">Servicios</a>
              </li>

              {/* 4. TIENDA, LOGIN Y REGISTRO: Todos con Link to="/..." */}
              <li className="nav-item">
                <Link className="nav-link text-white" to="/productos">Farmacia/Tienda</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">Iniciar Sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/registro">Regístrate</Link>
              </li>
            </ul>
            
            <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 align-items-lg-center">
              {/* 5. AGENDAR HORA: Lleva /#agenda para funcionar desde cualquier vista */}
              <a className="btn btn-warning fw-bold text-dark px-3 shadow-sm" href="/#agenda">
                <i className="bi bi-calendar-check me-1"></i> Agendar Hora
              </a>

              <button
                className="btn btn-outline-light fw-bold px-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasCarrito"
              >
                <i className="bi bi-cart3"></i> Carrito (<span>{contadorCarrito}</span>)
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;