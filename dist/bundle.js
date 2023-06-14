/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/style.css":
      /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./src/gameMenu.js":
      /*!*************************!*\
  !*** ./src/gameMenu.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createGameMenu: () =>
            /* binding */ createGameMenu,
          /* harmony export */
        });
        /* harmony import */ var _startgame_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./startgame.js */ "./src/startgame.js");

        const createGameMenu = () => {
          const startGameMenu = document.createElement("div");
          startGameMenu.classList.add("game__section_start");

          const title = document.createElement("h2");
          title.classList.add("game__section_title");
          title.textContent = "Выберите уровень сложности";

          const gameButtons = document.createElement("div"); // отдельный контейнер для кнопок, для удобства
          gameButtons.classList.add("game__section_button");

          const gameSection = document.querySelector(".game__section");
          gameSection.innerHTML = ""; // очищение DOM после выбора сложности

          const createDifficultButton = (difficult) => {
            const button = document.createElement("button");
            button.classList.add("game__btn");
            button.textContent = `${difficult}`;

            button.addEventListener("click", () =>
              (0, _startgame_js__WEBPACK_IMPORTED_MODULE_0__.startGame)(
                difficult
              )
            );
            return button;
          };

          startGameMenu.append(title, gameButtons);
          gameButtons.append(
            createDifficultButton(1),
            createDifficultButton(2),
            createDifficultButton(3)
          );
          gameSection.append(startGameMenu);
        };
        createGameMenu();

        /***/
      },

    /***/ "./src/gamecard.js":
      /*!*************************!*\
  !*** ./src/gamecard.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createGameCard: () =>
            /* binding */ createGameCard,
          /* harmony export */
        });
        //import backfaceimg from '../' ??

        const createGameCard = (backface, frontface) => {
          const cards = document.createElement("div");
          cards.classList.add("game__card");

          const flippedCard = document.createElement("i");
          const notFlippedCard = document.createElement("i");

          notFlippedCard.classList.add("backface", `backface-${backface}`);
          flippedCard.classList.add("frontface", `frontface-${frontface}`); //?

          cards.append(flippedCard, notFlippedCard);

          return cards;
        };

        /***/
      },

    /***/ "./src/startgame.js":
      /*!**************************!*\
  !*** ./src/startgame.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ startGame: () => /* binding */ startGame,
          /* harmony export */
        });
        /* harmony import */ var _gameMenu_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./gameMenu.js */ "./src/gameMenu.js");
        /* harmony import */ var _gamecard_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./gamecard.js */ "./src/gamecard.js");
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./utils.js */ "./src/utils.js");
        //import { winnerGame } from "./confetti.js";

        const initialCardIcons = ["6", "7", "8", "9", "10", "Q", "K", "J", "A"]; // todo: реализовать иконки перевернутых карт через массив

        const startGame = (difficult) => {
          let firstCard = null;
          let secondCard = null;
          let clickable = true;

          const restartButton = document.createElement("button");
          restartButton.textContent = "Начать заново";
          restartButton.classList.add("restart__button");
          restartButton.addEventListener(
            "click",
            _gameMenu_js__WEBPACK_IMPORTED_MODULE_0__.createGameMenu
          );

          const gameSection = document.querySelector(".game__section");
          const gameCardList = document.createElement("div");
          gameCardList.classList.add("game__card_list");

          let cardIcons = (0,
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleArray)(
            initialCardIcons
          );
          gameSection.innerHTML = "";

          cardIcons = (0,
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.createFrontCards)(
            difficult,
            cardIcons
          );
          let duplicatedCardsIcons = (0,
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.duplicatedArray)(cardIcons);
          duplicatedCardsIcons = (0,
          _utils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleArray)(
            duplicatedCardsIcons
          );

          duplicatedCardsIcons.forEach(
            (icon) =>
              gameCardList.append(
                (0, _gamecard_js__WEBPACK_IMPORTED_MODULE_1__.createGameCard)(
                  "shirt",
                  icon
                )
              ) //1 - название деф иконки, 2 - иконка раскрытой карты из массива
          );

          gameSection.append(restartButton, gameCardList);

          const cards = document.querySelectorAll(".game__card");
          cards.forEach((card, index) => {
            //условия при переворачивании карт
            card.addEventListener("click", () => {
              if (
                clickable === true &&
                !card.classList.contains("successfully")
              ) {
                card.classList.add("flip");
              }
              if (firstCard === null) {
                firstCard = index;
              } else {
                if (index !== firstCard) {
                  secondCard = index;
                  clickable = false; // запрещаем разворот более 2х карт
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
              if (
                Array.from(cards).every((card) =>
                  card.className.includes("flip")
                )
              ) {
                //document.querySelector(".winner__confetti").innerHTML = winnerGame;
                alert("Вы победили!");
              }
            });
          });
        };

        /***/
      },

    /***/ "./src/utils.js":
      /*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createFrontCards: () =>
            /* binding */ createFrontCards,
          /* harmony export */ duplicatedArray: () =>
            /* binding */ duplicatedArray,
          /* harmony export */ shuffleArray: () => /* binding */ shuffleArray,
          /* harmony export */
        });
        const shuffleArray = (array) => {
          // мешанина!
          let currentIndex = array.length,
            randomIndex;

          while (currentIndex != 0) {
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
          array.reduce((res, current) => res.concat([current, current]), []); // дублируем элементы массива(чтобы было по 2 одинаковх карты)

        const createFrontCards = (initialDiff, array) => {
          switch (initialDiff) {
            case 1:
              return array.slice(0, 3); // легкий - 6 карт
            case 2:
              return array.slice(0, 6); // средний - 12 карт
            case 3:
              return array; // сложный - 18 карт
            default:
              break;
          }
        };

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./style.css */ "./src/style.css");
    /* harmony import */ var _gameMenu_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./gameMenu.js */ "./src/gameMenu.js");

    const cardsApp = () => {
      (0, _gameMenu_js__WEBPACK_IMPORTED_MODULE_1__.createGameMenu)();
    };
    cardsApp();
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
