export const createGameCard = (backface: string, frontface: string | number) => {
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
