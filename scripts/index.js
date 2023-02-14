let Popup =document.querySelector('.popup');
let editProfileButton =document.querySelector('.profile__editbuttom');
let closePopup =document.querySelector('.popup__close');
let userNameInput = document.querySelector('.popup__text-input_username');
let userOccupationInput = document.querySelector('.popup__text-input_occupation');
let userNameElement = document.querySelector('.profile__username');
let userOccupationElement = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popup__container');

function OpenPopup_form() {
  Popup.classList.add('popup__open');
};

function ClosePopup_form() {
  Popup.classList.remove('popup__open');
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
};

function handleFormSubmit(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  ClosePopup_form();
  }
  
editProfileButton.addEventListener('click', OpenPopup_form);
closePopup.addEventListener('click', ClosePopup_form);
formElement.addEventListener('submit', handleFormSubmit)

