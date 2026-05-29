const text = [
  "Frontend Developer",
  "C++ Programmer",
  "Future Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

// Typing Effect
(function type() {

  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  const typing = document.querySelector(".typing");

  if (typing) {
    typing.textContent = letter;
  }

  if (letter.length === currentText.length) {

    count++;
    index = 0;

    setTimeout(type, 1200);

  } else {

    setTimeout(type, 100);

  }

})();

// Smooth Card Animation
window.addEventListener("load", () => {

  const card = document.querySelector(".card");

  if (card) {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }

});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 20) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.boxShadow = "none";
  }

});
