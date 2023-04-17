
export class Card {
    constructor({data, handleCardClick}, cardTemplateSelector){
      this._card = data;
      this._name = data.name;
      this._link = data.link;
      this._handleCardClick = handleCardClick;
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
      this._element = null;
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
        this._handleCardClick(this._name, this._link)
      }) ;
      
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