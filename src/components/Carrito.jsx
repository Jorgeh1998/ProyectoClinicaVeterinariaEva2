import React from 'react';
import { useNavigate } from 'react-router-dom';

function Carrito({ carrito = [], quitarDelCarrito }) {
  const navigate = useNavigate();
  const totalPagar = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  const irACheckout = () => {
    if (carrito.length > 0) {
      navigate('/checkout');
    } else {
      alert("Agrega productos antes de ir a pagar.");
    }
  };

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCarrito" aria-labelledby="offcanvasCarritoLabel">
      <div className="offcanvas-header bg-light">
        <h5 className="offcanvas-title fw-bold" id="offcanvasCarritoLabel">Mi carrito de compras</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <div className="offcanvas-body d-flex flex-column">
        <div id="items-carrito" className="flex-grow-1 overflow-auto mb-3">
          {carrito.length === 0 ? (
            <p className="text-muted text-center mt-4">Tu carrito está vacío.</p>
          ) : (
            carrito.map((item) => (
              <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 pb-3 border-bottom">
                <div>
                  <h6 className="mb-0 fw-bold">{item.nombre}</h6>
                  <small className="text-muted">
                    ${item.precio.toLocaleString('es-CL')} x {item.cantidad}
                  </small>
                </div>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => quitarDelCarrito(item.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))
          )}
        </div>
        
        <div className="border-top pt-3">
          <h4 className="fw-bold d-flex justify-content-between">
            <span>TOTAL:</span>
            <span>${totalPagar.toLocaleString('es-CL')}</span>
          </h4>
          {/* data-bs-dismiss cierra el panel lateral automáticamente al ir al Checkout */}
          <button
            className="btn btn-success w-100 fw-bold mt-2 py-2"
            data-bs-dismiss="offcanvas"
            onClick={irACheckout}
          >
            COMPRAR AHORA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;