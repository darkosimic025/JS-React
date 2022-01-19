import { Film } from "./film.js";

let film1 = new Film("Inception", "Cristopher Nolan", 2100, [4,9,9]);
let film2 = new Film("Zodiac", "David Fincher", 2007, [10, 10]);
let film3 = new Film("Taxi Driver", "Martin Scorsese", 2008, [9, 10]);
let filmovi = [film1, film2, film3];

// Napraviti metod prosek koji vraća prosečnu ocenu 

film1.prosek();

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova = (niz, vek) => {
    niz.forEach(film => {
        if (film.godinaIzdanja >= vek * 100 - 100 && film.godinaIzdanja < vek * 100) {
            console.log(`Film ${film.naslov} je izasao u ${vek}. veku.`)
        }
    });
}
vekFilmova(filmovi, 20);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = niz => {
    let sumaOcena = 0;
    let brOcena = 0;
    niz.forEach(film => {
        let nizOcena = film.ocene;
        nizOcena.forEach(ocena => {
            sumaOcena += ocena;
            brOcena++;
        });
    });
    return Math.round((sumaOcena / brOcena) * 10) / 10 ;
}

console.log(`Prosecna ocena svih filmova je : ${prosecnaOcena(filmovi)}`);

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

let najboljeOcenjeni = niz => {
    let max = niz[0];
    niz.forEach(film => {
        if (film.prosek() >= max.prosek()) {
            max = film;
        }
    });
    return max.naslov;
}

console.log(`Film ${najboljeOcenjeni(filmovi)} je najbolje ocenjeni film.`);

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz => {
    let prosecnaOcenaFilmova = prosecnaOcena(niz);
    let minRazlika = Number.MAX_SAFE_INTEGER;
    let ime = "";
    niz.forEach(film => {
        let razlika = 0;
        if (film.prosek() > prosecnaOcenaFilmova) {
            razlika = film.prosek() - prosecnaOcenaFilmova;
        } else {
            razlika = prosecnaOcenaFilmova - film.prosek();
        }
        if (razlika < minRazlika) {
            minRazlika = razlika;
            ime = film.naslov
        }
    });
    return ime;
}

console.log(`Film ${osrednjiFilm(filmovi)} ima osrednju ocenu.`);

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz => {
    let max = niz[0];
    niz.forEach(film => {
        if (film.prosek() >= max.prosek()) {
            max = film;
        }
    });
    let oceneMax = max.ocene;
    let minOcena = Number.MAX_SAFE_INTEGER;
    oceneMax.forEach(ocena => {
        if (ocena < minOcena) {
            minOcena = ocena;
        }
    });
    console.log(`Najbolje ocenjeni film ${max.naslov} ima najslabiju ocenu ${minOcena}.`)
}

najmanjaOcenaNajboljeg(filmovi)

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let minOcena = Number.MAX_SAFE_INTEGER;
    niz.forEach(film => {
        let oceneFilma = film.ocene;
        oceneFilma.forEach(ocena => {
            if (ocena < minOcena) {
                minOcena = ocena;
            }
        });
    });
    return minOcena;
}

console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

let pravljenjeNizaOcena = niz => {
    let nizSvihOcena = [];
    niz.forEach(film => {
        let oceneFilma = film.ocene;
        oceneFilma.forEach(ocena => {
            nizSvihOcena.push(ocena);
        });
    });
    return nizSvihOcena;
}

console.log(pravljenjeNizaOcena(filmovi))

let najcescaOcena = nizOcena => {
    let maxBrojPonavljanja = 1;
    let brojac = 0;
    let najcesci;
    for (let i=0; i<nizOcena.length; i++) {
        for (let j=0; j<nizOcena.length; j++)  {
            if (nizOcena[i] == nizOcena[j]) {
                brojac++;
            }
            if (brojac>maxBrojPonavljanja) {
                maxBrojPonavljanja=brojac; 
                najcesci = nizOcena[i];
            }
        }
        brojac=0;
    }
    console.log(`Najcesca ocena ${najcesci} se ponavlja ${maxBrojPonavljanja} puta`);
}
najcescaOcena(pravljenjeNizaOcena(filmovi));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.

let iznadOcene = (broj, niz) => {
    let nizIznadProseka = [];
    niz.forEach(film => {
        if (film.prosek() > broj) {
            nizIznadProseka.push(film.naslov);
        }
    });
    return nizIznadProseka;
}

console.log(iznadOcene(7, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNajnoviji = (broj, niz) => {
    let nizIznadProseka = [];
    niz.forEach(film => {
        if (film.prosek() > broj) {
            nizIznadProseka.push(film);
        }
    });
    let najnoviji = nizIznadProseka[0]
    nizIznadProseka.forEach(film => {
        if (film.godinaIzdanja >= najnoviji.godinaIzdanja) {
            najnoviji = film;
        }
    });
    document.body.innerHTML += `<p>Film ${najnoviji.naslov} od rezisera ${najnoviji.reziser}-a ima zadovoljavajucu ocenu iznad ${broj} i najnoviji je od svih ponudjenih sa godinom izdanja ${najnoviji.godinaIzdanja}.</p>`

}
iznadOceneNajnoviji(7, filmovi);