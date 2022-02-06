//1. Iz kolekcije movies, pročitati sve filmove:
// Koje je režirao George Lucas,

db.collection('movies')
    .where("director.name", "==", "George")
    .where("director.surname", "==", "Lucas")
    .get()
    .then(collection => {
        if (!collection.empty) {
            let allDocs = collection.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(`George Lucas je rezirao ${obj.name} film`)
            })
        } else {
            console.log("Nema filma koji je rezirao George Lucas")
    }
})
    .catch(err => {
    console.log("Nemoguce dohvatiti dokumente iz kolekcije")
})
// Čija je ocena između 5 i 10,

db.collection('movies')
    .where("rating", ">=", 5)
    .where("rating", "<=", 10)
    .get()
    .then(collection => {
        if (!collection.empty) {
            let allDocs = collection.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(`Film ${obj.name} ima ocenu izmedju 5 i 10`)
            })
        } else {
            console.log("Nema filma koji ima ocenu izmedju 5 i 10")
    }
})
    .catch(err => {
    console.log("Nemoguce dohvatiti dokumente iz kolekcije")
})

// Kojima je žanr komedija, tragedija ili drama,

db.collection('movies')
    .where("genres", "array-contains-any", ["Tragedy", "Comedy", "Drama"])
    .get()
    .then(collection => {
        if (!collection.empty) {
            let allDocs = collection.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(`Film ${obj.name} poseduje odredjene zanrove`)
            })
        } else {
            console.log("Nema filma koji ima odredjene zanrove")
    }
})
    .catch(err => {
    console.log("Nemoguce dohvatiti dokumente iz kolekcije")
})

// Koji su izašli u 21. veku.

db.collection('movies')
    .where("release_year", ">=", 2001)
    .where("release_year", "<=", 2100)
    .get()
    .then(collection => {
        if (!collection.empty) {
            let allDocs = collection.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(`Film ${obj.name} je izasao u 21. veku`)
            })
        } else {
            console.log("Nema filma koji je izasao u 21. veku")
    }
})
    .catch(err => {
    console.log("Nemoguce dohvatiti dokumente iz kolekcije")
})

//2. Prikazati sve informacije o najbolje rangiranom filmu.

db.collection('movies')
    .orderBy("rating", "desc")
    .limit(1)
    .get()
    .then(collection => {
        if (!collection.empty) {
            let allDocs = collection.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(`Film ${obj.name} je najbolje ocenjen`)
            })
        } else {
            console.log("Nema filma koji je izasao u 21. veku")
    }
})
    .catch(err => {
    console.log("Nemoguce dohvatiti dokumente iz kolekcije" +err)
})

//3. Prikazati sve informacije o najslabije rangiranoj drami.

db.collection('movies')
    .where("genres", "array-contains", "Drama")
    .orderBy("rating", "asc")
    .limit(1)
    .get()
    .then(collection => {
        if (!collection.empty) {
            let allDocs = collection.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(`Film ${obj.name} je drama sa najslabijom ocenom`)
            })
        } else {
            console.log("Nema filma koji je izasao u 21. veku")
    }
})
    .catch(err => {
    console.log("Nemoguce dohvatiti dokumente iz kolekcije" + err)
})
