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

$(".certification-badges").owlCarousel('destroy'); 

$(".certification-badges").owlCarousel({
  items: 1,
  margin: 20,
  center: true, 
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: true,
  navText: false,
  dots: false,
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 3 }
  }
});




  });

      document.addEventListener("DOMContentLoaded", () => {
    const dynamicText = document.getElementById("dynamicText");

    const phrases = [
      "make smarter decisions",
      "automate your workflow",
      "grow your business faster",
      "boost productivity",
      "enhance customer experience"
    ];

    let index = 0;

    function changeText() {
      dynamicText.style.opacity = 0; 
      setTimeout(() => {
        index = (index + 1) % phrases.length;
        dynamicText.textContent = phrases[index];
        dynamicText.style.opacity = 0.8; 
      }, 500);
    }

    setInterval(changeText, 3000); 
  });