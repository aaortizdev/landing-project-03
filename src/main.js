document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema DENTAL inicializado.");

    const formCita = document.getElementById('formulario-cita');
    const seccionResultado = document.getElementById('resultado-interaccion');
    
    // Elementos donde imprimiremos la información
    const resNombre = document.getElementById('res-nombre');
    const resTelefono = document.getElementById('res-telefono'); // Nuevo
    const resTratamiento = document.getElementById('res-tratamiento');

    if (formCita) {
        formCita.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtenemos los valores de los inputs
            const nombreIngresado = document.getElementById('nombrePaciente').value;
            const telefonoIngresado = document.getElementById('telefonoPaciente').value; // Nuevo
            const tratamientoSeleccionado = document.getElementById('tratamientoInteres').value;

            // Interactuamos con el DOM
            resNombre.textContent = nombreIngresado;
            resTelefono.textContent = telefonoIngresado; // Nuevo
            resTratamiento.textContent = tratamientoSeleccionado;

            // Hacemos visible la sección
            seccionResultado.classList.remove('hidden');
            seccionResultado.scrollIntoView({ behavior: 'smooth' });
            
            formCita.reset();
        });
    }
});