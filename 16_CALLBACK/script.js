let brojevi = [1,2,3,4,5,6]

// function ispisKonzola(niz) {
//     let rez = "";
//     for (let i = 0; i < niz.length; i++) {
//         rez += niz[i] + " ";
//     }
//     console.log(rez);
// }


// function ispisHTML(niz) {
//     let rez = "";
//     for (let i = 0; i < niz.length; i++) {
//         rez += niz[i] + " ";
//     }
//     document.body.innerHTML += `<div>${rez}</div>`;
// }

// ispisKonzola(brojevi);
// ispisHTML(brojevi);

// Klasican callback

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, callback) {
    let rez = "";
         for (let i = 0; i < niz.length; i++) {
             rez += niz[i] + " ";
    }
    callback(rez);
}

ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);

// Anonimne funkcije - callback

ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});

// Arrow funkcije - callback

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

//Zadatak min/max


brojevi = [0,1,1,1,4,6,6,6,6]

function max(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    } return max;
}

function min(niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] <min) {
            min = niz[i];
        }
    }
    return min;
}


function brojac(niz, callback) {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == callback(niz)) {
            br++;
        }
    }
    return br;
}

console.log(brojac(brojevi, max));
console.log(brojac(brojevi, min));

