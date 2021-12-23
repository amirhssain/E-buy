$(function(){
    $(window).scroll(function () {
      var scrolling = $(this).scrollTop();
      if (scrolling > 100) {
          $(".navbar").addClass("bg");
      } 
      else{
        $(".navbar").removeClass("bg");
      }
    });
    var typed = new Typed('.type', {
      strings: [
        'by Amir hossain',
       
      ],
      typeSpeed: 100,
      loop:true,
    });
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.filtering').on( 'click', 'p', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
});
