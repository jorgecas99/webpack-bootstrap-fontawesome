'use strict';


$(function() {

    console.log('jQuery is loaded and available now');

    //Always start at the top
    $('html, body').animate({
                   scrollTop: $('html').offset().top
                }, 10, function(){}
            );

    Ladda.bind( 'button[type=submit]', { timeout: 2000 } );
    
});



