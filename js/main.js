document.addEventListener("DOMContentLoaded", () => {
  initI18n();
  initNavbar();
  initScrollReveal();
  initCursor();
  initParallax();

  document.getElementById("year").textContent = new Date().getFullYear();
});
