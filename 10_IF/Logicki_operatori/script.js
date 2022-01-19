// Vezbanje

let pol = "z";
    god = 15;
if ((pol == "z" || pol == "Z" || pol == "Ž" || pol == "ž") && god >= 18)) {
    console.log("Osoba je zenskog pola i punoletna je");
} else if ((pol == "z" || pol == "Z" || pol == "Ž" || pol == "ž") && god < 18 && god > 0)) {
    console.log("Osoba je zenskog pola i maloletna je");
} else if ((pol == "m" || pol == "M") && god >= 18) {
    console.log("Osoba je muskog pola i punoletna je");
} else if ((pol == "m" || pol == "M") && god < 18 && god>0) {
    console.log("Osoba je muskog pola i maloletna je je");
 





// 21. zadatak__________________________________________________________________________________________

let a = 120;
    b = 114;
    c = 130;

if ((a > b && b > c) || (a > c && c > b)) {
    console.log("Broj a je najveci");
} else if ((b > c && c > a) || (b > a && a > c)) {
    console.log("Broj b je najveci");
} else {
    console.log("Broj c je najveci");
}

// 22. Zadatak___________________________________________________________________________________________

let temp= 51;

if (temp < -15 || temp > 40) {
    document.write("Ekstremna temperatura");
}

// 23. Zadatak__________________________________________________________________________________________

let d = new Date();
let godina = d.getFullYear();

if (((godina % 4 == 0) && (godina % 100 != 0)) || (godina % 400 == 0)) {
    console.log("Godina je prestupna");
} else {
    console.log("Godina nije prestupna");
}

// 24. Zadatak___________________________________________________________________________________________

const d1 = new Date();
let dan = d1.getDay();
const d2 = new Date();
let sat = d2.getHours();

if ((dan > 0 && dan < 6) && (sat > 8 && sat < 19)) {
    console.log("Butik je otvoren od 9 do 20h");
} else if ((dan==0 && dan==6) && (sat > 9 && sat < 17)) {
    console.log("Butik je otvoren d 10 do 18h");
} else {
    console.log("Butik je zatvoren");
}