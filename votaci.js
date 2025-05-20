//per il pop up con la scritta di 'ringraziamento'
function mostraGrazie() {
    document.getElementById('popup-grazie').style.display = 'flex';
    return false; // Impedisce l'invio del form
}

function chiudiPopupGrazie() {
    document.getElementById('popup-grazie').style.display = 'none';
}