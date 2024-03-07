//Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const price = 0.21;
const discountUnder18 = 0.2;
const discountOver65 = 0.4;
let priceUnder18 = price * (1 - discountUnder18);
let priceOver65 = price * (1 - discountOver65);
let finalCost;

// let age = parseInt(prompt('Quanti anni hai?'));
// let distance = parseInt(prompt('Quanti chilometri vuoi percorrere?'));

let elAge = document.getElementById('age');
let elDistance = document.getElementById('distance');
let ticketEl = document.getElementById('costo-biglietto');
let elButton = document.querySelector('.btn.btn-danger');

elButton.addEventListener('click', function(){
    let age = elAge.value;
    let distance = elDistance.value;
    if (age === '0-17'){
        finalCost = priceUnder18 * distance
        } else if (age === '65'){
           finalCost = priceOver65 * distance
        } else {
            finalCost = price * distance
    };
    ticketEl.innerHTML = `€ ${finalCost.toFixed(2)}`;
})

// distance 10
// age < 18 === 1.68000001
// age > 65 === 1.26
// 18 =< age < 65 === 2.1