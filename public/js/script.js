// public/js/script.js
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});