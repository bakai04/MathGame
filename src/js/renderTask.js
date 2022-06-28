const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const sum = (a, b, operator) => {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  return a * b;
};

const generateExample = () => {
  const operators = ["+", "-", "*"];
  const num1 = getRandom(1, 10);
  const num2 = getRandom(1, 10);
  const operator = operators[getRandom(0, 2)];
  const result = sum(num1, num2, operator);
  return { num1, num2, operator, result };
};

const renderExample = (data) => {
  const task = document.querySelector(".task");
  const form = document.querySelector(".task-form");
  form?.classList.remove("task-form--active");
  form?.classList.add("task-form--active");
  if(task) task.innerHTML = `${data.num1} ${data.operator} ${data.num2} =`;
};
export function renderTask() {
  const result = document.querySelector(".result");
  const winElement = document.querySelector(".count");
  const form = document.querySelector(".task-form");
  let count = 0;
  let example = generateExample();
  result?.focus();
  renderExample(example);

  form?.addEventListener("submit", () => {
    if (!result.value && result.value !== 0) return;
    count += Number(result.value) === Number(example.result) ? 1 : -1;
    winElement.textContent = count;
    result.value = "";
    example = generateExample();
    renderExample(example);
  });
}
