import { Popup } from './Popup.js';

export class PopupWithConfirmation 
extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this._popupItem.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._callbackSubmitForm();
    });
  }

  setSubmitAction(action) {
    this._callbackSubmitForm = action;
  }
}
