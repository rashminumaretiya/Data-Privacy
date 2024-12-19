$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-wrap-main").addClass("fixed");
  } else {
    $(".header-wrap-main").removeClass("fixed");
  }
});

$(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
  },
});

$(".partner-slider").owlCarousel({
  stagePadding: 400,
  loop:true,
  items:1,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      stagePadding: 20,
    },
    475: {
      stagePadding: 60,
    },
    991: {
       stagePadding: 200,
    },
    1400: {
      stagePadding: 400,
    },
  },
});

// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementsByTagName("header");
  const scrollLinks = document.querySelectorAll(".scroll-link");  

  scrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const headerHeight = header?.[0].clientHeight;
              const targetPosition = targetElement.offsetTop - headerHeight - 50;

              window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth",
              });
          }
      });
  });
});

// Smooth scrolling functionality
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementsByTagName("header");
  const scrollLinks = document.querySelectorAll(".scroll-link");  

  scrollLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const headerHeight = header?.[0].clientHeight;
              const targetPosition = targetElement.offsetTop - headerHeight - 40;

              window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth",
              });
          }
      });
  });
});

const accordionButtons = document.querySelectorAll(".accordion-button");
const dynamicImage = document.getElementById("dynamicImage");
const accordionItems = document.querySelectorAll(".accordion-item");

// Store the image URLs in an array
const imageUrls = Array.from(accordionButtons).map(button => button.getAttribute("data-image"));

// Set the initial index
let currentIndex = 0;
let autoplayInterval;

// Function to expand the accordion, update classes, and add an active class to the item
function expandAccordion(index) {
  accordionItems.forEach((item, i) => {
    const content = item.querySelector(".accordion-collapse");
    const button = accordionButtons[i];

    if (i === index) {
      content.classList.add("show");
      button.classList.remove("collapsed");
      item.classList.add("active-item"); // Add active-item class to the active accordion-item
    } else {
      content.classList.remove("show");
      button.classList.add("collapsed");
      item.classList.remove("active-item"); // Remove active-item class from inactive accordion-items
    }
  });

  // Update the image for the active accordion
  dynamicImage.src = imageUrls[index];

  // Update the current index
  currentIndex = index;
}

// Add click event listeners to each button
accordionButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Expand the clicked accordion and reset autoplay
    expandAccordion(index);
    resetAutoplay(index);
  });
});

// Autoplay function to change the active accordion every 5 seconds
function autoplay() {
  const nextIndex = (currentIndex + 1) % accordionButtons.length; // Get the next index
  expandAccordion(nextIndex); // Expand the next accordion
}

// Reset autoplay to restart the interval from the clicked accordion
function resetAutoplay(index) {
  clearInterval(autoplayInterval); // Clear the current autoplay interval
  expandAccordion(index); // Immediately set the clicked accordion as active
  autoplayInterval = setInterval(autoplay, 10000); // Restart autoplay every 5 seconds
}

// Set the autoplay interval on page load
document.addEventListener("DOMContentLoaded", () => {
  expandAccordion(0); // Set the first accordion as active by default
  autoplayInterval = setInterval(autoplay, 10000); // Start autoplay every 5 seconds
});

$(".company-slider, .trusted-company").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      }
    },
  ]
});

$('.main-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.thumb-slider' // Sync with thumb slider
});

// Thumbnail slider
$('.thumb-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.main-slider', // Sync with main slider
  dots: false,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
});