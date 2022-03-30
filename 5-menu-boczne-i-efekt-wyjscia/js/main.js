$(document).ready(function () {
  $(".hamburger-lines").click(function () {
    $(".main-menu").toggleClass("open");

    $(".menu-text .close").toggleClass("open");
    // $('main-menu open').fadeToggle(1500)
    $(".menu-text").toggleClass("open");

    $(".main-menu-item a").click(function (e) {
      e.preventDefault();
      $("body").fadeOut(2000, function () {
        window.location.href = $(e.target).attr("href");
      });
    });
  });
});
