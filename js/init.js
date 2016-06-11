(function($){
  $(function(){

    $('#gallery').html(createGalleryHtml(6)); //the parameter must divide 12

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.slider').slider({height:500, interval:60000});
    $('.materialboxed').materialbox();

    $('#showGallery').on('click', function(){
      $('#gallery').removeClass('hidden');
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space

