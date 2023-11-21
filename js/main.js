

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);


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