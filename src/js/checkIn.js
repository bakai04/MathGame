import chooseMode from "./chooseMode.js";
const nameInput = document.querySelector(".name");

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



function checkIn(usersData) {
  const checkInBtn = document.querySelector(".lets-go");

  if (nameInput && usersData.length > 0)
    nameInput.value = usersData[0].name;

  checkInBtn?.addEventListener("click", function () {
    submitUserData(usersData);
    chooseMode();
  });
}

export default checkIn;
