let cars = ["Toyota", "BMW", "Volvo"];
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 1.Ispisati sve elemente niza od 5 stringova.

let drzave = ["Srbija", "Italija", "Nemacka", "Francuska", "Spanija"];
for (let i = 0; i < drzave.length; i++) {
    console.log(drzave[i]);
}

// 2.Odrediti zbir elemenata celobrojnog niza.

let brojevi = [1, 2, 2, 5];
suma = 0;
for (i = 0; i < brojevi.length; i++) {
    suma = suma + brojevi[i];
} 
console.log(suma)

// 3.Odrediti proizvod elemenata celobrojnog niza.

brojevi = [1, 2, 2, 5];
proizvod = 1;
for (i = 0; i < brojevi.length; i++) {
    proizvod = proizvod * brojevi[i];
} 
console.log(proizvod)

// 4.Odrediti srednju vrednost elemenata celobrojnog niza.

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arSr = (brojevi) => {
    suma = 0;
    brBr = 0;
    for (i = 0; i < brojevi.length; i++) {
        suma = suma + brojevi[i];
        brBr++;
    }
    let arSr2 = suma / brBr;
    return arSr2;
}
console.log(arSr(brojevi));

// Kraca verzija



// 5.Odrediti maksimalnu vrednost u celobrojnom nizu.____________________________________________________________________________________________________

brojevi = [4, 2, 3, 22, 5, 6, 12, 22];

let max = brojevi[0];
for (let i = 1; i < brojevi.length; i++) {
    if (brojevi[i] > max) {
      max = brojevi[i];
    }
}
console.log(max);

// Kao funkcija

let maxVr = (brojevi) => {
    let max = brojevi[0];
    for (let i = 1; i < brojevi.length; i++) {
        if (brojevi[i] > max) {
          max = brojevi[i];
        }
    } return max;
}
console.log(maxVr(brojevi));

// Profesor

let maxVrednost = brojevi => {
    let max = brojevi[0];

}

// 6.Odrediti minimalnu vrednost u celobrojnom nizu.____________________________________________________________________________________________________

brojevi = [4, 2, 3, 22, 5, 6, 12, 8];

let min = brojevi[0];
for (let i = 1; i < brojevi.length; i++) {
    if (brojevi[i] < min) {
      min = brojevi[i];
    }
} console.log(min);

// 7.Odrediti indeks maksimalnog elementa celobrojnog niza.

brojevi = [0, 33, 3, 27, 29, 33, 33, 8];

max = brojevi[0];
for (let i = 1; i < brojevi.length; i++) {
    if (brojevi[i] > max) {
        max = brojevi[i];
    }
}
indeksi = [];
let brMax = 0;
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] == max) {
        indeksi.push(i);
        brMax++;
    }
} 
console.log(`Indeks/i maksimalnog elementa je : [${indeksi}]`);
console.log(`Broj elemenata koje dele maksimalnu vrednost je ${brMax}`)

// 8.Odrediti indeks minimalnog elementa celobrojnog niza.

brojevi = [-1, 2, 3, -22, 27, 27, 12, 8];
min = brojevi[0];
indeks = 0;
for (let i = 1; i < brojevi.length; i++) {
    if (brojevi[i] < min) {
        min = brojevi[i];
        indeks = i;
    }
}
console.log(`Indeks minimalnog elementa je [${indeks}]`);

// 9.Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

// let srVr = brojevi => {
//     suma = 0;
//     brBr = 0;
//     for (i = 0; i < brojevi.length; i++) {
//         suma = suma + brojevi[i];
//         brBr++;
//     }
//     arSr = suma / brBr;
//     let brBr2 = 0;
//     for (i = 0; i < brojevi.length; i++) {
//         if (brojevi[i] > arSr) {
//             brBr2++;
//         } 
//     } return brBr2;
// } 
// console.log(srVr(brojevi));

// Kraca verzija
let srVr = (brojevi) => {
    let aritmetickaSredina = arSr(brojevi);
    brBr2 = 0;
    for (i = 0; i < brojevi.length; i++) {
        if (brojevi[i] > aritmetickaSredina) {
            brBr2++;
        }
    } return brBr2;
} 
console.log(srVr(brojevi))

// 10.Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPoz = (brojevi) => {
    let zbir = 0;
    for (i = 0; i < brojevi.length; i++) {
        if (brojevi[i] >= 0) {
            zbir = zbir + brojevi[i];
        } 
    } return zbir;
}
console.log(zbirPoz(brojevi));

// 11.Odrediti broj parnih elemenata u celobrojnom nizu.

let brParnih = (brojevi) => {
    brBr = 0;
    for (i = 0; i < brojevi.length; i++) {
        if (brojevi[i] >= 0) {
            brBr++;
        }
    } return brBr;
}
console.log(brParnih(brojevi));

// 12.Odrediti broj parnih elemenata sa neparnim indeksom.

let neparniIndex = (brojevi) => {
    let brBr = 0;
    for (i = 0; i < brojevi.length; i++) {
        if (brojevi[i] >= 0) {
            if (i % 2 != 0) {
                brBr++;
            }
        }
    } return brBr;
}
console.log(neparniIndex(brojevi));

// 13.Izračunati sumu elemenata niza sa parnim indeksom.

let parniIndex = (brojevi) => {
    let suma = 0;
    for (i = 0; i < brojevi.length; i++) {
        if (i % 2 == 0) {
            suma = suma + brojevi[i];
        }
    } return suma;
}
console.log(parniIndex(brojevi));

// 14.Promeniti znak svakom elementu celobrojnog niza.

let menjanjeZnaka = brojevi => {
    for (i = 0; i < brojevi.length; i++) {
        brojevi[i]= brojevi[i] * (-1);  
    } return brojevi;
}
console.log(menjanjeZnaka(brojevi));

// 15.Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let stavke = ["Ulje", "Secer", "Brasno", "Jaja"];
let kupovina = stavke => {
    let lista = `<ul>`;
    for (let i = 0; i < stavke.length; i++) {
        lista += `<li>${stavke[i]}</li>`;
    }
    lista += `</ul>`;
    document.body.innerHTML += lista;
}
kupovina(stavke);

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let imena = ["Divac", "Bogdanovic", "Jokic"];
let kosarka = imena => {
    let tabela = `<table style="border:solid 1px; border-spacing: 0px;">`;
    for (let i = 0; i < imena.length; i++) {
        tabela += `<tr><td style="border:solid 1px;">${imena[i]}</td></tr>`;
    }
    tabela += `</table>`;
    document.body.innerHTML += tabela;
}
kosarka(imena);

// 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.


let linkovi = ["https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", "https://iso.500px.com/wp-content/uploads/2017/11/500px_blog_seeking_light_nature2.jpg", "https://iso.500px.com/wp-content/uploads/2015/05/shortcuts_cover.jpeg"];
let slike = linkovi => {
    for (let i = 0; i < linkovi.length; i++) {
        document.body.innerHTML += `<img src=${linkovi[i]} width= 300px>`;
    }
}
slike(linkovi);

// 19. Ispisati dužinu svakog elementa u nizu stringova.

let niz = ["Auto", "Saksija", "Telefon", "Onomatopeja", "Avion", "Ananas"];
let duzina= niz => {
    for (let i = 0; i < niz.length; i++) {
        length = niz[i].length;
        console.log(`Duzina stringa ${niz[i]} je ${length}`);
    }
}
duzina(niz);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.


let najveca = niz => {
    
    let max = niz[0].length;
    let string= niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].length > max) {
            max = niz[i].length;
            string = niz[i];
        }
    } return max;
}
console.log(najveca(niz));

// Ovu funkciju sam napravio zbog 21. zadatka i lakseg odredjivanja proseka.

let najmanji = niz => {
    let min = niz[0].length;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].length < min) {
            min = niz[i].length;
        }
    } return min;
}
console.log(najmanji(niz));


// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let veceProsek = niz => {
    let najveciString = najveca(niz);
    najmanjiString = najmanji(niz);
    prosekString = Math.ceil((najveciString + najmanjiString) / 2);
    brStringova = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > prosekString) {
            brStringova++;
        }
    } return brStringova;
}
console.log(veceProsek(niz));

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let slovoA = niz => {
    for (let i = 0; i < niz.length; i++) {
        let br = 0;
        for (let n = 0; n < niz[i].length; n++) {
            if (niz[i][n] === "a") {
                br++;
            }
        } console.log(`String ${niz[i]} sadrzi ${br} slova a.`);
    }
}
slovoA(niz);

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.


let slovo_aA = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
            if (niz[i][0] === "a" || niz[i][0] === "A") {
                br++;
            }
        } console.log(br);
    }
slovo_aA(niz);

// 24. Zadatak

let a = [1, 3, 5, 7, 9];
b = [2, 4, 6, 8, 10];
let spajanje = (a, b) => {
    if (a.length == b.length) {
        let c = [];
        for (let i = 0; i < a.length; i++) {
            c.push(a[i], b[i]);
        }
        return c;
    }
}

console.log(spajanje(a, b));

// 25.Zadatak

let mnozenje = (a, b) => {
    if (a.length == b.length) {
        let c = [];
        for (let i = 0; i < a.length; i++) {
            c.push(a[i]* b[i]);
        }
        return c;
    }
}

console.log(mnozenje(a, b));

// 26.Zadatak

let formula = a => {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        b.push((a[i] + a[a.length-i])/2);
    }
    return b;
} 
console.log(formula(a));




