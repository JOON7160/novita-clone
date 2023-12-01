$(function(){
    $('.gnb > li > a').mouseenter(function(){
        $('header').addClass('active');
        $('.gnb li').children('.sub').removeClass('active');
        $(this).siblings('.sub').addClass('active');
    })
    $('header').mouseleave(function(){
        $('header').removeClass('active');
        $('.gnb li').children('.sub').removeClass('active');
    })
})