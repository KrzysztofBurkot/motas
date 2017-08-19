'use strict';

$(document).ready(function () {
    /*SMOOTH SCROLL*/
    $('.menu_list_items, #menu_logo').on('click', function (e) {
        e.preventDefault();     
        $('html, body').animate({
            scrollTop: $(this.hash).position().top-100
        }, 500);
    });
    
    /*MENU HIDING*/
    var ifScrolled;
    var lastScrollTop = 0;
    var delta = 5;
    var headerHight = $('#header').outerHeight();
    
    $(window).scroll(function(event){ 
        ifScrolled = true;
    });
    
    function hasScrolled() {
        var position = $(document).scrollTop();
        
        if (Math.abs(lastScrollTop-position) <= delta) {return;}
        
        if (position > lastScrollTop && position > headerHight) {
            $('nav').removeClass('navbar_show').addClass('navbar_hide');
        } else {
            if (position+$(window).height() < $(document).height()){
                $('nav').removeClass('navbar_hide').addClass('navbar_show');
            }
        }
        lastScrollTop = position;
    }
    
    setInterval (function() {
        if (ifScrolled) {
            hasScrolled();
            ifScrolled = false;
            }
    }, 250);
    
    /*BG COLOR CHANGE*/
    if ($(document).scrollTop()>headerHight) {
        $('nav').addClass('navbar_below_color');
    } else {
        $('nav').removeClass('navbar_below_color');
    }
});