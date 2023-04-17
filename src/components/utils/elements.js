export const editProfileButton =document.querySelector('.profile__editbutton');
export const userNameInput = document.querySelector('.popup__input_field_username');
export const userOccupationInput = document.querySelector('.popup__input_field_occupation');
export const userNameElement = document.querySelector('.profile__username');
export const formEditElement = document.getElementById('editForm');
export const addProfileButton =document.querySelector('.profile__addbutton');
export const formAddElement = document.getElementById('addForm');
const arkhyzPhoto = new URL ('../../images/arkhyz.jpg', import.meta.url);
const chelyabinskPhoto = new URL ('../../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovoPhoto = new URL ('../../images/ivanovo.jpg', import.meta.url);
const kamchatkaPhoto = new URL ('../../images/kamchatka.jpg', import.meta.url);
const kholmogorskPhoto = new URL ('../../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikalPhoto = new URL ('../../images/baikal.jpg', import.meta.url);
export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyzPhoto,
  },
  {
    name: 'Челябинская область',
    link: chelyabinskPhoto,
  },
  {
    name: 'Иваново',
    link: ivanovoPhoto,
  },
  {
    name: 'Камчатка',
    link: kamchatkaPhoto,
  },
  {
    name: 'Холмогорский район',
    link: kholmogorskPhoto,
  },
  {
    name: 'Байкал',
    link: baikalPhoto,
  }
];