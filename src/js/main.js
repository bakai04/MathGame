import "../css/main.scss";
import checkIn from "./checkIn.js";
import navbar from "./navbar.js";
import { renderTask } from "./renderTask.js";
import getUsersData from "./getUsersData.js";

const usersData = getUsersData();
usersData.then((data) => {
  checkIn(data);
});
renderTask();
navbar();
