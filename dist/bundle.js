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

/***/ "./src/gamecard.js":
/*!*************************!*\
  !*** ./src/gamecard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameCard: () => (/* binding */ createGameCard)
/* harmony export */ });
const createGameCard = (backface, frontface) => {
  const cards = document.createElement("div");
  cards.classList.add("game__card", `frontface-${frontface}`);

  const flippedCard = document.createElement("i");
  const notFlippedCard = document.createElement("i");

  notFlippedCard.classList.add("backface", `backface-${backface}`);
  flippedCard.classList.add("frontface", `frontface-${frontface}`); //?

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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGameMenu: () => (/* binding */ createGameMenu)
/* harmony export */ });
/* harmony import */ var _startgame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startgame.js */ "./src/startgame.js");


const createGameMenu = () => {
  const appEl = document.querySelector(".game__section");

  const menuHtml = `       
        <div class="choice-box">
            <h1 class="title">Выбери сложность</h1>
            <form class="complex">
                <input name="diff" id="difficultChoice1" class="complex__num" type="radio" value="1"/>
                <label for="difficultChoice1">1</label>
                <input name="diff" id="difficultChoice2" class="complex__num" type="radio" value="2"/>
                <label for="difficultChoice2">2</label>
                <input name="diff" id="difficultChoice3" class="complex__num" type="radio" value="3"/>
                <label for="difficultChoice3">3</label>
            </form>
            <button id="startBtn" class="start-btn">Старт</button>
        </div>`;

  appEl.innerHTML = menuHtml;

  const radioChoiceElemenet = document.querySelectorAll(
    `input[type=radio][name="diff"]`
  );
  const startElement = document.getElementById("startBtn");
  let diff = 0;

  radioChoiceElemenet.forEach((radio) =>
    radio.addEventListener("change", () => {
      diff = radio.value;
    })
  );

  startElement.addEventListener("click", () => {
    if (!diff) {
      alert("Выберите сложность!");
      return;
    }
    (0,_startgame_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(diff);
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

/***/ "./src/startgame.js":
/*!**************************!*\
  !*** ./src/startgame.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _gamecard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamecard.js */ "./src/gamecard.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
//import { winnerGame } from "./confetti.js";





const initialCardIcons = [
  "6p",
  "7p",
  "8p",
  "9p",
  "10p",
  "Qp",
  "Kp",
  "Jp",
  "Ap",
  "6h",
  "7h",
  "8h",
  "9h",
  "10h",
  "Qh",
  "Kh",
  "Jh",
  "Ah",
  "6c",
  "7c",
  "8c",
  "9c",
  "10c",
  "Qc",
  "Kc",
  "Jc",
  "Ac",
  "6b",
  "7b",
  "8b",
  "9b",
  "10b",
  "Qb",
  "Kb",
  "Jb",
  "Ab",
];

const startGame = (difficult) => {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;

  const timerString = document.createElement("div");
  timerString.textContent = "Время";
  timerString.classList.add("timer");

  const restartButton = document.createElement("button");
  restartButton.textContent = "Начать заново";
  restartButton.classList.add("restart__button");
  restartButton.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_0__.createGameMenu);

  const gameSection = document.querySelector(".game__section");
  const gameCardList = document.createElement("div");
  gameCardList.classList.add("game__card_list");

  let cardIcons = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleArray)(initialCardIcons);
  gameSection.innerHTML = "";

  cardIcons = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createFrontCards)(difficult, cardIcons);
  let duplicatedCardsIcons = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.duplicatedArray)(cardIcons);
  duplicatedCardsIcons = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleArray)(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach((icon) =>
    gameCardList.append((0,_gamecard_js__WEBPACK_IMPORTED_MODULE_1__.createGameCard)("shirt", icon))
  );

  gameSection.append(restartButton, gameCardList, timerString);

  const cards = document.querySelectorAll(".game__card");
  const flipStartCard = () => {
    cards.forEach((card) => {
      card.classList.add("flip");
      setTimeout(() => {
        card.classList.remove("flip");
      }, 5000);
    });
  };

  flipStartCard();

  let countdownTime = 3 * 60 * 1000;

  const timerElement = document.querySelector(".timer");

  const countdown = setInterval(() => {
    const minutes = Math.floor(countdownTime / 60000);
    const seconds = ((countdownTime % 60000) / 1000).toFixed(0);

    timerElement.innerHTML = `Оставшееся время: ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    countdownTime -= 1000;

    if (countdownTime < 0) {
      clearInterval(countdown);
      timerElement.innerHTML = "Время вышло!";
    }
  }, 1000);

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (clickable === true && !card.classList.contains("successfully")) {
        card.classList.add("flip");
      }
      if (firstCard === null) {
        firstCard = index;
      } else {
        if (index !== firstCard) {
          secondCard = index;
          clickable = false;
        }
      }
      if (
        firstCard !== null &&
        secondCard !== null &&
        firstCard !== secondCard
      ) {
        if (
          cards[firstCard].firstElementChild.className ===
          cards[secondCard].firstElementChild.className
        ) {
          setTimeout(() => {
            cards[firstCard].classList.add("successfully");
            cards[secondCard].classList.add("successfully");

            firstCard = null;
            secondCard = null;
            clickable = true;
          }, 500);
        } else {
          setTimeout(() => {
            cards[firstCard].classList.remove("flip");
            cards[secondCard].classList.remove("flip");

            firstCard = null;
            secondCard = null;
            clickable = true;
          }, 500);
        }
      }
      if (Array.from(cards).every((card) => card.className.includes("flip"))) {
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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFrontCards: () => (/* binding */ createFrontCards),
/* harmony export */   duplicatedArray: () => (/* binding */ duplicatedArray),
/* harmony export */   shuffleArray: () => (/* binding */ shuffleArray)
/* harmony export */ });
const shuffleArray = (array) => {
  console.log(array);
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

const duplicatedArray = (array) =>
  array.reduce((res, current) => res.concat([current, current]), []);

const createFrontCards = (initialDiff, array) => {
  initialDiff = +initialDiff;
  switch (initialDiff) {
    case 1:
      return array.slice(0, 3);
    case 2:
      return array.slice(0, 6);
    case 3:
      return array.slice(0, 9);
    default:
      break;
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



const cardsApp = () => {
  (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createGameMenu)();
};
cardsApp();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map