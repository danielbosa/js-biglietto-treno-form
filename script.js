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
let elButtonGen = document.querySelector('.btn.btn-danger');
let elButtonCanc = document.querySelector('.btn.btn-danger.db-btn');
let elTraveller = document.getElementById('traveller');
let elType = document.getElementById('type');
let elTraincar = document.getElementById('traincar');
let elSeat = document.getElementById('seat');
let elTicketSection = document.querySelector('section');
// let elTicketNumber = document.getElementById('ticket-number');

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

// ButtonGen Click Event
elButtonGen.addEventListener('click', function(){
    //show ticket section
    elTicketSection.className = "container";
    //get input from user
    let age = elAge.value; 
    let distance = elDistance.value;
    //calc discounted price
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
    //print final price
    ticketEl.innerHTML = `€ ${finalCost.toFixed(2)}`;
    //print traveller name
    elTraveller.innerHTML = `${elFullname.value}`;
    //print number of train car (random)
    elTraincar.innerHTML = RndNumberGen(1, 25);
    //print number of seat (random)
    elSeat.innerHTML = RndNumberGen(1,30) + seatRndGen(1);
    //print number of ticket and barcode (random)
    let elTicketNumber = ticketNumberGen(10);
    document.getElementById('ticket-number').innerHTML = elTicketNumber;
    JsBarcode("#barcode", elTicketNumber);
})

// ButtonCanc Click Event
elButtonCanc.addEventListener('click', function(){
    //hide ticket section
    elTicketSection.className = "d-none";
    elFullname.value = '';
    elAge.value = "default";
    elDistance.value = '';
})


// distance 10
// age < 18 === 1.68000001
// age > 65 === 1.26
// 18 =< age < 65 === 2.1