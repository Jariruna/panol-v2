// js/app.js
import { GestorInventario } from './GestorInventario.js';
import { renderizarTabla, obtenerValoresFormulario } from './ui.js';

const gestor = new GestorInventario();
const form = document.getElementById('form-inventario');
const tablaContainer = document.getElementById('tabla-container');

const actualizarInterfaz = () => {
    renderizarTabla(gestor.obtenerTodos(), tablaContainer, eliminarHerramienta, cambiarEstado);
};

const cambiarEstado = (index) => {
    gestor.cambiarEstado(index);
    actualizarInterfaz();
};

const eliminarHerramienta = (index) => {
    gestor.eliminar(index);
    actualizarInterfaz();
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { nombre } = obtenerValoresFormulario(form);
    try {
        if (nombre && nombre.trim() !== "") {
            gestor.agregar(nombre);
            actualizarInterfaz();
            form.reset();
        }
    } catch (error) {
        alert(error.message);
    }
});

actualizarInterfaz();