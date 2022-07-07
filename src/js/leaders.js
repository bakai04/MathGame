const timeAtackBtn = document.querySelector(".timeAtack-radio");
const practiceBtn = document.querySelector(".practise-radio");
const leaders = document.querySelector(".leaders__list");

const toggleMode = (usersData, activeMode) => {
  timeAtackBtn.classList.toggle("active-mode");
  practiceBtn.classList.toggle("active-mode");
  sortUsers(usersData, activeMode);
  showLeaders(usersData, activeMode);
};

const showLeaders = (usersData, activeMode) => {
  leaders.innerHTML = "";
  usersData.forEach((element) => {
    leaders.innerHTML += `<li>
      <div class="leaders__item">
          <p class="name">${element.name}</p>
          <p class="score">${element[activeMode]}</p>
      </div>
  </li>`;
  });
};

const sortUsers = (usersData, activeMode) => {
  usersData.sort(function (a, b) {
    if (a[activeMode] > b[activeMode]) {
      return -1;
    } else if (b[activeMode] > a[activeMode]) {
      return 1;
    }
    return 0;
  });
};

function renderLeaders(usersData) {
  if (leaders) {
    sortUsers(usersData, "practice");
    showLeaders(usersData, "practice");
  }
  practiceBtn?.addEventListener("click", () => {
    toggleMode(usersData, "practice");
    practiceBtn.disabled = true;
    timeAtackBtn.disabled = false;
  
  });

  timeAtackBtn?.addEventListener("click", () => {
    toggleMode(usersData, "timeAtack");
    timeAtackBtn.disabled =true;
    practiceBtn.disabled = false;
  });
}
export default renderLeaders;
