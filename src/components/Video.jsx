import React from "react";

function Video(){
    return(

        <section id="educacion" className="py-4">
          <div className="container py-3">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary-custom">Consejos y Cuidados Veterinarios</h2>
              <p className="text-muted">Aprende sobre la importancia de las visitas regulares y la vacunación temprana.</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8">
                <div className="ratio ratio-16x9 rounded shadow overflow-hidden">
                  <iframe src="https://www.youtube-nocookie.com/embed/LZ9AKsUCcTI" title="Cuidados básicos para mascotas" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    )
}

export default Video;