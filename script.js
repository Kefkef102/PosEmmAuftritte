// Liste der Mitspieler
const mitglieder = ['Anna', 'Ben', 'Clara', 'David', 'Emma'];

// Liste der Auftritte
const auftritte = [
    { id: 1, name: "Weihnachtskonzert", datum: "2024-12-24" },
    { id: 2, name: "Frühlingsfest", datum: "2024-05-15" },
    { id: 3, name: "Jubiläumskonzert", datum: "2024-08-01" }
];

// Funktion zum Erstellen der Tabelle
function erstelleTabelle() {
    const table = document.getElementById('auftritteTable');

    // Tabellenkopf erstellen
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');

    // Erste Spalte: Auftrittsname und Datum
    let thAuftritt = document.createElement('th');
    thAuftritt.textContent = 'Auftritt';
    headerRow.appendChild(thAuftritt);

    // Für jedes Mitglied eine Spalte hinzufügen
    mitglieder.forEach(mitglied => {
        let th = document.createElement('th');
        th.textContent = mitglied;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Tabellenkörper erstellen
    let tbody = document.createElement('tbody');

    auftritte.forEach(auftritt => {
        let row = document.createElement('tr');

        // Auftrittsinformationen (Name und Datum)
        let tdAuftritt = document.createElement('td');
        tdAuftritt.textContent = `${auftritt.name} (${auftritt.datum})`;
        row.appendChild(tdAuftritt);

        // Für jedes Mitglied eine Zusage/Absage-Option
        mitglieder.forEach(mitglied => {
            let td = document.createElement('td');

            let select = document.createElement('select');
            select.name = `status-${auftritt.id}-${mitglied}`;

            let optionZusage = document.createElement('option');
            optionZusage.value = 'Zusage';
            optionZusage.textContent = 'Zusage';
            select.appendChild(optionZusage);

            let optionAbsage = document.createElement('option');
            optionAbsage.value = 'Absage';
            optionAbsage.textContent = 'Absage';
            select.appendChild(optionAbsage);

            td.appendChild(select);
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}

// Speichern der Zu- und Absagen
document.getElementById('speichernBtn').addEventListener('click', function() {
    auftritte.forEach(auftritt => {
        mitglieder.forEach(mitglied => {
            let select = document.querySelector(`select[name="status-${auftritt.id}-${mitglied}"]`);
            let status = select.value;
            console.log(`Auftritt: ${auftritt.name}, Mitglied: ${mitglied}, Status: ${status}`);
            // Hier kannst du den Status für jedes Mitglied und Auftritt speichern (z.B. in einer Datenbank oder Datei)
        });
    });
    alert("Zu- und Absagen gespeichert!");
});

// Initialisiere die Tabelle
erstelleTabelle();
