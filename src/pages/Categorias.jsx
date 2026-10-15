import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../data/productos';

function Categorias({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  useEffect(() => {
    const lista = obtenerProductos();
    setProductos(lista);
    // Seleccionar la primera categoría por defecto
    if (lista.length > 0) {
      setCategoriaSeleccionada(lista[0].categoria);
    }
  }, []);

  // Extraer categorías únicas con una imagen representativa
  const categoriasUnicas = Array.from(new Set(productos.map(p => p.categoria))).map(cat => {
    const prodEjemplo = productos.find(p => p.categoria === cat);
    return {
      nombre: cat,
      img: prodEjemplo ? prodEjemplo.img : ''
    };
  });

  const productosDeCategoria = productos.filter(p => p.categoria === categoriaSeleccionada);

  return (
    <main className="py-5 bg-light flex-grow-1">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary-custom">Categorías de Productos</h2>
          <p className="text-muted">Selecciona una categoría para explorar nuestros productos especializados.</p>
        </div>

        {/* Tarjetas superiores de Categorías (Figura 4) */}
        <div className="row g-4 justify-content-center mb-5">
          {categoriasUnicas.map((cat) => (
            <div key={cat.nombre} className="col-6 col-md-4 col-lg-2">
              <div
                className={`card h-100 text-center shadow-sm service-card ${categoriaSeleccionada === cat.nombre ? 'border-warning border-3' : 'border-0'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setCategoriaSeleccionada(cat.nombre)}
              >
                <img
                  src={cat.img}
                  className="card-img-top p-2 rounded"
                  alt={cat.nombre}
                  style={{ height: '110px', objectFit: 'cover' }}
                />
                <div className="card-body p-2 d-flex align-items-center justify-content-center">
                  <h6 className="card-title fw-bold mb-0">{cat.nombre}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Productos de la Categoría Seleccionada */}
        {categoriaSeleccionada && (
          <div>
            <h3 className="fw-bold text-primary-custom mb-4 border-bottom pb-2">
              Categoría: {categoriaSeleccionada}
            </h3>
            <div className="row g-4">
              {productosDeCategoria.map((producto) => (
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
                      <button
                        className="btn btn-warning fw-bold text-dark w-100 mt-auto"
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
        )}
      </div>
    </main>
  );
}

export default Categorias;