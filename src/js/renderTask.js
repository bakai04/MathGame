import {
  generateExample,
  renderExample,
  renderLevel,
  renderGameInformation,
} from "./renderExampleFunc.js";

export function renderTask(usersData) {
  const result = document.querySelector(".result");
  const form = document.querySelector(".task-form");

  let count = 0;
  let example = generateExample();
  let point = 1;
  let corect = 0;
  let inCorrect = 0;

  result?.focus();
  renderExample(example);

  form?.addEventListener("submit", () => {
    if (result.value === "") return;

    if (Number(result.value) === example.result) {
      corect++;
      count += point;
    } else {
      inCorrect++;
      count -= point;
    }
    form.classList.toggle("game__left");
    form.classList.toggle("game__right");
    setTimeout(() => {
      form.classList.toggle("game__right");
      form.classList.toggle("game__left");

    }, 500);

    renderGameInformation(count, corect, inCorrect);
    point = renderLevel(count);
    result.value = "";
    example = generateExample();
    renderExample(example);
  });
}
