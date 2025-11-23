
        
        /**
 * Script para manejar el Lightbox de videos de YouTube.
 */

// -------------------------------------------------------------
// FUNCIÓN PRINCIPAL: ABRIR LIGHTBOX Y CARGAR YOUTUBE
// -------------------------------------------------------------
function openVideo(source) {
    // Nota: Eliminamos el parámetro 'type' ya que siempre será 'youtube'
    
    const lightbox = document.getElementById('video-lightbox');
    const youtubePlayer = document.getElementById('youtube-player');
    
    // 1. Ocultamos el reproductor y limpiamos la fuente para empezar limpio
    youtubePlayer.style.display = 'none';
    youtubePlayer.src = ''; 

    // 2. Configuración para YouTube: Solo necesitamos el ID (source)
    // El parámetro 'autoplay=1' asegura que el video empiece a reproducirse automáticamente.
    youtubePlayer.src = `https://www.youtube.com/embed/${source}?autoplay=1&rel=0`;
    youtubePlayer.style.display = 'block';

    // 3. Mostrar el Lightbox
    lightbox.classList.add('active');
}

// -------------------------------------------------------------
// FUNCIÓN DE CIERRE: PAUSAR Y OCULTAR LIGHTBOX
// -------------------------------------------------------------
function closeVideo() {
    const lightbox = document.getElementById('video-lightbox');
    const youtubePlayer = document.getElementById('youtube-player');
    
    lightbox.classList.remove('active');
    
    // Detiene la reproducción y limpia la fuente después de la transición
    setTimeout(() => {
        // Limpiar src del iframe para detener la reproducción de YouTube
        youtubePlayer.src = ''; 
    }, 300);
}

// -------------------------------------------------------------
// MANEJO DE EVENTOS
// -------------------------------------------------------------

// Cerrar Lightbox con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeVideo();
    }
});