export class UserInfo {
  constructor({ userNameSelector, userOccupationSelector }) {
    this._userNameSelector = userNameSelector;
    this._userOccupationSelector = userOccupationSelector;
    this._userName = document.querySelector(this._userNameSelector);
    this._userOccupation = document.querySelector(this._userOccupationSelector);
  }

  //возвращает объект с данными пользователя
  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userOccupation: this._userOccupation.textContent,
    };
  }
  
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo({ userName, userOccupation }) {
    this._userName.textContent = userName;
    this._userOccupation.textContent = userOccupation;
  }
}
