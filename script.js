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

// // Select all elements with the 'animate' class
// const elements = document.querySelectorAll(".animate");

// // Define the Intersection Observer
// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     // If the element is in the viewport, add the 'run-animation' class
//     if (entry.isIntersecting) {
//       console.log("in viewport");
//       entry.target.classList.add("animation-typewriter");
//       // Stop observing the element so the animation only runs once
//       observer.unobserve(entry.target);
//     }
//   });
// });

// // Observe all elements
// elements.forEach((element) => {
//   observer.observe(element);
// });

var text = "Musician. Composer. Producer."
var i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();
