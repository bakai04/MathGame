import { renderValidation } from "./validatingFunc.js";

async function checkRegistered(usersData) {
  const nameInput = document.querySelector(".name");
  nameInput.value = usersData[usersData.length - 1].name;
}

function submitUserData(data) {
  const nameInput = document.querySelector(".name");

  const obj = {
    name: nameInput.value,
    trainingAtack: 0,
    practise: 0,
  };

  localStorage.setItem("data", JSON.stringify([...data, obj]));
  
  checkRegistered(data);
}

function checkIn(data) {
  const nameInput = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  if (nameInput && data.length > 0)
    nameInput.value = data[data.length - 1].name;
    
  checkInBtn?.addEventListener("click", function () {
    let inputNameValue = renderValidation(nameInput);
    nameInput.value = nameInput.value;
    nameInput.addEventListener("input", () => {
      renderValidation(nameInput);
    });
    nameInput.focus();
    renderValidation(nameInput);
    if (inputNameValue === true) {
      submitUserData(data);
    }
  });
}

export default checkIn;
