document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('auftritteTable');

    if (!table) {
        console.error('Tabelle konnte nicht gefunden werden.');
        return;
    }

    const mitglieder = ['Anna', 'Ben', 'Clara', 'David', 'Emma'];
    const auftritte = [
        { id: 1, name: "Weihnachtskonzert", datum: "2024-12-24" },
        { id: 2, name: "Frühlingsfest", datum: "2024-05-15" },
        { id: 3, name: "Jubiläumskonzert", datum: "2024-08-01" }
    ];

    function erstelleTabelle() {
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

    erstelleTabelle();
});
