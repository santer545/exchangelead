$(document).ready(function() {
    var swiper = new Swiper('#slide-img', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        parallax: true
    });

    var swiper = new Swiper('#slide-text', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });


    $(".owl-carousel").owlCarousel({
        margin: 20,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
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
    });



    $('#primary-menu-trigger').click(function() {
        $('#primary-menu ul').toggleClass('open');
    });

    $('.fa-search').click(function() {
        $(this).addClass('hidden');
        $('.fa-times').removeClass('hidden');
        $('#top-search form').addClass('open');
        $('#primary-menu ul').addClass('hidden');
        $('#top-search input').focus();
        $('#primary-menu-trigger').addClass('hidden');
    });

    $('.fa-times').click(function() {
        $(this).addClass('hidden');
        $('.fa-search').removeClass('hidden');
        $('#top-search form').removeClass('open');
        $('#primary-menu ul').removeClass('hidden');
        $('#top-search input').blur();
        $('#primary-menu-trigger').removeClass('hidden');
    });

    $('.js-numbers').each(function() {
        $(this).appear(function() {
            $('.js-numeral').countTo();
        }, { accX: 0, accY: 0 });
    });



    if ($('.back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop < scrollTrigger) {
                    $('.back-to-top').addClass('hidden');
                } else {
                    $('.back-to-top').removeClass('hidden');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('.back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }


    $('.js_validate [type="submit"]').on("click", function() {
        return validate($(this).parents(".js_validate"));
    });

    /*$('.about').parallax({imageSrc: 'assets/images/lead-generation.jpg'});*/
    $('.banner').parallax({imageSrc: 'assets/images/banner-3.jpg'});

    $('#phone').inputmask("+380 99 999 9999");

});


