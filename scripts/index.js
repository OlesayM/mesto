const editProfileButton =document.querySelector('.profile__editbutton');
const userNameInput = document.querySelector('.popup__input_field_username');
const userOccupationInput = document.querySelector('.popup__input_field_occupation');
const userNameElement = document.querySelector('.profile__username');
const userOccupationElement = document.querySelector('.profile__occupation');
const formElement = document.querySelector('.popupform');
const addProfileButton =document.querySelector('.profile__addbutton');
const addPopup =document.getElementById('addpopup');
const editPopup =document.getElementById('editpopup');
const photoPopup= document.getElementById('photopopup');
const elementBtnLike = document.querySelector('.description__like');
const buttonCloseEditPopup = editPopup.querySelector('.popup__close');
const buttonCloseAddPopup = addPopup.querySelector('.popup__close');
const buttonClosePhotoPopup = photoPopup.querySelector('.popup__close');
const cardsContainer=document.querySelector('.elements');
const formAddElement = document.querySelector('.popupaddform');
const mestoInput = document.querySelector('.popup__input_field_mesto');
const linkInput = document.querySelector('.popup__input_field_link');
const popupPhoto = document.querySelector('.popup__photo');
const popupHeading = document.querySelector('.popup__heading');
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

//открыть попап
function openPopup(pop_up) {
  pop_up.classList.add('popup_open');
  
}

//Закрыть попап
function closePopup(pop_up) {
  pop_up.classList.remove('popup_open');
}

//сабмит для формы редактирования
function handleFormSubmit(evt){
  evt.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopup(editPopup);
  }

//создание карточки
function createCard(card) {
  const newCard = document.querySelector('#mesto-template').content.cloneNode(true);
  const cardPhoto = newCard.querySelector('.element__img');
  cardPhoto.src = card.link;
  cardPhoto.alt = card.name;
  const cardName = newCard.querySelector('.description__name');
  cardName.textContent = card.name;
  const cardLike = newCard.querySelector('.description__like');
  cardLike.addEventListener('click', function toggleLikeButtun (evt) {
  evt.target.classList.toggle('description__like_active')})
  const buttonDelete = newCard.querySelector('.element__deleteButton');
  buttonDelete.addEventListener('click',deleteButtonClick)
  cardsContainer.prepend(newCard);
  cardPhoto.addEventListener('click', function() {
    popupPhoto.src = card.link;
    popupHeading.textContent = card.name;
    popupPhoto.setAttribute('alt', card.name);
    openPopup(photoPopup);
    })
  }
  initialCards.forEach(createCard);

//создание новой карточки
function handleAddFormSubmit(evt){
  evt.preventDefault();
  const mestoElement = document.querySelector('#mesto-template').content.cloneNode(true);
  mestoElement.querySelector('.element__img').src = linkInput.value;
  mestoElement.querySelector('.element__img').alt = mestoInput.value;
  mestoElement.querySelector('.description__name').textContent = mestoInput.value;
  mestoElement.querySelector('.description__like').addEventListener('click', function toggleLikeButtun (evt) {
    evt.target.classList.toggle('description__like_active')})
  mestoElement.querySelector('.element__deleteButton').addEventListener('click',deleteButtonClick);
  mestoElement.querySelector('.element__img').addEventListener('click', function(){
    popupPhoto.src = linkInput.value;
    popupHeading.textContent = mestoInput.value;
    popupPhoto.alt = mestoInput.value;
    openPopup(photoPopup);
  });
    cardsContainer.prepend(mestoElement);
  closePopup(addPopup);
  }

//удалить карточку
function deleteButtonClick(evt){
  const button = evt.target
  const card = button.closest('.element')
  card.remove()
  }

addProfileButton.addEventListener('click', function(){
  openPopup(addPopup);
  mestoInput.value="";
  linkInput.value="";
});

editProfileButton.addEventListener('click', function(){
  openPopup(editPopup)
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

buttonCloseEditPopup.addEventListener('click',function(){
  closePopup(editPopup)
});

buttonCloseAddPopup.addEventListener('click',function(){
  closePopup(addPopup)
});

buttonClosePhotoPopup.addEventListener('click',function(){
  closePopup(photoPopup)
});

formElement.addEventListener('submit', handleFormSubmit);
  
formAddElement.addEventListener('submit', handleAddFormSubmit);




