import { startGame } from "./startgame.js";

export const createGameMenu = () => {
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
    startGame(diff);
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
