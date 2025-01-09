document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const modal = document.getElementById('plainteModal');
    const hammer = document.querySelector('.hammer');
    const closeBtn = document.querySelector('.close');
    const plainteForm = document.getElementById('plainteForm');

    // Ouvrir le modal quand on clique sur le marteau
    hammer.onclick = function() {
        modal.style.display = "flex"; // Changé de "block" à "flex"
    }

    // Fermer le modal avec le X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fermer le modal en cliquant en dehors
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Gérer la soumission du formulaire
    plainteForm.onsubmit = function(e) {
        e.preventDefault();
        const accusation = document.getElementById('accusation').value;
        const details = document.getElementById('details').value;
        
        alert(`🚨 Plainte enregistrée, camarade! 🚨\nMotif: ${accusation}\nLes forces de l'ordre communistes sont en route!`);
        
        plainteForm.reset();
        modal.style.display = "none";
    }
});
