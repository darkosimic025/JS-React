// 1.Zadatak

class Boja {
    constructor(td, z, i) {
        this.talasnaDuzina = td;
        this.zasicenje = z;
        this.intezitet = i;
    }
    // Talasna duzina set & get
    set talasnaDuzina(td) {
        this._talasnaDuzina = td;
    }
    get talasnaDuzina() {
        return this._talasnaDuzina;   
    }
    // Zasicenje set & get
    set zasicenje(z) {
        this._zasicenje = z;
    }
    get zasicenje() {
        return this._zasicenje;
    }
    // Intezitet set & get
    set intezitet(i) {
        this._intezitet = i;
    }
    get intezitet() {
        return this._intezitet;
    }
}

let boja1 = new Boja(100, 50, 30);
let boja2 = new Boja(100, 50, 30);
let boja3 = new Boja(300, 70, 30);
let boja4 = new Boja(400, 80, 30);

let ispitajSlicnost = (b1, b2) => {
    if (b1.zasicenje == b2.zasicenje && b1.talasnaDuzina == b2.talasnaDuzina && b1.intezitet == b2.intezitet) {
        return true;
    } else {
        return false;
    }
}

console.log(ispitajSlicnost(boja1, boja2));

let boje = [boja1, boja2, boja3, boja4];

let srednjaTalasnaDuzina = niz => {
    let suma = 0;
    let brBoja = niz.length
    niz.forEach(boja => {
        let talasnaDuzina = boja.talasnaDuzina;
        suma += talasnaDuzina;
    })
    return suma / brBoja;
}

console.log(srednjaTalasnaDuzina(boje));

//2.Zadatak_______________________________________________________________________________________________________

class Datum  {
    constructor(d, m, g) {
        this.dan = d;
        this.mesec = m;
        this.godina = g;
    }
    //Dan set & get
        set dan(d) {
            this._dan = d;
    }
        get dan() {
            return this._dan;
    }
        //Mesec set & get
        set mesec(m) {
            this._mesec = m;
        }
        get mesec() {
            return this._mesec;
    }
        //Godina set & get
        set godina(g) {
            this._godina = g;
        }
        get godina() {
            return this._godina;
    }
}

let datum1 = new Datum(12, 6, 1996);
let datum2 = new Datum(13, 6, 1996);

let ranijiDatum = (d1, d2) => {
    if (d1.godina > d2.godina) {
        console.log('Raniji je prvi datum');
    } else if (d1.godina < d2.godina) {
        console.log('Raniji je drugi datum');
    } else {
        if (d1.mesec > d2.mesec) {
            console.log('Raniji je prvi datum');
        } else if (d1.mesec < d2.mesec) {
            console.log('Ranije je drugi datum');
        } else {
            if (d1.dan > d2.dan) {
                console.log('Ranije je prvi datum');
            } else if (d1.dan < d2.dan) {
                console.log('Raniji je drugim datum');
            } else {
                console.log('Datumi su isti');
            }
        }
    }
}

ranijiDatum(datum1, datum2)

//3.Zadatak_______________________________________________________________________________________________________

class Rudnik {
    constructor(i, p) {
        this.ime = i;
        this.plata = p;
    }
    //Ime set & get
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime
    }
    //Plata set & get
    set plata(p) {
        this._plata = p
    }
    get plata() {
       return this._plata
    }
}

let radnik1 = new Rudnik("Darko", 1000);
let radnik2 = new Rudnik("Ivana", 1200);
let radnik3 = new Rudnik("Arcibald", 1200);

let radnici = [radnik1, radnik2, radnik3];

let maksPlata = niz => {
    maxPlata = Number.MIN_SAFE_INTEGER;
    niz.forEach(radnik => {
        let plata = radnik.plata
        if (plata > maxPlata) {
            maxPlata = plata;
        }
    })
    return maxPlata;
}

console.log(maksPlata(radnici))

let maksPlataOsoba = niz => {
    maxPlata = Number.MIN_SAFE_INTEGER;
    niz.forEach(radnik => {
        let plata = radnik.plata
        if (plata > maxPlata) {
            maxPlata = plata;
        }
    })
    niz.forEach(radnik => {
        let plata = radnik.plata;
        if (maxPlata == radnik.plata) {
            console.log(radnik.ime)
        }
    })
}

maksPlataOsoba(radnici);

//4.Zadatak_______________________________________________________________________________________________________


class Autobus {
    constructor(reg, bs) {
        this.registarskiBroj = reg;
        this.brojSedista = bs;
    }
    set registarskiBroj(reg) {
        this._registarskiBroj = reg;
    }
    get registarskiBroj() {
        return this._registarskiBroj;
    }
    set brojSedista(bs) {
        this._brojSedista = bs;
    }
    get brojSedista() {
        return this._brojSedista;
    }
}

let autobus1 = new Autobus(124, 30);
autobus2 = new Autobus(130, 100);
autobus3 = new Autobus(110, 20);

let autobusi = [autobus1, autobus2, autobus3];

let ukupnoSedista = niz => {
    let brojSedista = 0;
    niz.forEach(autobus => {
        let sedistaAutobus = autobus.brojSedista;
        brojSedista += sedistaAutobus;
    });
    return brojSedista;
}
console.log(ukupnoSedista(autobusi));

let maksSedista = niz => {
    let max = Number.MIN_SAFE_INTEGER;
    let ime = "";
    niz.forEach(autobus => {
        if (autobus.brojSedista > max) {
            max = autobus.brojSedista;
            ime = autobus.registarskiBroj;
        }
    });
    return ime;
}
console.log(maksSedista(autobusi))

let ljudi = (brojLjudi, callback) => {
    let brojSedista = callback;
    if (brojLjudi <= brojSedista) {
        return true;
    } else {
        return false;
    }
}

console.log(ljudi(80, ukupnoSedista(autobusi)));

//5.Zadatak_______________________________________________________________________________________________________

class FMRadio {
    constructor(s, f, j) {
        this.stanica = s;
        this.frekvencija = f;
        this.jacina = j;
    }
    set jacina(j) {
        if (j < 0) {
            this._jacina = 0
        } else if (j > 20) {
            this._jacina = 20
        } else {
            this._jacina = j;
        }
    }
    get jacina() {
        return this._jacina;
    }
    set frekvencija(f) {
        if (f < 87.5) {
            this._frekvencija = 87.5;
        } else if (f > 120) {
            this._frekvencija = 120;
        } else {
            this._frekvencija = f;
        }
    }
    get frekvencija() {
        return this._frekvencija;
    }
    set stanica(s) {
        this._stanica = s;
    }
    get stanica() {
        return this._stanica;
    }
    promeniZvuk(simbol) {
        if (this.jacina <= 19 && simbol == '+') {
                this.jacina++;
        }
        if (this.jacina >= 1 && simbol == '-') {
                this.jacina--;
        }
    }
    frekvencijaIskljuci() {
        this.frekvencija = 87.5;
    }
}

let stanica1 = new FMRadio(1, 100, 18);
stanica2 = new FMRadio(2, 90, 13);
stanica3 = new FMRadio(3, 110, 19);

let stanice = [stanica1, stanica2, stanica3];

let srednjaFrekvencija = niz => {
    let suma = 0;
    let brojStanica = niz.length;
    niz.forEach(stanica => {
        let freq = stanica.frekvencija;
        suma += freq;
    })
    return suma / brojStanica;
}

let najbliziMaks = niz => {
    let max = Number.MIN_SAFE_INTEGER;
    niz.forEach(stanica => {
        let freq = stanica.frekvencija;
        if (freq > max) {
            max = freq;
            ime = stanica.stanica;
        }
    })
    return `Stanica broj ${ime} je najbliza`;
}

console.log(najbliziMaks(stanice));

//6.Zadatak_______________________________________________________________________________________________________

class Krug {
    constructor(r) {
        this.poluPrecnik = r;
    }
    obimKruga() {
        return 2 * this.poluPrecnik * 3.14;
    }
    povrsinaKruga() {
        return this.poluPrecnik * this.poluPrecnik * 3.14;
    }

}

let upisaniKrug = (obj1, obj2) => {
    let povrsina1 = obj1.povrsinaKruga();
    let povrsina2 = obj2.povrsinaKruga();
    if (povrsina1 > povrsina2) {
        return true;
    } else {
        return false;
    }
}

let rastuci = niz => {
    let broj = 0;
    for (let i = 0; i < niz.length-1; i++) {
        let trenutni = niz[i].poluPrecnik;
        let sledeci = niz[i+1].poluPrecnik;
        if (trenutni > sledeci) {
            broj++
        }
    }
    if (broj == niz.length - 1) {
        return true;
    } else {
        return false;
    }
}

let krug1 = new Krug(5);
let krug2 = new Krug(4);
let krug3 = new Krug(3.9);
krug1.povrsinaKruga();
console.log(krug1)

let krugovi = [krug1, krug2, krug3];

console.log(rastuci(krugovi))

//7.Zadatak_______________________________________________________________________________________________________

class Cipela {
    constructor(n, b, p = []) {
        this.naziv = n;
        this.brojCipele = b;
        this.prepravka = p;
    }
    set naziv(n) {
        this._naziv = n;
    }
    get naziv() {
        return this._naziv;
    }
    set brojCipele(b) {
        this._brojCipele = b;
    }
    get brojCipele() {
        return this._brojCipele;
    }
    set prepravka(p) {
        this._prepravka = p;
    }
    get prepravka() {
        return this._prepravka;
    }
    zalepi() {
        let p = document.createElement("p");
        let tekst = document.createTextNode("Zalepljena cipela");
        p.append(tekst);
        document.body.append(p)
    }
    prosiri() {
        let p = document.createElement("p");
        let tekst = document.createTextNode("Prosirena cipela");
        p.append(tekst);
        document.body.append(p)
    }
    usij() {
        let p = document.createElement("p");
        let tekst = document.createTextNode("Usivena cipela");
        p.append(tekst);
        document.body.append(p)
    }

}

let cipela1 = new Cipela('Nike', 42, ["usij", "prosiri"]);

let radi = cipela => {
    for (i = 0; i < cipela.prepravka.length; i++) {
        if (cipela.prepravka[i] == 'zalepi') {
            cipela.zalepi();
        }
        else if (cipela.prepravka[i] == 'prosiri') {
            cipela.prosiri();
        }
        else if (cipela.prepravka[i] == 'usij') {
            cipela.usij();
        } else {
            let p = document.createElement("p");
            let tekst = document.createTextNode("Nepoznata prepravka");
            p.append(tekst);
            document.body.append(p)
        }
    }
}
radi(cipela1);


 cipela1 = new Cipela('Nike', 42, ["usij", "prosiri"]);
let cipela2 = new Cipela('Adidas', 43, ["zalepi", "prosiri", "usij"]);
let cipela3 = new Cipela('New Balance', 39, ["usij", "zalepi"]);

let cipele = [cipela1, cipela2, cipela3];

let najvisePrepravki = niz => {
    let maxPrepravka = niz[0].prepravka.length;
    console.log(maxPrepravka)
    niz.forEach(cipela => {
        let trenutnaCipela = cipela.prepravka.length;
        if (trenutnaCipela >= maxPrepravka) {
            maxPrepravka = trenutnaCipela;
        }
    })
    niz.forEach(cipela => {
        if (cipela.prepravka.length == maxPrepravka) {
            console.log(`Cipela ${cipela.naziv} je imala najveci broj prepravki.`)
        }
    })
}

najvisePrepravki(cipele)

let brojPrepravki = (niz,string) => {
    let brojCipela = 0;
    niz.forEach(cipela => {
        for (i = 0; i < cipela.prepravka.length; i++) {
            if (cipela.prepravka[i] == string) {
                brojCipela++;
            }
        }
    });
    return brojCipela;
}

console.log(brojPrepravki(cipele, "zalepi"))

//8.Zadatak_______________________________________________________________________________________________________

class Student {
    constructor(jmbg, i, p, no, po) {
        this.maticniBroj = jmbg;
        this.ime = i;
        this.prezime = p;
        this.nizOcena = no;
        this.prosecnaOcena = po;
    }
    //Set & get maticni broj
    set maticniBroj(jmbg) {
        if (jmbg.length == 13) {
            this._maticniBroj = jmbg;
        } else {
            this._maticniBroj = "0000000000000";
        }
    }
    get maticniBroj() {
        return this._maticniBroj;
    }
    //Set & get niz ocena
    set nizOcena(no) {
        let brojNeispravnihOcena = 0;
        no.forEach(ocena => {
            if (ocena > 5 && ocena < 11) {
                this._nizOcena = no;
            } else {
                brojNeispravnihOcena++;
            }
            if (brojNeispravnihOcena > 0) {
                this._nizOcena = false;
            }
        });
    }
    get nizOcena() {
        return this._nizOcena;
    }
    //Set & get prosecna ocena
    set prosecnaOcena(po) {
        let suma = 0;
        let brojOcena = this.nizOcena.length
        if (this.nizOcena == false) {
            this._prosecnaOcena = false;
            po = this._prosecnaOcena;
        } else {
            this.nizOcena.forEach(ocena => {
                suma += ocena;
            });
            this._prosecnaOcena = suma / brojOcena;
            po = this._prosecnaOcena;
        }
    }
    get prosecnaOcena() {
        return this._prosecnaOcena;
    }
    //Set & get ime
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    //Set & get prezime
    set prezime(p) {
        this._prezime = p;
    }
    get prezime() {
        return this._prezime;
    }
    //Metoda
    ispis() {
        console.log(`Student ${this.ime} ${this.prezime} sa maticnim brojem ${this.maticniBroj} ima niz ocena ${this.nizOcena} sa prosecnom ocenom ${this.prosecnaOcena};`)
    }
}

let student1 = new Student("1206996783422", "Darko", "Simic", [9, 7, 6]);
let student2 = new Student("2805997120222", "Ivana", "Kordic", [10, 10, 10]);
let student3 = new Student("2805997120222", "Milos", "Gagic", [9, 10, 7]);

let studenti = [student1, student2, student3];

let srednjaOcena = niz => {
    let sumaOcena = 0;
    let brOcena = 0;
    niz.forEach(student => {
        let oceneNiz = student.nizOcena;
        oceneNiz.forEach(ocena => {
            sumaOcena += ocena;
            brOcena++;
        });
    });
    return sumaOcena / brOcena;
}

console.log(srednjaOcena(studenti));

console.time('Osrednji funkcija');

let osrednji = (niz, callback) => {
    let srednjaOcena = callback;
    let minRazlika = Number.MAX_SAFE_INTEGER;
    let ime = "";
    niz.forEach(student => {
        let razlika = 0;
        let oceneNiz = student.nizOcena;
        let sumaOcena = 0;
        let brOcena = student.nizOcena.length;
        oceneNiz.forEach(ocena => {
            sumaOcena += ocena;
        });
        let srednjaOcenaStudenta = sumaOcena / brOcena;
        if (srednjaOcenaStudenta < srednjaOcena) {
            razlika = srednjaOcena - srednjaOcenaStudenta;
        } else if (srednjaOcenaStudenta > srednjaOcena) {
            razlika = srednjaOcenaStudenta - srednjaOcena;
        }
        if (razlika < minRazlika) {
            minRazlika = razlika;
            ime = student.ime;
        }
    });
    console.log(`Student ${ime} ima prosek najblizi prosecnoj oceni`);

}

console.timeEnd('Osrednji funkcija')

osrednji(studenti, srednjaOcena(studenti));

