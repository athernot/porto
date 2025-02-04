// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle Navbar on Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksContainer = document.querySelector('.nav-links-container');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navLinksContainer.classList.toggle('active'); // Ensure container also toggles
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animations for Hero Section
gsap.from(".hero h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.5,
});

gsap.from(".hero p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1,
});

gsap.from(".hero .btn", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 1.5,
});

// Animations for About Section
gsap.from(".about h2", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: ".about"
});

gsap.from(".about p", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: ".about"
});

// Animations for Projects Section
gsap.from(".projects h2", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: ".projects"
});

gsap.from(".project-card", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: ".projects"
});

// Animations for Contact Section
gsap.from(".contact h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: ".contact"
});

gsap.from(".contact form", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: ".contact"
});