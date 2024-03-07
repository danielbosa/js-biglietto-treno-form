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
const charactersAll ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersUppercase = 'ABCD';

// price discount calculations
let priceUnder18 = price * (1 - discountUnder18);
let priceOver65 = price * (1 - discountOver65);
let finalCost;

// document mapping
let elFullname = document.getElementById('fullname');
let elAge = document.getElementById('age');
let elDistance = document.getElementById('distance');
let ticketEl = document.getElementById('costo-biglietto');
let elButton = document.querySelector('.btn.btn-danger');
let elTraveller = document.getElementById('traveller');
let elType = document.getElementById('type');
let elTraincar = document.getElementById('traincar');
let elSeat = document.getElementById('seat');
let elTicketNumber = document.getElementById('ticket-number');

// FUNCTIONS
// number of traincar
function RndNumberGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
// number of ticket
function ticketNumberGen(length) {
    let result = ' ';
    const charactersLength = charactersAll.length;
    for ( let i = 0; i < length; i++ ) {
        result += charactersAll.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
// letter of seat
function seatRndGen(length) {
     let result =' ';
     const charactersLength = charactersUppercase.length;
     for ( let i = 0; i < length; i++ ){
        result += charactersUppercase.charAt(Math.floor(Math.random() * charactersLength));

        return result;
     }
};

// Button Click Event
elButton.addEventListener('click', function(){
    let age = elAge.value; 
    let distance = elDistance.value;
    if (age === '0-17'){
        finalCost = priceUnder18 * distance;
        elType.innerHTML = `Biglietto ridotto under18`;
        } else if (age === '65'){
           finalCost = priceOver65 * distance;
           elType.innerHTML = `Biglietto ridotto over65`;
        } else {
            finalCost = price * distance;
            elType.innerHTML = `Biglietto standard`;
    };
    ticketEl.innerHTML = `€ ${finalCost.toFixed(2)}`;
    elTraveller.innerHTML = `${elFullname.value}`;
    elTraincar.innerHTML = RndNumberGen(1, 25);
    elSeat.innerHTML = RndNumberGen(1,30) + seatRndGen(1);
    elTicketNumber.innerHTML = ticketNumberGen(10);

})

// distance 10
// age < 18 === 1.68000001
// age > 65 === 1.26
// 18 =< age < 65 === 2.1