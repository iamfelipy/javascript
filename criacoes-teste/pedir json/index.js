
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

request.onload = function() {
    let superHeroes = request.response;
    console.log(superHeroes);
}

// parse(): Aceita uma string JSON como um parâmetro e retorna o objeto JavaScript correspondente.

// stringify(): Aceita um objeto como um parâmetro e retorna o formato equivalente de string JSON.


// ------------------------------------------------------

let requestURL1 = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request2 = new XMLHttpRequest();

request2.open('GET', requestURL1);

request2.responseType = 'text';

request2.send();

request2.onload = function() {
    let superHeroesText = request.response;
    console.log(superHeroesText);
    superHeroes = JSON.parse(superHeroesText);
    console.log(superHeroes);
}