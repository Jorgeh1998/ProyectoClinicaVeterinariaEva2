import React from "react";

function Carrito() {
    return(

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCarrito" aria-labelledby="offcanvasCarritoLabel">
        <div className="offcanvas-header bg-light">
          <h5 className="offcanvas-title fw-bold" id="offcanvasCarritoLabel">Mi carrito de compras</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <div id="items-carrito" className="flex-grow-1 overflow-auto mb-3">
          </div>
          
          <div className="border-top pt-3">
            <h4 className="fw-bold d-flex justify-content-between">
              <span>TOTAL:</span>
              <span id="total-carrito">$0</span>
            </h4>
            <button className="btn btn-success w-100 fw-bold mt-2 py-2" id="btn-pagar">PAGAR</button>
          </div>
        </div>
      </div>

    )
    
}

export default Carrito;