let customers = db.collection('customers');
let doc1 = customers.doc('customer1');
let doc2 = db.collection('tasks').doc('task1');

let obj = {
    Name : "Vesna",
    Age: 22,
    Addresses: ["Nis", "Leskovac"],
    Salary : 470.00
};

db.collection('customers').doc('customer4').set(obj)
    .then(() => {
        console.log("Dodat novi dokument u kolekciju 'Customers'");
        return db.collection('customers').doc('customer4').set(
            { height: 180 },
            { merge: true }
        );
    })
    .then(() => {
        console.log("Spojen novi novi dokument u kolekciju 'Customers'")
    })
    .catch((err) => {
        console.log("Greska prilikom dodavanja novog dokumenta" + err);
    });

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");


let obj2 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    descrition: "Fudbal sa drugarima iz ITBootcamp-a"
}

db.collection('tasks').doc('task4')
    .set(obj2)
    .then(() => {
        console.log(`Uspeno dodat task`)
    })
    .catch((msg) => {
        console.log(`Neusepsno dodat task : ${msg}`)
    });

db.collection('tasks').doc('task2')
    .update(
        {
            Priority: false
        }
    )
    .then(() => {
        console.log("Uspesno menjanje dokumenta")
    })
    .catch((msg) => {
        console.log("Neuspesno menjanje dokumenta")
    });

db.collection('customers')
    .doc('customer3')
    .delete()
    .then(() => {
        console.log("Uspesno izbrisan dokument");
    })
    .catch((err) => {
        console.log(`Greska prilikom brisanja: ${err}`)
    })


//Drugi nacina za dodavanje dokumena

db.collection('tasks')
    .add({
        Descrition: "Vezbanje JS",
        Start_Date: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
        Priority: true,
        Due_Date: null,
        Title: "Vezba za projekat"
    })
    .then(() => {
        console.log('Uspesno dodat zadatak u kolekciju tasks')
    })
    .catch((err) => {
        console.log(`Desila se greska: ${err}`)
    });
