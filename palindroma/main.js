//Chiedere all’utente di inserire una parola
var parola = prompt('Inserisci una parola');
console.log(parola);

var parolaDivisa = parola.split('');
console.log(parolaDivisa);


//Creare una funzione per capire se la parola inserita è palindroma
var parolaDivisa = parolaDivisa.reverse();
var parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

if(parola == parolaInvertita){
    console.log('la parola è palindroma');
}else{
    console.log('la parola non è palindroma');
} 