// script.js
// This file provides basic interactivity for the portfolio layout.

// Wait for the DOM to finish loading before attaching event handlers.
document.addEventListener('DOMContentLoaded', () => {
  // Back to top button logic. Finds element with class `to-top` and sets
  // visibility based on scroll position. On click, smoothly scrolls to top.
  const toTopBtn = document.querySelector('.to-top');
  if (toTopBtn) {
    // Toggle visibility on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        toTopBtn.classList.add('visible');
      } else {
        toTopBtn.classList.remove('visible');
      }
    });
    // Smooth scroll to top when clicked
    toTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});