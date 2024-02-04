document.addEventListener("DOMContentLoaded", () => {
  const queryPostfix = " site:reddit.com";
  const userInput = document.getElementById("userInput");
  const qInput = document.getElementsByName("q")[0];

  qInput.value = "";

  userInput.value.replace(queryPostfix, "");
  userInput.focus();
  userInput.select();

  document.querySelector("form").addEventListener("submit", (e) => {
    e.target.q.value = `${userInput.value}${queryPostfix}`;
  });
});
