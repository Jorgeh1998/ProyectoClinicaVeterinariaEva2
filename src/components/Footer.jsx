import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-warning mb-3">Veterinaria San Marcos</h5>
            <p className="text-secondary small">
              Comprometidos desde 2009 con la salud, el bienestar animal y la tranquilidad de las familias en Rancagua.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3">Navegación Rápida</h5>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#productos" className="text-secondary text-decoration-none hover-link">Farmacia y Accesorios</a></li>
              <li><a href="#login" className="text-secondary text-decoration-none hover-link">Portal de Clientes (Login)</a></li>
              <li><Link to="#registro" className="text-secondary text-decoration-none hover-link">Crear una Cuenta</Link></li>
              <li><a href="#agenda" className="text-secondary text-decoration-none hover-link">Solicitud de Horas</a></li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h5 className="fw-bold mb-3">Canales de Urgencia</h5>
            <p className="text-secondary small mb-1">Para pacientes críticos comunícate inmediatamente a nuestra línea directa.</p>
            <a href="tel:+56722234567" className="btn btn-outline-warning btn-sm mt-2">Llamar a Urgencias</a>
          </div>
        </div>
        <hr className="border-secondary opacity-25" />
        <div className="text-center text-secondary small py-2">
          &copy; 2026 Veterinaria San Marcos | Proyecto Académico DSY1104 - DUOC UC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;