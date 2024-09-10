// Dummy-Daten für Auftritte
const auftritte = [
    { id: 1, name: "Weihnachtskonzert" },
    { id: 2, name: "Frühlingsfest" },
    { id: 3, name: "Jubiläumskonzert" }
];

// Auftrittsliste anzeigen
const auftrittListe = document.getElementById("auftritte");
const auftrittSelect = document.getElementById("auftritt");

auftritte.forEach(auftritt => {
    const listItem = document.createElement("li");
    listItem.textContent = auftritt.name;
    auftrittListe.appendChild(listItem);

    const option = document.createElement("option");
    option.value = auftritt.id;
    option.textContent = auftritt.name;
    auftrittSelect.appendChild(option);
});

// Formular verarbeiten
document.getElementById("anmeldeFormular").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const auftrittId = document.getElementById("auftritt").value;
    const status = document.querySelector('input[name="status"]:checked').value;

    console.log("Name:", name);
    console.log("Auftritt:", auftritte.find(a => a.id == auftrittId).name);
    console.log("Status:", status);

    alert("Danke für deine Anmeldung!");
});
