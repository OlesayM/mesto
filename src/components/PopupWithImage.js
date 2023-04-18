import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPhoto = this._popupItem.querySelector('.popup__photo');
    this._popupHeading = this._popupItem.querySelector('.popup__heading');
  }

  open(name, link) {
    this._popupPhoto.src = link;
    this._popupPhoto.alt = name;
    this._popupHeading.textContent = name;
    super.open();
  }
}
