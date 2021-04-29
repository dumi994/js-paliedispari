//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt('Scegli pari o dispari')
var numUtente = Number(prompt('Scegli un numero da 1 a 5'))

console.log(`${pariDispari} ${numUtente}`)
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numCasuale(min, max) {
    return Math.floor(Math.random() *5);
}
console.log(numCasuale(1, 5));

/* function getRandomInteger (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomInteger(10, 45)); */
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


//Dichiariamo chi ha vinto.