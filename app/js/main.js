$(function () {
  $(".top-slider__inner").slick({
    dots: false,
    prevArrow: $(".top-slider__btn-prev"),
    nextArrow: $(".top-slider__btn-next"),
  });

  var mixer = mixitup(".top-products__cards");
});
