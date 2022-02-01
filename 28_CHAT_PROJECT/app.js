import Chatroom from "./chat.js";
import ChatUi from "./ui.js"

let chat1 = new Chatroom("general", "darko");

chat1
  .addChat("Neka poruka")
  .then(() => {
    console.log("Uspesno dodat cet");
  })
  .catch((err) => {
    console.log(err);
  });
console.log(chat1.username);

chat1.getChats((d) => {
  console.log(d);
});

let lista = document.querySelector('ul');
let chatUi = new ChatUi(lista);