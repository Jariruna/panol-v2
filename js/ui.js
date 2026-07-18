export const obtenerValoresFormulario = (formulario) => {
    const formData = new FormData(formulario);
    return { nombre: formData.get('nombre') };
};

export const renderizarTabla = (datos, contenedor, eliminarCallback, cambiarEstadoCallback) => {
    contenedor.innerHTML = '';
    
    let html = `<table><thead><tr><th>Herramienta</th><th>Estado</th><th>Fecha</th><th>Acción</th></tr></thead><tbody>`;
    
    datos.forEach((item, index) => {
        // Determinamos la clase del botón según el estado
        const claseBtn = item.estado === 'Disponible' ? 'btn-estado' : 'btn-estado btn-prestada';
        
        html += `<tr>
            <td>${item.nombre}</td>
            <td><button class="${claseBtn}" data-index="${index}">${item.estado}</button></td>
            <td>${item.fechaRegistro}</td>
            <td><button class="btn-eliminar" data-index="${index}">Eliminar</button></td>
        </tr>`;
    });
    
    html += `</tbody></table>`;
    contenedor.innerHTML = html;

    contenedor.querySelectorAll('.btn-eliminar').forEach(btn => 
        btn.addEventListener('click', () => eliminarCallback(btn.dataset.index)));
    
    contenedor.querySelectorAll('.btn-estado').forEach(btn => 
        btn.addEventListener('click', () => cambiarEstadoCallback(btn.dataset.index)));
};