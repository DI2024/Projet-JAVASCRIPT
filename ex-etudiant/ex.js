let students = [];
const prompt = require("prompt-sync")({sigint:true});

function addStudent() {
    let nom = prompt("Nom:");
    let prenom = prompt("Prénom:");
    let age = prompt("Age:");
    let note = parseFloat(prompt("Note:"));

    if (isNaN(note)) {
        console.log("Invalid input. Please enter a valid note.");
        return;
    }

    let student = {
        nom: nom,
        prenom: prenom,
        age: age,
        note: note,
        status: note < 10 ? "Fail" : "Admis"
    };

    students.push(student);

    // Sort students based on the "Note" property in descending order
    students.sort(function (a, b) {
        return b.note - a.note;
    });

    // Display the sorted student list as a table in the console
    console.table(students);
}

// Example usage
addStudent();
addStudent();
addStudent();
