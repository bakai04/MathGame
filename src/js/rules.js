function toggleRules() {
  const rulesBtn = document.querySelector(".rules-btn");
  const rules = document.querySelector(".rules");
  const rulesInner = document.querySelector(".rules__inner")
  
  rulesBtn?.addEventListener("click", () => {
    rules.classList.remove("d-none");
  });

  rules?.addEventListener("click", (e) => {
    if (e.path.indexOf(rulesInner) === -1) {
        rules.classList.add("d-none");
    }
  });
}

export default toggleRules;
