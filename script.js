document.addEventListener("DOMContentLoaded", function() {
    var dynamicContent = document.getElementById("dynamicContent");

    function updateMessage() {
        var currentSecond = new Date().getSeconds();

        if (currentSecond < 20) {
            dynamicContent.innerHTML = "0-20 <br>" + currentSecond;


        } else if (currentSecond < 40) {
            dynamicContent.innerHTML = "20-40 <br>" + currentSecond;
        } else {
            dynamicContent.innerHTML = "40-60 <br>" + currentSecond;
        }
    }

    // Mettre à jour le message toutes les 1 secondes (1000 millisecondes)
    setInterval(updateMessage, 1000);

    // Appeler la fonction une fois au chargement de la page
    updateMessage();
});