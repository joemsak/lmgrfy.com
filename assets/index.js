document.addEventListener("DOMContentLoaded", () => {
  const queryPostfix = " site:reddit.com";
  const qInput = document.getElementsByName("q")[0];

  qInput.value = qInput.value.replace(queryPostfix, "");
  qInput.focus();
  qInput.select();

  document.querySelector("form").addEventListener("submit", (e) => {
    e.target.q.value = `${qInput.value}${queryPostfix}`;
  });
});
