const leaders = document.querySelector(".leaders__list");
const prevGameMode = JSON.parse(localStorage.getItem("mode"));
const modes = document.querySelectorAll(".mode");

const toggleMode = (usersData) => {
  modes.forEach((el) => {
    if (el.checked) {
      sortUsers(usersData, el.id);
      showLeaders(usersData, el.id);
    }
  });
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
  const modeSpace = document.querySelector(".mode__inner");
  document.querySelector(`#${prevGameMode}`).checked = true;

  toggleMode(usersData);
  modeSpace.addEventListener("change", ()=>{toggleMode(usersData)});

}
export default renderLeaders;
