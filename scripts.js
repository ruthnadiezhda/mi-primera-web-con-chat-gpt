document.addEventListener("DOMContentLoaded", function() {
    // Animación de desplazamiento suave para los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación al hacer hover sobre los destinos y experiencias
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Animación al enviar el formulario
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulación de envío del formulario
        setTimeout(function() {
            alert('¡Gracias por tu mensaje!');
            form.reset();
        }, 1000);
    });
});