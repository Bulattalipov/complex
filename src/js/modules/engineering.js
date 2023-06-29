import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const btns = document.querySelectorAll(".engineering-card__link");
  const closeBtns = document.querySelectorAll('.engineering__content-close');
  const contents = document.querySelectorAll('.engineering__content');

  if (btns.length === 0) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      disableScroll();
      btn.closest('.engineering__item').querySelector('.engineering__content').classList.add("is-active");
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      enableScroll();
      btn.closest('.engineering__item').querySelector('.engineering__content').classList.remove("is-active");
    });
  });

  contents.forEach(elmnt => {
    elmnt.addEventListener('click', (e) => {
      if (!e.target.closest('.engineering__content-inner')) {
        elmnt.classList.remove("is-active");
        enableScroll();
      }
    });
  })
};
