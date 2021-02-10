$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    } else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });
  
  $(".goTop").click(function(){$('html, body').animate({scrollTop:0}, 300)});
  
  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});
