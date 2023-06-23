//import { winnerGame } from "./confetti.js";
import { createGameMenu } from "./gameMenu.js";
import { createGameCard } from "./gamecard.js";
import { shuffleArray } from "./utils.js";
import { createFrontCards, duplicatedArray } from "./utils.js";
import { initialCardIcons } from "./cards.js";

const gameSection = document.querySelector(".game__section");

export const startGame = (difficult) => {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;
  
  const headerElements = document.createElement('div');
  headerElements.classList.add('header')
  const restartButton = document.createElement("button");
  restartButton.textContent = "Начать заново";
  restartButton.classList.add("restart__button");
  restartButton.addEventListener("click", createGameMenu);
  const timer = document.createElement('p')
  timer.classList.add('timer');
  timer.textContent = '00.00';
  headerElements.append(restartButton, timer);

  const gameCardList = document.createElement("div");
  gameCardList.classList.add("game__card_list");

  let cardIcons = shuffleArray(initialCardIcons);
  gameSection.innerHTML = "";

  cardIcons = createFrontCards(difficult, cardIcons);
  let duplicatedCardsIcons = duplicatedArray(cardIcons);
  duplicatedCardsIcons = shuffleArray(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach(
    (icon) => gameCardList.append(createGameCard("shirt", icon)) //1 - название деф иконки, 2 - иконка раскрытой карты из массива
  );

  gameSection.append(headerElements, gameCardList);

  const cards = document.querySelectorAll(".game__card");
  cards.forEach((card, index) => {
    //условия при переворачивании карт
    card.addEventListener("click", () => {
      if (clickable === true && !card.classList.contains("successfully")) {
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
      if (Array.from(cards).every((card) => card.className.includes("flip"))) {
        //document.querySelector(".winner__confetti").innerHTML = winnerGame;
        alert("Вы победили!");
      }
    });
  });
};
