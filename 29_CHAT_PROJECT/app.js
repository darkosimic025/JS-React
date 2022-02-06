import Chatroom from "./chat.js";
import ChatUi from "./public/ui.js"

// chat1
//   .addChat("Neka poruka")
//   .then(() => {
//     console.log("Uspesno dodat cet");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(chat1.username);


let chat1 = new Chatroom(localStorage.room? localStorage.room : "general", localStorage.username? localStorage.username : "anonymous");
let lista = document.getElementById('chatMessages');
let chatUii = new ChatUi(lista);


let bodyBackground = document.querySelector("body");
bodyBackground.style.backgroundImage = `linear-gradient(to right bottom, ${localStorage.color}, ${localStorage.color2}`




chat1.getChats((d) => {
    chatUii.templateLi(d)
});

let dateInput1 = document.querySelector(".dateSearch__input--primary");
let dateInput2 = document.querySelector(".dateSearch__input--secondary");
let dateForm = document.querySelector(".dateSearch");


let colorPickerInput = document.querySelector(".colorPicker__input");
let colorPickerInput2 = document.querySelector(".colorPicker__input--secondary");
let formColorPicker = document.querySelector(".colorPicker");

let inputMessage = document.querySelector(".message__input");
let formSend = document.querySelector(".message");

let inputUsername = document.querySelector(".username__input");
let formUpdate = document.querySelector(".username");

let navBar = document.querySelector(".navMenu");
let usernameLogo = document.querySelector(".usernameLogo");
// usernameLogo.innerHTML = localStorage.username.slice(0,1);

let messageDelete = document.querySelector("#chatMessages");

formSend.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputMessageValue = inputMessage.value;
    if (inputMessageValue.length > 0) {
        chat1.addChat(inputMessageValue)
            .then(() => formSend.reset())
            .catch(error => console.log(error));
    } else {
        alert("Prazna poruka");
    }

})

formUpdate.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputUsernameValue = inputUsername.value;
    chat1.updateUsername(inputUsernameValue);
    formUpdate.reset();
    usernameLogo.innerHTML = inputUsernameValue;
    location.reload();
});

navBar.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.tagName == "BUTTON") {
        chatUii.clearChat();
        chat1.updateRoom(event.target.id);
        chat1.getChats((data) => {
            chatUii.templateLi(data)
        })
    }
    localStorage.setItem("room", event.target.id)
})

messageDelete.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.tagName == "I") {
        confirm("Da li ste sigurni?");
        let idMessage = event.target.parentElement.parentElement.parentElement;
        if (event.target.parentElement.parentElement.parentElement.parentElement.id == localStorage.username) {
            idMessage.remove();
            chat1.deleteMessage(event.target.parentElement.parentElement.parentElement.id);
        } else {
            idMessage.remove();
        }       
    }
})

formColorPicker.addEventListener('submit', event => {
    event.preventDefault();
    let colorPickerValue = colorPickerInput.value;
    let colorPickerValue2 = colorPickerInput2.value;
    let bodyBackground = document.querySelector("body");
    setTimeout(() => { bodyBackground.style.backgroundImage = `linear-gradient(to right bottom, ${colorPickerValue}, ${colorPickerValue2}` }, 1000);
    localStorage.setItem("color", colorPickerValue);
    localStorage.setItem("color2", colorPickerValue2);
})

dateForm.addEventListener('submit', event => {
    event.preventDefault();
    let dateInputValue1 = dateInput1.value;
    let start = new Date(dateInputValue1);
    start = firebase.firestore.Timestamp.fromDate(start);
    let dateInputValue2 = dateInput2.value; 
    let end = new Date(dateInputValue2);
    end = firebase.firestore.Timestamp.fromDate(end);
    chatUii.clearChat();
    chat1.filterChats((data) => {
        chatUii.templateLi(data)
    },  start , end)  
})