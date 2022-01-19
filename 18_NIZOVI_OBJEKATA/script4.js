let polaznik1 = {
    ime: "Darko",
    prezime: "Simic",
    ocena: 70
};

let polaznik2 = {
    ime: "Ivana",
    prezime: "Kordic",
    ocena: 70
};

let polaznik3 = {
    ime: "Arcibald",
    prezime: "Rajs",
    ocena: 70
};

let polaznik4 = {
    ime: "Milos",
    prezime: "Gagic",
    ocena: 70
};

// __________________________________________________________

let kurs1 = {
    naziv: "Razvoj veb stranica: JS",
    grad: "Beograd",
    polaznici: [polaznik1, polaznik2],
    brojPolaznika: function () {
        broj = this.polaznici.length;
        return broj;
    },
    uspesniPolaznici: function () {
        let broj = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                broj += 1;
            }
        });
        if (broj == this.polaznici.length) {
            return true;
        }
    },
    uspesniGrad: function () {
        if (this.uspesniPolaznici() == true) {
            return true;
        }
    }
}

let kurs2 = {
    naziv: "Razvoj veb stranica: PHP",
    grad: "Beograd",
    polaznici: [polaznik3, polaznik4],
    brojPolaznika: function () {
        broj = this.polaznici.length;
        return broj;
    },
    uspesniPolaznici: function () {
        let broj = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                broj += 1;
            }
        });
        if (broj == this.polaznici.length) {
            return true;
        }
    },
    uspesniGrad: function () {
        if (this.uspesniPolaznici() == true) {
            return true;
        }
    }
}

let kurs3 = {
    naziv: "Testiranje softvera: QA",
    grad: "Nis",
    polaznici: [polaznik3, polaznik2, polaznik4],
    brojPolaznika: function () {
        broj = this.polaznici.length;
        return broj;
    },
    uspesniPolaznici: function () {
        let broj = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                broj += 1;
            }
        });
        if (broj == this.polaznici.length) {
            return true;
        }
    },
    uspesniGrad: function () {
        if (this.uspesniPolaznici() == true) {
            return true;
        }
    }
}

let kurs4 = {
    naziv: "Osnove programiranja: Java",
    grad: "Kosovska Mitrovica",
    polaznici: [polaznik3, polaznik4],
    brojPolaznika: function () {
        broj = this.polaznici.length;
        return broj;
    },
    uspesniPolaznici: function () {
        let broj = 0;
        this.polaznici.forEach(polaznik => {
            if (polaznik.ocena > 65) {
                broj += 1;
            }
        });
        if (broj == this.polaznici.length) {
            return true;
        }
    },
    uspesniGrad: function () {
        if (this.uspesniPolaznici() == true) {
            return true;
        }
    }
}

let kursevi = [kurs1, kurs2, kurs3, kurs4];

//1.

let grad = (niz, string) => {
    let broj = 0;
    niz.forEach(kurs => {
        if (kurs.grad == string) {
            broj += 1;
        }
    });
    console.log(`U gradu ${string} odrzava se ${broj} kurseva`);
}

grad(kursevi, "Novi Sad");

//2.

let naziv = (niz, string) => {
    let broj = 0;
    niz.forEach(kurs => {
        if (kurs.naziv == string) {
            broj += 1;
        }
    });
    console.log(`Postoji ${broj} kursa sa nazivom ${string}`);
}

naziv(kursevi, "Osnove programiranja: Java");

//3.

let maxPolaznika = (niz) => {
    let max = 0;
    niz.forEach(kurs => {
        if (kurs.brojPolaznika() > max) {
            max = kurs.brojPolaznika();
        };
        
    });
    niz.forEach(kurs => {
        if (kurs.brojPolaznika() == max) {
            console.log(`${kurs.naziv}`)
        }
    });
}

maxPolaznika(kursevi)


//5.

let prosecnaOcena = niz => {

    let max = 0;

    niz.forEach(kurs => {

        let polaznici = kurs.polaznici;
        let sum = 0;
        let prosek = 0;

        polaznici.forEach(polaznik => {
            sum += polaznik.ocena;
        })

        prosek = sum / polaznici.length;

        if (prosek>max) {
            max = prosek;
            ime = kurs.naziv;
        }
    })
    return ime;

}

console.log(prosecnaOcena(kursevi));

//6.

 let uspesanKurs = niz => {
     niz.forEach(kurs => {
         let brojKurseva = 0;
         let polaznici = kurs.polaznici;
         let broj = 0;
         polaznici.forEach(polaznik => {
             if (polaznik.ocena > 65) {
                 broj += 1;
             }
         })
         if (broj == polaznici.length) {
             brojKurseva += 1;
         } 
         if (brojKurseva > 0) {
             console.log(`${kurs.naziv}`);
         }
     });
}

uspesanKurs(kursevi)



let gradKida = (niz, grad1) => {
    let nazivKursa = grad1;
    let brojKurseva = 0;
    let broj = 0;
    niz.forEach(kurs => {
        if (nazivKursa == kurs.grad)        {
            brojKurseva += 1;
            if (kurs.uspesniPolaznici() == true) {
                broj += 1;
            }
        }
    });
    if (brojKurseva == broj) {
        console.log(`${grad1} kidaaa`)
    }
}
gradKida(kursevi, "Beograd");