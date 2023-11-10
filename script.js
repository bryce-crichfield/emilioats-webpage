// Only enable navbar hiding on desktop
if ($(window).width() > 768) {
  const hideNavbar = () => {
    $(".navbar").css("top", "-65px");
  };

  const showNavbar = () => {
    $(".navbar").css("top", "0");
  };

  const navbarOnScroll = () => {
    const timeout = () => {
      console.log("timeout");
      if (!$(".navbar").is(":hover")) {
        hideNavbar();
      }
    };

    showNavbar();
    clearTimeout(timeout);
    setTimeout(timeout, 1000);
  };

  $(document).ready(() => {
    $(window).scroll(navbarOnScroll);
  });

  $(document).ready(() => {
    $(".navbar").mouseenter(showNavbar);
    $(".navbar").mouseleave(hideNavbar);
  });
}
