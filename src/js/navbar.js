function navbar() {
  const userName = document.querySelector(".user-name");
  if (userName) userName.textContent = JSON.parse(localStorage.getItem("data")).name;
}
export default navbar;
