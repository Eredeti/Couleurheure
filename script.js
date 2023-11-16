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

    function colorchanged() {
        var currentSecond = new Date().getSeconds();
        var body = document.body;

        if (currentSecond === 20) {
            body.style.backgroundColor = "#FF0000";
        } else if (currentSecond === 40) {
            body.style.backgroundColor = "#00FF00";
        } else if (currentSecond === 0) {
            body.style.backgroundColor = "#0000FF";
        }
    }

    // Mettre à jour le message toutes les 1 secondes (1000 millisecondes)
    setInterval(updateMessage, 1000);
    setInterval(colorchanged, 1000);

    // Appeler la fonction une fois au chargement de la page
    updateMessage();
    colorchanged();
});
