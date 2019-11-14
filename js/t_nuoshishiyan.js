$(function () {
    $.ajax({
        url: './json/t_nuoshishiyan.json',
        type: 'get',
        datatype: 'json',
        cache: false,
        success: function (json) {
            var results = '';
            $.each(json, function (index, item) {
                results += '<div class="goods" code="' + item.code + '"><div class="tu"><img src="' + item.imgurl + '" alt=""></div><p>' + item.lang + '</p><h3>' + item.introduce + '</h3></div>'
            });
            $('.conent').html(results);
        }
    });
})
$(".goods").click(function(){
    localStorage.href="./t_pinpargushi.html";
})

var mySwiper = new Swiper('.swiper-container', {

    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

})

$(".swiper-slide").mouseover(function () {
    $(".right").css('display', "block");
    $(".left").css('display', "block");
})
$('.swiper-slide').mouseleave(function () {
    $(".right").css("display", "none");
    $(".left").css("display", "none");
})


$(".conent").on("mouseover",".tu",function () {
   

        $(this).find('img').css({
            width:270,
            height:270
        })
})
$(".conent").on("mouseout",".tu",function () {

    $(this).find('img').css({
        width:257,
        height:257
    })
})
$(function(){
    $(".hidhead").load("./T_header.html");
    $(".foot").load("./d_foot.html");
})
