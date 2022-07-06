export const getRandom = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const calculate = (a, b, operator) => {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  return a * b;
};
export const resetGameInform = () => {
  renderGameInformation(0, 0, 0);
};
export const generateExample = () => {
  const operators = ["+", "-", "*"];
  const num1 = getRandom(1, 10);
  const num2 = getRandom(1, 10);
  const operator = operators[getRandom(0, 2)];
  const result = calculate(num1, num2, operator);
  return { num1, num2, operator, result };
};

export const renderExample = (data) => {
  const task = document.querySelector(".task");
  const form = document.querySelector(".task-form");
  // REVIEW: these 2 lines do opposite
  if (task) task.innerHTML = `${data.num1} ${data.operator} ${data.num2} =`;
};

export const renderLevel = (count) => {
  const level = document.querySelector(".level");
  if (count >= 0) {
    // REVIEW: this is not obvious, comment or rename things
    level.textContent = `Level: ${String(count).length}`;
    return String(count).length;
  } else {
    return 1;
  }
};

export const renderGameInformation = (count, corect, inCorect) => {
  const countEl = document.querySelectorAll(".count");
  const correctEl = document.querySelectorAll(".correct");
  // REVIEW: inCorrect => incorrect
  const inCorrectEl = document.querySelectorAll(".incorrect");
  showGameInformation(countEl, count);
  showGameInformation(correctEl, "correct: " + corect);
  showGameInformation(inCorrectEl, "Incorrect: " + inCorect);
};

const showGameInformation = (counterElements, gameInformation) => {
  counterElements.forEach((element) => {
    element.textContent = gameInformation;
  });
};
