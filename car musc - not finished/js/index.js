const swiper1 = new Swiper('.material__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.material__swiper-button-next',
        prevEl: '.material__swiper-button-prev',
    },
});