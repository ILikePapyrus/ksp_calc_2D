var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        createTable(this.responseText);
    }
};
xhttp.open("GET", "../json/stock.json", true);
xhttp.send();

function createTable(responseText) {
    const myObj = JSON.parse(responseText);
    let text = "<table><tr><th>Nome</th><th>Orbitante a</th><th>Semi-asse Maggiore</th><th>Parametro Gravitazionale (mu)</th><th>Raggio</th><th>Inclinazione (°)</th><th>SOI</th><th>Colore</th></tr>";
    for (let x in myObj) {
        text += "<tr><td style='color: " + myObj[x].color + "; font-weight: bold;'>" + myObj[x].name + "</td><td>" + myObj[x].parent + "</td><td>" + myObj[x].alt + "</td><td>" + myObj[x].mu + "</td><td>" + myObj[x].radius + "</td><td>" + myObj[x].inclination + "</td><td>" + myObj[x].soi + "</td><td>" + myObj[x].color + "</td></tr>";
    }
    text += "</table>";
    document.getElementById("table").innerHTML = text;
}