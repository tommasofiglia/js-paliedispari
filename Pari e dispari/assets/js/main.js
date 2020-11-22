//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri.Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.

//Dichiaro le variabili che descrivono le scelte dell'utente attraverso il prompt.
var pariDispari = prompt("Scegli tra pari e dispari");
console.log("Hai scelto che il " + pariDispari + " vince");
var userNumber = Number(prompt("Scegli un numero da 1 a 5"));
console.log("Il numero che hai scelto è " + userNumber);

//Descrivo la funzione che genera un numero automatico per il pc e utilizzo la stessa funzione per dichiarare una variabile che scelga casualmente il numero del pc in un range compreso tra 1 e 5.
function random(num1 ,num2) {
  var randomCalc = Math.floor(Math.random() * num2) + num1;
  return randomCalc;
}

var pcNumber = random(1, 5)
console.log("Il numero scelto dal tuo pc è " + pcNumber);

//Dichiaro la variabile somma dei due numeri di pc ed utente.
var sumNumber = userNumber + pcNumber;
console.log("La somma dei due numeri è " + sumNumber);

//Descrivo la funzione che riconosce se un numero è pari o dispari (Assegnando true o false all'argomento) e creo una variabile che sfrutti la funzione usando come argomento la somma dei due numeri.
function checkPariDispari(num) {
  if (num % 2 == 0) {
    return true ;
  } else {
    return false;
  }
}

var resultPariDispari = checkPariDispari(sumNumber);

//Attraverso una if, analizzo le 4 possibili combinazioni tra scelta iniziale del giocatore e risultato dell'analisi della somma dei due numeri e dico attraverso il log se l'utente ha vinto o perso.

if (resultPariDispari == true && pariDispari == "pari") {
  console.log("Complimenti! Hai vinto!");
} else if (resultPariDispari == true && pariDispari == "dispari") {
  console.log("Che peccato, hai perso...");
} else if (resultPariDispari == false && pariDispari == "dispari") {
  console.log("Complimenti! Hai vinto!");
} else if (resultPariDispari == false && pariDispari == "pari") {
  console.log("Che peccato, hai perso...");
}
