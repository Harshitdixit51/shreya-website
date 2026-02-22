// MENU TOGGLE
const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menu.onclick = () => {
  nav.classList.toggle("active");
};

// SMOOTH SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// SCROLL ANIMATION
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// SLIDER
let index = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.getElementById("slider");

setInterval(() => {
  index = (index + 1) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 3000);