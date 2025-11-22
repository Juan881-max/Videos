
        function openVideo(videoId) {
            const lightbox = document.getElementById('video-lightbox');
            const player = document.getElementById('youtube-player');
            // Carga el video y lo reproduce automáticamente
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            lightbox.classList.add('active');
        }

        function closeVideo() {
            const lightbox = document.getElementById('video-lightbox');
            const player = document.getElementById('youtube-player');
            lightbox.classList.remove('active');
            // Detiene el video limpiando la URL
            setTimeout(() => {
                player.src = ''; 
            }, 300);
        }
        
        // Cerrar con la tecla ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeVideo();
            }
        });
    