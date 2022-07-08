let maxRange = 10;
let minRange = 1;

export const getRandom = (min = minRange, max = maxRange) => {
  return Math.round(Math.random() * (max - min) + min);
};

function getDividingNumber(num) {
  let dividingNumbers = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      dividingNumbers.push(i);
    }
  }

  return dividingNumbers[getRandom(0, dividingNumbers.length - 1)];
}

const getExampleData = [
  function plus() {
    const num1 = getRandom();
    const num2 = getRandom();
    const result = num1 + num2;
    const operator = "+";
    return { num1, num2, operator, result };
  },
  function minus() {
    const num1 = getRandom();
    const num2 = getRandom();
    const result = num1 - num2;
    const operator = "-";
    return { num1, num2, operator, result };
  },
  function multiplication() {
    const num1 = getRandom();
    const num2 = getRandom();
    const result = num1 * num2;
    const operator = "*";
    return { num1, num2, operator, result };
  },
  function division() {
    const num1 = getRandom();
    const num2 = getDividingNumber(num1);
    const operator = "/";
    const result = num1 / num2;
    return { num1, num2, operator, result };
  },
];

export const generateExample = () => {
  const example = getExampleData[getRandom(0, 3)]();
  return example;
};

export const renderExample = (data) => {
  const form = document.querySelector(".task-form");
  const task = document.querySelector(".task");

  if (task) task.innerHTML = `${data.num1} ${data.operator} ${data.num2} =`;

  form.classList.toggle("game__left");
  form.classList.toggle("game__right");
  setTimeout(() => {
    form.classList.toggle("game__right");
    form.classList.toggle("game__left");
  }, 500);
};

export const renderLevel = (count) => {
  const level = document.querySelector(".level");
  if (count >= maxRange) {
    minRange = maxRange;
    maxRange = maxRange + 10;
    level.textContent = `Level: ${maxRange / 10}`;
    return String(count).length;
  } else {
    return 1;
  }
};

export const renderGameInformation = (count, corect, incorect) => {
  const countEl = document.querySelectorAll(".count");
  const correctEl = document.querySelectorAll(".correct");
  const incorrectEl = document.querySelectorAll(".incorrect");

  showGameInformation(countEl, count);
  showGameInformation(correctEl, "correct: " + corect);
  showGameInformation(incorrectEl, "Incorrect: " + incorect);
};

const showGameInformation = (counterElements, gameInformation) => {
  counterElements.forEach((element) => {
    element.textContent = gameInformation;
  });
};
