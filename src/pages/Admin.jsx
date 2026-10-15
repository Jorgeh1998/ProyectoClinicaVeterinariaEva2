import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  eliminarProducto,
  obtenerUsuarios,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario
} from '../data/productos';

function Admin() {
  const navigate = useNavigate();

  // Pestaña activa del menú lateral: dashboard, ordenes, productos criticos, categorias, usuarios, reportes, perfil
  const [vistaActiva, setVistaActiva] = useState('dashboard');

  // Datos principales
  const [productos, setProductos] = useState([]);
  const [ordenes, setOrdenes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  // Sub-vistas (Mostrar Boleta / Historial de Compras de Usuario)
  const [boletaSeleccionada, setBoletaSeleccionada] = useState(null);
  const [usuarioHistorial, setUsuarioHistorial] = useState(null);

  // Estados Formulario Producto
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('10');
  const [idEditando, setIdEditando] = useState(null);
  const [erroresProd, setErroresProd] = useState({ nombre: false, categoria: false, precio: false });

  // Estados Formulario Categoría
  const [nuevaCatNombre, setNuevaCatNombre] = useState('');
  const [categoriasExtra, setCategoriasExtra] = useState([]);

  // Estados Formulario Usuario
  const [uNombre, setUNombre] = useState('');
  const [uCorreo, setUCorreo] = useState('');
  const [uRol, setURol] = useState('Cliente');
  const [idUsuarioEditando, setIdUsuarioEditando] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem('sesionAdmin') !== 'activa') {
      navigate('/login');
    } else {
      setProductos(obtenerProductos());
      setUsuarios(obtenerUsuarios());
      const ordenesGuardadas = JSON.parse(localStorage.getItem('ordenesVeterinaria')) || [
        {
          id: "20260705",
          codigo: "ORDER12345",
          fecha: new Date().toLocaleDateString('es-CL'),
          estado: "Pagado",
          cliente: {
            nombre: "Simon",
            apellidos: "Endesuso",
            correo: "SimonSuccionador@email.com",
            calle: "Avenida siempre viva 123",
            region: "Región Metropolitana de Santiago",
            comuna: "Puente Alto",
            indicaciones: "Dejar en la casa del vecino"
          },
          items: [
            { id: "ME001", nombre: "Amoxibay 250mg", precio: 4200, cantidad: 2 },
            { id: "ME004", nombre: "Nexgard Masticable", precio: 9500, cantidad: 1 }
          ],
          total: 17900
        }
      ];
      setOrdenes(ordenesGuardadas);
    }
  }, [navigate]);

  const cerrarSesion = () => {
    sessionStorage.removeItem('sesionAdmin');
    navigate('/login');
  };

  // LÓGICA DE PRODUCTOS
 
  const manejarSubmitProducto = (e) => {
    e.preventDefault();
    const nombreLimpio = nombre.trim();
    const categoriaLimpia = categoria.trim();
    const precioNum = Number(precio);
    const stockNum = Number(stock);

    const vNombre = nombreLimpio.length >= 3;
    const vCategoria = categoriaLimpia.length >= 2;
    const vPrecio = precioNum > 0;

    setErroresProd({ nombre: !vNombre, categoria: !vCategoria, precio: !vPrecio });

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
          stock: stockNum >= 0 ? stockNum : 10,
          img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop'
        };

        setProductos([...agregarProducto(nuevoProd)]);
        alert(`Producto ${nuevoProd.nombre} agregado correctamente`);
      } else {
        const actualizados = actualizarProducto(idEditando, {
          nombre: nombreLimpio,
          categoria: categoriaLimpia,
          precio: precioNum,
          stock: stockNum
        });
        setProductos([...actualizados]);
        alert(`Producto ${nombreLimpio} actualizado correctamente`);
      }

      setNombre('');
      setCategoria('');
      setPrecio('');
      setStock('10');
      setIdEditando(null);
    }
  };

  const cargarProductoEditar = (prod) => {
    setNombre(prod.nombre);
    setCategoria(prod.categoria);
    setPrecio(String(prod.precio));
    setStock(String(prod.stock ?? 10));
    setIdEditando(prod.id);
    setVistaActiva('productos');
  };

  const manejarEliminarProducto = (prod) => {
    if (window.confirm(`¿Seguro que deseas eliminar '${prod.nombre}'?`)) {
      setProductos([...eliminarProducto(prod.id)]);
    }
  };

  // LÓGICA DE USUARIOS

  const manejarSubmitUsuario = (e) => {
    e.preventDefault();
    if (uNombre.trim().length < 3 || !uCorreo.includes('@')) {
      alert('Ingresa un nombre válido (mín. 3 letras) y un correo con @.');
      return;
    }

    if (idUsuarioEditando === null) {
      const nuevoId = 'US' + String(usuarios.length + 1).padStart(3, '0');
      const lista = agregarUsuario({
        id: nuevoId,
        nombre: uNombre.trim(),
        correo: uCorreo.trim(),
        rol: uRol,
        region: "Región de O'Higgins",
        comuna: "Rancagua"
      });
      setUsuarios([...lista]);
    } else {
      const lista = actualizarUsuario(idUsuarioEditando, {
        nombre: uNombre.trim(),
        correo: uCorreo.trim(),
        rol: uRol
      });
      setUsuarios([...lista]);
    }

    setUNombre('');
    setUCorreo('');
    setURol('Cliente');
    setIdUsuarioEditando(null);
  };

  // Listas derivadas para vistas y reportes
  const productosCriticos = productos.filter(p => (p.stock ?? 10) <= 5);
  const categoriasUnicas = Array.from(new Set([...productos.map(p => p.categoria), ...categoriasExtra]));
  const totalVentasCLP = ordenes.reduce((acc, o) => acc + (o.total || 0), 0);

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row min-vh-100">
        
        {/* SIDEBAR / MENÚ LATERAL DEL ADMINISTRADOR*/}
        <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 d-flex flex-column justify-content-between shadow-sm">
          <div>
            <div className="pb-3 mb-3 border-bottom">
              <span className="fw-bold text-primary-custom fs-5">
                <i className="bi bi-shield-lock-fill text-warning me-2"></i>
                Admin Panel
              </span>
            </div>

            <ul className="nav nav-pills flex-column gap-1">
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'dashboard' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => { setVistaActiva('dashboard'); setBoletaSeleccionada(null); }}
                >
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'ordenes' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => { setVistaActiva('ordenes'); setBoletaSeleccionada(null); }}
                >
                  <i className="bi bi-receipt me-2"></i> Órdenes / Boletas
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'productos' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => setVistaActiva('productos')}
                >
                  <i className="bi bi-box-seam me-2"></i> Productos
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'criticos' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => setVistaActiva('criticos')}
                >
                  <i className="bi bi-exclamation-triangle me-2 text-danger"></i> Stock Crítico ({productosCriticos.length})
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'categorias' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => setVistaActiva('categorias')}
                >
                  <i className="bi bi-tags me-2"></i> Categorías
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'usuarios' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => { setVistaActiva('usuarios'); setUsuarioHistorial(null); }}
                >
                  <i className="bi bi-people me-2"></i> Usuarios
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'reportes' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => setVistaActiva('reportes')}
                >
                  <i className="bi bi-bar-chart-line me-2"></i> Reportes
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link w-100 text-start fw-semibold ${vistaActiva === 'perfil' ? 'active bg-primary-custom' : 'text-dark'}`}
                  onClick={() => setVistaActiva('perfil')}
                >
                  <i className="bi bi-person-badge me-2"></i> Perfil
                </button>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-top d-grid gap-2 mt-4">
            <Link to="/productos" className="btn btn-dark btn-sm fw-bold">
              <i className="bi bi-shop me-1"></i> Ver Tienda
            </Link>
            <button className="btn btn-danger btn-sm fw-bold" onClick={cerrarSesion}>
              <i className="bi bi-box-arrow-right me-1"></i> Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* CONTENIDO PRINCIPAL SEGÚN PESTAÑA SELECCIONADA */}
        <main className="col-12 col-md-9 col-lg-10 p-4">

          {/* 1. VISTA DASHBOARD */}
          {vistaActiva === 'dashboard' && (
            <div>
              <h3 className="fw-bold mb-1">Dashboard</h3>
              <p className="text-muted mb-4">Resumen de las actividades diarias de Veterinaria San Marcos</p>

              {/* Tarjetas de colores superiores */}
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-4">
                  <div className="card border-0 shadow-sm bg-primary text-white p-3">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-cart-check fs-1"></i>
                      <div>
                        <h6 className="mb-0">Compras / Órdenes</h6>
                        <h2 className="fw-bold mb-0">{ordenes.length}</h2>
                        <small>Total recaudado: ${totalVentasCLP.toLocaleString('es-CL')}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card border-0 shadow-sm bg-success text-white p-3">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-box-seam fs-1"></i>
                      <div>
                        <h6 className="mb-0">Productos</h6>
                        <h2 className="fw-bold mb-0">{productos.length}</h2>
                        <small>Críticos en stock: {productosCriticos.length}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="card border-0 shadow-sm bg-warning text-dark p-3">
                    <div className="d-flex align-items-center gap-3">
                      <i className="bi bi-people-fill fs-1"></i>
                      <div>
                        <h6 className="mb-0">Usuarios</h6>
                        <h2 className="fw-bold mb-0">{usuarios.length}</h2>
                        <small>Clientes y administradores activos</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cuadrícula de tarjetas de acceso rápido */}
              <div className="row g-4">
                {[
                  { id: 'dashboard', icon: 'bi-speedometer2', titulo: 'Dashboard', desc: 'Visión general de todas las métricas y estadísticas clave del sistema.' },
                  { id: 'ordenes', icon: 'bi-receipt', titulo: 'Órdenes / Boletas', desc: 'Gestión, seguimiento y detalle de todas las boletas de compra realizadas.' },
                  { id: 'productos', icon: 'bi-box-seam', titulo: 'Productos', desc: 'Administrar inventario, precios, stock y productos críticos.' },
                  { id: 'categorias', icon: 'bi-tags', titulo: 'Categorías', desc: 'Organizar productos en categorías para facilitar su navegación.' },
                  { id: 'usuarios', icon: 'bi-people', titulo: 'Usuarios', desc: 'Gestión de cuentas de usuario, roles e historial de compras.' },
                  { id: 'reportes', icon: 'bi-bar-chart-line', titulo: 'Reportes', desc: 'Generación de informes detallados sobre las operaciones de la tienda.' },
                  { id: 'perfil', icon: 'bi-person-badge', titulo: 'Perfil', desc: 'Administración de la información personal y configuración de cuenta.' }
                ].map(item => (
                  <div key={item.id} className="col-12 col-sm-6 col-lg-3">
                    <div
                      className="card h-100 border-0 shadow-sm text-center p-3 service-card" 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setVistaActiva(item.id)}
                    >
                      <i className={`bi ${item.icon} fs-2 text-primary-custom mb-2`}></i>
                      <h5 className="fw-bold">{item.titulo}</h5>
                      <p className="text-muted small mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="col-12 col-sm-6 col-lg-3">
                  <Link to="/productos" className="text-decoration-none text-dark">
                    <div className="card h-100 border-0 shadow-sm text-center p-3 service-card">
                      <i className="bi bi-shop fs-2 text-primary-custom mb-2"></i>
                      <h5 className="fw-bold">Tienda</h5>
                      <p className="text-muted small mb-0">Visualiza tu tienda pública en tiempo real como cliente.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2. VISTA ORDENES / MOSTRAR BOLETA */}
          {vistaActiva === 'ordenes' && (
            <div className="card border-0 shadow-sm p-4">
              {boletaSeleccionada ? (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold text-primary-custom mb-0">
                      Boleta #{boletaSeleccionada.id} ({boletaSeleccionada.codigo})
                    </h4>
                    <button className="btn btn-secondary btn-sm" onClick={() => setBoletaSeleccionada(null)}>
                      Volver al listado
                    </button>
                  </div>
                  <p className="mb-1"><strong>Cliente:</strong> {boletaSeleccionada.cliente?.nombre} {boletaSeleccionada.cliente?.apellidos}</p>
                  <p className="mb-1"><strong>Correo:</strong> {boletaSeleccionada.cliente?.correo}</p>
                  <p className="mb-3"><strong>Dirección:</strong> {boletaSeleccionada.cliente?.calle}, {boletaSeleccionada.cliente?.comuna} ({boletaSeleccionada.cliente?.region})</p>

                  <table className="table table-bordered align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boletaSeleccionada.items?.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.nombre}</td>
                          <td>${item.precio?.toLocaleString('es-CL')}</td>
                          <td>{item.cantidad}</td>
                          <td className="fw-bold">${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <h5 className="fw-bold text-end mt-3">Total Pagado: ${boletaSeleccionada.total?.toLocaleString('es-CL')}</h5>
                </div>
              ) : (
                <div>
                  <h4 className="fw-bold text-primary-custom mb-3">Órdenes y Boletas Emitidas</h4>
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-dark">
                        <tr>
                          <th>Nro Boleta</th>
                          <th>Fecha</th>
                          <th>Cliente</th>
                          <th>Total</th>
                          <th>Estado</th>
                          <th className="text-center">Acción</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ordenes.map((ord, idx) => (
                          <tr key={idx}>
                            <td className="fw-bold">#{ord.id}</td>
                            <td>{ord.fecha}</td>
                            <td>{ord.cliente?.nombre} {ord.cliente?.apellidos}</td>
                            <td>${ord.total?.toLocaleString('es-CL')}</td>
                            <td><span className="badge bg-success">{ord.estado || 'Pagado'}</span></td>
                            <td className="text-center">
                              <button className="btn btn-sm btn-primary bg-primary-custom" onClick={() => setBoletaSeleccionada(ord)}>
                                Mostrar Boleta
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 3. VISTA PRODUCTOS (Nuevo, Mostrar y Editar) */}
          {vistaActiva === 'productos' && (
            <div>
              <div className="card border-0 shadow-sm mb-4 p-4">
                <h4 className="fw-bold text-primary-custom mb-3">
                  {idEditando ? `Editando Producto (${idEditando})` : 'Nuevo Producto'}
                </h4>
                <form onSubmit={manejarSubmitProducto} noValidate>
                  <div className="row g-3">
                    <div className="col-12 col-md-4">
                      <label className="form-label fw-semibold">Nombre del Producto *</label>
                      <input type="text" className={`form-control ${erroresProd.nombre ? 'is-invalid' : ''}`} value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Ej: Amoxibay 250mg" />
                      <div className="invalid-feedback">Mínimo 3 caracteres.</div>
                    </div>
                    <div className="col-12 col-md-3">
                      <label className="form-label fw-semibold">Categoría *</label>
                      <input type="text" className={`form-control ${erroresProd.categoria ? 'is-invalid' : ''}`} value={categoria} onChange={e => setCategoria(e.target.value)} placeholder="Ej: Antibióticos" />
                      <div className="invalid-feedback">Ingresa una categoría.</div>
                    </div>
                    <div className="col-12 col-md-3">
                      <label className="form-label fw-semibold">Precio (CLP) *</label>
                      <input type="number" className={`form-control ${erroresProd.precio ? 'is-invalid' : ''}`} value={precio} onChange={e => setPrecio(e.target.value)} placeholder="Ej: 4500" />
                      <div className="invalid-feedback">Mayor a 0.</div>
                    </div>
                    <div className="col-12 col-md-2">
                      <label className="form-label fw-semibold">Stock *</label>
                      <input type="number" className="form-control" value={stock} onChange={e => setStock(e.target.value)} />
                    </div>
                    <div className="col-12 d-flex gap-2">
                      <button type="submit" className="btn btn-warning fw-bold text-dark px-4">
                        {idEditando ? 'Guardar Cambios' : 'Agregar Producto'}
                      </button>
                      {idEditando && (
                        <button type="button" className="btn btn-secondary" onClick={() => { setIdEditando(null); setNombre(''); setCategoria(''); setPrecio(''); }}>
                          Cancelar
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              <div className="card border-0 shadow-sm p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-bold text-primary-custom mb-0">Listado de Productos</h4>
                  <button className="btn btn-outline-danger btn-sm fw-bold" onClick={() => setVistaActiva('criticos')}>
                    Ver Productos Críticos ({productosCriticos.length})
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-dark">
                      <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th className="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map(prod => (
                        <tr key={prod.id}>
                          <td>{prod.id}</td>
                          <td className="fw-semibold">{prod.nombre}</td>
                          <td>{prod.categoria}</td>
                          <td>${prod.precio.toLocaleString('es-CL')}</td>
                          <td>
                            <span className={`badge ${(prod.stock ?? 10) <= 5 ? 'bg-danger' : 'bg-success'}`}>
                              {prod.stock ?? 10} un.
                            </span>
                          </td>
                          <td className="text-center">
                            <button className="btn btn-sm btn-outline-warning me-2" onClick={() => cargarProductoEditar(prod)}>
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => manejarEliminarProducto(prod)}>
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
          )}

          {/* 4. VISTA LISTADO PRODUCTOS CRÍTICOS */}
          {vistaActiva === 'criticos' && (
            <div className="card border-0 shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <h4 className="fw-bold text-danger mb-0">Listado de Productos Críticos (Stock &le; 5)</h4>
                  <p className="text-muted small mb-0">Productos que requieren reposición urgente de inventario.</p>
                </div>
                <button className="btn btn-secondary btn-sm" onClick={() => setVistaActiva('productos')}>
                  Ver Todos los Productos
                </button>
              </div>
              <table className="table table-hover align-middle">
                <thead className="table-danger">
                  <tr>
                    <th>Código</th>
                    <th>Producto</th>
                    <th>Categoría</th>
                    <th>Stock Actual</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {productosCriticos.map(prod => (
                    <tr key={prod.id}>
                      <td>{prod.id}</td>
                      <td className="fw-bold">{prod.nombre}</td>
                      <td>{prod.categoria}</td>
                      <td><span className="badge bg-danger">{prod.stock} unidades</span></td>
                      <td>
                        <button className="btn btn-sm btn-warning fw-bold" onClick={() => cargarProductoEditar(prod)}>
                          Reponer Stock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 5. VISTA CATEGORÍAS */}
          {vistaActiva === 'categorias' && (
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold text-primary-custom mb-3">Gestión de Categorías</h4>
              <form
                className="d-flex gap-2 mb-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (nuevaCatNombre.trim().length >= 2) {
                    setCategoriasExtra([...categoriasExtra, nuevaCatNombre.trim()]);
                    setNuevaCatNombre('');
                  }
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de nueva categoría..."
                  value={nuevaCatNombre}
                  onChange={e => setNuevaCatNombre(e.target.value)}
                />
                <button type="submit" className="btn btn-warning fw-bold text-nowrap">Nueva Categoría</button>
              </form>

              <ul className="list-group">
                {categoriasUnicas.map(cat => (
                  <li key={cat} className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-semibold">{cat}</span>
                    <span className="badge bg-primary rounded-pill">
                      {productos.filter(p => p.categoria === cat).length} productos
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. VISTA USUARIOS + HISTORIAL DE COMPRAS */}
          {vistaActiva === 'usuarios' && (
            <div>
              {usuarioHistorial ? (
                <div className="card border-0 shadow-sm p-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold text-primary-custom mb-0">
                      Historial de Compras: {usuarioHistorial.nombre}
                    </h4>
                    <button className="btn btn-secondary btn-sm" onClick={() => setUsuarioHistorial(null)}>
                      Volver a Usuarios
                    </button>
                  </div>
                  <p className="text-muted small">Correo: {usuarioHistorial.correo}</p>
                  {ordenes.filter(o => o.cliente?.correo?.toLowerCase() === usuarioHistorial.correo.toLowerCase()).length === 0 ? (
                    <div className="alert alert-info">Este usuario aún no registra boletas asociadas a su correo.</div>
                  ) : (
                    <table className="table table-bordered">
                      <thead className="table-light">
                        <tr>
                          <th>Boleta</th>
                          <th>Fecha</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ordenes
                          .filter(o => o.cliente?.correo?.toLowerCase() === usuarioHistorial.correo.toLowerCase())
                          .map((o, idx) => (
                            <tr key={idx}>
                              <td>#{o.id}</td>
                              <td>{o.fecha}</td>
                              <td className="fw-bold">${o.total?.toLocaleString('es-CL')}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ) : (
                <>
                  <div className="card border-0 shadow-sm p-4 mb-4">
                    <h4 className="fw-bold text-primary-custom mb-3">
                      {idUsuarioEditando ? 'Editar Usuario' : 'Nuevo Usuario'}
                    </h4>
                    <form onSubmit={manejarSubmitUsuario} className="row g-3">
                      <div className="col-12 col-md-4">
                        <input type="text" className="form-control" placeholder="Nombre completo" value={uNombre} onChange={e => setUNombre(e.target.value)} />
                      </div>
                      <div className="col-12 col-md-4">
                        <input type="email" className="form-control" placeholder="Correo electrónico" value={uCorreo} onChange={e => setUCorreo(e.target.value)} />
                      </div>
                      <div className="col-12 col-md-2">
                        <select className="form-select" value={uRol} onChange={e => setURol(e.target.value)}>
                          <option value="Cliente">Cliente</option>
                          <option value="Administrador">Administrador</option>
                        </select>
                      </div>
                      <div className="col-12 col-md-2 d-grid">
                        <button type="submit" className="btn btn-warning fw-bold">
                          {idUsuarioEditando ? 'Guardar' : 'Agregar'}
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="card border-0 shadow-sm p-4">
                    <h4 className="fw-bold text-primary-custom mb-3">Mostrar Usuarios</h4>
                    <div className="table-responsive">
                      <table className="table table-hover align-middle">
                        <thead className="table-dark">
                          <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Rol</th>
                            <th className="text-center">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {usuarios.map(u => (
                            <tr key={u.id}>
                              <td>{u.id}</td>
                              <td className="fw-semibold">{u.nombre}</td>
                              <td>{u.correo}</td>
                              <td><span className="badge bg-secondary">{u.rol}</span></td>
                              <td className="text-center">
                                <button className="btn btn-sm btn-outline-info me-2" onClick={() => setUsuarioHistorial(u)}>
                                  Historial de Compras
                                </button>
                                <button className="btn btn-sm btn-outline-warning me-2" onClick={() => { setIdUsuarioEditando(u.id); setUNombre(u.nombre); setUCorreo(u.correo); setURol(u.rol); }}>
                                  <i className="bi bi-pencil"></i>
                                </button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => setUsuarios([...eliminarUsuario(u.id)])}>
                                  <i className="bi bi-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* 7. VISTA REPORTES */}
          {vistaActiva === 'reportes' && (
            <div className="card border-0 shadow-sm p-4">
              <h4 className="fw-bold text-primary-custom mb-3">Reportes del Sistema</h4>
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="p-3 border rounded bg-white">
                    <h6 className="fw-bold text-muted">Valorización Total de Inventario</h6>
                    <h3 className="fw-bold text-primary-custom">
                      ${productos.reduce((acc, p) => acc + (p.precio * (p.stock ?? 10)), 0).toLocaleString('es-CL')}
                    </h3>
                    <p className="small text-muted mb-0">Suma de (precio &times; stock) de los {productos.length} productos activos.</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-3 border rounded bg-white">
                    <h6 className="fw-bold text-muted">Ingresos por Ventas Registradas</h6>
                    <h3 className="fw-bold text-success">${totalVentasCLP.toLocaleString('es-CL')}</h3>
                    <p className="small text-muted mb-0">Basado en {ordenes.length} boletas emitidas.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 8. VISTA PERFIL */}
          {vistaActiva === 'perfil' && (
            <div className="card border-0 shadow-sm p-4" style={{ maxWidth: '600px' }}>
              <h4 className="fw-bold text-primary-custom mb-3">Perfil del Administrador</h4>
              <div className="mb-3">
                <label className="form-label text-muted small">Nombre</label>
                <input type="text" className="form-control bg-light" value="Administrador Veterinaria San Marcos" readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted small">Correo Corporativo</label>
                <input type="text" className="form-control bg-light" value="admin@gmail.com" readOnly />
              </div>
              <div className="mb-3">
                <label className="form-label text-muted small">Rol en el Sistema</label>
                <input type="text" className="form-control bg-light" value="Super Administrador (Control Total)" readOnly />
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

export default Admin;