
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

// var array = [{
//     key: 'one',
//     value: 1
//    }, {
//     key: 'two',
//     value: 2
//    }, {
//     key: 'three',
//     value: 3
//    }];

//    array.reduce(function(obj, current) {
//     obj[current.key] = current.value;
//     console.log(obj);
//    }, {});

// console.log
   
// let niz = [1, 2, 3];
// let noviNiz = niz.map(x => x ** 3)
// console.log(noviNiz);
// let noviNiz2 = noviNiz.filter(x => x > 1)
// console.log(noviNiz2);
// let noviNiz3 = noviNiz2.map(x => x + 1)
// console.log(noviNiz3);
// let noviNiz4 = noviNiz3.reduce((a, b) => a + b, 0);
// console.log(noviNiz4)

// let arr = [1, 2, 3];

// let data = {};
// data[arr] = arr;

// console.log(data[arr])
// console.log(data)

// let x = [1, 2, 3];
// let y = 2;
// let z = { value: 3 };

// let data = {};

// data[x] = x;
// data[y] = y;
// data[z] = z;

// console.log(data)

// let basicData = { id: "333-222" };
// let relatedId = "wow";
// let data = {};
// data[basicData] = basicData;
// data[relatedId] = relatedId;

// console.log(data)


// let then = async () => 3;
// then().then(x => console.log(x));

// let arr = [1, 2, 3];
// let arrSqrt = arr.forEach(x => Math.sqrt(x));
// console.log(arrSqrt)


// console.log(type)

// let a = 4.2224;
// let b = parseInt(4333);
// console.log(b)

// let e = true;

// if (`${e}` == true) {
//     console.log(true)
// } else {
//     console.log(false)
// }

let later = (func) => {
    return new Promise((resolve, reject) => {
        if (later) {
            resolve(func(4));
        } else {
            reject(new Error("later is not defined"));
        }
    })
}

later(x => Promise.resolve(12+x)).then(console.log).catch(console.log)