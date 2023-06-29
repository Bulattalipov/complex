import Choices from 'choices.js';
import { disableScroll, enableScroll } from '../helpers/disableScroll';

export default () => {
  const btn = document.querySelector('.catalog-product-filter__btn');
  const filter = document.querySelector('.catalog-product-filter__list');
  const customSelects = Array.from(document.querySelectorAll('.js-select'));
  const clear = document.querySelector('.catalog-product-filter__clear');
  const slcts = [];
  const descrbtns = document.querySelectorAll(".js-open-descr");
  const modal = document.querySelector(".engineering__content");
  const close = document.querySelector('.engineering__content-close');
  const contents = document.querySelectorAll('.engineering__content ');

  if (!btn) return;

  btn.addEventListener('click', () => {
    filter.classList.toggle('is-open');
    btn.classList.toggle('is-active');
  });

  customSelects.forEach((select) => {
    const slct = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      allowHTML: true,
    });

    slct.passedElement.element.addEventListener(
      'change',
      function (event) {
        clear.classList.add("is-active");
      },
      false,
    );

    slcts.push(slct);
  });

  clear.addEventListener("click", () => {
    slcts.forEach(slct => {
      slct.destroy();
      slct.init();
    });

    clear.classList.remove('is-active');
  });

  descrbtns.forEach(descrbtn => {
    descrbtn.addEventListener("click", () => {
      modal.classList.add("is-active");
      disableScroll();
    });
  })

  close.addEventListener('click', () => {
    modal.classList.remove("is-active");
    enableScroll();
  });

  contents.forEach(elmnt => {
    elmnt.addEventListener('click', (e) => {
      if (!e.target.closest('.engineering__content-inner')) {
        modal.classList.remove("is-active");
        enableScroll();
      }
    });
  })


  window.complex_api.filterselectts = slcts;
  window.complex_api.clearSelects = () => {
    slcts.forEach(slct => {
      slct.destroy();
      slct.init();
    });

    clear.classList.remove('is-active');
  };
};
