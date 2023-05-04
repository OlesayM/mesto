import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm }) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formElement = this._popupItem.querySelector('.popup__form');
    this._inputList = Array.from(
      this._formElement.querySelectorAll('.popup__input')
    );
    this._buttonElement = this._formElement.querySelector('.popup__button');
    this._buttonSaveText = this._buttonElement.textContent;
  }

  _getInputValues() {
    const inputValue = {};
    this._inputList.forEach((input) => {
      inputValue[input.name] = input.value;
    });
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
    });
  }

  // Метод добавления кнопке текста в момент сохранения
  putSavingProcessText() {
    this._buttonElement.textContent = 'Сохранение...';
  }
  // Метод добавления стандартного текста кнопке
  returnSavingProcessText() {
    this._buttonElement.textContent = this._buttonSaveText;
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
