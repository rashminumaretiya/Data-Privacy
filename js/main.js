$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-wrap-main").addClass("fixed");
  } else {
    $(".header-wrap-main").removeClass("fixed");
  }
});


$(".company-slider, .trusted-company").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1.5,
    },
    425: {
      items: 2,
    },
    600: {
      items: 3,
    },
    900: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});
$(".testimonial-slider").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
  },
});


const accordionButtons = document.querySelectorAll('.accordion-button');
    const dynamicImage = document.getElementById('dynamicImage');

    // Add click event listeners to each button
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get the image URL from the data attribute
        const imageUrl = button.getAttribute('data-image');
        // Update the dynamic image
        dynamicImage.src = imageUrl;
      });
    });
