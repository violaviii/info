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



/*barra dei cookie*/
function acceptCookies(type) {
    document.getElementById('cookie-bar').style.display = 'none';
    // localStorage.setItem('cookiePreference', type); // RIMUOVI o COMMENTA questa riga
    // Qui puoi aggiungere logica diversa in base alla scelta
    // Esempio: if(type === 'all') { ... } else if(type === 'essential') { ... }
}

window.onload = function() {
    document.getElementById('cookie-bar').style.display = 'block';
};