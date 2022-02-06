class ChatUi {
  constructor(e) {
    this.element = e;
  }

  set element(e) {
    this._element = e;
  }

  get element() {
    return this._element;
  }

  clearChat() {
    this.element.innerHTML = "";
  }

  dateMethod(date) {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    let h = date.getHours();
    let min = date.getMinutes();

    // Jelena resenje:
    // d = String(d).padStart(2, "0");
    // m = String(m).padStart(2,"0");
    // h = String(h).padStart(2,"0");
    // min = String(min).padStart(2, "0");

    // Darko resenje:

    let nowDate = new Date();
    let dNow = nowDate.getDate();
    let mNow = nowDate.getMonth() + 1;
    let yNow = nowDate.getFullYear();

    if (dNow == d && mNow == m && yNow == y) {
      return `${h <= 9 ? "0" + h : h}:${min <= 9 ? "0" + min : min}`;
    } else {
      return `${
        h <= 9 ? "0" + h : h
      }:${min <= 9 ? "0" + min : min}  ${d <= 9 ? "0" + d : d}.${m <= 9 ? "0" + m : m}.${y}.  ` ;
    }
  }

  // templateLi(object) {
  //   let dateFormat = object.created_at.toDate();

  //   let li = `<li class="listElement"><span class="iconName">${object.username.slice(0,1)}</span>  <span class="textMessage">${object.message}</span><span class="time">${this.dateMethod(dateFormat)}</span></li>`;
  //   this.element.innerHTML += li;
  // }

  templateLi(object) {
    let id = object.id;
    // let usernameDelte = object.username;
    object = object.data();
    let dateFormat = object.created_at.toDate();

    if (object.username == localStorage.username) {
      let li = `<div id="${object.username}">
                    <li id="${id}" class="listElement__active">  
                      <span class="textMessage textMessage__active"><span id="usernameDelete">${object.username}</span>: ${object.message}
                      <hr>
                        <div>${this.dateMethod(dateFormat)}
                              <i class="material-icons">delete
                              </i>
                        </div>
                    </span>
                </li></div>`;
      this.element.innerHTML += li;
    } else {
      let li = `<div id="${object.username}">
                  <li id="${id}" class="listElement">
                    <span class="textMessage"><span id="usernameDelete">${object.username}</span>: ${object.message}
                      <hr>
                         <div>${this.dateMethod(dateFormat)}
                              <i class="material-icons">delete
                              </i>
                        </div>
                    </span>
                </li> </div>`;
      
      this.element.innerHTML += li;
    }
  }
}

export default ChatUi;
