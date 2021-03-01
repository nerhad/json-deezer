

/*const url = 'https://api.deezer.com/version/service/id/method/?parameters';

async function getDeezer() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getDeezer();*/





/////let villes = document.querySelectorAll('');

//illes.insertAdjacent('afterend', '<li>Toulon</li>')


var a = [
  "Los Angeles",
  "New York",
  "Washington",];


for (var i = 0; i < document.querySelectorAll("li").length; i++) {
  document.querySelectorAll("li")[i].innerHTML = a[i];
}

