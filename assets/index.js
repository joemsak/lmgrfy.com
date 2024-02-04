document.addEventListener("DOMContentLoaded", () => {
  const queryPostfix = " site:reddit.com";
  const qInput = document.getElementsByName("q")[0];
  const userInput = document.getElementById("userInput");

  qInput.value = "";
  userInput.value = localStorage.getItem("userInputValue");
  userInput.focus();
  userInput.select();

  document.querySelector("form").addEventListener("submit", (e) => {
    localStorage.setItem("userInputValue", userInput.value);
    e.target.q.value = `${userInput.value}${queryPostfix}`;
  });
});
