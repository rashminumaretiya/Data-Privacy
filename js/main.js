$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-wrap-main").addClass("fixed");
  } else {
    $(".header-wrap-main").removeClass("fixed");
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
