export default () => {
  const btns = document.querySelectorAll(".more-text-btn");

  if (btns.length === 0) return;

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".more-text-parent").querySelector(".more-text").classList.toggle("is-active");

      if (btn.closest(".more-text-parent").querySelector(".more-text").classList.contains("is-active")) {
        btn.innerHTML = "Скрыть";
      } else {
        btn.innerHTML = "Показать еще";
      }
    });
  });
};
