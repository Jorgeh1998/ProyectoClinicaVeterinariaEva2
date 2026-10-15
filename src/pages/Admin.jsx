import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
} from '../data/productos';

function Admin() {
  const navigate = useNavigate();

  // Estado de la lista de productos
  const [productos, setProductos] = useState([]);

  // Estados del formulario
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [idEditando, setIdEditando] = useState(null);

  // Estado de errores de validación
  const [errores, setErrores] = useState({ nombre: false, categoria: false, precio: false });

  // Verificar sesión de administrador y cargar productos al entrar
  useEffect(() => {
    if (sessionStorage.getItem('sesionAdmin') !== 'activa') {
      navigate('/login');
    } else {
      setProductos(obtenerProductos());
    }
  }, [navigate]);

  const cerrarSesion = () => {
    sessionStorage.removeItem('sesionAdmin');
    navigate('/login');
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const nombreLimpio = nombre.trim();
    const categoriaLimpia = categoria.trim();
    const precioNum = Number(precio.trim());

    const vNombre = nombreLimpio.length >= 3;
    const vCategoria = categoriaLimpia.length >= 2;
    const vPrecio = precioNum > 0;

    setErrores({
      nombre: !vNombre,
      categoria: !vCategoria,
      precio: !vPrecio
    });

    if (vNombre && vCategoria && vPrecio) {
      if (idEditando === null) {
        let mayorNumero = 0;
        productos.forEach((p) => {
          const num = Number(p.id.slice(2));
          if (num > mayorNumero) mayorNumero = num;
        });

        const nuevoProd = {
          id: 'ME' + String(mayorNumero + 1).padStart(3, '0'),
          nombre: nombreLimpio,
          categoria: categoriaLimpia,
          precio: precioNum,
          img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop'
        };

        const listaActualizada = agregarProducto(nuevoProd);
        setProductos([...listaActualizada]);
        alert(`Producto ${nuevoProd.nombre} agregado correctamente`);
      } else {
        // MODO EDITAR
        const listaActualizada = actualizarProducto(idEditando, {
          nombre: nombreLimpio,
          categoria: categoriaLimpia,
          precio: precioNum
        });
        setProductos([...listaActualizada]);
        alert(`Producto ${nombreLimpio} actualizado correctamente`);
      }

      // Limpiar formulario
      setNombre('');
      setCategoria('');
      setPrecio('');
      setIdEditando(null);
      setErrores({ nombre: false, categoria: false, precio: false });
    }
  };

  const cargarParaEditar = (prod) => {
    setNombre(prod.nombre);
    setCategoria(prod.categoria);
    setPrecio(String(prod.precio));
    setIdEditando(prod.id);
    setErrores({ nombre: false, categoria: false, precio: false });
  };

  const manejarEliminar = (prod) => {
    if (window.confirm(`¿Seguro que deseas eliminar '${prod.nombre}'?`)) {
      const listaActualizada = eliminarProducto(prod.id);
      setProductos([...listaActualizada]);
    }
  };

  return (
    <main className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary-custom mb-0">
          Panel Administrador
        </h2>
        <button className="btn btn-outline-danger fw-bold" onClick={cerrarSesion}>
          <i className="bi bi-box-arrow-right me-1"></i> Cerrar Sesión Admin
        </button>
      </div>

      {/* Tarjeta Formulario Agregar / Editar */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body p-4">
          <h4 className="fw-bold text-primary-custom mb-3">
            {idEditando ? `Editando Producto (${idEditando})` : 'Agregar Productos'}
          </h4>

          <form onSubmit={manejarSubmit} noValidate>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <label htmlFor="prod-name" className="form-label fw-semibold">Nombre del Producto *</label>
                <input
                  type="text"
                  className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                  id="prod-name"
                  placeholder="Ej: Amoxibay 250mg"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <div className="invalid-feedback">Ingresa el nombre del producto (mín. 3 letras).</div>
              </div>

              <div className="col-12 col-md-4">
                <label htmlFor="prod-categoria" className="form-label fw-semibold">Categoría *</label>
                <input
                  type="text"
                  className={`form-control ${errores.categoria ? 'is-invalid' : ''}`}
                  id="prod-categoria"
                  placeholder="Ej: Antibióticos"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
                <div className="invalid-feedback">Ingresa la categoría.</div>
              </div>

              <div className="col-12 col-md-4">
                <label htmlFor="prod-precio" className="form-label fw-semibold">Precio (CLP) *</label>
                <input
                  type="number"
                  className={`form-control ${errores.precio ? 'is-invalid' : ''}`}
                  id="prod-precio"
                  placeholder="Ingrese Precio"
                  value={precio}
                  onChange={(e) => setPrecio(e.target.value)}
                />
                <div className="invalid-feedback">Ingresa un precio mayor a 0.</div>
              </div>

              <div className="col-12 mt-4 d-flex gap-2">
                <button type="submit" className="btn btn-warning fw-bold text-dark px-4">
                  <i className="bi bi-plus-circle me-1"></i>
                  {idEditando ? 'Guardar Cambios' : 'Agregar Producto'}
                </button>
                {idEditando && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setIdEditando(null);
                      setNombre('');
                      setCategoria('');
                      setPrecio('');
                    }}
                  >
                    Cancelar Edición
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Tabla de Productos Existentes */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h4 className="fw-bold text-primary-custom mb-3">Listado de Productos</h4>
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Código</th>
                  <th>Producto</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td className="fw-semibold">{prod.nombre}</td>
                    <td>{prod.categoria}</td>
                    <td>${prod.precio.toLocaleString('es-CL')}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => cargarParaEditar(prod)}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => manejarEliminar(prod)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Admin;