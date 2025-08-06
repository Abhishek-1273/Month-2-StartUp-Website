const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

document.querySelector(".contact-form form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent real form submission
    window.location.href = "success.html"; // Redirect to success page
});
