let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        resolve("Sve je okej proslo");
        reject("Nista nije okej");
    });

    return obj;
}

getSomething().then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})