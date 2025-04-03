Tableau des cours
const cours
L
f title: "Premier cours sur
file: "mathematiques.pdf" ),
.
f title: "Deuxième cours", file: "physique.pdf" .
[ title: "Troisième cours", file: "chimie.pdf" ),
// Ajoutez vos cours ici
]


// Fonction pour générer la liste des cours
function generateCoursList() f
const coursList = document.getElementById("cours-list");
cours.forEach((cours) >
r
const listItem = document.createElement("li");
const link = document.createElement("a");
link.href =`pdf/$fcours.file]`;
link.textContent = cours.title;
listItem.appendChild(link);
coursList.appendChild(listItem);
F
F


// Fonction pour afficher les actualités
function displayActualites() [
const actualitesContainer = document.getElementById("actualites-container");
// Ajoutez vos actualités ici
const actualitel = document.createElement("p");
actualitel.textContent = "Actualité 1 ";
actualitesContainer.appendChild(actualitel);
const actualite2 = document.createElement("p");
actualite2.textContent = "Actualité 2";
actualitesContainer.appendChild(actualite2);
// Ajoutez vos actualités ici


// Appel des fonctions
generateCoursList();
displayActualites();
