// let p1 = document.getElementById("1");
// console.log(p1);

// let cont = document.getElementsByClassName("container");
// console.log(cont);
// console.log(typeof cont);

// for (let i = 0; i < cont.length; i++) {
//     console.log(cont[i]);
// }

// let contNiz = Array.from(cont);

// contNiz.forEach(elem => {
//     console.log(elem);
// });

// let paragrafi = document.getElementsByTagName("p");
// for (i = 0; i < paragrafi.length; i++) {
//     console.log(paragrafi[i]);
// }

// let linkovi = document.getElementsByName("link");
// for (let i = 0; i < linkovi.length; i++) {
//     console.log(linkovi[i]);
// }

// p1 = document.querySelector("#p1");
// console.log(p1);

// let paragrafi = document.querySelectorAll("p");
// console.log(paragrafi);

// let linkovi = document.querySelectorAll("[name='link']")

// 1.Dohvatiti prvi paragraf na stranici.

let paragraf = document.querySelector("p");
console.log(paragraf);

// 2.Dohvatiti prvi div tag sa klasom „error“.

let error = document.querySelector(".error");
console.log(error);

// 3.Dohvatiti poslednji red u tabeli.

let poslednjiRed = document.querySelector('table tr:last-child')
console.log(poslednjiRed)


// 4.Dohvatiti sve linkove na stranici.

let linkovi = document.getElementsByTagName("a");
console.log(linkovi);

// 5.Dohvatiti sve slike na stranici.

let slike = document.getElementsByTagName("img");
console.log(slike);

