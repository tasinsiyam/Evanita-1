$(document).ready(function () {
    $('.recent-post-carousel').owlCarousel({
        items:3,
        margin: 15,
        autoplay: true,
        loop: true,
        responsive:{
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:1,
                margin:20
            },
            // breakpoint from 768 up
            768 : {
                items:3
            }
        }
    });

});