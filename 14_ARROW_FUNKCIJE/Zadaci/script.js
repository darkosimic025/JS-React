// 3.Zadatak// ________________________________________________________________

let neparan = n =>
    
    n % 2 != 0 ? `Broj je neparan` : `Broj je paran`;

console.log(neparan(22));

// 4.Zadatak// ________________________________________________________________

let maks2 = (a, b) => 
    // if (a > b) {
    //     return a;
    // } else {
    //     return b;
    // } 
     (a < b) ? b : a;

let max2 = maks2(3, 2);
console.log(max2);
// __________________________________________

let maks4 = (a, b, c, d) =>  maks2(maks2(c, d),maks2(a, b));

let max4 = maks4(1, 2, 3, 4);
console.log(max4);



// 5.Zadatak// ________________________________________________________________

// let slika = adresa =>
//     document.body.innerHTML += `<img src="${adresa}" width=300px>`;
// slika(`https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg`);

let slika = adresa =>  `<img src="${adresa}" width=300px>`;

document.body.innerHTML += slika(`https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg`);



// 6.Zadatak// ________________________________________________________________

let paragraf = boja =>
    document.body.innerHTML += `<p style="color: ${boja};"> Tekst paragrafa </p>`;
paragraf(`red`);

// 7.Zadatak// ________________________________________________________________

let sedmiDan = (n) => {
    if (n == 0 || n == 7) {
         dan = `Nedelja`;
    } else if (n == 1) {
         dan = `Ponedeljak`;
    } else if (n == 2) {
         dan = `Utorak`;
    } else if (n == 3) {
         dan = `Sreda`;
    } else if (n == 4) {
         dan = `Cetvrtak`;
    } else if (n == 5) {
         dan = `Petak`;
    } else if (n == 6) {
         dan = `Subota`;
    } else {
         dan = `Pogresan unos`;
    } return dan;
} 
console.log(sedmiDan(2));


// 8.Zadatak// ________________________________________________________________

let deljivSaTri = (n, m) =>
    brBrojeva = 0;
    {
    for (i = n; n <= m; n++) {
        if (i % 3 == 0) {
            brBrojeva++;
        }
    }
    return brBrojeva;
}


// 9.Zadatak// ________________________________________________________________


let sumiraj = (n, m) => {
    let zbir = 0;
    for (i = n; n <= m; n++)  {
        zbir = zbir + n;
    } return zbir;
}

console.log(sumiraj(1, 100));

// 10.Zadatak// ________________________________________________________________

