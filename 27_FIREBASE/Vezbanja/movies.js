// 1.Zadatak

db.collection('movies').doc('movie3')
    .set({
        name: "Zodiac",
        director: {
            name: "David",
            surname: "Fincher"
        },
        rating: 8.9,
        release_year: 2010,
        genres: ["Mystery", "Horror"]
    })
    .then(() => {
        console.log("Film uspesno dodat")
    })
    .catch((err) => {
        console.log(`Film neuspesno dodat: ${err}`)
    })

// 2.Zadatak

db.collection('movies').doc('movie1')
    .update({
        rating: 5
    })
    .then(() => {
        console.log("Film uspesno izmenjen")
    })
    .catch((err) => {
        console.log("Neuspesno menjanje filma" +err)
    });

// 3.Zadatak

db.collection('movies').doc('movie3')
    .update({
        genres : firebase.firestore.FieldValue.arrayUnion("Drama")
    })
    .then(() => {
        console.log("Uspeno dodat zanr u niz")
    })
    .catch((err) => {
        console.log(`Neuspesno dodat zanr u niz : ${err}`)
    });

// 4.Zadatak

db.collection('movies').doc('movie1')
    .update({
        genres : firebase.firestore.FieldValue.arrayRemove("Mystery")
    })
    .then(() => {
        console.log("Uspeno dodat zanr u niz")
    })
    .catch((err) => {
        console.log(`Neuspesno dodat zanr u niz : ${err}`)
    });

// // 5.Zadatak

// db.collection('movies').doc('movie3')
//     .update({
//         director.name 
//     })
//     .then()
//     .cathc();
