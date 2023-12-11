$(function(){
    // GNB 
    $('.gnb > li > a').mouseenter(function(){
        $('header').addClass('active');
        $('.gnb li').children('.sub').removeClass('active');
        $(this).siblings('.sub').addClass('active');
    })
    $('header').mouseleave(function(){
        $('header').removeClass('active');
        $('.gnb li').children('.sub').removeClass('active');
    })
    //bestSeller swiper
    const progressLine = document.querySelector('.autoplay-progress svg')
    var toggleBtn =$('.toggle-btn i')
    var bestSellerSwiper = new Swiper(".best-prod-slide", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + //현재 페이지
            ' <div class="autoplay-progress"></div> ' + //progress-pagination 
            '<span class="' + totalClass + '"></span>' //총 페이지
            },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    // on: {
    //     autoplayTimeLeft(s, time, progress) {
    //         progressLine.style.setProperty("--progress", 1 - progress)
    //     }
    // }
});
    toggleBtn.on ('click keydown',function(e){
        console.log('Event target', e.target);
        if ((e.type === 'click' && e.button === 0) || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) {
            if (bestSellerSwiper.autoplay.running) {
                bestSellerSwiper.autoplay.stop();
                $('.toggle-btn i').removeClass('fa-play').addClass('fa-pause')
            } else {
                bestSellerSwiper.autoplay.start();
                $('.toggle-btn i').removeClass('fa-pause').addClass('fa-play')
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