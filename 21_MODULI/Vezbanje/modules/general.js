 let generateImage = src => {
    let slika = document.createElement("img");
    slika.setAttribute("src", src);
    return slika;
}

export default generateImage ;