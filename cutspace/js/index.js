let burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger-active');
    headerNav.classList.toggle('header__nav-active');
    line1.classList.toggle('line1-active')
    line2.classList.toggle('line2-active')
    line3.classList.toggle('line3-active')
})

const swiper1 = new Swiper('.best__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        993: {
            slidesPerView: 2,
        }
    }
});


const swiper2 = new Swiper('.word__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: true,
    spaceBetween: 0,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        481: {
            slidesPerView: 2,
        },
        1201: {
            slidesPerView: 3,
        }

    }
});


const servContent1 = document.querySelector('.serv__content1');
const servContent2 = document.querySelector('.serv__content2');
const servContentHero1 = document.querySelector('.serv__content-hero1');
const servContentHero2 = document.querySelector('.serv__content-hero2');
const servContentDescr1 = document.querySelector('.serv__content-descr1');
const servContentDescr2 = document.querySelector('.serv__content-descr2');
const servContentBtn1 = document.querySelector('.serv__content-btn1');
const servContentBtn2 = document.querySelector('.serv__content-btn2');
const servContentPath1 = document.querySelectorAll('.serv__content-path1');
const servContentPath2 = document.querySelectorAll('.serv__content-path2');



servContent1.addEventListener('mousemove', function () {
    servContent1.classList.add('serv__content-active');
    servContent2.classList.remove('serv__content-active');
    servContentPath1.forEach(function (e) {
        e.classList.add('serv__content-path-active');
    });
    servContentPath2.forEach(function (e) {
        e.classList.remove('serv__content-path-active');
    });
    servContentHero1.classList.add('serv__content-hero-active');
    servContentHero2.classList.remove('serv__content-hero-active');
    servContentDescr1.classList.add('serv__content-descr-active');
    servContentDescr2.classList.remove('serv__content-descr-active');
    servContentBtn1.classList.add('serv__content-btn-active');
    servContentBtn2.classList.remove('serv__content-btn-active');

})

servContent2.addEventListener('mousemove', function () {
    servContent1.classList.remove('serv__content-active');
    servContent2.classList.add('serv__content-active');
    servContentPath1.forEach(function (e) {
        e.classList.remove('serv__content-path-active');
    });
    servContentPath2.forEach(function (e) {
        e.classList.add('serv__content-path-active');
    });
    servContentHero1.classList.remove('serv__content-hero-active');
    servContentHero2.classList.add('serv__content-hero-active');
    servContentDescr1.classList.remove('serv__content-descr-active');
    servContentDescr2.classList.add('serv__content-descr-active');
    servContentBtn1.classList.remove('serv__content-btn-active');
    servContentBtn2.classList.add('serv__content-btn-active');
})


const chooseBtn = document.querySelectorAll('.choose__btn');
const chooseCircle = document.querySelectorAll('.choose__circle');
const choosePath = document.querySelectorAll('.choose__path');

chooseBtn.forEach(function (e) {
    e.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        chooseCircle.forEach(function (e) {
            e.classList.remove('choose__circle-active-js');
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (e) {
                e.classList.add('choose__circle-active-js');
            })
        })

        choosePath.forEach(function (e) {
            e.classList.remove('choose__path-active-js');
            document.querySelectorAll(`[data-trigger="${path}"]`).forEach(function (e) {
                e.classList.add('choose__path-active-js');
            })
        })
    })
})

chooseBtn.forEach(function (e) {
    e.addEventListener('focus', function (e) {
        const path = e.currentTarget.dataset.path;

        chooseCircle.forEach(function (e) {
            e.classList.remove('choose__circle-active-js');
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (e) {
                e.classList.add('choose__circle-active-js');
            })
        })

        choosePath.forEach(function (e) {
            e.classList.remove('choose__path-active-js');
            document.querySelectorAll(`[data-trigger="${path}"]`).forEach(function (e) {
                e.classList.add('choose__path-active-js');
            })
        })
    })
})



const footerItem = document.querySelectorAll('.footer__item');
const footerListInside = document.querySelectorAll('.footer__list-inside');
const footerSvgInside = document.querySelectorAll('.footer__svg-inside');

footerItem.forEach(function (e) {
    e.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;

        footerListInside.forEach(function (e) {
            e.classList.remove('footer__list-inside-active', 'footer__list-inside-column-browser-active');
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function (e) {
                e.classList.add('footer__list-inside-active', 'footer__list-inside-column-browser-active');
            })
        })


        footerSvgInside.forEach(function (e) {
            e.classList.remove('footer__svg-inside-active');
            document.querySelectorAll(`[data-trigger="${path}"]`).forEach(function (e) {
                e.classList.add('footer__svg-inside-active');
            })
        })
    })
})
