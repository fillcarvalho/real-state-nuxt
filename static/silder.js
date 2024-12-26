const silder = () => {
  const swiperElement = document.querySelector(".swiper");
  if (swiperElement) {
    // swiper slider
    var swiper = new Swiper(".primary-slider", {
      slidesPerView: 1,
      effect: "fade",
      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // featured apartments slider
    var swiper = new Swiper(".featured-apartments-slider", {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1800: {
          slidesPerView: 4,
        },
      },
    });

    // testimonials slider
    var swiper = new Swiper(".testimonials-slider", {
      slidesPerView: 1,

      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      },
    });

    // news slider
    var swiper = new Swiper(".news-slider", {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    // product details slider
    var swiper = new Swiper(".product-details-slider", {
      slidesPerView: 1,
      loop: true,

      speed: 800,
      preventClicksPropagation: false,
      centeredSlides: true,
      autoplay: {
        delay: 10000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 1.6,
        },
        992: {
          slidesPerView: 1.55,
        },

        1600: {
          slidesPerView: 1.9,
        },
      },
    });
  }
};
