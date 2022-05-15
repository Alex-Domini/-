$(function () {
  $(".burger").on("click", function () {
    $(".burger").toggleClass("burger--active");
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("hidden");
  });

  $(".menu__link").on("click", function () {
    $(".burger").removeClass("burger--active");
    $(".menu").removeClass("menu--active");
    $("body").removeClass("hidden");
  });

  $(".user-nav__btn--search").on("click", function () {
    $(".user-nav__btn--search").toggleClass("user-nav__btn--search--active");
    $(".header__form").toggleClass("header__form--active");
    $("body").toggleClass("hidden");
  });

  $(".top-slider__inner").slick({
    dots: false,
    prevArrow: $(".top-slider__btn-prev"),
    nextArrow: $(".top-slider__btn-next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: "local",
    },
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  $(".brands-slider__inner").slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
