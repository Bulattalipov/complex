/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Pagination } from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const swipers = Array.from(document.querySelectorAll('.page-swiper'));

  swipers.forEach((sldier) => {
    const slidesCount = Number(sldier.dataset.slides) || 1;
    const slidesGap = Number(sldier.dataset.gap) || 10;
    const slidesNav = sldier.dataset.nav;
    const slidesPag = sldier.dataset.pagination;
    const num = sldier.dataset.num;
    const slidesLoop = sldier.dataset.loop;
    let currentNum = 1;

    const navigation = slidesNav ? {
      nextEl: sldier.closest('.page-swiper-parent').querySelector('.js-next-slide'),
      prevEl: sldier.closest('.page-swiper-parent').querySelector('.js-prev-slide'),
    } : false;

    const pagination = slidesPag ? {
      el: '.swiper-pagination',
      type: 'bullets',
    } : false;

    const loop = slidesLoop ? {
      loop: true,
      loopedSlides: 10
    } : false;

    const obj = {
      slidesPerView: slidesCount,
      spaceBetween: slidesGap,
      navigation,
      pagination,
      loop
    };

    const instance = new Swiper(sldier, obj);


    if (!num) return;
    const parentCon = sldier.querySelector('.swiper-number');

    let l = `
      <span data-num='${currentNum}'> из </span>
      <span>${instance.slides.length}</span>
    `
    parentCon.innerHTML = l;


    instance.on("slideChange", (swiper) => {
      let c = parentCon.querySelector('span[data-num]');
      let n = swiper.activeIndex;
      n += 1;
      c.setAttribute('data-num', n)
    })
  });
};
