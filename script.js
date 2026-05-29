const text = "Web Developer | C++ Learner | Tech Enthusiast";
let i = 0;

function typeEffect() {
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
if (i < text.length) {
setTimeout(typeEffect, 80);
}
}

typeEffect();