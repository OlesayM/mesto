(()=>{"use strict";var t=document.querySelector(".profile__editbutton"),e=document.querySelector(".popup__input_field_username"),n=document.querySelector(".popup__input_field_occupation"),r=(document.querySelector(".profile__username"),document.getElementById("editForm")),o=document.querySelector(".profile__addbutton"),i=document.getElementById("addForm"),u=document.querySelector(".profile__avatar-button"),a=document.getElementById("updateAvatar");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var s=function(){function t(e,n,r,o,i){var u=o.handleDeleteIconClick,a=o.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._handleCardClick=r,this._cardTemplateSelector=n,this._ownerId=e.owner._id,this._likes=e.likes,this._userId=i,this._likesId=e.likes._id,this._handleDeleteIconClick=u,this._handleCardLike=a}var e,n;return e=t,(n=[{key:"_getTemlate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t._handleCardLike(t)})),this._deleteButton.addEventListener("click",(function(){return t._handleDeleteIconClick(t)})),this._cardPhoto.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"generateCard",value:function(){var t=this;return this._element=this._getTemlate(),this._cardPhoto=this._element.querySelector(".element__img"),this._cardPhoto.src=this._link,this._cardPhoto.alt=this._name,this._element.querySelector(".description__name").textContent=this._name,this._likeButton=this._element.querySelector(".description__like"),this._deleteButton=this._element.querySelector(".element__deleteButton"),this._countLike=this._element.querySelector(".description__like-counter"),this._countLike.textContent=this._likes.length,this._setEventListeners(),this._userId!==this._ownerId&&this._deleteButton.remove(),this._likes.forEach((function(e){e._id===t._userId&&t._likeButton.classList.add("description__like_active")})),this._element}},{key:"isLiked",value:function(){return this._likeButton.classList.contains("description__like_active")}},{key:"likeCard",value:function(t){this._countLike.textContent=t,this._likeButton.classList.toggle("description__like_active")}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function y(t,e,n){return(e=h(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var v=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r.validationConfig.inputErrorClass),n.textContent=e,n.classList.add(r.validationConfig.errorClass)})),y(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.validationConfig.inputErrorClass),e.classList.remove(r.validationConfig.errorClass),e.textContent=""})),y(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),y(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),y(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._buttonElement.classList.add(r.validationConfig.inactiveButtonClass),r._buttonElement.setAttribute("disabled","true")):(r._buttonElement.classList.remove(r.validationConfig.inactiveButtonClass),r._buttonElement.removeAttribute("disabled"))})),y(this,"_setEventListeners",(function(){r._toggleButtonState(),r._formElement.addEventListener("reset",(function(){setTimeout((function(){r._toggleButtonState()}),0)})),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),y(this,"enableValidation",(function(){r._inputList.forEach((function(t){r._setEventListeners()}))})),this.validationConfig=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this.validationConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this.validationConfig.submitButtonSelector)}var e,n;return e=t,(n=[{key:"resetValidate",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),m={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_(r.key),r)}}function _(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===d(e)?e:String(e)}var S=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(t){"Escape"===t.key&&i.close()},(r=_(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popupItem=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popupItem.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popupItem.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_open")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popupItem.querySelector(".popup__photo"),e._popupHeading=e._popupItem.querySelector(".popup__heading"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupPhoto.src=e,this._popupPhoto.alt=t,this._popupHeading.textContent=t,k(P(u.prototype),"open",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.callbackSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._callbackSubmitForm=r,n._formElement=n._popupItem.querySelector(".popup__form"),n._inputList=Array.from(n._formElement.querySelectorAll(".popup__input")),n._buttonElement=n._formElement.querySelector(".popup__button"),n._buttonSaveText=n._buttonElement.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;L(T(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm(t._getInputValues())}))}},{key:"putSavingProcessText",value:function(){this._buttonElement.textContent="Сохранение..."}},{key:"returnSavingProcessText",value:function(){this._buttonElement.textContent=this._buttonSaveText}},{key:"close",value:function(){L(T(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&C(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var R=function(){function t(e){var n=e.userNameSelector,r=e.userOccupationSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userOccupation=document.querySelector(r),this._userAvatarSelector=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userOccupation:this._userOccupation.textContent}}},{key:"setUserInfo",value:function(t){var e=t.userName,n=t.userOccupation;this._userName.textContent=e,this._userOccupation.textContent=n}},{key:"setAvatar",value:function(t){this._userAvatarSelector.src=t}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var N=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){t.reverse().forEach(this._renderer)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var F=function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var e,n;return e=t,(n=[{key:"_responseStatus",value:function(t){return t.ok?t.json():Promise.reject("код ошибки: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._responseStatus)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._responseStatus)}},{key:"setProfileInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.about})}).then(this._responseStatus)}},{key:"setNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._responseStatus)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._responseStatus)}},{key:"putLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes/"),{method:"PUT",headers:this._headers}).then(this._responseStatus)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes/"),{method:"DELETE",headers:this._headers}).then(this._responseStatus)}},{key:"removeCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t._id),{method:"DELETE",headers:this._headers}).then(this._responseStatus)}},{key:"getServerData",value:function(){return Promise.all([this.getInitialCards(),this.getProfileInfo()])}}])&&V(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function M(){return M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},M.apply(this,arguments)}function z(t,e){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},z(t,e)}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var G,K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&z(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=$(r);if(o){var n=$(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popupItem.querySelector(".popup__form"),e}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;M($(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._callbackSubmitForm()}))}},{key:"setSubmitAction",value:function(t){this._callbackSubmitForm=t}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function Q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var W=new v(m,r);W.enableValidation();var X=new v(m,i);X.enableValidation(),new v(m,a).enableValidation();var Y=new K("#confirmpopup");Y.setEventListeners();var Z=new R({userNameSelector:".profile__username",userOccupationSelector:".profile__occupation",userAvatarSelector:".profile__avatar"}),tt=new N({renderer:function(t){var e=nt(t);tt.addItem(e)}},".elements");function et(t,e){ot.open(t,e)}function nt(t){var e=new s(t,"#mesto-template",et,{handleDeleteIconClick:function(e){Y.open(),Y.setSubmitAction((function(){rt.removeCard(t).then((function(t){e.deleteCard(t),Y.close()})).catch((function(t){console.log("При удалении карточки возникла ошибка, ".concat(t))}))}))},handleCardLike:function(){e.isLiked()?rt.deleteLike(t._id).then((function(t){e.likeCard(t.likes.length)})).catch((function(t){console.log("При удалении лайка возникла ошибка, ".concat(t))})):rt.putLike(t._id).then((function(t){e.likeCard(t.likes.length)})).catch((function(t){console.log("При добавлении лайка возникла ошибка, ".concat(t))}))}},G);return e.generateCard()}var rt=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"c5c2f5c6-6682-49c0-9c82-73ce1417a53d","Content-Type":"application/json"}});Promise.all([rt.getProfileInfo(),rt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return Q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];G=o._id,Z.setUserInfo({userName:o.name,userOccupation:o.about}),tt.renderItems(i),Z.setAvatar(o.avatar)})).catch((function(t){console.log("Возникла глобальная ошибка, ".concat(t))}));var ot=new O("#photopopup");ot.setEventListeners();var it=new x("#updatepopup",{callbackSubmitForm:function(t){it.putSavingProcessText(),rt.setUserAvatar(t).then((function(t){Z.setAvatar(t.avatar),it.close()})).catch((function(t){console.log("При обновлении аватара возникла ошибка, ".concat(t))})).finally((function(){it.returnSavingProcessText()}))}});it.setEventListeners();var ut=new x("#editpopup",{callbackSubmitForm:function(t){ut.putSavingProcessText(),rt.setProfileInfo(t).then((function(t){Z.setUserInfo({userName:t.name,userOccupation:t.about}),ut.close()})).catch((function(t){console.log("При редактировании профиля возникла ошибка, ".concat(t))})).finally((function(){ut.returnSavingProcessText()}))}});ut.setEventListeners();var at=new x("#addpopup",{callbackSubmitForm:function(t){at.putSavingProcessText(),rt.setNewCard(t).then((function(t){var e=nt(t);tt.addItem(e),at.close()})).catch((function(t){console.log("При добавлении карточки возникла ошибка, ".concat(t))})).finally((function(){at.returnSavingProcessText()}))}});at.setEventListeners(),u.addEventListener("click",(function(){it.open()})),t.addEventListener("click",(function(){ut.open(),W.resetValidate();var t=Z.getUserInfo();e.value=t.userName,n.value=t.userOccupation})),o.addEventListener("click",(function(){at.open(),X.resetValidate()}))})();