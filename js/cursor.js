function initCursor() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  const dot = document.getElementById("cursorDot");
  let x = 0;
  let y = 0;

  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
  });

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => dot.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => dot.classList.remove("is-hover"));
  });
}
