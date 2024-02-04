document.addEventListener("DOMContentLoaded", () => {
  const queryPostfix = " site:reddit.com";
  const qInput = document.getElementsByName("q")[0];
  const userInput = document.getElementById("userInput");

  qInput.value = "";

  userInput.focus();
  userInput.select();

  document.querySelector("form").addEventListener("submit", (e) => {
    e.target.q.value = `${userInput.value}${queryPostfix}`;
  });
});
