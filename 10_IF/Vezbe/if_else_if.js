// // // // let ocena = 4;
// // // // if (ocena == 5) {
// // // //     console.log("Odlican ");
// // // // }
// // // // else if (ocena == 4) {
// // // //     console.log("Vrlo dobar");
// // // // }
// // // // else if (ocena == 3) {
// // // //     console.log("Dobar");
// // // // }
// // // // else if (ocena == 2) {
// // // //     console.log("Dovoljan");
// // // // }
// // // // else if (ocena == 1) {
// // // //     console.log("Nedovoljan");
// // // // }

// // // Sedmi zadatak

// // // let poeni = 67;
// // // if (poeni >= 90) {
// // //     console.log("10")
// // // }
// // // else if (poeni >= 80) {
// // //     console.log("9")
// // // }
// // // else if (poeni >= 70) {
// // //     console.log("8")
// // // }
// // // else if (poeni >= 60) {
// // //     console.log("7");
// // // }
// // // else if (poeni >= 50) {
// // //     console.log("6");
// // // }
// // // else if (poeni >= 0) {
// // //     console.log("Pali ste ispit");
// // // }
// // // else {
// // //     console.log("Nepravilan unos")
// // // }

// // // // Osmi zadatak 

// // // const d1 = new Date();
// // // let day = d1.getDay();

// // // if (day > 5) {
// // //     console.log("Vikend");
// // // } else {
// // //     console.log("Radni dan");
// // // }

// // // // Deveti zadatak

// // // const d2 = new Date();
// // // let hour = d2.getHours();
// // // if (hour < 12) {
// // //     console.log("Dobro jutro");
// // // } else if (hour<18) {
// // //     console.log("Dobar dan");
// // // } else {
// // //     console.log("Dobro vece");
// // // }

// // // Deseti zadatak I resenje
// // // let d1 = 15;
// // //     m1 = 2;
// // //     g1 = 2003;
// // // let d2 = 30;
// // //     m2 = 5;
// // //     g2 = 2003;
// // // if (g1 * 365 + m1 * 30.42 + d1 > g2 * 365 + m2 * 30.42 + d2) {
// // //      console.log("Drugi datum je raniji")
// // // }
// // // else {
// // //     console.log("Prvi datum je raniji")
// // //  }

// // // Deseti zadatak II resenje

// // let d1 = 30;
// //      m1 = 5;
// //      g1 = 2003;
// //  let d2 = 30;
// //      m2 = 5;
// //      g2 = 2003;
 
// // if (g1 < g2) {
// //     console.log("Prvi datum je raniji")
// // } else if (g2 > g1) {
// //     console.log("Drugi datum je raniji")
// // } else if (m1 < m2) {
// //     console.log("Prvi datum je raniji")
// // } else if (m1 > m2) {
// //     console.log("Drugi datum je raniji")
// // } else if (d1 > d2) {
// //     console.log("Prvi datum je raniji")
// // } else if (d1 < d2) {
// //     console.log("Drugi datum je raniji")
// // }
// // else {
// //         console.log("Datumi su isti")
// //     }


// // // Jedanaesti zadatak

// // const d3 = new Date();
// // let sati = d3.getHours();
// // if (sati >= 9) {
// //     if (sati <= 17) {
// //         console.log("Firma radi");
// //     }
// // } else {
// //     console.log("Firma ne radi");
// // }

// //Dvanaesti zadatak
// let pocetak1 = 8;
//     kraj1 = 16;
// let pocetak2 = 17;
//     kraj2 = 22;

// if (pocetak2 > kraj1) {
//     console.log("Ne preklapaju se");
// }
// else if (kraj2 < pocetak1) {
//     console.log("Ne preklapaju se");
// }
// else {
//     console.log("Preklapaju se");
// }

// // Sedamnaesti zadatak

// let a = 15;
//     b = 16;
//     c = 17;
    

// let n = 2.5;
// char = "." ;
// if (n.includes(char)) {
//     console.log("Broj nije ceo");
//     }


// let a = 2;
//     b = 5;
//     c = 5;
//     d = 10;
    
// let modus2 = 0;

// if (a % 2 == 0) {
//     modus2++;
// }
// if (b % 2 == 0) {
//     modus2++
// }
// if (c % 2 == 0) {
//     modus2++
// }
// if (d % 2 == 0) {
//     modus2++
// }

// console.log(`Brojeva deljivih sa 2 ima: ${modus2}`)

// let modus5 = 0;

// if (a % 5 == 0) {
//     modus5++;
// }
// if (b % 5 == 0) {
//     modus5++
// }
// if (c % 5 == 0) {
//     modus5++
// }
// if (d % 5 == 0) {
//     modus5++
// }

// console.log(`Brojeva deljivih sa 5 ima: ${modus5}`)

// let modus2_5 = 0;

// if (a % 2 == 0 && a%5==0) {
//     modus2_5++;
// }
// if (b % 2 == 0 && b%5==0 ) {
//     modus2_5++
// }
// if (c % 2 == 0 && c%5==0) {
//     modus2_5++
// }
// if (d % 2 == 0 && d%5==0) {
//     modus2_5++
// }

// console.log(`Brojeva deljivih sa 2 i 5 ima: ${modus2_5}`)

// let a = 5;
//     b = 3;
//     c = 2;
// if (a == b + c) {
//     console.log("Broj a je jedna sumi druga dva broja");
// }
// if (b == a + c) {
//     console.log("Broj b je jedna sumi druga dva broja");
// }
// if (c == a + c) {
//     console.log("Broj c je jedna sumi druga dva broja");
// }

// let a = 40;
//     b = 50;
//     c = 30;

// if (a > b && c > b) {
//     console.log(a + c);
// } else if (b > a && c > a) {
//     console.log(b + c);
// } else if (b > c && a > c) {
//     console.log(b+a)
// }
