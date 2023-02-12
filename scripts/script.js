let editPopup =document.querySelector('.popup');
let editProfilButton =document.querySelector('.profile__editbuttom');
editProfilButton.addEventListener('click', function () {
   editPopup.classList.add('popup__open');
});
let closePopup =document.querySelector('.popup__close');
closePopup.addEventListener('click', function () {
  editPopup.classList.remove('popup__open');
});
let userName = 'Жак-Ив Кусто';
let userOccupation = 'Исследователь океана';
let userNameElement = document.querySelector('.profile__username');
userNameElement.textContent =userName;
let userOccupationElement = document.querySelector('.profile__occupation');
userOccupationElement.textContent =userOccupation;
let userNameInput = document.querySelector('.popup__text-input_username');
userNameInput.value = userName;
let userOccupationInput = document.querySelector('.popup__text-input_occupation');
userOccupationInput.value = userOccupation;
let formElement = document.querySelector('.popup__container');
let handleFormSubmit = function(evt){
  evt.preventDefault();
  inputUserName = document.querySelector(".popup__text-input_username").value;
  inputUserOccupation = document.querySelector(".popup__text-input_occupation").value;
  let userOccupationElement = document.querySelector('.profile__occupation');
  userOccupationElement.textContent= inputUserOccupation;
  let userNameElement = document.querySelector('.profile__username');
  userNameElement.textContent= inputUserName;
  editPopup.classList.remove('popup__open');
  }
formElement.addEventListener('submit',handleFormSubmit)

