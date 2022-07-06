
import {
  generateExample,
  renderExample,
  renderLevel,
  renderGameInformation,
} from "./renderExampleFunc.js";

export function renderTask(usersData) {
  const result = document.querySelector(".result");
  const form = document.querySelector(".task-form");
  const stopBtn = document.querySelector(".stop-btn");

  let count = 0;
  let example = generateExample();
  let point = 1;
  let corect = 0;
  let inCorrect = 0;

  result?.focus();
  renderExample(example);

  form?.addEventListener("submit", () => {
    // REVIEW: contradiction in conditional
    if (!result.value && result.value !== 0) return;

    if (Number(result.value) === example.result) {
      corect++;
      count += point;
    } else {
      inCorrect++;
      count -= point;
    }

    renderGameInformation(count, corect, inCorrect);
    point = renderLevel(count);
    result.value = "";
    example = generateExample();
    renderExample(example);
  });
}
