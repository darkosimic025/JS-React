//Primeri Callback funkcija

let myFunc = callback => {
    callback()
}

myFunc(() => {
    console.log("Callback okinuta")
});

let sum = callback => {
    callback(5,7);
}

sum((x,y) => {
    console.log(x + y);
});

function printSum(a,b) {
    console.log(a + b);
}

sum(printSum);