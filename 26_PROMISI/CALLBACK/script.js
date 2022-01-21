let getTodos = ( resource, callback ) => {

        let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        } else if (request.readyState === 4) {
            // console.log("Ne mogu da dohvatim podatke")
            callback(undefined, "Ne mogu da dohvatim podatke")
        }
    });

    request.open("GET", resource);
    request.send();

}

getTodos('../JSON/todos.json', (data, error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})