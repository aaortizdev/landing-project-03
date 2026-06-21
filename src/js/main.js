document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema DENTAL inicializado.");

    const formCita = document.getElementById('formulario-cita');
    const seccionResultado = document.getElementById('resultado-interaccion');
    
    // Elementos donde imprimiremos la información
    const resNombre = document.getElementById('res-nombre');
    const resTelefono = document.getElementById('res-telefono'); // Nuevo
    const resTratamiento = document.getElementById('res-tratamiento');

    if (formCita) {
        formCita.addEventListener('submit', async (e) => {
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

            // Creación del objeto a enviar
            const cita = {
                nombre: nombreIngresado,
                telefono: telefonoIngresado,
                tratamiento: tratamientoSeleccionado
            }
            
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(cita)
                });

                if (!respuesta.ok) {
                    throw new Error("Error al enviar la cita");
                }

                const datos = await respuesta.json();

                console.log("Respuesta del servidor: ", datos);

                formCita.reset();

            } catch (error) {
                console.error(error);
            }
        });
    }
});

async function obtenerTestimonios() {

    try{

    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/comments");

    const datos = await respuesta.json();

    const primeroSeis = datos.slice(0, 6); // se obtien los primeros 6 comentarios

    
    const contenedorTestimonios = document.getElementById("contenedor-testimonios");
    
    primeroSeis.forEach(comentario => {
        contenedorTestimonios.innerHTML += `
            <div class="flex flex-col overflow-hidden shadow-xl">
                                <div class="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                                    <div class="flex-1">
                                        <div class="flex items-center">
                                            <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                            <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                            <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                            <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                            <svg class="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                />
                                            </svg>
                                        </div>
                                    
                                        <blockquote class="flex-1 mt-8">
                                            <p class="text-lg leading-relaxed text-gray-900 font-pj">“${comentario.body}”</p>
                                        </blockquote>
                                    </div>
                                
                                    <div class="flex items-center mt-8">
                                        <img class="flex-shrink-0 object-cover rounded-full w-11 h-11" src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png" alt="" />
                                        <div class="ml-4">
                                            <p class="text-base font-bold text-gray-900 font-pj">${comentario.name}</p>
                                            <p class="mt-0.5 text-sm font-pj text-gray-600">${comentario.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

        `;
    });

    console.log("Get realizado correctamente");

    }catch(error){
        console.error(error);
    }
}

obtenerTestimonios();