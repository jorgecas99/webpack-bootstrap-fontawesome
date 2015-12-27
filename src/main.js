'use strict';


$(function() {

    console.log('jQuery is loaded and available now');

    console.log('location.hash', window.location.hash );
    // if (location.hash !== '') $('a[href="' + location.hash + '"]').tab('show');
    // return $('a[data-toggle="tab"]').on('shown', function(e) {
    //     return location.hash = $(e.target).attr('href').substr(1);
    // });

    //Always start at the top
    $('html, body').animate({
                   scrollTop: $('html').offset().top
                }, 10, function(){});

    
    // var hash = window.location.hash;
    // hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        
	// $('#myTabs a').click(function (e) {
	//   e.preventDefault();
 //      window.location.hash = this.hash;

 //      var t = $(this).attr('href').substr(1);
 //      if (location.hash != '') {
 //        location.hash = t;
 //      };
 //      console.log('location.hash', t);
	//   $(this).tab('show');       
	// });


    
});



