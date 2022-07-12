import { checkLastRecord } from "./stopGame.js";

const gameMode = JSON.parse(localStorage.getItem("mode"));
const timer = document.querySelector(".timer");
let endTime = 120;

function renderTime() {
  let second = String(endTime % 60).padStart(2, "0");
  let minute = String((endTime - second) / 60).padStart(2, "0");
  endTime < 10 && timer.classList.toggle("warning");
  timer.textContent = `${minute}:${second}`;
}

function time(usersData) {
  if (gameMode === "timeAtack") {
    let interval = setInterval(() => {
      endTime = endTime - 1;
      renderTime();
      if (endTime <= 0) {
        clearInterval(interval);
        checkLastRecord(usersData);
      }
    }, 1000);
  } else {
    timer.classList.add("d-none");
  }
}
export default time;
