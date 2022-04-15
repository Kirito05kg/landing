let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
});