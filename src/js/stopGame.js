function stopGame(count) {
  const stopBtn = document.querySelector(".stop-btn");
  const resultGame = document.querySelector(".result-page");

  stopBtn.addEventListener("click", () => {
    resultGame.classList.toggle("d-none");
  });
}

export default stopGame;
