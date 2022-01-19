import  generateImage  from "./general.js";

let generateTable = parent => {
    let tabela = document.createElement("table");
    tabela.style.border = "0";
    parent.appendChild(tabela);
    return tabela;
}

let generateTableRow = parent => {
    let red = document.createElement("tr");
    parent.appendChild(red);
    return red;
}

let generateItem = (parent, src) => {
    let data = document.createElement("td");
    let slika = generateImage(src);
    data.appendChild(slika);
    parent.appendChild(data);
    return data;
}

export { generateTable, generateTableRow, generateItem };