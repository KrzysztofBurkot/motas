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
            if ($(document).scrollTop()>headerHight) {
            $('nav').addClass('navbar_below_color');
                console.log("ponizej");
            } else {
            $('nav').removeClass('navbar_below_color');
                console.log("powyzej");
            } 
        }
    }, 250);
});


/*$(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
        $('#menu').css('background-color', 'rgba(255,255,255,1)');
        $('#menu_logo').css('color', '#777');
        $('.menu_list_items').css('color', '#777');
    } else {
        console.log('pozycja mniej niż 200');
        $('#menu').css('background-color', 'rgba(255,255,255,0)');
        $('#menu_logo').css('color', '#fff');
        $('.menu_list_items').css('color', '#fff');
    };
});*/