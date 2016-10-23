$(document).ready(function() {
    if($(window).width() > 1200){
        /* Every time the window is scrolled ... */
        $(window).scroll( function(){
            /* Check the location of each desired element */
            $('.def_help_text').each( function(i){
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({
                            opacity:'1',
                            fontSize: '27px'
                        }, 1500);
                    }
            });
            
            $('.fade').each( function(i){
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({
                            opacity:'1'
                        }, 1000);
                    }
            });
            
            $('.vr_01').each( function(i){
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({
                            right: '20px',
                            opacity: '1'
                        }, 1500);
                    }
            });
            
            $('.vr_02').each( function(i){
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({
                            left: '110px',
                            opacity: '1'
                        }, 1500);
                    }
            });
            
            $('.vr_03').each( function(i){
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    if( bottom_of_window > bottom_of_object ){
                        $(this).animate({
                            opacity:'1'
                        }, 1000);
                    }
            });
        });
    }
});