export default () => {
  const btns = document.querySelectorAll(".landing-page-card-content .close");
  const openBtns = document.querySelectorAll(".landing-page-card-link2");
  const overlay = document.querySelectorAll(".landing-page-card-content");

  if (btns.length === 0) return;

  openBtns.forEach(el => {
    el.addEventListener("click", () => {
      el.closest(".landing-page-card").querySelector(".landing-page-card-content").classList.add("is-active");
    });
  })

  btns.forEach(el => {
    el.addEventListener("click", () => {
      el.closest(".landing-page-card-content").classList.remove("is-active");
    });
  });

  overlay.forEach(elmnt => {
    elmnt.addEventListener('click', (e) => {
      if (!e.target.closest('.landing-page-card-content-inner')) {
        elmnt.classList.remove("is-active");
      }
    });
  })
};
