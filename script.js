// // Navbar Autohide
// var prevScrollpos = window.pageYOffset;
// var timeout = null;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos != currentScrollPos) {
//         document.querySelector(".navbar").style.top = "0";
//         clearTimeout(timeout);
//         timeout = setTimeout(function() {
//             document.querySelector(".navbar").style.top = "-65px"; // adjust this value to match the height of your navbar
//         }, 750);
//     } 
//     else {
//         document.querySelector(".navbar").style.top = "-65px"; // adjust this value to match the height of your navbar
//         clearTimeout(timeout);
//     }
//     prevScrollpos = currentScrollPos;
// };

// $(document).ready(function () {
//   $(".navbar").mouseenter(function () {
//     $(this).css("top", "0");
//   });

//   $(".navbar").mouseleave(function () {
//     $(this).css("top", "-65px"); // adjust this value to match the height of your navbar
//   });
// });