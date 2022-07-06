function checkLastRecord(usersData) {
  const gameOverTitle = document.querySelector(".game-over");
  const count = document.querySelector(".count").textContent;
  const activeMode = getActiveMode();

  if (count > usersData[usersData.length - 1][activeMode]) {
    usersData[usersData.length - 1][activeMode] = count;
    gameOverTitle.textContent = "New Record";
    localStorage.setItem("data", JSON.stringify(usersData));
  }
}

function getActiveMode() {
  if (window.location.href.indexOf("/practise.html" === -1)) {
    return "timeAtack";
  } else {
    return "practise";
  }
}

function stopGame(usersData) {
  const stopBtn = document.querySelector(".stop-btn");
  const resultGame = document.querySelector(".result-page");

  stopBtn.addEventListener("click", () => {
    resultGame.classList.toggle("d-none");
    checkLastRecord(usersData);
  });
}

export default stopGame;
