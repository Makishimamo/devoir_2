// Empêcher l'envoi du formulaire par défaut et gérer l'événement de soumission
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Vérifier les champs et ajouter un commentaire si tous les champs sont remplis
    if (champVide()) {
        const nomV = document.getElementById('last-name').value;
        const prenomV = document.getElementById('first-name').value;
        const messageV = document.getElementById('message').value;
        addCom(nomV, prenomV, messageV);
        hideErrorMessage(); // Masquer le message d'erreur si tous les champs sont remplis
    } else {
        showErrorMessage(); // Afficher le message d'erreur si un champ est vide
    }
});

// Création de la fonction pour faire apparaître le message d'erreur
function showErrorMessage() {
    document.getElementById('error-message').style.display = 'block';
}

// Création de la fonction pour masquer le message d'erreur
function hideErrorMessage() {
    document.getElementById('error-message').style.display = 'none';
}

// Sélectionner les champs du formulaire
let prenom = document.getElementById('first-name');
let nom = document.getElementById('last-name');
let message = document.getElementById('message');
let champs = [prenom, nom, message];

// Vérifier chaque champ, si vide, lancer la fonction showErrorMessage()
function champVide() {
    let allFieldsFilled = true;

    champs.forEach(function(champ) {
        if (champ.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    return allFieldsFilled; // Retourne true si tous les champs sont remplis, sinon false
}

// Création d'une fonction pour créer le nouveau commentaire dans le DOM
const commentList = document.getElementById('comment-list');
const myForm = document.getElementById('form');

function addCom(nomV, prenomV, messageV) {
    
    // Crée une <div>
    const newCom = document.createElement('div');
    
    // Ajoute la class à la <div> créée
    newCom.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500'); 
    
    // J'insère le code suivant dans ma <div>
    newCom.innerHTML = ` 
        <div class="flex-1 py-10 border-t border-gray-200"> 
            <h3 class="font-medium text-gray-900">${prenomV} ${nomV}</h3> 
            <div class="prose prose-sm mt-4 max-w-none text-gray-500"> 
                <p>${messageV}</p> 
            </div> 
        </div> 
    `;

    // Ajoute le commentaire à la suite des autres
    commentList.appendChild(newCom);

    // Efface les valeurs contenues dans le formulaire
    myForm.reset(); 
}

// Lier la fonction au bouton "Envoyer"
const myButton = document.querySelector('button');
myButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Vérifier les champs et ajouter un commentaire si tous les champs sont remplis
    if (champVide()) {
        const nomV = document.getElementById('last-name').value;
        const prenomV = document.getElementById('first-name').value;
        const messageV = document.getElementById('message').value;
        addCom(nomV, prenomV, messageV);
        hideErrorMessage(); // Masquer le message d'erreur si tous les champs sont remplis
    } else {
        showErrorMessage(); // Afficher le message d'erreur si un champ est vide
    }
});
