function initNavbar() {
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  burger.addEventListener("click", () => {
    navbar.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("is-open");
    });
  });
}
