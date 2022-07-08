import "../css/main.scss";
import checkIn from "./checkIn.js";
import setNavbar from "./navbar.js";
import getUsersData from "./getUsersData.js";
import { renderTask } from "./renderTask.js";
import stopGame from "./stopGame.js";
import renderLeaders from "./leaders";
import time from "./timer.js";

const usersData = getUsersData();
checkIn(usersData);

if (window.location.href.indexOf("/game.html") != -1) {
  setNavbar(usersData);
  stopGame(usersData);
  renderTask(usersData);
  time(usersData);
}
if(window.location.href.indexOf("/leaders.html") != -1){
    renderLeaders(usersData);
}

