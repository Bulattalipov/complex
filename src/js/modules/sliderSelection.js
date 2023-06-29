/* eslint-disable no-unused-vars */
import Swiper, { Navigation, Pagination } from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const swiper = document.querySelector('.selection-page__slider');

  if (!swiper) return;

  const navigation = {
    nextEl: swiper.closest('.page-swiper-parent').querySelector('.js-next-slide'),
    prevEl: swiper.closest('.page-swiper-parent').querySelector('.js-prev-slide'),
  };

  const pagination = {
    el: '.swiper-pagination',
    type: 'bullets',
  }

  const obj = {
    slidesPerView: 'auto',
    spaceBetween: 0,
    navigation,
    pagination
  };

  const instance = new Swiper(swiper, obj);
}
