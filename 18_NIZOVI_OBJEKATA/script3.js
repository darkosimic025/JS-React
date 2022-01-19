let student1 = {
    ime: "Darko",
    prezime: "Simic",
    godina: 3,
    ocene: [9, 8, 8, 9, 10],
    prosek: function () {
        let suma = 0;
        for (i = 0; i < this.ocene.length; i++) {
            suma += this.ocene[i];
        }
        return suma / this.ocene.length;
    },

};
let student2 = {
    ime: "Ivana",
    prezime: "Kordic",
    godina: 2,
    ocene: [7, 7, 7, 7, 7],
    prosek: function () {
        let suma = 0;
        for (i = 0; i < this.ocene.length; i++) {
            suma += this.ocene[i];
        }
        return suma / this.ocene.length;
    }
};
let student3 = {
    ime: "Arcibald",
    prezime: "Rajs",
    godina: 1,
    ocene: [10, 10, 10, 10, 10],
    prosek: function () {
        let suma = 0;
        for (i = 0; i < this.ocene.length; i++) {
            suma += this.ocene[i];
        }
        return suma / this.ocene.length;
    }
};
let student4 = {
    ime: "Milos",
    prezime: "Gagic",
    godina: 1,
    ocene: [6, 8, 8, 9, 6],
    prosek: function () {
        let suma = 0;
        for (i = 0; i < this.ocene.length; i++) {
            suma += this.ocene[i];
        }
        return suma / this.ocene.length;
    }
};

let studenti = [student1, student2, student3, student4];

let string1 = (niz, string) => {
    niz.forEach(student => {
        if (student.prezime[0] == `${string}`) {
            console.log(`Student ${student.ime} ${student.prezime} u svom prezimenu sadrzi string ${string}.`);
        }
    });
}

string1(studenti, "R"); // Arcibald Rajs

let string2 = (niz, string_1, string_2) => {
    niz.forEach(student => {
        for (i = 0; i < student.ime.length; i++) {
            if (student.ime[i] == `${string_1}`) {
                for (i = 0; i < student.prezime.length; i++) {
                    if (student.prezime[i] == `${string_2}`) {
                        console.log(`Prvi string ${string_1} u svom imenu i drugi string ${string_2} u svom prezimenu sadrzi student ${student.ime} ${student.prezime}`);
                    }
                }
            }
        }
    });
}

string2(studenti, "A", "R");

let godinaStudija = (niz, godina) => {
    niz.forEach(student => {
        if (student.godina == godina) {
            console.log(`Student ${student.ime} ${student.prezime} se nalazi na ${godina}. godini studija`)
        }
    });
}

godinaStudija(studenti, 3)

let maxProsek = (niz) => {
    let max = studenti[0].prosek();
    let ime = "";
    niz.forEach(student => {
        if (student.prosek() > max) {
            max = student.prosek();
            ime = `${student.ime} ${student.prezime}`;
        }
    });
    return ime;
}

console.log(maxProsek(studenti));


let prosecanStudent = niz => {
    niz.forEach(student => {
        let broj = 0;
        for (i = 0; i < student.ocene.length; i++) {
            if (student.ocene[i] == 6 || student.ocene[i] == 10) {
                broj = 1;
            }
        }
        if (broj == 0) {
            console.log(`${student.ime}`);
        }
    });
}

prosecanStudent(studenti);

let ekstraStudent = niz => {
    niz.forEach(student => {
        let broj = 0;
        desetka = 0;
        devetka = 0;
        for (i = 0; i < student.ocene.length; i++) {
            if (student.ocene[i] != 9 && student.ocene[i] != 10) {
                broj = 1;
            }
        }
        if (broj == 0) {
            for (i = 0; i < student.ocene.length; i++) {
                if (student.ocene[i] == 10) {
                    desetka += 1;
                }
                if (student.ocene[i] == 9) {
                    devetka += 1;
                }
            }
            if (desetka > devetka * 2) {
                console.log(`${student.ime} je ekstra`)
            }
        }
    })
}

ekstraStudent(studenti);

let kidaStudent = niz => {
    niz.forEach(student => {
        let broj = 0;
        devetka = 0;
        for (i = 0; i < student.ocene.length; i++) {
            if (student.ocene[i] != 9 && student.ocene[i] != 10) {
                broj = 1;
            }
        }
        if (broj == 0) {
            for (i = 0; i < student.ocene.length; i++) {

                if (student.ocene[i] == 9) {
                    devetka += 1;
                }
            }
            if (devetka>student.godina) {
                console.log(`${student.ime} kida`)
            }
        }
    })
}

kidaStudent(studenti);

let razbijaStudent = niz => {
    niz.forEach(student => {
        let desetka = 0;
        for (i = 0; i < student.ocene.length; i++) {
            if (student.ocene[i] == 10) {
                desetka += 1;
            }
        }
        if (desetka == student.ocene.length) {
            if (desetka > 5 * (student.godina - 1)) {
                console.log(`${student.ime} razbijaaa`)
            }
        }
    });
}

razbijaStudent(studenti);