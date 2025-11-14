document.addEventListener("DOMContentLoaded", () => {
  fetch("botao-lateral.html")
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    });
});