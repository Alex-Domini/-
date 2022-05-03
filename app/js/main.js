$(function () {
  $(".top-slider__inner").slick({
    dots: false,
    prevArrow: $(".top-slider__btn-prev"),
    nextArrow: $(".top-slider__btn-next"),
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
  });
});
