// Test : appel du fichier
//alert("Hello World");

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