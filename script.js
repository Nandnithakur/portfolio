// Typing Effect
const roles = ["Software Developer", "Web Developer", "Android Enthusiast", "Backend Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  let currentRole = roles[roleIndex];
  typingElement.textContent = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();
