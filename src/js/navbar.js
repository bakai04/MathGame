function setNavbar(usersData) {
  const userName = document.querySelector(".user-name");
  if (userName) userName.textContent = usersData[0].name;
}
export default setNavbar;
