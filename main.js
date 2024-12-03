// Get the element with the class "text"
const typedTextElement = document.querySelector('.text');

// Create a new Typed instance
const typed = new Typed(typedTextElement, {
  strings: ['App Developer', 'Web Developer', 'UI/UX Designer'], // Text to be typed
  typeSpeed: 40, // Speed of typing
  backSpeed: 40, // Speed of backspacing
  loop: true, // Loop the animation
  smartBackspace: true, // Backspace through the entire string
});

// You can also add more options to customize the animation
// Refer to the Typed.js documentation for more options
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");
  var hoverArea = document.querySelector(".hoverArea");
  let lastScrollPosition = 0;
  const navbarHide = 50;

  function hideNavbar() {
    header.classList.add("hidden");
  }

  function showNavbar() {
    header.classList.remove("hidden");
  }

  window.addEventListener(
    "scroll",
    function () {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > lastScrollPosition && st > navbarHide) {
        hideNavbar();
      } else if (st < lastScrollPosition) {
        hideNavbar();
      }

      if (st === 0) {
        showNavbar();
      }
      lastScrollPosition = st <= 0 ? 0 : st;
    },
    false
  );

  hoverArea.addEventListener("mouseenter", function () {
    showNavbar();
  });

  header.addEventListener("mouseleave", function (event) {
    if (event.clientY > header.offsetHeight) {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > navbarHide) {
        hideNavbar();
      }
    }
  });

  header.addEventListener("mousemove", function () {
    showNavbar();
  });
});