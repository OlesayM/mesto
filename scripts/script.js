let editPopup =document.querySelector('.popup');
console.log(editPopup);
let editProfilButton =document.querySelector('.profile__editbuttom');
console.log(editProfilButton);
editProfilButton.addEventListener('click', function () {
  /*console.log('Мы кликнули по элементу');*/
  editPopup.classList.add('popup__open');
});
let closePopup =document.querySelector('.popup__close');
console.log(closePopup);
closePopup.addEventListener('click', function () {
  /*console.log('Мы кликнули по элементу');*/
  editPopup.classList.remove('popup__open');
});