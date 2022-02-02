import Chatroom from "./chat.js";
import ChatUi from "./ui.js"

let chat1 = new Chatroom("general", "darko");

// chat1
//   .addChat("Neka poruka")
//   .then(() => {
//     console.log("Uspesno dodat cet");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(chat1.username);



let lista = document.querySelector('ul');
let chatUi = new ChatUi(lista);

chat1.getChats((d) => {
    chatUi.templateLi(d)
});
  
let inputMessage = document.querySelector('#inputMessage');
let buttonSend = document.querySelector('#buttonSend');

buttonSend.addEventListener('click', (e) => {
    e.preventDefault();
    let inputMessageValue = inputMessage.value;
    chat1.addChat(inputMessageValue);
    chat1.getChats((data) => {
        chatUi.templateLi(data);
    })
})