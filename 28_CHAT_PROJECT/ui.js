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

  templateLi(object) {
      let li = `<li>${object.username}: ${object.message} (${object.created_at})<li>`;
      this.element.innerHTML += li;
  }
}

export default ChatUi