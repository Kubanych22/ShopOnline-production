/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 963:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ createBannerWithTimer)
/* harmony export */ });
const createBannerWithTimer = () => {
  const main = document.querySelector('.main');
  const banner = document.createElement('section');
  banner.classList.add('banner', 'banner-container');
  const container = document.createElement('div');
  container.classList.add('container');
  const title = document.createElement('h1');
  title.classList.add('visually-hidden');
  title.textContent = 'Интернет магазин ShopOnline';
  const offer = document.createElement('div');
  offer.classList.add('banner__offer', 'offer');
  const offerTitle = document.createElement('h2');
  offerTitle.classList.add('offer__title');
  offerTitle.textContent = '-50% на все ноутбуки';
  offerTitle.setAttribute('tabindex', '0');
  const offerText = document.createElement('p');
  offerText.classList.add('offer__text');
  offerText.textContent = 'До конца акции:';
  offerText.setAttribute('tabindex', '0');
  const offerTimer = document.createElement('div');
  offerTimer.classList.add('offer__timer');
  const timer = document.createElement('div');
  timer.classList.add('timer');
  timer.dataset.timerDeadline = '2024/03/20 20:23'; // Установка deadline

  const timerDay = document.createElement('div');
  timerDay.classList.add('timer__day');
  const timerDayNumber = document.createElement('span');
  timerDayNumber.classList.add('timer__day-number');
  const timerDayWord = document.createElement('span');
  timerDayWord.classList.add('timer__word');
  timerDayWord.textContent = 'дня';
  timerDay.append(timerDayNumber, timerDayWord);
  const timerHour = document.createElement('div');
  timerHour.classList.add('timer__hour');
  const timerHourNumber = document.createElement('span');
  timerHourNumber.classList.add('timer__hour-number');
  const timerHourWord = document.createElement('span');
  timerHourWord.classList.add('timer__word');
  timerHourWord.textContent = 'часов';
  timerHour.append(timerHourNumber, timerHourWord);
  const timerMinute = document.createElement('div');
  timerMinute.classList.add('timer__minute');
  const timerMinuteNumber = document.createElement('span');
  timerMinuteNumber.classList.add('timer__minute-number');
  const timerMinuteWord = document.createElement('span');
  timerMinuteWord.classList.add('timer__word');
  timerMinuteWord.textContent = 'минуты';
  timerMinute.append(timerMinuteNumber, timerMinuteWord);
  const timerSeconds = document.createElement('div');
  timerSeconds.classList.add('timer__seconds');
  const timerSecondsNumber = document.createElement('span');
  timerSecondsNumber.classList.add('timer__seconds-number');
  const timerSecondsWord = document.createElement('span');
  timerSecondsWord.classList.add('timer__word');
  timerSecondsWord.textContent = 'секунды';
  timerSeconds.append(timerSecondsNumber, timerSecondsWord);
  timer.append(timerDay, timerHour, timerMinute, timerSeconds);
  offerTimer.append(offerText, timer);
  offer.append(offerTitle, offerTimer);
  container.append(title, offer);
  banner.append(container);
  main.prepend(banner);
};

/***/ }),

/***/ 621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ createTimer)
/* harmony export */ });
const createTimer = deadline => {
  const timerDay = document.querySelector('.timer__day-number');
  const timerHour = document.querySelector('.timer__hour-number');
  const timerMinute = document.querySelector('.timer__minute-number');
  const timerSeconds = document.querySelector('.timer__seconds-number');
  const day = timerDay.parentElement;
  const seconds = timerSeconds.parentElement;
  const getTimeRemaining = () => {
    const dateStop = new Date(deadline);
    const dateNow = new Date();
    let hourUTC = new Date().getTimezoneOffset() / 60;
    hourUTC < 0 ? hourUTC += 3 : hourUTC -= 3;
    dateNow.setHours(dateNow.getHours() + hourUTC);
    const timeRemaining = dateStop - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds
    };
  };
  const declensionNum = (num, words) => {
    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  };
  const start = () => {
    let intervalId, delay;
    const timer = getTimeRemaining();
    const timerBlock = document.querySelector('.offer__timer');
    if (timer.days !== 0) {
      timerDay.textContent = '' + timer.days;
      timerDay.nextSibling.textContent = declensionNum(timer.days, ['день', 'дня', 'дней']);
      seconds.remove();
      timerBlock.style.backgroundColor = '#890005';
      delay = 1000 * 60;
    } else {
      day.remove();
      timerBlock.style.backgroundColor = '#566b35';
      delay = 1000;
    }
    timerHour.textContent = ('0' + timer.hours).slice(-2);
    timerHour.nextSibling.textContent = declensionNum(timer.hours, ['час', 'часа', 'часов']);
    timerMinute.textContent = ('0' + timer.minutes).slice(-2);
    timerMinute.nextSibling.textContent = declensionNum(timer.minutes, ['минута', 'минуты', 'минут']);
    timerSeconds.textContent = ('0' + timer.seconds).slice(-2);
    timerSeconds.nextSibling.textContent = declensionNum(timer.seconds, ['секунда', 'секунды', 'секунд']);
    intervalId = setTimeout(start, delay);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerBlock.remove();
    }
  };
  start();
};

/***/ }),

/***/ 640:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _createBannerWithTimer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(963);
/* harmony import */ var _createTimer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(621);


const menuBtn = document.querySelector('.navigation__menu-btn');
const menu = document.querySelector('.menu');
(0,_createBannerWithTimer_js__WEBPACK_IMPORTED_MODULE_0__/* .createBannerWithTimer */ .o)();
const dataTimerDeadline = document.querySelector('.timer');
const deadline = dataTimerDeadline.dataset.timerDeadline.trim();
(0,_createTimer_js__WEBPACK_IMPORTED_MODULE_1__/* .createTimer */ .C)(deadline);
menuBtn.addEventListener('click', evt => {
  evt.preventDefault();
  menuBtn.classList.toggle('close-btn');
  menu.classList.toggle('open');
  const menuListWrap = menu.querySelector('.menu__wrap');
  const menuList = menuListWrap.children;
  for (const item of menuList) {
    const innerItem = [...item.querySelectorAll('.inner__list')];
    for (const elem of innerItem) {
      const parent = elem.parentElement;
      parent.addEventListener('click', evt => {
        const target = evt.target;
        const ul = target.querySelector('.inner__list');
        if (ul) {
          ul.classList.toggle('expand');
        }
      });
    }
  }
});

/***/ }),

/***/ 777:
/***/ (() => {

const preload = {
  circle: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180" fill="none">
  <path d="M142.5 60L112.5 90H135C135 114.825 114.825 135 90 135C82.425 135 75.225 133.125 69 129.75L58.05 140.7C67.275 146.55 78.225 150 90 150C123.15 150 150 123.15 150 90H172.5L142.5 60ZM45 90C45 65.175 65.175 45 90 45C97.575 45 104.775 46.875 111 50.25L121.95 39.3C112.725 33.45 101.775 30 90 30C56.85 30 30 56.85 30 90H7.5L37.5 120L67.5 90H45Z" fill="black"/>
</svg>`,
  overlay: document.createElement('div'),
  show() {
    this.overlay.classList.add('overlay');
    this.overlay.innerHTML = this.circle;
    this.overlay.style.minHeight = '2000px';
    const main = document.querySelector('main');
    main.prepend(this.overlay);
  },
  remove() {
    this.overlay.remove();
  }
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (preload)));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(963);
/******/ 	__webpack_require__(621);
/******/ 	__webpack_require__(640);
/******/ 	var __webpack_exports__ = __webpack_require__(777);
/******/ 	
/******/ })()
;