// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

let carrelloTotale = null
let scontoPercentuale = 30

// creo un ciclo per calcolare la somma dei prezzi

for (let i = 0; i < prices.length; i++) {
  const sommaPrezzi = prices[i]
  carrelloTotale += sommaPrezzi
}//console.log(carrelloTotale);

// verifico se l'utente ha diritto allo sconto se isAmbassador è true

if (utenteCheEffettuaLAcquisto.isAmbassador) {
  carrelloTotale = (carrelloTotale * 30) / 100
  console.log("L'utente ha diritto allo sconto. Il totale è:", carrelloTotale)
} else console.log("L'utente NON ha diritto allo sconto. Il totale è:", carrelloTotale)

//verifico se bisogna applicare le spese di spedizione

if (carrelloTotale <= 100) {
  carrelloTotale += shippingCost
}console.log("Il totale con spese di spedizione è", carrelloTotale)

// creo un array contenente tutti gli utenti

let utenti = []
utenti.push(marco, amy, paul)
console.log("Gli utenti sono:",utenti.length, utenti);

// creo un ciclo per capire chi tra gli utenti è ambassador

for (let i = 0; i < utenti.length; i++) {
  const utenteSingolo = utenti[i];
  //console.log(utenteSingolo); 
  if (utenteSingolo.isAmbassador) {
    console.log(utenteSingolo.name, utenteSingolo.lastName,"è un Ambassador");
  } else console.log(utenteSingolo.name, utenteSingolo.lastName,"NON è un ambassador");
}

// creo un ciclo per inserire in un unico array solo gli utenti Ambassador

let utentiAmbassador = []
let utentiNonAmbassador = []

for (let i = 0; i < utenti.length; i++) {
  const utenteSingolo = utenti[i];
  if (utenteSingolo.isAmbassador) {
    utentiAmbassador.push(utenteSingolo)
    console.log("Gli utenti Ambassador sono:", utentiAmbassador.length, utentiAmbassador); 
  }else
    utentiNonAmbassador.push(utenteSingolo)
  } console.log("Gli utenti NON Ambassador sono:", utentiNonAmbassador.length, utentiNonAmbassador); 

