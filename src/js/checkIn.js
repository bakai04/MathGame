import { renderValidation } from "./validatingFunc.js";
import axios from "axios";

async function checkRegistered() {
  const sendFormDataBtn = document.querySelector(".check-in");
  const timeAtackBtn = document.querySelector(".timeAttack");

  let userData = await JSON.parse(localStorage.getItem("data"));

  if (userData) {
    sendFormDataBtn.textContent = "Вы зарегистрированы";
    sendFormDataBtn.disabled = true;
    timeAtackBtn.disabled = false;
  }
}

function submitUserData() {
  const nameInput = document.querySelector(".name");
  const sendFormDataBtn = document.querySelector(".check-in");
  const data = {
    name: nameInput.value,
    trainingAtack: 0,
    practise: 0,
  };

  sendFormDataBtn.disabled = true;
  sendFormDataBtn.textContent = "registration...";

  setTimeout(() => {
    localStorage.setItem("data", JSON.stringify(data));
    axios.post("https://62bbd125eff39ad5ee157b99.mockapi.io/gamers", data);
    sendFormDataBtn.disabled = false;
    sendFormDataBtn.textContent = "";
    checkRegistered();
  }, 2000);
}

function checkIn(usersData) {
  const nameInput = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  let userData = JSON.parse(localStorage.getItem("data"));
  checkRegistered();

  if (nameInput && userData) nameInput.value = userData.name;
  
  checkInBtn?.addEventListener("click", function () {
    let inputNameValue = renderValidation(nameInput, usersData);
    nameInput.addEventListener("input", () => {
      renderValidation(nameInput, usersData);
    });
    renderValidation(nameInput, usersData);
    if (inputNameValue === true) {
      submitUserData();
    }
  });
}

export default checkIn;
