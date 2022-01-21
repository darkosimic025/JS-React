let getTodos = resource => {

    let request = new XMLHttpRequest();
    
    request.open("GET", resource);

    request.send();

    let p = new Promise((resolve,reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                // console.log(request.responseText);
                // callback(request.responseText, undefined);
                resolve(request.responseText)
            } else if (request.readyState === 4) {
                // console.log("Ne mogu da dohvatim podatke")
                // callback(undefined, "Ne mogu da dohvatim podatke")
                reject("Ne mogu da dohvatim podatke")
            }
        });
    });
    return p;
}

getTodos('../JSON/todos.json').then(data => {
    console.log(data) 
    return getTodos('../JSON/fruits.json');
}).then(data => {
    console.log(data);
    return getTodos('../JSON/vegetables.json');
}).then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})

// getTodos('../JSON/todos.json', (data, error) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data)
//         getTodos('../JSON/fruits.json', (data, error) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log(data)
//                 getTodos('../JSON/vegetables.json', (data, error) => {
//                     if (error) {
//                         console.log(error)
//                     } else {
//                         console.log(data)
//                     }
//                 })
//             }
//         });
//     }
// });