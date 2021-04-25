const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    slideActiveClass: 'active_intro',
    width: 934,
    breakpoints: {
      1230: {
        width: 934,
      },
      990: {
        width: 950,
      },
      770: {
        width: 730,
      },
      575: {
        width: 535,
      },
      450: {
        width: 410,
      },
      320: {
        width: 280,
      },
      280: {
        width: 240,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'swiper-pagination-bullet-active',
      bulletClass: 'swiper-pagination-bullet',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
      },
  });

  const swiper1 = new Swiper('.swiper-container-inspirations', {
    slidesPerView: 2.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    slideActiveClass: 'active_inspirations',
    height: 40,
    loopFillGroupWithBlank: true,
    breakpoints: {
      1230: {
        slidesPerView:2.1,
      },
      990: {
        slidesPerView: 1.4,
      },
      280: {
        slidesPerView: 1,
    },
  },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    autoplay: {
        delay: 5000,
      },
  });

  const swiper2 = new Swiper('.swiper-container-tnt', {
    slidesPerView: 3,
    spaceBetween: 32,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      1230: {
        slidesPerView:3,
        slidesPerGroup: 3,
      },
      770: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      280: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });