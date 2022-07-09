function setNavbar(usersData) {
  const userName = document.querySelector(".user-name");
  const lastRecord = document.querySelector(".raiting");
  const activeMode =JSON.parse(localStorage.getItem("mode"));  
  if (userName) {
    userName.textContent = usersData[0].name;
    lastRecord.textContent = "Last record: "+ usersData[0][activeMode];
  }
}
export default setNavbar;
