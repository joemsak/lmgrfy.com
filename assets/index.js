(() => {
  const QUERY_POSTFIX = " site:reddit.com";

  document.addEventListener("DOMContentLoaded", () => {
    const qInputEl = document.getElementsByName("q")[0];
    const userInputEl = document.getElementById("userInput");

    qInputEl.value = "";
    userInputEl.select();

    document.querySelector("form").addEventListener("submit", (e) => {
      e.target.q.value = `${userInputEl.value}${QUERY_POSTFIX}`;
    });
  });
})();
