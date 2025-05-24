function changeColor() {
    document.getElementById('scarpa').src= "IMMAGINI/blazerrosse.PNG" // Cambia l'immagine in base al colore
}
function changeColor1() {
    document.getElementById('scarpa').src= "IMMAGINI/blazerazzurre.PNG" // Cambia l'immagine in base al colore
}
function changeColor2() {
    document.getElementById('scarpa').src= "IMMAGINI/blazerrosa.PNG" // Cambia l'immagine in base al colore
}
function changeColor3() {
    document.getElementById('scarpa').src= "IMMAGINI/blazerverdi.PNG" // Cambia l'immagine in base al colore
}

function mostraGrazieAcquisto() {    //serve per mostrare il form per l'acquisto
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {  //per chiudere il form di registrazione per l'acquisto
    document.getElementById('modal').style.display = 'none';
}