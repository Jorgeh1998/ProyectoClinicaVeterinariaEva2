// src/data/productos.js

// 1. Datos iniciales por defecto (los mismos de tu app.js original)
const productosIniciales = [
  { id: "ME001", nombre: "Amoxibay 250mg", categoria: "Antibióticos", precio: 4200, img: "https://plus.unsplash.com/premium_photo-1786961711020-1b55448cedb2?q=80&w=1170&auto=format&fit=crop" },
  { id: "ME004", nombre: "Nexgard Masticable", categoria: "Antiparasitarios", precio: 9500, img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=400&auto=format&fit=crop" },
  { id: "ME005", nombre: "Bravecto Masticable", categoria: "Antiparasitarios", precio: 18900, img: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=400&auto=format&fit=crop" },
  { id: "ME006", nombre: "Revolution Plus Gato", categoria: "Antiparasitarios", precio: 14500, img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400&auto=format&fit=crop" },
  { id: "ME009", nombre: "Meloxicam 1mg", categoria: "Antiinflamatorios", precio: 4500, img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=400&auto=format&fit=crop" },
  { id: "ME011", nombre: "Clorhexidina Shampoo", categoria: "Dermatología", precio: 8900, img: "https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?q=80&w=687&auto=format&fit=crop" },
  { id: "ME016", nombre: "Vetmedin 2.5mg", categoria: "Cardíaco", precio: 28000, img: "https://images.unsplash.com/photo-1673134768453-ffaf2f279b81?q=80&w=1174&auto=format&fit=crop" },
  { id: "ME021", nombre: "Omega vet 3-6-9", categoria: "Suplementos", precio: 9900, img: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=400&auto=format&fit=crop" }
];

// Clave para guardar en el almacenamiento local
const STORAGE_KEY = 'productosVeterinariaReact';

// ==========================================
// FUNCIONES CRUD (Create, Read, Update, Delete)
// ==========================================

// READ: Obtener todos los productos
export const obtenerProductos = () => {
  const guardados = localStorage.getItem(STORAGE_KEY);
  if (guardados) {
    return JSON.parse(guardados);
  } else {
    // Si no hay datos, inicializamos con el arreglo por defecto
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productosIniciales));
    return productosIniciales;
  }
};

// CREATE: Agregar un nuevo producto
export const agregarProducto = (nuevoProducto) => {
  const productos = obtenerProductos();
  productos.push(nuevoProducto);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
};

// UPDATE: Actualizar un producto existente por su ID
export const actualizarProducto = (id, datosActualizados) => {
  let productos = obtenerProductos();
  productos = productos.map(prod =>
    prod.id === id ? { ...prod, ...datosActualizados } : prod
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
};

// DELETE: Eliminar un producto por su ID
export const eliminarProducto = (id) => {
  let productos = obtenerProductos();
  productos = productos.filter(prod => prod.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  return productos;
};