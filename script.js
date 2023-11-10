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
  if ($(window).width() < 768) return;
  $(window).scroll(navbarOnScroll);
});

$(document).ready(() => {
  if ($(window).width() < 768) return;
  $(".navbar").mouseenter(showNavbar);
  $(".navbar").mouseleave(hideNavbar);
});
