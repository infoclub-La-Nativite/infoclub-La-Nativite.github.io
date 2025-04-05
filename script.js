// Tableau des cours
const cours = [
    { title: "Premier cours sur ...", file: "mathematiques.pdf" },
    { title: "Deuxième cours", file: "physique.pdf" },
    { title: "Troisième cours", file: "chimie.pdf" },
    // Ajoutez vos cours ici
];

// Fonction pour générer la liste des cours
function generateCoursList() {
    const coursList = document.getElementById("cours-list");
    cours.forEach((cours) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = `pdf/${cours.file}`;
        link.textContent = cours.title;
        listItem.appendChild(link);
        coursList.appendChild(listItem);
    });
}

// Fonction pour afficher les actualités
function displayActualites() {
    const actualitesContainer = document.getElementById("actualites-container");
    // Ajoutez vos actualités ici
    const actualite1 = document.createElement("p");
    actualite1.textContent = "Actualité 1 ";
    actualitesContainer.appendChild(actualite1);
    const actualite2 = document.createElement("p");
    actualite2.textContent = "Actualité 2";
    actualitesContainer.appendChild(actualite2);
    // Ajoutez vos actualités ici
}

// Appel des fonctions
generateCoursList();
displayActualites();
