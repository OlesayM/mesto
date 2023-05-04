export class Card {
  constructor(
    data,
    cardTemplateSelector,
    handleCardClick,
    { handleDeleteIconClick, putLike, deleteLike },
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardTemplateSelector = cardTemplateSelector;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
    this._likesId = data.likes._id;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
  }

  _getTemlate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setliked() {
    if (!this._likeButton.classList.contains('description__like_active')) {
      this._likeButton.classList.add('description__like_active');
      this._putLike(this._likesId);
    } else {
      this._likeButton.classList.remove('description__like_active');
      this._deleteLike(this._likesId);
    }
  }

  counter(data) {
    this._countLike.textContent = data.likes.length;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._setliked());

    this._deleteButton.addEventListener('click', () =>
      this._handleDeleteIconClick(this)
    );

    this._cardPhoto.addEventListener('click', () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  generateCard() {
    this._element = this._getTemlate();
    this._cardPhoto = this._element.querySelector('.element__img');
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    this._element.querySelector('.description__name').textContent = this._name;
    this._likeButton = this._element.querySelector('.description__like');
    this._deleteButton = this._element.querySelector('.element__deleteButton');
    this._countLike = this._element.querySelector('.description__like-counter');
    this._countLike.textContent = this._likes.length;

    this._setEventListeners();

    if (this._userId !== this._ownerId) {
      this._deleteButton.remove();
    }

    this._likes.forEach((like) => {
      if (like._id === this._userId) {
        this._likeButton.classList.add('description__like_active');
      }
    });
    return this._element;
  }
}
