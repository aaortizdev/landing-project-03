
import './styles.css';

// Aquí puedes añadir toda la interactividad de tu página.
// Por ejemplo, para que el botón de menú móvil haga algo:
document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Módulo cargado correctamente!");
    
    // Si quisieras darle funcionalidad al botón del menú:
    const menuBtn = document.getElementById('menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menú presionado');
            // Aquí iría la lógica para abrir/cerrar el menú
        });
    }
});