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
    
    dateMethod(date) {
        let d = date.getDay();
        let m = date.getMonth()+1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();

        // Jelena resenje:
        // d = String(d).padStart(2, "0");
        // m = String(m).padStart(2,"0");
        // h = String(h).padStart(2,"0");
        // min = String(min).padStart(2, "0");

        // Darko resenje:

        return `${d < 9 ? "0" + d : d}.${m < 9 ? "0" + m : m}.${y}.   ${h < 9 ? "0" + h : h}:${min < 9 ? "0" + min : min}`;
    }

  templateLi(object) {
    let dateFormat = object.created_at.toDate();

    let li = `<li>${object.username}: ${
      object.message
    } (${this.dateMethod(dateFormat)})</li>`;
    this.element.innerHTML += li;
  }
}

export default ChatUi;
