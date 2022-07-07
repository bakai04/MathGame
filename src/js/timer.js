import { checkLastRecord } from "./stopGame.js";

const timer = document.querySelector(".timer");
let endTime = 15;

function renderTime() {
  let second = String(endTime % 60).padStart(2, "0");
  let minute = String((endTime - second) / 60).padStart(2, "0");
  if (endTime < 10) {
    timer.classList.toggle("warning");
  }
  timer.textContent = `${minute}:${second}`;
}

function time(usersData) {
  if (timer) {
    let interval = setInterval(() => {
      endTime = endTime - 1;
      renderTime();
      if (endTime <= 0) {
        clearInterval(interval);
        checkLastRecord(usersData)
      }
    }, 1000);
  }
}
export default time;
