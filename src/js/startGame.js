import { renderTask } from "./renderTask.js";

function startGame() {
  const startBtn = document.querySelector(".start-btn");
  const stopBtn = document.querySelector(".stop-btn");
  const rules = document.querySelector(".rules");
  const game = document.querySelector(".game");

  startBtn?.addEventListener("click", () => {
    rules.classList.toggle("active");
    stopBtn.classList.toggle("d-none");
    game.classList.toggle("active");
    renderTask();
  });
}

export default startGame;
