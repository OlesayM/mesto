
export class FormValidator {
  constructor(validationConfig, formElement){
    this.validationConfig = validationConfig;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this.validationConfig.inputSelector));
    this._buttonElement = this._formElement.querySelector(this.validationConfig.submitButtonSelector);
  }

  _showInputError = (inputElement, errorMessage) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this.validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this.validationConfig.errorClass);
  };

  _hideInputError = (inputElement) => {
  const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this.validationConfig.inputErrorClass);
  errorElement.classList.remove(this.validationConfig.errorClass);
  errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, inputElement.validationMessage);
  } else {
    this._hideInputError(inputElement);  }
  };

  _hasInvalidInput = () => {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
  }; 

  _toggleButtonState =() => {
  if (this._hasInvalidInput()) {
    this._buttonElement.classList.add(this.validationConfig.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', 'true');
  } else {
    this._buttonElement.classList.remove(this.validationConfig.inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }
  }; 

  _setEventListeners = () => {
    this._toggleButtonState();
    this._formElement.addEventListener("reset", () => {
    setTimeout(() => {
      this._toggleButtonState();
    }, 0);
  });

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
  }; 

  resetValidate() {
    this._inputList.forEach((inputItem) => { this._hideInputError(inputItem); })
    this._toggleButtonState();
  }
  
 enableValidation = () => {
this._inputList.forEach((formElement) => {
  this._setEventListeners();
  });
  }
}