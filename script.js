// Constants
const diceFaces = 20;

// Functions
// Random generation
function randI(max) {
    return Math.ceil(Math.random() * max);
}
function rollDice(){
    return randI(diceFaces);
}

// Calculation
function calcMod(d20) {
    const weight = 1.2;
    let inc = -1;

    if (d20 > 15) inc = 1;
    else if (d20 > 7 ) inc = 0;

    return Math.round(inc + d20/weight);
}
function calcTotal(base, mod){
    return base+mod;
}
// Fill functions
function fillTd(row, value, pos){
    const td = row.querySelector(`td:nth-child(${pos})`);
    td.innerHTML = value;
}