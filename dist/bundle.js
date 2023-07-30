/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/gamecard.ts":
/*!*************************!*\
  !*** ./src/gamecard.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameCard: () => (/* binding */ createGameCard)
/* harmony export */ });
var createGameCard = function (backface, frontface) {
    var cards = document.createElement("div");
    cards.classList.add("game__card", "frontface-".concat(frontface));
    var flippedCard = document.createElement("i");
    var notFlippedCard = document.createElement("i");
    notFlippedCard.classList.add("backface", "backface-".concat(backface));
    flippedCard.classList.add("frontface", "frontface-".concat(frontface));
    cards.append(flippedCard, notFlippedCard);
    return cards;
};
// import { initialCardIcons } from "./cards.js";
// import { gameSection } from "./startgame.js";
// export const createGameCard = () => {
//   //const arrayCards = initialCardIcons;
//   initialCardIcons.forEach((icon) => {
//     const gameCardList = document.createElement("div");
//     gameCardList.classList.add("game__card_list");
//     gameSection.appendChild(gameCardList);
//     // gameCardList.append(notFlippedCard, flippedCard);
//     gameCardList.setAttribute('name', icon.name)
//     const cards = document.createElement("div");
//     cards.classList.add("game__card");
//     // const flippedCard = document.createElement("i"); // img?
//     // const notFlippedCard = document.createElement("i"); // img?
//     const flippedCard = document.createElement("img");
//     const notFlippedCard = document.createElement("img");
//     // notFlippedCard.classList.add("backface", 'back');
//     // flippedCard.classList.add("frontface", 'front');
//     flippedCard.src = icon.imgSrc;
//     notFlippedCard.src = '/static/shirt.png'
//     notFlippedCard.classList.add("backface", `backface-${backface}`);
//     flippedCard.classList.add("frontface", `frontface-${icon.name}`);
//     cards.append(flippedCard, notFlippedCard);
//   });
// };


/***/ }),

/***/ "./src/menu.ts":
/*!*********************!*\
  !*** ./src/menu.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameMenu: () => (/* binding */ createGameMenu)
/* harmony export */ });
/* harmony import */ var _startgame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startgame */ "./src/startgame.ts");

var createGameMenu = function () {
    var appEl = document.querySelector(".game__section");
    var menuHtml = "       \n        <div class=\"choice-box\">\n            <h1 class=\"title\">\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C</h1>\n            <form class=\"complex\">\n                <input name=\"diff\" id=\"difficultChoice1\" class=\"complex__num\" type=\"radio\" value=\"1\"/>\n                <label for=\"difficultChoice1\">1</label>\n                <input name=\"diff\" id=\"difficultChoice2\" class=\"complex__num\" type=\"radio\" value=\"2\"/>\n                <label for=\"difficultChoice2\">2</label>\n                <input name=\"diff\" id=\"difficultChoice3\" class=\"complex__num\" type=\"radio\" value=\"3\"/>\n                <label for=\"difficultChoice3\">3</label>\n            </form>\n            <button id=\"startBtn\" class=\"start-btn\">\u0421\u0442\u0430\u0440\u0442</button>\n        </div>";
    appEl.innerHTML = menuHtml;
    var radioChoiceElement = document.querySelectorAll("input[type=radio][name=\"diff\"]");
    var startElement = document.getElementById("startBtn");
    var diff = "";
    radioChoiceElement.forEach(function (radio) {
        return radio.addEventListener("change", function () {
            diff = radio.value;
        });
    });
    startElement.addEventListener("click", function () {
        if (!diff) {
            alert("Выберите сложность!");
            return;
        }
        (0,_startgame__WEBPACK_IMPORTED_MODULE_0__.startGame)(diff);
    });
};
createGameMenu();
// import { startGame } from "./startgame.js";
// export const createGameMenu = () => {
//   const startGameMenu = document.createElement("div");
//   startGameMenu.classList.add("game__section_start");
//   const title = document.createElement("h2");
//   title.classList.add("game__section_title");
//   title.textContent = "Выберите уровень сложности";
//   const gameButtons = document.createElement("div"); // отдельный контейнер для кнопок, для удобства
//   gameButtons.classList.add("game__section_button");
//   const gameSection = document.querySelector(".game__section");
//   gameSection.innerHTML = ""; // очищение DOM после выбора сложности
//   const createDifficultButton = (difficult) => {
//     const button = document.createElement("button");
//     button.classList.add("game__btn");
//     button.textContent = `${difficult}`;
//     button.addEventListener('click', () => startGame(difficult));
//     return button;
//     // button.addEventListener("submit", function(event) {
//     //   event.preventDefault()
//     // })
//   };
//   startGameMenu.append(title, gameButtons);
//   gameButtons.append(
//     createDifficultButton(1),
//     createDifficultButton(2),
//     createDifficultButton(3)
//   );
//   gameSection.append(startGameMenu);
// };
// createGameMenu();


/***/ }),

/***/ "./src/startgame.ts":
/*!**************************!*\
  !*** ./src/startgame.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.ts");
/* harmony import */ var _gamecard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamecard */ "./src/gamecard.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
//import { winnerGame } from "./confetti.js";




var initialCardIcons = [
    "6p", "7p", "8p", "9p", "10p", "Qp", "Kp", "Jp", "Ap",
    "6h", "7h", "8h", "9h", "10h", "Qh", "Kh", "Jh", "Ah",
    "6c", "7c", "8c", "9c", "10c", "Qc", "Kc", "Jc", "Ac",
    "6b", "7b", "8b", "9b", "10b", "Qb", "Kb", "Jb", "Ab",
];
var startGame = function (difficult) {
    var firstCard;
    var secondCard;
    var clickable = true;
    var headerElements = document.createElement("div");
    headerElements.classList.add('header');
    var timerString = document.createElement("div");
    timerString.textContent = "Время";
    timerString.classList.add("timer");
    var restartButton = document.createElement("button");
    restartButton.textContent = "Начать заново";
    restartButton.classList.add("restart__button");
    restartButton.addEventListener("click", _menu__WEBPACK_IMPORTED_MODULE_0__.createGameMenu);
    headerElements.append(timerString, restartButton);
    var gameSection = document.querySelector(".game__section");
    var gameCardList = document.createElement("div");
    gameCardList.classList.add("game__card_list");
    var cardIcons = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.shuffleArray)(initialCardIcons);
    gameSection.innerHTML = "";
    cardIcons = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createFrontCards)(difficult, cardIcons); // не знаю как тут исправить!
    var duplicatedCardsIcons = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.duplicatedArray)(cardIcons);
    duplicatedCardsIcons = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.shuffleArray)(duplicatedCardsIcons);
    duplicatedCardsIcons.forEach(function (icon) {
        return gameCardList.append((0,_gamecard__WEBPACK_IMPORTED_MODULE_1__.createGameCard)("shirt", icon));
    });
    gameSection === null || gameSection === void 0 ? void 0 : gameSection.append(headerElements, gameCardList);
    var cards = document.querySelectorAll(".game__card");
    var flipStartCard = function () {
        cards.forEach(function (card) {
            card.classList.add("flip");
            setTimeout(function () {
                card.classList.remove("flip");
            }, 5000);
        });
    };
    flipStartCard();
    var countdownTime = 3 * 60 * 1000;
    var timerElement = document.querySelector(".timer");
    var countdown = setInterval(function () {
        var minutes = Math.floor(countdownTime / 60000);
        var seconds = +((countdownTime % 60000) / 1000).toFixed(0); // почему присваивается string???
        timerElement.innerHTML = "\u041E\u0441\u0442\u0430\u0432\u0448\u0435\u0435\u0441\u044F \u0432\u0440\u0435\u043C\u044F: ".concat(minutes, ":").concat(seconds < 10 ? "0" : "").concat(seconds); // ! для игнорирования null?
        countdownTime -= 1000;
        if (countdownTime < 0) {
            clearInterval(countdown);
            timerElement.innerHTML = "Время вышло!";
        }
    }, 1000);
    cards.forEach(function (card, index) {
        card.addEventListener("click", function () {
            if (clickable === true && !card.classList.contains("successfully")) {
                card.classList.add("flip");
            }
            if (firstCard === null) {
                firstCard = index;
            }
            else {
                if (index !== firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }
            if (firstCard !== null &&
                secondCard !== null &&
                firstCard !== secondCard) {
                if (cards[firstCard].firstElementChild.className ===
                    cards[secondCard].firstElementChild.className) {
                    setTimeout(function () {
                        cards[firstCard].classList.add("successfully");
                        cards[secondCard].classList.add("successfully");
                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
                else {
                    setTimeout(function () {
                        cards[firstCard].classList.remove("flip");
                        cards[secondCard].classList.remove("flip");
                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 500);
                }
            }
            if (Array.from(cards).every(function (card) { return card.className.includes("flip"); })) {
                //document.querySelector(".winner__confetti").innerHTML = winnerGame;
                alert("Вы победили!"); // доделать
            }
        });
    });
};
// //import { winnerGame } from "./confetti.js";
// import { createGameMenu } from "./gameMenu.js";
// import { createGameCard } from "./gamecard.js";
// import { shuffleArray } from "./utils.js";
// import { createFrontCards, duplicatedArray } from "./utils.js";
// import { initialCardIcons } from "./cards.js";
// export const gameSection = document.querySelector(".game__section");
// export const startGame = (difficult) => {
//   let firstCard = null;
//   let secondCard = null;
//   let clickable = true;
//   const headerElements = document.createElement("div");
//   headerElements.classList.add("header");
//   const restartButton = document.createElement("button");
//   restartButton.textContent = "Начать заново";
//   restartButton.classList.add("restart__button");
//   restartButton.addEventListener("click", createGameMenu);
//   const timer = document.createElement("p");
//   timer.classList.add("timer");
//   timer.textContent = "00.00";
//   headerElements.append(restartButton, timer);
//   const gameCardList = document.createElement("div");
//   gameCardList.classList.add("game__card_list");
//   let cardIcons = shuffleArray(initialCardIcons);
//   cardIcons = createFrontCards(difficult, cardIcons);
//   gameSection.innerHTML = "";
//   let duplicatedCardsIcons = duplicatedArray(cardIcons);
//   duplicatedCardsIcons = shuffleArray(duplicatedCardsIcons);
//   gameCardList.addEventListener('click', () => {
//   initialCardIcons.forEach((icon) => {
//     // const gameCardList = document.createElement("div");
//     // gameCardList.classList.add("game__card_list");
//     const cards = document.createElement("div");
//     cards.classList.add("game__card");
//     const flippedCard = document.createElement("img");
//     const notFlippedCard = document.createElement("img");
//     notFlippedCard.classList.add("backface", "back");
//     flippedCard.classList.add("frontface", "front");
//     flippedCard.src = icon.imgSrc;
//     notFlippedCard.src = "/static/shirt.png";
//     gameSection.appendChild(gameCardList);
//     gameCardList.append(notFlippedCard, flippedCard);
//     flippedCard.setAttribute("name", icon.name);
//     cards.append(notFlippedCard, flippedCard)
//   });
// })
//   // duplicatedCardsIcons.forEach((icon) => {
//   //   gameCardList.append(createGameCard("shirt", icon))
//   // });
//   gameSection.append(headerElements, gameCardList);
//   const cards = document.querySelectorAll(".game__card_list");
//   cards.forEach((card, index) => {
//     //условия при переворачивании карт
//     card.addEventListener("click", () => {
//       if (clickable === true && !card.classList.contains("successfully")) {
//         card.classList.add("flip");
//       }
//       if (firstCard === null) {
//         firstCard = index;
//       } else {
//         if (index !== firstCard) {
//           secondCard = index;
//           clickable = false; // запрещаем разворот более 2х карт
//         }
//       }
//       if (
//         firstCard !== null &&
//         secondCard !== null &&
//         firstCard !== secondCard
//       ) {
//         if (
//           cards[firstCard].firstElementChild.className ===
//           cards[secondCard].firstElementChild.className
//         ) {
//           setTimeout(() => {
//             cards[firstCard].classList.add("successfully");
//             cards[secondCard].classList.add("successfully");
//             firstCard = null;
//             secondCard = null;
//             clickable = true;
//           }, 500);
//         } else {
//           setTimeout(() => {
//             cards[firstCard].classList.remove("flip");
//             cards[secondCard].classList.remove("flip");
//             firstCard = null;
//             secondCard = null;
//             clickable = true;
//           }, 500);
//         }
//       }
//       // if (Array.from(cards).every((card) => card.className.includes("flip"))) {
//       //   //document.querySelector(".winner__confetti").innerHTML = winnerGame;
//       //   alert("Вы победили!");
//     //   }
//     });
//   });
// };


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFrontCards: () => (/* binding */ createFrontCards),
/* harmony export */   duplicatedArray: () => (/* binding */ duplicatedArray),
/* harmony export */   shuffleArray: () => (/* binding */ shuffleArray)
/* harmony export */ });
var shuffleArray = function (array) {
    var _a;
    console.log(array);
    var currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        _a = [
            array[randomIndex],
            array[currentIndex],
        ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
};
var duplicatedArray = function (array) {
    return array.reduce(function (res, current) { return res.concat([current, current]); }, []);
};
var createFrontCards = function (initialDiff, array) {
    var x = +initialDiff;
    switch (x) {
        case 1:
            return array.slice(0, 3);
        case 2:
            return array.slice(0, 6);
        case 3:
            return array.slice(0, 9);
        default:
            return [];
    }
};


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.ts");


var cardsApp = function () {
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createGameMenu)();
};
cardsApp();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map