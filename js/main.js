$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-wrapper").addClass("position-fixed w-100");
  } else {
    $(".header-wrapper").removeClass("position-fixed w-100");
  }
});

$(".company-slider").owlCarousel({
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
