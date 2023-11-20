$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 50,
    navText:["<img src='images/carousel/back.svg'/>", "<img src='images/carousel/next.svg'/>"],
    loop:true,
    nav:true,

    items:2,
    responsive:{
      0:{
        nav:true,
        items:1,
        dots:false,
      },
      
      870:{
        items:2
      }

    }
  });
});