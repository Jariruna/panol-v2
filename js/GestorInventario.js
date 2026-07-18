// js/GestorInventario.js
import { Herramienta } from './herramienta.js';

export class GestorInventario {
    constructor() {
        const guardado = localStorage.getItem('inventario_panol');
        this.datos = guardado 
            ? JSON.parse(guardado).map(item => new Herramienta(item.nombre, item.estado, item.fechaRegistro)) 
            : [];
    }

    agregar(nombre) {
        const nombreNormalizado = nombre.trim();
        const existe = this.datos.some(h => h.nombre.toLowerCase() === nombreNormalizado.toLowerCase());
        if (existe) throw new Error(`La herramienta "${nombreNormalizado}" ya existe.`);
        
        this.datos.push(new Herramienta(nombreNormalizado));
        this.guardar();
    }

    cambiarEstado(index) {
        if (this.datos[index]) {
            this.datos[index].alternarEstado();
            this.guardar();
        }
    }

    eliminar(index) {
        this.datos.splice(index, 1);
        this.guardar();
    }

    guardar() {
        localStorage.setItem('inventario_panol', JSON.stringify(this.datos));
    }

    obtenerTodos() {
        return this.datos;
    }
}