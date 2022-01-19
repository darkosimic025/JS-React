import { Pacijent } from "./pacijent.js";

let pacijent1 = new Pacijent("Darko", 1.81, 70);
let pacijent2 = new Pacijent("Ivan", 2.10, 154);
let pacijent3 = new Pacijent("Srdjan", 1.96, 87);

let pacijenti = [pacijent1, pacijent2, pacijent3];


//Najveci BMI zadatak

let dugmeBmi = document.getElementById("maxBmi");
let rezBmi = document.getElementById("maxBmiRez");

dugmeBmi.addEventListener("click", () => {
    let maxBmi = pacijenti[0];
    for (let i = 1; i < pacijenti.length; i++) {
        if (maxBmi.Bmi() > pacijenti[i].Bmi()) {
            maxBmi = pacijenti[i];
        }
    }
    rezBmi.innerHTML = maxBmi.StampajListu();
})





















//Najmanja tezina zadatak

let najmanjaTezina = niz => {
    let minTezina = Number.MAX_SAFE_INTEGER;
    let visinaPacijenta = 0;
    let imePacijenta = "";
    niz.forEach(pacijent => {
        let tezinaPacijenta = pacijent.tezina;
        if (tezinaPacijenta < minTezina) {
            minTezina = tezinaPacijenta;
            visinaPacijenta = pacijent.visina;
            imePacijenta = pacijent.ime;
        }
    });
    return `Pacijent ${imePacijenta} koji je visok ${visinaPacijenta}m ima najmanju tezinu od ${minTezina}kg. `;
}

let dugme = document.getElementById("minTez");
let rezultat = document.getElementById("minTezRez");

dugme.addEventListener("click", () => {
    let tekst = najmanjaTezina(pacijenti);
    rezultat.append(tekst);
})

//Najveci BMI zadatak

let najveciBmi = niz => {
    let maxBmi = Number.MIN_SAFE_INTEGER;
    let visinaPacijenta = 0;
    let imePacijenta = "";
    let tezinaPacijenta = 0;
    niz.forEach(pacijent => {
        if (pacijent.Bmi() > maxBmi) {
            maxBmi = pacijent.Bmi();
            visinaPacijenta = pacijent.visina;
            tezinaPacijenta = pacijent.tezina;
            imePacijenta = pacijent.ime;
        }
    });
    console.log(`Pacijent ${imePacijenta} sa tezinom od ${tezinaPacijenta}kg i visinom od ${visinaPacijenta}m ima najveci BMI od ${maxBmi}.`)
}

najveciBmi(pacijenti);

//Slovo a u imenu zadatak

let pacijentA = niz => {
    niz.forEach(pacijent => {
        if (pacijent.ime.includes("a")) {
            console.log(`${pacijent.ime} sadrzi u svom imenu slovo 'a'.`)
        }
    });
}

pacijentA(pacijenti);

//Srednja visina zadatak

let srednjaVisina = niz => {
    let zbirVisina = 0;
    let brojPacijenata = niz.length;
    niz.forEach(pacijent => {
        let visinaPacijenta = pacijent.visina;
        zbirVisina += visinaPacijenta;
    })
    return zbirVisina / brojPacijenata;
}

console.log(`Prosecna visina svih pacijenata je ${srednjaVisina(pacijenti)}m.`);



