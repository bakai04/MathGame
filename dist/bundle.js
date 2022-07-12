/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game/./src/css/main.scss?");

/***/ }),

/***/ "./src/js/checkIn.js":
/*!***************************!*\
  !*** ./src/js/checkIn.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chooseMode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chooseMode.js */ \"./src/js/chooseMode.js\");\n\r\nconst nameInput = document.querySelector(\".name\");\r\nconst checkInBtn = document.querySelector(\".lets-go\");\r\n\r\nfunction submitUserData(usersData) {\r\n  const user = {\r\n    name: nameInput.value,\r\n    timeAtack: 0,\r\n    practice: 0,\r\n  };\r\n\r\n  usersData.forEach((element, index) => {\r\n    if (element.name === nameInput.value) {\r\n      user.timeAtack = element.timeAtack;\r\n      user.practice = element.practice;\r\n      usersData.splice(index, 1);\r\n    }\r\n  });\r\n  usersData.unshift(user);\r\n  localStorage.setItem(\"data\", JSON.stringify(usersData));\r\n}\r\n\r\nfunction inputValidation() {\r\n  checkInBtn.disabled = !nameInput.value;\r\n  nameInput?.addEventListener(\"input\", () => {\r\n    checkInBtn.disabled = !nameInput.value;\r\n  });\r\n}\r\n\r\nfunction checkIn(usersData) {\r\n  if (nameInput) {\r\n    nameInput.value = usersData[0]?.name || \"\";\r\n    inputValidation();\r\n  }\r\n\r\n  checkInBtn?.addEventListener(\"click\", function () {\r\n    submitUserData(usersData);\r\n    (0,_chooseMode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkIn);\r\n\n\n//# sourceURL=webpack://game/./src/js/checkIn.js?");

/***/ }),

/***/ "./src/js/chooseMode.js":
/*!******************************!*\
  !*** ./src/js/chooseMode.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction chooseMode() {\r\n  const modes = document.querySelectorAll(\".mode\");\r\n  modes.forEach((el) => {\r\n    el.checked && localStorage.setItem(\"mode\", JSON.stringify(el.id));\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chooseMode);\r\n\n\n//# sourceURL=webpack://game/./src/js/chooseMode.js?");

/***/ }),

/***/ "./src/js/getUsersData.js":
/*!********************************!*\
  !*** ./src/js/getUsersData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getUsersData() {\r\n  const usersData = JSON.parse(localStorage.getItem(\"data\"));\r\n  return  usersData ?? [];\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUsersData);\r\n\n\n//# sourceURL=webpack://game/./src/js/getUsersData.js?");

/***/ }),

/***/ "./src/js/leaders.js":
/*!***************************!*\
  !*** ./src/js/leaders.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst leaders = document.querySelector(\".leaders__list\");\r\nconst prevGameMode = JSON.parse(localStorage.getItem(\"mode\")) ?? \"practice\";\r\nconst modes = document.querySelectorAll(\".mode\");\r\n\r\nconst showLeaders = (usersData, activeMode, activeUser) => {\r\n  leaders.innerHTML = \"\";\r\n    usersData.forEach((element) => {\r\n      leaders.innerHTML += `<li class=${\r\n        activeUser.name === element.name && \"active-user\"\r\n      }>\r\n      <div class=\"leaders__item\">\r\n          <p class=\"name\">${element.name}</p>\r\n          <p class=\"score\">${element[activeMode]}</p>\r\n      </div>\r\n  </li>`;\r\n    });\r\n};\r\n\r\nconst sortUsers = (usersData, activeMode) => {\r\n  usersData.sort(function (a, b) {\r\n    if (a[activeMode] > b[activeMode]) {\r\n      return -1;\r\n    } else if (b[activeMode] > a[activeMode]) {\r\n      return 1;\r\n    }\r\n    return 0;\r\n  });\r\n};\r\n\r\nconst toggleMode = (usersData, activeUser) => {\r\n  modes.forEach((el) => {\r\n    if (el.checked) {\r\n      sortUsers(usersData, el.id);\r\n      showLeaders(usersData, el.id, activeUser);\r\n    }\r\n  });\r\n};\r\n\r\nfunction renderLeaders(usersData) {\r\n  const modeSpace = document.querySelector(\".mode__inner\");\r\n  const activeUser = usersData[0];\r\n  document.querySelector(`#${prevGameMode}`).checked = true;\r\n\r\n  toggleMode(usersData, activeUser);\r\n  modeSpace.addEventListener(\"change\", () => {\r\n    toggleMode(usersData, activeUser);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLeaders);\r\n\n\n//# sourceURL=webpack://game/./src/js/leaders.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _checkIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkIn.js */ \"./src/js/checkIn.js\");\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.js */ \"./src/js/navbar.js\");\n/* harmony import */ var _getUsersData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getUsersData.js */ \"./src/js/getUsersData.js\");\n/* harmony import */ var _renderTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderTask.js */ \"./src/js/renderTask.js\");\n/* harmony import */ var _stopGame_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stopGame.js */ \"./src/js/stopGame.js\");\n/* harmony import */ var _leaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaders */ \"./src/js/leaders.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer.js */ \"./src/js/timer.js\");\n/* harmony import */ var _rules_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules.js */ \"./src/js/rules.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst usersData = (0,_getUsersData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_checkIn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(usersData);\r\n(0,_rules_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\nif (window.location.href.indexOf(\"/game.html\") != -1) {\r\n  (0,_navbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(usersData);\r\n  (0,_stopGame_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(usersData);\r\n  (0,_renderTask_js__WEBPACK_IMPORTED_MODULE_4__.renderTask)(usersData);\r\n  (0,_timer_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(usersData);\r\n}\r\n\r\nif(window.location.href.indexOf(\"/leaders.html\") != -1){\r\n    (0,_leaders__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(usersData);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://game/./src/js/main.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction setNavbar(usersData) {\r\n  const userName = document.querySelector(\".user-name\");\r\n  const lastRecord = document.querySelector(\".raiting\");\r\n  const activeMode =JSON.parse(localStorage.getItem(\"mode\"));  \r\n  if (userName) {\r\n    userName.textContent = usersData[0].name;\r\n    lastRecord.textContent = \"Last record: \"+ usersData[0][activeMode];\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setNavbar);\r\n\n\n//# sourceURL=webpack://game/./src/js/navbar.js?");

/***/ }),

/***/ "./src/js/renderExampleFunc.js":
/*!*************************************!*\
  !*** ./src/js/renderExampleFunc.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countAnimated\": () => (/* binding */ countAnimated),\n/* harmony export */   \"generateExample\": () => (/* binding */ generateExample),\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"renderExample\": () => (/* binding */ renderExample),\n/* harmony export */   \"renderGameInformation\": () => (/* binding */ renderGameInformation),\n/* harmony export */   \"renderLevel\": () => (/* binding */ renderLevel)\n/* harmony export */ });\nlet maxRange = 10;\r\nlet minRange = 1;\r\n\r\nconst getRandom = (min = minRange, max = maxRange) => {\r\n  return Math.round(Math.random() * (max - min) + min);\r\n};\r\n\r\nfunction getDividingNumber(num) {\r\n  let dividingNumbers = [];\r\n  for (let i = 1; i <= num; i++) {\r\n    if (num % i === 0) {\r\n      dividingNumbers.push(i);\r\n    }\r\n  }\r\n\r\n  return dividingNumbers[getRandom(0, dividingNumbers.length - 1)];\r\n}\r\n\r\nconst getExampleData = [\r\n  function plus() {\r\n    const num1 = getRandom();\r\n    const num2 = getRandom();\r\n    const result = num1 + num2;\r\n    const operator = \"+\";\r\n    return { num1, num2, operator, result };\r\n  },\r\n  function minus() {\r\n    const num1 = getRandom();\r\n    const num2 = getRandom();\r\n    const result = num1 - num2;\r\n    const operator = \"-\";\r\n    return { num1, num2, operator, result };\r\n  },\r\n  function multiplication() {\r\n    const num1 = getRandom();\r\n    const num2 = getRandom();\r\n    const result = num1 * num2;\r\n    const operator = \"*\";\r\n    return { num1, num2, operator, result };\r\n  },\r\n  function division() {\r\n    const num1 = getRandom();\r\n    const num2 = getDividingNumber(num1);\r\n    const operator = \"/\";\r\n    const result = num1 / num2;\r\n    return { num1, num2, operator, result };\r\n  },\r\n];\r\n\r\nconst generateExample = () => {\r\n  const example = getExampleData[getRandom(0, 3)]();\r\n  return example;\r\n};\r\n\r\nconst renderExample = (data) => {\r\n  const form = document.querySelector(\".task-form\");\r\n  const task = document.querySelector(\".task\");\r\n\r\n  if (task) task.innerHTML = `${data.num1} ${data.operator} ${data.num2}`;\r\n\r\n  form.classList.toggle(\"game__left\");\r\n  form.classList.toggle(\"game__right\");\r\n  setTimeout(() => {\r\n    form.classList.toggle(\"game__right\");\r\n    form.classList.toggle(\"game__left\");\r\n  }, 500);\r\n};\r\n\r\nconst renderLevel = (count) => {\r\n  const level = document.querySelector(\".level\");\r\n  if (count >= maxRange) {\r\n    minRange = maxRange;\r\n    maxRange = maxRange + 10;\r\n    level.textContent = `Level: ${maxRange / 10}`;\r\n    return String(count).length;\r\n  } else {\r\n    return 1;\r\n  }\r\n};\r\n\r\nconst renderGameInformation = (count, corect, incorect) => {\r\n  const countEl = document.querySelectorAll(\".count\");\r\n  const correctEl = document.querySelectorAll(\".correct\");\r\n  const incorrectEl = document.querySelectorAll(\".incorrect\");\r\n\r\n  showGameInformation(countEl, count);\r\n  showGameInformation(correctEl, \"correct: \" + corect);\r\n  showGameInformation(incorrectEl, \"Incorrect: \" + incorect);\r\n};\r\n\r\nconst showGameInformation = (counterElements, gameInformation) => {\r\n  counterElements.forEach((element) => {\r\n    element.textContent = gameInformation;\r\n  });\r\n};\r\n\r\nfunction countAnimated(exampleValid) {\r\n  const trueFalse = document.querySelector(\".true-false\");\r\n  const count = document.querySelector(\".count\");\r\n\r\n  if (exampleValid) {\r\n    trueFalse.textContent = \"+1\";\r\n    trueFalse.classList.remove(\"error\");\r\n  } else {\r\n    trueFalse.textContent = \"-1\";\r\n    trueFalse.classList.add(\"error\");\r\n    count.classList.add(\"error-example\")\r\n  }\r\n  trueFalse.classList.add(\"true-false--active\");\r\n  setTimeout(() => {\r\n    trueFalse.classList.remove(\"true-false--active\");\r\n    count.classList.remove(\"error-example\")\r\n  }, 900);\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/js/renderExampleFunc.js?");

/***/ }),

/***/ "./src/js/renderTask.js":
/*!******************************!*\
  !*** ./src/js/renderTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTask\": () => (/* binding */ renderTask)\n/* harmony export */ });\n/* harmony import */ var _renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderExampleFunc.js */ \"./src/js/renderExampleFunc.js\");\n\r\n\r\nfunction renderTask() {\r\n  const result = document.querySelector(\".result\");\r\n  const form = document.querySelector(\".task-form\");\r\n\r\n  let count = 0;\r\n  let example = (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.generateExample)();\r\n  let corect = 0;\r\n  let inCorrect = 0;\r\n\r\n  result?.focus();\r\n  (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderExample)(example);\r\n\r\n  form?.addEventListener(\"submit\", () => {\r\n    if (result.value === \"\") return;\r\n    if (Number(result.value) === example.result) {\r\n      corect++;\r\n      count += 1;\r\n    } else {\r\n      inCorrect++;\r\n      count -= 1;\r\n    }\r\n\r\n    (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.countAnimated)(Number(result.value) === example.result);\r\n    (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderGameInformation)(count, corect, inCorrect);\r\n    (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderLevel)(count);\r\n    result.value = \"\";\r\n    example = (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.generateExample)();\r\n    (0,_renderExampleFunc_js__WEBPACK_IMPORTED_MODULE_0__.renderExample)(example);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://game/./src/js/renderTask.js?");

/***/ }),

/***/ "./src/js/rules.js":
/*!*************************!*\
  !*** ./src/js/rules.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction toggleRules() {\r\n  const rulesBtn = document.querySelector(\".rules-btn\");\r\n  const rules = document.querySelector(\".rules\");\r\n  const rulesInner = document.querySelector(\".rules__inner\")\r\n  \r\n  rulesBtn?.addEventListener(\"click\", () => {\r\n    rules.classList.remove(\"d-none\");\r\n  });\r\n\r\n  rules?.addEventListener(\"click\", (e) => {\r\n    if (e.path.indexOf(rulesInner) === -1) {\r\n        rules.classList.add(\"d-none\");\r\n    }\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleRules);\r\n\n\n//# sourceURL=webpack://game/./src/js/rules.js?");

/***/ }),

/***/ "./src/js/stopGame.js":
/*!****************************!*\
  !*** ./src/js/stopGame.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLastRecord\": () => (/* binding */ checkLastRecord),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkLastRecord(usersData) {\r\n  const gameOverTitle = document.querySelector(\".game-over\");\r\n  const resultGame = document.querySelector(\".result-page\");\r\n  const count = document.querySelector(\".count\").textContent;\r\n  const activeMode = JSON.parse(localStorage.getItem(\"mode\"));\r\n\r\n  resultGame.classList.toggle(\"d-none\");\r\n\r\n  if (count > usersData[0][activeMode]) {\r\n    usersData[0][activeMode] = count;\r\n    gameOverTitle.textContent = \"New Record\";\r\n    localStorage.setItem(\"data\", JSON.stringify(usersData));\r\n  }\r\n}\r\n\r\nfunction stopGame(usersData) {\r\n  const stopBtn = document.querySelector(\".stop-btn\");\r\n  const result = document.querySelector(\".result\");\r\n\r\n  stopBtn?.addEventListener(\"click\", () => {\r\n    result.disabled = true;\r\n    checkLastRecord(usersData);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stopGame);\r\n\n\n//# sourceURL=webpack://game/./src/js/stopGame.js?");

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stopGame_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopGame.js */ \"./src/js/stopGame.js\");\n\r\n\r\nconst gameMode = JSON.parse(localStorage.getItem(\"mode\"));\r\nconst timer = document.querySelector(\".timer\");\r\nlet endTime = 30;\r\n\r\nfunction renderTime() {\r\n  let second = String(endTime % 60).padStart(2, \"0\");\r\n  let minute = String((endTime - second) / 60).padStart(2, \"0\");\r\n  endTime < 10 && timer.classList.toggle(\"warning\");\r\n  timer.textContent = `${minute}:${second}`;\r\n}\r\n\r\nfunction time(usersData) {\r\n  if (gameMode === \"timeAtack\") {\r\n    let interval = setInterval(() => {\r\n      endTime = endTime - 1;\r\n      renderTime();\r\n      if (endTime <= 0) {\r\n        clearInterval(interval);\r\n        (0,_stopGame_js__WEBPACK_IMPORTED_MODULE_0__.checkLastRecord)(usersData);\r\n      }\r\n    }, 1000);\r\n  } else {\r\n    timer.classList.add(\"d-none\");\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (time);\r\n\n\n//# sourceURL=webpack://game/./src/js/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;