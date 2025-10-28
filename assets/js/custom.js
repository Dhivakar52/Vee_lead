$(document).ready(function () {
 
 $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
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


// Nav tab scroll

 

  });



document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll('.ai_tabs .nav-link');
  let currentIndex = 0;
  let autoSwitchInterval;

  // Function to activate a specific tab
  function activateTab(index) {
    const tab = new bootstrap.Tab(tabLinks[index]);
    tab.show();

    // Scroll to the active tab content smoothly
    // const activeContent = document.querySelector(tabLinks[index].getAttribute('href'));
    // if (activeContent) {
    //   activeContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // }
  }

  // Auto switch every 5 seconds
  function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabLinks.length;
      activateTab(currentIndex);
    }, 3000);
  }

  // Stop auto-switch when user clicks a tab
  tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      clearInterval(autoSwitchInterval);
      currentIndex = index; 
      activateTab(currentIndex);
      // restart after a short delay
      setTimeout(startAutoSwitch, 1000);
    });
  });

  // Start auto switching
  startAutoSwitch();



// Manufacture Accordion



  const accordionButtons = document.querySelectorAll("#industryAccordion .accordion-button");
  const rightImage = document.querySelector(".solution_right_img img");

  accordionButtons.forEach(button => {
    button.addEventListener("click", function () {
      const newImg = this.getAttribute("data-img");
      if (newImg && rightImage) {
        // Fade effect for smooth image transition
        rightImage.style.opacity = 0;
        setTimeout(() => {
          rightImage.src = newImg;
          rightImage.style.opacity = 1;
        }, 300);
      }
    });
  });







});