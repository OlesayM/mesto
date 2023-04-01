import { photoPopup, popupPhoto, popupHeading, openPopup} from './index.js'
export class Card {
    constructor(initialCards, cardTemplateSelector){
      this._name = initialCards.name;
      this._link = initialCards.link;
      this._cardTemplateSelector = cardTemplateSelector;
    }

    _getTemlate (){
      const cardElement = document
        .querySelector(this._cardTemplateSelector)
        .content.querySelector('.element')
        .cloneNode(true);
      return cardElement;  
    }

    _handleCardLike(){
     this._likeButton.classList.toggle('description__like_active');
      }

    _handleDeleteCard(){
      this._element.remove();
    }
    _openPhoto(){
      openPopup(photoPopup);
      popupPhoto.src = this._link;
      popupPhoto.alt = this._name;
      popupHeading.textContent = this._name;
    }
  
    _setEventListeners() {
      this._likeButton.addEventListener('click', () =>{
        this._handleCardLike();
      });

      this._deleteButton.addEventListener('click', () =>{
        this._handleDeleteCard();
      });

      this._cardPhoto.addEventListener('click', () =>{
        this._openPhoto();
      });
    }

    generateCard(){
      this._element = this._getTemlate();
      this._cardPhoto = this._element.querySelector('.element__img');
      this._cardPhoto.src = this._link;
      this._element.querySelector('.description__name').textContent = this._name;
      this._likeButton = this._element.querySelector('.description__like');
      this._deleteButton = this._element.querySelector('.element__deleteButton');
      this._setEventListeners();
      return this._element;
    }
  }