document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os links da navegação (Amigos, Sobre Mim, Família)
    const navLinks = document.querySelectorAll('.image-card');
    
    // 2. Seleciona todas as galerias (as seções de fotos/texto)
    const galleries = document.querySelectorAll('.gallery');

    // 3. Adiciona um ouvinte de evento (click) para cada link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o link de recarregar a página
            
            // Pega o ID da galeria alvo (ex: 'amigos-gallery')
            const targetId = link.getAttribute('data-target');
            const targetGallery = document.getElementById(targetId);

            if (targetGallery.classList.contains('active')) {
                // Se a galeria já está visível, ESCONDE ELA (TOGGLE/ALTERNAR)
                targetGallery.classList.remove('active');
                targetGallery.classList.add('hidden');
            } else {
                // Se a galeria não está visível, ESCONDE AS OUTRAS E MOSTRA ELA
                
                // Esconde todas as galerias
                galleries.forEach(gallery => {
                    gallery.classList.remove('active');
                    gallery.classList.add('hidden');
                });
                
                // Mostra a galeria alvo
                targetGallery.classList.remove('hidden');
                targetGallery.classList.add('active');
            }
        });
    });
});