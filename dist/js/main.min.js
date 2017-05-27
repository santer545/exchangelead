$(document).ready(function() {
    var swiper = new Swiper('#slide-img', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade'
    });

    var swiper = new Swiper('#slide-text', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });


    $(".owl-carousel").owlCarousel({
        items: 2,
        margin: 20,
        dots: true
    });

    $(".js-owl-news").owlCarousel({
        items: 1,
        dots: true,
        touchDrag: false,
        mouseDrag: false
    });

    $('.js-affix').affix({
        offset: {
            top: 155,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })
});



/*$(window).scroll(function() {
    offsetTop ()
});*/



/*$(window).scroll(function() {
    var scrolltop = $(this).scrollTop();
    var offset = $('#header-wrap').offset();
    var top = offset.top;
    console.log(scrolltop);
    console.log(top);
    if (scrolltop >= top) {
        $('body').addClass('fixed');
    } else {
        $('body').removeClass('fixed');
    }
});
*/
