let generateDiv = parent => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    parent.appendChild(div);
    return div;
}

let generateItem = (parent, src) => {
    let img = document.createElement("img");
    img.src = src;
    img.setAttribute("width", "200px");
    parent.appendChild(img);
    return img;
}

export { generateDiv, generateItem };