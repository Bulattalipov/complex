import Swiper, {
    Navigation,
    Pagination
  } from "swiper/swiper-bundle";

Swiper.use([Navigation, Pagination]);

export default function sliderModal() {
    const sliderModal = document.querySelectorAll('.modal__equipment-slider-wrapper');

    sliderModal.forEach(slider => {
    if (!slider) return;

    const swiper = new Swiper(slider.querySelector('.modal__equipment-slider'), {
        speed: 500,
        slidesPerView: 1,
        navigation: {
            nextEl: slider.querySelector('.swiper-button-next'),
            prevEl: slider.querySelector('.swiper-button-prev')
        },
        pagination: {
            el: slider.querySelector('.swiper-pagination'),
            clickable: true,
        },
    })

        // const btn = slider.querySelector('.supplied-equipment__swiper-next').classList.contains('swiper-button-lock');
        // if (btn) {
        // slider.querySelector('.supplied-equipment__swiper-next').parentElement.style.display = "none";
        // } else {
        // slider.querySelector('.supplied-equipment__swiper-next').parentElement.style.display = "block";
        // }
    })
}