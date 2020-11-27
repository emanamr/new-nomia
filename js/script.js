
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



/* Demo purposes only */
$("figure").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);

/* my range*/

var slider = document.getElementById("myrange");
var output = document.getElementById("demo");
output.value = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.value = this.value;
}

output.oninput = function (){
    slider.value = this.value;
}
