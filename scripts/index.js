let popup =document.querySelector('.popup');
let editProfileButton =document.querySelector('.profile__editbuttom');
let openPopup =document.querySelector('.popup_open');
let closePopup =document.querySelector('.popup__close');
let userNameInput = document.querySelector('input[name="editForm_username"]');
let userOccupationInput = document.querySelector('input[name="editForm_occupation"]');
let userNameElement = document.querySelector('.profile__username');
let userOccupationElement = document.querySelector('.profile__occupation');
let formElement = document.querySelector('form[name="editForm"]');

function openPopup_form() {
  popup.classList.add('popup_open');
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
}

function closePopup_form() {
  popup.classList.remove('popup_open');
}

function handleFormSubmit(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopup_form();
  }
  
editProfileButton.addEventListener('click', openPopup_form);
closePopup.addEventListener('click', closePopup_form);
formElement.addEventListener('submit', handleFormSubmit)

