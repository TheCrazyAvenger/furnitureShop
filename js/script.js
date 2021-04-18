var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    width: 934,
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

  var swiper = new Swiper('.swiper-container-inspirations', {
    slidesPerView: 2.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    slideActiveClass: 'active_inspirations',
    height: 40,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
    autoplay: {
        delay: 5000,
      },
  });

  var swiper = new Swiper('.swiper-container-tnt', {
    slidesPerView: 3,
    spaceBetween: 32,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'swiper-pagination-bullet-active-tnt'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });