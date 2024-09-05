let slideIndex = 0;
showSlides(slideIndex);

// Función para cambiar la diapositiva
function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= 3) slideIndex = 0;  // Si llega al final, regresa al principio
    if (slideIndex < 0) slideIndex = 2;   // Si va más allá del inicio, va al final
    showSlides(slideIndex);
}

// Función para mostrar la diapositiva actual
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(slideIndex);
}

// Función para mostrar las diapositivas
function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-images img');
    let dots = document.querySelectorAll('.dot');

    // Oculta todas las imágenes
    slides.forEach(slide => slide.classList.remove('active'));

    // Elimina la clase activa de todos los puntos
    dots.forEach(dot => dot.classList.remove('active'));

    // Muestra la imagen actual
    slides[n].classList.add('active');

    // Marca el punto correspondiente como activo
    dots[n].classList.add('active');
}

// Cambia la diapositiva automáticamente cada 8 segundos
setInterval(() => {
    changeSlide(1);
}, 8000); // 8000 milisegundos = 8 segundos
