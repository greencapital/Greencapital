(function ($) {
    "use strict";


    var $body = $("body"),
            $window = $(window);

    $window.on('scroll', function () {
        if ($(".navbar").offset().top > 25) {
            $(".navbar-default").addClass("small");
        } else {
            $(".navbar-default").removeClass("small");
        }
    });


    $('.navbar-default').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });


    $body.scrollspy({
        target: ".navbar-collapse",
        offset: 15
    });


})(jQuery);



$(window).on('load', function () {
    "use strict";
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        autoPlay:true
    });

});


$(window).on('load', function () {
    "use strict";
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        autoPlay:true
    });
});

