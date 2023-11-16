document.addEventListener("DOMContentLoaded", function() {
    var dynamicContent = document.getElementById("dynamicContent");
    var hexrouge = 0xFF;
    var hexvert = 0xFF;
    var hexbleu = 0xFF;
    
  function colorchanged() {
    // Définir les valeurs hexadécimales initiales

    // Mettre à jour les valeurs en fonction de certaines conditions
    if (hexrouge === 0xFF && hexvert < 0xFF && hexbleu === 0xFF) {
        hexvert = hexvert + 0x10;
    }
    if (hexrouge > 0x00 && hexvert === 0xFF && hexbleu === 0xFF) {
        hexrouge = hexrouge - 0x10;
    }
    if (hexrouge === 0x00 && hexvert === 0xFF && hexbleu < 0xFF) {
        hexbleu = hexbleu + 0x10;
    }
    if (hexrouge === 0x00 && hexvert > 0x00 && hexbleu === 0xFF) {
        hexvert = hexvert - 0x10;
    }
    if (hexrouge < 0xFF && hexvert === 0x00 && hexbleu === 0xFF) {
        hexrouge = hexrouge + 0x10;
    }
    if (hexrouge === 0xFF && hexvert === 0x00 && hexbleu > 0x00) {
        hexbleu = hexbleu - 0x10;
    }

    // Construire la couleur hexadécimale finale
    var hexcouleur = "#" + hexrouge.toString(16) + hexvert.toString(16) + hexbleu.toString(16);

    // Appliquer la couleur de fond
    document.body.style.backgroundColor = hexcouleur;
}

    // Mettre à jour le message toutes les 1 secondes (1000 millisecondes)
    setInterval(updateMessage, 1000);
    setInterval(colorchanged, 1000);

    // Appeler la fonction une fois au chargement de la page
    updateMessage();
    colorchanged();
});
