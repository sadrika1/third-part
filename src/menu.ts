import { startGame } from "./startgame";

export const createGameMenu = () => {
  const appEl: HTMLElement = document.querySelector(".game__section") as HTMLElement;

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

  const radioChoiceElement = document.querySelectorAll(`input[type=radio][name="diff"]`);
  const startElement: HTMLElement = document.getElementById("startBtn") as HTMLElement;
  let diff = "";

  radioChoiceElement.forEach((radio) =>
    radio.addEventListener("change", () => { 
      diff = (radio as HTMLInputElement).value;
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