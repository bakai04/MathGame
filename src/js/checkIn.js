import { renderValidation } from "./validatingFunc.js";

function submitUserData() {
  const nameInput = document.querySelector(".name");
  localStorage.setItem("data", JSON.stringify(nameInput.value));
}

function checkIn() {
  const nameInput = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  checkInBtn?.addEventListener("click", function () {
    let inputNameValue = renderValidation(nameInput);
    nameInput.addEventListener("input", () => {
      renderValidation(nameInput);
    });
    renderValidation(nameInput);
    if (inputNameValue === true) {
      submitUserData();
    }
  });
}

export default checkIn;
