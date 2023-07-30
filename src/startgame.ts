//import { winnerGame } from "./confetti.js";
import { createGameMenu } from "./menu";
import { createGameCard } from "./gamecard";
import { shuffleArray } from "./utils";
import { createFrontCards, duplicatedArray } from "./utils";

const initialCardIcons = [
  "6p", "7p", "8p", "9p","10p","Qp", "Kp", "Jp", "Ap",
  "6h", "7h", "8h", "9h", "10h", "Qh","Kh","Jh", "Ah",
  "6c","7c","8c", "9c","10c", "Qc", "Kc", "Jc", "Ac",
  "6b", "7b", "8b", "9b", "10b", "Qb", "Kb", "Jb","Ab",
];

export const startGame = (difficult: string) => {
  let firstCard: number | null = null;
  let secondCard: number | null = null;
  let clickable = true;

  const headerElements = document.createElement("div")
  headerElements.classList.add('header')
  const timerString = document.createElement("div");
  timerString.textContent = "Время";
  timerString.classList.add("timer");

  const restartButton = document.createElement("button");
  restartButton.textContent = "Начать заново";
  restartButton.classList.add("restart__button");
  restartButton.addEventListener("click", createGameMenu);

  headerElements.append(timerString, restartButton)

  const gameSection = document.querySelector(".game__section");
  const gameCardList = document.createElement("div");
  gameCardList.classList.add("game__card_list");

  let cardIcons = shuffleArray(initialCardIcons);
  gameSection!.innerHTML = "";

  cardIcons = createFrontCards(difficult, cardIcons); // не знаю как тут исправить!
  let duplicatedCardsIcons = duplicatedArray(cardIcons);
  duplicatedCardsIcons = shuffleArray(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach((icon) =>
    gameCardList.append(createGameCard("shirt", icon))
  );

  gameSection?.append(headerElements, gameCardList);

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

  const timerElement: HTMLElement = document.querySelector(".timer") as HTMLElement;

  const countdown: NodeJS.Timer = setInterval(() => {
    const minutes: number = Math.floor(countdownTime / 60000);
    const seconds: number = +((countdownTime % 60000) / 1000).toFixed(0); // почему присваивается string???

    timerElement!.innerHTML = `Оставшееся время: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // ! для игнорирования null?
    countdownTime -= 1000;

    if (countdownTime < 0) {
      clearInterval(countdown);
      timerElement!.innerHTML = "Время вышло!";
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
          cards[firstCard].firstElementChild!.className ===
          cards[secondCard].firstElementChild!.className
        ) {
          setTimeout(() => {
            cards[firstCard!].classList.add("successfully");
            cards[secondCard!].classList.add("successfully");

            firstCard = null;
            secondCard = null;
            clickable = true;
          }, 500);
        } else {
          setTimeout(() => {
            cards[firstCard!].classList.remove("flip");
            cards[secondCard!].classList.remove("flip");

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