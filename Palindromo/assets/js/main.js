var parola = prompt("Inserisci una parola");
var palindroma = checkPalindroma(parola);

function checkPalindroma(parola) {
  var parolaContraria = parola.split("").reverse().join("");

  if (parola == parolaContraria) {
    return true;
  } else {
    return false;
  }

}

if (palindroma == true) {
    console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}
