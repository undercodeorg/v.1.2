$(window).load(function(){
   var $container = $('.portfolioContainer');
   $container.isotope({
       filter: '*',
       animationOptions: {
           duration: 350,
           easing: 'linear',
           queue: false
       }
   });

   $('.portfolioFilter a').click(function(){
       $('.portfolioFilter .current').removeClass('current');
       $(this).addClass('current');

       var selector = $(this).attr('data-filter');
       $container.isotope({
           filter: selector,
           animationOptions: {
               duration: 350,
               easing: 'linear',
               queue: false
           }
        });
        return false;
   }); 
});