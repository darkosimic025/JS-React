import  generateImage  from "./general.js"

let generateList = parent => {
    let lista = document.createElement("ul");
    lista.style.listStyleType = "none";
    lista.style.overflow = "hidden";
    parent.appendChild(lista);
    return lista;
}

let generateItem = (parent, src) => {
    let stavka = document.createElement("li");
    stavka.style.float = "left";
    let img = generateImage(src);
    stavka.appendChild(img);
    parent.appendChild(stavka);
    return stavka;

}

export { generateList, generateItem };

