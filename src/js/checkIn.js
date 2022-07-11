import chooseMode from "./chooseMode.js";
const nameInput = document.querySelector(".name");
const checkInBtn = document.querySelector(".lets-go");

function submitUserData(usersData) {
  const user = {
    name: nameInput.value,
    timeAtack: 0,
    practice: 0,
  };

  usersData.forEach((element, index) => {
    if (element.name === nameInput.value) {
      user.timeAtack = element.timeAtack;
      user.practice = element.practice;
      usersData.splice(index, 1);
    }
  });
  usersData.unshift(user);
  localStorage.setItem("data", JSON.stringify(usersData));
}

function inputValidation() {
  checkInBtn.disabled = !nameInput.value;
  nameInput?.addEventListener("input", () => {
    checkInBtn.disabled = !nameInput.value;
  });
}

function checkIn(usersData) {
  if (nameInput) {
    nameInput.value = usersData[0]?.name || "";
    inputValidation();
  }

  checkInBtn?.addEventListener("click", function () {
    submitUserData(usersData);
    chooseMode();
  });
}

export default checkIn;
