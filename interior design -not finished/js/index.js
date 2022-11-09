document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.basis__swiper', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        speed: 500,
        autoplay: true,

    });

    const swiper2 = new Swiper('.port__swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        direction: 'horizontal',
        autoplay: true,
        loop: true,
        pagination: {
            el: '.port__swiper-pagination ',
            clickable: true,
        },
        navigation: {
            nextEl: '.port__swiper-button-next',
            prevEl: '.port__swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            601: {
                slidesPerView: 2,
                spaceBetweenL: 10,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 10,
            },

        }
    });

    const swiper3 = new Swiper('.order__swiper', {
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: true,

    });

    const swiper4 = new Swiper('.contacts__swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        autoplay: true,
    });

    const swiper5 = new Swiper('.blog__swiper', {
        slidesPerView: 3,
        spaceBetween: 10,
        direction: 'horizontal',
        autoplay: true,
        loop: true,
        pagination: {
            el: '.blog__swiper-pagination ',
            clickable: true,
        },
        navigation: {
            nextEl: '.blog__swiper-button-next',
            prevEl: '.blog__swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            601: {
                slidesPerView: 2,
                spaceBetweenL: 10,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 10,
            }
        }
    });

    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.header__nav');
    var line1 = document.querySelector('.line1');
    var line2 = document.querySelector('.line2');
    var line3 = document.querySelector('.line3');
    var btn = document.querySelector('.header__tel-btn');

    burger.addEventListener('click', function() {
        burger.classList.toggle('burger-fixed');
        nav.classList.toggle('header__nav-active');
        line1.classList.toggle('line1-active');
        line2.classList.toggle('line2-active');
        line3.classList.toggle('line3-active');
        btn.classList.toggle('header__tel-btn-active');
    })

    let phone = document.querySelector("input[type='tel']")
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(phone);
    new window.JustValidate('.order__form', {
        colorWrong: '#D11616',
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 10,
            },
            phone: {
                required: true,
                function: (name, value) => {
                    const ph = phone.inputmask.unmaskedvalue();
                    return Number(ph) && ph.length === 10;
                }
            },
        },
    });

    // $(".main").onepage_scroll({
    //     sectionContainer: "section", // контейнер section принимает любой вид селектора на случай, если вы не хотите использовать section
    //     easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    //     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    //     animationTime: 800, // AnimationTime let you define how long each section takes to animate
    //     pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    //     updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    //     beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
    //     afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
    //     loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    //     keyboard: true, // You can activate the keyboard controls
    //     responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    //     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    //     // the browser's width is less than 600, the fallback will kick in.
    //     direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
    // });
})