import "../css/main.scss";
import checkIn from "./checkIn.js";
import navbar from "./navbar.js";
import getUsersData from "./getUsersData.js";
import startGame from "./startGame.js";

const usersData = getUsersData();
usersData.then(data=>{
  checkIn(data);
});
startGame()
navbar();
