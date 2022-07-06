function renderLeaders(usersData) {
  const leaders = document.querySelector(".leaders__list");

  usersData.forEach((element) => {
    console.log(element);
    leaders.innerHTML += 
    `<li>
        <div class="leaders__item">
            <p class="name">${element.name}</p>
            <p class="score">${element.practise}</p>
        </div>
    </li>`;
  });
}
export default renderLeaders;
