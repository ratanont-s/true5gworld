$(function () {
    'use strict'

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });

    $('.nav-link').on('click', function () {
        $('.offcanvas-collapse').removeClass('open')
    });

    $(".slick").slick({

        slidesToShow: 3,
        arrows: false,
        dots: true,
        slidesToScroll: 3,

        // the magic
        responsive: [{

            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }

        }, {

            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
})