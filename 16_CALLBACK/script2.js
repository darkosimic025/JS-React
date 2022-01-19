let a = [1, 2, 3, 4, 5, 6];
/*
function ispis(elem) {
    console.log(`Element niza je: ${elem}`);
}

a.forEach(ispis);
*/

a.forEach(elem => {
    console.log(`Element: ${elem}`);
});

//Odrediti zbir celobrojnog niza

let zbir = niz => {
    let s = 0;
    niz.forEach((el, i) => {
        if (i % 2 == 0) {
            s += el;
        }
    });
    return s;
}


console.log(zbir(a));

// 3.Odrediti proizvod elemenata celobrojnog niza.

let proizvod = niz => {
    let p = 1;
    niz.forEach(el => {
        p = p * el;
    });
    return p;
}

console.log(proizvod(a));

// 4.Odrediti srednju vrednost elemenata celobrojnog niza.

let srednja = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(el => {
        suma = suma + el;
        br++;
    });
    return suma / br;
}

console.log(srednja(a));

// 5.Odrediti maksimalnu vrednost u celobrojnom nizu.

let max = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if (el > max) {
            max = el;
        }
    });
    return max;
} 

console.log(max(a));

// 6.Odrediti minimalnu vrednost u celobrojnom nizu

let min = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if (el < min) {
            min = el;
        }
    });
    return min;
} 

console.log(min(a));

// 7.Odrediti indeks maksimalnog elementa celobrojnog niza.

let maxIndex = (niz, callback) => {
    indeks = 0;
    niz.forEach((el, i) => {
        if (el == callback(niz)) {
            indeks = i;
        }
    });
    return indeks;
}

console.log(maxIndex(a, max));

// 8.Odrediti indeks minimalnog elementa celobrojnog niza.

let minIndex = (niz, callback) => {
    indeks = 0;
    niz.forEach((el, i) => {
        if (el == callback(niz)) {
            indeks = i;
        }
    });
    return indeks;
}

console.log(minIndex(a, min));