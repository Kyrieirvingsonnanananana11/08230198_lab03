/* ===========================================================
   Portfolio Enhancement Script (Lab 03)
   Author: Sonam Phuntsho
   =========================================================== */

// ----------------------------
// 1️⃣ Basic JavaScript Setup
// ----------------------------
const studentName = "Sonam Phuntsho";
const currentYear = new Date().getFullYear();
console.log(`Welcome to ${studentName}'s Portfolio!`);

// ----------------------------
// 2️⃣ Dynamic Greeting Message
// ----------------------------
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning 🌅";
  else if (hour < 18) return "Good Afternoon ☀️";
  else return "Good Evening 🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-text h3");
  if (hero) hero.textContent = `${getGreeting()}, It's Me`;
});

// ----------------------------
// 3️⃣ Dynamic Footer Year
// ----------------------------
const footer = document.querySelector("footer");
if (footer) footer.innerHTML = `&copy; ${currentYear} Sonam Phuntsho | All Rights Reserved.`;

// ----------------------------
// 4️⃣ Hamburger Menu Toggle (Mobile)
// ----------------------------
const hamburger = document.querySelector(".hamburger");
const menuBox = document.querySelector(".menu-box");
if (hamburger && menuBox) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuBox.classList.toggle("show");
  });
}

// ----------------------------
// 5️⃣ Scroll Reveal Animation (Education, Projects, Skills)
// ----------------------------
const scrollElements = document.querySelectorAll(".education-section, .project, .skill");
function revealOnScroll() {
  scrollElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("show", "visible");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ----------------------------
// 6️⃣ Contact Form Validation
// ----------------------------
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("⚠️ Please fill in all fields before submitting!");
      e.preventDefault();
    } else {
      alert("✅ Thank you! Your message has been sent successfully.");
    }
  });
}

// ----------------------------
// 7️⃣ Random Motivational Quote
// ----------------------------
const quotes = [
  "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "The future belongs to those who prepare for it today. – Malcolm X",
  "Peace of mind is the highest form of wealth.",
  "Teaching is the profession that teaches all other professions."
];

const quoteBox = document.createElement("p");
quoteBox.className = "quote-box";
quoteBox.style.marginTop = "15px";
quoteBox.style.fontStyle = "italic";

if (document.querySelector(".hero-text")) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteBox.textContent = `"${randomQuote}"`;
  document.querySelector(".hero-text").appendChild(quoteBox);
}
