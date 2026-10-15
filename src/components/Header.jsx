import React from 'react';
import { Link } from 'react-router-dom';

function Header({ contadorCarrito }) {
  return (
    <header className="sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary-custom py-3">
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#inicio">
            <i className="bi bi-heart-pulse-fill text-warning fs-3"></i>
            <span>Veterinaria San Marcos</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-semibold align-items-lg-center">
              <li className="nav-item"><Link className="nav-link text-white active" to="/">Inicio</Link></li>
              <li className="nav-item"><a className="nav-link text-white" href="#servicios">Servicios</a></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/productos">Farmacia/Tienda</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Iniciar Sesión</Link></li>
              <li className="nav-item"><a className="nav-link text-white" href="#registro">Regístrate</a></li>
            </ul>
            
            <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0 align-items-lg-center">
              <a className="btn btn-warning fw-bold text-dark px-3 shadow-sm" href="#agenda">
                <i className="bi bi-calendar-check me-1"></i> Agendar Hora
              </a>
              <button className="btn btn-outline-light fw-bold px-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCarrito">
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