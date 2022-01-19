let pKlikni = document.getElementById("klikni");
pKlikni.addEventListener('click', () => {
    console.log("Jednom kliknuto na paragraf")
});

let pKlikniDva = document.getElementById("dvaKlika");
pKlikniDva.addEventListener("dblclick", () => {
    console.log("Dva puta kliknutu na paragraf")
});

let rez = 0;
let spanRez = document.getElementById("rez");
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
btnPlus.addEventListener('click', () => {
    rez++;
    spanRez.innerHTML = rez;
    if (rez < 0) {
        spanRez.style.backgroundColor = "blue";
    } else {
        spanRez.style.backgroundColor = "yellow";
    }
});
btnMinus.addEventListener('click', () => {
    rez--;
    spanRez.innerHTML = rez;
    if (rez < 0) {
        spanRez.style.backgroundColor = "blue";
    } else {
        spanRez.style.backgroundColor = "yellow";
    }
});

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
})