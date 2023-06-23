import { initialCardIcons } from "./cards.js";
export const createGameCard = (backface, frontface) => {
  const cards = document.createElement("div");
  cards.classList.add("game__card");



  const flippedCard = document.createElement("i"); // img?
  const notFlippedCard = document.createElement("i"); // img?
  // for (let key in initialCardIcons) {
  //   flippedCard.setAttribute('data-key', key);
  //   flippedCard.src = '/static'+key+'png'
  // };

  notFlippedCard.classList.add("backface", `backface-${backface}`);
  flippedCard.classList.add("frontface", `frontface-${frontface}`);

  cards.append(flippedCard, notFlippedCard);

  return cards;
};
