
// // request.addEventListener("readystatechange", () => {
// //     if (request.readyState == 1) {
// //         console.log('Uspostavljena konekcija');
// //     }
// //     if (request.readyState == 2) {
// //         console.log('Poslat je zahtev serveru');
// //     }
// //     if (request.readyState == 3) {
// //         console.log('Prihvata se odgovor - u statusu preuzimanja');
// //     }
// //     if (request.readyState == 4) {
// //         console.log('Odgovor je preuzet', request.responseText);
// //     }
    
// // })
// // request.addEventListener('readystatechange', () => {
// //     if (request.readyState === 4 && request.status === 200) {
// //         let data = JSON.parse(request.responseText);
// //         console.log(data);
// //     } else if (request.readyState === 4) {
// //         console.log("Could not fetch data")
// //     }
// // })
// // request.open("GET", "https://jsonplaceholder.typicode.com/posts");
// // request.send();


// let request1 = new XMLHttpRequest();
// let request2 = new XMLHttpRequest();
// let request3 = new XMLHttpRequest();
// let request4 = new XMLHttpRequest();
// let request5 = new XMLHttpRequest();

// //2.Zadatak

// request1.addEventListener('readystatechange', () => {
//     if (request1.readyState === 4 && request1.status === 200) {
//         let dataUsers = JSON.parse(request1.responseText);
//         dataUsers.forEach(user => {
//             if (user.website.includes('.com')) {
//                 console.log(`Korisinik ${user.name} ima website sa domenom .com`)
//             }
//         })
//     } else if (request1.readyState === 4) {
//         console.log("Could not fetch data")
//     }
// });

// //3.Zadatak

// request2.addEventListener('readystatechange', () => {
//     if (request2.readyState === 4 && request2.status === 200) {
//         let dataUsers = JSON.parse(request2.responseText);
//         dataUsers.forEach(user => {
//             if (user.name.includes('Clementin')) {
//                 console.log(`Korisnik ${user.name}.`)
//             }
//         })
//     } else if (request2.readyState === 4) {
//         console.log("Could not fetch data")
//     }
// });

// //4.Zadtak

// request3.addEventListener('readystatechange', () => {
//     if (request3.readyState === 4 && request3.status === 200) {
//         let dataUsers = JSON.parse(request3.responseText);
//         dataUsers.forEach(user => {
//             if (user.company.name.includes('Group') || user.company.name.includes('LLC')) {
//                 console.log(`Korisnik ${user.name} radi u kompaniji koja u svom nazivu ima Group ili LLC.`)
//             }
//         })
//     } else if (request3.readyState === 4) {
//         console.log("Could not fetch data")
//     }
// });

// //5.Zadatak

// // request4.addEventListener('readystatechange', () => {
// //     if (request4.readyState === 4 && request4.status === 200) {
// //         let dataUsers = JSON.parse(request4.responseText);
// //         // let dataUsersBezDuplikata = [dataUsers[0]];
// //         for (i = 1; i < dataUsers.length; i++) {
// //             let grad = dataUsers[i].address.city;
// //             for (j = 0; j < dataUsersBezDuplikata.length; j++) {
// //                 let gradBezDuplikata = dataUsersBezDuplikata[j].address.city;
// //                 if (!grad.includes(gradBezDuplikata)) {
// //                     dataUsersBezDuplikata.push(dataUsers[i]);
// //                 }
// //             }
// //         }
// //         console.log(dataUsersBezDuplikata)

// //     } else if (request4.readyState === 4) {
// //         console.log("Could not fetch data")
// //     }
// // });

// //6.Zadatak

// request5.addEventListener('readystatechange', () => {
//     if (request5.readyState === 4 && request5.status === 200) {
//         let dataUsers = JSON.parse(request5.responseText);
//         dataUsers.forEach(user => {
//             if (user.address.geo.lat < 0 && user.address.geo.lng < 0) {
//                 console.log(`Korisnik ${user.name} zivi na adresi koja ima negativnu geografsku sirinu i duzinu.`);
//             }
//         })
//     } else if (request5.readyState === 4) {
//         console.log("Could not fetch data")
//     }
// });

// request1.open("GET", "https://jsonplaceholder.typicode.com/users");
// request1.send();
// request2.open("GET", "https://jsonplaceholder.typicode.com/users");
// request2.send();
// request3.open("GET", "https://jsonplaceholder.typicode.com/users");
// request3.send();
// request4.open("GET", "https://jsonplaceholder.typicode.com/users");
// request4.send();
// request5.open("GET", "https://jsonplaceholder.typicode.com/users");
// request5.send();



// let getUsers = () => {
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function () {
//         if (this.readyState === 4 && this.status === 200) {

//         } else if (this.readyState === 4) {

//         }
//     });
//     request.open("GET", "https://jsonplaceholder.typicode.com/users");
//     request.send();
// }

// let sportisti = callback => {
//         let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function () {
//         if (this.readyState === 4 && this.status === 200) {
//             let data = JSON.parse(request.responseText);
//             callback(data);
//         } else if (this.readyState === 4) {
//             console.log('Greska')
//         }
//     });
//     request.open("GET", "sportisti.json");
//     request.send();
// }

// let prosecnaVisina = sportisti => {
//     let brojSportista = sportisti.length;
//     console.log(sportisti)
//     let ukupnaVisina = 0;
//     sportisti.forEach(sportista => {
//         ukupnaVisina += parseFloat(sportista.visina);
//     });
//     console.log(ukupnaVisina / brojSportista);
// }

// sportisti(prosecnaVisina);

// let najmanjeTransfera = sportisti => {
//     let minTransfera = sportisti[0];
//     sportisti.forEach(sportista => {
//         if (minTransfera.timovi.length >= sportista.timovi.length) {
//             minTransfera = sportista;
//         }
//     });
//     console.log(minTransfera.imePrezime)
// }

// sportisti(najmanjeTransfera);
