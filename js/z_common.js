$(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 150) {
            $('.float_head_big').css('display', 'block');
        } else {
            $('.float_head_big').css('display', 'none');
        }
    });


    $('.z_head_main_right .ren').mouseover(function () {
        $('.z_head_main_wc').css('display', 'block');
    });
    $('.z_head_main_right .ren').mouseleave(function () {
        $('.z_head_main_wc').css('display', 'none');
    });
    $('.z_head_main_wc').mouseenter(function(){
        $(this).css('display', 'block');
    })
    $('.z_head_main_wc').mouseleave(function () {
        $('.z_head_main_wc').css('display', 'none');
    });
    $('.float_head_right ul li:nth-of-type(1)').mouseenter(function(){
        $('.float_head_wc').css('display', 'block');
    })
    $('.float_head_right ul li:nth-of-type(1)').mouseleave(function(){
        $('.float_head_wc').css('display', 'none');
    })
    $('.float_head_wc').mouseenter(function(){
        $(this).css('display','block')
    })
    $('.float_head_wc').mouseleave(function(){
        $(this).css('display','none')
    })
    $('.link ul li').eq(2).click(function(){
        $(document).scrollTop(0)
    })
})