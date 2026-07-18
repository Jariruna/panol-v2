// js/storage.js
const KEY = 'inventario_panol';

export const obtenerDatos = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const guardarDatos = (datos) => {
    localStorage.setItem(KEY, JSON.stringify(datos));
};