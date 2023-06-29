import Swiper, {
    Navigation
  } from "swiper/swiper-bundle";

Swiper.use([Navigation]);

export default function sliderSupplied() {
    if (window.matchMedia('(min-width: 575px)').matches) {
        const sliderSupplied = document.querySelectorAll('.supplied-equipment__slider-wrapper');
    
        sliderSupplied.forEach(slider => {
        if (!slider) return;
    
        const swiper = new Swiper(slider.querySelector('.supplied-equipment__slider'), {
            speed: 500,
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            // loopAdditionalSlides: 10,
            // loopSlides: 20,
            loopedSlidesLimit: false,
            navigation: {
                nextEl: slider.querySelector('.supplied-equipment__swiper-next'),
            //   prevEl: slider.querySelector('.slider-nav__prev')
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                1024: {
                    spaceBetween: 11,
                    slidesPerView: 3
                },
                1280: {
                    spaceBetween: 16,
                    slidesPerView: 3
                }
            },
        })

        // var thumbs = document.querySelectorAll('.supplied-equipment__slider .swiper-slide');
        // thumbs.forEach(el => el.addEventListener('mouseenter', function() {
        //     sliderDesc.slideTo(el.dataset.swiperSlideIndex)
        // }));
    
          const btn = slider.querySelector('.supplied-equipment__swiper-next').classList.contains('swiper-button-lock');
          if (btn) {
            slider.querySelector('.supplied-equipment__swiper-next').parentElement.style.display = "none";
          } else {
            slider.querySelector('.supplied-equipment__swiper-next').parentElement.style.display = "block";
          }
        })
    }
  }