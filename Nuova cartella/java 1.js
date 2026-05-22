// Funzione per mostrare solo la sezione selezionata (sistema a pagine)
function showSection(sectionId) {
// Prendi tutte le sezioni presenti nella pagina
const sections = document.querySelectorAll('.section');

// Nascondile tutte aggiungendo la classe 'hidden'
sections.forEach(section => {
section.classList.add('hidden');
});

// Mostra solo quella che corrisponde al bottone cliccato
const activeSection = document.getElementById(sectionId);
if (activeSection) {
activeSection.classList.remove('hidden');
}
}

// Funzione extra per cercare i posti in tempo reale
function searchPlaces() {
const input = document.getElementById('searchBar').value.toLowerCase();
const cards = document.querySelectorAll('.card');
const sections = document.querySelectorAll('.section');

// Se l'utente sta cercando, mostra temporaneamente tutte le sezioni per filtrare i risultati
if (input !== "") {
sections.forEach(section => section.classList.remove('hidden'));
}

cards.forEach(card => {
const title = card.querySelector('h3').innerText.toLowerCase();
const location = card.querySelector('p').innerText.toLowerCase();

// Se il testo cercato è nel titolo o nella zona, mostra la card, altrimenti nascondila
if (title.includes(input) || location.includes(input)) {
card.style.display = "block";
} else {
card.style.display = "none";
}
});

// Se la barra di ricerca viene svuotata, torna alla visualizzazione standard (mostra solo la prima)
if (input === "") {
showSection('night');
cards.forEach(card => card.style.style = "block"); // Ripristina il display delle card
}
}