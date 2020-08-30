$(function () {
    'use strict'

    // offcanvans menu
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });
    //end

    //dropdown select
    $('.dropdown-select > .caption').on('click', function () {
        $(this).parent().toggleClass('open');
    });

    $('.dropdown-select > .list > .dropdown-item').on('click', function () {
        $('.dropdown-select > .list > .dropdown-item').removeClass('selected');
        $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').text($(this).text());
    });

    $(document).on('keyup', function (evt) {
        if ((evt.keyCode || evt.which) === 27) {
            $('.dropdown-select').removeClass('open');
        }
    });

    $(document).on('click', function (evt) {
        if ($(evt.target).closest(".dropdown-select > .caption").length === 0) {
            $('.dropdown-select').removeClass('open');
        }
    });
    //end

});