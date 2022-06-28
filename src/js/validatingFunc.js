const inputValidatingFunctions = {
  name: [
    function (value) {
      if (value.length <= 0) {
        return "поле обязательно*";
      } else {
        return "";
      }
    },
    function (value) {
      const capitalLetters = /[A-Z]|[А-Я]/;
      if (capitalLetters.test(value[0])) {
        return "";
      } else {
        return "Первая буква должен быть заглавным*";
      }
    },
    function (value) {
      if (value.length < 3) {
        return "должно быть более 3 символов*";
      }
    },
  ],
  email: [
    function (value) {
      if (value.length <= 0) {
        return "поле обязательно*";
      } else {
        return "";
      }
    },
    function (value) {
      if (value.length < 3) {
        return "должно быть более 3 символов*";
      }
    },
  ],
  textarea: [
    function (value) {
      if (value.length <= 0) {
        return "поле обязательно*";
      } else {
        return "";
      }
    },
    function (value) {
      if (value.length < 3) {
        return "должно быть более 3 символов*";
      }
    },
  ],
};

export function renderValidation(formInput) {
  const warningErrorText = document.querySelector(
    `.warning-${formInput.name}-error`
  );

  let errorText = "";
  inputValidatingFunctions[formInput.name].forEach((getErrorText) => {
    if (errorText) return;
    errorText = getErrorText(formInput.value);
  });
  warningErrorText.textContent = errorText;
  formInput.classList.add("error");
  if (!errorText) {
    formInput.classList.remove("error");
    return true;
  }
}
