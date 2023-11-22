const prompt = require("prompt-sync")({sigint:true});


const age = prompt("Quel est votre âge ?");

// Demander à l'utilisateur s'il possède un permis de conduire valide
const Permis = prompt("Possédez-vous un permis de conduire valide ? (Oui/Non)");

// Vérifier si la personne est âgée de plus de 18 ans et possède un permis de conduire valide
if (age >= 18 && (Permis.toLowerCase() === "oui" || Permis.toLowerCase() === "yes")) {
    // Afficher un message si les critères sont remplis
    console.log("Vous êtes autorisé(e) à louer une voiture. Bonne route !");
} else {
    // Afficher un message si les critères ne sont pas remplis
    console.log("Vous ne remplissez pas les conditions pour louer une voiture.");
}
