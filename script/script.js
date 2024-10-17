// Toggle Mobile Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// JavaScript to switch between Product Details and FAQ
const productTab = document.getElementById("productTab");
const faqTab = document.getElementById("faqTab");
const productDetails = document.getElementById("productDetails");
const faqSection = document.getElementById("faqSection");

productTab.addEventListener("click", function () {
  productDetails.classList.remove("hidden");
  faqSection.classList.add("hidden");
  productTab.classList.add("active-tab");
  faqTab.classList.remove("active-tab");
});

faqTab.addEventListener("click", function () {
  productDetails.classList.add("hidden");
  faqSection.classList.remove("hidden");
  faqTab.classList.add("active-tab");
  productTab.classList.remove("active-tab");
});

// login& sign up
// DOM elements
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Switch to Sign Up Form
signupTab.addEventListener('click', function() {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
  signupTab.classList.add('border-yellow-500', 'font-bold');
  loginTab.classList.remove('border-yellow-500', 'font-bold');
});

// Switch to Login Form
loginTab.addEventListener('click', function() {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  loginTab.classList.add('border-yellow-500', 'font-bold');
  signupTab.classList.remove('border-yellow-500', 'font-bold');
});

// Toggle Forms via Links
switchToSignup.addEventListener('click', function() {
  signupTab.click();
});

switchToLogin.addEventListener('click', function() {
  loginTab.click();
});