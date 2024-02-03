document.addEventListener("DOMContentLoaded", () => {
  const queryPostfix = " site:reddit.com";
  const backBtnDetector = document.getElementById("backButtonDetector");
  const qInput = document.getElementsByName("q")[0];

  if (backBtnDetector.value === "1") {
    backBtnDetector.value = 0;
    qInput.value = qInput.value.replace(queryPostfix, "");
  }

  qInput.focus();
  qInput.select();

  document.querySelector("form").addEventListener("submit", (e) => {
    backBtnDetector.value = 1;
    e.target.q.value = `${qInput.value}${queryPostfix}`;
  });
});
