let livres = [
  {
    id: 1,
    titre: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    annee: 1954,
    genre: "fantastique",
    note: 5,
    statut: "lu",
    description:
      "L'histoire de Frodon Sacquet qui doit détruire l'Anneau Unique pour sauver la Terre du Milieu.",
    urlCouverture:
      "https://cdn.pixabay.com/photo/2021/12/14/20/21/book-6871220_1280.jpg",
  },
  {
    id: 2,
    titre: "1984",
    auteur: "George Orwell",
    annee: 1949,
    genre: "scienceFiction",
    note: 4,
    statut: "lu",
    description:
      "Dans une société totalitaire, Winston Smith tente de résister au contrôle omniprésent de Big Brother.",
    urlCouverture:
      "https://cdn.pixabay.com/photo/2015/11/19/21/11/atlas-1052011_1280.jpg",
  },
  {
    id: 3,
    titre: "Dune",
    auteur: "Frank Herbert",
    annee: 1965,
    genre: "scienceFiction",
    note: 5,
    statut: "enCours",
    description:
      "L'histoire de Paul Atréides sur la planète désertique Arrakis, source de l'épice la plus précieuse de l'univers.",
    urlCouverture:
      "https://cdn.pixabay.com/photo/2017/08/10/08/16/book-2619909_1280.jpg",
  },
];

// 1er etape:
// Afficher les objets dans les cards
// NOUVEAU
// [14:10]
// 2ieme etape:
// Ajouter les fonctionnalité de suppression, d'ajout , et de modification en JS (Sans modal)
// NOUVEAU
// [14:10]
// 3ieme etape:
// Barre derecherche.

// je créer une fonction afficherLivre
function afficherLivres() {
    // je récupére le div ou nous allons afficher les cartes
    const div = document.querySelector(".book-grid");

    // je parcouri le tableau des livres et je crée une carte pour livre
    livres.forEach(livre => {
        // je crée un element div pour la carte
        const card = document.createElement("div");
      // j'ajoute une classe pour les styles de ma card à definir  dans le css
      card.classList.add('card');

    //   je crée le contenu de ma carte 
    card.innerHTML =`
    <h2> id : ${livre.id}</h2>
    <h3> titre : ${livre.titre}</h3>
    <p>  auteur : ${livre.auteur}</p>
    <p>  année : ${livre.annee}</p>
    <p>  genre : ${livre.genre}</p>
    <p>  note : ${livre.note}</p>
    <p>  statut : ${livre.statut}</p>
    <p>  description : ${livre.description}</p>
       <p> urlCouverture : ${livre.urlCouverture}</p>
       
    `;
    // j'ajoute ma carte au div
    div.appendChild(card);
    });
}
 afficherLivres();


// // 2

//  function ajouterLivre() {
//     const livre = {
//       id: Date.now(),
//       titre: document.getElementById("titre").value,
//       auteur: document.getElementById("auteur").value,
//       annee: parseInt(document.getElementById("annee").value),
//       genre: document.getElementById("genre").value,
//       note: parseInt(document.getElementById("note").value),
//       statut: document.getElementById("statut").value,
//       description: document.getElementById("description").value,
      
//     };
// }