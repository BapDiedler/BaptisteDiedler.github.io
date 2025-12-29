document.addEventListener("DOMContentLoaded", () => {
  const frBtn = document.getElementById("fr");
  const enBtn = document.getElementById("en");

  function setLanguage(lang) {
    document.querySelectorAll("[data-fr]").forEach(el => {
      el.textContent = el.dataset[lang];
    });
  }

  frBtn.addEventListener("click", () => setLanguage("fr"));
  enBtn.addEventListener("click", () => setLanguage("en"));
});
  
