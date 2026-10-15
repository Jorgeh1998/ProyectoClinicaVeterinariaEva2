// src/data/productos.js

// 1. Datos iniciales con stock incluido (stock <= 5 se considera crítico)
const productosIniciales = [
  { id: "ME001", nombre: "Amoxibay 250mg", categoria: "Antibióticos", precio: 4200, stock: 15, img: "https://plus.unsplash.com/premium_photo-1786961711020-1b55448cedb2?q=80&w=1170&auto=format&fit=crop" },
  { id: "ME004", nombre: "Nexgard Masticable", categoria: "Antiparasitarios", precio: 9500, stock: 3, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop" },
  { id: "ME005", nombre: "Bravecto Masticable", categoria: "Antiparasitarios", precio: 18900, stock: 12, img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=400&auto=format&fit=crop" },
  { id: "ME006", nombre: "Revolution Plus Gato", categoria: "Antiparasitarios", precio: 14500, stock: 2, img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop" },
  { id: "ME009", nombre: "Meloxicam 1mg", categoria: "Antiinflamatorios", precio: 4500, stock: 20, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop" },
  { id: "ME011", nombre: "Clorhexidina Shampoo", categoria: "Dermatología", precio: 8900, stock: 4, img: "https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?q=80&w=687&auto=format&fit=crop" },
  { id: "ME016", nombre: "Vetmedin 2.5mg", categoria: "Cardíaco", precio: 28000, stock: 8, img: "https://images.unsplash.com/photo-1673134768453-ffaf2f279b81?q=80&w=1174&auto=format&fit=crop" },
  { id: "ME021", nombre: "Omega vet 3-6-9", categoria: "Suplementos", precio: 9900, stock: 10, img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=400&auto=format&fit=crop" }
];

const usuariosIniciales = [
  { id: "US001", nombre: "Administrador General", correo: "admin@gmail.com", rol: "Administrador", region: "Región de O'Higgins", comuna: "Rancagua" },
  { id: "US002", nombre: "Fernanda Peña", correo: "Feña1111@gmail.com", rol: "Cliente", region: "Región Metropolitana de Santiago", comuna: "Cerrillos" },
  { id: "US003", nombre: "Felipe Quiroga", correo: "Pipe123@duoc.cl", rol: "Cliente", region: "Región de Valparaíso", comuna: "Viña del Mar" }
];

const STORAGE_KEY = 'productosVeterinariaReact';
const USERS_KEY = 'usuariosVeterinariaReact';


// CRUD DE PRODUCTOS

export const obtenerProductos = () => {
  const guardados = localStorage.getItem(STORAGE_KEY);
  if (guardados) {
    const parseados = JSON.parse(guardados);
    // Asegurar que todos tengan stock numérico por si venían de la versión anterior
    return parseados.map((p, idx) => ({
      ...p,
      stock: p.stock !== undefined ? Number(p.stock) : (idx % 3 === 0 ? 3 : 12)
    }));
  } else {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productosIniciales));
    return productosIniciales;
  }
};

export const agregarProducto = (nuevoProducto) => {
  const productos = obtenerProductos();
  productos.push({ ...nuevoProducto, stock: Number(nuevoProducto.stock ?? 10) });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
};

export const actualizarProducto = (id, datosActualizados) => {
  let productos = obtenerProductos();
  productos = productos.map(prod =>
    prod.id === id ? { ...prod, ...datosActualizados } : prod
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
};

export const eliminarProducto = (id) => {
  let productos = obtenerProductos();
  productos = productos.filter(prod => prod.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
};

// CRUD DE USUARIOS

export const obtenerUsuarios = () => {
  const guardados = localStorage.getItem(USERS_KEY);
  if (guardados) {
    return JSON.parse(guardados);
  } else {
    localStorage.setItem(USERS_KEY, JSON.stringify(usuariosIniciales));
    return usuariosIniciales;
  }
};

export const agregarUsuario = (nuevoUsuario) => {
  const usuarios = obtenerUsuarios();
  usuarios.push(nuevoUsuario);
  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
  return usuarios;
};

export const actualizarUsuario = (id, datosActualizados) => {
  let usuarios = obtenerUsuarios();
  usuarios = usuarios.map(u => (u.id === id ? { ...u, ...datosActualizados } : u));
  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
  return usuarios;
};

export const eliminarUsuario = (id) => {
  let usuarios = obtenerUsuarios();
  usuarios = usuarios.filter(u => u.id !== id);
  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
  return usuarios;
};