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



let lista = document.getElementById('chatMessages');
let chatUi = new ChatUi(lista);

chat1.getChats((d) => {
    chatUi.templateLi(d)
});


  
let inputMessage = document.querySelector(".messageInput__field");
let buttonSend = document.querySelector(".messageInput__button");

let inputUsername = document.querySelector(".usernameInput__field");
let formUpdate = document.querySelector(".usernameInput");


formUpdate.addEventListener('submit', (e) => {
    e.preventDefault;
    let inputUsernameValue = inputUsername.value;
    chat1.updateUsername(inputUsernameValue);
    console.log(inputUsernameValue);
});


buttonSend.addEventListener('click', (e) => {
    e.preventDefault();
    let inputMessageValue = inputMessage.value;
    chat1.addChat(inputMessageValue);
    chat1.getChats((data) => {
        chatUi.templateLi(data);
    })
})
