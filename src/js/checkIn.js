const nameInput = document.querySelector(".name");

function submitUserData(usersData) {
  const user = {
    name: nameInput.value,
    timeAtack: 0,
    practice: 0,
  };

  // REVIEW: this could be extracted, also the approach with `.forEach` is not good
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
  const nameInput = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  if (nameInput && usersData.length > 0)
    nameInput.value = usersData[0].name;

  checkInBtn?.addEventListener("click", function () {
    submitUserData(usersData);
  });
}

export default checkIn;
