//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt('Scegli pari o dispari')
var numUtente = Number(prompt('Scegli un numero da 1 a 5'))

console.log(pariDispari + ' ' + numUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numCasuale(min, max) {
    return Math.floor(Math.random() *5 + 1);
}
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function somma (numUtente, numCasuale){
    console.log(numUtente, numCasuale);
    var risultato = numUtente + numCasuale;
   
    console.log(risultato);
    return risultato;
}

var risultato = somma (numUtente, numCasuale(1, 5));
if (risultato % 2 == 0){
    var sommaPariDispari = 'pari';
    console.log('pari');
}else{
    var sommaPariDispari = 'dispari';
    console.log('dispari');
}

//Dichiariamo chi ha vinto.

if (pariDispari == sommaPariDispari){
    console.log('hai vinto');
}else{
    console.log('hai perso');
}