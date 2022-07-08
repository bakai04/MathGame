function chooseMode() {
  const modes = document.querySelectorAll(".mode");
  modes.forEach((el) => {
    el.checked && localStorage.setItem("mode", JSON.stringify(el.id));
  });
}

export default chooseMode;
