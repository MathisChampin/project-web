document.getElementById("Formulaire").addEventListener("submit", function(e) {
    e.preventDefault();

    var erreur;
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tout les champs";
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false
    }
    else {
        alert("Formulaire envoyé !");
    }
});

const doneButton = document.createElement("button");
doneButton.innerHTML= '<i class="fas fa-check"></i>';
doneButton.classList.add("done-button");
todoDiv.appendChild(doneButton);