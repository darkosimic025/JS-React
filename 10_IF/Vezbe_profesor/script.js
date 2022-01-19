// Petnaesti zadatak

let a = 9;
    b = 18;
if (a > b) {
    console.log("Kada se od veceg a odzume manje b, rezultat je " + (a - b) + ".");
}
else {
    console.log("Kada se od veceg b odzume manje a, rezultat je " + (b - a) + ".");
    }

// Devetnaesti zadatak

// let a = 20;
//     b = 21;
//     c = 19;
// if (a > b) {
//     if (b > c) {
//         console.log("Broj a je najveci");
//         console.log("Broj b je srednji");
//         console.log("Broj c je najmanji");
//     } else {
//         if (c > a) {
//             console.log("Broj c je najveci");
//             console.log("Broj a je srednji");
//             console.log("Broj b je najmanji");
//         } else {
//                 console.log("Broj a je najveci");
//                 console.log("Broj c je srednji");
//                 console.log("Broj b je najmanji");
//         }
//     }
// } else {
//     if (c > a) {
//         if (c > b) {
//             console.log("Broj c je najveci");
//             console.log("Broj b je srednji");
//             console.log("Broj a je najmanji");
//         } else {
//             console.log("Broj b je najveci");
//             console.log("Broj c je srednji");
//             console.log("Broj a je najmanji");
//         }
//     } else {
//         console.log("Broj b je najveci");
//         console.log("Broj a je srednji");
//         console.log("Broj c je najmanji");
//     }
// }

// // Dvadeseti zadatak

// let a = 9;
//     b = 11;

// if (a > b) {
//     if (a % 2 == 0) {
//         console.log("Veci broj a je paran");
//     } else {
//         console.log("Veci broj a nije paran")
//     }
// } else {
//     if (b % 2 == 0) {
//         console.log("Veci broj b je paran")
//     } else {
//         console.log("Veci broj b nije paran")
//     }
// }

// 21. zadatak

// let a = 12;
//     b = 8;
//     c = 5;

// if (a > b && b > c) {
//     console.log ("Broj a je najveci")
// } else if (b > c && c > a) {
//     console.log("Broj b je najveci")
// } else {
//     console.log ("Broj c je najveci")
// }

// 22. Zadatak

// let temp= 51;

// if (temp < -15 || temp > 40) {
//     document.write("Ekstremna temperatura")
// }

// 23. Zadatak

// let d = new Date();
// let godina = d.getFullYear();

// if (godina % 4 == 0 && godina % 100 != 0) {
//     console.log("Godina je prestupna")
// } else {
//     console.log("Godina nije prestupna")
// }

// 24. Zadatak 

// const d1 = new Date();
// let dan = d1.getDay();
// const d2 = new Date();
// let sat = d2.getHours();

// if ((dan > 0 && dan < 6) && (sat > 8 && sat < 19)) {
//     console.log("Butik je otvoren od 9 do 20h");
// } else if ((dan <1 && dan>5) && (sat > 9 && sat < 17)) {
//     console.log("Butik je otvoren d 10 do 18h");
// } else {
//     console.log("Butik je zatvoren");
// }