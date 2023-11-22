const prompt = require('prompt-sync')();

const chambresHotel = {
  1: { numero: 1, type: "simple", prixParNuit: "500 DH" },
  2: { numero: 2, type: "double", prixParNuit: "800  DH" },
  3: { numero: 3, type: "suite", prixParNuit: "1200 DH" },
  // Add more rooms as needed
};

const reservations = [];

function afficherMenu() {
  console.log("\nMenu:");
  console.log("1. Afficher les chambres disponibles");
  console.log("2. Afficher les réservations en cours");
  console.log("3. Effectuer une réservation");
  console.log("4. Quitter");
}

function afficher_chambres_disponibles() {
  console.log("\nChambres disponibles :");
  for (const numeroChambre in chambresHotel) {
    const chambre = chambresHotel[numeroChambre];
    console.log(
      `Chambre ${chambre.numero} - Type: ${chambre.type}, Prix par nuit: ${chambre.prixParNuit}`
    );
  }
}

function afficher_reservations() {
  console.log("\nRéservations en cours :");
  for (const reservation of reservations) {
    console.log(
      `Client: ${reservation.nomClient}, Chambre: ${reservation.numeroChambre}, Dates: ${reservation.dateDebut} à ${reservation.dateFin}`
    );
  }
}

function validateDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}

function effectuer_reservation() {
  const nomClient = prompt("Entrez votre nom : ");

  let numeroChambre;
  while (true) {
    numeroChambre = prompt("Entrez le numéro de la chambre : ");
    if (chambresHotel[numeroChambre]) {
      break;
    } else {
      console.log("Cette chambre n'existe pas.");
    }
  }

  let dateDebut, dateFin;
  while (true) {
    dateDebut = prompt("Entrez la date de début de la réservation (format YYYY-MM-DD) : ");
    if (validateDate(dateDebut)) {
      break;
    } else {
      console.log("Format de date incorrect. Veuillez utiliser le format YYYY-MM-DD.");
    }
  }

  while (true) {
    dateFin = prompt("Entrez la date de fin de la réservation (format YYYY-MM-DD) : ");
    if (validateDate(dateFin)) {
      break;
    } else {
      console.log("Format de date incorrect. Veuillez utiliser le format YYYY-MM-DD.");
    }
  }

  // Check for overlapping reservations
  const chambre = chambresHotel[numeroChambre];
  if (!chambre) {
    console.log("Cette chambre n'existe pas.");
    return;
  }

  for (const reservation of reservations) {
    if (
      reservation.numeroChambre === numeroChambre &&
      ((dateDebut >= reservation.dateDebut && dateDebut <= reservation.dateFin) ||
        (dateFin >= reservation.dateDebut && dateFin <= reservation.dateFin))
    ) {
      console.log("La chambre n'est pas disponible pour les dates choisies.");
      return;
    }
  }

  reservations.push({
    nomClient: nomClient,
    numeroChambre: numeroChambre,
    dateDebut: dateDebut,
    dateFin: dateFin,
  });

  console.log(`Réservation effectuée pour ${nomClient}, Chambre ${numeroChambre}.`);
}

function main() {
  while (true) {
    afficherMenu();
    const choix = prompt("Choisissez une option (1-4) : ");
    switch (choix) {
      case '1':
        afficher_chambres_disponibles();
        break;
      case '2':
        afficher_reservations();
        break;
      case '3':
        effectuer_reservation();
        break;
      case '4':
        console.log("Au revoir !");
        return;
      default:
        console.log("Option invalide. Veuillez choisir une option valide.");
    }
  }
}

// Run the program
main();
