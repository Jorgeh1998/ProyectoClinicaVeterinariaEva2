import React, { useState, useEffect } from 'react';
import { agregarProducto, obtenerProductos } from '../data/productos'; // Importamos la funcion CRUD

function Catalogo({agregarAlCarrito}) {
  // Una lista vacía de productos
  const [productos, setProductos] = useState([]);

  // Cargar los productos al montar el componente
  useEffect(() => {
    const datosCargados = obtenerProductos();
    setProductos(datosCargados);
  }, []); // Los corchetes vacíos indican que esto se ejecuta solo una vez al inicio

  return (
    <section id="productos" className="py-5 bg-light">
      <div className="container py-3">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary-custom">Farmacia y Tienda Veterinaria</h2>
          <p className="text-muted">Encuentra los mejores medicamentos y suplementos para tu mascota.</p>
        </div>

        <div className="row g-4">
          {productos.map((producto) => (
            <div key={producto.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm service-card">
                <img
                  src={producto.img}
                  className="card-img-top"
                  alt={producto.nombre}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center d-flex flex-column">
                  <span className="badge bg-secondary mb-2 align-self-center">
                    {producto.categoria}
                  </span>
                  <h5 className="card-title fw-bold flex-grow-1">{producto.nombre}</h5>
                  <p className="text-primary-custom fs-4 fw-bold">
                    ${producto.precio.toLocaleString('es-CL')}
                  </p>
                  
                  <button className="btn btn-warning fw-bold text-dark w-100 mt-auto"
                  onClick={() => agregarAlCarrito(producto)}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalogo;