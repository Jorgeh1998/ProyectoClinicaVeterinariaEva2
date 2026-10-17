import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Importamos componentes con sus extensiones explícitas obligatorias
import Header from '../components/Header.jsx';
import Carrito from '../components/Carrito.jsx';
import Login from '../pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import Catalogo from '../components/Catalogo.jsx';
import {
  obtenerProductos,
  agregarProducto,
  eliminarProducto
} from '../data/productos.js';

describe('Suite de Pruebas Unitarias - Veterinaria San Marcos (10/10)', () => {

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  // =========================================================================
  // 1. PRUEBAS DE RENDERIZADO Y PROPIEDADES (PROPS)
  // =========================================================================

  it('Prueba 1 (Renderizado y Props): Header debe renderizar el nombre de la clínica', () => {
    render(
      <MemoryRouter>
        <Header contadorCarrito={5} />
      </MemoryRouter>
    );
    expect(screen.getByText('Veterinaria San Marcos')).toBeTruthy();
    expect(screen.getByText('5')).toBeTruthy();
  });

  it('Prueba 2 (Renderizado de Lista): Catalogo debe renderizar todos los productos', () => {
    render(<Catalogo agregarAlCarrito={() => {}} />);
    expect(screen.getByText('Amoxibay 250mg')).toBeTruthy();
    expect(screen.getByText('Nexgard Masticable')).toBeTruthy();
  });

  // =========================================================================
  // 2. PRUEBAS DE RENDERIZADO CONDICIONAL
  // =========================================================================

  it('Prueba 3 (Renderizado Condicional): Carrito debe mostrar mensaje de vacío cuando corresponda', () => {
    render(
      <MemoryRouter>
        <Carrito carrito={[]} quitarDelCarrito={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText('Tu carrito está vacío.')).toBeTruthy();
  });

  it('Prueba 4 (Renderizado Condicional y Cálculo): Carrito debe ocultar el mensaje de vacío y calcular total', () => {
    const carritoMock = [
      { id: 'ME001', nombre: 'Amoxibay 250mg', precio: 4200, cantidad: 2 }
    ];
    render(
      <MemoryRouter>
        <Carrito carrito={carritoMock} quitarDelCarrito={() => {}} />
      </MemoryRouter>
    );
    expect(screen.queryByText('Tu carrito está vacío.')).toBeNull();
    expect(screen.getByText('Amoxibay 250mg')).toBeTruthy();
    expect(screen.getByText('$8.400')).toBeTruthy();
  });

  // =========================================================================
  // 3. PRUEBAS DE ESTADO (STATE) Y FORMULARIOS
  // =========================================================================

  it('Prueba 5 (Gestión de Estado): El formulario de Login debe actualizar su estado correctamente', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const inputCorreo = screen.getByPlaceholderText('correo@duoc.cl');
    fireEvent.change(inputCorreo, { target: { value: 'cliente@duoc.cl' } });
    expect(inputCorreo.value).toBe('cliente@duoc.cl');
  });

  it('Prueba 6 (Validación y Renderizado Condicional de Error): Login debe marcar error con datos inválidos', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    const inputCorreo = screen.getByPlaceholderText('correo@duoc.cl');
    const botonSubmit = screen.getByRole('button', { name: /Iniciar Sesión/i });

    fireEvent.change(inputCorreo, { target: { value: 'usuario@hotmail.com' } });
    fireEvent.click(botonSubmit);

    expect(inputCorreo.classList.contains('is-invalid')).toBeTrue();
  });

  it('Prueba 7 (Estado Dinámico): En Registro, el selector de Comuna debe habilitarse al elegir Región', () => {
    render(<Registro />);
    const selectRegion = document.getElementById('regRegion');
    const selectComuna = document.getElementById('regComuna');

    expect(selectComuna.disabled).toBeTrue();

    fireEvent.change(selectRegion, { target: { value: 'Región de Valparaíso' } });
    expect(selectComuna.disabled).toBeFalse();
  });

  // =========================================================================
  // 4. PRUEBAS DE EVENTOS Y USO DE MOCKS / SPIES (JASMINE)
  // =========================================================================

  it('Prueba 8 (Simulación de Eventos y Mock/Spy): Hacer clic en "Añadir al carrito" debe invocar el callback', () => {
    const mockPartner = { agregar: () => {} };
    spyOn(mockPartner, 'agregar');

    render(<Catalogo agregarAlCarrito={mockPartner.agregar} />);
    const botonesAgregar = screen.getAllByText('Añadir al carrito');

    fireEvent.click(botonesAgregar[0]);
    expect(mockPartner.agregar).toHaveBeenCalledTimes(1);
  });

  // =========================================================================
  // 5. PRUEBAS DE LÓGICA CRUD Y PERSISTENCIA
  // =========================================================================

  it('Prueba 9 (CRUD Create): agregarProducto debe insertar un nuevo medicamento en el catálogo', () => {
    const iniciales = obtenerProductos();
    const cantidadInicial = iniciales.length;

    agregarProducto({
      id: 'ME999',
      nombre: 'Vacuna Antirrábica',
      categoria: 'Vacunas',
      precio: 12000,
      stock: 10
    });

    const actualizados = obtenerProductos();
    expect(actualizados.length).toBe(cantidadInicial + 1);
  });

  it('Prueba 10 (CRUD Delete): eliminarProducto debe remover un producto por su ID del catálogo', () => {
    obtenerProductos();
    const trasEliminar = eliminarProducto('ME001');
    const existe = trasEliminar.some(p => p.id === 'ME001');
    expect(existe).toBeFalse();
  });

});
