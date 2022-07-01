import { renderValidation } from "./validatingFunc.js";

async function checkRegistered() {
  const sendFormDataBtn = document.querySelector(".check-in");
  let userData = await JSON.parse(localStorage.getItem("data"));
}

function submitUserData(data) {
  const nameInput = document.querySelector(".name");
  const obj = {
    name: nameInput.value,
    trainingAtack: 0,
    practise: 0,
  };
  localStorage.setItem("data", JSON.stringify([...data, obj]));
  checkRegistered();
}

function checkIn(data) {
  const nameInput = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  checkRegistered();
  if (nameInput && data.length > 0) nameInput.value = data[data.length - 1].name;

  checkInBtn?.addEventListener("click", function () {
    let inputNameValue = renderValidation(nameInput);

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
