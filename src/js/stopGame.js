export function checkLastRecord(usersData) {
  const gameOverTitle = document.querySelector(".game-over");
  const resultGame = document.querySelector(".result-page");
  const count = document.querySelector(".count").textContent;
  const activeMode =JSON.parse(localStorage.getItem("mode"));
  resultGame.classList.toggle("d-none");

  if (count > usersData[0][activeMode]) {
    usersData[0][activeMode] = count;
    gameOverTitle.textContent = "New Record";
    localStorage.setItem("data", JSON.stringify(usersData));
  }
}

function stopGame(usersData) {
  const stopBtn = document.querySelector(".stop-btn");

  stopBtn?.addEventListener("click", () => {
    checkLastRecord(usersData);
  });
}

export default stopGame;
