// js/herramienta.js
export class Herramienta {
    constructor(nombre, estado = 'Disponible', fecha = null) {
        this.nombre = nombre;
        this.estado = estado;
        this.fechaRegistro = fecha || new Date().toLocaleDateString();
    }

    alternarEstado() {
        this.estado = (this.estado === 'Disponible') ? 'Prestada' : 'Disponible';
    }
}