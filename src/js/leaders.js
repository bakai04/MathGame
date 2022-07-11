const leaders = document.querySelector(".leaders__list");
const prevGameMode = JSON.parse(localStorage.getItem("mode")) ?? "practice";
const modes = document.querySelectorAll(".mode");

const showLeaders = (usersData, activeMode, activeUser) => {
  leaders.innerHTML = "";
    usersData.forEach((element) => {
      leaders.innerHTML += `<li class=${
        activeUser.name === element.name && "active-user"
      }>
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

const toggleMode = (usersData, activeUser) => {
  modes.forEach((el) => {
    if (el.checked) {
      sortUsers(usersData, el.id);
      showLeaders(usersData, el.id, activeUser);
    }
  });
};

function renderLeaders(usersData) {
  const modeSpace = document.querySelector(".mode__inner");
  const activeUser = usersData[0];
  document.querySelector(`#${prevGameMode}`).checked = true;

  toggleMode(usersData, activeUser);
  modeSpace.addEventListener("change", () => {
    toggleMode(usersData, activeUser);
  });
}

export default renderLeaders;
