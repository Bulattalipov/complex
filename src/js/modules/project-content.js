export default () => {
  const btns = document.querySelectorAll(".projects-detail__inner-btn");
  const openBtns = document.querySelectorAll(".projects-detail__btn");
  const overlay = document.querySelectorAll(".projects-detail__content");

  if (btns.length === 0) return;

  openBtns.forEach(el => {
    el.addEventListener("click", () => {
      el.closest(".projects-detail__item").querySelector(".projects-detail__content").classList.add("is-active");
    });
  })

  btns.forEach(el => {
    el.addEventListener("click", () => {
      el.closest(".projects-detail__content").classList.remove("is-active");
    });
  });

  overlay.forEach(elmnt => {
    elmnt.addEventListener('click', (e) => {
      if (!e.target.closest('.projects-detail__inner')) {
        elmnt.classList.remove("is-active");
      }
    });
  })
};
