document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    e.target.q.value = `${formEntries.q} site:reddit.com`;
  });
});
