import { startGame } from "./startgame.js";

export const createGameMenu = () => {
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

    button.addEventListener("click", () => startGame(difficult));
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
