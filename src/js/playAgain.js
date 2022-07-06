import { resetGameInform } from "./renderExampleFunc.js";

const playAgain = () => {
  const playAgainBtn = document.querySelector(".play-again");
  const resultGame = document.querySelector(".result-page");

  playAgainBtn?.addEventListener("click", () => {
    resetGameInform();
    resultGame.classList.toggle("d-none");
  });
};

export default playAgain;
