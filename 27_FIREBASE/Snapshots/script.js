let ul = document.querySelector("ul");
let form = document.querySelector("form");

// db.collection('tasks')
//     .orderBy("start_date", "desc")
//     .get()
//     .then(snapshot => {
//         if (!snapshot.empty) {
//             snapshot.docs.forEach(doc => {
//                 let obj = doc.data();
//                 let li = document.createElement("li");
//                 li.innerHTML = `${obj.title}`;
//                 ul.appendChild(li);
//                 if (obj.priority === true) {
//                     li.style.color = "red";
//                 }
//             });
//         } else {

//         }
//     })
//     .catch(err => {
//         console.log(`Greska: ${err}`)
//     })

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let title = this.title.value;
  let start_date = this.start_date.value;
  let due_date = this.due_date.value;
  let priority = this.priority.checked;
  let description = this.priority.value;

  let start_date_obj = new Date(start_date);
  let due_date_obj = new Date(due_date);
  let start_date_ts = firebase.firestore.Timestamp.fromDate(start_date_obj);
  let due_date_ts = firebase.firestore.Timestamp.fromDate(due_date_obj);

  let obj = {
    title: title,
    start_date: start_date_ts,
    due_date: due_date_ts,
    priority: priority,
    description: description,
  };

  db.collection("tasks")
    .add(obj)
    .then(() => {
      console.log("Uspesno dodat novi zadatak");
    })
    .catch((err) => {
      console.log(`Neuspesno dodat zadatak : ${err}`);
    });
});

db.collection("tasks").onSnapshot((snapshot) => {
  let changes = snapshot.docChanges();
  changes.forEach((change) => {
    let type = change.type;
      let doc = change.doc;
      let id = doc.id;
    if (type == "added") {
      let obj = doc.data();
        let li = document.createElement("li");
        li.id = id;
      li.innerHTML = `${obj.title}`;
      ul.appendChild(li);
      if (obj.priority === true) {
        li.style.color = "red";
        }
        let button = document.createElement('button')
        button.innerHTML = "Delete Task";
        li.appendChild(button)
    } else if (type=="removed") {
        let li = document.getElementById(id);
        li.remove()
    }
  });
});

ul.addEventListener('click', function (event) {
    if (event.target.tagName === "BUTTON") {
        let li = event.target.parentElement;
        let id = li.id;
        db.collection('tasks')
            .doc(id)
            .delete()
            .then(() => {
                alert("Uspesno izbrisan dokument");
            })
            .catch((err => {
                alert(`Greska prilikom brisanja : ${err}`);
            }));
    }
})