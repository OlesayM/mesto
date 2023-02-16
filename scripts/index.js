let popup =document.querySelector('.popup');
let editProfileButton =document.querySelector('.profile__editbutton');
let openPopup =document.querySelector('.popup_open');
let closePopup =document.querySelector('.popup__close');
let userNameInput = document.querySelector('.popup__input_field_username');
let userOccupationInput = document.querySelector('.popup__input_field_occupation');
let userNameElement = document.querySelector('.profile__username');
let userOccupationElement = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popupform');

function openPopupForm() {
  popup.classList.add('popup_open');
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
}

function closePopupForm() {
  popup.classList.remove('popup_open');
}

function handleFormSubmit(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopupForm();
  }
  
editProfileButton.addEventListener('click', openPopupForm);
closePopup.addEventListener('click', closePopupForm);
formElement.addEventListener('submit', handleFormSubmit)

