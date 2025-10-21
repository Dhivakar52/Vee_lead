$(document).ready(function () {
 
 $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 4000,
      smartSpeed: 600,
      navText: ['<', '>'],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });

  });

