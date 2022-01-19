let blog1 = {
    title: "Osnovni HTML tagovi!",
    likes: 50,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 50,
    dislikes: 39
};

let blog3 = {
    title: "Osnovni JS tipovi podataka!",
    likes: 50,
    dislikes: 129
};

let arrBlogs = [blog1, blog2, blog3];
arrBlogs.forEach(blog => {
    console.log(blog);
})

//Promena vrednosti elementa

blog3.title = "Napredni CSS selektori!";
arrBlogs[2].title = "Osnovni JS tipovi podataka";


//Vezbanje:

//1.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumaLajkova = nizObj => {
    let ukupnoLajkova = 0;

    nizObj.forEach(objekat => {
        ukupnoLajkova += objekat.likes;
    });

    return ukupnoLajkova;
}

console.log(sumaLajkova(arrBlogs));

//2.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLajkova = nizObj => {

    let ukupnoLajkova = sumaLajkova(nizObj);

    return ukupnoLajkova / nizObj.length;
}

console.log(prosekLajkova(arrBlogs));

//Callback funkcija

let prosekLajkova2 = (nizObj,callback) => {
    let ukupnoLajkova = callback(nizObj);

    return ukupnoLajkova / nizObj.length;
}

console.log(prosekLajkova2(arrBlogs, sumaLajkova));

//3.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let poz_neg = nizObj => {

    nizObj.forEach(objekat => {

        if (objekat.likes > objekat.dislikes) {
            console.log(objekat.title);
        }
    });
}

poz_neg(arrBlogs);

// 4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let poz_neg_2 = nizObj => {

    nizObj.forEach(objekat => {

        if (objekat.likes >= objekat.dislikes*2) {
            console.log(objekat.title);
        }
    });
}

poz_neg_2(arrBlogs);

// 5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = nizObj => {

    nizObj.forEach(objekat => {

        if (objekat.title[objekat.title.length - 1] == "!") {
            console.log(objekat.title);
        }
    });
}

uzvicnik(arrBlogs);


