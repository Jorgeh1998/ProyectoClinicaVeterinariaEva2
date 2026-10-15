import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../data/productos';

function Ofertas({ agregarAlCarrito }) {
  const [productosOferta, setProductosOferta] = useState([]);

  useEffect(() => {
    const todos = obtenerProductos();
    // Aplicamos un 20% de descuento a los productos seleccionados para la vista de Ofertas
    const enOferta = todos.filter((_, index) => index % 2 === 0).map(prod => ({
      ...prod,
      precioAnterior: prod.precio,
      precio: Math.round(prod.precio * 0.8) // 20% OFF
    }));
    setProductosOferta(enOferta);
  }, []);

  return (
    <main className="py-5 bg-light flex-grow-1">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-danger px-3 py-2 mb-2 rounded-pill fw-bold">DESCUENTOS ESPECIALES</span>
          <h2 className="fw-bold text-primary-custom">Productos en Oferta</h2>
          <p className="text-muted">Aprovecha un 20% de descuento en medicamentos y antiparasitarios seleccionados.</p>
        </div>

        <div className="row g-4">
          {productosOferta.map((producto) => (
            <div key={producto.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm service-card position-relative">
                <span className="badge bg-danger position-absolute top-0 end-0 m-2 fs-6">
                  -20%
                </span>
                <img
                  src={producto.img}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <span className="badge bg-secondary mb-2 align-self-center">{producto.categoria}</span>
                  <h5 className="card-title fw-bold flex-grow-1">{producto.nombre}</h5>
                  <div>
                    <span className="text-muted text-decoration-line-through me-2 small">
                      ${producto.precioAnterior.toLocaleString('es-CL')}
                    </span>
                    <span className="text-danger fs-4 fw-bold">
                      ${producto.precio.toLocaleString('es-CL')}
                    </span>
                  </div>
                  <button
                    className="btn btn-warning fw-bold text-dark w-100 mt-3"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Añadir Oferta
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Ofertas;