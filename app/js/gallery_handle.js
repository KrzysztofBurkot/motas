'use strict';

$(document).ready(function() {
    /*GALLERY OPEN*/
    $(".portfolio_item_mask_content_inner").children("a").on("click", function(event) {
        event.preventDefault();
        $("#menu").hide("fast");
        $("#gallery").show(900); 
    });
    /*GALLERY CLOSE*/
    $("#exit_gallery").on("click", function() {
        $("#gallery").hide(900); 
        $("#menu").show("fast");
    });
});