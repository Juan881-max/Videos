
        
        function openVideo(type, source) {
            const lightbox = document.getElementById('video-lightbox');
            const youtubePlayer = document.getElementById('youtube-player');
            const localPlayer = document.getElementById('local-player');

            // 1. Ocultar ambos reproductores para empezar limpio
            youtubePlayer.style.display = 'none';
            localPlayer.style.display = 'none';

            if (type === 'youtube') {
                // Configuración para YouTube
                youtubePlayer.src = `https://www.youtube.com/embed/${source}?autoplay=1&rel=0`;
                youtubePlayer.style.display = 'block';
            } else if (type === 'local') {
                // Configuración para Video Local
                localPlayer.querySelector('source').src = source;
                localPlayer.load(); // Vuelve a cargar el video con la nueva fuente
                localPlayer.style.display = 'block';
                // El atributo "autoplay" en HTML ya debería iniciar la reproducción
            }

            lightbox.classList.add('active');
        }

        function closeVideo() {
            const lightbox = document.getElementById('video-lightbox');
            const youtubePlayer = document.getElementById('youtube-player');
            const localPlayer = document.getElementById('local-player');
            
            lightbox.classList.remove('active');
            
            // Detiene la reproducción y limpia la fuente
            setTimeout(() => {
                youtubePlayer.src = ''; 
                localPlayer.pause(); // Pausa el video local
                localPlayer.currentTime = 0; // Reinicia el video local
                localPlayer.querySelector('source').src = ''; // Limpia la fuente
                localPlayer.load(); // Fuerza la limpieza
            }, 300);
        }
        
        // Cerrar con la tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeVideo();
            }
        });
    