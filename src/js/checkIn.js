const nameInput = document.querySelector(".name");

function submitUserData(usersData) {
  const user = {
    name: nameInput.value,
    timeAtack: 0,
    practise: 0,
  };

  // REVIEW: this could be extracted, also the approach with `.forEach` is not good
  usersData.forEach((element, index) => {
    if (element.name === nameInput.value) {   
      user.trainingAtack = element.trainingAtack;
      user.practise = element.practise;
      usersData.splice(index, 1);
    }
  });

  localStorage.setItem("data", JSON.stringify([...usersData, user]));
}

function checkIn(usersData) {
  const nameInput = document.querySelector(".name");
  const checkInBtn = document.querySelector(".check-in");

  if (nameInput && usersData.length > 0)
    nameInput.value = usersData[usersData.length - 1].name;

  checkInBtn?.addEventListener("click", function () {
    submitUserData(usersData);
  });
}

export default checkIn;
