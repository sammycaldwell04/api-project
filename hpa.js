const baseURL = 'https://www.potterapi.com/v1';
const key = '$2a$10$rFtyzMB8bkcKIEyRHFR89.QIYP3R1g1zu79EZnHRxUqF6/XB6JcOK';
const url = `${baseURL}/characters/?key=${key}`;

fetch(url).then(res => res.json()).then(res => res.forEach(x => {
    const table = document.querySelector('table');
    const tableRow = document.createElement('tr');
    const tableCell1 = document.createElement('td');
    const tableCell2 = document.createElement('td');
    const tableCell3 = document.createElement('td');

    table.appendChild(tableRow);
    tableCell1.appendChild(document.createTextNode(x.name));
    tableRow.appendChild(tableCell1);
    tableCell2.appendChild(document.createTextNode(x.house || ''));
    tableRow.appendChild(tableCell2);
    tableCell3.appendChild(document.createTextNode(x.school || ''));
    tableRow.appendChild(tableCell3);

    if(x.house == 'Gryffindor') {
        tableRow.className += 'griff';
    } else if (x.house == 'Slytherin') {
        tableRow.className += 'slyth';
    } else if (x.house == 'Hufflepuff') {
        tableRow.className += 'huff';
    } else if (x.house == 'Ravenclaw') {
        tableRow.className += 'raven';
    } else if (!x.house) {
        tableRow.className += 'und';
    }
}));
