import React from 'react';
import Hero from '../components/Hero';
import Servicios from '../components/Servicios';
import Equipo from '../components/Equipo';
import Agenda from '../components/Agenda';
import Video from '../components/Video';
import Ubicacion from '../components/Ubicacion';

function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Equipo />
      <Agenda />
      <Video />
      <Ubicacion />
    </main>
  );
}

export default Home;