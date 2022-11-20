const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

burger.addEventListener('click', function() {
    headerMenu.classList.toggle('header__menu-active');
    burger.classList.toggle('burger-active');
    line1.classList.toggle('line1-active');
    line2.classList.toggle('line2-active');
    line3.classList.toggle('line3-active');
})



const progressListPt = document.querySelector('.progress__list-pt');
const progressBtn = document.querySelector('.progress__btn');
progressBtn.addEventListener('click', function() {
    progressListPt.classList.add('progress__list-active');
    progressBtn.classList.add('progress__btn-none');
})



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
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        769: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1401: {
            slidesPerView: 3,
            spaceBetween: 50
        }

    }
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
    freeModeMomentum: false,
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        586: {
            slidesPerView: 3
        },
        993: {
            slidesPerView: 4
        },
        1201: {
            slidesPerView: 5
        },
        1401: {
            slidesPerView: 6
        }
    }
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
    freeModeMomentum: false,
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        586: {
            slidesPerView: 4
        },
        993: {
            slidesPerView: 4
        },
        1201: {
            slidesPerView: 5
        },
        1401: {
            slidesPerView: 6
        }
    }
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
    freeModeMomentum: false,
    breakpoints: {
        0: {
            slidesPerView: 2
        },
        586: {
            slidesPerView: 3
        },
        993: {
            slidesPerView: 4
        },
        1201: {
            slidesPerView: 5
        },
        1401: {
            slidesPerView: 6
        }
    }
});