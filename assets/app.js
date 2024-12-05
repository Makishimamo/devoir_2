// Test : appel du fichier
//alert("Hello World");

// Empêcher l'envoi du formulaire par défaut
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});

// Création de la fonction pour faire apparaitre le message d'erreur
function showErrorMessage() {
    document.getElementById('error-message').style.display = 'block';
}

// Selectionner les champs du formulaire
let prenom = document.getElementById('first-name');
let nom = document.getElementById('last-name');
let message = document.getElementById('message');

// Vérifier chaque champs, si vide lancer la fonction showErrorMessage()
if (prenom.value === '') {
    showErrorMessage();
}   else if (nom.value === '') {
    showErrorMessage();
}   else if (message.value === '') {
    showErrorMessage();
}

// Céation d'un fonction qui va ajouter le commentaire dans la div id="comment-list"
function commenter() {
    alert ("Bouton cliquer") ;
}

// Lier la fonction au bouton "Envoyer"
const myButton = document.querySelector('button');
myButton.addEventListener('click', commenter());