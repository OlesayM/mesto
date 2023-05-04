export class UserInfo {
  constructor({
    userNameSelector,
    userOccupationSelector,
    userAvatarSelector,
  }) {
    this._userName = document.querySelector(userNameSelector);
    this._userOccupation = document.querySelector(userOccupationSelector);
    this._userAvatarSelector = document.querySelector(userAvatarSelector);
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
  //изменение аватара пользователя (обновляет ссылку через src)
  setAvatar(data) {
    this._userAvatarSelector.src = data;
  }
}
