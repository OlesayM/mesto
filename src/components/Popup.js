export class Popup {
  constructor(popupSelector) {
    this._popupItem = document.querySelector(popupSelector);
  }

  open() {
    this._popupItem.classList.add('popup_open');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popupItem.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // закрыть popup по нажатию на Escape
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  };
  
  // закрыть popup по клику за область формы (включая крестик)
  setEventListeners() {
    this._popupItem.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains('popup_open') ||
        evt.target.classList.contains('popup__close')
      ) {
        this.close();
      }
    });
  }
}
