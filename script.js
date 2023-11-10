// Navbar Autohide is only enabled on screens larger than 768px
if (window.matchMedia("(min-width: 768px)").matches) {
  // Navbar Hides after Scrolling
  var prevScrollpos = window.pageYOffset;
  var timeout = null;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos != currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        // if hovering don't hide navbar
        if (!$(".navbar").is(":hover"))
        document.querySelector(".navbar").style.top = "-65px"; // adjust this value to match the height of your navbar
      }, 750);
    }
    else {
      document.querySelector(".navbar").style.top = "-65px"; // adjust this value to match the height of your navbar
      clearTimeout(timeout);
    }
    prevScrollpos = currentScrollPos;
  };

  // Navbar Shows on Hover
  $(document).ready(function () {
    $(".navbar").mouseenter(function () {
      $(this).css("top", "0");
    });

    $(".navbar").mouseleave(function () {
      $(this).css("top", "-65px"); // adjust this value to match the height of your navbar
    });
  });
}