
$(function () {
    $(document).on("mousewheel DOMMouseScroll", function (e) {

        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

        console.log(delta);
        
        // console.log($(window).scrollTop() > 100);
        if ($(window).scrollTop() > 100) {
            $('#shang').fadeIn();
        } else {
            $('#shang').fadeOut();
        }
    });

    $('.shang').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        $('.shang').css('display','none')
        return false;
    })
    
})




