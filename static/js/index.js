$(document).ready(function () {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: false,
    pagination: false,
    navigationKeys: false
  }

  bulmaCarousel.attach('.carousel', options);
})
