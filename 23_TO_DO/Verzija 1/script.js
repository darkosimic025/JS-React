let lista = document.getElementsByTagName("li");
let listaNiz = Array.from(lista);
listaNiz.forEach(li => {
    li.addEventListener("click", () => {
        if (li.style.textDecoration == "line-through") {
            li.style.textDecoration = "none"
        } else {
            li.style.textDecoration = "line-through"
        }
    });
})
