$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1500,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter //When the translation of the stage has finished.
  });

  // Đếm số trang slide 
  function counter(event) {
    var element = event.target;         // DOM element, in this example .owl-carousel
    var items = event.item.count;     // Number of items
    var item = event.item.index + 1;     // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items
    }
    $('#counter').html("(" + item + "/" + items + ")")
  }
});


$(document).ready(function () {
  $('#toggle').click(function () {
    $('.header-menu').slideToggle(400);
  });
});
