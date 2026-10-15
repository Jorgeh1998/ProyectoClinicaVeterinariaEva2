import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const divisionTerritorial = [
  { region: "Región de Valparaíso", comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"] },
  { region: "Región Metropolitana de Santiago", comunas: ["Santiago", "Cerrillos", "Puente Alto", "Maipú", "Providencia"] },
  { region: "Región de O'Higgins", comunas: ["Rancagua", "Machalí", "Rengo", "San Fernando"] }
];

function Checkout({ carrito = [], vaciarCarrito }) {
  // Estados del formulario de cliente y entrega
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [calle, setCalle] = useState('');
  const [depto, setDepto] = useState('');
  const [region, setRegion] = useState('Región Metropolitana de Santiago');
  const [comuna, setComuna] = useState('Cerrillos');
  const [indicaciones, setIndicaciones] = useState('');

  // Estado de la pantalla: 'formulario' | 'exito' | 'error'
  const [estadoPago, setEstadoPago] = useState('formulario');
  // Guardamos una copia de la orden para mostrar en el comprobante final
  const [ordenProcesada, setOrdenProcesada] = useState(null);

  const comunasDisponibles = divisionTerritorial.find(r => r.region === region)?.comunas || [];
  const totalCarrito = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const procesarCompra = (e, forzarError = false) => {
    if (e) e.preventDefault();

    const nroOrden = `2026${Math.floor(1000 + Math.random() * 9000)}`;
    const codigoOrden = `ORDER${Math.floor(10000 + Math.random() * 90000)}`;

    const datosResumen = {
      id: nroOrden,
      codigo: codigoOrden,
      fecha: new Date().toLocaleDateString('es-CL'),
      cliente: { nombre, apellidos, correo, calle, depto, region, comuna, indicaciones },
      items: [...carrito],
      total: totalCarrito
    };

    // Validamos que haya productos y que los campos obligatorios estén completos
    const camposValidos = nombre.trim().length >= 2 &&
                          apellidos.trim().length >= 2 &&
                          correo.includes('@') &&
                          calle.trim().length >= 3 &&
                          carrito.length > 0;

    if (!camposValidos || forzarError) {
      setOrdenProcesada({ ...datosResumen, estado: 'Fallido' });
      setEstadoPago('error');
      return;
    }

    // Guardar en localStorage para que el Administrador pueda ver las Boletas/Órdenes
    const ordenesGuardadas = JSON.parse(localStorage.getItem('ordenesVeterinaria')) || [];
    ordenesGuardadas.push({ ...datosResumen, estado: 'Pagado' });
    localStorage.setItem('ordenesVeterinaria', JSON.stringify(ordenesGuardadas));

    setOrdenProcesada({ ...datosResumen, estado: 'Pagado' });
    setEstadoPago('exito');
    vaciarCarrito();
  };

  // VISTA 2 Y 3: PAGO CORRECTO (Figura 7) O PAGO CON ERROR (Figura 8)

  if (estadoPago === 'exito' || estadoPago === 'error') {
    const esExito = estadoPago === 'exito';
    return (
      <main className="py-5 bg-light flex-grow-1">
        <div className="container">
          <div className="card border-0 shadow-lg p-4 p-md-5 mx-auto" style={{ maxWidth: '850px' }}>
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                {esExito ? (
                  <h3 className="fw-bold text-success mb-1">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Se ha realizado la compra. nro #{ordenProcesada.id}
                  </h3>
                ) : (
                  <h3 className="fw-bold text-danger mb-1">
                    <i className="bi bi-x-circle-fill me-2"></i>
                    No se pudo realizar el pago. nro #{ordenProcesada.id}
                  </h3>
                )}
                <p className="text-muted small mb-0">Detalle de compra</p>
              </div>
              <span className="badge bg-secondary">Código: {ordenProcesada.codigo}</span>
            </div>

            {!esExito && (
              <div className="text-center my-3">
                <button
                  className="btn btn-success fw-bold px-4 py-2"
                  onClick={() => setEstadoPago('formulario')}
                >
                  VOLVER A REALIZAR EL PAGO
                </button>
                <p className="text-danger small mt-2 mb-0">
                  Verifica haber completado todos los campos obligatorios (*) con un correo válido.
                </p>
              </div>
            )}

            {/* Datos del cliente en modo lectura */}
            <div className="row g-3 my-3">
              <div className="col-12 col-md-4">
                <label className="form-label small text-muted">Nombre</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.nombre} readOnly />
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label small text-muted">Apellidos</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.apellidos} readOnly />
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label small text-muted">Correo</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.correo} readOnly />
              </div>

              <div className="col-12 mt-3">
                <h6 className="fw-bold">Dirección de entrega de los productos</h6>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-muted">Calle</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.calle} readOnly />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-muted">Departamento (opcional)</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.depto} readOnly />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-muted">Región</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.region} readOnly />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small text-muted">Comuna</label>
                <input type="text" className="form-control bg-light" value={ordenProcesada.cliente.comuna} readOnly />
              </div>
              <div className="col-12">
                <label className="form-label small text-muted">Indicaciones para la entrega</label>
                <textarea className="form-control bg-light" rows="2" value={ordenProcesada.cliente.indicaciones} readOnly></textarea>
              </div>
            </div>

            {/* Tabla resumen de productos */}
            <div className="table-responsive mt-3">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {ordenProcesada.items.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img} alt={item.nombre} style={{ width: '45px', height: '45px', objectFit: 'cover' }} className="rounded" />
                      </td>
                      <td className="fw-semibold">{item.nombre}</td>
                      <td>${item.precio.toLocaleString('es-CL')}</td>
                      <td>{item.cantidad}</td>
                      <td className="fw-bold">${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card bg-light border-0 p-3 text-center mt-3">
              <h4 className="fw-bold mb-0">Total pagado: ${ordenProcesada.total.toLocaleString('es-CL')}</h4>
            </div>

            {esExito && (
              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-danger" onClick={() => window.print()}>
                  Imprimir boleta en PDF
                </button>
                <Link to="/productos" className="btn btn-success">
                  Seguir comprando
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  }


  // VISTA 1: FORMULARIO DE CHECKOUT (Figura 6)

  return (
    <main className="py-5 bg-light flex-grow-1">
      <div className="container">
        <div className="card border-0 shadow-lg p-4 p-md-5 mx-auto" style={{ maxWidth: '900px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h3 className="fw-bold mb-0">Carrito de compra</h3>
              <p className="text-muted small mb-0">Completa la siguiente información</p>
            </div>
            <span className="btn btn-primary bg-primary-custom fw-bold px-4 py-2">
              Total a pagar: ${totalCarrito.toLocaleString('es-CL')}
            </span>
          </div>

          {carrito.length === 0 ? (
            <div className="alert alert-warning text-center">
              Tu carrito está vacío. <Link to="/productos" className="fw-bold">Ir a la tienda para agregar productos</Link>.
            </div>
          ) : (
            <div className="table-responsive mb-4">
              <table className="table align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.img} alt={item.nombre} style={{ width: '45px', height: '45px', objectFit: 'cover' }} className="rounded" />
                      </td>
                      <td className="fw-semibold">{item.nombre}</td>
                      <td>${item.precio.toLocaleString('es-CL')}</td>
                      <td>{item.cantidad}</td>
                      <td className="fw-bold">${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <form onSubmit={(e) => procesarCompra(e, false)} noValidate>
            <h5 className="fw-bold mb-1">Información del cliente</h5>
            <p className="text-muted small mb-3">Completa la siguiente información</p>

            <div className="row g-3 mb-4">
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Nombre*</label>
                <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Pedro" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Apellidos*</label>
                <input type="text" className="form-control" value={apellidos} onChange={(e) => setApellidos(e.target.value)} placeholder="Ej: Pérez" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Correo*</label>
                <input type="email" className="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="correo@ejemplo.com" />
              </div>
            </div>

            <h5 className="fw-bold mb-1">Dirección de entrega de los productos</h5>
            <p className="text-muted small mb-3">Ingrese dirección de forma detallada</p>

            <div className="row g-3 mb-4">
              <div className="col-12 col-md-8">
                <label className="form-label fw-semibold">Calle*</label>
                <input type="text" className="form-control" value={calle} onChange={(e) => setCalle(e.target.value)} placeholder="Ej: Los Crisantemos, Edificio Norte" />
              </div>
              <div className="col-12 col-md-4">
                <label className="form-label fw-semibold">Departamento (opcional)</label>
                <input type="text" className="form-control" value={depto} onChange={(e) => setDepto(e.target.value)} placeholder="Ej: 603" />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Región*</label>
                <select
                  className="form-select"
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    const primeraComuna = divisionTerritorial.find(r => r.region === e.target.value)?.comunas[0] || '';
                    setComuna(primeraComuna);
                  }}
                >
                  {divisionTerritorial.map(item => (
                    <option key={item.region} value={item.region}>{item.region}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold">Comuna*</label>
                <select className="form-select" value={comuna} onChange={(e) => setComuna(e.target.value)}>
                  {comunasDisponibles.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Indicaciones para la entrega (opcional)</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={indicaciones}
                  onChange={(e) => setIndicaciones(e.target.value)}
                  placeholder="Ej: Entre calles, color del edificio, no tiene timbre..."
                ></textarea>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2">
              {/* Botón extra útil para mostrarle al profesor la vista de Pago con Error en la presentación */}
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={(e) => procesarCompra(e, true)}
              >
                Simular Pago con Error
              </button>
              <button
                type="submit"
                className="btn btn-success fw-bold px-4 py-2"
                disabled={carrito.length === 0}
              >
                Pagar ahora ${totalCarrito.toLocaleString('es-CL')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Checkout;