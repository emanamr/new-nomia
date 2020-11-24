
$(function () {
    'use strict';

//show more
    $(".content .show").click(function () {
        $(".content .hide-p").fadeIn(1000);
        $(".content .hide1").show();
        $(this).hide();
    });
//show less
    $(".content .hide1").click(function () {
        $(".content .hide-p").hide();
        $(".content .show").show();
        $(this).hide();
    });

});