document.addEventListener('DOMContentLoaded', function () {
    // --- 1. Lógica de la fecha ---
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    const dateEl = document.getElementById('current-date');
    if (dateEl) dateEl.textContent = today.toLocaleDateString('es-ES', options);

    // --- 2. Lógica de la Pantalla de Bienvenida ---
    const introScreen = document.getElementById('intro-screen');
    const startBtn = document.getElementById('start-btn');

    if (startBtn) {
        startBtn.addEventListener('click', function() {
            // Desaparece la pantalla inicial suavemente sin buscar audios
            introScreen.style.opacity = '0';
            
            // Quita la pantalla del código después de 1 segundo
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 1000);
        });
    }

    // --- 3. Animaciones al hacer scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.message-container, .quote, .image-container');
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});