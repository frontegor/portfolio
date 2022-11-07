document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.header__btn').forEach(function(headBtn) {
        headBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.header__btn').forEach(function(hradInp) {
                hradInp.classList.add('btn-opacity')
            })
            document.querySelectorAll('.header__form').forEach(function(hradInp) {
                hradInp.classList.add('form-active')
            })
            let mediadd = window.matchMedia('(max-width: 768px)')
            if (mediadd.matches) {
                document.querySelectorAll('.header__container').forEach(function(hradInp) {
                    hradInp.classList.add('container-relative')
                })
            }
        })
    })
    document.querySelectorAll('.input-closed').forEach(function(headMenu) {
        headMenu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            let mediaremove = window.matchMedia('(max-width: 768px)')
            if (mediaremove.matches) {
                document.querySelectorAll('.header__btn').forEach(function(hradInp) {
                    hradInp.classList.remove('btn-opacity')
                })
                document.querySelectorAll('.header__form').forEach(function(hradInp) {
                    hradInp.classList.remove('form-active')
                })
                document.querySelectorAll('.header__link').forEach(function(hradInp) {
                    hradInp.classList.remove('link-none')
                })
                document.querySelectorAll('.header__burger').forEach(function(hradInp) {
                    hradInp.classList.remove('burger-none')
                })
                document.querySelectorAll('.header__link').forEach(function(hradInp) {
                    hradInp.classList.remove('link-relative')
                })
                document.querySelectorAll('.header__container').forEach(function(hradInp) {
                    hradInp.classList.remove('container-relative')
                })
            }
        })
    })
    document.querySelectorAll('.header__login').forEach(function(headBtn) {
        headBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.header__login').forEach(function(hradInp) {
                hradInp.classList.add('login-active')
            })
        })
    })
    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".header__login")) {
            document.querySelectorAll(".header__login").forEach(el => {
                el.classList.remove("login-active");
            })
        }
    })
    document.querySelectorAll('.header__burger').forEach(function(headMenu) {
        headMenu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.header__nav').forEach(function(hradnav) {
                hradnav.classList.add('nav-active')
            })
        })
    })
    document.querySelectorAll('.burger-closed').forEach(function(headMenu) {
        headMenu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.header__nav').forEach(function(hradNavAc) {
                hradNavAc.classList.remove('nav-active')
            })
        })
    })


    document.querySelectorAll('.header__item-link').forEach(function(headMenu) {
        headMenu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            let mediaremoves = window.matchMedia('(max-width: 1024px)')
            if (mediaremoves.matches) {
                document.querySelectorAll('.header__nav').forEach(function(hradInp) {
                    hradInp.classList.remove('nav-active')
                })

            }
        })
    })


    let play = document.querySelector(".header__burger")
    let tl = gsap.timeline({ paused: true })
    let reverse = document.querySelector(".burger-closed")
    if (document.documentElement.clientWidth < 1025) {
        tl.fromTo(".header__nav", {
            y: -1000,
            opacity: 0
        }, {
            duration: .9,
            y: 0,
            opacity: .9
        })
        play.onclick = function() {
            tl.play()
        }
        reverse.onclick = function() {
            tl.reverse()
        }

        tl.fromTo(".header__list-item", {
            opacity: 0,
            y: 200
        }, {
            duration: .3,
            y: 0,
            opacity: 1
        })
        reverse.onclick = function() {
            tl.reverse()
        }

        tl.fromTo(".header__login", {
            x: 1000,
        }, {
            duration: .5,
            x: 0
        })
        reverse.onclick = function() {
            tl.reverse()
        }
    }

    let start = document.querySelector(".header__btn")
    let ttl = gsap.timeline({ paused: true })
    let back = document.querySelector(".input-closed")
    if (document.documentElement.clientWidth > 336) {
        ttl.fromTo(".header__form", {
            y: -1000,
            opacity: 0
        }, {
            duration: .5,
            y: 0,
            opacity: 1
        })
        start.onclick = function() {
            ttl.play()
        }
        back.onclick = function() {
            ttl.reverse()
        }
    } else if (document.documentElement.clientWidth < 336) {
        ttl.fromTo(".header__form", {
            y: -1000,
            opacity: 0
        }, {
            duration: .5,
            y: 0,
            opacity: .9
        })
        start.onclick = function() {
            ttl.play()
        }
        back.onclick = function() {
            ttl.reverse()
        }
    }
    var swiper = new Swiper(".swiper-container", {
        allowSlidePrev: true,
        autoplay: true,
        loop: true,
        delay: 1500,
        speed: 2000,
        effect: "fade",
    });









    document.querySelectorAll(".basis__item-btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".basis__container-inside");
            let svg = this.parentElement.querySelector(".btn-svg")
            let svgColor = this.parentElement.querySelector(".svg")
            document.querySelectorAll(".basis__item-btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");

                }
            });
            document.querySelectorAll(".basis__container-inside").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("is-open");
                }
            })
            document.querySelectorAll(".btn-svg").forEach(el => {
                if (el != svg) {
                    el.classList.remove("svg-180");
                }
            })
            dropdown.classList.toggle("is-open");
            btn.classList.toggle("active--btn");
            svg.classList.toggle("svg-180")

        })
    })



    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".basis__list")) {
            document.querySelectorAll(".basis__container-inside").forEach(el => {
                el.classList.remove("is-open");
            })
            document.querySelectorAll(".basis__item-btn").forEach(el => {
                el.classList.remove("active--btn");
            });
            document.querySelectorAll(".btn-svg").forEach(el => {
                el.classList.remove("svg-180");
            })
        }
    })

    document.querySelectorAll(".simplebar").forEach(item => {
        new SimpleBar(item, {
            autoHide: false,
            scrollbarMaxSize: 25,
        });
    })


    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        renderSelectedChoices: 'always',

    });
    const select = document.querySelector('.gallery__select');
    select.onchange = () => {
        tabs.querySelector('.gallery__filter-active').classList.remove('gallery__filter-active');
        tabs.querySelectorAll('.gallery__wrapper')[select.options.selectedIndex].classList.add('gallery__filter-active');
    }




    let gallerySlider = new Swiper(".gallery__collage", {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
            rows: 2
        },
        spaceBetween: 30,
        pagination: {
            el: ".gallery__pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".gallery__btn-right",
            prevEl: ".gallery__btn-left"
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1
                },
                spaceBetween: 0,
                slidesPerGroup: 1,
            },
            577: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 36
            },
            769: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 34
            },
            1201: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 34,
                on: {
                    beforeResize: function() {
                        this.slides.forEach((el) => {
                            el.style.marginTop = "10px";
                        });
                    }
                }
            },
            1201: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                },
                spaceBetween: 50
            },
            a11y: {
                prevSlideMessage: 'Предыдущий',
                nextSlideMessage: 'Следующий',
            }
        }
    });

    document.querySelectorAll(".select__option").forEach(function(workBtn) {
        workBtn.addEventListener("click", function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll(".gallery__wrapper").forEach(function(workDesLi) {
                workDesLi.classList.remove("gallery__filter-active")
            })
            document.querySelector(`[data-target='${path}']`).classList.add("gallery__filter-active")
            this.classList.add("gallery__filter-active");
        })
    })

    document.querySelectorAll('.gallery__slide').forEach(function(workBtn) {
        workBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.gallery__card').forEach(function(workDesLi) {
                workDesLi.classList.remove('card-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('card-active')
        })
    })

    document.querySelectorAll('.gallery__slide').forEach(function(workBtn) {
        workBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.gallery__card').forEach(function(workDesLi) {
                workDesLi.classList.remove('card-act')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('card-act')
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".gallery__btn-collage")) {
            document.querySelectorAll(".gallery__card").forEach(el => {
                el.classList.remove("card-act");
            })
        }
    })
    document.querySelectorAll('.gallery__closed').forEach(function(headMenu) {
        headMenu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.gallery__card').forEach(function(hradNavAc) {
                hradNavAc.classList.remove('card-act')
            })
        })
    })

    document.querySelectorAll('.gallery__slide').forEach(function(headBtn) {
        headBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.body').forEach(function(hradInp) {
                hradInp.classList.add('body-bg')
            })
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".gallery__btn-collage")) {
            document.querySelectorAll(".body").forEach(el => {
                el.classList.remove("body-bg");
            })
        }
    })

    document.querySelectorAll('.gallery__closed').forEach(function(headMenu) {
        headMenu.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.body').forEach(function(hradNavAc) {
                hradNavAc.classList.remove('body-bg')
            })
        })
    })
})






$(function() {
    $(".catalog__list").accordion({
        icons: false,
        heightStyle: "content",
        focus: "none"

    });
    $(".catalog__bio-accord").each((index, item) => {
        let btns = item.querySelectorAll(".catalog__btn-name");
        let articles = item.querySelectorAll(".catalog__article");
        btns.forEach(el => {
            el.addEventListener("click", function(e) {
                let path = e.currentTarget.dataset.path;
                let tabCont = item.querySelector(`[data-target='${path}']`);
                console.log(tabCont)
                articles.forEach(el => {
                    el.classList.remove("catalog__article-active")
                })
                tabCont.classList.add("catalog__article-active")
            })
        })
    })
    document.querySelectorAll(".catalog__item-all").forEach(item => {
        item.addEventListener("click", function() {
            let arrow = this.parentElement.querySelector(".catalog__arrow")
            document.querySelectorAll(".catalog__arrow").forEach(el => {
                if (el != arrow) {
                    el.classList.remove("arrow-180")
                }
            })
            arrow.classList.toggle("arrow-180")
        })
    })
    document.addEventListener("ckick", function(e) {
        let arroww = e.target;
        if (!arroww.closest(".catalog__item-all")) {
            document.querySelectorAll(".catalog__arrow").forEach(el => {
                el.classList.remove("arrow-180")
            })
        }
    })

    document.querySelectorAll(".catalog__btn-name").forEach(item => {
        item.addEventListener("click", function() {
            let catbtn = this;
            document.querySelectorAll(".catalog__btn-name").forEach(el => {
                if (el != catbtn) {
                    el.classList.remove("btn-active");
                }
            });
            catbtn.classList.toggle("btn-active");
        })

    })





    let eventSlider = new Swiper(".event__swiper", {
        slidesPerView: 3,
        slidesPerGroup: 2,
        grid: {
            rows: 1
        },
        spaceBetween: 50,
        pagination: {
            el: ".swiper-pagination-event",
            clickable: true,
            grabCursor: true
        },
        navigation: {
            nextEl: ".event__btn-right",
            prevEl: ".event__btn-left"
        },
        a11y: {
            prevSlideMessage: 'Предыдущий',
            nextSlideMessage: 'Следующий',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1,
            },

            577: {
                slidesPerView: 2,
                spaceBetween: 34
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 34,
            },
            769: {
                spaceBetween: 27,
            },


            1025: {
                spaceBetween: 50,
            }
        }
    })

    tippy('#myButton1', {
        content: "Пример современных тенденций - современная методология разработки",
        theme: 'te'
    });
    tippy('#myButton2', {
        content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
        theme: 'te'
    });
    tippy('#myButton3', {
        content: "В стремлении повысить качество",
        theme: 'te'
    });

    let projectsSlider = new Swiper(".projects__swiper", {
        slidesPerGroup: 3,
        grid: {
            rows: 1
        },
        spaceBetween: 30,
        pagination: {
            type: "fraction"
        },
        navigation: {
            nextEl: ".projects__btn-right",
            prevEl: ".projects__btn-left"
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1
                },
                spaceBetween: 0,
                slidesPerGroup: 1
            },

            577: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 50
            },
            1025: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                },
                spaceBetween: 50
            }
        },
        a11y: {
            prevSlideMessage: 'Предыдущий',
            nextSlideMessage: 'Следующий',
            on: {
                beforeResize: function() {
                    this.slides.forEach((el) => {
                        el.style.width = "100px";
                    });
                }
            }
        }
    });

    let phone = document.querySelector("input[type='tel']")
    var im = new Inputmask("+7 (999) 999-99-99")
    im.mask(phone);
    new window.JustValidate('.contacts__form-input', {
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
        messages: {
            name: {
                required: "Недостаточно символов",
                function: "Недостаточно символов"
            },
            phone: {
                required: "Недопустимый формат",
                function: "Недопустимый формат",
            },
        }
    });
    let letters = document.querySelector('.contacts__input');
    letters.addEventListener('input', () => {
        letters.value = letters.value.replace(/[^а-яА-Яa-zA-Z]/, '');
    });
})