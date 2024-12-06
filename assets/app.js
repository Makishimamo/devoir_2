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
let champs = [prenom, nom, message];

// Vérifier chaque champs, si vide lancer la fonction showErrorMessage()
function champVide() {
    champs.forEach(function(champs) {
        if (champs.value.trim() === '') {
            showErrorMessage();
        }
    });
}

// Création d'une fonction pour créer le nouveau commentaire
const commentList =  document.getElementById('comment-list');
const nomV = document.getElementById('last-name').value;
const prenomV = document.getElementById('first-name').value;
const messageV = document.getElementById('message').value;
const myForm = document.getElementById('form');

function addCom(nomV, prenomV, messageV) {
    
    // Crée une <div>
    const newCom = document.createElement('div');
    
    // Ajoute la class à la <div> créer
    newCom.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500'); 
    
    // J'insère le code suivant dans ma <div>
    newCom.innerHTML = ` 
        <div class="flex-1 py-10 border-t border-gray-200"> 
            <h3 class="font-medium text-gray-900">${nomV} ${prenomV}</h3> 
            <div class="prose prose-sm mt-4 max-w-none text-gray-500"> 
                <p>${messageV}</p> 
            </div> 
        </div> 
    `;

    // Ajoute le commentaire à la suite des autres
    commentList.appendChild(newCom);

    // Efface les valeurs contenue dans le formulaire
    myForm.reset(); 
}

// Lier la fonction au bouton "Envoyer"
const myButton = document.querySelector('button');
myButton.addEventListener('click', champVide);
myButton.addEventListener('click', addCom);