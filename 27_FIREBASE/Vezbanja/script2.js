db.collection("customers")
  .doc("customer1")
  .get()
  .then((doc) => {
    if (doc.exists) {
      console.log(`Postoji dokument ${doc.id}`);
      let obj = doc.data();
      console.log(obj);
    } else {
      console.log(`Ne postoji dokument ciji je id: ${doc.id}`);
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokument: ${err}`);
  });

db.collection("customers")
  .get()
  .then((collection) => {
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        console.log(doc.id, doc.data());
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//Dohvatanje dokumenata odredjenim redosledom

db.collection("customers")
  .orderBy("Age", "desc")
  .orderBy("Name", "asc")
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//Dohvatanje odredjenog broja elemenata

db.collection("customers")
  .orderBy("Age", "desc")
  .orderBy("Name", "asc")
  .orderBy("Salary", "desc")
  .limit(2)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume

db.collection("customers")
  .where("Age", ">=", 24)
  .orderBy("Age", "asc")
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//1. Iz kolekcije customers, pročitati sve klijente sortirane po imenu.

db.collection("customers")
  .orderBy("Name", "asc")
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//2. Iz kolekcije customers, pročitati sve klijente koji:
// Imaju adresu u Nišu,

db.collection("customers")
  .where("Addresses", "array-contains", "Nis")
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju platu veću ili jednaku od 500,
db.collection("customers")
  .where("Salary", ">=", 500)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });
// Imaju platu između 300 i 800,

db.collection("customers")
  .where("Salary", ">", 300)
  .where("Salary", "<", 800)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });
// Imaju platu manju od 900, i imaju 30 godina,

db.collection("customers")
  .where("Salary", "<", 900)
  .where("Age", "==", 30)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju adresu u Nišu ili Beogradu,

db.collection("customers")
  .where("Addresses", "array-contains-any", ["Nis", "Beograd"])
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Imaju 22, 25 ili 28 godina.

db.collection("customers")
  .where("Age", "array-contains-any", [22, 25, 28])
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Name} ${obj.Age} ${obj.Salary}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//3. Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

db.collection("tasks")
  .orderBy("Title")
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Title} ${obj.Description}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

//4. Iz kolekcije tasks, pročitati sve zadatke, i koji:
// Su prioritetni,

db.collection("tasks")
  .where("Priority", "==", true)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Title} ${obj.Description}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Treba da se izvrše u tekućoj godini,

let now = new Date();
let year = now.getFullYear();
let date1 = new Date(year, 0, 1);
let date2 = new Date(year + 1, 0, 1);
let date1Timestamp = firebase.firestore.Timestamp.fromDate(date1);
let date2Timestamp = firebase.firestore.Timestamp.fromDate(date2);

db.collection("tasks")
    .where("Due Date", ">=", date1Timestamp)
    .where("Due Date", "<", date2Timestamp)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Title} ${obj.Description}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });
// Su završeni,

let nowDate = new Date();
let nowDateTimestamp = firebase.firestore.Timestamp.fromDate(nowDate);
// console.log(nowDateTimestamp)


db.collection("tasks")
    .where("Due Date", "<", nowDateTimestamp)
  .get()
  .then((collection) => {
    console.log(collection);
    if (!collection.empty) {
      let allDocs = collection.docs;
      allDocs.forEach((doc) => {
        let obj = doc.data();
        console.log(`${obj.Title} ${obj.Description}`);
      });
    } else {
      console.log("Nema dokumenata u kolekciji");
    }
  })
  .catch((err) => {
    console.log(`Nemoguce dohvatiti dokumente iz kolekcije ${err}`);
  });

// Tek treba da počnu.
