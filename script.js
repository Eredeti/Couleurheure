document.addEventListener("DOMContentLoaded", function() {
    var dynamicContent = document.getElementById("dynamicContent");

    // Utiliser une fonction auto-exécutante pour encapsuler les variables
    (function() {
        var rouge = 255;
        var vert = 0;
        var bleu = 0;

        function colorchanged() {
            // Mettre à jour les valeurs en fonction de certaines conditions
            if (rouge === 255 && vert < 255 && bleu === 0) {
                vert = vert + 1;
            }
            if (rouge > 0 && vert === 255 && bleu === 0) {
                rouge = rouge - 1;
            }
            if (rouge === 0 && vert === 255 && bleu < 255) {
                bleu = bleu + 1;
            }
            if (rouge === 0 && vert > 0 && bleu === 255) {
                vert = vert - 1;
            }
            if (rouge < 255 && vert === 0 && bleu === 255) {
                rouge = rouge + 1;
            }
            if (rouge === 255 && vert === 0 && bleu > 0) {
                bleu = bleu - 1;
            }

            // Afficher les valeurs dans la console pour le débogage
            console.log("Rouge: " + rouge.toString(16));
            console.log("Vert: " + vert.toString(16));
            console.log("Bleu: " + bleu.toString(16));

            // Construire la couleur adécimale finale
            var couleurRGB = "rgb(" + rouge + ", " + vert + ", " + bleu + ")";

            // Afficher la couleur dans la console pour le débogage
            console.log("Couleur: " + couleurRGB);

            // Appliquer la couleur de fond
            document.body.style.backgroundColor = couleurRGB;
        }

        // Mettre à jour la couleur toutes les 1 seconde (1000 millisecondes)
        setInterval(colorchanged, 1000);

        // Appeler la fonction une fois au chargement de la page
        colorchanged();
    })();

    function updateMessage() {
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
