
// Watch Button Smooth Scrolling

$(document).ready(function(){
    $("#btn").click(function() {
      $("html, body").animate({
        scrollTop: $("#embed").offset().top
      }, 800);
    });
  });

// About Section

  $(document).ready(function(){
    $("#about-btn").click(function() {
      $("html, body").animate({
        scrollTop: $("#about").offset().top
      }, 800);
    });
  });

//  Home Section

$(document).ready(function(){
    $("#home-btn").click(function() {
      $("html, body").animate({
        scrollTop: $("#home").offset().top
      }, 800);
    });
  });
  