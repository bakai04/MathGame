import { renderValidation } from "./validatingFunc.js";

function checkIn() {
  const name = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  checkInBtn?.addEventListener("click", function () {
    let inputNameValue = renderValidation(nameInput);
    name.addEventListener("input", () => {
      renderValidation(name);
    });
    renderValidation(name);
    if(inputNameValue === true){
        alert("ds ecgtiyj pfhtu")
    }
});
}

export default checkIn;
