var timeDisplay = document.getElementById("time");


function refreshTime() {
    var dateString = new Date().toUTCString();
    var formattedString = dateString.replace(", ", " - ");
    timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

var dateString = new Date().toUTCString();

let teste = dateString.split(' ');

console.log(teste);