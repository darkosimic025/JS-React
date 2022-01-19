// // 1.Zadatak 

// let i = 1;
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }

// // 2.Zadatak

// i = 20;
// for (i = 20; i >= 1; i--) {
//     console.log(i);
// }

// // 3.Zadatak

// i = 1;
// for (i = 1; i <= 20; i++) {
//     if (i % 2==0) {
//         console.log(i);
//     }
// }

// // 5.Zadatak

// i = 1;
// let n = 100;
// suma = 0;
// for (i = 1; i <= n; i++) {
//     suma = suma + i;
// }
// console.log(`Suma brojeva od 1 do ${n} je : ${suma}`);

// // 7.Zadatak

// i = 1;
// n = i;
// let m = 5;
// proizvod = 1;
// for (i = 1; i <= m; i++) {
//     proizvod = i * proizvod;
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je : ${proizvod}`);

// // 8.Zadatak  

// // document.body.innerHTML += `<img src="1.png" width=200>`;
// // document.body.innerHTML += `<img src="2.png" width=200>`;
// // document.body.innerHTML += `<img src="3.png" width=200>`;

// // Moj nacin:

// // i = 1;
// // n = 3;
// // for (i = 1; i <= 3; i++) {
// //     if (i % 3 == 1) {
// //         document.body.innerHTML += `<img src="1.png" width=200>`;
// //     } else if (i % 3 == 2) {
// //         document.body.innerHTML += `<img src="2.png" width=200>`;
// //     } else {
// //         document.body.innerHTML += `<img src="3.png" width=200>`;
// //     }
// //  }

// // Profesor:

// for (i = 1; i <= 3; i++) {
//     document.body.innerHTML += `<img src="${i}.png" width=200>`;
// }

// //  11.Zadatak_________________________________________________________________________ 

// i = 5;
// n = i;
// m = 150;
// modus13 = 0;
// for (i ; i <= m; i++) {
//     if (i % 13 == 0) {
//         modus13++;
//     }
// } console.log(`Brojeva deljivih sa 13 od ${n} do ${m} ima : ${modus13}`);

// // 12.Zadatak__________________________________________________________________________

// i = 10;
// n = i;
// m = 20;
// suma = 0;
// for (i ; i <= m; i++) {
//     suma = suma + i;
// } aritemtickaSredina = suma / (m-n+1);
// console.log(`Aritmeticka  sredina brojeva od ${n} do ${m} je ${aritemtickaSredina}`);

// // 15. Zadatak__________________________________________________________________________

// i = 1;
// n = i;
// m = 144;
// suma = 0;
// kolicina = 0;
// for (i; i <= m; i++) {
//     if (i % 10 == 4) {
//         suma = suma + i;
//         kolicina++;
//     }
// }
// console.log(`Suma brojeva sa zadnjom cifrom 4 od ${n} do ${m} je : ${suma}. Tih brojeva ima ukupno ${kolicina}.`);

// // 16. Zadatak____________________________________________________________________________

// i = 1;
// n = i;
// m = 20;
// a = 3;
// suma = 0;

// for (i; i <= m; i++) {
//     if (i % a != 0) {
//         suma = suma + i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi sa ${a} je : ${suma}`);

// // 4.Zadatak_________________________________________________________________________

// i = 5;
// n = 15;
// dvostruka = 0;
// for (i=5 ; i <= n; i++) {
//     dvostruka = 2 * i;
//     console.log(`Dvostruka vrednost broja ${i} je ${dvostruka}. `);
// }

// // 6.Zadatak__________________________________________________________________________
// i = 1;
// n = i;
// m = 5;
// suma = 0;
// for (i; i <= m; i++) {
//     suma = suma + i;
// }
// console.log(`Suma svih brojeva od ${n} do ${m} je ${suma}.`)

// // 8.Zadatak_________________________________________________________________________

// i = 1;
// n = i;
// m = 3;
// kvadrat = 0
// suma = 0;
// for (i; i <= m; i++) {
//     kvadrat = i * i;
//     suma = suma + kvadrat;

// } console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}.`);

// // 10.Zadatak_______________________________________________________________________

// i = 20;
// n = i;
// m = 100;
// proizvod = 1;
// for (i; i <= m; i++) {
//     if (i % 11 == 0) {
//         proizvod = proizvod * i;
//     }
// }
// console.log(`Proizvod svih brojeva od ${n} do ${m} je ${proizvod}.`);

// // 13.Zadatak______________________________________________________________________

// i = -20;
// n = i;
// m = 100;
// negativni = 0;
// pozitivni = 0;
// for (i; i <= m; i++) {
//     if (i < 0) {
//         negativni++;
//     } else {
//         pozitivni++;
//     }
// } console.log(`Negativnih brojeva ima ${negativni}, a pozitivnih ${pozitivni}.`);

// // 14.Zadatak_________________________________________________________________________

// i = 5;
// n = i;
// m = 50;
// kolicina = 0;
// for (i; i <= m; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         kolicina++;
//     }
// } console.log(`Brojeva deljivih sa 3 ili 5 od ${n} do ${m} ima ${kolicina}.`);

// -FOR-

// 18.Zadatak___________________________________________________________________________

let k = 16;
i = k;
m = 1;
let kolicina= 0;
for (i; i >= m; i--) {
    if (k % i == 0) {
        kolicina++;
    }
} console.log(`Broj ${k} je deljiv sa ${kolicina} brojeva`);

// 19.Zadatak

let n = 178;
delioc = 2;
d = delioc;
for (d; d <= n-1; d++) {
    if (n % d == 0) {
        delioc++;
    }
}

if (delioc == 2) {
    console.log("Broj je prost");
}

// -WHILE-

// 18.Zadatak

i = 1;
k = 6;
delioci = 0;
while (i <= k) {
    if (k % i == 0) {
        delioci++;
        
    } i++;
}
console.log(`Broj ${k} je deljiv sa ${delioci} broja.`);

// 20.Zadatak________________________________________________________________________





