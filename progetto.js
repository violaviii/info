
    /*per il form di registrazione*/
    function openModal() {
        document.getElementById("modal").style.display = "flex";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }


    /* Per il form di registrazione */
function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* Carousel */
let currentIndex = 0;

function nextSlide() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track img');
    currentIndex = (currentIndex + 1) % slides.length; // Incrementa l'indice
    track.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta le immagini
}

function prevSlide() {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-track img');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrementa l'indice
    track.style.transform = `translateX(-${currentIndex * 100}%)`; // Sposta le immagini
}
   
/* Scorrimento automatico */
function startAutoSlide() {
    setInterval(() => {
        nextSlide(); // Chiama la funzione per andare alla slide successiva
    }, 3000); // Cambia immagine ogni 3 secondi
}

/* Avvia lo scorrimento automatico quando la pagina è caricata */
document.addEventListener('DOMContentLoaded', startAutoSlide);