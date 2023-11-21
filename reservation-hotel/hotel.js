const readline = require('readline');

let chambresHotel = {
  1: { numero: 1, type: "simple", prixParNuit: 50 },
  2: { numero: 2, type: "double", prixParNuit: 80 },
  3: { numero: 3, type: "suite", prixParNuit: 120 },
  // Add more rooms as needed
};

let reservations = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function afficherMenu() {
  console.log("\nMenu:");
  console.log("1. Afficher les chambres disponibles");
  console.log("2. Afficher les réservations en cours");
  console.log("3. Effectuer une réservation");
  console.log("4. Quitter");
}

function afficher_chambres_disponibles() {
  console.log("\nChambres disponibles :");
  for (let numeroChambre in chambresHotel) {
    let chambre = chambresHotel[numeroChambre];
    console.log(
      `Chambre ${chambre.numero} - Type: ${chambre.type}, Prix par nuit: ${chambre.prixParNuit}`
    );
  }
}

function afficher_reservations() {
  console.log("\nRéservations en cours :");
  for (let reservation of reservations) {
    console.log(
      `Client: ${reservation.nomClient}, Chambre: ${reservation.numeroChambre}, Dates: ${reservation.dateDebut} à ${reservation.dateFin}`
    );
  }
}

function effectuer_reservation() {
  rl.question("Entrez votre nom : ", (nomClient) => {
    rl.question("Entrez le numéro de la chambre : ", (numeroChambre) => {
      rl.question("Entrez la date de début de la réservation (format YYYY-MM-DD) : ", (dateDebut) => {
        rl.question("Entrez la date de fin de la réservation (format YYYY-MM-DD) : ", (dateFin) => {
          // Rest of your code for reservation
          let chambre = chambresHotel[numeroChambre];
          if (!chambre) {
            console.log("Cette chambre n'existe pas.");
            rl.close();
            return;
          }

          for (let reservation of reservations) {
            if (
              reservation.numeroChambre === numeroChambre &&
              ((dateDebut >= reservation.dateDebut && dateDebut <= reservation.dateFin) ||
                (dateFin >= reservation.dateDebut && dateFin <= reservation.dateFin))
            ) {
              console.log("La chambre n'est pas disponible pour les dates choisies.");
              rl.close();
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
          rl.close();
        });
      });
    });
  });
}

function main() {
  afficherMenu();

  rl.question("Choisissez une option (1-4) : ", (choix) => {
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
        rl.close();
        return;
      default:
        console.log("Option invalide. Veuillez choisir une option valide.");
    }

    main(); // Show the menu again
  });
}

// Run the program
main();
