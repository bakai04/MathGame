function navbar(usersData) {
  const userName = document.querySelector(".user-name");
  if (userName) userName.textContent = usersData[usersData.length-1].name;
}
export default navbar;
