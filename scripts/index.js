const editProfileButton =document.querySelector('.profile__editbutton');
const userNameInput = document.querySelector('.popup__input_field_username');
const userOccupationInput = document.querySelector('.popup__input_field_occupation');
const userNameElement = document.querySelector('.profile__username');
const userOccupationElement = document.querySelector('.profile__occupation');
const formEditElement = document.getElementById('editForm');
const addProfileButton =document.querySelector('.profile__addbutton');
const addPopup =document.getElementById('addpopup');
const editPopup =document.getElementById('editpopup');
const photoPopup= document.getElementById('photopopup');
const elementBtnLike = document.querySelector('.description__like');
const buttonCloseEditPopup = editPopup.querySelector('.popup__close');
const buttonCloseAddPopup = addPopup.querySelector('.popup__close');
const buttonClosePhotoPopup = photoPopup.querySelector('.popup__close');
const cardsContainer=document.querySelector('.elements');
const formAddElement = document.getElementById('addForm');
const mestoInput = document.querySelector('.popup__input_field_mesto');
const linkInput = document.querySelector('.popup__input_field_link');
const popupPhoto = document.querySelector('.popup__photo');
const popupHeading = document.querySelector('.popup__heading');
const template = document.querySelector('#mesto-template').content;
const closeButtons = document.querySelectorAll('.popup__close');
const popups = document.querySelectorAll('.popup');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const popupEditValidate = new FormValidator(validationConfig, formEditElement);
popupEditValidate.enableValidation();
const popupAddValidate = new FormValidator(validationConfig, formAddElement);
popupAddValidate.enableValidation();
const resetAddFormValid = new FormValidator(validationConfig, formAddElement);
const resetEditFormValid = new FormValidator(validationConfig, formEditElement);
export {photoPopup, popupPhoto, popupHeading, openPopup};
import {Card} from './Сard.js';
import {FormValidator} from './FormValidator.js';
import {validationConfig} from './utils/constants/constants.js';

//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener("keydown", closeEscPopup);
}

//Закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener("keydown", closeEscPopup);
}
const closeEscPopup = (evt) => {
  if (evt.key === "Escape") {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
}

//сабмит для формы редактирования
function submitEditProfileForm(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopup(editPopup);
  }

//создание карточки
function createCard(item) {
    const cardElement = new Card(item, '#mesto-template');
    return cardElement.generateCard();
}

//добавление карточки
function addCard(item) {
  const cardElement = createCard(item, '#mesto-template');
  cardsContainer.prepend(cardElement);
}
initialCards.forEach(addCard);


function handleCardAddSubmit(evt) {
  evt.preventDefault();
  const card = {
      name: mestoInput.value,
      link: linkInput.value,
      alt: mestoInput.value,
  };
  addCard(card);
  closePopup(addPopup);
  evt.target.reset();
  
}

addProfileButton.addEventListener('click', function(){
  resetAddFormValid.resetValidate();
  openPopup(addPopup);
});

editProfileButton.addEventListener('click', function(){
  resetEditFormValid.resetValidate();
  openPopup(editPopup);
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

closeButtons.forEach(function(button){
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formEditElement.addEventListener('submit', submitEditProfileForm);
  
formAddElement.addEventListener('submit', handleCardAddSubmit);

const closeOverlayPopup = (evt) => {
  if (evt.target === evt.currentTarget) {
    const openForm = document.querySelector('.popup_open');
    closePopup(openForm);
  } 
}
popups.forEach(function(popup){
  popup.addEventListener('click', closeOverlayPopup);
});
