let popup =document.querySelector('.popup');
let editProfileButton =document.querySelector('.profile__editbutton');
let openPopup =document.querySelector('.popup_open');
let closePopup =document.querySelector('.popup__close');
let closeAddPopup =document.querySelector('button[name="close_mesto"]');
let userNameInput = document.querySelector('.popup__input_field_username');
let userOccupationInput = document.querySelector('.popup__input_field_occupation');
let userNameElement = document.querySelector('.profile__username');
let userOccupationElement = document.querySelector('.profile__occupation');
let formElement = document.querySelector('.popupform');
let addProfileButton =document.querySelector('.profile__addbutton');
let mestoInput = document.querySelector('.popup__input_field_mesto');
let linkInput = document.querySelector('.popup__input_field_link');
let formAddElement = document.querySelector('.popupaddform');
let addPopup =document.getElementById('addpopup');
let elementBtnLike = document.querySelector('.description__like');

//открыть форму редактирования профиля
function openPopupForm() {
  popup.classList.add('popup_open');
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
}
//открыть форму добавления места
function openPopupAddForm() {
  addPopup.classList.add('popup_open');
}
//закрыть форму редактирования профиля
function closePopupForm() {
  popup.classList.remove('popup_open');
}
//закрыть форму добавления места
function closePopupAddForm() {
  addPopup.classList.remove('popup_open');
}

function handleFormSubmit(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopupForm();
  }

  
  
  
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

  const elementsContainer=document.querySelector('.elements'); 
  

  initialCards.forEach(function (element) {
    const newElement = document.querySelector('#mesto-template').content.cloneNode(true);
    const elementPhoto = newElement.querySelector('.element__img');
    elementPhoto.src = element.link;
    const elementName = newElement.querySelector('.description__name');
    elementName.textContent = element.name;
    
    elementsContainer.append(newElement);
   })




   const elementLike = document.querySelector('.description__like');
   
    elementLike.addEventListener('click', function toggleLikeButtun (evt) {
    evt.target.classList.toggle('description__like_active')}
    )





