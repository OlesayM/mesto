import './index.css';
import {
  editProfileButton,
  userNameInput,
  userOccupationInput,
  formEditElement,
  addProfileButton,
  formAddElement, 
  initialCards
}  from '../components/utils/elements.js';
import {Card} from '../components/Сard.js';
import {FormValidator} from '../components/FormValidator.js';
import {validationConfig} from '../components/utils/constants.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {UserInfo} from '../components/UserInfo.js';
import {Section} from '../components/Section.js';

// валидация попапов
const popupEditValidate = new FormValidator(validationConfig, formEditElement);
popupEditValidate.enableValidation();
const popupAddValidate = new FormValidator(validationConfig, formAddElement);
popupAddValidate.enableValidation();

const renderedCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    renderedCard.addItem(cardElement);
  },
},
  ".elements"
); 
renderedCard.renderItems();

function createCard(item) {
  const newCard = new Card(
    {
      data: item,
      handleCardClick: (name, link) => {
        popupZoomPhoto.open(name, link);
      },
    },
    '#mesto-template'
  )
  const cardElement = newCard.generateCard();
  return cardElement;
};

//Popup с картинкой
const popupZoomPhoto = new PopupWithImage('#photopopup');
popupZoomPhoto.setEventListeners();

//инфо о пользователе
const profileInfo = new UserInfo({
  userNameSelector: '.profile__username',
  userOccupationSelector: '.profile__occupation',
});

//Popup профиль пользователя
const popupEditProfile = new PopupWithForm ('.popup_profile', {
  callbackSubmitForm: (userInfo) => {
    profileInfo.setUserInfo({userName: userInfo['username__form'], userOccupation: userInfo['occupation__form']});
    popupEditProfile.close();
  },
});
popupEditProfile.setEventListeners();
editProfileButton.addEventListener('click', () => {
  const userData = profileInfo.getUserInfo();
  popupEditProfile.open();
  popupEditValidate.resetValidate();
  userNameInput.value = userData.userName;
  userOccupationInput.value = userData.userOccupation;
});

//Popup добавления карточки места
const popupMestoWithForm = new PopupWithForm('.popup_mesto', {
  callbackSubmitForm: (data) => {
    const newCard = createCard({name: data['name__form'], link: data['link__form']})
    renderedCard.addItem(newCard);
    popupMestoWithForm.close();
  },
});
popupMestoWithForm.setEventListeners();
addProfileButton.addEventListener('click', () => {
  popupMestoWithForm.open();
  popupAddValidate.resetValidate();
});








