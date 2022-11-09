const swiper1 = new Swiper('.material__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    speed: 2000,
    navigation: {
        nextEl: '.material__swiper-button-next',
        prevEl: '.material__swiper-button-prev',
    },
});

const swiper2 = new Swiper('.contaper__swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay: true,

    loop: true,
    navigation: {
        nextEl: '.contaper__swiper-button-next',
        prevEl: '.contaper__swiper-button-prev',
    },
});

const swiper3 = new Swiper('.revers__swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.revers__swiper-button-next',
        prevEl: '.revers__swiper-button-prev',
    },
});




const servBntOne = document.querySelector('.serv__btn1');
const servBntTwo = document.querySelector('.serv__btn2');
const servList = document.querySelector('.serv__list');

servBntTwo.addEventListener('click', function() {
    servList.classList.add('serv__list-active');
    servBntOne.classList.remove('serv__btn-after');
    servBntTwo.classList.add('serv__btn-after');

})

servBntOne.addEventListener('click', function() {
    servList.classList.remove('serv__list-active')
    servBntTwo.classList.remove('serv__btn-after');
    servBntOne.classList.add('serv__btn-after');
})

const swiper4 = new Swiper('.work__swiper', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    freeMode: true,
    speed: 100000,
    freeModeMomentum: false
});

const swiper5 = new Swiper('.work__swiper2', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 100000,
    freeModeMomentum: false
});

const swiper6 = new Swiper('.work__swiper3', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    loop: true,
    freeMode: true,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: true
    },
    freeMode: true,
    speed: 100000,
    freeModeMomentum: false
});