import React from "react";

function Ubicacion() {
    return(

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
        
    )
}

export default Ubicacion;