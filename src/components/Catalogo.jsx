import React, { useState, useEffect } from 'react';
import { obtenerProductos } from '../data/productos';

function Catalogo({ agregarAlCarrito }) {
  const [productos, setProductos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  // Extraer lista única de categorías para los botones de filtro
  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  // Filtrar productos por categoría seleccionada y por texto de búsqueda
  const productosFiltrados = productos.filter((prod) => {
    const coincideCategoria = categoriaActiva === 'Todas' || prod.categoria === categoriaActiva;
    const coincideBusqueda = prod.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <section id="productos" className="py-5 bg-light">
      <div className="container py-3">
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary-custom">Farmacia y Tienda Veterinaria</h2>
          <p className="text-muted">Filtra por categoría o busca el medicamento para tu mascota.</p>
        </div>

        {/* Barra de Búsqueda y Botones de Categorías */}
        <div className="row justify-content-center mb-4 g-3">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Buscar producto por nombre"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex justify-content-center flex-wrap gap-2">
            {categorias.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm fw-semibold ${categoriaActiva === cat ? 'btn-primary bg-primary-custom' : 'btn-outline-secondary'}`}
                onClick={() => setCategoriaActiva(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Listado de Productos */}
        <div className="row g-4">
          {productosFiltrados.length === 0 ? (
            <p className="text-center text-muted my-5">No se encontraron productos en esta categoría.</p>
          ) : (
            productosFiltrados.map((producto) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Catalogo;