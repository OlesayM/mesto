const editProfileButton =document.querySelector('.profile__editbutton');
const userNameInput = document.querySelector('.popup__input_field_username');
const userOccupationInput = document.querySelector('.popup__input_field_occupation');
const userNameElement = document.querySelector('.profile__username');
const userOccupationElement = document.querySelector('.profile__occupation');
const formElement = document.getElementById('editForm');
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

//создаю карточку
function createCard(item) {
  const element = template.querySelector('.element').cloneNode(true);
  element.querySelector('.description__name').textContent = item.name;
  const elementImage = element.querySelector('.element__img');
  elementImage.src = item.link;
  elementImage.setAttribute('alt', item.name);
  element.querySelector('.description__like').addEventListener('click', function(event) {
    event.target.classList.toggle('description__like_active');
  })
  element.querySelector('.element__deleteButton').addEventListener('click', deleteButtonClick);
  element.querySelector('.element__img').addEventListener('click', function() {
    popupPhoto.src = item.link;
    popupHeading.textContent = item.name;
    popupPhoto.setAttribute('alt', item.name);
    openPopup(photoPopup);
    })
  return element;
}

//добавляю карточку в Dom
function renderCard(item) {
  const element = createCard(item);
  cardsContainer.prepend(element);
}

//добавляю карточки из массива в верстку
initialCards.forEach(function(item){
  renderCard(item)
});

//сабмит для формы добавления карточки
function handleAddFormSubmit(event) {
  event.preventDefault();
  const name = mestoInput.value;
  const link = linkInput.value;
  const item = {
    name: name,
    link: link
  }
  renderCard(item);
  event.target.reset();//очищаю форму
  closePopup(addPopup);;
}

//удалить карточку
function deleteButtonClick(evt){
  const button = evt.target
  const card = button.closest('.element')
  card.remove()
  }

addProfileButton.addEventListener('click', function(){
  const contentAddPopup = addPopup.querySelector('.popup__form');
  contentAddPopup.reset();
  resetValidError(addPopup, validationConfig);
  openPopup(addPopup);
});

editProfileButton.addEventListener('click', function(){
  resetValidError(editPopup, validationConfig);
  openPopup(editPopup);
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
});

closeButtons.forEach(function(button){
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

formElement.addEventListener('submit', submitEditProfileForm);
  
formAddElement.addEventListener('submit', handleAddFormSubmit);

const closeOverlayPopup = (evt) => {
  if (evt.target === evt.currentTarget) {
    const openForm = document.querySelector('.popup_open');
    closePopup(openForm);
  } 
}
popups.forEach(function(popup){
  popup.addEventListener('click', closeOverlayPopup);
});
