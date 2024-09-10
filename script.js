document.addEventListener('DOMContentLoaded', function() {
    console.log("Tabelle wird erstellt...");
    const table = document.getElementById('auftritteTable');

    if (!table) {
        console.error('Tabelle konnte nicht gefunden werden.');
        return;
    }

    const mitglieder = ['Andreas', 'Uta', 'Johanna', 'Karola', 'Kevin', 'Nikolai'];
    const auftritte = [
        { id: 1, name: "Erntedankfest", datum: "06.10.2024" },
        { id: 2, name: "Gottesdienst zum Ordinationsjubiläum", datum: "25.10.2024" },
        { id: 3, name: "Martinsumzug", datum: "08.11.2024" },
        { id: 4, name: "Weihnachtsmarkt", datum: "01.12.2024" },
        { id: 5, name: "Adventskonzert", datum: "08.12.2024" },
        { id: 6, name: "Weihnachtsmarkt", datum: "14.12.2024" },
        { id: 7, name: "Kurendeblasen", datum: "22.12.2024" },
        { id: 8, name: "Heilig Abend", datum: "24.12.2024" },
    ];

    function erstelleTabelle() {
        // Bevor die Tabelle erstellt wird, löschen wir ihren Inhalt, um Dopplungen zu vermeiden
        table.innerHTML = '';

        let thead = document.createElement('thead');
        let headerRow = document.createElement('tr');

        // Erste Spalte für das Datum
        let thDatum = document.createElement('th');
        thDatum.textContent = 'Datum';
        headerRow.appendChild(thDatum);

        // Zweite Spalte für den Auftrittsnamen
        let thAuftritt = document.createElement('th');
        thAuftritt.textContent = 'Auftritt';
        headerRow.appendChild(thAuftritt);

        // Spalten für die Mitspieler
        mitglieder.forEach(mitglied => {
            let th = document.createElement('th');
            th.textContent = mitglied;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        let tbody = document.createElement('tbody');

        auftritte.forEach(auftritt => {
            let row = document.createElement('tr');

            // Zelle für das Datum des Auftritts
            let tdDatum = document.createElement('td');
            tdDatum.textContent = auftritt.datum;
            row.appendChild(tdDatum);

            // Zelle für den Namen des Auftritts
            let tdAuftritt = document.createElement('td');
            tdAuftritt.textContent = auftritt.name;
            row.appendChild(tdAuftritt);

            // Für jedes Mitglied eine Zusage/Absage/Noch nicht abgestimmt Option mit Radio-Buttons
            mitglieder.forEach(mitglied => {
                let td = document.createElement('td');

                // Container für die Radio-Buttons, um sie untereinander anzuordnen
                let radioContainer = document.createElement('div');
                radioContainer.style.display = 'flex';
                radioContainer.style.flexDirection = 'column'; // Damit die Radio-Buttons untereinander angezeigt werden

                // Noch nicht abgestimmt (Standard)
                let radioNichtAbgestimmt = document.createElement('input');
                radioNichtAbgestimmt.type = 'radio';
                radioNichtAbgestimmt.name = `status-${auftritt.id}-${mitglied}`;
                radioNichtAbgestimmt.value = 'Noch nicht abgestimmt';
                radioNichtAbgestimmt.id = `nichtAbgestimmt-${auftritt.id}-${mitglied}`;
                radioNichtAbgestimmt.checked = true; // Standardmäßig ausgewählt

                let labelNichtAbgestimmt = document.createElement('label');
                labelNichtAbgestimmt.htmlFor = `nichtAbgestimmt-${auftritt.id}-${mitglied}`;
                labelNichtAbgestimmt.textContent = 'Noch nicht abgestimmt';

                // Zusage Radio Button
                let radioZusage = document.createElement('input');
                radioZusage.type = 'radio';
                radioZusage.name = `status-${auftritt.id}-${mitglied}`;
                radioZusage.value = 'Zusage';
                radioZusage.id = `zusage-${auftritt.id}-${mitglied}`;

                let labelZusage = document.createElement('label');
                labelZusage.htmlFor = `zusage-${auftritt.id}-${mitglied}`;
                labelZusage.textContent = 'Zusage';

                // Absage Radio Button
                let radioAbsage = document.createElement('input');
                radioAbsage.type = 'radio';
                radioAbsage.name = `status-${auftritt.id}-${mitglied}`;
                radioAbsage.value = 'Absage';
                radioAbsage.id = `absage-${auftritt.id}-${mitglied}`;

                let labelAbsage = document.createElement('label');
                labelAbsage.htmlFor = `absage-${auftritt.id}-${mitglied}`;
                labelAbsage.textContent = 'Absage';

                // Event-Listener hinzufügen, um die Farbe bei Auswahl zu ändern
                radioZusage.addEventListener('change', function() {
                    if (radioZusage.checked) {
                        td.style.backgroundColor = 'lightgreen';
                    }
                });

                radioAbsage.addEventListener('change', function() {
                    if (radioAbsage.checked) {
                        td.style.backgroundColor = 'lightcoral';
                    }
                });

                radioNichtAbgestimmt.addEventListener('change', function() {
                    if (radioNichtAbgestimmt.checked) {
                        td.style.backgroundColor = ''; // Keine Farbe
                    }
                });

                // Radio-Buttons und Labels in den Container hinzufügen
                radioContainer.appendChild(radioNichtAbgestimmt);
                radioContainer.appendChild(labelNichtAbgestimmt);
                radioContainer.appendChild(radioZusage);
                radioContainer.appendChild(labelZusage);
                radioContainer.appendChild(radioAbsage);
                radioContainer.appendChild(labelAbsage);

                // Container in die Zelle hinzufügen
                td.appendChild(radioContainer);
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
    }

    erstelleTabelle();
});
