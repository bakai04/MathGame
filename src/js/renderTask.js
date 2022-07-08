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
  let corect = 0;
  let inCorrect = 0;

  result?.focus();
  renderExample(example);

  form?.addEventListener("submit", () => {
    if (result.value === "") return;
    if (Number(result.value) === example.result) {
      corect++;
      count += 1;
    } else {
      inCorrect++;
      count -= 1;
    }

    renderGameInformation(count, corect, inCorrect);
    renderLevel(count);
    result.value = "";
    example = generateExample();
    renderExample(example);
  });
}
