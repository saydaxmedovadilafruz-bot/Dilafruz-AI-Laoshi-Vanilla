function initParallax() {
  const hero = document.getElementById("hero");
  const layers = hero.querySelectorAll("[data-depth]");
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let scrollY = window.scrollY;

  function render() {
    layers.forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth);
      const moveX = mouseX * depth * 60;
      const moveY = mouseY * depth * 60 + scrollY * depth * 0.15;
      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    render();
  });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    render();
  });
}
