// Modal
var btn = document.querySelector('#btn');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


btn.addEventListener('click', function() {
    modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
    modal.classList.remove('modal_active');
});
/*
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            }
        ]

    });
});

