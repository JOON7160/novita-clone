$(function(){
    //top-btn
    $(window).scroll(function(){
        if($(window).scrollTop() > 100) {
            $('.top-btn').fadeIn()
        } else {
            $('.top-btn').fadeOut()
        }
    })
    // GNB 
    $('.gnb__item--link').on('mouseenter focus',function(){
        $('header').addClass('header--active');
        $('.gnb__item').children('.gnb__sub').removeClass('gnb__sub--active');
        $(this).siblings('.gnb__sub').addClass('gnb__sub--active');
    })
    $('header').on('mouseleave blur',function(){
        $('header').removeClass('header--active');
        $('.gnb__item').children('.gnb__sub').removeClass('gnb__sub--active');
    })
    //mainSlide swiper
    const progressLine = $('.autoplay-progress svg')
    var mainToggleBtn =$('.main-toggle-btn')
    var mainSwiper = new Swiper(".main__swiper.swiper", {
        wrapperClass: 'main__swiper--wrapper',
        slideClass: 'main__swiper--slide', 
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 8000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
        el: ".main__swiper .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + //현재 페이지
            '  ' +
            '<span class="' + totalClass + '"></span>' //총 페이지
            },
        },
        on: {
            autoplayTimeLeft(s,time,progress) {
                progressLine.css('--progress',1-progress)
            }
        }
    });
    mainToggleBtn.on ('click keydown',function(e){
        // Spacebar의 기본 동작 막기
            if (e.type === 'keydown' && e.key === ' ') {
                e.preventDefault();
            }
            if ((e.type === 'click' && e.button === 0) || (e.type === 'keydown' && e.key === ' ')) {
            if (mainSwiper.autoplay.running) {
                mainSwiper.autoplay.stop();
                $('.main-toggle-btn .fa-solid').removeClass('fa-play').addClass('fa-pause')
            } else {
                mainSwiper.autoplay.start();
                $('.main-toggle-btn .fa-solid').removeClass('fa-pause').addClass('fa-play')
            }
        }
    
    });
    mainToggleBtn.on('keydown', function (e) {
        if (e.key === 'Enter') {
            // Enter 키 입력 시 클릭 이벤트를 발생시킴
            $(this).click();
        }
    });
    //bestSeller swiper
    const progressBar = $('.autoplay-progress svg')
    var toggleBtn =$('.best-toggle-btn')
    var bestSellerSwiper = new Swiper(".best-prod-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + //현재 페이지
            '<span class="' + totalClass + '"></span>' //총 페이지
            },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, prodProgress) {
            progressBar.css("--prodProgress", 1 - prodProgress)
        }
    }
});
    toggleBtn.on ('click keydown',function(e){
        // Spacebar의 기본 동작 막기
            if (e.type === 'keydown' && e.key === ' ') {
                e.preventDefault();
            }
            if ((e.type === 'click' && e.button === 0) || (e.type === 'keydown' && e.key === ' ')) {
            if (bestSellerSwiper.autoplay.running) {
                bestSellerSwiper.autoplay.stop();
                $('.toggle-btn .fa-solid').removeClass('fa-play').addClass('fa-pause')
            } else {
                bestSellerSwiper.autoplay.start();
                $('.toggle-btn .fa-solid').removeClass('fa-pause').addClass('fa-play')
            }
        }
    
    });
    toggleBtn.on('keydown', function (e) {
        if (e.key === 'Enter') {
            // Enter 키 입력 시 클릭 이벤트를 발생시킴
            $(this).click();
        }
    });
    //eventProduct swiper
    var eventProdSwiper = new Swiper(".event-prod-slide", {
        slidesPerView: 1,
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + //현재 페이지
            ' <div class="swiper-pagination-progressbar"></div> ' + //progress-pagination 
            '<span class="' + totalClass + '"></span>' //총 페이지
            },
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            // 768: {
            // slidesPerView: 4,
            // spaceBetween: 40,
            // },
            1024: {
            slidesPerView: 2,
            spaceBetween: 0,
            },
        },
    });
    var pagingSwiper = new Swiper(".event-prod-slide", {
        pagination: {
        el: ".swiper-pagination-progressbar",
        type: "progressbar",
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            // 768: {
            // slidesPerView: 4,
            // spaceBetween: 40,
            // },
            1024: {
            slidesPerView: 2,
            spaceBetween: 0,
            },
        },
    });
    eventProdSwiper.controller.control = pagingSwiper;

    //eventNotiswiper
    var eventNotiSwiper = new Swiper(".event-slide", {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
        pagination: {
        el: ".event-prod-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + //현재 페이지
            ' <div class="swiper-pagination-progressbar"></div> ' + //progress-pagination 
            '<span class="' + totalClass + '"></span>' //총 페이지
            },
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            // 768: {
            // slidesPerView: 4,
            // spaceBetween: 40,
            // },
            1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
        },
    });
    var notiPagingSwiper = new Swiper(".event-slide", {
        pagination: {
        el: ".swiper-pagination-progressbar",
        type: "progressbar",
        },
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            // 768: {
            // slidesPerView: 4,
            // spaceBetween: 40,
            // },
            1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
        },
    });
    eventNotiSwiper.controller.control = notiPagingSwiper;
    //review swiper
    var reviewSwiper = new Swiper(".review-slide", {
        slidesPerView: 1,
        // spaceBetween: 10,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        noSwiping: true,
        breakpoints: {
            640: {
            slidesPerView: 1,
            spaceBetween: 0,
            },
            // 768: {
            // slidesPerView: 4,
            // spaceBetween: 40,
            // },
            1024: {
            slidesPerView: 3,
            spaceBetween: 0,
            },
        },
    });
})