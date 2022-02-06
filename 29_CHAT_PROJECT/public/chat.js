class Chatroom {
  constructor(r, u) {
    this.username = u;
    this.room = r;
    this.chats = db.collection("chats");
    this.unsub = false;
  }

  set username(u) {
    if (u.includes(" ") || u.length < 2 || u.length > 10) {
      alert("Neispravno korisnicko ime");
    } else {
      this._username = u;
    }
  }
  get username() {
    return this._username;
  }

  set room(r) {
    this._room = r;
  }

  get room() {
    return this._room;
  }

  updateUsername(newUsername) {
    this.username = newUsername;
    localStorage.setItem("username", newUsername);
  }

  updateRoom(ur) {
    this.room = ur;
    if (this.unsub != false) {
      this.unsub();
    }
  }

  async addChat(poruka) {
    let object = {
      message: poruka,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    let response = await this.chats.add(object);
    return response;
  }

  deleteMessage(id) {
    this.chats
      .doc(id)
      .delete()
      .then(console.log("Poruka izbrisana"))
      .catch((err) => {
        console.log(err);
      });
  }

  filterChats(callback, date1, date2) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .where("created_at", ">=", date1)
      .where("created_at", "<=" , date2)
      .orderBy("created_at", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            // callback(change.doc.data());
            callback(change.doc);
          }
        });
      });
  }

  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added") {
            // callback(change.doc.data());
            callback(change.doc);
          }
        });
      });
  }
}

export default Chatroom;
