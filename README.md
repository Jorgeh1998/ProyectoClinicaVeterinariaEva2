# Veterinaria San Marcos - Aplicacion Web en React

## Descripcion del Proyecto
Este proyecto corresponde a la Evaluacion Parcial 2 de la asignatura Desarrollo Fullstack II (DSY1104) de Duoc UC. Consiste en la migracion y actualizacion del sitio web y tienda online de la clinica Veterinaria San Marcos desde una maqueta estatica en HTML, CSS y JavaScript puro hacia una aplicacion web moderna de una sola pagina (SPA) desarrollada con React y Vite.

El sistema integra diseño responsivo mediante Bootstrap 5, navegacion fluida con React Router, manejo de estados y propiedades (props y state), persistencia de datos simulada mediante LocalStorage y SessionStorage, ademas de pruebas unitarias automatizadas con Jasmine y Karma.

---

## Tecnologias Utilizadas
- React (Biblioteca principal para la interfaz de usuario basada en componentes)
- Vite (Entorno de desarrollo y empaquetador del proyecto)
- React Router DOM (Gestion de rutas y navegacion entre vistas sin recarga)
- Bootstrap 5 y CSS personalizado (Diseno responsivo adaptable a moviles, tablets y escritorio)
- LocalStorage y SessionStorage (Persistencia de datos en el navegador y control de sesion)
- Jasmine y Karma (Entorno de ejecucion y desarrollo de pruebas unitarias para el frontend)

---

## Estructura del Proyecto
El codigo fuente dentro del directorio src se organiza aplicando el principio de responsabilidad unica:

1. Carpeta data:
   - productos.js: Actua como base de datos simulada para productos y usuarios, exportando las funciones CRUD (Crear, Leer, Actualizar y Eliminar) sincronizadas con LocalStorage.

2. Carpeta components:
   - Header.jsx: Barra de navegacion superior con enlaces dinamicos y contador en tiempo real de productos en el carrito.
   - Hero.jsx: Banner de bienvenida principal con accesos rapidos a la reserva de horas y a la tienda.
   - Servicios.jsx: Presentacion de las especialidades clinicas veterinarias.
   - Equipo.jsx: Informacion del personal medico y tecnico de la veterinaria.
   - Agenda.jsx: Formulario de solicitud de horas medicas con validacion reactiva de campos y fechas.
   - Video.jsx: Seccion educativa multimedia embebida.
   - Ubicacion.jsx: Informacion de contacto, horarios de atencion y mapa interactivo de la sucursal en Rancagua.
   - Footer.jsx: Pie de pagina informativo y enlaces de navegacion rapida.
   - Catalogo.jsx: Listado de productos con buscador por nombre en tiempo real y botones de filtrado por categoria.
   - Carrito.jsx: Panel lateral desplegable (Offcanvas) que calcula subtotales, permite eliminar articulos y redirige al proceso de pago.

3. Carpeta pages:
   - Home.jsx: Vista de inicio que integra las secciones informativas y el agendamiento de citas.
   - Tienda.jsx: Vista del catalogo general de farmacia y accesorios veterinarios.
   - Categorias.jsx: Vista interactiva que agrupa y muestra los productos segun su categoria medica.
   - Ofertas.jsx: Vista promocional que aplica y muestra descuentos sobre productos seleccionados.
   - Checkout.jsx: Flujo de compra donde el cliente revisa su pedido, ingresa su direccion de despacho y obtiene el comprobante de pago exitoso (con opcion de impresion en PDF) o aviso de error en el pago.
   - Login.jsx: Portal de autenticacion con validacion de dominios permitidos y redireccion al panel administrativo.
   - Registro.jsx: Formulario de creacion de cuenta con selectores dinamicos dependientes de regiones y comunas.
   - Admin.jsx: Panel de administracion protegido por sesion con menu lateral que incluye Dashboard de metricas, revision de Ordenes y Boletas, CRUD completo de Productos, alerta de Stock Critico, gestion de Categorias, administracion de Usuarios con historial de compras, Reportes financieros y Perfil.

4. Carpeta tests:
   - tienda.spec.jsx: Suite de 10 pruebas unitarias que verifican el renderizado de componentes, renderizado condicional, paso de propiedades, cambios de estado en formularios, simulacion de eventos con spies y operaciones CRUD.

---

## Credenciales de Prueba (Panel Administrador)
Para ingresar al sistema administrativo desde la vista de Iniciar Sesion, utilizar los siguientes datos:
- Correo electronico: admin@gmail.com
- Contrasena: admin123

---

## Instrucciones de Instalacion y Ejecucion

1. Clonar o descargar el repositorio e ingresar a la carpeta del proyecto desde la terminal:
   cd tienda-veterinaria-react

2. Instalar las dependencias necesarias de Node:
   npm install

3. Iniciar el servidor de desarrollo local:
   npm run dev

4. Ejecutar las pruebas unitarias con Karma y Jasmine:
   npm test

5. Generar la version compilada para produccion:
   npm run build
