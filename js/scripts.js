document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.projects-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Controllo di sicurezza: se uno degli elementi non esiste nel DOM, esce senza crashare
    if (!container || !prevBtn || !nextBtn) {
        console.error("Errore: Uno o più elementi del carosello non sono stati trovati nel DOM.");
        return;
    }

    function updateActiveCard() {
        const cards = container.querySelectorAll('.project-card');
        
        // Rimuove la classe active da tutte le card
        cards.forEach(card => card.classList.remove('active'));
        
        // Se ci sono almeno 2 card, imposta come active la seconda (indice 1, la centrale)
        if (cards.length > 1) {
            cards[1].classList.add('active');
        } else if (cards.length === 1) {
            cards[0].classList.add('active');
        }
    }

    // Fai scorrere verso Destra
    nextBtn.addEventListener('click', () => {
        const cards = container.querySelectorAll('.project-card');
        if (cards.length > 0) {
            // Sposta il primo elemento in fondo
            container.appendChild(cards[0]);
            updateActiveCard();
        }
    });

    // Fai scorrere verso Sinistra
    prevBtn.addEventListener('click', () => {
        const cards = container.querySelectorAll('.project-card');
        if (cards.length > 0) {
            // Sposta l'ultimo elemento all'inizio
            container.insertBefore(cards[cards.length - 1], cards[0]);
            updateActiveCard();
        }
    });

    // Inizializzazione allo start
    updateActiveCard();
});