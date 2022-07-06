import "../css/main.scss";
import checkIn from "./checkIn.js";
import setNavbar from "./navbar.js";
import getUsersData from "./getUsersData.js";
import playAgain from "./playAgain.js";
import {renderTask} from "./renderTask.js";
import stopGame from "./stopGame.js";
import renderLeaders from "./leaders";

const usersData = getUsersData();
checkIn(usersData);
setNavbar(usersData);
stopGame(usersData);
renderLeaders(usersData);

renderTask(usersData);
playAgain();
