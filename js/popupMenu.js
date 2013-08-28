$(document).ready(function(){
  $(".navSec a").on('click', function(e){
    e.preventDefault();
  });

  $(".navSec").hover(
    function() {
      $(".popMenu ").slideDown(300);
    },
    function() {
      $(".popMenu").mouseleave(function() {
        $(this).slideUp(300);
      })
    }
  );

})

