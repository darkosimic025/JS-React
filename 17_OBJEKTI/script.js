let blog1 = {
    title: "JS",
    content: "Objekti",
    author: "Darko Simic"
};

console.log(blog1);
console.log(typeof blog1);

//Ispis propertija na dva nacina:

console.log(blog1.title);
console.log(blog1[`title`]);

//Izmene propertija na dva nacina:

blog1.title = "Osnove JS-a";
console.log(blog1.title);

blog1[`title`] = "Osnove JavaScript-a";
console.log(blog1.title)

// ______________________________________________________________________________________________________________________________

let user = {
    username: "darkosimic",
    age: 24,
    blogs: ["Naslov 1", "Naslov 2", "Naslov 3"],
    login: function () {
        console.log("Ulogovani ste");
    },
    logout: function () {
        console.log("Izlogovani ste");
    },
    logBlogs: function () {
        console.log(this);
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

console.log(user);
let nasloviBlogova = user.blogs;
for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h3>${user.blogs[i]}</h3>`;
}

//Poziv metoda:

user.login();
user.login();
user.logout();
user.logBlogs();

//Vezbanje

let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    vrednostiTemp: [8, 1, 0, 0, 7],
    //1
    prosecnaTemp: function () {
        let suma = 0;
        broj = 0;
        for (let i = 0; i < this.vrednostiTemp.length; i++) {
            suma += this.vrednostiTemp[i];
            broj++;
        }
        return suma / broj;
    },
    //2
    natprosecnaTemp: function () {
        let prosek = this.prosecnaTemp();
        let broj = 0;
        for (let i = 0; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] > prosek) {
                broj++;
            }
        }
        return broj;
    },
    //3
    maxTemp: function () {
        let max = this.vrednostiTemp[0];
        for (i = 1; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] > max) {
                max = this.vrednostiTemp[i];
            }
        }
        let broj = 0;
        for (i = 0; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] == max) {
                broj++;
            }
        }
        return broj;
    },
    //4
    izmedjuTemp: function (a, b) {
        let broj = 0;
        for (i = 1; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] > a && this.vrednostiTemp[i] < b) {
                broj++;
            }
        }
        return broj;
    },
    //5
    iznadProseka: function () {
        let broj = 0;
        natprosecnaBroj = this.natprosecnaTemp();
        if (natprosecnaBroj > (this.vrednostiTemp.length / 2)) {
            return true;
        } else {
            return false;
        }
        
    },
    //6
    ledenDan: function () {
        let rezultat = true;
        for (let i = 0; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] > 0) {
                rezultat = false;
            }
        } return rezultat;
    },
    //7
    tropskiDan: function () {
        for (let i = 0; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] < 24) {
                rezultat = false;
            }
        } return rezultat;
    },
    //8
    nepovoljanDan: function () {
        let rez = false;
        for (let i = 0; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] - this.vrednostiTemp[i+1] >= 8 || this.vrednostiTemp[i] - this.vrednostiTemp[i+1] <= -8) {
                rez = true;
            }
        } return rez;
    }
}
console.log(dan)
console.log(dan.prosecnaTemp());
console.log(dan.natprosecnaTemp());
console.log(dan.maxTemp());
console.log(dan.izmedjuTemp(1,10));
console.log(dan.iznadProseka());
console.log(dan.ledenDan());
console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());