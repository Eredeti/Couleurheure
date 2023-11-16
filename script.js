document.addEventListener("DOMContentLoaded", function() {
    var dynamicContent = document.getElementById("dynamicContent");

    // Utiliser une fonction auto-exécutante pour encapsuler les variables
    (function() {
    var hexrouge = 0xFF;
    var hexvert = 0x00;
    var hexbleu = 0x00;

    function colorchanged() {
        // Mettre à jour les valeurs en fonction de certaines conditions
        hexrouge = (hexrouge + 0x10) % 0x100;
        hexvert = (hexvert + 0x10) % 0x100;
        hexbleu = (hexbleu + 0x10) % 0x100;

        // Construire la couleur hexadécimale finale
        var hexcouleur = "#" + hexrouge.toString(16) + hexvert.toString(16) + hexbleu.toString(16);

        // Appliquer la couleur de fond
        document.body.style.backgroundColor = hexcouleur;
    }

    // Mettre à jour la couleur toutes les 1 seconde (1000 millisecondes)
    setInterval(colorchanged, 1000);

    // Appeler la fonction une fois au chargement de la page
    colorchanged();
})();

    function updateMessage() {
        var dynamicContent = document.getElementById("dynamicContent");
        var currentSeconds = new Date().getSeconds();
    
        if (currentSeconds < 20) {
            dynamicContent.innerHTML = "Bonjour !";
        } else if (currentSeconds < 40) {
            dynamicContent.innerHTML = "Bon après-midi !";
        } else {
            dynamicContent.innerHTML = "Bonne soirée !";
        }
    }

    // Mettre à jour le message toutes les 1 secondes (1000 millisecondes)
    setInterval(updateMessage, 1000);

    // Appeler la fonction une fois au chargement de la page
    updateMessage();
});
