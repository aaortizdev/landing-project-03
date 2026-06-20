
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema DENTAL inicializado.");

    const formCita = document.getElementById('formulario-cita');
    const seccionResultado = document.getElementById('resultado-interaccion');
    
    const resNombre = document.getElementById('res-nombre');
    const resTratamiento = document.getElementById('res-tratamiento');

    if (formCita) {
        formCita.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombreIngresado = document.getElementById('nombrePaciente').value;
            const tratamientoSeleccionado = document.getElementById('tratamientoInteres').value;

            // Interactuamos con el DOM para mostrar los datos
            resNombre.textContent = nombreIngresado;
            resTratamiento.textContent = tratamientoSeleccionado;

            // Hacemos visible la sección de resultados
            seccionResultado.classList.remove('hidden');

            // Hacemos scroll suave hasta la nueva sección para mejor UX
            seccionResultado.scrollIntoView({ behavior: 'smooth' });
            
            // Opcional: resetear el formulario
            formCita.reset();
        });
    }
});