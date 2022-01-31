class Chatroom {
    constructor(r, u) {
        this.username = u;
        this.room = r;
        this.chats = db.collection('chats');
    }

    set username(u) {
        if (u.includes(" ") || u.length < 2 || u.length > 10) {
            alert("Neispravno korisnicko ime")
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

    async addChat(poruka) {
        let object = {
            message: poruka,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        }

        let response = await this.chats.add(object);
        return response;
    }

    getChats(callback) {
        this.chats.onSnapshot()
    }

}

let chat1 = new Chatroom("general", "darko");

chat1.addChat("Neka poruka")
    .then(() => {
        console.log("Uspenso dodat cet")
    })
    .catch(err => {
    console.log(err)
})
console.log(chat1.username)

chat1.getChats(() => {
    
})