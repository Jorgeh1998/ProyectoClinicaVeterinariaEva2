import React from "react";
import'./estilos.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Servicio from "./components/Servicios";
import Equipo from "./components/Equipo";
import Agenda from "./components/Agenda";
import Video from "./components/Video";
import Ubicacion from "./components/Ubicacion";
import Carrito from "./components/Carrito";

function App() {

  return (
    <>

      {/*Usaremos el componenete Header */}
      
        <Header />
      
      {/* HERO SECTION */}
      <main>
        <Hero />
        
      {/* SERVICIOS Y PROCEDIMIENTOS */}

        <Servicio/>
        

        {/* EQUIPO MÉDICO */}

        <Equipo/>
        

        {/* FORMULARIO DE AGENDAMIENTO */}

        <Agenda/>
        

        {/* VIDEO EDUCATIVO EMBEBIDO */}
        
        <Video/>

      {/* UBICACIÓN Y MAPA INTERACTIVO */}
      </main>
        <Ubicacion/>

      {/* FOOTER INFORMATIVO */}
      
        <Footer />

      {/* MENÚ LATERAL (OFFCANVAS) PARA EL CARRITO */}
      
        <Carrito/>

    </>
  );
}

export default App
