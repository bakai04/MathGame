export function checkLastRecord(usersData) {
  const gameOverTitle = document.querySelector(".game-over");
  const resultGame = document.querySelector(".result-page");
  const count = document.querySelector(".count").textContent;
  const activeMode = getActiveMode();

  resultGame.classList.toggle("d-none");

  if (count > usersData[0][activeMode]) {
    usersData[0][activeMode] = count;
    gameOverTitle.textContent = "New Record";
    localStorage.setItem("data", JSON.stringify(usersData));
  }
}

function getActiveMode() {
  if (window.location.href.indexOf("/practice.html") === -1) {
    return "timeAtack";
  } else {
    return "practice";
  }
}

function stopGame(usersData) {
  const stopBtn = document.querySelector(".stop-btn");

  stopBtn?.addEventListener("click", () => {
    checkLastRecord(usersData);
  });
}

export default stopGame;
