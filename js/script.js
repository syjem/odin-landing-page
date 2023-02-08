$(document).ready(function(){
    $("#btn").click(function() {
      $("html, body").animate({
        scrollTop: $("#embed").offset().top
      }, 800);
    });
  });